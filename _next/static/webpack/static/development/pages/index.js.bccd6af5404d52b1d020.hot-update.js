webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/web3-contracts.js":
/*!*******************************!*\
  !*** ./lib/web3-contracts.js ***!
  \*******************************/
/*! exports provided: useContract, useKnownContract, useTokenDecimals, useTokenBalance, useBondingCurvePrice, useAllowance, useApprove, useOpenOrder, useClaimOrder, useWaitForBatchToFinish, useClaimOrderReceiptAmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContract", function() { return useContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKnownContract", function() { return useKnownContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTokenDecimals", function() { return useTokenDecimals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTokenBalance", function() { return useTokenBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBondingCurvePrice", function() { return useBondingCurvePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllowance", function() { return useAllowance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApprove", function() { return useApprove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOpenOrder", function() { return useOpenOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useClaimOrder", function() { return useClaimOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWaitForBatchToFinish", function() { return useWaitForBatchToFinish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useClaimOrderReceiptAmount", function() { return useClaimOrderReceiptAmount; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* harmony import */ var lib_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/environment */ "./lib/environment.js");
/* harmony import */ var lib_environment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lib_environment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _known_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./known-contracts */ "./lib/known-contracts.js");
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet */ "./lib/wallet.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./lib/utils.js");
/* harmony import */ var delay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! delay */ "./node_modules/delay/index.js");
/* harmony import */ var delay__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(delay__WEBPACK_IMPORTED_MODULE_8__);








 // See https://fundraising.aragon.black/components/bonding-curve#pricing-algorithm

var MAINNET_CONNECTOR_WEIGHT = 250000;
var RINKEBY_CONNECTOR_WEIGHT = 33333;
var RETRY_EVERY = 1000;
var BATCH_SIZE = 10;

var calculateBatchId = function calculateBatchId(blockNumber) {
  return Math.floor(blockNumber / BATCH_SIZE) * BATCH_SIZE;
};

var connectorWeights = new Map([['MAINNET_CONNECTOR_WEIGHT', MAINNET_CONNECTOR_WEIGHT], ['RINKEBY_CONNECTOR_WEIGHT', RINKEBY_CONNECTOR_WEIGHT]]);
var contractsCache = new Map();
var tokenDecimals = new Map([['ANT', 18], ['ANJ', 18]]);

function getConnectorWeight() {
  // FIXME: return a constant for now
  return 400000; // const chainId = environment('CHAIN_ID')
  // return connectorWeights.get(
  //   chainId === '1' ? 'MAINNET_CONNECTOR_WEIGHT' : 'RINKEBY_CONNECTOR_WEIGHT'
  // )
}

