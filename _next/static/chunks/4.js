(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@web3-react/abstract-connector/dist/abstract-connector.esm.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@web3-react/abstract-connector/dist/abstract-connector.esm.js ***!
  \************************************************************************************/
/*! exports provided: AbstractConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractConnector", function() { return AbstractConnector; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/types */ "./node_modules/@web3-react/types/dist/types.esm.js");



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var AbstractConnector =
/*#__PURE__*/
function (_EventEmitter) {
  _inheritsLoose(AbstractConnector, _EventEmitter);

  function AbstractConnector(_temp) {
    var _this;

    var _ref = _temp === void 0 ? {} : _temp,
        supportedChainIds = _ref.supportedChainIds;

    _this = _EventEmitter.call(this) || this;
    _this.supportedChainIds = supportedChainIds;
    return _this;
  }

  var _proto = AbstractConnector.prototype;

  _proto.emitUpdate = function emitUpdate(update) {
    if (true) {
      console.log("Emitting '" + _web3_react_types__WEBPACK_IMPORTED_MODULE_1__["ConnectorEvent"].Update + "' with payload", update);
    }

    this.emit(_web3_react_types__WEBPACK_IMPORTED_MODULE_1__["ConnectorEvent"].Update, update);
  };

  _proto.emitError = function emitError(error) {
    if (true) {
      console.log("Emitting '" + _web3_react_types__WEBPACK_IMPORTED_MODULE_1__["ConnectorEvent"].Error + "' with payload", error);
    }

    this.emit(_web3_react_types__WEBPACK_IMPORTED_MODULE_1__["ConnectorEvent"].Error, error);
  };

  _proto.emitDeactivate = function emitDeactivate() {
    if (true) {
      console.log("Emitting '" + _web3_react_types__WEBPACK_IMPORTED_MODULE_1__["ConnectorEvent"].Deactivate + "'");
    }

    this.emit(_web3_react_types__WEBPACK_IMPORTED_MODULE_1__["ConnectorEvent"].Deactivate);
  };

  return AbstractConnector;
}(events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]);


//# sourceMappingURL=abstract-connector.esm.js.map


/***/ }),

/***/ "./node_modules/@web3-react/frame-connector/dist/frame-connector.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@web3-react/frame-connector/dist/frame-connector.esm.js ***!
  \******************************************************************************/
