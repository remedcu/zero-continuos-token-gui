import React, { useState, useEffect, useCallback } from 'react'
import {
  useOpenOrder,
  useClaimOrder,
  useApprove,
  useAllowance,
  useClaimOrderReceiptAmount,
  useWaitForBatchToFinish,
} from 'lib/web3-contracts'
import { bigNum } from 'lib/utils'
import ConvertSteps from 'components/ConvertSteps/ConvertSteps'

function ManageConversion({ toBonded, fromAmount, handleReturnHome }) {
  const openOrder = useOpenOrder()
  const claimOrder = useClaimOrder()
  const waitForBatch = useWaitForBatchToFinish()
  const claimOrderReceiptAmount = useClaimOrderReceiptAmount()
  const changeAllowance = useApprove()
  const getAllowance = useAllowance()
  const [conversionSteps, setConversionSteps] = useState([])
  const [convertedTotal, setConvertedTotal] = useState(bigNum(-1))

  const updateConvertedValue = useCallback(
    async hash => {
      try {
        const amount = await claimOrderReceiptAmount(hash)

        setConvertedTotal(amount)
      } catch (err) {
        throw new Error(err)
      }
    },
    [claimOrderReceiptAmount]
  )

  useEffect(() => {
    let cancelled = false

    // Interacting with the bonding curve involves 2, 3 or 4 transactions (depending on the direction and state of allowance):
    // 1. Reset approval (If we're converting COLLATERAL -> BONDED, an allowance was previously set but abandoned)
    // 2. Raise approval (If we're converting COLLATERAL -> BONDED, the current allowance is not high enough)
    // 3. Open a buy order
    // 4. Claim the order
    const createConvertSteps = async () => {
      let openOrderHash
      let steps = []

      // First we check for allowance if the direction is COLLATERAL -> BONDED
      if (toBonded) {
        const allowance = await getAllowance()

        // and if we need more, add a step to ask for an approval
        if (allowance.lt(bigNum(fromAmount))) {
          steps.unshift([
            'Raise approval',
            {
              onTxCreated: () => changeAllowance(fromAmount),
              showDesc: true
            },
          ])

          // Then there's the case when a user has an allowance set to the market maker contract
          // but wants to convert even more tokens this time. When dealing with this case
          // we want to first prepend a transaction to reset the allowance back to zero
          // (before raising it in the next transaction from above).
          if (!allowance.isZero()) {
            steps.unshift([
              'Reset approval',
              {
                onTxCreated: () => changeAllowance(0),
                showDesc: true
              },
            ])
          }
        }
      }

      // Next add the open order
      steps.push([
        `Create ${toBonded ? 'buy' : 'sell'} order`,
        {
          onTxCreated: () => openOrder(fromAmount, toBonded),

          // We need to store a reference to the hash so we can use it in the following step
          onHashCreated: hash => {
            openOrderHash = hash
          },
          showDesc: true
        },
      ])

      steps.push([
        'Wait for batch to finish',
        {
          onWaitCondition: () => waitForBatch(openOrderHash),
          showDesc: false
        },
      ])
      // And finally the claim order
      steps.push([
        'Claim order',
        {
          onTxCreated: () => claimOrder(openOrderHash, toBonded),
          onTxMined: hash => updateConvertedValue(hash),
          showDesc: true
        },
      ])

      // Update state to reflect the correct amount of steps
      // Show loader for a small amount of time to provide a smooth visual experience
      setTimeout(() => {
        if (!cancelled) {
          setConversionSteps(steps)
        }
      }, 900)
    }

    createConvertSteps()

    return () => {
      cancelled = true
    }
  }, [
    changeAllowance,
    claimOrder,
    fromAmount,
    getAllowance,
    openOrder,
    toBonded,
    updateConvertedValue,
  ])

  return (
    <>
      {conversionSteps.length > 0 ? (
        <ConvertSteps
          steps={conversionSteps}
          toBonded={toBonded}
          fromAmount={fromAmount}
          convertedTotal={convertedTotal}
          onReturnHome={handleReturnHome}
        />
      ) : (
        <div
          css={`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
          `}
        >
        </div>
      )}
    </>
  )
}

export default ManageConversion