function useContract(address, abi) {
  var signer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var _useWalletAugmented = Object(_wallet__WEBPACK_IMPORTED_MODULE_6__["useWalletAugmented"])(),
      ethersProvider = _useWalletAugmented.ethersProvider;

  if (!address || !ethersProvider) {
    return null;
  }

  if (contractsCache.has(address)) {
    return contractsCache.get(address);
  }

  var contract = new ethers__WEBPACK_IMPORTED_MODULE_3__["Contract"](address, abi, signer ? ethersProvider.getSigner() : ethersProvider);
  contractsCache.set(address, contract);
  return contract;
}
function useKnownContract(name) {
  var signer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var _getKnownContract = Object(_known_contracts__WEBPACK_IMPORTED_MODULE_5__["getKnownContract"])(name),
      _getKnownContract2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getKnownContract, 2),
      address = _getKnownContract2[0],
      abi = _getKnownContract2[1];

  return useContract(address, abi, signer);
}
function useTokenDecimals(symbol) {
  return tokenDecimals.get(symbol);
}
function useTokenBalance(symbol) {
  var address = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var _useWalletAugmented2 = Object(_wallet__WEBPACK_IMPORTED_MODULE_6__["useWalletAugmented"])(),
      account = _useWalletAugmented2.account;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["bigNum"])(-1)),
      balance = _useState[0],
      setBalance = _useState[1];

  var tokenContract = useKnownContract("TOKEN_".concat(symbol));
  var cancelBalanceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var updateBalance = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var cancelled = false;

    if (cancelBalanceUpdate.current) {
      cancelBalanceUpdate.current();
      cancelBalanceUpdate.current = null;
    }

    if (!account && !address || !tokenContract) {
      setBalance(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["bigNum"])(-1));
      return;
    }

    cancelBalanceUpdate.current = function () {
      cancelled = true;
    };

    var requestedAddress = address || account;
    tokenContract.balanceOf(requestedAddress).then(function (balance) {
      if (!cancelled) {
        setBalance(balance);
      }
    });
  }, [account, address, tokenContract]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // Always update the balance if updateBalance() has changed
    updateBalance();

    if (!account && !address || !tokenContract) {
      return;
    }

    var onTransfer = function onTransfer(from, to, value) {
      if (from === account || to === account || from === address || to === address) {
        updateBalance();
      }
    };

    tokenContract.on('Transfer', onTransfer);
    return function () {
      tokenContract.removeListener('Transfer', onTransfer);
    };
  }, [account, address, tokenContract, updateBalance]);
  return balance;
}
function useBondingCurvePrice(amount) {
  var forwards = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["bigNum"])(-1)),
      price = _useState3[0],
      setPrice = _useState3[1];

  var anjContract = useKnownContract('TOKEN_ANJ');
  var bancorContract = useKnownContract('BANCOR_FORMULA');

  var _getKnownContract3 = Object(_known_contracts__WEBPACK_IMPORTED_MODULE_5__["getKnownContract"])('BONDING_CURVE_TREASURY'),
      _getKnownContract4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getKnownContract3, 1),
      treasuryAddress = _getKnownContract4[0];

  var antTreasuryBalance = useTokenBalance('ANT', treasuryAddress);
  var connectorWeight = getConnectorWeight();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var cancelled = false;
    var retryTimer;

    if (!anjContract || antTreasuryBalance.eq(-1) || !bancorContract) {
      return;
    }

    var getSalePrice = function getSalePrice() {
      var anjTotalSupply, salePrice;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getSalePrice$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(anjContract.totalSupply());

            case 4:
              anjTotalSupply = _context.sent;
              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(forwards ? bancorContract.calculatePurchaseReturn(anjTotalSupply, antTreasuryBalance, connectorWeight, amount) : bancorContract.calculateSaleReturn(anjTotalSupply, antTreasuryBalance, connectorWeight, amount));

            case 7:
              salePrice = _context.sent;

              if (!cancelled) {
                setLoading(false);
                setPrice(salePrice);
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);

              if (!cancelled) {
                retryTimer = setTimeout(getSalePrice, RETRY_EVERY);
              }

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 11]], Promise);
    };

    getSalePrice();
    return function () {
      cancelled = true;
      clearTimeout(retryTimer);
    };
  }, [amount, anjContract, antTreasuryBalance, bancorContract, connectorWeight, forwards]);
  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      loading: loading,
      price: price
    };
  }, [loading, price]);
}
function useAllowance() {
  var _useWalletAugmented3 = Object(_wallet__WEBPACK_IMPORTED_MODULE_6__["useWalletAugmented"])(),
      account = _useWalletAugmented3.account;

  var antContract = useKnownContract('TOKEN_ANT');

  var _getKnownContract5 = Object(_known_contracts__WEBPACK_IMPORTED_MODULE_5__["getKnownContract"])('MARKET_MAKER'),
      _getKnownContract6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getKnownContract5, 1),
      marketMakerAddress = _getKnownContract6[0];

  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (antContract) {
              _context2.next = 3;
              break;
            }

            throw new Error('ANT contract not loaded');

          case 3:
            _context2.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(antContract.allowance(account, marketMakerAddress));

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            throw new Error(_context2.t0.message);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 8]], Promise);
  }, [account, antContract, marketMakerAddress]);
}
function useApprove() {
  var antContract = useKnownContract('TOKEN_ANT');

  var _getKnownContract7 = Object(_known_contracts__WEBPACK_IMPORTED_MODULE_5__["getKnownContract"])('MARKET_MAKER'),
      _getKnownContract8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getKnownContract7, 1),
      marketMakerAddress = _getKnownContract8[0];

  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function _callee2(amount) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            if (antContract) {
              _context3.next = 3;
              break;
            }

            throw new Error('ANT contract not loaded');

          case 3:
            _context3.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(antContract.approve(marketMakerAddress, amount));

          case 5:
            return _context3.abrupt("return", _context3.sent);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            throw new Error(_context3.t0.message);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 8]], Promise);
  }, [antContract, marketMakerAddress]);
} // Convert ANT to ANJ action