/*! exports provided: FrameConnector, UserRejectedRequestError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameConnector", function() { return FrameConnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRejectedRequestError", function() { return UserRejectedRequestError; });
/* harmony import */ var _web3_react_abstract_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/abstract-connector */ "./node_modules/@web3-react/abstract-connector/dist/abstract-connector.esm.js");
/* harmony import */ var eth_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eth-provider */ "./node_modules/eth-provider/browser.js");
/* harmony import */ var eth_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(eth_provider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");




function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var UserRejectedRequestError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(UserRejectedRequestError, _Error);

  function UserRejectedRequestError() {
    var _this;

    _this = _Error.call(this) || this;
    _this.name = _this.constructor.name;
    _this.message = 'The user rejected the request.';
    return _this;
  }

  return UserRejectedRequestError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var FrameConnector = /*#__PURE__*/function (_AbstractConnector) {
  _inheritsLoose(FrameConnector, _AbstractConnector);

  function FrameConnector(kwargs) {
    var _this2;

    !(kwargs.supportedChainIds.length === 1) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'This connector only supports 1 chainId at the moment.') : undefined : void 0;
    _this2 = _AbstractConnector.call(this, kwargs) || this;
    _this2.handleNetworkChanged = _this2.handleNetworkChanged.bind(_assertThisInitialized(_this2));
    _this2.handleChainChanged = _this2.handleChainChanged.bind(_assertThisInitialized(_this2));
    _this2.handleAccountsChanged = _this2.handleAccountsChanged.bind(_assertThisInitialized(_this2));
    _this2.handleClose = _this2.handleClose.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  var _proto = FrameConnector.prototype;

  _proto.handleNetworkChanged = function handleNetworkChanged(networkId) {
    if (true) {
      console.log("Handling 'networkChanged' event with payload", networkId);
    }

    this.emitUpdate({
      provider: this.provider,
      chainId: networkId
    });
  };

  _proto.handleChainChanged = function handleChainChanged(chainId) {
    if (true) {
      console.log("Handling 'chainChanged' event with payload", chainId);
    }

    this.emitUpdate({
      chainId: chainId
    });
  };

  _proto.handleAccountsChanged = function handleAccountsChanged(accounts) {
    if (true) {
      console.log("Handling 'accountsChanged' event with payload", accounts);
    }

    this.emitUpdate({
      account: accounts.length === 0 ? null : accounts[0]
    });
  };

  _proto.handleClose = function handleClose(code, reason) {
    if (true) {
      console.log("Handling 'close' event with payload", code, reason);
    }

    this.emitDeactivate();
  };

  _proto.activate = function activate() {
    try {
      var _this4 = this;

      if (!_this4.provider) {
        _this4.provider = eth_provider__WEBPACK_IMPORTED_MODULE_1___default()('frame');
      }

      _this4.provider.on('networkChanged', _this4.handleNetworkChanged).on('chainChanged', _this4.handleChainChanged).on('accountsChanged', _this4.handleAccountsChanged).on('close', _this4.handleClose);

      return Promise.resolve(_this4.provider.enable().then(function (accounts) {
        return accounts[0];
      })["catch"](function (error) {
        if (error && error.code === 4001) {
          throw new UserRejectedRequestError();
        } else {
          throw error;
        }
      })).then(function (account) {
        return {
          provider: _this4.provider,
          account: account
        };
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getProvider = function getProvider() {
    try {
      var _this6 = this;

      return Promise.resolve(_this6.provider);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getChainId = function getChainId() {
    try {
      var _this8 = this;

      return Promise.resolve(_this8.provider.send('eth_chainId'));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getAccount = function getAccount() {
    try {
      var _this10 = this;

      return Promise.resolve(_this10.provider.send('eth_accounts').then(function (accounts) {
        return accounts[0];
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.deactivate = function deactivate() {
    this.provider.removeListener('networkChanged', this.handleNetworkChanged).removeListener('chainChanged', this.handleChainChanged).removeListener('accountsChanged', this.handleAccountsChanged).removeListener('close', this.handleClose);
  };

  return FrameConnector;
}(_web3_react_abstract_connector__WEBPACK_IMPORTED_MODULE_0__["AbstractConnector"]);


//# sourceMappingURL=frame-connector.esm.js.map


/***/ }),

/***/ "./node_modules/eth-provider/ConnectionManager/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/eth-provider/ConnectionManager/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js")

const dev = "development" === 'development'

class ConnectionManager extends EventEmitter {
  constructor (connections, targets, options) {
    super()
    this.targets = targets
    this.connections = connections
    this.connected = false
    this.status = 'loading'
    this.interval = options.interval || 5000
    this.name = options.name || 'default'
    this.inSetup = true
    this.connect()
  }

  connect (index = 0) {
    if (dev && index === 0) console.log(`\n\n\n\nA connection cycle started for provider with name: ${this.name}`)

    if (this.connection && this.connection.status === 'connected' && index >= this.connection.index) {
      if (dev) console.log('Stopping connection cycle becasuse we\'re already connected to a higher priority provider')
    } else if (this.targets.length === 0) {
      if (dev) console.log('No valid targets supplied')
    } else {
      const { protocol, location } = this.targets[index]
      this.connection = this.connections[protocol](location)

      this.connection.on('error', err => {
        if (!this.connected) return this.connectionError(index, err)
        if (this.listenerCount('error')) return this.emit('error', err)
        console.warn('eth-provider - Uncaught connection error: ' + err.message)
      })

      this.connection.on('close', (summary) => {
        this.connected = false
        this.emit('close')
        if (!this.closing) this.refresh()
      })

      this.connection.on('connect', () => {
        this.connection.target = this.targets[index]
        this.connection.index = index
        this.targets[index].status = this.connection.status
        this.connected = true
        this.inSetup = false
        if (dev) console.log('Successfully connected to: ' + this.targets[index].location)
        this.emit('connect')
      })

      this.connection.on('data', data => this.emit('data', data))
      this.connection.on('payload', payload => this.emit('payload', payload))
    }
  }

  refresh (interval = this.interval) {
    if (dev) console.log(`Reconnect queued for ${(interval / 1000).toFixed(2)}s in the future`)
    clearTimeout(this.connectTimer)
    this.connectTimer = setTimeout(() => this.connect(), interval)
  }

  connectionError (index, err) {
    this.targets[index].status = err
    if (this.targets.length - 1 === index) {
      this.inSetup = false
      if (dev) console.warn('eth-provider unable to connect to any targets, view connection cycle summary: ', this.targets)
      this.refresh()
    } else { // Not last target, move on the next connection option
      this.connect(++index)
    }
  }

  close () {
    this.closing = true
    if (this.connection) {
      this.connection.close() // Let event bubble from here
    } else {
      this.emit('close')
    }
    clearTimeout(this.connectTimer)
  }

  error (payload, message, code = -1) {
    this.emit('payload', { id: payload.id, jsonrpc: payload.jsonrpc, error: { message, code } })
  }

  send (payload) {
    if (this.inSetup) {
      setTimeout(() => this.send(payload), 100)
    } else if (this.connection.closed) {
      this.error(payload, 'Not connected')
    } else {
      this.connection.send(payload)
    }
  }
}

module.exports = ConnectionManager


/***/ }),

/***/ "./node_modules/eth-provider/browser.js":
/*!**********************************************!*\
  !*** ./node_modules/eth-provider/browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const resolve = __webpack_require__(/*! ./resolve */ "./node_modules/eth-provider/resolve/index.js")
const provider = __webpack_require__(/*! ./provider */ "./node_modules/eth-provider/provider/index.js")
const presets = __webpack_require__(/*! ./presets */ "./node_modules/eth-provider/presets/index.js")

const injected = {
  ethereum: typeof window !== 'undefined' && typeof window.ethereum !== 'undefined' ? window.ethereum : null,
  web3: typeof window !== 'undefined' && typeof window.web3 !== 'undefined' ? window.web3.currentProvider : null
}
const ws = typeof window !== 'undefined' && typeof window.WebSocket !== 'undefined' ? window.WebSocket : null
const XHR = typeof window !== 'undefined' && typeof window.XMLHttpRequest !== 'undefined' ? window.XMLHttpRequest : null

if (injected.ethereum) injected.ethereum.__isProvider = true

const connections = {
  injected: injected.ethereum || __webpack_require__(/*! ./connections/injected */ "./node_modules/eth-provider/connections/injected.js")(injected.web3),
  ipc: __webpack_require__(/*! ./connections/unavailable */ "./node_modules/eth-provider/connections/unavailable.js")('IPC connections are unavliable in the browser'),
  ws: __webpack_require__(/*! ./connections/ws */ "./node_modules/eth-provider/connections/ws.js")(ws),
  http: __webpack_require__(/*! ./connections/http */ "./node_modules/eth-provider/connections/http.js")(XHR)
}

module.exports = (targets = ['injected', 'frame'], options = {}) => provider(connections, resolve(targets, presets), options)


/***/ }),

/***/ "./node_modules/eth-provider/connections/http.js":
/*!*******************************************************!*\
  !*** ./node_modules/eth-provider/connections/http.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js")
const uuid = __webpack_require__(/*! uuid/v4 */ "./node_modules/eth-provider/node_modules/uuid/v4.js")

const dev = "development" === 'development'

let XHR

class HTTPConnection extends EventEmitter {
  constructor (_XHR, url, options) {
    super()
    XHR = _XHR
    this.connected = false
    this.subscriptions = false
    this.status = 'loading'
    this.url = url
    this.pollId = uuid()
    setTimeout(() => this.create(), 0)
  }

  create () {
    if (!XHR) return this.emit('error', new Error('No HTTP transport available'))
    this.on('error', () => { if (this.connected) this.close() })
    this.init()
  }

  init () {
    this.send({ jsonrpc: '2.0', method: 'eth_syncing', params: [], id: 1 }, (err, response) => {
      if (err) return this.emit('error', err)
      this.send({ jsonrpc: '2.0', id: 1, method: 'eth_pollSubscriptions', params: [this.pollId, 'immediate'] }, (err, response) => {
        if (!err) {
          this.subscriptions = true
          this.pollSubscriptions()
        }
        this.connected = true
        this.emit('connect')
      })
    })
  }

  pollSubscriptions () {
    this.send({ jsonrpc: '2.0', id: 1, method: 'eth_pollSubscriptions', params: [this.pollId] }, (err, result) => {
      if (err) {
        this.subscriptionTimeout = setTimeout(() => this.pollSubscriptions(), 10000)
        return this.emit('error', err)
      } else {
        if (!this.closed) this.subscriptionTimeout = this.pollSubscriptions()
        if (result) {
          result.map(p => {
            let parse
            try { parse = JSON.parse(p) } catch (e) { parse = false }
            return parse
          }).filter(n => n).forEach(p => this.emit('payload', p))
        }
      }
    })
  }

  close () {
    if (dev) console.log('Closing HTTP connection')
    this.closed = true
    this.emit('close')
    clearTimeout(this.subscriptionTimeout)
    this.removeAllListeners()
  }

  filterStatus (res) {
    if (res.status >= 200 && res.status < 300) return res
    const error = new Error(res.statusText)
    error.res = res
    throw error.message
  }

  error (payload, message, code = -1) {
    this.emit('payload', { id: payload.id, jsonrpc: payload.jsonrpc, error: { message, code } })
  }

  send (payload, internal) {
    if (this.closed) return this.error(payload, 'Not connected')
    if (payload.method === 'eth_subscribe') {
      if (this.subscriptions) {
        payload.pollId = this.pollId
      } else {
        return this.error(payload, 'Subscriptions are not supported by this HTTP endpoint')
      }
    }
    const xhr = new XHR()
    let responded = false
    const res = (err, result) => {
      if (!responded) {
        xhr.abort()
        responded = true
        if (internal) {
          internal(err, result)
        } else {
          const { id, jsonrpc } = payload
          const load = err ? { id, jsonrpc, error: { message: err.message, code: err.code } } : { id, jsonrpc, result }
          this.emit('payload', load)
        }
      }
    }
    xhr.open('POST', this.url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.timeout = 60 * 1000
    xhr.onerror = res
    xhr.ontimeout = res
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        try {
          const response = JSON.parse(xhr.responseText)
          res(response.error, response.result)
        } catch (e) {
          res(e)
        }
      }
    }
    xhr.send(JSON.stringify(payload))
  }
}

module.exports = XHR => (url, options) => new HTTPConnection(XHR, url, options)


/***/ }),

/***/ "./node_modules/eth-provider/connections/injected.js":
/*!***********************************************************!*\
  !*** ./node_modules/eth-provider/connections/injected.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js")

class InjectedConnection extends EventEmitter {
  constructor (_injected, options) {
    super()
    if (_injected) {
      setTimeout(() => this.emit('error', new Error('Injected web3 provider is not currently supported')), 0)
    } else {
      setTimeout(() => this.emit('error', new Error('No injected provider found')), 0)
    }
  }
}

module.exports = injected => options => new InjectedConnection(injected, options)


/***/ }),

/***/ "./node_modules/eth-provider/connections/unavailable.js":
/*!**************************************************************!*\
  !*** ./node_modules/eth-provider/connections/unavailable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js")

class UnavailableConnection extends EventEmitter {
  constructor (message) {
    super()
    setTimeout(() => this.emit('error', new Error(message)), 0)
  }
}

module.exports = message => () => new UnavailableConnection(message)


/***/ }),

/***/ "./node_modules/eth-provider/connections/ws.js":
/*!*****************************************************!*\
  !*** ./node_modules/eth-provider/connections/ws.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js")
const parse = __webpack_require__(/*! ../parse */ "./node_modules/eth-provider/parse/index.js")
const dev = "development" === 'development'

let WebSocket

class WebSocketConnection extends EventEmitter {
  constructor (_WebSocket, url, options) {
    super()
    WebSocket = _WebSocket
    setTimeout(() => this.create(url, options), 0)
  }

  create (url, options) {
    if (!WebSocket) this.emit('error', new Error('No WebSocket transport available'))
    try { this.socket = new WebSocket(url) } catch (e) { return this.emit('error', e) }
    this.socket.addEventListener('error', err => this.emit('error', err))
    this.socket.addEventListener('open', () => {
      this.emit('connect')
      this.socket.addEventListener('message', message => {
        const data = typeof message.data === 'string' ? message.data : ''
        parse(data, (err, payloads) => {
          if (err) return //
          payloads.forEach(load => {
            if (Array.isArray(load)) {
              load.forEach(payload => this.emit('payload', payload))
            } else {
              this.emit('payload', load)
            }
          })
        })
      })
      this.socket.addEventListener('close', () => this.onClose())
    })
  }