function useOpenOrder() {
  var fundraisingContract = useKnownContract('FUNDRAISING');

  var _getKnownContract9 = Object(_known_contracts__WEBPACK_IMPORTED_MODULE_5__["getKnownContract"])('TOKEN_ANT'),
      _getKnownContract10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getKnownContract9, 1),
      antAddress = _getKnownContract10[0];

  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function _callee3(amount) {
    var toAnj,
        _args4 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            toAnj = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : true;
            _context4.prev = 1;

            if (fundraisingContract) {
              _context4.next = 4;
              break;
            }

            throw new Error('Fundraising contract not loaded');

          case 4:
            _context4.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(toAnj ? fundraisingContract.openBuyOrder(antAddress, amount, {
              gasLimit: 650000,
              value: 0
            }) : fundraisingContract.openSellOrder(antAddress, amount, {
              gasLimit: 850000
            }));

          case 6:
            return _context4.abrupt("return", _context4.sent);

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            throw new Error(_context4.t0.message);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[1, 9]], Promise);
  }, [antAddress, fundraisingContract]);
}
function useClaimOrder() {
  var _useWalletAugmented4 = Object(_wallet__WEBPACK_IMPORTED_MODULE_6__["useWalletAugmented"])(),
      account = _useWalletAugmented4.account,
      ethersProvider = _useWalletAugmented4.ethersProvider;

  var fundraisingContract = useKnownContract('FUNDRAISING');

  var _getKnownContract11 = Object(_known_contracts__WEBPACK_IMPORTED_MODULE_5__["getKnownContract"])('TOKEN_ANT'),
      _getKnownContract12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getKnownContract11, 1),
      antAddress = _getKnownContract12[0];

  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function _callee4(openOrderTransactionHash) {
    var toAnj,
        _await$ethersProvider,
        blockNumber,
        batchId,
        _args5 = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee4$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            toAnj = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : true;
            _context5.prev = 1;

            if (fundraisingContract) {
              _context5.next = 4;
              break;
            }

            throw new Error('Fundraising contract error');

          case 4:
            _context5.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(ethersProvider.getTransaction(openOrderTransactionHash));

          case 6:
            _await$ethersProvider = _context5.sent;
            blockNumber = _await$ethersProvider.blockNumber;
            batchId = calculateBatchId(blockNumber); // We claim the buy order, with the blockNumber of the emitted open order

            _context5.next = 11;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(toAnj ? fundraisingContract.claimBuyOrder(account, batchId, antAddress, {
              gasLimit: 500000
            }) : fundraisingContract.claimSellOrder(account, batchId, antAddress, {
              gasLimit: 500000
            }));

          case 11:
            return _context5.abrupt("return", _context5.sent);

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](1);
            throw new Error(_context5.t0);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[1, 14]], Promise);
  }, [account, antAddress, ethersProvider, fundraisingContract]);
}
function useWaitForBatchToFinish() {
  var _useWalletAugmented5 = Object(_wallet__WEBPACK_IMPORTED_MODULE_6__["useWalletAugmented"])(),
      ethersProvider = _useWalletAugmented5.ethersProvider;

  var fundraisingContract = useKnownContract('FUNDRAISING');
  var marketMakerContract = useKnownContract('MARKET_MAKER');
  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function _callee5(openOrderTransactionHash) {
    var finished, _await$ethersProvider2, blockNumber, batchId, currentBatchId;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee5$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;

            if (fundraisingContract) {
              _context6.next = 3;
              break;
            }

            throw new Error('Fundraising contract error');

          case 3:
            // Wait for transaction be deep enough as the batch size
            finished = false;

          case 4:
            _context6.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(ethersProvider.getTransaction(openOrderTransactionHash));

          case 6:
            _await$ethersProvider2 = _context6.sent;
            blockNumber = _await$ethersProvider2.blockNumber;
            batchId = calculateBatchId(blockNumber);
            _context6.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
            _context6.next = 12;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(marketMakerContract.getCurrentBatchId());

          case 12:
            _context6.t1 = _context6.sent;
            _context6.next = 15;
            return _context6.t0.awrap.call(_context6.t0, _context6.t1);

          case 15:
            currentBatchId = _context6.sent;
            finished = batchId < currentBatchId.toNumber();

            if (finished) {
              _context6.next = 20;
              break;
            }

            _context6.next = 20;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(delay__WEBPACK_IMPORTED_MODULE_8___default()(15 * 1000));

          case 20:
            if (!finished) {
              _context6.next = 4;
              break;
            }

          case 21:
            _context6.next = 26;
            break;

          case 23:
            _context6.prev = 23;
            _context6.t2 = _context6["catch"](0);
            throw new Error(_context6.t2);

          case 26:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 23]], Promise);
  }, [ethersProvider, fundraisingContract, marketMakerContract]);
}
function useClaimOrderReceiptAmount() {
  var _useWalletAugmented6 = Object(_wallet__WEBPACK_IMPORTED_MODULE_6__["useWalletAugmented"])(),
      ethersProvider = _useWalletAugmented6.ethersProvider,
      account = _useWalletAugmented6.account;

  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function _callee6(hash) {
    var abi, _getKnownContract13, _getKnownContract14, antAddress, _getKnownContract15, _getKnownContract16, anjAddress, abiInterface, transactionReceipt, _transactionReceipt$l, _transactionReceipt$l2, parsedTransferLog, amount;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee6$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            abi = Object(_known_contracts__WEBPACK_IMPORTED_MODULE_5__["getKnownAbi"])('TOKEN_ANT');
            _getKnownContract13 = Object(_known_contracts__WEBPACK_IMPORTED_MODULE_5__["getKnownContract"])('TOKEN_ANT'), _getKnownContract14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getKnownContract13, 1), antAddress = _getKnownContract14[0];
            _getKnownContract15 = Object(_known_contracts__WEBPACK_IMPORTED_MODULE_5__["getKnownContract"])('TOKEN_ANJ'), _getKnownContract16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getKnownContract15, 1), anjAddress = _getKnownContract16[0];
            abiInterface = new ethers__WEBPACK_IMPORTED_MODULE_3__["utils"].Interface(abi);
            _context7.prev = 4;
            _context7.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(ethersProvider.getTransactionReceipt(hash));

          case 7:
            transactionReceipt = _context7.sent;
            debugger;
            _transactionReceipt$l = transactionReceipt.logs.filter(function (log) {
              return log.address === antAddress || log.address === anjAddress;
            }).map(function (log) {
              return abiInterface.parseLog(log);
            }).filter(function (log) {
              return log.args[1] === account;
            }), _transactionReceipt$l2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_transactionReceipt$l, 1), parsedTransferLog = _transactionReceipt$l2[0];
            amount = parsedTransferLog.args.value;
            return _context7.abrupt("return", amount ? amount : null);

          case 14:
            _context7.prev = 14;
            _context7.t0 = _context7["catch"](4);
            throw new Error(_context7.t0);

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[4, 14]], Promise);
  }, [ethersProvider, account]);
}

/***/ })

})
//# sourceMappingURL=index.js.bccd6af5404d52b1d020.hot-update.js.map