  onClose () {
    this.socket = null
    this.closed = true
    if (dev) console.log('Closing WebSocket connection')
    this.emit('close')
    this.removeAllListeners()
  }

  close () {
    if (this.socket) {
      this.socket.close()
    } else {
      this.onClose()
    }
  }

  error (payload, message, code = -1) {
    this.emit('payload', { id: payload.id, jsonrpc: payload.jsonrpc, error: { message, code } })
  }

  send (payload) {
    if (this.socket && this.socket.readyState === this.socket.CONNECTING) {
      setTimeout(_ => this.send(payload), 10)
    } else if (!this.socket || this.socket.readyState > 1) {
      this.connected = false
      this.error(payload, 'Not connected')
    } else {
      this.socket.send(JSON.stringify(payload))
    }
  }
}

module.exports = WebSocket => (url, cb) => new WebSocketConnection(WebSocket, url, cb)


/***/ }),

/***/ "./node_modules/eth-provider/node_modules/uuid/lib/bytesToUuid.js":
/*!************************************************************************!*\
  !*** ./node_modules/eth-provider/node_modules/uuid/lib/bytesToUuid.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/eth-provider/node_modules/uuid/lib/rng-browser.js":
/*!************************************************************************!*\
  !*** ./node_modules/eth-provider/node_modules/uuid/lib/rng-browser.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/eth-provider/node_modules/uuid/v4.js":
/*!***********************************************************!*\
  !*** ./node_modules/eth-provider/node_modules/uuid/v4.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/eth-provider/node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/eth-provider/node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./node_modules/eth-provider/parse/index.js":
/*!**************************************************!*\
  !*** ./node_modules/eth-provider/parse/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let last, timeout

module.exports = (res, cb) => {
  const values = []
  res
    .replace(/\}[\n\r]?\{/g, '}|--|{') // }{
    .replace(/\}\][\n\r]?\[\{/g, '}]|--|[{') // }][{
    .replace(/\}[\n\r]?\[\{/g, '}|--|[{') // }[{
    .replace(/\}\][\n\r]?\{/g, '}]|--|{') // }]{
    .split('|--|')
    .forEach(data => {
      if (last) data = last + data // prepend the last chunk
      let result
      try {
        result = JSON.parse(data)
      } catch (e) {
        last = data
        clearTimeout(timeout) // restart timeout
        timeout = setTimeout(() => cb(new Error('Parse response timeout')), 15 * 1000)
        return
      }
      clearTimeout(timeout)
      last = null
      if (result) values.push(result)
    })
  cb(null, values)
}


/***/ }),

/***/ "./node_modules/eth-provider/presets/index.js":
/*!****************************************************!*\
  !*** ./node_modules/eth-provider/presets/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  injected: ['injected'],
  frame: ['ws://127.0.0.1:1248', 'http://127.0.0.1:1248'],
  direct: ['ws://127.0.0.1:8546', 'http://127.0.0.1:8545'], // IPC paths will be prepended in Node/Electron
  infura: ['wss://mainnet.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b', 'https://mainnet.infura.io/v3/786ade30f36244469480aa5c2bf0743b'],
  infuraRopsten: ['wss://ropsten.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b', 'https://ropsten.infura.io/v3/786ade30f36244469480aa5c2bf0743b'],
  infuraRinkeby: ['wss://rinkeby.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b', 'https://rinkeby.infura.io/v3/786ade30f36244469480aa5c2bf0743b'],
  infuraKovan: ['wss://kovan.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b', 'https://kovan.infura.io/v3/786ade30f36244469480aa5c2bf0743b']
}


/***/ }),

/***/ "./node_modules/eth-provider/provider/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/eth-provider/provider/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js")
const EthereumProvider = __webpack_require__(/*! ethereum-provider */ "./node_modules/ethereum-provider/index.js")
const ConnectionManager = __webpack_require__(/*! ../ConnectionManager */ "./node_modules/eth-provider/ConnectionManager/index.js")

const monitor = provider => {
  function update (status) {
    provider.status = status
    if (provider instanceof EventEmitter) provider.emit('status', status)
  }
  async function check () {
    if (provider.inSetup) return setTimeout(check, 1000)
    try {
      if (await provider.send('eth_syncing')) {
        update('syncing')
        setTimeout(() => check(), 5000)
      } else {
        update('connected')
      }
    } catch (e) {
      update('disconnected')
    }
  }
  update('loading')
  check()
  provider.on('connect', () => check())
  provider.on('close', () => update('disconnected'))
  return provider
}

module.exports = (connections, targets, options) => {
  // If window.ethereum and injected is a target in any priority, return ethereum provider
  if (connections.injected.__isProvider && targets.map(t => t.type).indexOf('injected') > -1) {
    delete connections.injected.__isProvider
    return monitor(connections.injected)
  }
  const provider = new EthereumProvider(new ConnectionManager(connections, targets, options))
  provider.setMaxListeners(128)
  return monitor(provider)
}


/***/ }),

/***/ "./node_modules/eth-provider/resolve/index.js":
/*!****************************************************!*\
  !*** ./node_modules/eth-provider/resolve/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const getProtocol = location => {
  if (location === 'injected') return 'injected'
  if (location.endsWith('.ipc')) return 'ipc'
  if (location.startsWith('wss://') || location.startsWith('ws://')) return 'ws'
  if (location.startsWith('https://') || location.startsWith('http://')) return 'http'
  return ''
}

module.exports = (targets, presets) => {
  return [].concat(...[].concat(targets).map(provider => {
    if (presets[provider]) {
      return presets[provider].map(location => ({ type: provider, location, protocol: getProtocol(location) }))
    } else {
      return { type: 'custom', location: provider, protocol: getProtocol(provider) }
    }
  })).filter(provider => {
    if (provider.protocol || provider.type === 'injected') {
      return true
    } else {
      console.log('eth-provider | Invalid provider preset/location: "' + provider.location + '"')
      return false
    }
  })
}


/***/ }),

/***/ "./node_modules/ethereum-provider/index.js":
/*!*************************************************!*\
  !*** ./node_modules/ethereum-provider/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js")

class EthereumProvider extends EventEmitter {
  constructor (connection) {
    super()
    this.connected = false
    this.nextId = 0
    this.promises = {}
    this.subscriptions = []
    this.connection = connection
    this.connection.on('connect', () => this.checkConnection())
    this.connection.on('close', () => this.emit('close'))
    this.connection.on('payload', payload => {
      const { id, method, error, result } = payload
      if (typeof id !== 'undefined') {
        if (this.promises[id]) { // Fulfill promise
          payload.error ? this.promises[id].reject(error) : this.promises[id].resolve(result)
          delete this.promises[id]
        }
      } else if (method && method.indexOf('_subscription') > -1) { // Emit subscription result
        this.emit(payload.params.subscription, payload.params.result)
        this.emit(method, payload.params) // Latest EIP-1193
        this.emit('data', payload) // Backwards Compatibility
      }
    })
    this.on('newListener', (event, listener) => {
      if (event === 'networkChanged') {
        if (!this.attemptedNetworkSubscription && this.connected) this.startNetworkSubscription()
      } else if (event === 'accountsChanged') {
        if (!this.attemptedAccountsSubscription && this.connected) this.startAccountsSubscription()
      }
    })
  }
  async checkConnection () {
    try {
      this.emit('connect', await this._send('net_version'))
      this.connected = true
      if (this.listenerCount('networkChanged') && !this.attemptedNetworkSubscription) this.startNetworkSubscription()
      if (this.listenerCount('accountsChanged') && !this.attemptedAccountsSubscription) this.startAccountsSubscription()
    } catch (e) {
      this.connected = false
    }
  }
  async startNetworkSubscription () {
    this.attemptedNetworkSubscription = true
    try {
      let networkChanged = await this.subscribe('eth_subscribe', 'networkChanged')
      this.on(networkChanged, netId => this.emit('networkChanged', netId))
    } catch (e) {
      console.warn('Unable to subscribe to networkChanged', e)
    }
  }
  async startAccountsSubscription () {
    this.attemptedAccountsSubscription = true
    try {
      let accountsChanged = await this.subscribe('eth_subscribe', 'accountsChanged')
      this.on(accountsChanged, accounts => this.emit('accountsChanged', accounts))
    } catch (e) {
      console.warn('Unable to subscribe to accountsChanged', e)
    }
  }
  enable () {
    return new Promise((resolve, reject) => {
      this._send('eth_accounts').then(accounts => {
        if (accounts.length > 0) {
          this.accounts = accounts
          this.coinbase = accounts[0]
          this.emit('enable')
          resolve(accounts)
        } else {
          const err = new Error('User Denied Full Provider')
          err.code = 4001
          reject(err)
        }
      }).catch(reject)
    })
  }
  _send (method, params = []) {
    if (!method || typeof method !== 'string') return new Error('Method is not a valid string.')
    if (!(params instanceof Array)) return new Error('Params is not a valid array.')
    const payload = { jsonrpc: '2.0', id: this.nextId++, method, params }
    const promise = new Promise((resolve, reject) => { this.promises[payload.id] = { resolve, reject } })
    this.connection.send(payload)
    return promise
  }
  send (...args) { // Send can be clobbered, proxy sendPromise for backwards compatibility
    return this._send(...args)
  }
  _sendBatch (requests) {
    return Promise.all(requests.map(payload => this._send(payload.method, payload.params)))
  }
  subscribe (type, method, params = []) {
    return this._send(type, [method, ...params]).then(id => {
      this.subscriptions.push(id)
      return id
    })
  }
  unsubscribe (type, id) {
    return this._send(type, [id]).then(success => {
      if (success) {
        this.subscriptions = this.subscriptions.filter(_id => _id !== id) // Remove subscription
        this.removeAllListeners(id) // Remove listeners
        return success
      }
    })
  }
  sendAsync (payload, cb) { // Backwards Compatibility
    if (!cb || typeof cb !== 'function') return cb(new Error('Invalid or undefined callback provided to sendAsync'))
    if (!payload) return cb(new Error('Invalid Payload'))
    // sendAsync can be called with an array for batch requests used by web3.js 0.x
    // this is not part of EIP-1193's backwards compatibility but we still want to support it
    if (payload instanceof Array) {
      return this.sendAsyncBatch(payload, cb)
    } else {
      return this._send(payload.method, payload.params).then(result => {
        cb(null, { id: payload.id, jsonrpc: payload.jsonrpc, result })
      }).catch(err => {
        cb(err)
      })
    }
  }
  sendAsyncBatch (payload, cb) {
    return this._sendBatch(payload).then((results) => {
      let result = results.map((entry, index) => {
        return { id: payload[index].id, jsonrpc: payload[index].jsonrpc, result: entry }
      })
      cb(null, result)
    }).catch(err => {
      cb(err)
    })
  }
  isConnected () { // Backwards Compatibility
    return this.connected
  }
  close () {
    this.connection.close()
    this.connected = false
    let error = new Error(`Provider closed, subscription lost, please subscribe again.`)
    this.subscriptions.forEach(id => this.emit(id, error)) // Send Error objects to any open subscriptions
    this.subscriptions = [] // Clear subscriptions
  }
}

module.exports = EthereumProvider


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ })

}]);
//# sourceMappingURL=4.js.map