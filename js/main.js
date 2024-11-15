/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@nextcloud/browser-storage/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/dist/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clearAll = clearAll;
exports.clearNonPersistent = clearNonPersistent;
exports.getBuilder = getBuilder;
var _storagebuilder = _interopRequireDefault(__webpack_require__(/*! ./storagebuilder */ "./node_modules/@nextcloud/browser-storage/dist/storagebuilder.js"));
var _scopedstorage = _interopRequireDefault(__webpack_require__(/*! ./scopedstorage */ "./node_modules/@nextcloud/browser-storage/dist/scopedstorage.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Get the storage builder for an app
 * @param appId App ID to scope storage
 */
function getBuilder(appId) {
  return new _storagebuilder.default(appId);
}

/**
 * Clear values from storage
 * @param storage The storage to clear
 * @param pred Callback to check if value should be cleared
 */
function clearStorage(storage, pred) {
  Object.keys(storage).filter(k => pred ? pred(k) : true).map(storage.removeItem.bind(storage));
}

/**
 * Clear all values from all storages
 */
function clearAll() {
  const storages = [window.sessionStorage, window.localStorage];
  storages.map(s => clearStorage(s));
}

/**
 * Clear ony non persistent values
 */
function clearNonPersistent() {
  const storages = [window.sessionStorage, window.localStorage];
  storages.map(s => clearStorage(s, k => !k.startsWith(_scopedstorage.default.GLOBAL_SCOPE_PERSISTENT)));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/dist/scopedstorage.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/dist/scopedstorage.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class ScopedStorage {
  constructor(scope, wrapped, persistent) {
    _defineProperty(this, "scope", void 0);
    _defineProperty(this, "wrapped", void 0);
    this.scope = "".concat(persistent ? ScopedStorage.GLOBAL_SCOPE_PERSISTENT : ScopedStorage.GLOBAL_SCOPE_VOLATILE, "_").concat(btoa(scope), "_");
    this.wrapped = wrapped;
  }
  scopeKey(key) {
    return "".concat(this.scope).concat(key);
  }
  setItem(key, value) {
    this.wrapped.setItem(this.scopeKey(key), value);
  }
  getItem(key) {
    return this.wrapped.getItem(this.scopeKey(key));
  }
  removeItem(key) {
    this.wrapped.removeItem(this.scopeKey(key));
  }
  clear() {
    Object.keys(this.wrapped).filter(key => key.startsWith(this.scope)).map(this.wrapped.removeItem.bind(this.wrapped));
  }
}
exports["default"] = ScopedStorage;
_defineProperty(ScopedStorage, "GLOBAL_SCOPE_VOLATILE", 'nextcloud_vol');
_defineProperty(ScopedStorage, "GLOBAL_SCOPE_PERSISTENT", 'nextcloud_per');
//# sourceMappingURL=scopedstorage.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/dist/storagebuilder.js":
/*!************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/dist/storagebuilder.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _scopedstorage = _interopRequireDefault(__webpack_require__(/*! ./scopedstorage */ "./node_modules/@nextcloud/browser-storage/dist/scopedstorage.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class StorageBuilder {
  constructor(appId) {
    _defineProperty(this, "appId", void 0);
    _defineProperty(this, "persisted", false);
    _defineProperty(this, "clearedOnLogout", false);
    this.appId = appId;
  }
  persist() {
    let persist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.persisted = persist;
    return this;
  }
  clearOnLogout() {
    let clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.clearedOnLogout = clear;
    return this;
  }
  build() {
    return new _scopedstorage.default(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
exports["default"] = StorageBuilder;
//# sourceMappingURL=storagebuilder.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/classes/semver.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/classes/semver.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/debug.js")
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(/*! ../internal/constants */ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/constants.js")
const { safeRe: re, t } = __webpack_require__(/*! ../internal/re */ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/re.js")

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/parse-options.js")
const { compareIdentifiers } = __webpack_require__(/*! ../internal/identifiers */ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/identifiers.js")
class SemVer {
  constructor (version, options) {
    options = parseOptions(options)

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('build compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier, identifierBase) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier, identifierBase)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier, identifierBase)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier, identifierBase)
        this.inc('pre', identifier, identifierBase)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier, identifierBase)
        }
        this.inc('pre', identifier, identifierBase)
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre': {
        const base = Number(identifierBase) ? 1 : 0

        if (!identifier && identifierBase === false) {
          throw new Error('invalid increment argument: identifier is empty')
        }

        if (this.prerelease.length === 0) {
          this.prerelease = [base]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            if (identifier === this.prerelease.join('.') && identifierBase === false) {
              throw new Error('invalid increment argument: identifier already exists')
            }
            this.prerelease.push(base)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          let prerelease = [identifier, base]
          if (identifierBase === false) {
            prerelease = [identifier]
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease
            }
          } else {
            this.prerelease = prerelease
          }
        }
        break
      }
      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.raw = this.format()
    if (this.build.length) {
      this.raw += `+${this.build.join('.')}`
    }
    return this
  }
}

module.exports = SemVer


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/functions/major.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/functions/major.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/@nextcloud/event-bus/node_modules/semver/classes/semver.js")
const major = (a, loose) => new SemVer(a, loose).major
module.exports = major


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/functions/parse.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/functions/parse.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/@nextcloud/event-bus/node_modules/semver/classes/semver.js")
const parse = (version, options, throwErrors = false) => {
  if (version instanceof SemVer) {
    return version
  }
  try {
    return new SemVer(version, options)
  } catch (er) {
    if (!throwErrors) {
      return null
    }
    throw er
  }
}

module.exports = parse


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/functions/valid.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/functions/valid.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(/*! ./parse */ "./node_modules/@nextcloud/event-bus/node_modules/semver/functions/parse.js")
const valid = (version, options) => {
  const v = parse(version, options)
  return v ? v.version : null
}
module.exports = valid


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/constants.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/internal/constants.js ***!
  \*************************************************************************************/
/***/ ((module) => {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

// Max safe length for a build identifier. The max length minus 6 characters for
// the shortest version with a build 0.0.0+BUILD.
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6

const RELEASE_TYPES = [
  'major',
  'premajor',
  'minor',
  'preminor',
  'patch',
  'prepatch',
  'prerelease',
]

module.exports = {
  MAX_LENGTH,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_SAFE_INTEGER,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 0b001,
  FLAG_LOOSE: 0b010,
}


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/debug.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/internal/debug.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/identifiers.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/internal/identifiers.js ***!
  \***************************************************************************************/
/***/ ((module) => {

const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers,
}


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/parse-options.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/internal/parse-options.js ***!
  \*****************************************************************************************/
/***/ ((module) => {

// parse out just the options we care about
const looseOption = Object.freeze({ loose: true })
const emptyOpts = Object.freeze({ })
const parseOptions = options => {
  if (!options) {
    return emptyOpts
  }

  if (typeof options !== 'object') {
    return looseOption
  }

  return options
}
module.exports = parseOptions


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/re.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/internal/re.js ***!
  \******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

const {
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_LENGTH,
} = __webpack_require__(/*! ./constants */ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/constants.js")
const debug = __webpack_require__(/*! ./debug */ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/debug.js")
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const safeRe = exports.safeRe = []
const src = exports.src = []
const t = exports.t = {}
let R = 0

const LETTERDASHNUMBER = '[a-zA-Z0-9-]'

// Replace some greedy regex tokens to prevent regex dos issues. These regex are
// used internally via the safeRe object since all inputs in this library get
// normalized first to trim and collapse all extra whitespace. The original
// regexes are exported for userland consumption and lower level usage. A
// future breaking change could export the safer regex only with a note that
// all input should have extra whitespace removed.
const safeRegexReplacements = [
  ['\\s', 1],
  ['\\d', MAX_LENGTH],
  [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH],
]

const makeSafeRegex = (value) => {
  for (const [token, max] of safeRegexReplacements) {
    value = value
      .split(`${token}*`).join(`${token}{0,${max}}`)
      .split(`${token}+`).join(`${token}{1,${max}}`)
  }
  return value
}

const createToken = (name, value, isGlobal) => {
  const safe = makeSafeRegex(value)
  const index = R++
  debug(name, index, value)
  t[name] = index
  src[index] = value
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
  safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '\\d+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`)

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`)

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCEPLAIN', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`)
createToken('COERCE', `${src[t.COERCEPLAIN]}(?:$|[^\\d])`)
createToken('COERCEFULL', src[t.COERCEPLAIN] +
              `(?:${src[t.PRERELEASE]})?` +
              `(?:${src[t.BUILD]})?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)
createToken('COERCERTLFULL', src[t.COERCEFULL], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$')


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_FileTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/FileTable.vue */ "./src/components/FileTable.vue");
/* harmony import */ var _output_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./output.css */ "./src/output.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'App',
  components: {
    FileTable: _components_FileTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/FileTable.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/FileTable.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_files_dav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files/dav */ "./node_modules/@nextcloud/files/dist/dav.mjs");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FileTable',
  data() {
    return {
      files: [] // Liste des fichiers et dossiers récupérés
    };
  },
  async mounted() {
    await this.fetchFiles();
  },
  methods: {
    async fetchFiles() {
      try {
        // Création du client WebDAV
        const client = (0,_nextcloud_files_dav__WEBPACK_IMPORTED_MODULE_0__.getClient)();

        // Récupération des fichiers et dossiers à la racine
        const directoryItems = await client.getDirectoryContents('/files/admin'); //changer admin par le nom de l'utilisateur courant

        // Mise à jour de la liste des fichiers et dossiers
        this.files = directoryItems.map(file => ({
          basename: file.basename,
          size: file.size,
          href: client.getFileDownloadLink(file.filename),
          type: file.type
        }));
      } catch (error) {
        console.error('Erreur lors de la récupération des fichiers et dossiers :', error);
      }
    },
    // Fonction pour formater la taille des fichiers
    formatFileSize(size) {
      if (size < 1024) return `${size} B`;
      if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
      if (size < 1024 * 1024 * 1024) return `${(size / 1024 / 1024).toFixed(2)} MB`;
      return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "app"
    }
  }, [_c("h1", [_vm._v("FEUR")]), _vm._v(" "), _c("FileTable")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/FileTable.vue?vue&type=template&id=36ad32b2&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/FileTable.vue?vue&type=template&id=36ad32b2&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("table", [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.files, function (file) {
    return _c("tr", {
      key: file.filename
    }, [_c("td", [_c("a", {
      attrs: {
        href: file.href,
        target: "_blank"
      }
    }, [_vm._v(_vm._s(file.basename))])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(file.type === "directory" ? "Dossier" : "Fichier"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(file.type === "directory" ? "-" : _vm.formatFileSize(file.size)))])]);
  }), 0)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Nom")]), _vm._v(" "), _c("th", [_vm._v("Type")]), _vm._v(" "), _c("th", [_vm._v("Taille")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cancelable-promise/umd/CancelablePromise.js":
/*!******************************************************************!*\
  !*** ./node_modules/cancelable-promise/umd/CancelablePromise.js ***!
  \******************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CancelablePromise = void 0;
  _exports.cancelable = cancelable;
  _exports.default = void 0;
  _exports.isCancelablePromise = isCancelablePromise;

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

  function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

  function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

  function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

  function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

  function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

  var toStringTag = typeof Symbol !== 'undefined' ? Symbol.toStringTag : '@@toStringTag';

  var _internals = /*#__PURE__*/new WeakMap();

  var _promise = /*#__PURE__*/new WeakMap();

  var CancelablePromiseInternal = /*#__PURE__*/function () {
    function CancelablePromiseInternal(_ref) {
      var _ref$executor = _ref.executor,
          executor = _ref$executor === void 0 ? function () {} : _ref$executor,
          _ref$internals = _ref.internals,
          internals = _ref$internals === void 0 ? defaultInternals() : _ref$internals,
          _ref$promise = _ref.promise,
          promise = _ref$promise === void 0 ? new Promise(function (resolve, reject) {
        return executor(resolve, reject, function (onCancel) {
          internals.onCancelList.push(onCancel);
        });
      }) : _ref$promise;

      _classCallCheck(this, CancelablePromiseInternal);

      _classPrivateFieldInitSpec(this, _internals, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _promise, {
        writable: true,
        value: void 0
      });

      _defineProperty(this, toStringTag, 'CancelablePromise');

      this.cancel = this.cancel.bind(this);

      _classPrivateFieldSet(this, _internals, internals);

      _classPrivateFieldSet(this, _promise, promise || new Promise(function (resolve, reject) {
        return executor(resolve, reject, function (onCancel) {
          internals.onCancelList.push(onCancel);
        });
      }));
    }

    _createClass(CancelablePromiseInternal, [{
      key: "then",
      value: function then(onfulfilled, onrejected) {
        return makeCancelable(_classPrivateFieldGet(this, _promise).then(createCallback(onfulfilled, _classPrivateFieldGet(this, _internals)), createCallback(onrejected, _classPrivateFieldGet(this, _internals))), _classPrivateFieldGet(this, _internals));
      }
    }, {
      key: "catch",
      value: function _catch(onrejected) {
        return makeCancelable(_classPrivateFieldGet(this, _promise).catch(createCallback(onrejected, _classPrivateFieldGet(this, _internals))), _classPrivateFieldGet(this, _internals));
      }
    }, {
      key: "finally",
      value: function _finally(onfinally, runWhenCanceled) {
        var _this = this;

        if (runWhenCanceled) {
          _classPrivateFieldGet(this, _internals).onCancelList.push(onfinally);
        }

        return makeCancelable(_classPrivateFieldGet(this, _promise).finally(createCallback(function () {
          if (onfinally) {
            if (runWhenCanceled) {
              _classPrivateFieldGet(_this, _internals).onCancelList = _classPrivateFieldGet(_this, _internals).onCancelList.filter(function (callback) {
                return callback !== onfinally;
              });
            }

            return onfinally();
          }
        }, _classPrivateFieldGet(this, _internals))), _classPrivateFieldGet(this, _internals));
      }
    }, {
      key: "cancel",
      value: function cancel() {
        _classPrivateFieldGet(this, _internals).isCanceled = true;

        var callbacks = _classPrivateFieldGet(this, _internals).onCancelList;

        _classPrivateFieldGet(this, _internals).onCancelList = [];

        var _iterator = _createForOfIteratorHelper(callbacks),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var callback = _step.value;

            if (typeof callback === 'function') {
              try {
                callback();
              } catch (err) {
                console.error(err);
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "isCanceled",
      value: function isCanceled() {
        return _classPrivateFieldGet(this, _internals).isCanceled === true;
      }
    }]);

    return CancelablePromiseInternal;
  }();

  var CancelablePromise = /*#__PURE__*/function (_CancelablePromiseInt) {
    _inherits(CancelablePromise, _CancelablePromiseInt);

    var _super = _createSuper(CancelablePromise);

    function CancelablePromise(executor) {
      _classCallCheck(this, CancelablePromise);

      return _super.call(this, {
        executor: executor
      });
    }

    return _createClass(CancelablePromise);
  }(CancelablePromiseInternal);

  _exports.CancelablePromise = CancelablePromise;

  _defineProperty(CancelablePromise, "all", function all(iterable) {
    return makeAllCancelable(iterable, Promise.all(iterable));
  });

  _defineProperty(CancelablePromise, "allSettled", function allSettled(iterable) {
    return makeAllCancelable(iterable, Promise.allSettled(iterable));
  });

  _defineProperty(CancelablePromise, "any", function any(iterable) {
    return makeAllCancelable(iterable, Promise.any(iterable));
  });

  _defineProperty(CancelablePromise, "race", function race(iterable) {
    return makeAllCancelable(iterable, Promise.race(iterable));
  });

  _defineProperty(CancelablePromise, "resolve", function resolve(value) {
    return cancelable(Promise.resolve(value));
  });

  _defineProperty(CancelablePromise, "reject", function reject(reason) {
    return cancelable(Promise.reject(reason));
  });

  _defineProperty(CancelablePromise, "isCancelable", isCancelablePromise);

  var _default = CancelablePromise;
  _exports.default = _default;

  function cancelable(promise) {
    return makeCancelable(promise, defaultInternals());
  }

  function isCancelablePromise(promise) {
    return promise instanceof CancelablePromise || promise instanceof CancelablePromiseInternal;
  }

  function createCallback(onResult, internals) {
    if (onResult) {
      return function (arg) {
        if (!internals.isCanceled) {
          var result = onResult(arg);

          if (isCancelablePromise(result)) {
            internals.onCancelList.push(result.cancel);
          }

          return result;
        }

        return arg;
      };
    }
  }

  function makeCancelable(promise, internals) {
    return new CancelablePromiseInternal({
      internals: internals,
      promise: promise
    });
  }

  function makeAllCancelable(iterable, promise) {
    var internals = defaultInternals();
    internals.onCancelList.push(function () {
      var _iterator2 = _createForOfIteratorHelper(iterable),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var resolvable = _step2.value;

          if (isCancelablePromise(resolvable)) {
            resolvable.cancel();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    });
    return new CancelablePromiseInternal({
      internals: internals,
      promise: promise
    });
  }

  function defaultInternals() {
    return {
      isCanceled: false,
      onCancelList: []
    };
  }
});
//# sourceMappingURL=CancelablePromise.js.map

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/FileTable.vue?vue&type=style&index=0&id=36ad32b2&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/FileTable.vue?vue&type=style&index=0&id=36ad32b2&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
/* Styles pour le tableau */
table[data-v-36ad32b2] {
    border-collapse: collapse;
    width: 80%;
    margin: 20px auto;
}
table[data-v-36ad32b2], th[data-v-36ad32b2], td[data-v-36ad32b2] {
    border: 1px solid #ddd;
    padding: 8px;
}
th[data-v-36ad32b2] {
    background-color: #4CAF50;
    color: white;
}
tr[data-v-36ad32b2] {
    background-color: #f2f2f2;
}
td a[data-v-36ad32b2] {
    color: #4CAF50;
    text-decoration: none;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/output.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/output.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

/*
! tailwindcss v3.4.15 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  /* 3 */
  tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  letter-spacing: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel

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



function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47 /*/*/)
      break;
    else
      code = 47 /*/*/;
    if (code === 47 /*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 /*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process.cwd();
        path = cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },

  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0) return '.';

    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';

    if (isAbsolute) return '/' + path;
    return path;
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
  },

  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /*/*/)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /*/*/)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47 /*/*/)
        lastCommonSep = i;
    }

    var out = '';
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 /*/*/)
        ++toStart;
      return to.slice(toStart);
    }
  },

  _makeLong: function _makeLong(path) {
    return path;
  },

  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },

  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },

  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47 /*/*/;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
    // We saw a non-dot character immediately before the dot
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};

posix.posix = posix;

module.exports = posix;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/FileTable.vue?vue&type=style&index=0&id=36ad32b2&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/FileTable.vue?vue&type=style&index=0&id=36ad32b2&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileTable_vue_vue_type_style_index_0_id_36ad32b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileTable.vue?vue&type=style&index=0&id=36ad32b2&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/FileTable.vue?vue&type=style&index=0&id=36ad32b2&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileTable_vue_vue_type_style_index_0_id_36ad32b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileTable_vue_vue_type_style_index_0_id_36ad32b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileTable_vue_vue_type_style_index_0_id_36ad32b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileTable_vue_vue_type_style_index_0_id_36ad32b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/output.css":
/*!************************!*\
  !*** ./src/output.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./output.css */ "./node_modules/css-loader/dist/cjs.js!./src/output.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ "./src/App.vue?vue&type=template&id=7ba5bd90");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./src/App.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/FileTable.vue":
/*!**************************************!*\
  !*** ./src/components/FileTable.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FileTable_vue_vue_type_template_id_36ad32b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileTable.vue?vue&type=template&id=36ad32b2&scoped=true */ "./src/components/FileTable.vue?vue&type=template&id=36ad32b2&scoped=true");
/* harmony import */ var _FileTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileTable.vue?vue&type=script&lang=js */ "./src/components/FileTable.vue?vue&type=script&lang=js");
/* harmony import */ var _FileTable_vue_vue_type_style_index_0_id_36ad32b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileTable.vue?vue&type=style&index=0&id=36ad32b2&scoped=true&lang=css */ "./src/components/FileTable.vue?vue&type=style&index=0&id=36ad32b2&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileTable_vue_vue_type_template_id_36ad32b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FileTable_vue_vue_type_template_id_36ad32b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "36ad32b2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/FileTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/FileTable.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/components/FileTable.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/FileTable.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90");


/***/ }),

/***/ "./src/components/FileTable.vue?vue&type=template&id=36ad32b2&scoped=true":
/*!********************************************************************************!*\
  !*** ./src/components/FileTable.vue?vue&type=template&id=36ad32b2&scoped=true ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileTable_vue_vue_type_template_id_36ad32b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileTable_vue_vue_type_template_id_36ad32b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileTable_vue_vue_type_template_id_36ad32b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileTable.vue?vue&type=template&id=36ad32b2&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/FileTable.vue?vue&type=template&id=36ad32b2&scoped=true");


/***/ }),

/***/ "./src/components/FileTable.vue?vue&type=style&index=0&id=36ad32b2&scoped=true&lang=css":
/*!**********************************************************************************************!*\
  !*** ./src/components/FileTable.vue?vue&type=style&index=0&id=36ad32b2&scoped=true&lang=css ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileTable_vue_vue_type_style_index_0_id_36ad32b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileTable.vue?vue&type=style&index=0&id=36ad32b2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/FileTable.vue?vue&type=style&index=0&id=36ad32b2&scoped=true&lang=css");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EffectScope: () => (/* binding */ EffectScope),
/* harmony export */   computed: () => (/* binding */ computed),
/* harmony export */   customRef: () => (/* binding */ customRef),
/* harmony export */   "default": () => (/* binding */ Vue),
/* harmony export */   defineAsyncComponent: () => (/* binding */ defineAsyncComponent),
/* harmony export */   defineComponent: () => (/* binding */ defineComponent),
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   effectScope: () => (/* binding */ effectScope),
/* harmony export */   getCurrentInstance: () => (/* binding */ getCurrentInstance),
/* harmony export */   getCurrentScope: () => (/* binding */ getCurrentScope),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   inject: () => (/* binding */ inject),
/* harmony export */   isProxy: () => (/* binding */ isProxy),
/* harmony export */   isReactive: () => (/* binding */ isReactive),
/* harmony export */   isReadonly: () => (/* binding */ isReadonly),
/* harmony export */   isRef: () => (/* binding */ isRef),
/* harmony export */   isShallow: () => (/* binding */ isShallow),
/* harmony export */   markRaw: () => (/* binding */ markRaw),
/* harmony export */   mergeDefaults: () => (/* binding */ mergeDefaults),
/* harmony export */   nextTick: () => (/* binding */ nextTick),
/* harmony export */   onActivated: () => (/* binding */ onActivated),
/* harmony export */   onBeforeMount: () => (/* binding */ onBeforeMount),
/* harmony export */   onBeforeUnmount: () => (/* binding */ onBeforeUnmount),
/* harmony export */   onBeforeUpdate: () => (/* binding */ onBeforeUpdate),
/* harmony export */   onDeactivated: () => (/* binding */ onDeactivated),
/* harmony export */   onErrorCaptured: () => (/* binding */ onErrorCaptured),
/* harmony export */   onMounted: () => (/* binding */ onMounted),
/* harmony export */   onRenderTracked: () => (/* binding */ onRenderTracked),
/* harmony export */   onRenderTriggered: () => (/* binding */ onRenderTriggered),
/* harmony export */   onScopeDispose: () => (/* binding */ onScopeDispose),
/* harmony export */   onServerPrefetch: () => (/* binding */ onServerPrefetch),
/* harmony export */   onUnmounted: () => (/* binding */ onUnmounted),
/* harmony export */   onUpdated: () => (/* binding */ onUpdated),
/* harmony export */   provide: () => (/* binding */ provide),
/* harmony export */   proxyRefs: () => (/* binding */ proxyRefs),
/* harmony export */   reactive: () => (/* binding */ reactive),
/* harmony export */   readonly: () => (/* binding */ readonly),
/* harmony export */   ref: () => (/* binding */ ref$1),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   shallowReactive: () => (/* binding */ shallowReactive),
/* harmony export */   shallowReadonly: () => (/* binding */ shallowReadonly),
/* harmony export */   shallowRef: () => (/* binding */ shallowRef),
/* harmony export */   toRaw: () => (/* binding */ toRaw),
/* harmony export */   toRef: () => (/* binding */ toRef),
/* harmony export */   toRefs: () => (/* binding */ toRefs),
/* harmony export */   triggerRef: () => (/* binding */ triggerRef),
/* harmony export */   unref: () => (/* binding */ unref),
/* harmony export */   useAttrs: () => (/* binding */ useAttrs),
/* harmony export */   useCssModule: () => (/* binding */ useCssModule),
/* harmony export */   useCssVars: () => (/* binding */ useCssVars),
/* harmony export */   useListeners: () => (/* binding */ useListeners),
/* harmony export */   useSlots: () => (/* binding */ useSlots),
/* harmony export */   version: () => (/* binding */ version),
/* harmony export */   watch: () => (/* binding */ watch),
/* harmony export */   watchEffect: () => (/* binding */ watchEffect),
/* harmony export */   watchPostEffect: () => (/* binding */ watchPostEffect),
/* harmony export */   watchSyncEffect: () => (/* binding */ watchSyncEffect)
/* harmony export */ });
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
var emptyObject = Object.freeze({});
var isArray = Array.isArray;
// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef(v) {
    return v === undefined || v === null;
}
function isDef(v) {
    return v !== undefined && v !== null;
}
function isTrue(v) {
    return v === true;
}
function isFalse(v) {
    return v === false;
}
/**
 * Check if value is primitive.
 */
function isPrimitive(value) {
    return (typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean');
}
function isFunction(value) {
    return typeof value === 'function';
}
/**
 * Quick object check - this is primarily used to tell
 * objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;
function toRawType(value) {
    return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
}
function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
}
function isPromise(val) {
    return (isDef(val) &&
        typeof val.then === 'function' &&
        typeof val.catch === 'function');
}
/**
 * Convert a value to a string that is actually rendered.
 */
function toString(val) {
    return val == null
        ? ''
        : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
            ? JSON.stringify(val, replacer, 2)
            : String(val);
}
function replacer(_key, val) {
    // avoid circular deps from v3
    if (val && val.__v_isRef) {
        return val.value;
    }
    return val;
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? function (val) { return map[val.toLowerCase()]; } : function (val) { return map[val]; };
}
/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */
function remove$2(arr, item) {
    var len = arr.length;
    if (len) {
        // fast path for the only / last item
        if (item === arr[len - 1]) {
            arr.length = len - 1;
            return;
        }
        var index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
}
/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
}
/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return (c ? c.toUpperCase() : ''); });
});
/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */
/* istanbul ignore next */
function polyfillBind(fn, ctx) {
    function boundFn(a) {
        var l = arguments.length;
        return l
            ? l > 1
                ? fn.apply(ctx, arguments)
                : fn.call(ctx, a)
            : fn.call(ctx);
    }
    boundFn._length = fn.length;
    return boundFn;
}
function nativeBind(fn, ctx) {
    return fn.bind(ctx);
}
// @ts-expect-error bind cannot be `undefined`
var bind = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
        ret[i] = list[i + start];
    }
    return ret;
}
/**
 * Mix properties into target object.
 */
function extend(to, _from) {
    for (var key in _from) {
        to[key] = _from[key];
    }
    return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */
function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i]);
        }
    }
    return res;
}
/* eslint-disable no-unused-vars */
/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop(a, b, c) { }
/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };
/* eslint-enable no-unused-vars */
/**
 * Return the same value.
 */
var identity = function (_) { return _; };
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual(a, b) {
    if (a === b)
        return true;
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
        try {
            var isArrayA = Array.isArray(a);
            var isArrayB = Array.isArray(b);
            if (isArrayA && isArrayB) {
                return (a.length === b.length &&
                    a.every(function (e, i) {
                        return looseEqual(e, b[i]);
                    }));
            }
            else if (a instanceof Date && b instanceof Date) {
                return a.getTime() === b.getTime();
            }
            else if (!isArrayA && !isArrayB) {
                var keysA = Object.keys(a);
                var keysB = Object.keys(b);
                return (keysA.length === keysB.length &&
                    keysA.every(function (key) {
                        return looseEqual(a[key], b[key]);
                    }));
            }
            else {
                /* istanbul ignore next */
                return false;
            }
        }
        catch (e) {
            /* istanbul ignore next */
            return false;
        }
    }
    else if (!isObjectA && !isObjectB) {
        return String(a) === String(b);
    }
    else {
        return false;
    }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (looseEqual(arr[i], val))
            return i;
    }
    return -1;
}
/**
 * Ensure a function is called only once.
 */
function once(fn) {
    var called = false;
    return function () {
        if (!called) {
            called = true;
            fn.apply(this, arguments);
        }
    };
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#polyfill
function hasChanged(x, y) {
    if (x === y) {
        return x === 0 && 1 / x !== 1 / y;
    }
    else {
        return x === x || y === y;
    }
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch',
    'renderTracked',
    'renderTriggered'
];

var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),
    /**
     * Whether to suppress warnings.
     */
    silent: false,
    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',
    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',
    /**
     * Whether to record perf
     */
    performance: false,
    /**
     * Error handler for watcher errors
     */
    errorHandler: null,
    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,
    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],
    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),
    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,
    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,
    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,
    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,
    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,
    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,
    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,
    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
};

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */
function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5f;
}
/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    });
}
/**
 * Parse simple path.
 */
var bailRE = new RegExp("[^".concat(unicodeRegExp.source, ".$_\\d]"));
function parsePath(path) {
    if (bailRE.test(path)) {
        return;
    }
    var segments = path.split('.');
    return function (obj) {
        for (var i = 0; i < segments.length; i++) {
            if (!obj)
                return;
            obj = obj[segments[i]];
        }
        return obj;
    };
}

// can we use __proto__?
var hasProto = '__proto__' in {};
// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
UA && /chrome\/\d+/.test(UA) && !isEdge;
UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);
// Firefox has a "watch" function on Object.prototype...
// @ts-expect-error firebox support
var nativeWatch = {}.watch;
var supportsPassive = false;
if (inBrowser) {
    try {
        var opts = {};
        Object.defineProperty(opts, 'passive', {
            get: function () {
                /* istanbul ignore next */
                supportsPassive = true;
            }
        }); // https://github.com/facebook/flow/issues/285
        window.addEventListener('test-passive', null, opts);
    }
    catch (e) { }
}
// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
    if (_isServer === undefined) {
        /* istanbul ignore if */
        if (!inBrowser && typeof __webpack_require__.g !== 'undefined') {
            // detect presence of vue-server-renderer and avoid
            // Webpack shimming the process
            _isServer =
                __webpack_require__.g['process'] && __webpack_require__.g['process'].env.VUE_ENV === 'server';
        }
        else {
            _isServer = false;
        }
    }
    return _isServer;
};
// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */
function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}
var hasSymbol = typeof Symbol !== 'undefined' &&
    isNative(Symbol) &&
    typeof Reflect !== 'undefined' &&
    isNative(Reflect.ownKeys);
var _Set; // $flow-disable-line
/* istanbul ignore if */ if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
}
else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /** @class */ (function () {
        function Set() {
            this.set = Object.create(null);
        }
        Set.prototype.has = function (key) {
            return this.set[key] === true;
        };
        Set.prototype.add = function (key) {
            this.set[key] = true;
        };
        Set.prototype.clear = function () {
            this.set = Object.create(null);
        };
        return Set;
    }());
}

var currentInstance = null;
/**
 * This is exposed for compatibility with v3 (e.g. some functions in VueUse
 * relies on it). Do not use this internally, just use `currentInstance`.
 *
 * @internal this function needs manual type declaration because it relies
 * on previously manually authored types from Vue 2
 */
function getCurrentInstance() {
    return currentInstance && { proxy: currentInstance };
}
/**
 * @internal
 */
function setCurrentInstance(vm) {
    if (vm === void 0) { vm = null; }
    if (!vm)
        currentInstance && currentInstance._scope.off();
    currentInstance = vm;
    vm && vm._scope.on();
}

/**
 * @internal
 */
var VNode = /** @class */ (function () {
    function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
        this.tag = tag;
        this.data = data;
        this.children = children;
        this.text = text;
        this.elm = elm;
        this.ns = undefined;
        this.context = context;
        this.fnContext = undefined;
        this.fnOptions = undefined;
        this.fnScopeId = undefined;
        this.key = data && data.key;
        this.componentOptions = componentOptions;
        this.componentInstance = undefined;
        this.parent = undefined;
        this.raw = false;
        this.isStatic = false;
        this.isRootInsert = true;
        this.isComment = false;
        this.isCloned = false;
        this.isOnce = false;
        this.asyncFactory = asyncFactory;
        this.asyncMeta = undefined;
        this.isAsyncPlaceholder = false;
    }
    Object.defineProperty(VNode.prototype, "child", {
        // DEPRECATED: alias for componentInstance for backwards compat.
        /* istanbul ignore next */
        get: function () {
            return this.componentInstance;
        },
        enumerable: false,
        configurable: true
    });
    return VNode;
}());
var createEmptyVNode = function (text) {
    if (text === void 0) { text = ''; }
    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
};
function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
}
// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode(vnode) {
    var cloned = new VNode(vnode.tag, vnode.data, 
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var uid$2 = 0;
var pendingCleanupDeps = [];
var cleanupDeps = function () {
    for (var i = 0; i < pendingCleanupDeps.length; i++) {
        var dep = pendingCleanupDeps[i];
        dep.subs = dep.subs.filter(function (s) { return s; });
        dep._pending = false;
    }
    pendingCleanupDeps.length = 0;
};
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 * @internal
 */
var Dep = /** @class */ (function () {
    function Dep() {
        // pending subs cleanup
        this._pending = false;
        this.id = uid$2++;
        this.subs = [];
    }
    Dep.prototype.addSub = function (sub) {
        this.subs.push(sub);
    };
    Dep.prototype.removeSub = function (sub) {
        // #12696 deps with massive amount of subscribers are extremely slow to
        // clean up in Chromium
        // to workaround this, we unset the sub for now, and clear them on
        // next scheduler flush.
        this.subs[this.subs.indexOf(sub)] = null;
        if (!this._pending) {
            this._pending = true;
            pendingCleanupDeps.push(this);
        }
    };
    Dep.prototype.depend = function (info) {
        if (Dep.target) {
            Dep.target.addDep(this);
            if ( true && info && Dep.target.onTrack) {
                Dep.target.onTrack(__assign({ effect: Dep.target }, info));
            }
        }
    };
    Dep.prototype.notify = function (info) {
        // stabilize the subscriber list first
        var subs = this.subs.filter(function (s) { return s; });
        if ( true && !config.async) {
            // subs aren't sorted in scheduler if not running async
            // we need to sort them now to make sure they fire in correct
            // order
            subs.sort(function (a, b) { return a.id - b.id; });
        }
        for (var i = 0, l = subs.length; i < l; i++) {
            var sub = subs[i];
            if ( true && info) {
                sub.onTrigger &&
                    sub.onTrigger(__assign({ effect: subs[i] }, info));
            }
            sub.update();
        }
    };
    return Dep;
}());
// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];
function pushTarget(target) {
    targetStack.push(target);
    Dep.target = target;
}
function popTarget() {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */
var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
];
/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = original.apply(this, args);
        var ob = this.__ob__;
        var inserted;
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice':
                inserted = args.slice(2);
                break;
        }
        if (inserted)
            ob.observeArray(inserted);
        // notify change
        if (true) {
            ob.dep.notify({
                type: "array mutation" /* TriggerOpTypes.ARRAY_MUTATION */,
                target: this,
                key: method
            });
        }
        else {}
        return result;
    });
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
var NO_INITIAL_VALUE = {};
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;
function toggleObserving(value) {
    shouldObserve = value;
}
// ssr mock dep
var mockDep = {
    notify: noop,
    depend: noop,
    addSub: noop,
    removeSub: noop
};
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = /** @class */ (function () {
    function Observer(value, shallow, mock) {
        if (shallow === void 0) { shallow = false; }
        if (mock === void 0) { mock = false; }
        this.value = value;
        this.shallow = shallow;
        this.mock = mock;
        // this.value = value
        this.dep = mock ? mockDep : new Dep();
        this.vmCount = 0;
        def(value, '__ob__', this);
        if (isArray(value)) {
            if (!mock) {
                if (hasProto) {
                    value.__proto__ = arrayMethods;
                    /* eslint-enable no-proto */
                }
                else {
                    for (var i = 0, l = arrayKeys.length; i < l; i++) {
                        var key = arrayKeys[i];
                        def(value, key, arrayMethods[key]);
                    }
                }
            }
            if (!shallow) {
                this.observeArray(value);
            }
        }
        else {
            /**
             * Walk through all properties and convert them into
             * getter/setters. This method should only be called when
             * value type is Object.
             */
            var keys = Object.keys(value);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                defineReactive(value, key, NO_INITIAL_VALUE, undefined, shallow, mock);
            }
        }
    }
    /**
     * Observe a list of Array items.
     */
    Observer.prototype.observeArray = function (value) {
        for (var i = 0, l = value.length; i < l; i++) {
            observe(value[i], false, this.mock);
        }
    };
    return Observer;
}());
// helpers
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value, shallow, ssrMockReactivity) {
    if (value && hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        return value.__ob__;
    }
    if (shouldObserve &&
        (ssrMockReactivity || !isServerRendering()) &&
        (isArray(value) || isPlainObject(value)) &&
        Object.isExtensible(value) &&
        !value.__v_skip /* ReactiveFlags.SKIP */ &&
        !isRef(value) &&
        !(value instanceof VNode)) {
        return new Observer(value, shallow, ssrMockReactivity);
    }
}
/**
 * Define a reactive property on an Object.
 */
function defineReactive(obj, key, val, customSetter, shallow, mock, observeEvenIfShallow) {
    if (observeEvenIfShallow === void 0) { observeEvenIfShallow = false; }
    var dep = new Dep();
    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
        return;
    }
    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) &&
        (val === NO_INITIAL_VALUE || arguments.length === 2)) {
        val = obj[key];
    }
    var childOb = shallow ? val && val.__ob__ : observe(val, false, mock);
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            var value = getter ? getter.call(obj) : val;
            if (Dep.target) {
                if (true) {
                    dep.depend({
                        target: obj,
                        type: "get" /* TrackOpTypes.GET */,
                        key: key
                    });
                }
                else {}
                if (childOb) {
                    childOb.dep.depend();
                    if (isArray(value)) {
                        dependArray(value);
                    }
                }
            }
            return isRef(value) && !shallow ? value.value : value;
        },
        set: function reactiveSetter(newVal) {
            var value = getter ? getter.call(obj) : val;
            if (!hasChanged(value, newVal)) {
                return;
            }
            if ( true && customSetter) {
                customSetter();
            }
            if (setter) {
                setter.call(obj, newVal);
            }
            else if (getter) {
                // #7981: for accessor properties without setter
                return;
            }
            else if (!shallow && isRef(value) && !isRef(newVal)) {
                value.value = newVal;
                return;
            }
            else {
                val = newVal;
            }
            childOb = shallow ? newVal && newVal.__ob__ : observe(newVal, false, mock);
            if (true) {
                dep.notify({
                    type: "set" /* TriggerOpTypes.SET */,
                    target: obj,
                    key: key,
                    newValue: newVal,
                    oldValue: value
                });
            }
            else {}
        }
    });
    return dep;
}
function set(target, key, val) {
    if ( true && (isUndef(target) || isPrimitive(target))) {
        warn("Cannot set reactive property on undefined, null, or primitive value: ".concat(target));
    }
    if (isReadonly(target)) {
         true && warn("Set operation on key \"".concat(key, "\" failed: target is readonly."));
        return;
    }
    var ob = target.__ob__;
    if (isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        // when mocking for SSR, array methods are not hijacked
        if (ob && !ob.shallow && ob.mock) {
            observe(val, false, true);
        }
        return val;
    }
    if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val;
    }
    if (target._isVue || (ob && ob.vmCount)) {
         true &&
            warn('Avoid adding reactive properties to a Vue instance or its root $data ' +
                'at runtime - declare it upfront in the data option.');
        return val;
    }
    if (!ob) {
        target[key] = val;
        return val;
    }
    defineReactive(ob.value, key, val, undefined, ob.shallow, ob.mock);
    if (true) {
        ob.dep.notify({
            type: "add" /* TriggerOpTypes.ADD */,
            target: target,
            key: key,
            newValue: val,
            oldValue: undefined
        });
    }
    else {}
    return val;
}
function del(target, key) {
    if ( true && (isUndef(target) || isPrimitive(target))) {
        warn("Cannot delete reactive property on undefined, null, or primitive value: ".concat(target));
    }
    if (isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return;
    }
    var ob = target.__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
         true &&
            warn('Avoid deleting properties on a Vue instance or its root $data ' +
                '- just set it to null.');
        return;
    }
    if (isReadonly(target)) {
         true &&
            warn("Delete operation on key \"".concat(key, "\" failed: target is readonly."));
        return;
    }
    if (!hasOwn(target, key)) {
        return;
    }
    delete target[key];
    if (!ob) {
        return;
    }
    if (true) {
        ob.dep.notify({
            type: "delete" /* TriggerOpTypes.DELETE */,
            target: target,
            key: key
        });
    }
    else {}
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
        e = value[i];
        if (e && e.__ob__) {
            e.__ob__.dep.depend();
        }
        if (isArray(e)) {
            dependArray(e);
        }
    }
}

function reactive(target) {
    makeReactive(target, false);
    return target;
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
function shallowReactive(target) {
    makeReactive(target, true);
    def(target, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, true);
    return target;
}
function makeReactive(target, shallow) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (!isReadonly(target)) {
        if (true) {
            if (isArray(target)) {
                warn("Avoid using Array as root value for ".concat(shallow ? "shallowReactive()" : "reactive()", " as it cannot be tracked in watch() or watchEffect(). Use ").concat(shallow ? "shallowRef()" : "ref()", " instead. This is a Vue-2-only limitation."));
            }
            var existingOb = target && target.__ob__;
            if (existingOb && existingOb.shallow !== shallow) {
                warn("Target is already a ".concat(existingOb.shallow ? "" : "non-", "shallow reactive object, and cannot be converted to ").concat(shallow ? "" : "non-", "shallow."));
            }
        }
        var ob = observe(target, shallow, isServerRendering() /* ssr mock reactivity */);
        if ( true && !ob) {
            if (target == null || isPrimitive(target)) {
                warn("value cannot be made reactive: ".concat(String(target)));
            }
            if (isCollectionType(target)) {
                warn("Vue 2 does not support reactive collection types such as Map or Set.");
            }
        }
    }
}
function isReactive(value) {
    if (isReadonly(value)) {
        return isReactive(value["__v_raw" /* ReactiveFlags.RAW */]);
    }
    return !!(value && value.__ob__);
}
function isShallow(value) {
    return !!(value && value.__v_isShallow);
}
function isReadonly(value) {
    return !!(value && value.__v_isReadonly);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    var raw = observed && observed["__v_raw" /* ReactiveFlags.RAW */];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    // non-extensible objects won't be observed anyway
    if (Object.isExtensible(value)) {
        def(value, "__v_skip" /* ReactiveFlags.SKIP */, true);
    }
    return value;
}
/**
 * @internal
 */
function isCollectionType(value) {
    var type = toRawType(value);
    return (type === 'Map' || type === 'WeakMap' || type === 'Set' || type === 'WeakSet');
}

/**
 * @internal
 */
var RefFlag = "__v_isRef";
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function ref$1(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
        return rawValue;
    }
    var ref = {};
    def(ref, RefFlag, true);
    def(ref, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, shallow);
    def(ref, 'dep', defineReactive(ref, 'value', rawValue, null, shallow, isServerRendering()));
    return ref;
}
function triggerRef(ref) {
    if ( true && !ref.dep) {
        warn("received object is not a triggerable ref.");
    }
    if (true) {
        ref.dep &&
            ref.dep.notify({
                type: "set" /* TriggerOpTypes.SET */,
                target: ref,
                key: 'value'
            });
    }
    else {}
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
function proxyRefs(objectWithRefs) {
    if (isReactive(objectWithRefs)) {
        return objectWithRefs;
    }
    var proxy = {};
    var keys = Object.keys(objectWithRefs);
    for (var i = 0; i < keys.length; i++) {
        proxyWithRefUnwrap(proxy, objectWithRefs, keys[i]);
    }
    return proxy;
}
function proxyWithRefUnwrap(target, source, key) {
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            var val = source[key];
            if (isRef(val)) {
                return val.value;
            }
            else {
                var ob = val && val.__ob__;
                if (ob)
                    ob.dep.depend();
                return val;
            }
        },
        set: function (value) {
            var oldValue = source[key];
            if (isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
            }
            else {
                source[key] = value;
            }
        }
    });
}
function customRef(factory) {
    var dep = new Dep();
    var _a = factory(function () {
        if (true) {
            dep.depend({
                target: ref,
                type: "get" /* TrackOpTypes.GET */,
                key: 'value'
            });
        }
        else {}
    }, function () {
        if (true) {
            dep.notify({
                target: ref,
                type: "set" /* TriggerOpTypes.SET */,
                key: 'value'
            });
        }
        else {}
    }), get = _a.get, set = _a.set;
    var ref = {
        get value() {
            return get();
        },
        set value(newVal) {
            set(newVal);
        }
    };
    def(ref, RefFlag, true);
    return ref;
}
function toRefs(object) {
    if ( true && !isReactive(object)) {
        warn("toRefs() expects a reactive object but received a plain one.");
    }
    var ret = isArray(object) ? new Array(object.length) : {};
    for (var key in object) {
        ret[key] = toRef(object, key);
    }
    return ret;
}
function toRef(object, key, defaultValue) {
    var val = object[key];
    if (isRef(val)) {
        return val;
    }
    var ref = {
        get value() {
            var val = object[key];
            return val === undefined ? defaultValue : val;
        },
        set value(newVal) {
            object[key] = newVal;
        }
    };
    def(ref, RefFlag, true);
    return ref;
}

var rawToReadonlyFlag = "__v_rawToReadonly";
var rawToShallowReadonlyFlag = "__v_rawToShallowReadonly";
function readonly(target) {
    return createReadonly(target, false);
}
function createReadonly(target, shallow) {
    if (!isPlainObject(target)) {
        if (true) {
            if (isArray(target)) {
                warn("Vue 2 does not support readonly arrays.");
            }
            else if (isCollectionType(target)) {
                warn("Vue 2 does not support readonly collection types such as Map or Set.");
            }
            else {
                warn("value cannot be made readonly: ".concat(typeof target));
            }
        }
        return target;
    }
    if ( true && !Object.isExtensible(target)) {
        warn("Vue 2 does not support creating readonly proxy for non-extensible object.");
    }
    // already a readonly object
    if (isReadonly(target)) {
        return target;
    }
    // already has a readonly proxy
    var existingFlag = shallow ? rawToShallowReadonlyFlag : rawToReadonlyFlag;
    var existingProxy = target[existingFlag];
    if (existingProxy) {
        return existingProxy;
    }
    var proxy = Object.create(Object.getPrototypeOf(target));
    def(target, existingFlag, proxy);
    def(proxy, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */, true);
    def(proxy, "__v_raw" /* ReactiveFlags.RAW */, target);
    if (isRef(target)) {
        def(proxy, RefFlag, true);
    }
    if (shallow || isShallow(target)) {
        def(proxy, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, true);
    }
    var keys = Object.keys(target);
    for (var i = 0; i < keys.length; i++) {
        defineReadonlyProperty(proxy, target, keys[i], shallow);
    }
    return proxy;
}
function defineReadonlyProperty(proxy, target, key, shallow) {
    Object.defineProperty(proxy, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            var val = target[key];
            return shallow || !isPlainObject(val) ? val : readonly(val);
        },
        set: function () {
             true &&
                warn("Set operation on key \"".concat(key, "\" failed: target is readonly."));
        }
    });
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */
function shallowReadonly(target) {
    return createReadonly(target, true);
}

function computed(getterOrOptions, debugOptions) {
    var getter;
    var setter;
    var onlyGetter = isFunction(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter =  true
            ? function () {
                warn('Write operation failed: computed value is readonly');
            }
            : 0;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    var watcher = isServerRendering()
        ? null
        : new Watcher(currentInstance, getter, noop, { lazy: true });
    if ( true && watcher && debugOptions) {
        watcher.onTrack = debugOptions.onTrack;
        watcher.onTrigger = debugOptions.onTrigger;
    }
    var ref = {
        // some libs rely on the presence effect for checking computed refs
        // from normal refs, but the implementation doesn't matter
        effect: watcher,
        get value() {
            if (watcher) {
                if (watcher.dirty) {
                    watcher.evaluate();
                }
                if (Dep.target) {
                    if ( true && Dep.target.onTrack) {
                        Dep.target.onTrack({
                            effect: Dep.target,
                            target: ref,
                            type: "get" /* TrackOpTypes.GET */,
                            key: 'value'
                        });
                    }
                    watcher.depend();
                }
                return watcher.value;
            }
            else {
                return getter();
            }
        },
        set value(newVal) {
            setter(newVal);
        }
    };
    def(ref, RefFlag, true);
    def(ref, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */, onlyGetter);
    return ref;
}

var WATCHER = "watcher";
var WATCHER_CB = "".concat(WATCHER, " callback");
var WATCHER_GETTER = "".concat(WATCHER, " getter");
var WATCHER_CLEANUP = "".concat(WATCHER, " cleanup");
// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, ( true
        ? __assign(__assign({}, options), { flush: 'post' }) : 0));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, ( true
        ? __assign(__assign({}, options), { flush: 'sync' }) : 0));
}
// initial value for watchers to trigger on undefined initial values
var INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if ( true && typeof cb !== 'function') {
        warn("`watch(fn, options?)` signature has been moved to a separate API. " +
            "Use `watchEffect(fn, options?)` instead. `watch` now only " +
            "supports `watch(source, cb, options?) signature.");
    }
    return doWatch(source, cb, options);
}
function doWatch(source, cb, _a) {
    var _b = _a === void 0 ? emptyObject : _a, immediate = _b.immediate, deep = _b.deep, _c = _b.flush, flush = _c === void 0 ? 'pre' : _c, onTrack = _b.onTrack, onTrigger = _b.onTrigger;
    if ( true && !cb) {
        if (immediate !== undefined) {
            warn("watch() \"immediate\" option is only respected when using the " +
                "watch(source, callback, options?) signature.");
        }
        if (deep !== undefined) {
            warn("watch() \"deep\" option is only respected when using the " +
                "watch(source, callback, options?) signature.");
        }
    }
    var warnInvalidSource = function (s) {
        warn("Invalid watch source: ".concat(s, ". A watch source can only be a getter/effect ") +
            "function, a ref, a reactive object, or an array of these types.");
    };
    var instance = currentInstance;
    var call = function (fn, type, args) {
        if (args === void 0) { args = null; }
        var res = invokeWithErrorHandling(fn, null, args, instance, type);
        if (deep && res && res.__ob__)
            res.__ob__.dep.depend();
        return res;
    };
    var getter;
    var forceTrigger = false;
    var isMultiSource = false;
    if (isRef(source)) {
        getter = function () { return source.value; };
        forceTrigger = isShallow(source);
    }
    else if (isReactive(source)) {
        getter = function () {
            source.__ob__.dep.depend();
            return source;
        };
        deep = true;
    }
    else if (isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some(function (s) { return isReactive(s) || isShallow(s); });
        getter = function () {
            return source.map(function (s) {
                if (isRef(s)) {
                    return s.value;
                }
                else if (isReactive(s)) {
                    s.__ob__.dep.depend();
                    return traverse(s);
                }
                else if (isFunction(s)) {
                    return call(s, WATCHER_GETTER);
                }
                else {
                     true && warnInvalidSource(s);
                }
            });
        };
    }
    else if (isFunction(source)) {
        if (cb) {
            // getter with cb
            getter = function () { return call(source, WATCHER_GETTER); };
        }
        else {
            // no cb -> simple effect
            getter = function () {
                if (instance && instance._isDestroyed) {
                    return;
                }
                if (cleanup) {
                    cleanup();
                }
                return call(source, WATCHER, [onCleanup]);
            };
        }
    }
    else {
        getter = noop;
         true && warnInvalidSource(source);
    }
    if (cb && deep) {
        var baseGetter_1 = getter;
        getter = function () { return traverse(baseGetter_1()); };
    }
    var cleanup;
    var onCleanup = function (fn) {
        cleanup = watcher.onStop = function () {
            call(fn, WATCHER_CLEANUP);
        };
    };
    // in SSR there is no need to setup an actual effect, and it should be noop
    // unless it's eager
    if (isServerRendering()) {
        // we will also not call the invalidate callback (+ runner is not set up)
        onCleanup = noop;
        if (!cb) {
            getter();
        }
        else if (immediate) {
            call(cb, WATCHER_CB, [
                getter(),
                isMultiSource ? [] : undefined,
                onCleanup
            ]);
        }
        return noop;
    }
    var watcher = new Watcher(currentInstance, getter, noop, {
        lazy: true
    });
    watcher.noRecurse = !cb;
    var oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    // overwrite default run
    watcher.run = function () {
        if (!watcher.active) {
            return;
        }
        if (cb) {
            // watch(source, cb)
            var newValue = watcher.get();
            if (deep ||
                forceTrigger ||
                (isMultiSource
                    ? newValue.some(function (v, i) {
                        return hasChanged(v, oldValue[i]);
                    })
                    : hasChanged(newValue, oldValue))) {
                // cleanup before running cb again
                if (cleanup) {
                    cleanup();
                }
                call(cb, WATCHER_CB, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        }
        else {
            // watchEffect
            watcher.get();
        }
    };
    if (flush === 'sync') {
        watcher.update = watcher.run;
    }
    else if (flush === 'post') {
        watcher.post = true;
        watcher.update = function () { return queueWatcher(watcher); };
    }
    else {
        // pre
        watcher.update = function () {
            if (instance && instance === currentInstance && !instance._isMounted) {
                // pre-watcher triggered before
                var buffer = instance._preWatchers || (instance._preWatchers = []);
                if (buffer.indexOf(watcher) < 0)
                    buffer.push(watcher);
            }
            else {
                queueWatcher(watcher);
            }
        };
    }
    if (true) {
        watcher.onTrack = onTrack;
        watcher.onTrigger = onTrigger;
    }
    // initial run
    if (cb) {
        if (immediate) {
            watcher.run();
        }
        else {
            oldValue = watcher.get();
        }
    }
    else if (flush === 'post' && instance) {
        instance.$once('hook:mounted', function () { return watcher.get(); });
    }
    else {
        watcher.get();
    }
    return function () {
        watcher.teardown();
    };
}

var activeEffectScope;
var EffectScope = /** @class */ (function () {
    function EffectScope(detached) {
        if (detached === void 0) { detached = false; }
        this.detached = detached;
        /**
         * @internal
         */
        this.active = true;
        /**
         * @internal
         */
        this.effects = [];
        /**
         * @internal
         */
        this.cleanups = [];
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) {
            this.index =
                (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
    }
    EffectScope.prototype.run = function (fn) {
        if (this.active) {
            var currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            }
            finally {
                activeEffectScope = currentEffectScope;
            }
        }
        else if (true) {
            warn("cannot run an inactive effect scope.");
        }
    };
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    EffectScope.prototype.on = function () {
        activeEffectScope = this;
    };
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    EffectScope.prototype.off = function () {
        activeEffectScope = this.parent;
    };
    EffectScope.prototype.stop = function (fromParent) {
        if (this.active) {
            var i = void 0, l = void 0;
            for (i = 0, l = this.effects.length; i < l; i++) {
                this.effects[i].teardown();
            }
            for (i = 0, l = this.cleanups.length; i < l; i++) {
                this.cleanups[i]();
            }
            if (this.scopes) {
                for (i = 0, l = this.scopes.length; i < l; i++) {
                    this.scopes[i].stop(true);
                }
            }
            // nested scope, dereference from parent to avoid memory leaks
            if (!this.detached && this.parent && !fromParent) {
                // optimized O(1) removal
                var last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.parent = undefined;
            this.active = false;
        }
    };
    return EffectScope;
}());
function effectScope(detached) {
    return new EffectScope(detached);
}
/**
 * @internal
 */
function recordEffectScope(effect, scope) {
    if (scope === void 0) { scope = activeEffectScope; }
    if (scope && scope.active) {
        scope.effects.push(effect);
    }
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
    }
    else if (true) {
        warn("onScopeDispose() is called when there is no active effect scope" +
            " to be associated with.");
    }
}

function provide(key, value) {
    if (!currentInstance) {
        if (true) {
            warn("provide() can only be used inside setup().");
        }
    }
    else {
        // TS doesn't allow symbol as index type
        resolveProvided(currentInstance)[key] = value;
    }
}
function resolveProvided(vm) {
    // by default an instance inherits its parent's provides object
    // but when it needs to provide values of its own, it creates its
    // own provides object using parent provides object as prototype.
    // this way in `inject` we can simply look up injections from direct
    // parent and let the prototype chain do the work.
    var existing = vm._provided;
    var parentProvides = vm.$parent && vm.$parent._provided;
    if (parentProvides === existing) {
        return (vm._provided = Object.create(parentProvides));
    }
    else {
        return existing;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory) {
    if (treatDefaultAsFactory === void 0) { treatDefaultAsFactory = false; }
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    var instance = currentInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the instance is at root
        var provides = instance.$parent && instance.$parent._provided;
        if (provides && key in provides) {
            // TS doesn't allow symbol as index type
            return provides[key];
        }
        else if (arguments.length > 1) {
            return treatDefaultAsFactory && isFunction(defaultValue)
                ? defaultValue.call(instance)
                : defaultValue;
        }
        else if (true) {
            warn("injection \"".concat(String(key), "\" not found."));
        }
    }
    else if (true) {
        warn("inject() can only be used inside setup() or functional components.");
    }
}

var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
        name: name,
        once: once,
        capture: capture,
        passive: passive
    };
});
function createFnInvoker(fns, vm) {
    function invoker() {
        var fns = invoker.fns;
        if (isArray(fns)) {
            var cloned = fns.slice();
            for (var i = 0; i < cloned.length; i++) {
                invokeWithErrorHandling(cloned[i], null, arguments, vm, "v-on handler");
            }
        }
        else {
            // return handler return value for single handlers
            return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
        }
    }
    invoker.fns = fns;
    return invoker;
}
function updateListeners(on, oldOn, add, remove, createOnceHandler, vm) {
    var name, cur, old, event;
    for (name in on) {
        cur = on[name];
        old = oldOn[name];
        event = normalizeEvent(name);
        if (isUndef(cur)) {
             true &&
                warn("Invalid handler for event \"".concat(event.name, "\": got ") + String(cur), vm);
        }
        else if (isUndef(old)) {
            if (isUndef(cur.fns)) {
                cur = on[name] = createFnInvoker(cur, vm);
            }
            if (isTrue(event.once)) {
                cur = on[name] = createOnceHandler(event.name, cur, event.capture);
            }
            add(event.name, cur, event.capture, event.passive, event.params);
        }
        else if (cur !== old) {
            old.fns = cur;
            on[name] = old;
        }
    }
    for (name in oldOn) {
        if (isUndef(on[name])) {
            event = normalizeEvent(name);
            remove(event.name, oldOn[name], event.capture);
        }
    }
}

function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) {
        def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];
    function wrappedHook() {
        hook.apply(this, arguments);
        // important: remove merged hook to ensure it's called only once
        // and prevent memory leak
        remove$2(invoker.fns, wrappedHook);
    }
    if (isUndef(oldHook)) {
        // no existing hook
        invoker = createFnInvoker([wrappedHook]);
    }
    else {
        /* istanbul ignore if */
        if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
            // already a merged invoker
            invoker = oldHook;
            invoker.fns.push(wrappedHook);
        }
        else {
            // existing plain hook
            invoker = createFnInvoker([oldHook, wrappedHook]);
        }
    }
    invoker.merged = true;
    def[hookKey] = invoker;
}

function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
        return;
    }
    var res = {};
    var attrs = data.attrs, props = data.props;
    if (isDef(attrs) || isDef(props)) {
        for (var key in propOptions) {
            var altKey = hyphenate(key);
            if (true) {
                var keyInLowerCase = key.toLowerCase();
                if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
                    tip("Prop \"".concat(keyInLowerCase, "\" is passed to component ") +
                        "".concat(formatComponentName(
                        // @ts-expect-error tag is string
                        tag || Ctor), ", but the declared prop name is") +
                        " \"".concat(key, "\". ") +
                        "Note that HTML attributes are case-insensitive and camelCased " +
                        "props need to use their kebab-case equivalents when using in-DOM " +
                        "templates. You should probably use \"".concat(altKey, "\" instead of \"").concat(key, "\"."));
                }
            }
            checkProp(res, props, key, altKey, true) ||
                checkProp(res, attrs, key, altKey, false);
        }
    }
    return res;
}
function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
        if (hasOwn(hash, key)) {
            res[key] = hash[key];
            if (!preserve) {
                delete hash[key];
            }
            return true;
        }
        else if (hasOwn(hash, altKey)) {
            res[key] = hash[altKey];
            if (!preserve) {
                delete hash[altKey];
            }
            return true;
        }
    }
    return false;
}

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
        if (isArray(children[i])) {
            return Array.prototype.concat.apply([], children);
        }
    }
    return children;
}
// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren(children) {
    return isPrimitive(children)
        ? [createTextVNode(children)]
        : isArray(children)
            ? normalizeArrayChildren(children)
            : undefined;
}
function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}
function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
        c = children[i];
        if (isUndef(c) || typeof c === 'boolean')
            continue;
        lastIndex = res.length - 1;
        last = res[lastIndex];
        //  nested
        if (isArray(c)) {
            if (c.length > 0) {
                c = normalizeArrayChildren(c, "".concat(nestedIndex || '', "_").concat(i));
                // merge adjacent text nodes
                if (isTextNode(c[0]) && isTextNode(last)) {
                    res[lastIndex] = createTextVNode(last.text + c[0].text);
                    c.shift();
                }
                res.push.apply(res, c);
            }
        }
        else if (isPrimitive(c)) {
            if (isTextNode(last)) {
                // merge adjacent text nodes
                // this is necessary for SSR hydration because text nodes are
                // essentially merged when rendered to HTML strings
                res[lastIndex] = createTextVNode(last.text + c);
            }
            else if (c !== '') {
                // convert primitive to vnode
                res.push(createTextVNode(c));
            }
        }
        else {
            if (isTextNode(c) && isTextNode(last)) {
                // merge adjacent text nodes
                res[lastIndex] = createTextVNode(last.text + c.text);
            }
            else {
                // default key for nested array children (likely generated by v-for)
                if (isTrue(children._isVList) &&
                    isDef(c.tag) &&
                    isUndef(c.key) &&
                    isDef(nestedIndex)) {
                    c.key = "__vlist".concat(nestedIndex, "_").concat(i, "__");
                }
                res.push(c);
            }
        }
    }
    return res;
}

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList(val, render) {
    var ret = null, i, l, keys, key;
    if (isArray(val) || typeof val === 'string') {
        ret = new Array(val.length);
        for (i = 0, l = val.length; i < l; i++) {
            ret[i] = render(val[i], i);
        }
    }
    else if (typeof val === 'number') {
        ret = new Array(val);
        for (i = 0; i < val; i++) {
            ret[i] = render(i + 1, i);
        }
    }
    else if (isObject(val)) {
        if (hasSymbol && val[Symbol.iterator]) {
            ret = [];
            var iterator = val[Symbol.iterator]();
            var result = iterator.next();
            while (!result.done) {
                ret.push(render(result.value, ret.length));
                result = iterator.next();
            }
        }
        else {
            keys = Object.keys(val);
            ret = new Array(keys.length);
            for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i];
                ret[i] = render(val[key], key, i);
            }
        }
    }
    if (!isDef(ret)) {
        ret = [];
    }
    ret._isVList = true;
    return ret;
}

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot(name, fallbackRender, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) {
        // scoped slot
        props = props || {};
        if (bindObject) {
            if ( true && !isObject(bindObject)) {
                warn('slot v-bind without argument expects an Object', this);
            }
            props = extend(extend({}, bindObject), props);
        }
        nodes =
            scopedSlotFn(props) ||
                (isFunction(fallbackRender) ? fallbackRender() : fallbackRender);
    }
    else {
        nodes =
            this.$slots[name] ||
                (isFunction(fallbackRender) ? fallbackRender() : fallbackRender);
    }
    var target = props && props.slot;
    if (target) {
        return this.$createElement('template', { slot: target }, nodes);
    }
    else {
        return nodes;
    }
}

/**
 * Runtime helper for resolving filters
 */
function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
}

function isKeyNotMatch(expect, actual) {
    if (isArray(expect)) {
        return expect.indexOf(actual) === -1;
    }
    else {
        return expect !== actual;
    }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
        return isKeyNotMatch(builtInKeyName, eventKeyName);
    }
    else if (mappedKeyCode) {
        return isKeyNotMatch(mappedKeyCode, eventKeyCode);
    }
    else if (eventKeyName) {
        return hyphenate(eventKeyName) !== key;
    }
    return eventKeyCode === undefined;
}

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
        if (!isObject(value)) {
             true &&
                warn('v-bind without argument expects an Object or Array value', this);
        }
        else {
            if (isArray(value)) {
                value = toObject(value);
            }
            var hash = void 0;
            var _loop_1 = function (key) {
                if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
                    hash = data;
                }
                else {
                    var type = data.attrs && data.attrs.type;
                    hash =
                        asProp || config.mustUseProp(tag, type, key)
                            ? data.domProps || (data.domProps = {})
                            : data.attrs || (data.attrs = {});
                }
                var camelizedKey = camelize(key);
                var hyphenatedKey = hyphenate(key);
                if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
                    hash[key] = value[key];
                    if (isSync) {
                        var on = data.on || (data.on = {});
                        on["update:".concat(key)] = function ($event) {
                            value[key] = $event;
                        };
                    }
                }
            };
            for (var key in value) {
                _loop_1(key);
            }
        }
    }
    return data;
}

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic(index, isInFor) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
        return tree;
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, this._c, this // for render fns generated for functional component templates
    );
    markStatic(tree, "__static__".concat(index), false);
    return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce(tree, index, key) {
    markStatic(tree, "__once__".concat(index).concat(key ? "_".concat(key) : ""), true);
    return tree;
}
function markStatic(tree, key, isOnce) {
    if (isArray(tree)) {
        for (var i = 0; i < tree.length; i++) {
            if (tree[i] && typeof tree[i] !== 'string') {
                markStaticNode(tree[i], "".concat(key, "_").concat(i), isOnce);
            }
        }
    }
    else {
        markStaticNode(tree, key, isOnce);
    }
}
function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
}

function bindObjectListeners(data, value) {
    if (value) {
        if (!isPlainObject(value)) {
             true && warn('v-on without argument expects an Object value', this);
        }
        else {
            var on = (data.on = data.on ? extend({}, data.on) : {});
            for (var key in value) {
                var existing = on[key];
                var ours = value[key];
                on[key] = existing ? [].concat(existing, ours) : ours;
            }
        }
    }
    return data;
}

function resolveScopedSlots(fns, res, 
// the following are added in 2.6
hasDynamicKeys, contentHashKey) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
        var slot = fns[i];
        if (isArray(slot)) {
            resolveScopedSlots(slot, res, hasDynamicKeys);
        }
        else if (slot) {
            // marker for reverse proxying v-slot without scope on this.$slots
            // @ts-expect-error
            if (slot.proxy) {
                // @ts-expect-error
                slot.fn.proxy = true;
            }
            res[slot.key] = slot.fn;
        }
    }
    if (contentHashKey) {
        res.$key = contentHashKey;
    }
    return res;
}

// helper to process dynamic keys for dynamic arguments in v-bind and v-on.
function bindDynamicKeys(baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
        var key = values[i];
        if (typeof key === 'string' && key) {
            baseObj[values[i]] = values[i + 1];
        }
        else if ( true && key !== '' && key !== null) {
            // null is a special value for explicitly removing a binding
            warn("Invalid value for dynamic directive argument (expected string or null): ".concat(key), this);
        }
    }
    return baseObj;
}
// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier(value, symbol) {
    return typeof value === 'string' ? symbol + value : value;
}

function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
}

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots(children, context) {
    if (!children || !children.length) {
        return {};
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
        var child = children[i];
        var data = child.data;
        // remove slot attribute if the node is resolved as a Vue slot node
        if (data && data.attrs && data.attrs.slot) {
            delete data.attrs.slot;
        }
        // named slots should only be respected if the vnode was rendered in the
        // same context.
        if ((child.context === context || child.fnContext === context) &&
            data &&
            data.slot != null) {
            var name_1 = data.slot;
            var slot = slots[name_1] || (slots[name_1] = []);
            if (child.tag === 'template') {
                slot.push.apply(slot, child.children || []);
            }
            else {
                slot.push(child);
            }
        }
        else {
            (slots.default || (slots.default = [])).push(child);
        }
    }
    // ignore slots that contains only whitespace
    for (var name_2 in slots) {
        if (slots[name_2].every(isWhitespace)) {
            delete slots[name_2];
        }
    }
    return slots;
}
function isWhitespace(node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' ';
}

function isAsyncPlaceholder(node) {
    // @ts-expect-error not really boolean type
    return node.isComment && node.asyncFactory;
}

function normalizeScopedSlots(ownerVm, scopedSlots, normalSlots, prevScopedSlots) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = scopedSlots ? !!scopedSlots.$stable : !hasNormalSlots;
    var key = scopedSlots && scopedSlots.$key;
    if (!scopedSlots) {
        res = {};
    }
    else if (scopedSlots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return scopedSlots._normalized;
    }
    else if (isStable &&
        prevScopedSlots &&
        prevScopedSlots !== emptyObject &&
        key === prevScopedSlots.$key &&
        !hasNormalSlots &&
        !prevScopedSlots.$hasNormal) {
        // fast path 2: stable scoped slots w/ no normal slots to proxy,
        // only need to normalize once
        return prevScopedSlots;
    }
    else {
        res = {};
        for (var key_1 in scopedSlots) {
            if (scopedSlots[key_1] && key_1[0] !== '$') {
                res[key_1] = normalizeScopedSlot(ownerVm, normalSlots, key_1, scopedSlots[key_1]);
            }
        }
    }
    // expose normal slots on scopedSlots
    for (var key_2 in normalSlots) {
        if (!(key_2 in res)) {
            res[key_2] = proxyNormalSlot(normalSlots, key_2);
        }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (scopedSlots && Object.isExtensible(scopedSlots)) {
        scopedSlots._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res;
}
function normalizeScopedSlot(vm, normalSlots, key, fn) {
    var normalized = function () {
        var cur = currentInstance;
        setCurrentInstance(vm);
        var res = arguments.length ? fn.apply(null, arguments) : fn({});
        res =
            res && typeof res === 'object' && !isArray(res)
                ? [res] // single vnode
                : normalizeChildren(res);
        var vnode = res && res[0];
        setCurrentInstance(cur);
        return res &&
            (!vnode ||
                (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode))) // #9658, #10391
            ? undefined
            : res;
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
        Object.defineProperty(normalSlots, key, {
            get: normalized,
            enumerable: true,
            configurable: true
        });
    }
    return normalized;
}
function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; };
}

function initSetup(vm) {
    var options = vm.$options;
    var setup = options.setup;
    if (setup) {
        var ctx = (vm._setupContext = createSetupContext(vm));
        setCurrentInstance(vm);
        pushTarget();
        var setupResult = invokeWithErrorHandling(setup, null, [vm._props || shallowReactive({}), ctx], vm, "setup");
        popTarget();
        setCurrentInstance();
        if (isFunction(setupResult)) {
            // render function
            // @ts-ignore
            options.render = setupResult;
        }
        else if (isObject(setupResult)) {
            // bindings
            if ( true && setupResult instanceof VNode) {
                warn("setup() should not return VNodes directly - " +
                    "return a render function instead.");
            }
            vm._setupState = setupResult;
            // __sfc indicates compiled bindings from <script setup>
            if (!setupResult.__sfc) {
                for (var key in setupResult) {
                    if (!isReserved(key)) {
                        proxyWithRefUnwrap(vm, setupResult, key);
                    }
                    else if (true) {
                        warn("Avoid using variables that start with _ or $ in setup().");
                    }
                }
            }
            else {
                // exposed for compiled render fn
                var proxy = (vm._setupProxy = {});
                for (var key in setupResult) {
                    if (key !== '__sfc') {
                        proxyWithRefUnwrap(proxy, setupResult, key);
                    }
                }
            }
        }
        else if ( true && setupResult !== undefined) {
            warn("setup() should return an object. Received: ".concat(setupResult === null ? 'null' : typeof setupResult));
        }
    }
}
function createSetupContext(vm) {
    var exposeCalled = false;
    return {
        get attrs() {
            if (!vm._attrsProxy) {
                var proxy = (vm._attrsProxy = {});
                def(proxy, '_v_attr_proxy', true);
                syncSetupProxy(proxy, vm.$attrs, emptyObject, vm, '$attrs');
            }
            return vm._attrsProxy;
        },
        get listeners() {
            if (!vm._listenersProxy) {
                var proxy = (vm._listenersProxy = {});
                syncSetupProxy(proxy, vm.$listeners, emptyObject, vm, '$listeners');
            }
            return vm._listenersProxy;
        },
        get slots() {
            return initSlotsProxy(vm);
        },
        emit: bind(vm.$emit, vm),
        expose: function (exposed) {
            if (true) {
                if (exposeCalled) {
                    warn("expose() should be called only once per setup().", vm);
                }
                exposeCalled = true;
            }
            if (exposed) {
                Object.keys(exposed).forEach(function (key) {
                    return proxyWithRefUnwrap(vm, exposed, key);
                });
            }
        }
    };
}
function syncSetupProxy(to, from, prev, instance, type) {
    var changed = false;
    for (var key in from) {
        if (!(key in to)) {
            changed = true;
            defineProxyAttr(to, key, instance, type);
        }
        else if (from[key] !== prev[key]) {
            changed = true;
        }
    }
    for (var key in to) {
        if (!(key in from)) {
            changed = true;
            delete to[key];
        }
    }
    return changed;
}
function defineProxyAttr(proxy, key, instance, type) {
    Object.defineProperty(proxy, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            return instance[type][key];
        }
    });
}
function initSlotsProxy(vm) {
    if (!vm._slotsProxy) {
        syncSetupSlots((vm._slotsProxy = {}), vm.$scopedSlots);
    }
    return vm._slotsProxy;
}
function syncSetupSlots(to, from) {
    for (var key in from) {
        to[key] = from[key];
    }
    for (var key in to) {
        if (!(key in from)) {
            delete to[key];
        }
    }
}
/**
 * @internal use manual type def because public setup context type relies on
 * legacy VNode types
 */
function useSlots() {
    return getContext().slots;
}
/**
 * @internal use manual type def because public setup context type relies on
 * legacy VNode types
 */
function useAttrs() {
    return getContext().attrs;
}
/**
 * Vue 2 only
 * @internal use manual type def because public setup context type relies on
 * legacy VNode types
 */
function useListeners() {
    return getContext().listeners;
}
function getContext() {
    if ( true && !currentInstance) {
        warn("useContext() called without active instance.");
    }
    var vm = currentInstance;
    return vm._setupContext || (vm._setupContext = createSetupContext(vm));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */
function mergeDefaults(raw, defaults) {
    var props = isArray(raw)
        ? raw.reduce(function (normalized, p) { return ((normalized[p] = {}), normalized); }, {})
        : raw;
    for (var key in defaults) {
        var opt = props[key];
        if (opt) {
            if (isArray(opt) || isFunction(opt)) {
                props[key] = { type: opt, default: defaults[key] };
            }
            else {
                opt.default = defaults[key];
            }
        }
        else if (opt === null) {
            props[key] = { default: defaults[key] };
        }
        else if (true) {
            warn("props default key \"".concat(key, "\" has no corresponding declaration."));
        }
    }
    return props;
}

function initRender(vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = (vm.$vnode = options._parentVnode); // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = parentVnode
        ? normalizeScopedSlots(vm.$parent, parentVnode.data.scopedSlots, vm.$slots)
        : emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    // @ts-expect-error
    vm._c = function (a, b, c, d) { return createElement$1(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    // @ts-expect-error
    vm.$createElement = function (a, b, c, d) { return createElement$1(vm, a, b, c, d, true); };
    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;
    /* istanbul ignore else */
    if (true) {
        defineReactive(vm, '$attrs', (parentData && parentData.attrs) || emptyObject, function () {
            !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
        }, true);
        defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
            !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
        }, true);
    }
    else {}
}
var currentRenderingInstance = null;
function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);
    Vue.prototype.$nextTick = function (fn) {
        return nextTick(fn, this);
    };
    Vue.prototype._render = function () {
        var vm = this;
        var _a = vm.$options, render = _a.render, _parentVnode = _a._parentVnode;
        if (_parentVnode && vm._isMounted) {
            vm.$scopedSlots = normalizeScopedSlots(vm.$parent, _parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
            if (vm._slotsProxy) {
                syncSetupSlots(vm._slotsProxy, vm.$scopedSlots);
            }
        }
        // set parent vnode. this allows render functions to have access
        // to the data on the placeholder node.
        vm.$vnode = _parentVnode;
        // render self
        var prevInst = currentInstance;
        var prevRenderInst = currentRenderingInstance;
        var vnode;
        try {
            setCurrentInstance(vm);
            currentRenderingInstance = vm;
            vnode = render.call(vm._renderProxy, vm.$createElement);
        }
        catch (e) {
            handleError(e, vm, "render");
            // return error render result,
            // or previous vnode to prevent render error causing blank component
            /* istanbul ignore else */
            if ( true && vm.$options.renderError) {
                try {
                    vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                }
                catch (e) {
                    handleError(e, vm, "renderError");
                    vnode = vm._vnode;
                }
            }
            else {
                vnode = vm._vnode;
            }
        }
        finally {
            currentRenderingInstance = prevRenderInst;
            setCurrentInstance(prevInst);
        }
        // if the returned array contains only a single node, allow it
        if (isArray(vnode) && vnode.length === 1) {
            vnode = vnode[0];
        }
        // return empty vnode in case the render function errored out
        if (!(vnode instanceof VNode)) {
            if ( true && isArray(vnode)) {
                warn('Multiple root nodes returned from render function. Render function ' +
                    'should return a single root node.', vm);
            }
            vnode = createEmptyVNode();
        }
        // set parent
        vnode.parent = _parentVnode;
        return vnode;
    };
}

function ensureCtor(comp, base) {
    if (comp.__esModule || (hasSymbol && comp[Symbol.toStringTag] === 'Module')) {
        comp = comp.default;
    }
    return isObject(comp) ? base.extend(comp) : comp;
}
function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node;
}
function resolveAsyncComponent(factory, baseCtor) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
        return factory.errorComp;
    }
    if (isDef(factory.resolved)) {
        return factory.resolved;
    }
    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
        // already pending
        factory.owners.push(owner);
    }
    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
        return factory.loadingComp;
    }
    if (owner && !isDef(factory.owners)) {
        var owners_1 = (factory.owners = [owner]);
        var sync_1 = true;
        var timerLoading_1 = null;
        var timerTimeout_1 = null;
        owner.$on('hook:destroyed', function () { return remove$2(owners_1, owner); });
        var forceRender_1 = function (renderCompleted) {
            for (var i = 0, l = owners_1.length; i < l; i++) {
                owners_1[i].$forceUpdate();
            }
            if (renderCompleted) {
                owners_1.length = 0;
                if (timerLoading_1 !== null) {
                    clearTimeout(timerLoading_1);
                    timerLoading_1 = null;
                }
                if (timerTimeout_1 !== null) {
                    clearTimeout(timerTimeout_1);
                    timerTimeout_1 = null;
                }
            }
        };
        var resolve = once(function (res) {
            // cache resolved
            factory.resolved = ensureCtor(res, baseCtor);
            // invoke callbacks only if this is not a synchronous resolve
            // (async resolves are shimmed as synchronous during SSR)
            if (!sync_1) {
                forceRender_1(true);
            }
            else {
                owners_1.length = 0;
            }
        });
        var reject_1 = once(function (reason) {
             true &&
                warn("Failed to resolve async component: ".concat(String(factory)) +
                    (reason ? "\nReason: ".concat(reason) : ''));
            if (isDef(factory.errorComp)) {
                factory.error = true;
                forceRender_1(true);
            }
        });
        var res_1 = factory(resolve, reject_1);
        if (isObject(res_1)) {
            if (isPromise(res_1)) {
                // () => Promise
                if (isUndef(factory.resolved)) {
                    res_1.then(resolve, reject_1);
                }
            }
            else if (isPromise(res_1.component)) {
                res_1.component.then(resolve, reject_1);
                if (isDef(res_1.error)) {
                    factory.errorComp = ensureCtor(res_1.error, baseCtor);
                }
                if (isDef(res_1.loading)) {
                    factory.loadingComp = ensureCtor(res_1.loading, baseCtor);
                    if (res_1.delay === 0) {
                        factory.loading = true;
                    }
                    else {
                        // @ts-expect-error NodeJS timeout type
                        timerLoading_1 = setTimeout(function () {
                            timerLoading_1 = null;
                            if (isUndef(factory.resolved) && isUndef(factory.error)) {
                                factory.loading = true;
                                forceRender_1(false);
                            }
                        }, res_1.delay || 200);
                    }
                }
                if (isDef(res_1.timeout)) {
                    // @ts-expect-error NodeJS timeout type
                    timerTimeout_1 = setTimeout(function () {
                        timerTimeout_1 = null;
                        if (isUndef(factory.resolved)) {
                            reject_1( true ? "timeout (".concat(res_1.timeout, "ms)") : 0);
                        }
                    }, res_1.timeout);
                }
            }
        }
        sync_1 = false;
        // return in case resolved synchronously
        return factory.loading ? factory.loadingComp : factory.resolved;
    }
}

function getFirstComponentChild(children) {
    if (isArray(children)) {
        for (var i = 0; i < children.length; i++) {
            var c = children[i];
            if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                return c;
            }
        }
    }
}

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;
// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement$1(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (isArray(data) || isPrimitive(data)) {
        normalizationType = children;
        children = data;
        data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
        normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType);
}
function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
         true &&
            warn("Avoid using observed data object as vnode data: ".concat(JSON.stringify(data), "\n") + 'Always create fresh vnode data objects in each render!', context);
        return createEmptyVNode();
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
        tag = data.is;
    }
    if (!tag) {
        // in case of component :is set to falsy value
        return createEmptyVNode();
    }
    // warn against non-primitive key
    if ( true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
        warn('Avoid using non-primitive value as key, ' +
            'use string/number value instead.', context);
    }
    // support single function children as default scoped slot
    if (isArray(children) && isFunction(children[0])) {
        data = data || {};
        data.scopedSlots = { default: children[0] };
        children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
        children = normalizeChildren(children);
    }
    else if (normalizationType === SIMPLE_NORMALIZE) {
        children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
        var Ctor = void 0;
        ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
        if (config.isReservedTag(tag)) {
            // platform built-in elements
            if ( true &&
                isDef(data) &&
                isDef(data.nativeOn) &&
                data.tag !== 'component') {
                warn("The .native modifier for v-on is only valid on components but it was used on <".concat(tag, ">."), context);
            }
            vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
        }
        else if ((!data || !data.pre) &&
            isDef((Ctor = resolveAsset(context.$options, 'components', tag)))) {
            // component
            vnode = createComponent(Ctor, data, context, children, tag);
        }
        else {
            // unknown or unlisted namespaced elements
            // check at runtime because it may get assigned a namespace when its
            // parent normalizes children
            vnode = new VNode(tag, data, children, undefined, undefined, context);
        }
    }
    else {
        // direct component options / constructor
        vnode = createComponent(tag, data, context, children);
    }
    if (isArray(vnode)) {
        return vnode;
    }
    else if (isDef(vnode)) {
        if (isDef(ns))
            applyNS(vnode, ns);
        if (isDef(data))
            registerDeepBindings(data);
        return vnode;
    }
    else {
        return createEmptyVNode();
    }
}
function applyNS(vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
        // use default namespace inside foreignObject
        ns = undefined;
        force = true;
    }
    if (isDef(vnode.children)) {
        for (var i = 0, l = vnode.children.length; i < l; i++) {
            var child = vnode.children[i];
            if (isDef(child.tag) &&
                (isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
                applyNS(child, ns, force);
            }
        }
    }
}
// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings(data) {
    if (isObject(data.style)) {
        traverse(data.style);
    }
    if (isObject(data.class)) {
        traverse(data.class);
    }
}

/**
 * @internal this function needs manual public type declaration because it relies
 * on previously manually authored types from Vue 2
 */
function h(type, props, children) {
    if (!currentInstance) {
         true &&
            warn("globally imported h() can only be invoked when there is an active " +
                "component instance, e.g. synchronously in a component's render or setup function.");
    }
    return createElement$1(currentInstance, type, props, children, 2, true);
}

function handleError(err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
        if (vm) {
            var cur = vm;
            while ((cur = cur.$parent)) {
                var hooks = cur.$options.errorCaptured;
                if (hooks) {
                    for (var i = 0; i < hooks.length; i++) {
                        try {
                            var capture = hooks[i].call(cur, err, vm, info) === false;
                            if (capture)
                                return;
                        }
                        catch (e) {
                            globalHandleError(e, cur, 'errorCaptured hook');
                        }
                    }
                }
            }
        }
        globalHandleError(err, vm, info);
    }
    finally {
        popTarget();
    }
}
function invokeWithErrorHandling(handler, context, args, vm, info) {
    var res;
    try {
        res = args ? handler.apply(context, args) : handler.call(context);
        if (res && !res._isVue && isPromise(res) && !res._handled) {
            res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
            res._handled = true;
        }
    }
    catch (e) {
        handleError(e, vm, info);
    }
    return res;
}
function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
        try {
            return config.errorHandler.call(null, err, vm, info);
        }
        catch (e) {
            // if the user intentionally throws the original error in the handler,
            // do not log it twice
            if (e !== err) {
                logError(e, null, 'config.errorHandler');
            }
        }
    }
    logError(err, vm, info);
}
function logError(err, vm, info) {
    if (true) {
        warn("Error in ".concat(info, ": \"").concat(err.toString(), "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
        console.error(err);
    }
    else {
        throw err;
    }
}

/* globals MutationObserver */
var isUsingMicroTask = false;
var callbacks = [];
var pending = false;
function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
        copies[i]();
    }
}
// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;
// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p_1 = Promise.resolve();
    timerFunc = function () {
        p_1.then(flushCallbacks);
        // In problematic UIWebViews, Promise.then doesn't completely break, but
        // it can get stuck in a weird state where callbacks are pushed into the
        // microtask queue but the queue isn't being flushed, until the browser
        // needs to do some other work, e.g. handle a timer. Therefore we can
        // "force" the microtask queue to be flushed by adding an empty timer.
        if (isIOS)
            setTimeout(noop);
    };
    isUsingMicroTask = true;
}
else if (!isIE &&
    typeof MutationObserver !== 'undefined' &&
    (isNative(MutationObserver) ||
        // PhantomJS and iOS 7.x
        MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter_1 = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode_1 = document.createTextNode(String(counter_1));
    observer.observe(textNode_1, {
        characterData: true
    });
    timerFunc = function () {
        counter_1 = (counter_1 + 1) % 2;
        textNode_1.data = String(counter_1);
    };
    isUsingMicroTask = true;
}
else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Technically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
        setImmediate(flushCallbacks);
    };
}
else {
    // Fallback to setTimeout.
    timerFunc = function () {
        setTimeout(flushCallbacks, 0);
    };
}
/**
 * @internal
 */
function nextTick(cb, ctx) {
    var _resolve;
    callbacks.push(function () {
        if (cb) {
            try {
                cb.call(ctx);
            }
            catch (e) {
                handleError(e, ctx, 'nextTick');
            }
        }
        else if (_resolve) {
            _resolve(ctx);
        }
    });
    if (!pending) {
        pending = true;
        timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        });
    }
}

function useCssModule(name) {
    if (name === void 0) { name = '$style'; }
    /* istanbul ignore else */
    {
        if (!currentInstance) {
             true && warn("useCssModule must be called inside setup()");
            return emptyObject;
        }
        var mod = currentInstance[name];
        if (!mod) {
             true &&
                warn("Current instance does not have CSS module named \"".concat(name, "\"."));
            return emptyObject;
        }
        return mod;
    }
}

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVars(getter) {
    if (!inBrowser && !false)
        return;
    var instance = currentInstance;
    if (!instance) {
         true &&
            warn("useCssVars is called without current active component instance.");
        return;
    }
    watchPostEffect(function () {
        var el = instance.$el;
        var vars = getter(instance, instance._setupProxy);
        if (el && el.nodeType === 1) {
            var style = el.style;
            for (var key in vars) {
                style.setProperty("--".concat(key), vars[key]);
            }
        }
    });
}

/**
 * v3-compatible async component API.
 * @internal the type is manually declared in <root>/types/v3-define-async-component.d.ts
 * because it relies on existing manual types
 */
function defineAsyncComponent(source) {
    if (isFunction(source)) {
        source = { loader: source };
    }
    var loader = source.loader, loadingComponent = source.loadingComponent, errorComponent = source.errorComponent, _a = source.delay, delay = _a === void 0 ? 200 : _a, timeout = source.timeout, // undefined = never times out
    _b = source.suspensible, // undefined = never times out
    suspensible = _b === void 0 ? false : _b, // in Vue 3 default is true
    userOnError = source.onError;
    if ( true && suspensible) {
        warn("The suspensible option for async components is not supported in Vue2. It is ignored.");
    }
    var pendingRequest = null;
    var retries = 0;
    var retry = function () {
        retries++;
        pendingRequest = null;
        return load();
    };
    var load = function () {
        var thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest =
                loader()
                    .catch(function (err) {
                    err = err instanceof Error ? err : new Error(String(err));
                    if (userOnError) {
                        return new Promise(function (resolve, reject) {
                            var userRetry = function () { return resolve(retry()); };
                            var userFail = function () { return reject(err); };
                            userOnError(err, userRetry, userFail, retries + 1);
                        });
                    }
                    else {
                        throw err;
                    }
                })
                    .then(function (comp) {
                    if (thisRequest !== pendingRequest && pendingRequest) {
                        return pendingRequest;
                    }
                    if ( true && !comp) {
                        warn("Async component loader resolved to undefined. " +
                            "If you are using retry(), make sure to return its return value.");
                    }
                    // interop module default
                    if (comp &&
                        (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                        comp = comp.default;
                    }
                    if ( true && comp && !isObject(comp) && !isFunction(comp)) {
                        throw new Error("Invalid async component load result: ".concat(comp));
                    }
                    return comp;
                })));
    };
    return function () {
        var component = load();
        return {
            component: component,
            delay: delay,
            timeout: timeout,
            error: errorComponent,
            loading: loadingComponent
        };
    };
}

function createLifeCycle(hookName) {
    return function (fn, target) {
        if (target === void 0) { target = currentInstance; }
        if (!target) {
             true &&
                warn("".concat(formatName(hookName), " is called when there is no active component instance to be ") +
                    "associated with. " +
                    "Lifecycle injection APIs can only be used during execution of setup().");
            return;
        }
        return injectHook(target, hookName, fn);
    };
}
function formatName(name) {
    if (name === 'beforeDestroy') {
        name = 'beforeUnmount';
    }
    else if (name === 'destroyed') {
        name = 'unmounted';
    }
    return "on".concat(name[0].toUpperCase() + name.slice(1));
}
function injectHook(instance, hookName, fn) {
    var options = instance.$options;
    options[hookName] = mergeLifecycleHook(options[hookName], fn);
}
var onBeforeMount = createLifeCycle('beforeMount');
var onMounted = createLifeCycle('mounted');
var onBeforeUpdate = createLifeCycle('beforeUpdate');
var onUpdated = createLifeCycle('updated');
var onBeforeUnmount = createLifeCycle('beforeDestroy');
var onUnmounted = createLifeCycle('destroyed');
var onActivated = createLifeCycle('activated');
var onDeactivated = createLifeCycle('deactivated');
var onServerPrefetch = createLifeCycle('serverPrefetch');
var onRenderTracked = createLifeCycle('renderTracked');
var onRenderTriggered = createLifeCycle('renderTriggered');
var injectErrorCapturedHook = createLifeCycle('errorCaptured');
function onErrorCaptured(hook, target) {
    if (target === void 0) { target = currentInstance; }
    injectErrorCapturedHook(hook, target);
}

/**
 * Note: also update dist/vue.runtime.mjs when adding new exports to this file.
 */
var version = '2.7.16';
/**
 * @internal type is manually declared in <root>/types/v3-define-component.d.ts
 */
function defineComponent(options) {
    return options;
}

var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse(val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
    return val;
}
function _traverse(val, seen) {
    var i, keys;
    var isA = isArray(val);
    if ((!isA && !isObject(val)) ||
        val.__v_skip /* ReactiveFlags.SKIP */ ||
        Object.isFrozen(val) ||
        val instanceof VNode) {
        return;
    }
    if (val.__ob__) {
        var depId = val.__ob__.dep.id;
        if (seen.has(depId)) {
            return;
        }
        seen.add(depId);
    }
    if (isA) {
        i = val.length;
        while (i--)
            _traverse(val[i], seen);
    }
    else if (isRef(val)) {
        _traverse(val.value, seen);
    }
    else {
        keys = Object.keys(val);
        i = keys.length;
        while (i--)
            _traverse(val[keys[i]], seen);
    }
}

var uid$1 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 * @internal
 */
var Watcher = /** @class */ (function () {
    function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
        recordEffectScope(this, 
        // if the active effect scope is manually created (not a component scope),
        // prioritize it
        activeEffectScope && !activeEffectScope._vm
            ? activeEffectScope
            : vm
                ? vm._scope
                : undefined);
        if ((this.vm = vm) && isRenderWatcher) {
            vm._watcher = this;
        }
        // options
        if (options) {
            this.deep = !!options.deep;
            this.user = !!options.user;
            this.lazy = !!options.lazy;
            this.sync = !!options.sync;
            this.before = options.before;
            if (true) {
                this.onTrack = options.onTrack;
                this.onTrigger = options.onTrigger;
            }
        }
        else {
            this.deep = this.user = this.lazy = this.sync = false;
        }
        this.cb = cb;
        this.id = ++uid$1; // uid for batching
        this.active = true;
        this.post = false;
        this.dirty = this.lazy; // for lazy watchers
        this.deps = [];
        this.newDeps = [];
        this.depIds = new _Set();
        this.newDepIds = new _Set();
        this.expression =  true ? expOrFn.toString() : 0;
        // parse expression for getter
        if (isFunction(expOrFn)) {
            this.getter = expOrFn;
        }
        else {
            this.getter = parsePath(expOrFn);
            if (!this.getter) {
                this.getter = noop;
                 true &&
                    warn("Failed watching path: \"".concat(expOrFn, "\" ") +
                        'Watcher only accepts simple dot-delimited paths. ' +
                        'For full control, use a function instead.', vm);
            }
        }
        this.value = this.lazy ? undefined : this.get();
    }
    /**
     * Evaluate the getter, and re-collect dependencies.
     */
    Watcher.prototype.get = function () {
        pushTarget(this);
        var value;
        var vm = this.vm;
        try {
            value = this.getter.call(vm, vm);
        }
        catch (e) {
            if (this.user) {
                handleError(e, vm, "getter for watcher \"".concat(this.expression, "\""));
            }
            else {
                throw e;
            }
        }
        finally {
            // "touch" every property so they are all tracked as
            // dependencies for deep watching
            if (this.deep) {
                traverse(value);
            }
            popTarget();
            this.cleanupDeps();
        }
        return value;
    };
    /**
     * Add a dependency to this directive.
     */
    Watcher.prototype.addDep = function (dep) {
        var id = dep.id;
        if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id);
            this.newDeps.push(dep);
            if (!this.depIds.has(id)) {
                dep.addSub(this);
            }
        }
    };
    /**
     * Clean up for dependency collection.
     */
    Watcher.prototype.cleanupDeps = function () {
        var i = this.deps.length;
        while (i--) {
            var dep = this.deps[i];
            if (!this.newDepIds.has(dep.id)) {
                dep.removeSub(this);
            }
        }
        var tmp = this.depIds;
        this.depIds = this.newDepIds;
        this.newDepIds = tmp;
        this.newDepIds.clear();
        tmp = this.deps;
        this.deps = this.newDeps;
        this.newDeps = tmp;
        this.newDeps.length = 0;
    };
    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
    Watcher.prototype.update = function () {
        /* istanbul ignore else */
        if (this.lazy) {
            this.dirty = true;
        }
        else if (this.sync) {
            this.run();
        }
        else {
            queueWatcher(this);
        }
    };
    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */
    Watcher.prototype.run = function () {
        if (this.active) {
            var value = this.get();
            if (value !== this.value ||
                // Deep watchers and watchers on Object/Arrays should fire even
                // when the value is the same, because the value may
                // have mutated.
                isObject(value) ||
                this.deep) {
                // set new value
                var oldValue = this.value;
                this.value = value;
                if (this.user) {
                    var info = "callback for watcher \"".concat(this.expression, "\"");
                    invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
                }
                else {
                    this.cb.call(this.vm, value, oldValue);
                }
            }
        }
    };
    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */
    Watcher.prototype.evaluate = function () {
        this.value = this.get();
        this.dirty = false;
    };
    /**
     * Depend on all deps collected by this watcher.
     */
    Watcher.prototype.depend = function () {
        var i = this.deps.length;
        while (i--) {
            this.deps[i].depend();
        }
    };
    /**
     * Remove self from all dependencies' subscriber list.
     */
    Watcher.prototype.teardown = function () {
        if (this.vm && !this.vm._isBeingDestroyed) {
            remove$2(this.vm._scope.effects, this);
        }
        if (this.active) {
            var i = this.deps.length;
            while (i--) {
                this.deps[i].removeSub(this);
            }
            this.active = false;
            if (this.onStop) {
                this.onStop();
            }
        }
    };
    return Watcher;
}());

var mark;
var measure;
if (true) {
    var perf_1 = inBrowser && window.performance;
    /* istanbul ignore if */
    if (perf_1 &&
        // @ts-ignore
        perf_1.mark &&
        // @ts-ignore
        perf_1.measure &&
        // @ts-ignore
        perf_1.clearMarks &&
        // @ts-ignore
        perf_1.clearMeasures) {
        mark = function (tag) { return perf_1.mark(tag); };
        measure = function (name, startTag, endTag) {
            perf_1.measure(name, startTag, endTag);
            perf_1.clearMarks(startTag);
            perf_1.clearMarks(endTag);
            // perf.clearMeasures(name)
        };
    }
}

function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
        updateComponentListeners(vm, listeners);
    }
}
var target$1;
function add$1(event, fn) {
    target$1.$on(event, fn);
}
function remove$1(event, fn) {
    target$1.$off(event, fn);
}
function createOnceHandler$1(event, fn) {
    var _target = target$1;
    return function onceHandler() {
        var res = fn.apply(null, arguments);
        if (res !== null) {
            _target.$off(event, onceHandler);
        }
    };
}
function updateComponentListeners(vm, listeners, oldListeners) {
    target$1 = vm;
    updateListeners(listeners, oldListeners || {}, add$1, remove$1, createOnceHandler$1, vm);
    target$1 = undefined;
}
function eventsMixin(Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
        var vm = this;
        if (isArray(event)) {
            for (var i = 0, l = event.length; i < l; i++) {
                vm.$on(event[i], fn);
            }
        }
        else {
            (vm._events[event] || (vm._events[event] = [])).push(fn);
            // optimize hook:event cost by using a boolean flag marked at registration
            // instead of a hash lookup
            if (hookRE.test(event)) {
                vm._hasHookEvent = true;
            }
        }
        return vm;
    };
    Vue.prototype.$once = function (event, fn) {
        var vm = this;
        function on() {
            vm.$off(event, on);
            fn.apply(vm, arguments);
        }
        on.fn = fn;
        vm.$on(event, on);
        return vm;
    };
    Vue.prototype.$off = function (event, fn) {
        var vm = this;
        // all
        if (!arguments.length) {
            vm._events = Object.create(null);
            return vm;
        }
        // array of events
        if (isArray(event)) {
            for (var i_1 = 0, l = event.length; i_1 < l; i_1++) {
                vm.$off(event[i_1], fn);
            }
            return vm;
        }
        // specific event
        var cbs = vm._events[event];
        if (!cbs) {
            return vm;
        }
        if (!fn) {
            vm._events[event] = null;
            return vm;
        }
        // specific handler
        var cb;
        var i = cbs.length;
        while (i--) {
            cb = cbs[i];
            if (cb === fn || cb.fn === fn) {
                cbs.splice(i, 1);
                break;
            }
        }
        return vm;
    };
    Vue.prototype.$emit = function (event) {
        var vm = this;
        if (true) {
            var lowerCaseEvent = event.toLowerCase();
            if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                tip("Event \"".concat(lowerCaseEvent, "\" is emitted in component ") +
                    "".concat(formatComponentName(vm), " but the handler is registered for \"").concat(event, "\". ") +
                    "Note that HTML attributes are case-insensitive and you cannot use " +
                    "v-on to listen to camelCase events when using in-DOM templates. " +
                    "You should probably use \"".concat(hyphenate(event), "\" instead of \"").concat(event, "\"."));
            }
        }
        var cbs = vm._events[event];
        if (cbs) {
            cbs = cbs.length > 1 ? toArray(cbs) : cbs;
            var args = toArray(arguments, 1);
            var info = "event handler for \"".concat(event, "\"");
            for (var i = 0, l = cbs.length; i < l; i++) {
                invokeWithErrorHandling(cbs[i], vm, args, vm, info);
            }
        }
        return vm;
    };
}

var activeInstance = null;
var isUpdatingChildComponent = false;
function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
        activeInstance = prevActiveInstance;
    };
}
function initLifecycle(vm) {
    var options = vm.$options;
    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
            parent = parent.$parent;
        }
        parent.$children.push(vm);
    }
    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;
    vm.$children = [];
    vm.$refs = {};
    vm._provided = parent ? parent._provided : Object.create(null);
    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
}
function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
        var vm = this;
        var prevEl = vm.$el;
        var prevVnode = vm._vnode;
        var restoreActiveInstance = setActiveInstance(vm);
        vm._vnode = vnode;
        // Vue.prototype.__patch__ is injected in entry points
        // based on the rendering backend used.
        if (!prevVnode) {
            // initial render
            vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
        }
        else {
            // updates
            vm.$el = vm.__patch__(prevVnode, vnode);
        }
        restoreActiveInstance();
        // update __vue__ reference
        if (prevEl) {
            prevEl.__vue__ = null;
        }
        if (vm.$el) {
            vm.$el.__vue__ = vm;
        }
        // if parent is an HOC, update its $el as well
        var wrapper = vm;
        while (wrapper &&
            wrapper.$vnode &&
            wrapper.$parent &&
            wrapper.$vnode === wrapper.$parent._vnode) {
            wrapper.$parent.$el = wrapper.$el;
            wrapper = wrapper.$parent;
        }
        // updated hook is called by the scheduler to ensure that children are
        // updated in a parent's updated hook.
    };
    Vue.prototype.$forceUpdate = function () {
        var vm = this;
        if (vm._watcher) {
            vm._watcher.update();
        }
    };
    Vue.prototype.$destroy = function () {
        var vm = this;
        if (vm._isBeingDestroyed) {
            return;
        }
        callHook$1(vm, 'beforeDestroy');
        vm._isBeingDestroyed = true;
        // remove self from parent
        var parent = vm.$parent;
        if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
            remove$2(parent.$children, vm);
        }
        // teardown scope. this includes both the render watcher and other
        // watchers created
        vm._scope.stop();
        // remove reference from data ob
        // frozen object may not have observer.
        if (vm._data.__ob__) {
            vm._data.__ob__.vmCount--;
        }
        // call the last hook...
        vm._isDestroyed = true;
        // invoke destroy hooks on current rendered tree
        vm.__patch__(vm._vnode, null);
        // fire destroyed hook
        callHook$1(vm, 'destroyed');
        // turn off all instance listeners.
        vm.$off();
        // remove __vue__ reference
        if (vm.$el) {
            vm.$el.__vue__ = null;
        }
        // release circular reference (#6759)
        if (vm.$vnode) {
            vm.$vnode.parent = null;
        }
    };
}
function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    if (!vm.$options.render) {
        // @ts-expect-error invalid type
        vm.$options.render = createEmptyVNode;
        if (true) {
            /* istanbul ignore if */
            if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
                vm.$options.el ||
                el) {
                warn('You are using the runtime-only build of Vue where the template ' +
                    'compiler is not available. Either pre-compile the templates into ' +
                    'render functions, or use the compiler-included build.', vm);
            }
            else {
                warn('Failed to mount component: template or render function not defined.', vm);
            }
        }
    }
    callHook$1(vm, 'beforeMount');
    var updateComponent;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
        updateComponent = function () {
            var name = vm._name;
            var id = vm._uid;
            var startTag = "vue-perf-start:".concat(id);
            var endTag = "vue-perf-end:".concat(id);
            mark(startTag);
            var vnode = vm._render();
            mark(endTag);
            measure("vue ".concat(name, " render"), startTag, endTag);
            mark(startTag);
            vm._update(vnode, hydrating);
            mark(endTag);
            measure("vue ".concat(name, " patch"), startTag, endTag);
        };
    }
    else {
        updateComponent = function () {
            vm._update(vm._render(), hydrating);
        };
    }
    var watcherOptions = {
        before: function () {
            if (vm._isMounted && !vm._isDestroyed) {
                callHook$1(vm, 'beforeUpdate');
            }
        }
    };
    if (true) {
        watcherOptions.onTrack = function (e) { return callHook$1(vm, 'renderTracked', [e]); };
        watcherOptions.onTrigger = function (e) { return callHook$1(vm, 'renderTriggered', [e]); };
    }
    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, watcherOptions, true /* isRenderWatcher */);
    hydrating = false;
    // flush buffer for flush: "pre" watchers queued in setup()
    var preWatchers = vm._preWatchers;
    if (preWatchers) {
        for (var i = 0; i < preWatchers.length; i++) {
            preWatchers[i].run();
        }
    }
    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
        vm._isMounted = true;
        callHook$1(vm, 'mounted');
    }
    return vm;
}
function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    if (true) {
        isUpdatingChildComponent = true;
    }
    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.
    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!((newScopedSlots && !newScopedSlots.$stable) ||
        (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
        (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
        (!newScopedSlots && vm.$scopedSlots.$key));
    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(renderChildren || // has new static slots
        vm.$options._renderChildren || // has old static slots
        hasDynamicScopedSlot);
    var prevVNode = vm.$vnode;
    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
    if (vm._vnode) {
        // update child tree's parent
        vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;
    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    var attrs = parentVnode.data.attrs || emptyObject;
    if (vm._attrsProxy) {
        // force update if attrs are accessed and has changed since it may be
        // passed to a child component.
        if (syncSetupProxy(vm._attrsProxy, attrs, (prevVNode.data && prevVNode.data.attrs) || emptyObject, vm, '$attrs')) {
            needsForceUpdate = true;
        }
    }
    vm.$attrs = attrs;
    // update listeners
    listeners = listeners || emptyObject;
    var prevListeners = vm.$options._parentListeners;
    if (vm._listenersProxy) {
        syncSetupProxy(vm._listenersProxy, listeners, prevListeners || emptyObject, vm, '$listeners');
    }
    vm.$listeners = vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, prevListeners);
    // update props
    if (propsData && vm.$options.props) {
        toggleObserving(false);
        var props = vm._props;
        var propKeys = vm.$options._propKeys || [];
        for (var i = 0; i < propKeys.length; i++) {
            var key = propKeys[i];
            var propOptions = vm.$options.props; // wtf flow?
            props[key] = validateProp(key, propOptions, propsData, vm);
        }
        toggleObserving(true);
        // keep a copy of raw propsData
        vm.$options.propsData = propsData;
    }
    // resolve slots + force update if has children
    if (needsForceUpdate) {
        vm.$slots = resolveSlots(renderChildren, parentVnode.context);
        vm.$forceUpdate();
    }
    if (true) {
        isUpdatingChildComponent = false;
    }
}
function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
        if (vm._inactive)
            return true;
    }
    return false;
}
function activateChildComponent(vm, direct) {
    if (direct) {
        vm._directInactive = false;
        if (isInInactiveTree(vm)) {
            return;
        }
    }
    else if (vm._directInactive) {
        return;
    }
    if (vm._inactive || vm._inactive === null) {
        vm._inactive = false;
        for (var i = 0; i < vm.$children.length; i++) {
            activateChildComponent(vm.$children[i]);
        }
        callHook$1(vm, 'activated');
    }
}
function deactivateChildComponent(vm, direct) {
    if (direct) {
        vm._directInactive = true;
        if (isInInactiveTree(vm)) {
            return;
        }
    }
    if (!vm._inactive) {
        vm._inactive = true;
        for (var i = 0; i < vm.$children.length; i++) {
            deactivateChildComponent(vm.$children[i]);
        }
        callHook$1(vm, 'deactivated');
    }
}
function callHook$1(vm, hook, args, setContext) {
    if (setContext === void 0) { setContext = true; }
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var prevInst = currentInstance;
    var prevScope = getCurrentScope();
    setContext && setCurrentInstance(vm);
    var handlers = vm.$options[hook];
    var info = "".concat(hook, " hook");
    if (handlers) {
        for (var i = 0, j = handlers.length; i < j; i++) {
            invokeWithErrorHandling(handlers[i], vm, args || null, vm, info);
        }
    }
    if (vm._hasHookEvent) {
        vm.$emit('hook:' + hook);
    }
    if (setContext) {
        setCurrentInstance(prevInst);
        prevScope && prevScope.on();
    }
    popTarget();
}

var MAX_UPDATE_COUNT = 100;
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;
/**
 * Reset the scheduler's state.
 */
function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    if (true) {
        circular = {};
    }
    waiting = flushing = false;
}
// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;
// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;
// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
    var performance_1 = window.performance;
    if (performance_1 &&
        typeof performance_1.now === 'function' &&
        getNow() > document.createEvent('Event').timeStamp) {
        // if the event timestamp, although evaluated AFTER the Date.now(), is
        // smaller than it, it means the event is using a hi-res timestamp,
        // and we need to use the hi-res version for event listener timestamps as
        // well.
        getNow = function () { return performance_1.now(); };
    }
}
var sortCompareFn = function (a, b) {
    if (a.post) {
        if (!b.post)
            return 1;
    }
    else if (b.post) {
        return -1;
    }
    return a.id - b.id;
};
/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(sortCompareFn);
    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
        watcher = queue[index];
        if (watcher.before) {
            watcher.before();
        }
        id = watcher.id;
        has[id] = null;
        watcher.run();
        // in dev build, check and stop circular updates.
        if ( true && has[id] != null) {
            circular[id] = (circular[id] || 0) + 1;
            if (circular[id] > MAX_UPDATE_COUNT) {
                warn('You may have an infinite update loop ' +
                    (watcher.user
                        ? "in watcher with expression \"".concat(watcher.expression, "\"")
                        : "in a component render function."), watcher.vm);
                break;
            }
        }
    }
    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();
    resetSchedulerState();
    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);
    cleanupDeps();
    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
        devtools.emit('flush');
    }
}
function callUpdatedHooks(queue) {
    var i = queue.length;
    while (i--) {
        var watcher = queue[i];
        var vm = watcher.vm;
        if (vm && vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
            callHook$1(vm, 'updated');
        }
    }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
}
function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
        queue[i]._inactive = true;
        activateChildComponent(queue[i], true /* true */);
    }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher(watcher) {
    var id = watcher.id;
    if (has[id] != null) {
        return;
    }
    if (watcher === Dep.target && watcher.noRecurse) {
        return;
    }
    has[id] = true;
    if (!flushing) {
        queue.push(watcher);
    }
    else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
            i--;
        }
        queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
        waiting = true;
        if ( true && !config.async) {
            flushSchedulerQueue();
            return;
        }
        nextTick(flushSchedulerQueue);
    }
}

function initProvide(vm) {
    var provideOption = vm.$options.provide;
    if (provideOption) {
        var provided = isFunction(provideOption)
            ? provideOption.call(vm)
            : provideOption;
        if (!isObject(provided)) {
            return;
        }
        var source = resolveProvided(vm);
        // IE9 doesn't support Object.getOwnPropertyDescriptors so we have to
        // iterate the keys ourselves.
        var keys = hasSymbol ? Reflect.ownKeys(provided) : Object.keys(provided);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            Object.defineProperty(source, key, Object.getOwnPropertyDescriptor(provided, key));
        }
    }
}
function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
        toggleObserving(false);
        Object.keys(result).forEach(function (key) {
            /* istanbul ignore else */
            if (true) {
                defineReactive(vm, key, result[key], function () {
                    warn("Avoid mutating an injected value directly since the changes will be " +
                        "overwritten whenever the provided component re-renders. " +
                        "injection being mutated: \"".concat(key, "\""), vm);
                });
            }
            else {}
        });
        toggleObserving(true);
    }
}
function resolveInject(inject, vm) {
    if (inject) {
        // inject is :any because flow is not smart enough to figure out cached
        var result = Object.create(null);
        var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            // #6574 in case the inject object is observed...
            if (key === '__ob__')
                continue;
            var provideKey = inject[key].from;
            if (provideKey in vm._provided) {
                result[key] = vm._provided[provideKey];
            }
            else if ('default' in inject[key]) {
                var provideDefault = inject[key].default;
                result[key] = isFunction(provideDefault)
                    ? provideDefault.call(vm)
                    : provideDefault;
            }
            else if (true) {
                warn("Injection \"".concat(key, "\" not found"), vm);
            }
        }
        return result;
    }
}

function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var _this = this;
    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
        contextVm = Object.create(parent);
        contextVm._original = parent;
    }
    else {
        // the context vm passed in is a functional context as well.
        // in this case we want to make sure we are able to get a hold to the
        // real context instance.
        contextVm = parent;
        // @ts-ignore
        parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;
    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
        if (!_this.$slots) {
            normalizeScopedSlots(parent, data.scopedSlots, (_this.$slots = resolveSlots(children, parent)));
        }
        return _this.$slots;
    };
    Object.defineProperty(this, 'scopedSlots', {
        enumerable: true,
        get: function () {
            return normalizeScopedSlots(parent, data.scopedSlots, this.slots());
        }
    });
    // support for compiled functional template
    if (isCompiled) {
        // exposing $options for renderStatic()
        this.$options = options;
        // pre-resolve slots for renderSlot()
        this.$slots = this.slots();
        this.$scopedSlots = normalizeScopedSlots(parent, data.scopedSlots, this.$slots);
    }
    if (options._scopeId) {
        this._c = function (a, b, c, d) {
            var vnode = createElement$1(contextVm, a, b, c, d, needNormalization);
            if (vnode && !isArray(vnode)) {
                vnode.fnScopeId = options._scopeId;
                vnode.fnContext = parent;
            }
            return vnode;
        };
    }
    else {
        this._c = function (a, b, c, d) {
            return createElement$1(contextVm, a, b, c, d, needNormalization);
        };
    }
}
installRenderHelpers(FunctionalRenderContext.prototype);
function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
        for (var key in propOptions) {
            props[key] = validateProp(key, propOptions, propsData || emptyObject);
        }
    }
    else {
        if (isDef(data.attrs))
            mergeProps(props, data.attrs);
        if (isDef(data.props))
            mergeProps(props, data.props);
    }
    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
    var vnode = options.render.call(null, renderContext._c, renderContext);
    if (vnode instanceof VNode) {
        return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
    }
    else if (isArray(vnode)) {
        var vnodes = normalizeChildren(vnode) || [];
        var res = new Array(vnodes.length);
        for (var i = 0; i < vnodes.length; i++) {
            res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
        }
        return res;
    }
}
function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    if (true) {
        (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext =
            renderContext;
    }
    if (data.slot) {
        (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone;
}
function mergeProps(to, from) {
    for (var key in from) {
        to[camelize(key)] = from[key];
    }
}

function getComponentName(options) {
    return options.name || options.__name || options._componentTag;
}
// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
    init: function (vnode, hydrating) {
        if (vnode.componentInstance &&
            !vnode.componentInstance._isDestroyed &&
            vnode.data.keepAlive) {
            // kept-alive components, treat as a patch
            var mountedNode = vnode; // work around flow
            componentVNodeHooks.prepatch(mountedNode, mountedNode);
        }
        else {
            var child = (vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance));
            child.$mount(hydrating ? vnode.elm : undefined, hydrating);
        }
    },
    prepatch: function (oldVnode, vnode) {
        var options = vnode.componentOptions;
        var child = (vnode.componentInstance = oldVnode.componentInstance);
        updateChildComponent(child, options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
        );
    },
    insert: function (vnode) {
        var context = vnode.context, componentInstance = vnode.componentInstance;
        if (!componentInstance._isMounted) {
            componentInstance._isMounted = true;
            callHook$1(componentInstance, 'mounted');
        }
        if (vnode.data.keepAlive) {
            if (context._isMounted) {
                // vue-router#1212
                // During updates, a kept-alive component's child components may
                // change, so directly walking the tree here may call activated hooks
                // on incorrect children. Instead we push them into a queue which will
                // be processed after the whole patch process ended.
                queueActivatedComponent(componentInstance);
            }
            else {
                activateChildComponent(componentInstance, true /* direct */);
            }
        }
    },
    destroy: function (vnode) {
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isDestroyed) {
            if (!vnode.data.keepAlive) {
                componentInstance.$destroy();
            }
            else {
                deactivateChildComponent(componentInstance, true /* direct */);
            }
        }
    }
};
var hooksToMerge = Object.keys(componentVNodeHooks);
function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
        return;
    }
    var baseCtor = context.$options._base;
    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
        Ctor = baseCtor.extend(Ctor);
    }
    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
        if (true) {
            warn("Invalid Component definition: ".concat(String(Ctor)), context);
        }
        return;
    }
    // async component
    var asyncFactory;
    // @ts-expect-error
    if (isUndef(Ctor.cid)) {
        asyncFactory = Ctor;
        Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
        if (Ctor === undefined) {
            // return a placeholder node for async component, which is rendered
            // as a comment node but preserves all the raw information for the node.
            // the information will be used for async server-rendering and hydration.
            return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
        }
    }
    data = data || {};
    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);
    // transform component v-model data into props & events
    if (isDef(data.model)) {
        // @ts-expect-error
        transformModel(Ctor.options, data);
    }
    // extract props
    // @ts-expect-error
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);
    // functional component
    // @ts-expect-error
    if (isTrue(Ctor.options.functional)) {
        return createFunctionalComponent(Ctor, propsData, data, context, children);
    }
    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;
    // @ts-expect-error
    if (isTrue(Ctor.options.abstract)) {
        // abstract components do not keep anything
        // other than props & listeners & slot
        // work around flow
        var slot = data.slot;
        data = {};
        if (slot) {
            data.slot = slot;
        }
    }
    // install component management hooks onto the placeholder node
    installComponentHooks(data);
    // return a placeholder vnode
    // @ts-expect-error
    var name = getComponentName(Ctor.options) || tag;
    var vnode = new VNode(
    // @ts-expect-error
    "vue-component-".concat(Ctor.cid).concat(name ? "-".concat(name) : ''), data, undefined, undefined, undefined, context, 
    // @ts-expect-error
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);
    return vnode;
}
function createComponentInstanceForVnode(
// we know it's MountedComponentVNode but flow doesn't
vnode, 
// activeInstance in lifecycle state
parent) {
    var options = {
        _isComponent: true,
        _parentVnode: vnode,
        parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
        options.render = inlineTemplate.render;
        options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options);
}
function installComponentHooks(data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
        var key = hooksToMerge[i];
        var existing = hooks[key];
        var toMerge = componentVNodeHooks[key];
        // @ts-expect-error
        if (existing !== toMerge && !(existing && existing._merged)) {
            hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge;
        }
    }
}
function mergeHook(f1, f2) {
    var merged = function (a, b) {
        // flow complains about extra args which is why we use any
        f1(a, b);
        f2(a, b);
    };
    merged._merged = true;
    return merged;
}
// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel(options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input';
    (data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
        if (isArray(existing)
            ? existing.indexOf(callback) === -1
            : existing !== callback) {
            on[event] = [callback].concat(existing);
        }
    }
    else {
        on[event] = callback;
    }
}

var warn = noop;
var tip = noop;
var generateComponentTrace; // work around flow check
var formatComponentName;
if (true) {
    var hasConsole_1 = typeof console !== 'undefined';
    var classifyRE_1 = /(?:^|[-_])(\w)/g;
    var classify_1 = function (str) {
        return str.replace(classifyRE_1, function (c) { return c.toUpperCase(); }).replace(/[-_]/g, '');
    };
    warn = function (msg, vm) {
        if (vm === void 0) { vm = currentInstance; }
        var trace = vm ? generateComponentTrace(vm) : '';
        if (config.warnHandler) {
            config.warnHandler.call(null, msg, vm, trace);
        }
        else if (hasConsole_1 && !config.silent) {
            console.error("[Vue warn]: ".concat(msg).concat(trace));
        }
    };
    tip = function (msg, vm) {
        if (hasConsole_1 && !config.silent) {
            console.warn("[Vue tip]: ".concat(msg) + (vm ? generateComponentTrace(vm) : ''));
        }
    };
    formatComponentName = function (vm, includeFile) {
        if (vm.$root === vm) {
            return '<Root>';
        }
        var options = isFunction(vm) && vm.cid != null
            ? vm.options
            : vm._isVue
                ? vm.$options || vm.constructor.options
                : vm;
        var name = getComponentName(options);
        var file = options.__file;
        if (!name && file) {
            var match = file.match(/([^/\\]+)\.vue$/);
            name = match && match[1];
        }
        return ((name ? "<".concat(classify_1(name), ">") : "<Anonymous>") +
            (file && includeFile !== false ? " at ".concat(file) : ''));
    };
    var repeat_1 = function (str, n) {
        var res = '';
        while (n) {
            if (n % 2 === 1)
                res += str;
            if (n > 1)
                str += str;
            n >>= 1;
        }
        return res;
    };
    generateComponentTrace = function (vm) {
        if (vm._isVue && vm.$parent) {
            var tree = [];
            var currentRecursiveSequence = 0;
            while (vm) {
                if (tree.length > 0) {
                    var last = tree[tree.length - 1];
                    if (last.constructor === vm.constructor) {
                        currentRecursiveSequence++;
                        vm = vm.$parent;
                        continue;
                    }
                    else if (currentRecursiveSequence > 0) {
                        tree[tree.length - 1] = [last, currentRecursiveSequence];
                        currentRecursiveSequence = 0;
                    }
                }
                tree.push(vm);
                vm = vm.$parent;
            }
            return ('\n\nfound in\n\n' +
                tree
                    .map(function (vm, i) {
                    return "".concat(i === 0 ? '---> ' : repeat_1(' ', 5 + i * 2)).concat(isArray(vm)
                        ? "".concat(formatComponentName(vm[0]), "... (").concat(vm[1], " recursive calls)")
                        : formatComponentName(vm));
                })
                    .join('\n'));
        }
        else {
            return "\n\n(found in ".concat(formatComponentName(vm), ")");
        }
    };
}

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */
if (true) {
    strats.el = strats.propsData = function (parent, child, vm, key) {
        if (!vm) {
            warn("option \"".concat(key, "\" can only be used during instance ") +
                'creation with the `new` keyword.');
        }
        return defaultStrat(parent, child);
    };
}
/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from, recursive) {
    if (recursive === void 0) { recursive = true; }
    if (!from)
        return to;
    var key, toVal, fromVal;
    var keys = hasSymbol
        ? Reflect.ownKeys(from)
        : Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        // in case the object is already observed...
        if (key === '__ob__')
            continue;
        toVal = to[key];
        fromVal = from[key];
        if (!recursive || !hasOwn(to, key)) {
            set(to, key, fromVal);
        }
        else if (toVal !== fromVal &&
            isPlainObject(toVal) &&
            isPlainObject(fromVal)) {
            mergeData(toVal, fromVal);
        }
    }
    return to;
}
/**
 * Data
 */
function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
        // in a Vue.extend merge, both should be functions
        if (!childVal) {
            return parentVal;
        }
        if (!parentVal) {
            return childVal;
        }
        // when parentVal & childVal are both present,
        // we need to return a function that returns the
        // merged result of both functions... no need to
        // check if parentVal is a function here because
        // it has to be a function to pass previous merges.
        return function mergedDataFn() {
            return mergeData(isFunction(childVal) ? childVal.call(this, this) : childVal, isFunction(parentVal) ? parentVal.call(this, this) : parentVal);
        };
    }
    else {
        return function mergedInstanceDataFn() {
            // instance merge
            var instanceData = isFunction(childVal)
                ? childVal.call(vm, vm)
                : childVal;
            var defaultData = isFunction(parentVal)
                ? parentVal.call(vm, vm)
                : parentVal;
            if (instanceData) {
                return mergeData(instanceData, defaultData);
            }
            else {
                return defaultData;
            }
        };
    }
}
strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
        if (childVal && typeof childVal !== 'function') {
             true &&
                warn('The "data" option should be a function ' +
                    'that returns a per-instance value in component ' +
                    'definitions.', vm);
            return parentVal;
        }
        return mergeDataOrFn(parentVal, childVal);
    }
    return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */
function mergeLifecycleHook(parentVal, childVal) {
    var res = childVal
        ? parentVal
            ? parentVal.concat(childVal)
            : isArray(childVal)
                ? childVal
                : [childVal]
        : parentVal;
    return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
        if (res.indexOf(hooks[i]) === -1) {
            res.push(hooks[i]);
        }
    }
    return res;
}
LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeLifecycleHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets(parentVal, childVal, vm, key) {
    var res = Object.create(parentVal || null);
    if (childVal) {
         true && assertObjectType(key, childVal, vm);
        return extend(res, childVal);
    }
    else {
        return res;
    }
}
ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    //@ts-expect-error work around
    if (parentVal === nativeWatch)
        parentVal = undefined;
    //@ts-expect-error work around
    if (childVal === nativeWatch)
        childVal = undefined;
    /* istanbul ignore if */
    if (!childVal)
        return Object.create(parentVal || null);
    if (true) {
        assertObjectType(key, childVal, vm);
    }
    if (!parentVal)
        return childVal;
    var ret = {};
    extend(ret, parentVal);
    for (var key_1 in childVal) {
        var parent_1 = ret[key_1];
        var child = childVal[key_1];
        if (parent_1 && !isArray(parent_1)) {
            parent_1 = [parent_1];
        }
        ret[key_1] = parent_1 ? parent_1.concat(child) : isArray(child) ? child : [child];
    }
    return ret;
};
/**
 * Other object hashes.
 */
strats.props =
    strats.methods =
        strats.inject =
            strats.computed =
                function (parentVal, childVal, vm, key) {
                    if (childVal && "development" !== 'production') {
                        assertObjectType(key, childVal, vm);
                    }
                    if (!parentVal)
                        return childVal;
                    var ret = Object.create(null);
                    extend(ret, parentVal);
                    if (childVal)
                        extend(ret, childVal);
                    return ret;
                };
strats.provide = function (parentVal, childVal) {
    if (!parentVal)
        return childVal;
    return function () {
        var ret = Object.create(null);
        mergeData(ret, isFunction(parentVal) ? parentVal.call(this) : parentVal);
        if (childVal) {
            mergeData(ret, isFunction(childVal) ? childVal.call(this) : childVal, false // non-recursive
            );
        }
        return ret;
    };
};
/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */
function checkComponents(options) {
    for (var key in options.components) {
        validateComponentName(key);
    }
}
function validateComponentName(name) {
    if (!new RegExp("^[a-zA-Z][\\-\\.0-9_".concat(unicodeRegExp.source, "]*$")).test(name)) {
        warn('Invalid component name: "' +
            name +
            '". Component names ' +
            'should conform to valid custom element name in html5 specification.');
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
        warn('Do not use built-in or reserved HTML elements as component ' +
            'id: ' +
            name);
    }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps(options, vm) {
    var props = options.props;
    if (!props)
        return;
    var res = {};
    var i, val, name;
    if (isArray(props)) {
        i = props.length;
        while (i--) {
            val = props[i];
            if (typeof val === 'string') {
                name = camelize(val);
                res[name] = { type: null };
            }
            else if (true) {
                warn('props must be strings when using array syntax.');
            }
        }
    }
    else if (isPlainObject(props)) {
        for (var key in props) {
            val = props[key];
            name = camelize(key);
            res[name] = isPlainObject(val) ? val : { type: val };
        }
    }
    else if (true) {
        warn("Invalid value for option \"props\": expected an Array or an Object, " +
            "but got ".concat(toRawType(props), "."), vm);
    }
    options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */
function normalizeInject(options, vm) {
    var inject = options.inject;
    if (!inject)
        return;
    var normalized = (options.inject = {});
    if (isArray(inject)) {
        for (var i = 0; i < inject.length; i++) {
            normalized[inject[i]] = { from: inject[i] };
        }
    }
    else if (isPlainObject(inject)) {
        for (var key in inject) {
            var val = inject[key];
            normalized[key] = isPlainObject(val)
                ? extend({ from: key }, val)
                : { from: val };
        }
    }
    else if (true) {
        warn("Invalid value for option \"inject\": expected an Array or an Object, " +
            "but got ".concat(toRawType(inject), "."), vm);
    }
}
/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives$1(options) {
    var dirs = options.directives;
    if (dirs) {
        for (var key in dirs) {
            var def = dirs[key];
            if (isFunction(def)) {
                dirs[key] = { bind: def, update: def };
            }
        }
    }
}
function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) {
        warn("Invalid value for option \"".concat(name, "\": expected an Object, ") +
            "but got ".concat(toRawType(value), "."), vm);
    }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions(parent, child, vm) {
    if (true) {
        checkComponents(child);
    }
    if (isFunction(child)) {
        // @ts-expect-error
        child = child.options;
    }
    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives$1(child);
    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
        if (child.extends) {
            parent = mergeOptions(parent, child.extends, vm);
        }
        if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm);
            }
        }
    }
    var options = {};
    var key;
    for (key in parent) {
        mergeField(key);
    }
    for (key in child) {
        if (!hasOwn(parent, key)) {
            mergeField(key);
        }
    }
    function mergeField(key) {
        var strat = strats[key] || defaultStrat;
        options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
        return;
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id))
        return assets[id];
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId))
        return assets[camelizedId];
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId))
        return assets[PascalCaseId];
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if ( true && warnMissing && !res) {
        warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id);
    }
    return res;
}

function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
        if (absent && !hasOwn(prop, 'default')) {
            value = false;
        }
        else if (value === '' || value === hyphenate(key)) {
            // only cast empty string / same name to boolean if
            // boolean has higher priority
            var stringIndex = getTypeIndex(String, prop.type);
            if (stringIndex < 0 || booleanIndex < stringIndex) {
                value = true;
            }
        }
    }
    // check default value
    if (value === undefined) {
        value = getPropDefaultValue(vm, prop, key);
        // since the default value is a fresh copy,
        // make sure to observe it.
        var prevShouldObserve = shouldObserve;
        toggleObserving(true);
        observe(value);
        toggleObserving(prevShouldObserve);
    }
    if (true) {
        assertProp(prop, key, value, vm, absent);
    }
    return value;
}
/**
 * Get the default value of a prop.
 */
function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
        return undefined;
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if ( true && isObject(def)) {
        warn('Invalid default value for prop "' +
            key +
            '": ' +
            'Props with type Object/Array must use a factory function ' +
            'to return the default value.', vm);
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm &&
        vm.$options.propsData &&
        vm.$options.propsData[key] === undefined &&
        vm._props[key] !== undefined) {
        return vm._props[key];
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return isFunction(def) && getType(prop.type) !== 'Function'
        ? def.call(vm)
        : def;
}
/**
 * Assert whether a prop is valid.
 */
function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
        warn('Missing required prop: "' + name + '"', vm);
        return;
    }
    if (value == null && !prop.required) {
        return;
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
        if (!isArray(type)) {
            type = [type];
        }
        for (var i = 0; i < type.length && !valid; i++) {
            var assertedType = assertType(value, type[i], vm);
            expectedTypes.push(assertedType.expectedType || '');
            valid = assertedType.valid;
        }
    }
    var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
    if (!valid && haveExpectedTypes) {
        warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
        return;
    }
    var validator = prop.validator;
    if (validator) {
        if (!validator(value)) {
            warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
        }
    }
}
var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
function assertType(value, type, vm) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
        var t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
            valid = value instanceof type;
        }
    }
    else if (expectedType === 'Object') {
        valid = isPlainObject(value);
    }
    else if (expectedType === 'Array') {
        valid = isArray(value);
    }
    else {
        try {
            valid = value instanceof type;
        }
        catch (e) {
            warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
            valid = false;
        }
    }
    return {
        valid: valid,
        expectedType: expectedType
    };
}
var functionTypeCheckRE = /^\s*function (\w+)/;
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType(fn) {
    var match = fn && fn.toString().match(functionTypeCheckRE);
    return match ? match[1] : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if (!isArray(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
        if (isSameType(expectedTypes[i], type)) {
            return i;
        }
    }
    return -1;
}
function getInvalidTypeMessage(name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"".concat(name, "\".") +
        " Expected ".concat(expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        isExplicable(typeof value) &&
        !isBoolean(expectedType, receivedType)) {
        message += " with value ".concat(styleValue(value, expectedType));
    }
    message += ", got ".concat(receivedType, " ");
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
        message += "with value ".concat(styleValue(value, receivedType), ".");
    }
    return message;
}
function styleValue(value, type) {
    if (type === 'String') {
        return "\"".concat(value, "\"");
    }
    else if (type === 'Number') {
        return "".concat(Number(value));
    }
    else {
        return "".concat(value);
    }
}
var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
function isExplicable(value) {
    return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; });
}
function isBoolean() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; });
}

/* not type checking this file because flow doesn't play well with Proxy */
var initProxy;
if (true) {
    var allowedGlobals_1 = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' +
        'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
        'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
        'require' // for Webpack/Browserify
    );
    var warnNonPresent_1 = function (target, key) {
        warn("Property or method \"".concat(key, "\" is not defined on the instance but ") +
            'referenced during render. Make sure that this property is reactive, ' +
            'either in the data option, or for class-based components, by ' +
            'initializing the property. ' +
            'See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
    };
    var warnReservedPrefix_1 = function (target, key) {
        warn("Property \"".concat(key, "\" must be accessed with \"$data.").concat(key, "\" because ") +
            'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
            'prevent conflicts with Vue internals. ' +
            'See: https://v2.vuejs.org/v2/api/#data', target);
    };
    var hasProxy_1 = typeof Proxy !== 'undefined' && isNative(Proxy);
    if (hasProxy_1) {
        var isBuiltInModifier_1 = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
        config.keyCodes = new Proxy(config.keyCodes, {
            set: function (target, key, value) {
                if (isBuiltInModifier_1(key)) {
                    warn("Avoid overwriting built-in modifier in config.keyCodes: .".concat(key));
                    return false;
                }
                else {
                    target[key] = value;
                    return true;
                }
            }
        });
    }
    var hasHandler_1 = {
        has: function (target, key) {
            var has = key in target;
            var isAllowed = allowedGlobals_1(key) ||
                (typeof key === 'string' &&
                    key.charAt(0) === '_' &&
                    !(key in target.$data));
            if (!has && !isAllowed) {
                if (key in target.$data)
                    warnReservedPrefix_1(target, key);
                else
                    warnNonPresent_1(target, key);
            }
            return has || !isAllowed;
        }
    };
    var getHandler_1 = {
        get: function (target, key) {
            if (typeof key === 'string' && !(key in target)) {
                if (key in target.$data)
                    warnReservedPrefix_1(target, key);
                else
                    warnNonPresent_1(target, key);
            }
            return target[key];
        }
    };
    initProxy = function initProxy(vm) {
        if (hasProxy_1) {
            // determine which proxy handler to use
            var options = vm.$options;
            var handlers = options.render && options.render._withStripped ? getHandler_1 : hasHandler_1;
            vm._renderProxy = new Proxy(vm, handlers);
        }
        else {
            vm._renderProxy = vm;
        }
    };
}

var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
};
function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key];
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
        this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
}
function initState(vm) {
    var opts = vm.$options;
    if (opts.props)
        initProps$1(vm, opts.props);
    // Composition API
    initSetup(vm);
    if (opts.methods)
        initMethods(vm, opts.methods);
    if (opts.data) {
        initData(vm);
    }
    else {
        var ob = observe((vm._data = {}));
        ob && ob.vmCount++;
    }
    if (opts.computed)
        initComputed$1(vm, opts.computed);
    if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch);
    }
}
function initProps$1(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = (vm._props = shallowReactive({}));
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = (vm.$options._propKeys = []);
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
        toggleObserving(false);
    }
    var _loop_1 = function (key) {
        keys.push(key);
        var value = validateProp(key, propsOptions, propsData, vm);
        /* istanbul ignore else */
        if (true) {
            var hyphenatedKey = hyphenate(key);
            if (isReservedAttribute(hyphenatedKey) ||
                config.isReservedAttr(hyphenatedKey)) {
                warn("\"".concat(hyphenatedKey, "\" is a reserved attribute and cannot be used as component prop."), vm);
            }
            defineReactive(props, key, value, function () {
                if (!isRoot && !isUpdatingChildComponent) {
                    warn("Avoid mutating a prop directly since the value will be " +
                        "overwritten whenever the parent component re-renders. " +
                        "Instead, use a data or computed property based on the prop's " +
                        "value. Prop being mutated: \"".concat(key, "\""), vm);
                }
            }, true /* shallow */);
        }
        else {}
        // static props are already proxied on the component's prototype
        // during Vue.extend(). We only need to proxy props defined at
        // instantiation here.
        if (!(key in vm)) {
            proxy(vm, "_props", key);
        }
    };
    for (var key in propsOptions) {
        _loop_1(key);
    }
    toggleObserving(true);
}
function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = isFunction(data) ? getData(data, vm) : data || {};
    if (!isPlainObject(data)) {
        data = {};
         true &&
            warn('data functions should return an object:\n' +
                'https://v2.vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
        var key = keys[i];
        if (true) {
            if (methods && hasOwn(methods, key)) {
                warn("Method \"".concat(key, "\" has already been defined as a data property."), vm);
            }
        }
        if (props && hasOwn(props, key)) {
             true &&
                warn("The data property \"".concat(key, "\" is already declared as a prop. ") +
                    "Use prop default value instead.", vm);
        }
        else if (!isReserved(key)) {
            proxy(vm, "_data", key);
        }
    }
    // observe data
    var ob = observe(data);
    ob && ob.vmCount++;
}
function getData(data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
        return data.call(vm, vm);
    }
    catch (e) {
        handleError(e, vm, "data()");
        return {};
    }
    finally {
        popTarget();
    }
}
var computedWatcherOptions = { lazy: true };
function initComputed$1(vm, computed) {
    // $flow-disable-line
    var watchers = (vm._computedWatchers = Object.create(null));
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();
    for (var key in computed) {
        var userDef = computed[key];
        var getter = isFunction(userDef) ? userDef : userDef.get;
        if ( true && getter == null) {
            warn("Getter is missing for computed property \"".concat(key, "\"."), vm);
        }
        if (!isSSR) {
            // create internal watcher for the computed property.
            watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
        }
        // component-defined computed properties are already defined on the
        // component prototype. We only need to define computed properties defined
        // at instantiation here.
        if (!(key in vm)) {
            defineComputed(vm, key, userDef);
        }
        else if (true) {
            if (key in vm.$data) {
                warn("The computed property \"".concat(key, "\" is already defined in data."), vm);
            }
            else if (vm.$options.props && key in vm.$options.props) {
                warn("The computed property \"".concat(key, "\" is already defined as a prop."), vm);
            }
            else if (vm.$options.methods && key in vm.$options.methods) {
                warn("The computed property \"".concat(key, "\" is already defined as a method."), vm);
            }
        }
    }
}
function defineComputed(target, key, userDef) {
    var shouldCache = !isServerRendering();
    if (isFunction(userDef)) {
        sharedPropertyDefinition.get = shouldCache
            ? createComputedGetter(key)
            : createGetterInvoker(userDef);
        sharedPropertyDefinition.set = noop;
    }
    else {
        sharedPropertyDefinition.get = userDef.get
            ? shouldCache && userDef.cache !== false
                ? createComputedGetter(key)
                : createGetterInvoker(userDef.get)
            : noop;
        sharedPropertyDefinition.set = userDef.set || noop;
    }
    if ( true && sharedPropertyDefinition.set === noop) {
        sharedPropertyDefinition.set = function () {
            warn("Computed property \"".concat(key, "\" was assigned to but it has no setter."), this);
        };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
}
function createComputedGetter(key) {
    return function computedGetter() {
        var watcher = this._computedWatchers && this._computedWatchers[key];
        if (watcher) {
            if (watcher.dirty) {
                watcher.evaluate();
            }
            if (Dep.target) {
                if ( true && Dep.target.onTrack) {
                    Dep.target.onTrack({
                        effect: Dep.target,
                        target: this,
                        type: "get" /* TrackOpTypes.GET */,
                        key: key
                    });
                }
                watcher.depend();
            }
            return watcher.value;
        }
    };
}
function createGetterInvoker(fn) {
    return function computedGetter() {
        return fn.call(this, this);
    };
}
function initMethods(vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
        if (true) {
            if (typeof methods[key] !== 'function') {
                warn("Method \"".concat(key, "\" has type \"").concat(typeof methods[key], "\" in the component definition. ") +
                    "Did you reference the function correctly?", vm);
            }
            if (props && hasOwn(props, key)) {
                warn("Method \"".concat(key, "\" has already been defined as a prop."), vm);
            }
            if (key in vm && isReserved(key)) {
                warn("Method \"".concat(key, "\" conflicts with an existing Vue instance method. ") +
                    "Avoid defining component methods that start with _ or $.");
            }
        }
        vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
}
function initWatch(vm, watch) {
    for (var key in watch) {
        var handler = watch[key];
        if (isArray(handler)) {
            for (var i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i]);
            }
        }
        else {
            createWatcher(vm, key, handler);
        }
    }
}
function createWatcher(vm, expOrFn, handler, options) {
    if (isPlainObject(handler)) {
        options = handler;
        handler = handler.handler;
    }
    if (typeof handler === 'string') {
        handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options);
}
function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () {
        return this._data;
    };
    var propsDef = {};
    propsDef.get = function () {
        return this._props;
    };
    if (true) {
        dataDef.set = function () {
            warn('Avoid replacing instance root $data. ' +
                'Use nested data properties instead.', this);
        };
        propsDef.set = function () {
            warn("$props is readonly.", this);
        };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);
    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;
    Vue.prototype.$watch = function (expOrFn, cb, options) {
        var vm = this;
        if (isPlainObject(cb)) {
            return createWatcher(vm, expOrFn, cb, options);
        }
        options = options || {};
        options.user = true;
        var watcher = new Watcher(vm, expOrFn, cb, options);
        if (options.immediate) {
            var info = "callback for immediate watcher \"".concat(watcher.expression, "\"");
            pushTarget();
            invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
            popTarget();
        }
        return function unwatchFn() {
            watcher.teardown();
        };
    };
}

var uid = 0;
function initMixin$1(Vue) {
    Vue.prototype._init = function (options) {
        var vm = this;
        // a uid
        vm._uid = uid++;
        var startTag, endTag;
        /* istanbul ignore if */
        if ( true && config.performance && mark) {
            startTag = "vue-perf-start:".concat(vm._uid);
            endTag = "vue-perf-end:".concat(vm._uid);
            mark(startTag);
        }
        // a flag to mark this as a Vue instance without having to do instanceof
        // check
        vm._isVue = true;
        // avoid instances from being observed
        vm.__v_skip = true;
        // effect scope
        vm._scope = new EffectScope(true /* detached */);
        // #13134 edge case where a child component is manually created during the
        // render of a parent component
        vm._scope.parent = undefined;
        vm._scope._vm = true;
        // merge options
        if (options && options._isComponent) {
            // optimize internal component instantiation
            // since dynamic options merging is pretty slow, and none of the
            // internal component options needs special treatment.
            initInternalComponent(vm, options);
        }
        else {
            vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
        }
        /* istanbul ignore else */
        if (true) {
            initProxy(vm);
        }
        else {}
        // expose real self
        vm._self = vm;
        initLifecycle(vm);
        initEvents(vm);
        initRender(vm);
        callHook$1(vm, 'beforeCreate', undefined, false /* setContext */);
        initInjections(vm); // resolve injections before data/props
        initState(vm);
        initProvide(vm); // resolve provide after data/props
        callHook$1(vm, 'created');
        /* istanbul ignore if */
        if ( true && config.performance && mark) {
            vm._name = formatComponentName(vm, false);
            mark(endTag);
            measure("vue ".concat(vm._name, " init"), startTag, endTag);
        }
        if (vm.$options.el) {
            vm.$mount(vm.$options.el);
        }
    };
}
function initInternalComponent(vm, options) {
    var opts = (vm.$options = Object.create(vm.constructor.options));
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;
    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;
    if (options.render) {
        opts.render = options.render;
        opts.staticRenderFns = options.staticRenderFns;
    }
}
function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
        var superOptions = resolveConstructorOptions(Ctor.super);
        var cachedSuperOptions = Ctor.superOptions;
        if (superOptions !== cachedSuperOptions) {
            // super option changed,
            // need to resolve new options.
            Ctor.superOptions = superOptions;
            // check if there are any late-modified/attached options (#4976)
            var modifiedOptions = resolveModifiedOptions(Ctor);
            // update base extend options
            if (modifiedOptions) {
                extend(Ctor.extendOptions, modifiedOptions);
            }
            options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
            if (options.name) {
                options.components[options.name] = Ctor;
            }
        }
    }
    return options;
}
function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
        if (latest[key] !== sealed[key]) {
            if (!modified)
                modified = {};
            modified[key] = latest[key];
        }
    }
    return modified;
}

function Vue(options) {
    if ( true && !(this instanceof Vue)) {
        warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
}
//@ts-expect-error Vue has function type
initMixin$1(Vue);
//@ts-expect-error Vue has function type
stateMixin(Vue);
//@ts-expect-error Vue has function type
eventsMixin(Vue);
//@ts-expect-error Vue has function type
lifecycleMixin(Vue);
//@ts-expect-error Vue has function type
renderMixin(Vue);

function initUse(Vue) {
    Vue.use = function (plugin) {
        var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
        if (installedPlugins.indexOf(plugin) > -1) {
            return this;
        }
        // additional parameters
        var args = toArray(arguments, 1);
        args.unshift(this);
        if (isFunction(plugin.install)) {
            plugin.install.apply(plugin, args);
        }
        else if (isFunction(plugin)) {
            plugin.apply(null, args);
        }
        installedPlugins.push(plugin);
        return this;
    };
}

function initMixin(Vue) {
    Vue.mixin = function (mixin) {
        this.options = mergeOptions(this.options, mixin);
        return this;
    };
}

function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;
    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
        extendOptions = extendOptions || {};
        var Super = this;
        var SuperId = Super.cid;
        var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
        if (cachedCtors[SuperId]) {
            return cachedCtors[SuperId];
        }
        var name = getComponentName(extendOptions) || getComponentName(Super.options);
        if ( true && name) {
            validateComponentName(name);
        }
        var Sub = function VueComponent(options) {
            this._init(options);
        };
        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.cid = cid++;
        Sub.options = mergeOptions(Super.options, extendOptions);
        Sub['super'] = Super;
        // For props and computed properties, we define the proxy getters on
        // the Vue instances at extension time, on the extended prototype. This
        // avoids Object.defineProperty calls for each instance created.
        if (Sub.options.props) {
            initProps(Sub);
        }
        if (Sub.options.computed) {
            initComputed(Sub);
        }
        // allow further extension/mixin/plugin usage
        Sub.extend = Super.extend;
        Sub.mixin = Super.mixin;
        Sub.use = Super.use;
        // create asset registers, so extended classes
        // can have their private assets too.
        ASSET_TYPES.forEach(function (type) {
            Sub[type] = Super[type];
        });
        // enable recursive self-lookup
        if (name) {
            Sub.options.components[name] = Sub;
        }
        // keep a reference to the super options at extension time.
        // later at instantiation we can check if Super's options have
        // been updated.
        Sub.superOptions = Super.options;
        Sub.extendOptions = extendOptions;
        Sub.sealedOptions = extend({}, Sub.options);
        // cache constructor
        cachedCtors[SuperId] = Sub;
        return Sub;
    };
}
function initProps(Comp) {
    var props = Comp.options.props;
    for (var key in props) {
        proxy(Comp.prototype, "_props", key);
    }
}
function initComputed(Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
        defineComputed(Comp.prototype, key, computed[key]);
    }
}

function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
        // @ts-expect-error function is not exact same type
        Vue[type] = function (id, definition) {
            if (!definition) {
                return this.options[type + 's'][id];
            }
            else {
                /* istanbul ignore if */
                if ( true && type === 'component') {
                    validateComponentName(id);
                }
                if (type === 'component' && isPlainObject(definition)) {
                    // @ts-expect-error
                    definition.name = definition.name || id;
                    definition = this.options._base.extend(definition);
                }
                if (type === 'directive' && isFunction(definition)) {
                    definition = { bind: definition, update: definition };
                }
                this.options[type + 's'][id] = definition;
                return definition;
            }
        };
    });
}

function _getComponentName(opts) {
    return opts && (getComponentName(opts.Ctor.options) || opts.tag);
}
function matches(pattern, name) {
    if (isArray(pattern)) {
        return pattern.indexOf(name) > -1;
    }
    else if (typeof pattern === 'string') {
        return pattern.split(',').indexOf(name) > -1;
    }
    else if (isRegExp(pattern)) {
        return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
}
function pruneCache(keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache, keys = keepAliveInstance.keys, _vnode = keepAliveInstance._vnode, $vnode = keepAliveInstance.$vnode;
    for (var key in cache) {
        var entry = cache[key];
        if (entry) {
            var name_1 = entry.name;
            if (name_1 && !filter(name_1)) {
                pruneCacheEntry(cache, key, keys, _vnode);
            }
        }
    }
    $vnode.componentOptions.children = undefined;
}
function pruneCacheEntry(cache, key, keys, current) {
    var entry = cache[key];
    if (entry && (!current || entry.tag !== current.tag)) {
        // @ts-expect-error can be undefined
        entry.componentInstance.$destroy();
    }
    cache[key] = null;
    remove$2(keys, key);
}
var patternTypes = [String, RegExp, Array];
// TODO defineComponent
var KeepAlive = {
    name: 'keep-alive',
    abstract: true,
    props: {
        include: patternTypes,
        exclude: patternTypes,
        max: [String, Number]
    },
    methods: {
        cacheVNode: function () {
            var _a = this, cache = _a.cache, keys = _a.keys, vnodeToCache = _a.vnodeToCache, keyToCache = _a.keyToCache;
            if (vnodeToCache) {
                var tag = vnodeToCache.tag, componentInstance = vnodeToCache.componentInstance, componentOptions = vnodeToCache.componentOptions;
                cache[keyToCache] = {
                    name: _getComponentName(componentOptions),
                    tag: tag,
                    componentInstance: componentInstance
                };
                keys.push(keyToCache);
                // prune oldest entry
                if (this.max && keys.length > parseInt(this.max)) {
                    pruneCacheEntry(cache, keys[0], keys, this._vnode);
                }
                this.vnodeToCache = null;
            }
        }
    },
    created: function () {
        this.cache = Object.create(null);
        this.keys = [];
    },
    destroyed: function () {
        for (var key in this.cache) {
            pruneCacheEntry(this.cache, key, this.keys);
        }
    },
    mounted: function () {
        var _this = this;
        this.cacheVNode();
        this.$watch('include', function (val) {
            pruneCache(_this, function (name) { return matches(val, name); });
        });
        this.$watch('exclude', function (val) {
            pruneCache(_this, function (name) { return !matches(val, name); });
        });
    },
    updated: function () {
        this.cacheVNode();
    },
    render: function () {
        var slot = this.$slots.default;
        var vnode = getFirstComponentChild(slot);
        var componentOptions = vnode && vnode.componentOptions;
        if (componentOptions) {
            // check pattern
            var name_2 = _getComponentName(componentOptions);
            var _a = this, include = _a.include, exclude = _a.exclude;
            if (
            // not included
            (include && (!name_2 || !matches(include, name_2))) ||
                // excluded
                (exclude && name_2 && matches(exclude, name_2))) {
                return vnode;
            }
            var _b = this, cache = _b.cache, keys = _b.keys;
            var key = vnode.key == null
                ? // same constructor may get registered as different local components
                    // so cid alone is not enough (#3269)
                    componentOptions.Ctor.cid +
                        (componentOptions.tag ? "::".concat(componentOptions.tag) : '')
                : vnode.key;
            if (cache[key]) {
                vnode.componentInstance = cache[key].componentInstance;
                // make current key freshest
                remove$2(keys, key);
                keys.push(key);
            }
            else {
                // delay setting the cache until update
                this.vnodeToCache = vnode;
                this.keyToCache = key;
            }
            // @ts-expect-error can vnode.data can be undefined
            vnode.data.keepAlive = true;
        }
        return vnode || (slot && slot[0]);
    }
};

var builtInComponents = {
    KeepAlive: KeepAlive
};

function initGlobalAPI(Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    if (true) {
        configDef.set = function () {
            warn('Do not replace the Vue.config object, set individual fields instead.');
        };
    }
    Object.defineProperty(Vue, 'config', configDef);
    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
        warn: warn,
        extend: extend,
        mergeOptions: mergeOptions,
        defineReactive: defineReactive
    };
    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;
    // 2.6 explicit observable API
    Vue.observable = function (obj) {
        observe(obj);
        return obj;
    };
    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
        Vue.options[type + 's'] = Object.create(null);
    });
    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;
    extend(Vue.options.components, builtInComponents);
    initUse(Vue);
    initMixin(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function () {
        /* istanbul ignore next */
        return this.$vnode && this.$vnode.ssrContext;
    }
});
// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
});
Vue.version = version;

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');
// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
    return ((attr === 'value' && acceptValue(tag) && type !== 'button') ||
        (attr === 'selected' && tag === 'option') ||
        (attr === 'checked' && tag === 'input') ||
        (attr === 'muted' && tag === 'video'));
};
var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');
var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
        ? 'false'
        : // allow arbitrary string value for contenteditable
            key === 'contenteditable' && isValidContentEditableValue(value)
                ? value
                : 'true';
};
var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,' +
    'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';
var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};
var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
};
var isFalsyAttrValue = function (val) {
    return val == null || val === false;
};

function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data) {
            data = mergeClassData(childNode.data, data);
        }
    }
    // @ts-expect-error parentNode.parent not VNodeWithData
    while (isDef((parentNode = parentNode.parent))) {
        if (parentNode && parentNode.data) {
            data = mergeClassData(data, parentNode.data);
        }
    }
    return renderClass(data.staticClass, data.class);
}
function mergeClassData(child, parent) {
    return {
        staticClass: concat(child.staticClass, parent.staticClass),
        class: isDef(child.class) ? [child.class, parent.class] : parent.class
    };
}
function renderClass(staticClass, dynamicClass) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
        return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */
    return '';
}
function concat(a, b) {
    return a ? (b ? a + ' ' + b : a) : b || '';
}
function stringifyClass(value) {
    if (Array.isArray(value)) {
        return stringifyArray(value);
    }
    if (isObject(value)) {
        return stringifyObject(value);
    }
    if (typeof value === 'string') {
        return value;
    }
    /* istanbul ignore next */
    return '';
}
function stringifyArray(value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
        if (isDef((stringified = stringifyClass(value[i]))) && stringified !== '') {
            if (res)
                res += ' ';
            res += stringified;
        }
    }
    return res;
}
function stringifyObject(value) {
    var res = '';
    for (var key in value) {
        if (value[key]) {
            if (res)
                res += ' ';
            res += key;
        }
    }
    return res;
}

var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot');
// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);
var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag);
};
function getTagNamespace(tag) {
    if (isSVG(tag)) {
        return 'svg';
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
        return 'math';
    }
}
var unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
        return true;
    }
    if (isReservedTag(tag)) {
        return false;
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
        return unknownElementCache[tag];
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
        // https://stackoverflow.com/a/28210364/1070244
        return (unknownElementCache[tag] =
            el.constructor === window.HTMLUnknownElement ||
                el.constructor === window.HTMLElement);
    }
    else {
        return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()));
    }
}
var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/**
 * Query an element selector if it's not an element already.
 */
function query(el) {
    if (typeof el === 'string') {
        var selected = document.querySelector(el);
        if (!selected) {
             true && warn('Cannot find element: ' + el);
            return document.createElement('div');
        }
        return selected;
    }
    else {
        return el;
    }
}

function createElement(tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
        return elm;
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data &&
        vnode.data.attrs &&
        vnode.data.attrs.multiple !== undefined) {
        elm.setAttribute('multiple', 'multiple');
    }
    return elm;
}
function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(node) {
    return node.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function setStyleScope(node, scopeId) {
    node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createElement: createElement,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

var ref = {
    create: function (_, vnode) {
        registerRef(vnode);
    },
    update: function (oldVnode, vnode) {
        if (oldVnode.data.ref !== vnode.data.ref) {
            registerRef(oldVnode, true);
            registerRef(vnode);
        }
    },
    destroy: function (vnode) {
        registerRef(vnode, true);
    }
};
function registerRef(vnode, isRemoval) {
    var ref = vnode.data.ref;
    if (!isDef(ref))
        return;
    var vm = vnode.context;
    var refValue = vnode.componentInstance || vnode.elm;
    var value = isRemoval ? null : refValue;
    var $refsValue = isRemoval ? undefined : refValue;
    if (isFunction(ref)) {
        invokeWithErrorHandling(ref, vm, [value], vm, "template ref function");
        return;
    }
    var isFor = vnode.data.refInFor;
    var _isString = typeof ref === 'string' || typeof ref === 'number';
    var _isRef = isRef(ref);
    var refs = vm.$refs;
    if (_isString || _isRef) {
        if (isFor) {
            var existing = _isString ? refs[ref] : ref.value;
            if (isRemoval) {
                isArray(existing) && remove$2(existing, refValue);
            }
            else {
                if (!isArray(existing)) {
                    if (_isString) {
                        refs[ref] = [refValue];
                        setSetupRef(vm, ref, refs[ref]);
                    }
                    else {
                        ref.value = [refValue];
                    }
                }
                else if (!existing.includes(refValue)) {
                    existing.push(refValue);
                }
            }
        }
        else if (_isString) {
            if (isRemoval && refs[ref] !== refValue) {
                return;
            }
            refs[ref] = $refsValue;
            setSetupRef(vm, ref, value);
        }
        else if (_isRef) {
            if (isRemoval && ref.value !== refValue) {
                return;
            }
            ref.value = value;
        }
        else if (true) {
            warn("Invalid template ref type: ".concat(typeof ref));
        }
    }
}
function setSetupRef(_a, key, val) {
    var _setupState = _a._setupState;
    if (_setupState && hasOwn(_setupState, key)) {
        if (isRef(_setupState[key])) {
            _setupState[key].value = val;
        }
        else {
            _setupState[key] = val;
        }
    }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */
var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];
function sameVnode(a, b) {
    return (a.key === b.key &&
        a.asyncFactory === b.asyncFactory &&
        ((a.tag === b.tag &&
            a.isComment === b.isComment &&
            isDef(a.data) === isDef(b.data) &&
            sameInputType(a, b)) ||
            (isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error))));
}
function sameInputType(a, b) {
    if (a.tag !== 'input')
        return true;
    var i;
    var typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type;
    var typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type;
    return typeA === typeB || (isTextInputType(typeA) && isTextInputType(typeB));
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
        key = children[i].key;
        if (isDef(key))
            map[key] = i;
    }
    return map;
}
function createPatchFunction(backend) {
    var i, j;
    var cbs = {};
    var modules = backend.modules, nodeOps = backend.nodeOps;
    for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
            if (isDef(modules[j][hooks[i]])) {
                cbs[hooks[i]].push(modules[j][hooks[i]]);
            }
        }
    }
    function emptyNodeAt(elm) {
        return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }
    function createRmCb(childElm, listeners) {
        function remove() {
            if (--remove.listeners === 0) {
                removeNode(childElm);
            }
        }
        remove.listeners = listeners;
        return remove;
    }
    function removeNode(el) {
        var parent = nodeOps.parentNode(el);
        // element may have already been removed due to v-html / v-text
        if (isDef(parent)) {
            nodeOps.removeChild(parent, el);
        }
    }
    function isUnknownElement(vnode, inVPre) {
        return (!inVPre &&
            !vnode.ns &&
            !(config.ignoredElements.length &&
                config.ignoredElements.some(function (ignore) {
                    return isRegExp(ignore)
                        ? ignore.test(vnode.tag)
                        : ignore === vnode.tag;
                })) &&
            config.isUnknownElement(vnode.tag));
    }
    var creatingElmInVPre = 0;
    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
        if (isDef(vnode.elm) && isDef(ownerArray)) {
            // This vnode was used in a previous render!
            // now it's used as a new node, overwriting its elm would cause
            // potential patch errors down the road when it's used as an insertion
            // reference node. Instead, we clone the node on-demand before creating
            // associated DOM element for it.
            vnode = ownerArray[index] = cloneVNode(vnode);
        }
        vnode.isRootInsert = !nested; // for transition enter check
        if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
            return;
        }
        var data = vnode.data;
        var children = vnode.children;
        var tag = vnode.tag;
        if (isDef(tag)) {
            if (true) {
                if (data && data.pre) {
                    creatingElmInVPre++;
                }
                if (isUnknownElement(vnode, creatingElmInVPre)) {
                    warn('Unknown custom element: <' +
                        tag +
                        '> - did you ' +
                        'register the component correctly? For recursive components, ' +
                        'make sure to provide the "name" option.', vnode.context);
                }
            }
            vnode.elm = vnode.ns
                ? nodeOps.createElementNS(vnode.ns, tag)
                : nodeOps.createElement(tag, vnode);
            setScope(vnode);
            createChildren(vnode, children, insertedVnodeQueue);
            if (isDef(data)) {
                invokeCreateHooks(vnode, insertedVnodeQueue);
            }
            insert(parentElm, vnode.elm, refElm);
            if ( true && data && data.pre) {
                creatingElmInVPre--;
            }
        }
        else if (isTrue(vnode.isComment)) {
            vnode.elm = nodeOps.createComment(vnode.text);
            insert(parentElm, vnode.elm, refElm);
        }
        else {
            vnode.elm = nodeOps.createTextNode(vnode.text);
            insert(parentElm, vnode.elm, refElm);
        }
    }
    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
        var i = vnode.data;
        if (isDef(i)) {
            var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
            if (isDef((i = i.hook)) && isDef((i = i.init))) {
                i(vnode, false /* hydrating */);
            }
            // after calling the init hook, if the vnode is a child component
            // it should've created a child instance and mounted it. the child
            // component also has set the placeholder vnode's elm.
            // in that case we can just return the element and be done.
            if (isDef(vnode.componentInstance)) {
                initComponent(vnode, insertedVnodeQueue);
                insert(parentElm, vnode.elm, refElm);
                if (isTrue(isReactivated)) {
                    reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                }
                return true;
            }
        }
    }
    function initComponent(vnode, insertedVnodeQueue) {
        if (isDef(vnode.data.pendingInsert)) {
            insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
            vnode.data.pendingInsert = null;
        }
        vnode.elm = vnode.componentInstance.$el;
        if (isPatchable(vnode)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            setScope(vnode);
        }
        else {
            // empty component root.
            // skip all element-related modules except for ref (#3455)
            registerRef(vnode);
            // make sure to invoke the insert hook
            insertedVnodeQueue.push(vnode);
        }
    }
    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
        var i;
        // hack for #4339: a reactivated component with inner transition
        // does not trigger because the inner node's created hooks are not called
        // again. It's not ideal to involve module-specific logic in here but
        // there doesn't seem to be a better way to do it.
        var innerNode = vnode;
        while (innerNode.componentInstance) {
            innerNode = innerNode.componentInstance._vnode;
            if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {
                for (i = 0; i < cbs.activate.length; ++i) {
                    cbs.activate[i](emptyNode, innerNode);
                }
                insertedVnodeQueue.push(innerNode);
                break;
            }
        }
        // unlike a newly created component,
        // a reactivated keep-alive component doesn't insert itself
        insert(parentElm, vnode.elm, refElm);
    }
    function insert(parent, elm, ref) {
        if (isDef(parent)) {
            if (isDef(ref)) {
                if (nodeOps.parentNode(ref) === parent) {
                    nodeOps.insertBefore(parent, elm, ref);
                }
            }
            else {
                nodeOps.appendChild(parent, elm);
            }
        }
    }
    function createChildren(vnode, children, insertedVnodeQueue) {
        if (isArray(children)) {
            if (true) {
                checkDuplicateKeys(children);
            }
            for (var i_1 = 0; i_1 < children.length; ++i_1) {
                createElm(children[i_1], insertedVnodeQueue, vnode.elm, null, true, children, i_1);
            }
        }
        else if (isPrimitive(vnode.text)) {
            nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
        }
    }
    function isPatchable(vnode) {
        while (vnode.componentInstance) {
            vnode = vnode.componentInstance._vnode;
        }
        return isDef(vnode.tag);
    }
    function invokeCreateHooks(vnode, insertedVnodeQueue) {
        for (var i_2 = 0; i_2 < cbs.create.length; ++i_2) {
            cbs.create[i_2](emptyNode, vnode);
        }
        i = vnode.data.hook; // Reuse variable
        if (isDef(i)) {
            if (isDef(i.create))
                i.create(emptyNode, vnode);
            if (isDef(i.insert))
                insertedVnodeQueue.push(vnode);
        }
    }
    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope(vnode) {
        var i;
        if (isDef((i = vnode.fnScopeId))) {
            nodeOps.setStyleScope(vnode.elm, i);
        }
        else {
            var ancestor = vnode;
            while (ancestor) {
                if (isDef((i = ancestor.context)) && isDef((i = i.$options._scopeId))) {
                    nodeOps.setStyleScope(vnode.elm, i);
                }
                ancestor = ancestor.parent;
            }
        }
        // for slot content they should also get the scopeId from the host instance.
        if (isDef((i = activeInstance)) &&
            i !== vnode.context &&
            i !== vnode.fnContext &&
            isDef((i = i.$options._scopeId))) {
            nodeOps.setStyleScope(vnode.elm, i);
        }
    }
    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
        }
    }
    function invokeDestroyHook(vnode) {
        var i, j;
        var data = vnode.data;
        if (isDef(data)) {
            if (isDef((i = data.hook)) && isDef((i = i.destroy)))
                i(vnode);
            for (i = 0; i < cbs.destroy.length; ++i)
                cbs.destroy[i](vnode);
        }
        if (isDef((i = vnode.children))) {
            for (j = 0; j < vnode.children.length; ++j) {
                invokeDestroyHook(vnode.children[j]);
            }
        }
    }
    function removeVnodes(vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx];
            if (isDef(ch)) {
                if (isDef(ch.tag)) {
                    removeAndInvokeRemoveHook(ch);
                    invokeDestroyHook(ch);
                }
                else {
                    // Text node
                    removeNode(ch.elm);
                }
            }
        }
    }
    function removeAndInvokeRemoveHook(vnode, rm) {
        if (isDef(rm) || isDef(vnode.data)) {
            var i_3;
            var listeners = cbs.remove.length + 1;
            if (isDef(rm)) {
                // we have a recursively passed down rm callback
                // increase the listeners count
                rm.listeners += listeners;
            }
            else {
                // directly removing
                rm = createRmCb(vnode.elm, listeners);
            }
            // recursively invoke hooks on child component root node
            if (isDef((i_3 = vnode.componentInstance)) &&
                isDef((i_3 = i_3._vnode)) &&
                isDef(i_3.data)) {
                removeAndInvokeRemoveHook(i_3, rm);
            }
            for (i_3 = 0; i_3 < cbs.remove.length; ++i_3) {
                cbs.remove[i_3](vnode, rm);
            }
            if (isDef((i_3 = vnode.data.hook)) && isDef((i_3 = i_3.remove))) {
                i_3(vnode, rm);
            }
            else {
                rm();
            }
        }
        else {
            removeNode(vnode.elm);
        }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
        var oldStartIdx = 0;
        var newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
        // removeOnly is a special flag used only by <transition-group>
        // to ensure removed elements stay in correct relative positions
        // during leaving transitions
        var canMove = !removeOnly;
        if (true) {
            checkDuplicateKeys(newCh);
        }
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (isUndef(oldStartVnode)) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
            }
            else if (isUndef(oldEndVnode)) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newEndVnode)) {
                // Vnode moved right
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                canMove &&
                    nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldEndVnode, newStartVnode)) {
                // Vnode moved left
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                canMove &&
                    nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                if (isUndef(oldKeyToIdx))
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                idxInOld = isDef(newStartVnode.key)
                    ? oldKeyToIdx[newStartVnode.key]
                    : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
                if (isUndef(idxInOld)) {
                    // New element
                    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                }
                else {
                    vnodeToMove = oldCh[idxInOld];
                    if (sameVnode(vnodeToMove, newStartVnode)) {
                        patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                        oldCh[idxInOld] = undefined;
                        canMove &&
                            nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                    }
                    else {
                        // same key but different element. treat as new element
                        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                    }
                }
                newStartVnode = newCh[++newStartIdx];
            }
        }
        if (oldStartIdx > oldEndIdx) {
            refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        }
        else if (newStartIdx > newEndIdx) {
            removeVnodes(oldCh, oldStartIdx, oldEndIdx);
        }
    }
    function checkDuplicateKeys(children) {
        var seenKeys = {};
        for (var i_4 = 0; i_4 < children.length; i_4++) {
            var vnode = children[i_4];
            var key = vnode.key;
            if (isDef(key)) {
                if (seenKeys[key]) {
                    warn("Duplicate keys detected: '".concat(key, "'. This may cause an update error."), vnode.context);
                }
                else {
                    seenKeys[key] = true;
                }
            }
        }
    }
    function findIdxInOld(node, oldCh, start, end) {
        for (var i_5 = start; i_5 < end; i_5++) {
            var c = oldCh[i_5];
            if (isDef(c) && sameVnode(node, c))
                return i_5;
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
        if (oldVnode === vnode) {
            return;
        }
        if (isDef(vnode.elm) && isDef(ownerArray)) {
            // clone reused vnode
            vnode = ownerArray[index] = cloneVNode(vnode);
        }
        var elm = (vnode.elm = oldVnode.elm);
        if (isTrue(oldVnode.isAsyncPlaceholder)) {
            if (isDef(vnode.asyncFactory.resolved)) {
                hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
            }
            else {
                vnode.isAsyncPlaceholder = true;
            }
            return;
        }
        // reuse element for static trees.
        // note we only do this if the vnode is cloned -
        // if the new node is not cloned it means the render functions have been
        // reset by the hot-reload-api and we need to do a proper re-render.
        if (isTrue(vnode.isStatic) &&
            isTrue(oldVnode.isStatic) &&
            vnode.key === oldVnode.key &&
            (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
            vnode.componentInstance = oldVnode.componentInstance;
            return;
        }
        var i;
        var data = vnode.data;
        if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
            i(oldVnode, vnode);
        }
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (isDef(data) && isPatchable(vnode)) {
            for (i = 0; i < cbs.update.length; ++i)
                cbs.update[i](oldVnode, vnode);
            if (isDef((i = data.hook)) && isDef((i = i.update)))
                i(oldVnode, vnode);
        }
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch)
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
            }
            else if (isDef(ch)) {
                if (true) {
                    checkDuplicateKeys(ch);
                }
                if (isDef(oldVnode.text))
                    nodeOps.setTextContent(elm, '');
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            }
            else if (isDef(oldCh)) {
                removeVnodes(oldCh, 0, oldCh.length - 1);
            }
            else if (isDef(oldVnode.text)) {
                nodeOps.setTextContent(elm, '');
            }
        }
        else if (oldVnode.text !== vnode.text) {
            nodeOps.setTextContent(elm, vnode.text);
        }
        if (isDef(data)) {
            if (isDef((i = data.hook)) && isDef((i = i.postpatch)))
                i(oldVnode, vnode);
        }
    }
    function invokeInsertHook(vnode, queue, initial) {
        // delay insert hooks for component root nodes, invoke them after the
        // element is really inserted
        if (isTrue(initial) && isDef(vnode.parent)) {
            vnode.parent.data.pendingInsert = queue;
        }
        else {
            for (var i_6 = 0; i_6 < queue.length; ++i_6) {
                queue[i_6].data.hook.insert(queue[i_6]);
            }
        }
    }
    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');
    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
        var i;
        var tag = vnode.tag, data = vnode.data, children = vnode.children;
        inVPre = inVPre || (data && data.pre);
        vnode.elm = elm;
        if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
            vnode.isAsyncPlaceholder = true;
            return true;
        }
        // assert node match
        if (true) {
            if (!assertNodeMatch(elm, vnode, inVPre)) {
                return false;
            }
        }
        if (isDef(data)) {
            if (isDef((i = data.hook)) && isDef((i = i.init)))
                i(vnode, true /* hydrating */);
            if (isDef((i = vnode.componentInstance))) {
                // child component. it should have hydrated its own tree.
                initComponent(vnode, insertedVnodeQueue);
                return true;
            }
        }
        if (isDef(tag)) {
            if (isDef(children)) {
                // empty element, allow client to pick up and populate children
                if (!elm.hasChildNodes()) {
                    createChildren(vnode, children, insertedVnodeQueue);
                }
                else {
                    // v-html and domProps: innerHTML
                    if (isDef((i = data)) &&
                        isDef((i = i.domProps)) &&
                        isDef((i = i.innerHTML))) {
                        if (i !== elm.innerHTML) {
                            /* istanbul ignore if */
                            if ( true &&
                                typeof console !== 'undefined' &&
                                !hydrationBailed) {
                                hydrationBailed = true;
                                console.warn('Parent: ', elm);
                                console.warn('server innerHTML: ', i);
                                console.warn('client innerHTML: ', elm.innerHTML);
                            }
                            return false;
                        }
                    }
                    else {
                        // iterate and compare children lists
                        var childrenMatch = true;
                        var childNode = elm.firstChild;
                        for (var i_7 = 0; i_7 < children.length; i_7++) {
                            if (!childNode ||
                                !hydrate(childNode, children[i_7], insertedVnodeQueue, inVPre)) {
                                childrenMatch = false;
                                break;
                            }
                            childNode = childNode.nextSibling;
                        }
                        // if childNode is not null, it means the actual childNodes list is
                        // longer than the virtual children list.
                        if (!childrenMatch || childNode) {
                            /* istanbul ignore if */
                            if ( true &&
                                typeof console !== 'undefined' &&
                                !hydrationBailed) {
                                hydrationBailed = true;
                                console.warn('Parent: ', elm);
                                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                            }
                            return false;
                        }
                    }
                }
            }
            if (isDef(data)) {
                var fullInvoke = false;
                for (var key in data) {
                    if (!isRenderedModule(key)) {
                        fullInvoke = true;
                        invokeCreateHooks(vnode, insertedVnodeQueue);
                        break;
                    }
                }
                if (!fullInvoke && data['class']) {
                    // ensure collecting deps for deep class bindings for future updates
                    traverse(data['class']);
                }
            }
        }
        else if (elm.data !== vnode.text) {
            elm.data = vnode.text;
        }
        return true;
    }
    function assertNodeMatch(node, vnode, inVPre) {
        if (isDef(vnode.tag)) {
            return (vnode.tag.indexOf('vue-component') === 0 ||
                (!isUnknownElement(vnode, inVPre) &&
                    vnode.tag.toLowerCase() ===
                        (node.tagName && node.tagName.toLowerCase())));
        }
        else {
            return node.nodeType === (vnode.isComment ? 8 : 3);
        }
    }
    return function patch(oldVnode, vnode, hydrating, removeOnly) {
        if (isUndef(vnode)) {
            if (isDef(oldVnode))
                invokeDestroyHook(oldVnode);
            return;
        }
        var isInitialPatch = false;
        var insertedVnodeQueue = [];
        if (isUndef(oldVnode)) {
            // empty mount (likely as component), create new root element
            isInitialPatch = true;
            createElm(vnode, insertedVnodeQueue);
        }
        else {
            var isRealElement = isDef(oldVnode.nodeType);
            if (!isRealElement && sameVnode(oldVnode, vnode)) {
                // patch existing root node
                patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
            }
            else {
                if (isRealElement) {
                    // mounting to a real element
                    // check if this is server-rendered content and if we can perform
                    // a successful hydration.
                    if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                        oldVnode.removeAttribute(SSR_ATTR);
                        hydrating = true;
                    }
                    if (isTrue(hydrating)) {
                        if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                            invokeInsertHook(vnode, insertedVnodeQueue, true);
                            return oldVnode;
                        }
                        else if (true) {
                            warn('The client-side rendered virtual DOM tree is not matching ' +
                                'server-rendered content. This is likely caused by incorrect ' +
                                'HTML markup, for example nesting block-level elements inside ' +
                                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                                'full client-side render.');
                        }
                    }
                    // either not server-rendered, or hydration failed.
                    // create an empty node and replace it
                    oldVnode = emptyNodeAt(oldVnode);
                }
                // replacing existing element
                var oldElm = oldVnode.elm;
                var parentElm = nodeOps.parentNode(oldElm);
                // create new node
                createElm(vnode, insertedVnodeQueue, 
                // extremely rare edge case: do not insert if old element is in a
                // leaving transition. Only happens when combining transition +
                // keep-alive + HOCs. (#4590)
                oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm));
                // update parent placeholder node element, recursively
                if (isDef(vnode.parent)) {
                    var ancestor = vnode.parent;
                    var patchable = isPatchable(vnode);
                    while (ancestor) {
                        for (var i_8 = 0; i_8 < cbs.destroy.length; ++i_8) {
                            cbs.destroy[i_8](ancestor);
                        }
                        ancestor.elm = vnode.elm;
                        if (patchable) {
                            for (var i_9 = 0; i_9 < cbs.create.length; ++i_9) {
                                cbs.create[i_9](emptyNode, ancestor);
                            }
                            // #6513
                            // invoke insert hooks that may have been merged by create hooks.
                            // e.g. for directives that uses the "inserted" hook.
                            var insert_1 = ancestor.data.hook.insert;
                            if (insert_1.merged) {
                                // start at index 1 to avoid re-invoking component mounted hook
                                // clone insert hooks to avoid being mutated during iteration.
                                // e.g. for customed directives under transition group.
                                var cloned = insert_1.fns.slice(1);
                                for (var i_10 = 0; i_10 < cloned.length; i_10++) {
                                    cloned[i_10]();
                                }
                            }
                        }
                        else {
                            registerRef(ancestor);
                        }
                        ancestor = ancestor.parent;
                    }
                }
                // destroy old node
                if (isDef(parentElm)) {
                    removeVnodes([oldVnode], 0, 0);
                }
                else if (isDef(oldVnode.tag)) {
                    invokeDestroyHook(oldVnode);
                }
            }
        }
        invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
        return vnode.elm;
    };
}

var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
        // @ts-expect-error emptyNode is not VNodeWithData
        updateDirectives(vnode, emptyNode);
    }
};
function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
        _update(oldVnode, vnode);
    }
}
function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives(vnode.data.directives, vnode.context);
    var dirsWithInsert = [];
    var dirsWithPostpatch = [];
    var key, oldDir, dir;
    for (key in newDirs) {
        oldDir = oldDirs[key];
        dir = newDirs[key];
        if (!oldDir) {
            // new directive, bind
            callHook(dir, 'bind', vnode, oldVnode);
            if (dir.def && dir.def.inserted) {
                dirsWithInsert.push(dir);
            }
        }
        else {
            // existing directive, update
            dir.oldValue = oldDir.value;
            dir.oldArg = oldDir.arg;
            callHook(dir, 'update', vnode, oldVnode);
            if (dir.def && dir.def.componentUpdated) {
                dirsWithPostpatch.push(dir);
            }
        }
    }
    if (dirsWithInsert.length) {
        var callInsert = function () {
            for (var i = 0; i < dirsWithInsert.length; i++) {
                callHook(dirsWithInsert[i], 'inserted', vnode, oldVnode);
            }
        };
        if (isCreate) {
            mergeVNodeHook(vnode, 'insert', callInsert);
        }
        else {
            callInsert();
        }
    }
    if (dirsWithPostpatch.length) {
        mergeVNodeHook(vnode, 'postpatch', function () {
            for (var i = 0; i < dirsWithPostpatch.length; i++) {
                callHook(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
            }
        });
    }
    if (!isCreate) {
        for (key in oldDirs) {
            if (!newDirs[key]) {
                // no longer present, unbind
                callHook(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
            }
        }
    }
}
var emptyModifiers = Object.create(null);
function normalizeDirectives(dirs, vm) {
    var res = Object.create(null);
    if (!dirs) {
        // $flow-disable-line
        return res;
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
        dir = dirs[i];
        if (!dir.modifiers) {
            // $flow-disable-line
            dir.modifiers = emptyModifiers;
        }
        res[getRawDirName(dir)] = dir;
        if (vm._setupState && vm._setupState.__sfc) {
            var setupDef = dir.def || resolveAsset(vm, '_setupState', 'v-' + dir.name);
            if (typeof setupDef === 'function') {
                dir.def = {
                    bind: setupDef,
                    update: setupDef,
                };
            }
            else {
                dir.def = setupDef;
            }
        }
        dir.def = dir.def || resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res;
}
function getRawDirName(dir) {
    return (dir.rawName || "".concat(dir.name, ".").concat(Object.keys(dir.modifiers || {}).join('.')));
}
function callHook(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
        try {
            fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
        }
        catch (e) {
            handleError(e, vnode.context, "directive ".concat(dir.name, " ").concat(hook, " hook"));
        }
    }
}

var baseModules = [ref, directives];

function updateAttrs(oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
        return;
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
        return;
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__) || isTrue(attrs._v_attr_proxy)) {
        attrs = vnode.data.attrs = extend({}, attrs);
    }
    for (key in attrs) {
        cur = attrs[key];
        old = oldAttrs[key];
        if (old !== cur) {
            setAttr(elm, key, cur, vnode.data.pre);
        }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
        setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
        if (isUndef(attrs[key])) {
            if (isXlink(key)) {
                elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
            }
            else if (!isEnumeratedAttr(key)) {
                elm.removeAttribute(key);
            }
        }
    }
}
function setAttr(el, key, value, isInPre) {
    if (isInPre || el.tagName.indexOf('-') > -1) {
        baseSetAttr(el, key, value);
    }
    else if (isBooleanAttr(key)) {
        // set attribute for blank value
        // e.g. <option disabled>Select one</option>
        if (isFalsyAttrValue(value)) {
            el.removeAttribute(key);
        }
        else {
            // technically allowfullscreen is a boolean attribute for <iframe>,
            // but Flash expects a value of "true" when used on <embed> tag
            value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
            el.setAttribute(key, value);
        }
    }
    else if (isEnumeratedAttr(key)) {
        el.setAttribute(key, convertEnumeratedValue(key, value));
    }
    else if (isXlink(key)) {
        if (isFalsyAttrValue(value)) {
            el.removeAttributeNS(xlinkNS, getXlinkProp(key));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        baseSetAttr(el, key, value);
    }
}
function baseSetAttr(el, key, value) {
    if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
    }
    else {
        // #7138: IE10 & 11 fires input event when setting placeholder on
        // <textarea>... block the first input event and remove the blocker
        // immediately.
        /* istanbul ignore if */
        if (isIE &&
            !isIE9 &&
            el.tagName === 'TEXTAREA' &&
            key === 'placeholder' &&
            value !== '' &&
            !el.__ieph) {
            var blocker_1 = function (e) {
                e.stopImmediatePropagation();
                el.removeEventListener('input', blocker_1);
            };
            el.addEventListener('input', blocker_1);
            // $flow-disable-line
            el.__ieph = true; /* IE placeholder patched */
        }
        el.setAttribute(key, value);
    }
}
var attrs = {
    create: updateAttrs,
    update: updateAttrs
};

function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticClass) &&
        isUndef(data.class) &&
        (isUndef(oldData) ||
            (isUndef(oldData.staticClass) && isUndef(oldData.class)))) {
        return;
    }
    var cls = genClassForVnode(vnode);
    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
        cls = concat(cls, stringifyClass(transitionClass));
    }
    // set the class
    if (cls !== el._prevClass) {
        el.setAttribute('class', cls);
        el._prevClass = cls;
    }
}
var klass = {
    create: updateClass,
    update: updateClass
};

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents(on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
        // IE input[type=range] only supports `change` event
        var event_1 = isIE ? 'change' : 'input';
        on[event_1] = [].concat(on[RANGE_TOKEN], on[event_1] || []);
        delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
        on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
        delete on[CHECKBOX_RADIO_TOKEN];
    }
}
var target;
function createOnceHandler(event, handler, capture) {
    var _target = target; // save current target element in closure
    return function onceHandler() {
        var res = handler.apply(null, arguments);
        if (res !== null) {
            remove(event, onceHandler, capture, _target);
        }
    };
}
// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
function add(name, handler, capture, passive) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
        var attachedTimestamp_1 = currentFlushTimestamp;
        var original_1 = handler;
        //@ts-expect-error
        handler = original_1._wrapper = function (e) {
            if (
            // no bubbling, should always fire.
            // this is just a safety net in case event.timeStamp is unreliable in
            // certain weird environments...
            e.target === e.currentTarget ||
                // event is fired after handler attachment
                e.timeStamp >= attachedTimestamp_1 ||
                // bail for environments that have buggy event.timeStamp implementations
                // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
                // #9681 QtWebEngine event.timeStamp is negative value
                e.timeStamp <= 0 ||
                // #9448 bail if event is fired in another document in a multi-page
                // electron/nw.js app, since event.timeStamp will be using a different
                // starting reference
                e.target.ownerDocument !== document) {
                return original_1.apply(this, arguments);
            }
        };
    }
    target.addEventListener(name, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
}
function remove(name, handler, capture, _target) {
    (_target || target).removeEventListener(name, 
    //@ts-expect-error
    handler._wrapper || handler, capture);
}
function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
        return;
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    // vnode is empty when removing all listeners,
    // and use old vnode dom element
    target = vnode.elm || oldVnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add, remove, createOnceHandler, vnode.context);
    target = undefined;
}
var events = {
    create: updateDOMListeners,
    update: updateDOMListeners,
    // @ts-expect-error emptyNode has actually data
    destroy: function (vnode) { return updateDOMListeners(vnode, emptyNode); }
};

var svgContainer;
function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
        return;
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__) || isTrue(props._v_attr_proxy)) {
        props = vnode.data.domProps = extend({}, props);
    }
    for (key in oldProps) {
        if (!(key in props)) {
            elm[key] = '';
        }
    }
    for (key in props) {
        cur = props[key];
        // ignore children if the node has textContent or innerHTML,
        // as these will throw away existing DOM nodes and cause removal errors
        // on subsequent patches (#3360)
        if (key === 'textContent' || key === 'innerHTML') {
            if (vnode.children)
                vnode.children.length = 0;
            if (cur === oldProps[key])
                continue;
            // #6601 work around Chrome version <= 55 bug where single textNode
            // replaced by innerHTML/textContent retains its parentNode property
            if (elm.childNodes.length === 1) {
                elm.removeChild(elm.childNodes[0]);
            }
        }
        if (key === 'value' && elm.tagName !== 'PROGRESS') {
            // store value as _value as well since
            // non-string values will be stringified
            elm._value = cur;
            // avoid resetting cursor position when value is the same
            var strCur = isUndef(cur) ? '' : String(cur);
            if (shouldUpdateValue(elm, strCur)) {
                elm.value = strCur;
            }
        }
        else if (key === 'innerHTML' &&
            isSVG(elm.tagName) &&
            isUndef(elm.innerHTML)) {
            // IE doesn't support innerHTML for SVG elements
            svgContainer = svgContainer || document.createElement('div');
            svgContainer.innerHTML = "<svg>".concat(cur, "</svg>");
            var svg = svgContainer.firstChild;
            while (elm.firstChild) {
                elm.removeChild(elm.firstChild);
            }
            while (svg.firstChild) {
                elm.appendChild(svg.firstChild);
            }
        }
        else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecessary `checked` update.
        cur !== oldProps[key]) {
            // some property updates can throw
            // e.g. `value` on <progress> w/ non-finite value
            try {
                elm[key] = cur;
            }
            catch (e) { }
        }
    }
}
function shouldUpdateValue(elm, checkVal) {
    return (
    //@ts-expect-error
    !elm.composing &&
        (elm.tagName === 'OPTION' ||
            isNotInFocusAndDirty(elm, checkVal) ||
            isDirtyWithModifiers(elm, checkVal)));
}
function isNotInFocusAndDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try {
        notInFocus = document.activeElement !== elm;
    }
    catch (e) { }
    return notInFocus && elm.value !== checkVal;
}
function isDirtyWithModifiers(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
        if (modifiers.number) {
            return toNumber(value) !== toNumber(newVal);
        }
        if (modifiers.trim) {
            return value.trim() !== newVal.trim();
        }
    }
    return value !== newVal;
}
var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
};

var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
        if (item) {
            var tmp = item.split(propertyDelimiter);
            tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return res;
});
// merge static and dynamic style data on the same vnode
function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle ? extend(data.staticStyle, style) : style;
}
// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
        return toObject(bindingStyle);
    }
    if (typeof bindingStyle === 'string') {
        return parseStyleText(bindingStyle);
    }
    return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;
    if (checkChild) {
        var childNode = vnode;
        while (childNode.componentInstance) {
            childNode = childNode.componentInstance._vnode;
            if (childNode &&
                childNode.data &&
                (styleData = normalizeStyleData(childNode.data))) {
                extend(res, styleData);
            }
        }
    }
    if ((styleData = normalizeStyleData(vnode.data))) {
        extend(res, styleData);
    }
    var parentNode = vnode;
    // @ts-expect-error parentNode.parent not VNodeWithData
    while ((parentNode = parentNode.parent)) {
        if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
            extend(res, styleData);
        }
    }
    return res;
}

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
        el.style.setProperty(name, val);
    }
    else if (importantRE.test(val)) {
        el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    }
    else {
        var normalizedName = normalize(name);
        if (Array.isArray(val)) {
            // Support values array created by autoprefixer, e.g.
            // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
            // Set them one by one, and the browser will only set those it can recognize
            for (var i = 0, len = val.length; i < len; i++) {
                el.style[normalizedName] = val[i];
            }
        }
        else {
            el.style[normalizedName] = val;
        }
    }
};
var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && prop in emptyStyle) {
        return prop;
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
        var name_1 = vendorNames[i] + capName;
        if (name_1 in emptyStyle) {
            return name_1;
        }
    }
});
function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticStyle) &&
        isUndef(data.style) &&
        isUndef(oldData.staticStyle) &&
        isUndef(oldData.style)) {
        return;
    }
    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;
    var style = normalizeStyleBinding(vnode.data.style) || {};
    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
    var newStyle = getStyle(vnode, true);
    for (name in oldStyle) {
        if (isUndef(newStyle[name])) {
            setProp(el, name, '');
        }
    }
    for (name in newStyle) {
        cur = newStyle[name];
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
    }
}
var style = {
    create: updateStyle,
    update: updateStyle
};

var whitespaceRE = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
        return;
    }
    /* istanbul ignore else */
    if (el.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
        }
        else {
            el.classList.add(cls);
        }
    }
    else {
        var cur = " ".concat(el.getAttribute('class') || '', " ");
        if (cur.indexOf(' ' + cls + ' ') < 0) {
            el.setAttribute('class', (cur + cls).trim());
        }
    }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
        return;
    }
    /* istanbul ignore else */
    if (el.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
        }
        else {
            el.classList.remove(cls);
        }
        if (!el.classList.length) {
            el.removeAttribute('class');
        }
    }
    else {
        var cur = " ".concat(el.getAttribute('class') || '', " ");
        var tar = ' ' + cls + ' ';
        while (cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, ' ');
        }
        cur = cur.trim();
        if (cur) {
            el.setAttribute('class', cur);
        }
        else {
            el.removeAttribute('class');
        }
    }
}

function resolveTransition(def) {
    if (!def) {
        return;
    }
    /* istanbul ignore else */
    if (typeof def === 'object') {
        var res = {};
        if (def.css !== false) {
            extend(res, autoCssTransition(def.name || 'v'));
        }
        extend(res, def);
        return res;
    }
    else if (typeof def === 'string') {
        return autoCssTransition(def);
    }
}
var autoCssTransition = cached(function (name) {
    return {
        enterClass: "".concat(name, "-enter"),
        enterToClass: "".concat(name, "-enter-to"),
        enterActiveClass: "".concat(name, "-enter-active"),
        leaveClass: "".concat(name, "-leave"),
        leaveToClass: "".concat(name, "-leave-to"),
        leaveActiveClass: "".concat(name, "-leave-active")
    };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';
// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
        window.onwebkittransitionend !== undefined) {
        transitionProp = 'WebkitTransition';
        transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
        window.onwebkitanimationend !== undefined) {
        animationProp = 'WebkitAnimation';
        animationEndEvent = 'webkitAnimationEnd';
    }
}
// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
    ? window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : setTimeout
    : /* istanbul ignore next */ function (/* istanbul ignore next */ fn) { return fn(); };
function nextFrame(fn) {
    raf(function () {
        // @ts-expect-error
        raf(fn);
    });
}
function addTransitionClass(el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
        transitionClasses.push(cls);
        addClass(el, cls);
    }
}
function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
        remove$2(el._transitionClasses, cls);
    }
    removeClass(el, cls);
}
function whenTransitionEnds(el, expectedType, cb) {
    var _a = getTransitionInfo(el, expectedType), type = _a.type, timeout = _a.timeout, propCount = _a.propCount;
    if (!type)
        return cb();
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
        el.removeEventListener(event, onEnd);
        cb();
    };
    var onEnd = function (e) {
        if (e.target === el) {
            if (++ended >= propCount) {
                end();
            }
        }
    };
    setTimeout(function () {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
}
var transformRE = /\b(transform|all)(,|$)/;
function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);
    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
            timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
        type: type,
        timeout: timeout,
        propCount: propCount,
        hasTransform: hasTransform
    };
}
function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }
    return Math.max.apply(null, durations.map(function (d, i) {
        return toMs(d) + toMs(delays[i]);
    }));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}

function enter(vnode, toggleDisplay) {
    var el = vnode.elm;
    // call leave callback now
    if (isDef(el._leaveCb)) {
        el._leaveCb.cancelled = true;
        el._leaveCb();
    }
    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
        return;
    }
    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
        return;
    }
    var css = data.css, type = data.type, enterClass = data.enterClass, enterToClass = data.enterToClass, enterActiveClass = data.enterActiveClass, appearClass = data.appearClass, appearToClass = data.appearToClass, appearActiveClass = data.appearActiveClass, beforeEnter = data.beforeEnter, enter = data.enter, afterEnter = data.afterEnter, enterCancelled = data.enterCancelled, beforeAppear = data.beforeAppear, appear = data.appear, afterAppear = data.afterAppear, appearCancelled = data.appearCancelled, duration = data.duration;
    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
        context = transitionNode.context;
        transitionNode = transitionNode.parent;
    }
    var isAppear = !context._isMounted || !vnode.isRootInsert;
    if (isAppear && !appear && appear !== '') {
        return;
    }
    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? (isFunction(appear) ? appear : enter) : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear
        ? appearCancelled || enterCancelled
        : enterCancelled;
    var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
    if ( true && explicitEnterDuration != null) {
        checkDuration(explicitEnterDuration, 'enter', vnode);
    }
    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);
    var cb = (el._enterCb = once(function () {
        if (expectsCSS) {
            removeTransitionClass(el, toClass);
            removeTransitionClass(el, activeClass);
        }
        // @ts-expect-error
        if (cb.cancelled) {
            if (expectsCSS) {
                removeTransitionClass(el, startClass);
            }
            enterCancelledHook && enterCancelledHook(el);
        }
        else {
            afterEnterHook && afterEnterHook(el);
        }
        el._enterCb = null;
    }));
    if (!vnode.data.show) {
        // remove pending leave element on enter by injecting an insert hook
        mergeVNodeHook(vnode, 'insert', function () {
            var parent = el.parentNode;
            var pendingNode = parent && parent._pending && parent._pending[vnode.key];
            if (pendingNode &&
                pendingNode.tag === vnode.tag &&
                pendingNode.elm._leaveCb) {
                pendingNode.elm._leaveCb();
            }
            enterHook && enterHook(el, cb);
        });
    }
    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
        addTransitionClass(el, startClass);
        addTransitionClass(el, activeClass);
        nextFrame(function () {
            removeTransitionClass(el, startClass);
            // @ts-expect-error
            if (!cb.cancelled) {
                addTransitionClass(el, toClass);
                if (!userWantsControl) {
                    if (isValidDuration(explicitEnterDuration)) {
                        setTimeout(cb, explicitEnterDuration);
                    }
                    else {
                        whenTransitionEnds(el, type, cb);
                    }
                }
            }
        });
    }
    if (vnode.data.show) {
        toggleDisplay && toggleDisplay();
        enterHook && enterHook(el, cb);
    }
    if (!expectsCSS && !userWantsControl) {
        cb();
    }
}
function leave(vnode, rm) {
    var el = vnode.elm;
    // call enter callback now
    if (isDef(el._enterCb)) {
        el._enterCb.cancelled = true;
        el._enterCb();
    }
    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
        return rm();
    }
    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
        return;
    }
    var css = data.css, type = data.type, leaveClass = data.leaveClass, leaveToClass = data.leaveToClass, leaveActiveClass = data.leaveActiveClass, beforeLeave = data.beforeLeave, leave = data.leave, afterLeave = data.afterLeave, leaveCancelled = data.leaveCancelled, delayLeave = data.delayLeave, duration = data.duration;
    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);
    var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
    if ( true && isDef(explicitLeaveDuration)) {
        checkDuration(explicitLeaveDuration, 'leave', vnode);
    }
    var cb = (el._leaveCb = once(function () {
        if (el.parentNode && el.parentNode._pending) {
            el.parentNode._pending[vnode.key] = null;
        }
        if (expectsCSS) {
            removeTransitionClass(el, leaveToClass);
            removeTransitionClass(el, leaveActiveClass);
        }
        // @ts-expect-error
        if (cb.cancelled) {
            if (expectsCSS) {
                removeTransitionClass(el, leaveClass);
            }
            leaveCancelled && leaveCancelled(el);
        }
        else {
            rm();
            afterLeave && afterLeave(el);
        }
        el._leaveCb = null;
    }));
    if (delayLeave) {
        delayLeave(performLeave);
    }
    else {
        performLeave();
    }
    function performLeave() {
        // the delayed leave may have already been cancelled
        // @ts-expect-error
        if (cb.cancelled) {
            return;
        }
        // record leaving element
        if (!vnode.data.show && el.parentNode) {
            (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] =
                vnode;
        }
        beforeLeave && beforeLeave(el);
        if (expectsCSS) {
            addTransitionClass(el, leaveClass);
            addTransitionClass(el, leaveActiveClass);
            nextFrame(function () {
                removeTransitionClass(el, leaveClass);
                // @ts-expect-error
                if (!cb.cancelled) {
                    addTransitionClass(el, leaveToClass);
                    if (!userWantsControl) {
                        if (isValidDuration(explicitLeaveDuration)) {
                            setTimeout(cb, explicitLeaveDuration);
                        }
                        else {
                            whenTransitionEnds(el, type, cb);
                        }
                    }
                }
            });
        }
        leave && leave(el, cb);
        if (!expectsCSS && !userWantsControl) {
            cb();
        }
    }
}
// only used in dev mode
function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
        warn("<transition> explicit ".concat(name, " duration is not a valid number - ") +
            "got ".concat(JSON.stringify(val), "."), vnode.context);
    }
    else if (isNaN(val)) {
        warn("<transition> explicit ".concat(name, " duration is NaN - ") +
            'the duration expression might be incorrect.', vnode.context);
    }
}
function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
        return false;
    }
    // @ts-expect-error
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
        // invoker
        return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    }
    else {
        // @ts-expect-error
        return (fn._length || fn.length) > 1;
    }
}
function _enter(_, vnode) {
    if (vnode.data.show !== true) {
        enter(vnode);
    }
}
var transition = inBrowser
    ? {
        create: _enter,
        activate: _enter,
        remove: function (vnode, rm) {
            /* istanbul ignore else */
            if (vnode.data.show !== true) {
                // @ts-expect-error
                leave(vnode, rm);
            }
            else {
                rm();
            }
        }
    }
    : {};

var platformModules = [attrs, klass, events, domProps, style, transition];

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);
var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */
/* istanbul ignore if */
if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
        var el = document.activeElement;
        // @ts-expect-error
        if (el && el.vmodel) {
            trigger(el, 'input');
        }
    });
}
var directive = {
    inserted: function (el, binding, vnode, oldVnode) {
        if (vnode.tag === 'select') {
            // #6903
            if (oldVnode.elm && !oldVnode.elm._vOptions) {
                mergeVNodeHook(vnode, 'postpatch', function () {
                    directive.componentUpdated(el, binding, vnode);
                });
            }
            else {
                setSelected(el, binding, vnode.context);
            }
            el._vOptions = [].map.call(el.options, getValue);
        }
        else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
            el._vModifiers = binding.modifiers;
            if (!binding.modifiers.lazy) {
                el.addEventListener('compositionstart', onCompositionStart);
                el.addEventListener('compositionend', onCompositionEnd);
                // Safari < 10.2 & UIWebView doesn't fire compositionend when
                // switching focus before confirming composition choice
                // this also fixes the issue where some browsers e.g. iOS Chrome
                // fires "change" instead of "input" on autocomplete.
                el.addEventListener('change', onCompositionEnd);
                /* istanbul ignore if */
                if (isIE9) {
                    el.vmodel = true;
                }
            }
        }
    },
    componentUpdated: function (el, binding, vnode) {
        if (vnode.tag === 'select') {
            setSelected(el, binding, vnode.context);
            // in case the options rendered by v-for have changed,
            // it's possible that the value is out-of-sync with the rendered options.
            // detect such cases and filter out values that no longer has a matching
            // option in the DOM.
            var prevOptions_1 = el._vOptions;
            var curOptions_1 = (el._vOptions = [].map.call(el.options, getValue));
            if (curOptions_1.some(function (o, i) { return !looseEqual(o, prevOptions_1[i]); })) {
                // trigger change event if
                // no matching option found for at least one value
                var needReset = el.multiple
                    ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions_1); })
                    : binding.value !== binding.oldValue &&
                        hasNoMatchingOption(binding.value, curOptions_1);
                if (needReset) {
                    trigger(el, 'change');
                }
            }
        }
    }
};
function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
        setTimeout(function () {
            actuallySetSelected(el, binding, vm);
        }, 0);
    }
}
function actuallySetSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
         true &&
            warn("<select multiple v-model=\"".concat(binding.expression, "\"> ") +
                "expects an Array value for its binding, but got ".concat(Object.prototype.toString
                    .call(value)
                    .slice(8, -1)), vm);
        return;
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
        option = el.options[i];
        if (isMultiple) {
            selected = looseIndexOf(value, getValue(option)) > -1;
            if (option.selected !== selected) {
                option.selected = selected;
            }
        }
        else {
            if (looseEqual(getValue(option), value)) {
                if (el.selectedIndex !== i) {
                    el.selectedIndex = i;
                }
                return;
            }
        }
    }
    if (!isMultiple) {
        el.selectedIndex = -1;
    }
}
function hasNoMatchingOption(value, options) {
    return options.every(function (o) { return !looseEqual(o, value); });
}
function getValue(option) {
    return '_value' in option ? option._value : option.value;
}
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing)
        return;
    e.target.composing = false;
    trigger(e.target, 'input');
}
function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
}

// recursively search for possible transition defined inside the component root
function locateNode(vnode) {
    // @ts-expect-error
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
        ? locateNode(vnode.componentInstance._vnode)
        : vnode;
}
var show = {
    bind: function (el, _a, vnode) {
        var value = _a.value;
        vnode = locateNode(vnode);
        var transition = vnode.data && vnode.data.transition;
        var originalDisplay = (el.__vOriginalDisplay =
            el.style.display === 'none' ? '' : el.style.display);
        if (value && transition) {
            vnode.data.show = true;
            enter(vnode, function () {
                el.style.display = originalDisplay;
            });
        }
        else {
            el.style.display = value ? originalDisplay : 'none';
        }
    },
    update: function (el, _a, vnode) {
        var value = _a.value, oldValue = _a.oldValue;
        /* istanbul ignore if */
        if (!value === !oldValue)
            return;
        vnode = locateNode(vnode);
        var transition = vnode.data && vnode.data.transition;
        if (transition) {
            vnode.data.show = true;
            if (value) {
                enter(vnode, function () {
                    el.style.display = el.__vOriginalDisplay;
                });
            }
            else {
                leave(vnode, function () {
                    el.style.display = 'none';
                });
            }
        }
        else {
            el.style.display = value ? el.__vOriginalDisplay : 'none';
        }
    },
    unbind: function (el, binding, vnode, oldVnode, isDestroy) {
        if (!isDestroy) {
            el.style.display = el.__vOriginalDisplay;
        }
    }
};

var platformDirectives = {
    model: directive,
    show: show
};

// Provides transition support for a single element/component.
var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
};
// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
        return getRealChild(getFirstComponentChild(compOptions.children));
    }
    else {
        return vnode;
    }
}
function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
        data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key in listeners) {
        data[camelize(key)] = listeners[key];
    }
    return data;
}
function placeholder(h, rawChild) {
    // @ts-expect-error
    if (/\d-keep-alive$/.test(rawChild.tag)) {
        return h('keep-alive', {
            props: rawChild.componentOptions.propsData
        });
    }
}
function hasParentTransition(vnode) {
    while ((vnode = vnode.parent)) {
        if (vnode.data.transition) {
            return true;
        }
    }
}
function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
}
var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };
var isVShowDirective = function (d) { return d.name === 'show'; };
var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,
    render: function (h) {
        var _this = this;
        var children = this.$slots.default;
        if (!children) {
            return;
        }
        // filter out text nodes (possible whitespaces)
        children = children.filter(isNotTextNode);
        /* istanbul ignore if */
        if (!children.length) {
            return;
        }
        // warn multiple elements
        if ( true && children.length > 1) {
            warn('<transition> can only be used on a single element. Use ' +
                '<transition-group> for lists.', this.$parent);
        }
        var mode = this.mode;
        // warn invalid mode
        if ( true && mode && mode !== 'in-out' && mode !== 'out-in') {
            warn('invalid <transition> mode: ' + mode, this.$parent);
        }
        var rawChild = children[0];
        // if this is a component root node and the component's
        // parent container node also has transition, skip.
        if (hasParentTransition(this.$vnode)) {
            return rawChild;
        }
        // apply transition data to child
        // use getRealChild() to ignore abstract components e.g. keep-alive
        var child = getRealChild(rawChild);
        /* istanbul ignore if */
        if (!child) {
            return rawChild;
        }
        if (this._leaving) {
            return placeholder(h, rawChild);
        }
        // ensure a key that is unique to the vnode type and to this transition
        // component instance. This key will be used to remove pending leaving nodes
        // during entering.
        var id = "__transition-".concat(this._uid, "-");
        child.key =
            child.key == null
                ? child.isComment
                    ? id + 'comment'
                    : id + child.tag
                : isPrimitive(child.key)
                    ? String(child.key).indexOf(id) === 0
                        ? child.key
                        : id + child.key
                    : child.key;
        var data = ((child.data || (child.data = {})).transition =
            extractTransitionData(this));
        var oldRawChild = this._vnode;
        var oldChild = getRealChild(oldRawChild);
        // mark v-show
        // so that the transition module can hand over the control to the directive
        if (child.data.directives && child.data.directives.some(isVShowDirective)) {
            child.data.show = true;
        }
        if (oldChild &&
            oldChild.data &&
            !isSameChild(child, oldChild) &&
            !isAsyncPlaceholder(oldChild) &&
            // #6687 component root is a comment node
            !(oldChild.componentInstance &&
                oldChild.componentInstance._vnode.isComment)) {
            // replace old child transition data with fresh one
            // important for dynamic transitions!
            var oldData = (oldChild.data.transition = extend({}, data));
            // handle transition mode
            if (mode === 'out-in') {
                // return placeholder node and queue update when leave finishes
                this._leaving = true;
                mergeVNodeHook(oldData, 'afterLeave', function () {
                    _this._leaving = false;
                    _this.$forceUpdate();
                });
                return placeholder(h, rawChild);
            }
            else if (mode === 'in-out') {
                if (isAsyncPlaceholder(child)) {
                    return oldRawChild;
                }
                var delayedLeave_1;
                var performLeave = function () {
                    delayedLeave_1();
                };
                mergeVNodeHook(data, 'afterEnter', performLeave);
                mergeVNodeHook(data, 'enterCancelled', performLeave);
                mergeVNodeHook(oldData, 'delayLeave', function (leave) {
                    delayedLeave_1 = leave;
                });
            }
        }
        return rawChild;
    }
};

// Provides transition support for list items.
var props = extend({
    tag: String,
    moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
    props: props,
    beforeMount: function () {
        var _this = this;
        var update = this._update;
        this._update = function (vnode, hydrating) {
            var restoreActiveInstance = setActiveInstance(_this);
            // force removing pass
            _this.__patch__(_this._vnode, _this.kept, false, // hydrating
            true // removeOnly (!important, avoids unnecessary moves)
            );
            _this._vnode = _this.kept;
            restoreActiveInstance();
            update.call(_this, vnode, hydrating);
        };
    },
    render: function (h) {
        var tag = this.tag || this.$vnode.data.tag || 'span';
        var map = Object.create(null);
        var prevChildren = (this.prevChildren = this.children);
        var rawChildren = this.$slots.default || [];
        var children = (this.children = []);
        var transitionData = extractTransitionData(this);
        for (var i = 0; i < rawChildren.length; i++) {
            var c = rawChildren[i];
            if (c.tag) {
                if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
                    children.push(c);
                    map[c.key] = c;
                    (c.data || (c.data = {})).transition = transitionData;
                }
                else if (true) {
                    var opts = c.componentOptions;
                    var name_1 = opts
                        ? getComponentName(opts.Ctor.options) || opts.tag || ''
                        : c.tag;
                    warn("<transition-group> children must be keyed: <".concat(name_1, ">"));
                }
            }
        }
        if (prevChildren) {
            var kept = [];
            var removed = [];
            for (var i = 0; i < prevChildren.length; i++) {
                var c = prevChildren[i];
                c.data.transition = transitionData;
                // @ts-expect-error .getBoundingClientRect is not typed in Node
                c.data.pos = c.elm.getBoundingClientRect();
                if (map[c.key]) {
                    kept.push(c);
                }
                else {
                    removed.push(c);
                }
            }
            this.kept = h(tag, null, kept);
            this.removed = removed;
        }
        return h(tag, null, children);
    },
    updated: function () {
        var children = this.prevChildren;
        var moveClass = this.moveClass || (this.name || 'v') + '-move';
        if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
            return;
        }
        // we divide the work into three loops to avoid mixing DOM reads and writes
        // in each iteration - which helps prevent layout thrashing.
        children.forEach(callPendingCbs);
        children.forEach(recordPosition);
        children.forEach(applyTranslation);
        // force reflow to put everything in position
        // assign to this to avoid being removed in tree-shaking
        // $flow-disable-line
        this._reflow = document.body.offsetHeight;
        children.forEach(function (c) {
            if (c.data.moved) {
                var el_1 = c.elm;
                var s = el_1.style;
                addTransitionClass(el_1, moveClass);
                s.transform = s.WebkitTransform = s.transitionDuration = '';
                el_1.addEventListener(transitionEndEvent, (el_1._moveCb = function cb(e) {
                    if (e && e.target !== el_1) {
                        return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                        el_1.removeEventListener(transitionEndEvent, cb);
                        el_1._moveCb = null;
                        removeTransitionClass(el_1, moveClass);
                    }
                }));
            }
        });
    },
    methods: {
        hasMove: function (el, moveClass) {
            /* istanbul ignore if */
            if (!hasTransition) {
                return false;
            }
            /* istanbul ignore if */
            if (this._hasMove) {
                return this._hasMove;
            }
            // Detect whether an element with the move class applied has
            // CSS transitions. Since the element may be inside an entering
            // transition at this very moment, we make a clone of it and remove
            // all other transition classes applied to ensure only the move class
            // is applied.
            var clone = el.cloneNode();
            if (el._transitionClasses) {
                el._transitionClasses.forEach(function (cls) {
                    removeClass(clone, cls);
                });
            }
            addClass(clone, moveClass);
            clone.style.display = 'none';
            this.$el.appendChild(clone);
            var info = getTransitionInfo(clone);
            this.$el.removeChild(clone);
            return (this._hasMove = info.hasTransform);
        }
    }
};
function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
        c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
        c.elm._enterCb();
    }
}
function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
}
function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
        c.data.moved = true;
        var s = c.elm.style;
        s.transform = s.WebkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
        s.transitionDuration = '0s';
    }
}

var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
};

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;
// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);
// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;
// public mount method
Vue.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
};
// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
    setTimeout(function () {
        if (config.devtools) {
            if (devtools) {
                devtools.emit('init', Vue);
            }
            else if (true) {
                // @ts-expect-error
                console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' +
                    'https://github.com/vuejs/vue-devtools');
            }
        }
        if ( true &&
            config.productionTip !== false &&
            typeof console !== 'undefined') {
            // @ts-expect-error
            console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" +
                "Make sure to turn on production mode when deploying for production.\n" +
                "See more tips at https://vuejs.org/guide/deployment.html");
        }
    }, 0);
}




/***/ }),

/***/ "./node_modules/@nextcloud/auth/dist/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/@nextcloud/auth/dist/index.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCSPNonce: () => (/* binding */ getCSPNonce),
/* harmony export */   getCurrentUser: () => (/* binding */ getCurrentUser),
/* harmony export */   getGuestNickname: () => (/* binding */ getGuestNickname),
/* harmony export */   getRequestToken: () => (/* binding */ getRequestToken),
/* harmony export */   onRequestTokenUpdate: () => (/* binding */ onRequestTokenUpdate),
/* harmony export */   setGuestNickname: () => (/* binding */ setGuestNickname)
/* harmony export */ });
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/browser-storage */ "./node_modules/@nextcloud/browser-storage/dist/index.js");


let token;
const observers = [];
function getRequestToken() {
  if (token === void 0) {
    token = document.head.dataset.requesttoken ?? null;
  }
  return token;
}
function onRequestTokenUpdate(observer) {
  observers.push(observer);
}
(0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)("csrf-token-update", (e) => {
  token = e.token;
  observers.forEach((observer) => {
    try {
      observer(token);
    } catch (e2) {
      console.error("Error updating CSRF token observer", e2);
    }
  });
});
function getCSPNonce() {
  const meta = document?.querySelector('meta[name="csp-nonce"]');
  if (!meta) {
    const token2 = getRequestToken();
    return token2 ? btoa(token2) : void 0;
  }
  return meta.nonce;
}
const browserStorage = (0,_nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_1__.getBuilder)("public").persist().build();
function getGuestNickname() {
  return browserStorage.getItem("guestNickname");
}
function setGuestNickname(nickname) {
  browserStorage.setItem("guestNickname", nickname);
}
let currentUser;
const getAttribute = (el, attribute) => {
  if (el) {
    return el.getAttribute(attribute);
  }
  return null;
};
function getCurrentUser() {
  if (currentUser !== void 0) {
    return currentUser;
  }
  const head = document?.getElementsByTagName("head")[0];
  if (!head) {
    return null;
  }
  const uid = getAttribute(head, "data-user");
  if (uid === null) {
    currentUser = null;
    return currentUser;
  }
  currentUser = {
    uid,
    displayName: getAttribute(head, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  };
  return currentUser;
}



/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/dist/index.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/dist/index.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyBus: () => (/* binding */ ProxyBus),
/* harmony export */   SimpleBus: () => (/* binding */ SimpleBus),
/* harmony export */   emit: () => (/* binding */ emit),
/* harmony export */   subscribe: () => (/* binding */ subscribe),
/* harmony export */   unsubscribe: () => (/* binding */ unsubscribe)
/* harmony export */ });
/* harmony import */ var semver_functions_valid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semver/functions/valid.js */ "./node_modules/@nextcloud/event-bus/node_modules/semver/functions/valid.js");
/* harmony import */ var semver_functions_major_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semver/functions/major.js */ "./node_modules/@nextcloud/event-bus/node_modules/semver/functions/major.js");


class ProxyBus {
  bus;
  constructor(bus2) {
    if (typeof bus2.getVersion !== "function" || !semver_functions_valid_js__WEBPACK_IMPORTED_MODULE_0__(bus2.getVersion())) {
      console.warn("Proxying an event bus with an unknown or invalid version");
    } else if (semver_functions_major_js__WEBPACK_IMPORTED_MODULE_1__(bus2.getVersion()) !== semver_functions_major_js__WEBPACK_IMPORTED_MODULE_1__(this.getVersion())) {
      console.warn(
        "Proxying an event bus of version " + bus2.getVersion() + " with " + this.getVersion()
      );
    }
    this.bus = bus2;
  }
  getVersion() {
    return "3.3.1";
  }
  subscribe(name, handler) {
    this.bus.subscribe(name, handler);
  }
  unsubscribe(name, handler) {
    this.bus.unsubscribe(name, handler);
  }
  emit(name, event) {
    this.bus.emit(name, event);
  }
}
class SimpleBus {
  handlers = /* @__PURE__ */ new Map();
  getVersion() {
    return "3.3.1";
  }
  subscribe(name, handler) {
    this.handlers.set(
      name,
      (this.handlers.get(name) || []).concat(
        handler
      )
    );
  }
  unsubscribe(name, handler) {
    this.handlers.set(
      name,
      (this.handlers.get(name) || []).filter((h) => h !== handler)
    );
  }
  emit(name, event) {
    (this.handlers.get(name) || []).forEach((h) => {
      try {
        h(event);
      } catch (e) {
        console.error("could not invoke event listener", e);
      }
    });
  }
}
let bus = null;
function getBus() {
  if (bus !== null) {
    return bus;
  }
  if (typeof window === "undefined") {
    return new Proxy({}, {
      get: () => {
        return () => console.error(
          "Window not available, EventBus can not be established!"
        );
      }
    });
  }
  if (window.OC?._eventBus && typeof window._nc_event_bus === "undefined") {
    console.warn(
      "found old event bus instance at OC._eventBus. Update your version!"
    );
    window._nc_event_bus = window.OC._eventBus;
  }
  if (typeof window?._nc_event_bus !== "undefined") {
    bus = new ProxyBus(window._nc_event_bus);
  } else {
    bus = window._nc_event_bus = new SimpleBus();
  }
  return bus;
}
function subscribe(name, handler) {
  getBus().subscribe(name, handler);
}
function unsubscribe(name, handler) {
  getBus().unsubscribe(name, handler);
}
function emit(name, event) {
  getBus().emit(name, event);
}



/***/ }),

/***/ "./node_modules/@nextcloud/files/dist/chunks/dav-DxfiR0wZ.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@nextcloud/files/dist/chunks/dav-DxfiR0wZ.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ FileType),
/* harmony export */   N: () => (/* binding */ Node),
/* harmony export */   P: () => (/* binding */ Permission),
/* harmony export */   a: () => (/* binding */ getRemoteURL),
/* harmony export */   b: () => (/* binding */ defaultRemoteURL),
/* harmony export */   c: () => (/* binding */ getClient),
/* harmony export */   d: () => (/* binding */ defaultRootPath),
/* harmony export */   e: () => (/* binding */ getFavoriteNodes),
/* harmony export */   f: () => (/* binding */ defaultDavProperties),
/* harmony export */   g: () => (/* binding */ getRootPath),
/* harmony export */   h: () => (/* binding */ defaultDavNamespaces),
/* harmony export */   i: () => (/* binding */ registerDavProperty),
/* harmony export */   j: () => (/* binding */ getDavProperties),
/* harmony export */   k: () => (/* binding */ getDavNameSpaces),
/* harmony export */   l: () => (/* binding */ getDefaultPropfind),
/* harmony export */   m: () => (/* binding */ getFavoritesReport),
/* harmony export */   n: () => (/* binding */ getRecentSearch),
/* harmony export */   o: () => (/* binding */ logger),
/* harmony export */   p: () => (/* binding */ parsePermissions),
/* harmony export */   q: () => (/* binding */ File),
/* harmony export */   r: () => (/* binding */ resultToNode),
/* harmony export */   s: () => (/* binding */ Folder),
/* harmony export */   t: () => (/* binding */ NodeStatus)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var _nextcloud_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/paths */ "./node_modules/@nextcloud/paths/dist/index.mjs");
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.mjs");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var cancelable_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cancelable-promise */ "./node_modules/cancelable-promise/umd/CancelablePromise.js");
/* harmony import */ var webdav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! webdav */ "./node_modules/webdav/dist/web/index.js");
/* harmony import */ var _nextcloud_sharing_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/sharing/public */ "./node_modules/@nextcloud/sharing/dist/public.mjs");








const logger = (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_2__.getLoggerBuilder)().setApp("@nextcloud/files").detectUser().build();
var Permission = /* @__PURE__ */ ((Permission2) => {
  Permission2[Permission2["NONE"] = 0] = "NONE";
  Permission2[Permission2["CREATE"] = 4] = "CREATE";
  Permission2[Permission2["READ"] = 1] = "READ";
  Permission2[Permission2["UPDATE"] = 2] = "UPDATE";
  Permission2[Permission2["DELETE"] = 8] = "DELETE";
  Permission2[Permission2["SHARE"] = 16] = "SHARE";
  Permission2[Permission2["ALL"] = 31] = "ALL";
  return Permission2;
})(Permission || {});
var FileType = /* @__PURE__ */ ((FileType2) => {
  FileType2["Folder"] = "folder";
  FileType2["File"] = "file";
  return FileType2;
})(FileType || {});
const isDavRessource = function(source, davService) {
  return source.match(davService) !== null;
};
const validateData = (data, davService) => {
  if (data.id && typeof data.id !== "number") {
    throw new Error("Invalid id type of value");
  }
  if (!data.source) {
    throw new Error("Missing mandatory source");
  }
  try {
    new URL(data.source);
  } catch (e) {
    throw new Error("Invalid source format, source must be a valid URL");
  }
  if (!data.source.startsWith("http")) {
    throw new Error("Invalid source format, only http(s) is supported");
  }
  if (data.displayname && typeof data.displayname !== "string") {
    throw new Error("Invalid displayname type");
  }
  if (data.mtime && !(data.mtime instanceof Date)) {
    throw new Error("Invalid mtime type");
  }
  if (data.crtime && !(data.crtime instanceof Date)) {
    throw new Error("Invalid crtime type");
  }
  if (!data.mime || typeof data.mime !== "string" || !data.mime.match(/^[-\w.]+\/[-+\w.]+$/gi)) {
    throw new Error("Missing or invalid mandatory mime");
  }
  if ("size" in data && typeof data.size !== "number" && data.size !== void 0) {
    throw new Error("Invalid size type");
  }
  if ("permissions" in data && data.permissions !== void 0 && !(typeof data.permissions === "number" && data.permissions >= Permission.NONE && data.permissions <= Permission.ALL)) {
    throw new Error("Invalid permissions");
  }
  if (data.owner && data.owner !== null && typeof data.owner !== "string") {
    throw new Error("Invalid owner type");
  }
  if (data.attributes && typeof data.attributes !== "object") {
    throw new Error("Invalid attributes type");
  }
  if (data.root && typeof data.root !== "string") {
    throw new Error("Invalid root type");
  }
  if (data.root && !data.root.startsWith("/")) {
    throw new Error("Root must start with a leading slash");
  }
  if (data.root && !data.source.includes(data.root)) {
    throw new Error("Root must be part of the source");
  }
  if (data.root && isDavRessource(data.source, davService)) {
    const service = data.source.match(davService)[0];
    if (!data.source.includes((0,path__WEBPACK_IMPORTED_MODULE_0__.join)(service, data.root))) {
      throw new Error("The root must be relative to the service. e.g /files/emma");
    }
  }
  if (data.status && !Object.values(NodeStatus).includes(data.status)) {
    throw new Error("Status must be a valid NodeStatus");
  }
};
var NodeStatus = /* @__PURE__ */ ((NodeStatus2) => {
  NodeStatus2["NEW"] = "new";
  NodeStatus2["FAILED"] = "failed";
  NodeStatus2["LOADING"] = "loading";
  NodeStatus2["LOCKED"] = "locked";
  return NodeStatus2;
})(NodeStatus || {});
class Node {
  _data;
  _attributes;
  _knownDavService = /(remote|public)\.php\/(web)?dav/i;
  readonlyAttributes = Object.entries(Object.getOwnPropertyDescriptors(Node.prototype)).filter((e) => typeof e[1].get === "function" && e[0] !== "__proto__").map((e) => e[0]);
  handler = {
    set: (target, prop, value) => {
      if (this.readonlyAttributes.includes(prop)) {
        return false;
      }
      return Reflect.set(target, prop, value);
    },
    deleteProperty: (target, prop) => {
      if (this.readonlyAttributes.includes(prop)) {
        return false;
      }
      return Reflect.deleteProperty(target, prop);
    },
    // TODO: This is deprecated and only needed for files v3
    get: (target, prop, receiver) => {
      if (this.readonlyAttributes.includes(prop)) {
        logger.warn(`Accessing "Node.attributes.${prop}" is deprecated, access it directly on the Node instance.`);
        return Reflect.get(this, prop);
      }
      return Reflect.get(target, prop, receiver);
    }
  };
  constructor(data, davService) {
    validateData(data, davService || this._knownDavService);
    this._data = {
      // TODO: Remove with next major release, this is just for compatibility
      displayname: data.attributes?.displayname,
      ...data,
      attributes: {}
    };
    this._attributes = new Proxy(this._data.attributes, this.handler);
    this.update(data.attributes ?? {});
    if (davService) {
      this._knownDavService = davService;
    }
  }
  /**
   * Get the source url to this object
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get source() {
    return this._data.source.replace(/\/$/i, "");
  }
  /**
   * Get the encoded source url to this object for requests purposes
   */
  get encodedSource() {
    const { origin } = new URL(this.source);
    return origin + (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_1__.encodePath)(this.source.slice(origin.length));
  }
  /**
   * Get this object name
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get basename() {
    return (0,path__WEBPACK_IMPORTED_MODULE_0__.basename)(this.source);
  }
  /**
   * The nodes displayname
   * By default the display name and the `basename` are identical,
   * but it is possible to have a different name. This happens
   * on the files app for example for shared folders.
   */
  get displayname() {
    return this._data.displayname || this.basename;
  }
  /**
   * Set the displayname
   */
  set displayname(displayname) {
    this._data.displayname = displayname;
  }
  /**
   * Get this object's extension
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get extension() {
    return (0,path__WEBPACK_IMPORTED_MODULE_0__.extname)(this.source);
  }
  /**
   * Get the directory path leading to this object
   * Will use the relative path to root if available
   *
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get dirname() {
    if (this.root) {
      let source = this.source;
      if (this.isDavRessource) {
        source = source.split(this._knownDavService).pop();
      }
      const firstMatch = source.indexOf(this.root);
      const root = this.root.replace(/\/$/, "");
      return (0,path__WEBPACK_IMPORTED_MODULE_0__.dirname)(source.slice(firstMatch + root.length) || "/");
    }
    const url = new URL(this.source);
    return (0,path__WEBPACK_IMPORTED_MODULE_0__.dirname)(url.pathname);
  }
  /**
   * Get the file mime
   * There is no setter as the mime is not meant to be changed
   */
  get mime() {
    return this._data.mime;
  }
  /**
   * Get the file modification time
   */
  get mtime() {
    return this._data.mtime;
  }
  /**
   * Set the file modification time
   */
  set mtime(mtime) {
    this._data.mtime = mtime;
  }
  /**
   * Get the file creation time
   * There is no setter as the creation time is not meant to be changed
   */
  get crtime() {
    return this._data.crtime;
  }
  /**
   * Get the file size
   */
  get size() {
    return this._data.size;
  }
  /**
   * Set the file size
   */
  set size(size) {
    this.updateMtime();
    this._data.size = size;
  }
  /**
   * Get the file attribute
   * This contains all additional attributes not provided by the Node class
   */
  get attributes() {
    return this._attributes;
  }
  /**
   * Get the file permissions
   */
  get permissions() {
    if (this.owner === null && !this.isDavRessource) {
      return Permission.READ;
    }
    return this._data.permissions !== void 0 ? this._data.permissions : Permission.NONE;
  }
  /**
   * Set the file permissions
   */
  set permissions(permissions) {
    this.updateMtime();
    this._data.permissions = permissions;
  }
  /**
   * Get the file owner
   * There is no setter as the owner is not meant to be changed
   */
  get owner() {
    if (!this.isDavRessource) {
      return null;
    }
    return this._data.owner;
  }
  /**
   * Is this a dav-related ressource ?
   */
  get isDavRessource() {
    return isDavRessource(this.source, this._knownDavService);
  }
  /**
   * Get the dav root of this object
   * There is no setter as the root is not meant to be changed
   */
  get root() {
    if (this._data.root) {
      return this._data.root.replace(/^(.+)\/$/, "$1");
    }
    if (this.isDavRessource) {
      const root = (0,path__WEBPACK_IMPORTED_MODULE_0__.dirname)(this.source);
      return root.split(this._knownDavService).pop() || null;
    }
    return null;
  }
  /**
   * Get the absolute path of this object relative to the root
   */
  get path() {
    if (this.root) {
      let source = this.source;
      if (this.isDavRessource) {
        source = source.split(this._knownDavService).pop();
      }
      const firstMatch = source.indexOf(this.root);
      const root = this.root.replace(/\/$/, "");
      return source.slice(firstMatch + root.length) || "/";
    }
    return (this.dirname + "/" + this.basename).replace(/\/\//g, "/");
  }
  /**
   * Get the node id if defined.
   * There is no setter as the fileid is not meant to be changed
   */
  get fileid() {
    return this._data?.id;
  }
  /**
   * Get the node status.
   */
  get status() {
    return this._data?.status;
  }
  /**
   * Set the node status.
   */
  set status(status) {
    this._data.status = status;
  }
  /**
   * Get the node data
   */
  get data() {
    return structuredClone(this._data);
  }
  /**
   * Move the node to a new destination
   *
   * @param {string} destination the new source.
   * e.g. https://cloud.domain.com/remote.php/dav/files/emma/Photos/picture.jpg
   */
  move(destination) {
    validateData({ ...this._data, source: destination }, this._knownDavService);
    const oldBasename = this.basename;
    this._data.source = destination;
    if (this.displayname === oldBasename && this.basename !== oldBasename) {
      this.displayname = this.basename;
    }
    this.updateMtime();
  }
  /**
   * Rename the node
   * This aliases the move method for easier usage
   *
   * @param basename The new name of the node
   */
  rename(basename2) {
    if (basename2.includes("/")) {
      throw new Error("Invalid basename");
    }
    this.move((0,path__WEBPACK_IMPORTED_MODULE_0__.dirname)(this.source) + "/" + basename2);
  }
  /**
   * Update the mtime if exists
   */
  updateMtime() {
    if (this._data.mtime) {
      this._data.mtime = /* @__PURE__ */ new Date();
    }
  }
  /**
   * Update the attributes of the node
   * Warning, updating attributes will NOT automatically update the mtime.
   *
   * @param attributes The new attributes to update on the Node attributes
   */
  update(attributes) {
    for (const [name, value] of Object.entries(attributes)) {
      try {
        if (value === void 0) {
          delete this.attributes[name];
        } else {
          this.attributes[name] = value;
        }
      } catch (e) {
        if (e instanceof TypeError) {
          continue;
        }
        throw e;
      }
    }
  }
}
class File extends Node {
  get type() {
    return FileType.File;
  }
  /**
   * Returns a clone of the file
   */
  clone() {
    return new File(this.data);
  }
}
class Folder extends Node {
  constructor(data) {
    super({
      ...data,
      mime: "httpd/unix-directory"
    });
  }
  get type() {
    return FileType.Folder;
  }
  get extension() {
    return null;
  }
  get mime() {
    return "httpd/unix-directory";
  }
  /**
   * Returns a clone of the folder
   */
  clone() {
    return new Folder(this.data);
  }
}
const parsePermissions = function(permString = "") {
  let permissions = Permission.NONE;
  if (!permString) {
    return permissions;
  }
  if (permString.includes("C") || permString.includes("K")) {
    permissions |= Permission.CREATE;
  }
  if (permString.includes("G")) {
    permissions |= Permission.READ;
  }
  if (permString.includes("W") || permString.includes("N") || permString.includes("V")) {
    permissions |= Permission.UPDATE;
  }
  if (permString.includes("D")) {
    permissions |= Permission.DELETE;
  }
  if (permString.includes("R")) {
    permissions |= Permission.SHARE;
  }
  return permissions;
};
const defaultDavProperties = [
  "d:getcontentlength",
  "d:getcontenttype",
  "d:getetag",
  "d:getlastmodified",
  "d:creationdate",
  "d:displayname",
  "d:quota-available-bytes",
  "d:resourcetype",
  "nc:has-preview",
  "nc:is-encrypted",
  "nc:mount-type",
  "oc:comments-unread",
  "oc:favorite",
  "oc:fileid",
  "oc:owner-display-name",
  "oc:owner-id",
  "oc:permissions",
  "oc:size"
];
const defaultDavNamespaces = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
};
const registerDavProperty = function(prop, namespace = { nc: "http://nextcloud.org/ns" }) {
  if (typeof window._nc_dav_properties === "undefined") {
    window._nc_dav_properties = [...defaultDavProperties];
    window._nc_dav_namespaces = { ...defaultDavNamespaces };
  }
  const namespaces = { ...window._nc_dav_namespaces, ...namespace };
  if (window._nc_dav_properties.find((search) => search === prop)) {
    logger.warn(`${prop} already registered`, { prop });
    return false;
  }
  if (prop.startsWith("<") || prop.split(":").length !== 2) {
    logger.error(`${prop} is not valid. See example: 'oc:fileid'`, { prop });
    return false;
  }
  const ns = prop.split(":")[0];
  if (!namespaces[ns]) {
    logger.error(`${prop} namespace unknown`, { prop, namespaces });
    return false;
  }
  window._nc_dav_properties.push(prop);
  window._nc_dav_namespaces = namespaces;
  return true;
};
const getDavProperties = function() {
  if (typeof window._nc_dav_properties === "undefined") {
    window._nc_dav_properties = [...defaultDavProperties];
  }
  return window._nc_dav_properties.map((prop) => `<${prop} />`).join(" ");
};
const getDavNameSpaces = function() {
  if (typeof window._nc_dav_namespaces === "undefined") {
    window._nc_dav_namespaces = { ...defaultDavNamespaces };
  }
  return Object.keys(window._nc_dav_namespaces).map((ns) => `xmlns:${ns}="${window._nc_dav_namespaces?.[ns]}"`).join(" ");
};
const getDefaultPropfind = function() {
  return `<?xml version="1.0"?>
		<d:propfind ${getDavNameSpaces()}>
			<d:prop>
				${getDavProperties()}
			</d:prop>
		</d:propfind>`;
};
const getFavoritesReport = function() {
  return `<?xml version="1.0"?>
		<oc:filter-files ${getDavNameSpaces()}>
			<d:prop>
				${getDavProperties()}
			</d:prop>
			<oc:filter-rules>
				<oc:favorite>1</oc:favorite>
			</oc:filter-rules>
		</oc:filter-files>`;
};
const getRecentSearch = function(lastModified) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<d:searchrequest ${getDavNameSpaces()}
	xmlns:ns="https://github.com/icewind1991/SearchDAV/ns">
	<d:basicsearch>
		<d:select>
			<d:prop>
				${getDavProperties()}
			</d:prop>
		</d:select>
		<d:from>
			<d:scope>
				<d:href>/files/${(0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_3__.getCurrentUser)()?.uid}/</d:href>
				<d:depth>infinity</d:depth>
			</d:scope>
		</d:from>
		<d:where>
			<d:and>
				<d:or>
					<d:not>
						<d:eq>
							<d:prop>
								<d:getcontenttype/>
							</d:prop>
							<d:literal>httpd/unix-directory</d:literal>
						</d:eq>
					</d:not>
					<d:eq>
						<d:prop>
							<oc:size/>
						</d:prop>
						<d:literal>0</d:literal>
					</d:eq>
				</d:or>
				<d:gt>
					<d:prop>
						<d:getlastmodified/>
					</d:prop>
					<d:literal>${lastModified}</d:literal>
				</d:gt>
			</d:and>
		</d:where>
		<d:orderby>
			<d:order>
				<d:prop>
					<d:getlastmodified/>
				</d:prop>
				<d:descending/>
			</d:order>
		</d:orderby>
		<d:limit>
			<d:nresults>100</d:nresults>
			<ns:firstresult>0</ns:firstresult>
		</d:limit>
	</d:basicsearch>
</d:searchrequest>`;
};
function getRootPath() {
  if ((0,_nextcloud_sharing_public__WEBPACK_IMPORTED_MODULE_7__.isPublicShare)()) {
    return `/files/${(0,_nextcloud_sharing_public__WEBPACK_IMPORTED_MODULE_7__.getSharingToken)()}`;
  }
  return `/files/${(0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_3__.getCurrentUser)()?.uid}`;
}
const defaultRootPath = getRootPath();
function getRemoteURL() {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_4__.generateRemoteUrl)("dav");
  if ((0,_nextcloud_sharing_public__WEBPACK_IMPORTED_MODULE_7__.isPublicShare)()) {
    return url.replace("remote.php", "public.php");
  }
  return url;
}
const defaultRemoteURL = getRemoteURL();
const getClient = function(remoteURL = defaultRemoteURL, headers = {}) {
  const client = (0,webdav__WEBPACK_IMPORTED_MODULE_6__.createClient)(remoteURL, { headers });
  function setHeaders(token) {
    client.setHeaders({
      ...headers,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: token ?? ""
    });
  }
  (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_3__.onRequestTokenUpdate)(setHeaders);
  setHeaders((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_3__.getRequestToken)());
  const patcher = (0,webdav__WEBPACK_IMPORTED_MODULE_6__.getPatcher)();
  patcher.patch("fetch", (url, options) => {
    const headers2 = options.headers;
    if (headers2?.method) {
      options.method = headers2.method;
      delete headers2.method;
    }
    return fetch(url, options);
  });
  return client;
};
const getFavoriteNodes = (davClient, path = "/", davRoot = defaultRootPath) => {
  const controller = new AbortController();
  return new cancelable_promise__WEBPACK_IMPORTED_MODULE_5__.CancelablePromise(async (resolve, reject, onCancel) => {
    onCancel(() => controller.abort());
    try {
      const contentsResponse = await davClient.getDirectoryContents(`${davRoot}${path}`, {
        signal: controller.signal,
        details: true,
        data: getFavoritesReport(),
        headers: {
          // see getClient for patched webdav client
          method: "REPORT"
        },
        includeSelf: true
      });
      const nodes = contentsResponse.data.filter((node) => node.filename !== path).map((result) => resultToNode(result, davRoot));
      resolve(nodes);
    } catch (error) {
      reject(error);
    }
  });
};
const resultToNode = function(node, filesRoot = defaultRootPath, remoteURL = defaultRemoteURL) {
  let userId = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_3__.getCurrentUser)()?.uid;
  if ((0,_nextcloud_sharing_public__WEBPACK_IMPORTED_MODULE_7__.isPublicShare)()) {
    userId = userId ?? "anonymous";
  } else if (!userId) {
    throw new Error("No user id found");
  }
  const props = node.props;
  const permissions = parsePermissions(props?.permissions);
  const owner = String(props?.["owner-id"] || userId);
  const id = props.fileid || 0;
  const mtime = new Date(Date.parse(node.lastmod));
  const crtime = new Date(Date.parse(props.creationdate));
  const nodeData = {
    id,
    source: `${remoteURL}${node.filename}`,
    mtime: !isNaN(mtime.getTime()) && mtime.getTime() !== 0 ? mtime : void 0,
    crtime: !isNaN(crtime.getTime()) && crtime.getTime() !== 0 ? crtime : void 0,
    mime: node.mime || "application/octet-stream",
    // Manually cast to work around for https://github.com/perry-mitchell/webdav-client/pull/380
    displayname: props.displayname !== void 0 ? String(props.displayname) : void 0,
    size: props?.size || Number.parseInt(props.getcontentlength || "0"),
    // The fileid is set to -1 for failed requests
    status: id < 0 ? NodeStatus.FAILED : void 0,
    permissions,
    owner,
    root: filesRoot,
    attributes: {
      ...node,
      ...props,
      hasPreview: props?.["has-preview"]
    }
  };
  delete nodeData.attributes?.props;
  return node.type === "file" ? new File(nodeData) : new Folder(nodeData);
};



/***/ }),

/***/ "./node_modules/@nextcloud/files/dist/dav.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@nextcloud/files/dist/dav.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultDavNamespaces: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   defaultDavProperties: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   defaultRemoteURL: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   defaultRootPath: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   getClient: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   getDavNameSpaces: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   getDavProperties: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   getDefaultPropfind: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   getFavoriteNodes: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   getFavoritesReport: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   getRecentSearch: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   getRemoteURL: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   getRootPath: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   parsePermissions: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.p),
/* harmony export */   registerDavProperty: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   resultToNode: () => (/* reexport safe */ _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__.r)
/* harmony export */ });
/* harmony import */ var _chunks_dav_DxfiR0wZ_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/dav-DxfiR0wZ.mjs */ "./node_modules/@nextcloud/files/dist/chunks/dav-DxfiR0wZ.mjs");




/***/ }),

/***/ "./node_modules/@nextcloud/initial-state/dist/index.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/@nextcloud/initial-state/dist/index.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadState: () => (/* binding */ loadState)
/* harmony export */ });
function loadState(app, key, fallback) {
  const elem = document.querySelector(`#initial-state-${app}-${key}`);
  if (elem === null) {
    if (fallback !== void 0) {
      return fallback;
    }
    throw new Error(`Could not find initial state ${key} of ${app}`);
  }
  try {
    return JSON.parse(atob(elem.value));
  } catch (e) {
    throw new Error(`Could not parse initial state ${key} of ${app}`);
  }
}



/***/ }),

/***/ "./node_modules/@nextcloud/logger/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@nextcloud/logger/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevel: () => (/* binding */ LogLevel),
/* harmony export */   getLogger: () => (/* binding */ getLogger),
/* harmony export */   getLoggerBuilder: () => (/* binding */ getLoggerBuilder)
/* harmony export */ });
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");

var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2[LogLevel2["Debug"] = 0] = "Debug";
  LogLevel2[LogLevel2["Info"] = 1] = "Info";
  LogLevel2[LogLevel2["Warn"] = 2] = "Warn";
  LogLevel2[LogLevel2["Error"] = 3] = "Error";
  LogLevel2[LogLevel2["Fatal"] = 4] = "Fatal";
  return LogLevel2;
})(LogLevel || {});
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class ConsoleLogger {
  constructor(context) {
    __publicField$1(this, "context");
    this.context = context || {};
  }
  formatMessage(message, level, context) {
    let msg = "[" + LogLevel[level].toUpperCase() + "] ";
    if (context && context.app) {
      msg += context.app + ": ";
    }
    if (typeof message === "string")
      return msg + message;
    msg += "Unexpected ".concat(message.name);
    if (message.message)
      msg += ' "'.concat(message.message, '"');
    if (level === LogLevel.Debug && message.stack)
      msg += "\n\nStack trace:\n".concat(message.stack);
    return msg;
  }
  log(level, message, context) {
    var _a, _b;
    if (typeof ((_a = this.context) == null ? void 0 : _a.level) === "number" && level < ((_b = this.context) == null ? void 0 : _b.level)) {
      return;
    }
    if (typeof message === "object" && (context == null ? void 0 : context.error) === void 0) {
      context.error = message;
    }
    switch (level) {
      case LogLevel.Debug:
        console.debug(this.formatMessage(message, LogLevel.Debug, context), context);
        break;
      case LogLevel.Info:
        console.info(this.formatMessage(message, LogLevel.Info, context), context);
        break;
      case LogLevel.Warn:
        console.warn(this.formatMessage(message, LogLevel.Warn, context), context);
        break;
      case LogLevel.Error:
        console.error(this.formatMessage(message, LogLevel.Error, context), context);
        break;
      case LogLevel.Fatal:
      default:
        console.error(this.formatMessage(message, LogLevel.Fatal, context), context);
        break;
    }
  }
  debug(message, context) {
    this.log(LogLevel.Debug, message, Object.assign({}, this.context, context));
  }
  info(message, context) {
    this.log(LogLevel.Info, message, Object.assign({}, this.context, context));
  }
  warn(message, context) {
    this.log(LogLevel.Warn, message, Object.assign({}, this.context, context));
  }
  error(message, context) {
    this.log(LogLevel.Error, message, Object.assign({}, this.context, context));
  }
  fatal(message, context) {
    this.log(LogLevel.Fatal, message, Object.assign({}, this.context, context));
  }
}
function buildConsoleLogger(context) {
  return new ConsoleLogger(context);
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class LoggerBuilder {
  constructor(factory) {
    __publicField(this, "context");
    __publicField(this, "factory");
    this.context = {};
    this.factory = factory;
  }
  /**
   * Set the app name within the logging context
   *
   * @param appId App name
   */
  setApp(appId) {
    this.context.app = appId;
    return this;
  }
  /**
   * Set the logging level within the logging context
   *
   * @param level Logging level
   */
  setLogLevel(level) {
    this.context.level = level;
    return this;
  }
  /* eslint-disable jsdoc/no-undefined-types */
  /**
   * Set the user id within the logging context
   * @param uid User ID
   * @see {@link detectUser}
   */
  /* eslint-enable jsdoc/no-undefined-types */
  setUid(uid) {
    this.context.uid = uid;
    return this;
  }
  /**
   * Detect the currently logged in user and set the user id within the logging context
   */
  detectUser() {
    const user = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)();
    if (user !== null) {
      this.context.uid = user.uid;
    }
    return this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const self = this;
    const onLoaded = () => {
      var _a, _b;
      if (document.readyState === "complete" || document.readyState === "interactive") {
        self.context.level = (_b = (_a = window._oc_config) == null ? void 0 : _a.loglevel) != null ? _b : LogLevel.Warn;
        if (window._oc_debug) {
          self.context.level = LogLevel.Debug;
        }
        document.removeEventListener("readystatechange", onLoaded);
      } else {
        document.addEventListener("readystatechange", onLoaded);
      }
    };
    onLoaded();
    return this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    if (this.context.level === void 0) {
      this.detectLogLevel();
    }
    return this.factory(this.context);
  }
}
function getLoggerBuilder() {
  return new LoggerBuilder(buildConsoleLogger);
}
function getLogger() {
  return getLoggerBuilder().build();
}



/***/ }),

/***/ "./node_modules/@nextcloud/paths/dist/index.mjs":
/*!******************************************************!*\
  !*** ./node_modules/@nextcloud/paths/dist/index.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   basename: () => (/* binding */ basename),
/* harmony export */   dirname: () => (/* binding */ dirname),
/* harmony export */   encodePath: () => (/* binding */ encodePath),
/* harmony export */   isSamePath: () => (/* binding */ isSamePath),
/* harmony export */   joinPaths: () => (/* binding */ joinPaths)
/* harmony export */ });
function encodePath(path) {
  if (!path) {
    return path;
  }
  return path.split("/").map(encodeURIComponent).join("/");
}
function basename(path) {
  return path.replace(/\\/g, "/").replace(/.*\//, "");
}
function dirname(path) {
  return path.replace(/\\/g, "/").replace(/\/[^\/]*$/, "");
}
function joinPaths(...args) {
  if (arguments.length < 1) {
    return "";
  }
  const nonEmptyArgs = args.filter((arg) => arg.length > 0);
  if (nonEmptyArgs.length < 1) {
    return "";
  }
  const lastArg = nonEmptyArgs[nonEmptyArgs.length - 1];
  const leadingSlash = nonEmptyArgs[0].charAt(0) === "/";
  const trailingSlash = lastArg.charAt(lastArg.length - 1) === "/";
  const sections = nonEmptyArgs.reduce((acc, section) => acc.concat(section.split("/")), []);
  let first = !leadingSlash;
  const path = sections.reduce((acc, section) => {
    if (section === "") {
      return acc;
    }
    if (first) {
      first = false;
      return acc + section;
    }
    return acc + "/" + section;
  }, "");
  if (trailingSlash) {
    return path + "/";
  }
  return path;
}
function isSamePath(path1, path2) {
  const pathSections1 = (path1 || "").split("/").filter((p) => p !== ".");
  const pathSections2 = (path2 || "").split("/").filter((p) => p !== ".");
  path1 = joinPaths.apply(void 0, pathSections1);
  path2 = joinPaths.apply(void 0, pathSections2);
  return path1 === path2;
}



/***/ }),

/***/ "./node_modules/@nextcloud/router/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@nextcloud/router/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateFilePath: () => (/* binding */ d),
/* harmony export */   generateOcsUrl: () => (/* binding */ v),
/* harmony export */   generateRemoteUrl: () => (/* binding */ U),
/* harmony export */   generateUrl: () => (/* binding */ _),
/* harmony export */   getAppRootUrl: () => (/* binding */ b),
/* harmony export */   getBaseUrl: () => (/* binding */ w),
/* harmony export */   getRootUrl: () => (/* binding */ f),
/* harmony export */   imagePath: () => (/* binding */ h),
/* harmony export */   linkTo: () => (/* binding */ R)
/* harmony export */ });
const R = (n, e) => d(n, "", e), g = (n) => "/remote.php/" + n, U = (n, e) => {
  var o;
  return ((o = e == null ? void 0 : e.baseURL) != null ? o : w()) + g(n);
}, v = (n, e, o) => {
  var c;
  const i = Object.assign({
    ocsVersion: 2
  }, o || {}).ocsVersion === 1 ? 1 : 2;
  return ((c = o == null ? void 0 : o.baseURL) != null ? c : w()) + "/ocs/v" + i + ".php" + u(n, e, o);
}, u = (n, e, o) => {
  const c = Object.assign({
    escape: !0
  }, o || {}), r = function(i, s) {
    return s = s || {}, i.replace(
      /{([^{}]*)}/g,
      function(l, t) {
        const a = s[t];
        return c.escape ? encodeURIComponent(typeof a == "string" || typeof a == "number" ? a.toString() : l) : typeof a == "string" || typeof a == "number" ? a.toString() : l;
      }
    );
  };
  return n.charAt(0) !== "/" && (n = "/" + n), r(n, e || {});
}, _ = (n, e, o) => {
  var c, r, i;
  const s = Object.assign({
    noRewrite: !1
  }, o || {}), l = (c = o == null ? void 0 : o.baseURL) != null ? c : f();
  return ((i = (r = window == null ? void 0 : window.OC) == null ? void 0 : r.config) == null ? void 0 : i.modRewriteWorking) === !0 && !s.noRewrite ? l + u(n, e, o) : l + "/index.php" + u(n, e, o);
}, h = (n, e) => e.includes(".") ? d(n, "img", e) : d(n, "img", "".concat(e, ".svg")), d = (n, e, o) => {
  var c, r, i;
  const s = (i = (r = (c = window == null ? void 0 : window.OC) == null ? void 0 : c.coreApps) == null ? void 0 : r.includes(n)) != null ? i : !1, l = o.slice(-3) === "php";
  let t = f();
  return l && !s ? (t += "/index.php/apps/".concat(n), e && (t += "/".concat(encodeURI(e))), o !== "index.php" && (t += "/".concat(o))) : !l && !s ? (t = b(n), e && (t += "/".concat(e, "/")), t.at(-1) !== "/" && (t += "/"), t += o) : ((n === "settings" || n === "core" || n === "search") && e === "ajax" && (t += "/index.php"), n && (t += "/".concat(n)), e && (t += "/".concat(e)), t += "/".concat(o)), t;
}, w = () => window.location.protocol + "//" + window.location.host + f();
function f() {
  let n = window._oc_webroot;
  if (typeof n > "u") {
    n = location.pathname;
    const e = n.indexOf("/index.php/");
    if (e !== -1)
      n = n.slice(0, e);
    else {
      const o = n.indexOf("/", 1);
      n = n.slice(0, o > 0 ? o : void 0);
    }
  }
  return n;
}
function b(n) {
  var e, o;
  return (o = ((e = window._oc_appswebroots) != null ? e : {})[n]) != null ? o : "";
}



/***/ }),

/***/ "./node_modules/@nextcloud/sharing/dist/public.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/@nextcloud/sharing/dist/public.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSharingToken: () => (/* binding */ getSharingToken),
/* harmony export */   isPublicShare: () => (/* binding */ isPublicShare)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.mjs");

function isPublicShare() {
  return (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)("files_sharing", "isPublic", null) ?? document.querySelector(
    'input#isPublic[type="hidden"][name="isPublic"][value="1"]'
  ) !== null;
}
function getSharingToken() {
  return (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)("files_sharing", "sharingToken", null) ?? document.querySelector('input#sharingToken[type="hidden"]')?.value ?? null;
}



/***/ }),

/***/ "./node_modules/webdav/dist/web/index.js":
/*!***********************************************!*\
  !*** ./node_modules/webdav/dist/web/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthType: () => (/* binding */ nn),
/* harmony export */   ErrorCode: () => (/* binding */ rn),
/* harmony export */   Request: () => (/* binding */ on),
/* harmony export */   Response: () => (/* binding */ sn),
/* harmony export */   createClient: () => (/* binding */ an),
/* harmony export */   getPatcher: () => (/* binding */ un),
/* harmony export */   parseStat: () => (/* binding */ cn),
/* harmony export */   parseXML: () => (/* binding */ ln),
/* harmony export */   prepareFileFromProps: () => (/* binding */ hn),
/* harmony export */   processResponsePayload: () => (/* binding */ pn),
/* harmony export */   translateDiskSpace: () => (/* binding */ fn)
/* harmony export */ });
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
/*! For license information please see index.js.LICENSE.txt */
var t={2:t=>{function e(t,e,o){t instanceof RegExp&&(t=n(t,o)),e instanceof RegExp&&(e=n(e,o));var i=r(t,e,o);return i&&{start:i[0],end:i[1],pre:o.slice(0,i[0]),body:o.slice(i[0]+t.length,i[1]),post:o.slice(i[1]+e.length)}}function n(t,e){var n=e.match(t);return n?n[0]:null}function r(t,e,n){var r,o,i,s,a,u=n.indexOf(t),c=n.indexOf(e,u+1),l=u;if(u>=0&&c>0){for(r=[],i=n.length;l>=0&&!a;)l==u?(r.push(l),u=n.indexOf(t,l+1)):1==r.length?a=[r.pop(),c]:((o=r.pop())<i&&(i=o,s=c),c=n.indexOf(e,l+1)),l=u<c&&u>=0?u:c;r.length&&(a=[i,s])}return a}t.exports=e,e.range=r},101:function(t,e,n){var r;t=n.nmd(t),function(o){var i=(t&&t.exports,"object"==typeof global&&global);i.global!==i&&i.window;var s=function(t){this.message=t};(s.prototype=new Error).name="InvalidCharacterError";var a=function(t){throw new s(t)},u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=/[\t\n\f\r ]/g,l={encode:function(t){t=String(t),/[^\0-\xFF]/.test(t)&&a("The string to be encoded contains characters outside of the Latin1 range.");for(var e,n,r,o,i=t.length%3,s="",c=-1,l=t.length-i;++c<l;)e=t.charCodeAt(c)<<16,n=t.charCodeAt(++c)<<8,r=t.charCodeAt(++c),s+=u.charAt((o=e+n+r)>>18&63)+u.charAt(o>>12&63)+u.charAt(o>>6&63)+u.charAt(63&o);return 2==i?(e=t.charCodeAt(c)<<8,n=t.charCodeAt(++c),s+=u.charAt((o=e+n)>>10)+u.charAt(o>>4&63)+u.charAt(o<<2&63)+"="):1==i&&(o=t.charCodeAt(c),s+=u.charAt(o>>2)+u.charAt(o<<4&63)+"=="),s},decode:function(t){var e=(t=String(t).replace(c,"")).length;e%4==0&&(e=(t=t.replace(/==?$/,"")).length),(e%4==1||/[^+a-zA-Z0-9/]/.test(t))&&a("Invalid character: the string to be decoded is not correctly encoded.");for(var n,r,o=0,i="",s=-1;++s<e;)r=u.indexOf(t.charAt(s)),n=o%4?64*n+r:r,o++%4&&(i+=String.fromCharCode(255&n>>(-2*o&6)));return i},version:"1.0.0"};void 0===(r=function(){return l}.call(e,n,e,t))||(t.exports=r)}()},172:(t,e)=>{e.d=function(t){if(!t)return 0;for(var e=(t=t.toString()).length,n=t.length;n--;){var r=t.charCodeAt(n);56320<=r&&r<=57343&&n--,127<r&&r<=2047?e++:2047<r&&r<=65535&&(e+=2)}return e}},526:t=>{var e={utf8:{stringToBytes:function(t){return e.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(e.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=e},298:t=>{var e,n;e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,r=0;n<t.length;n++,r+=8)e[r>>>5]|=t[n]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var n=[],r=0;r<t.length;r+=3)for(var o=t[r]<<16|t[r+1]<<8|t[r+2],i=0;i<4;i++)8*r+6*i<=8*t.length?n.push(e.charAt(o>>>6*(3-i)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],r=0,o=0;r<t.length;o=++r%4)0!=o&&n.push((e.indexOf(t.charAt(r-1))&Math.pow(2,-2*o+8)-1)<<2*o|e.indexOf(t.charAt(r))>>>6-2*o);return n}},t.exports=n},635:(t,e,n)=>{const r=n(31),o=n(338),i=n(221);t.exports={XMLParser:o,XMLValidator:r,XMLBuilder:i}},705:(t,e)=>{const n=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",r="["+n+"]["+n+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",o=new RegExp("^"+r+"$");e.isExist=function(t){return void 0!==t},e.isEmptyObject=function(t){return 0===Object.keys(t).length},e.merge=function(t,e,n){if(e){const r=Object.keys(e),o=r.length;for(let i=0;i<o;i++)t[r[i]]="strict"===n?[e[r[i]]]:e[r[i]]}},e.getValue=function(t){return e.isExist(t)?t:""},e.isName=function(t){return!(null==o.exec(t))},e.getAllMatches=function(t,e){const n=[];let r=e.exec(t);for(;r;){const o=[];o.startIndex=e.lastIndex-r[0].length;const i=r.length;for(let t=0;t<i;t++)o.push(r[t]);n.push(o),r=e.exec(t)}return n},e.nameRegexp=r},31:(t,e,n)=>{const r=n(705),o={allowBooleanAttributes:!1,unpairedTags:[]};function i(t){return" "===t||"\t"===t||"\n"===t||"\r"===t}function s(t,e){const n=e;for(;e<t.length;e++)if("?"!=t[e]&&" "!=t[e]);else{const r=t.substr(n,e-n);if(e>5&&"xml"===r)return d("InvalidXml","XML declaration allowed only at the start of the document.",m(t,e));if("?"==t[e]&&">"==t[e+1]){e++;break}}return e}function a(t,e){if(t.length>e+5&&"-"===t[e+1]&&"-"===t[e+2]){for(e+=3;e<t.length;e++)if("-"===t[e]&&"-"===t[e+1]&&">"===t[e+2]){e+=2;break}}else if(t.length>e+8&&"D"===t[e+1]&&"O"===t[e+2]&&"C"===t[e+3]&&"T"===t[e+4]&&"Y"===t[e+5]&&"P"===t[e+6]&&"E"===t[e+7]){let n=1;for(e+=8;e<t.length;e++)if("<"===t[e])n++;else if(">"===t[e]&&(n--,0===n))break}else if(t.length>e+9&&"["===t[e+1]&&"C"===t[e+2]&&"D"===t[e+3]&&"A"===t[e+4]&&"T"===t[e+5]&&"A"===t[e+6]&&"["===t[e+7])for(e+=8;e<t.length;e++)if("]"===t[e]&&"]"===t[e+1]&&">"===t[e+2]){e+=2;break}return e}e.validate=function(t,e){e=Object.assign({},o,e);const n=[];let u=!1,c=!1;"\ufeff"===t[0]&&(t=t.substr(1));for(let o=0;o<t.length;o++)if("<"===t[o]&&"?"===t[o+1]){if(o+=2,o=s(t,o),o.err)return o}else{if("<"!==t[o]){if(i(t[o]))continue;return d("InvalidChar","char '"+t[o]+"' is not expected.",m(t,o))}{let g=o;if(o++,"!"===t[o]){o=a(t,o);continue}{let y=!1;"/"===t[o]&&(y=!0,o++);let v="";for(;o<t.length&&">"!==t[o]&&" "!==t[o]&&"\t"!==t[o]&&"\n"!==t[o]&&"\r"!==t[o];o++)v+=t[o];if(v=v.trim(),"/"===v[v.length-1]&&(v=v.substring(0,v.length-1),o--),h=v,!r.isName(h)){let e;return e=0===v.trim().length?"Invalid space after '<'.":"Tag '"+v+"' is an invalid name.",d("InvalidTag",e,m(t,o))}const b=l(t,o);if(!1===b)return d("InvalidAttr","Attributes for '"+v+"' have open quote.",m(t,o));let w=b.value;if(o=b.index,"/"===w[w.length-1]){const n=o-w.length;w=w.substring(0,w.length-1);const r=p(w,e);if(!0!==r)return d(r.err.code,r.err.msg,m(t,n+r.err.line));u=!0}else if(y){if(!b.tagClosed)return d("InvalidTag","Closing tag '"+v+"' doesn't have proper closing.",m(t,o));if(w.trim().length>0)return d("InvalidTag","Closing tag '"+v+"' can't have attributes or invalid starting.",m(t,g));if(0===n.length)return d("InvalidTag","Closing tag '"+v+"' has not been opened.",m(t,g));{const e=n.pop();if(v!==e.tagName){let n=m(t,e.tagStartPos);return d("InvalidTag","Expected closing tag '"+e.tagName+"' (opened in line "+n.line+", col "+n.col+") instead of closing tag '"+v+"'.",m(t,g))}0==n.length&&(c=!0)}}else{const r=p(w,e);if(!0!==r)return d(r.err.code,r.err.msg,m(t,o-w.length+r.err.line));if(!0===c)return d("InvalidXml","Multiple possible root nodes found.",m(t,o));-1!==e.unpairedTags.indexOf(v)||n.push({tagName:v,tagStartPos:g}),u=!0}for(o++;o<t.length;o++)if("<"===t[o]){if("!"===t[o+1]){o++,o=a(t,o);continue}if("?"!==t[o+1])break;if(o=s(t,++o),o.err)return o}else if("&"===t[o]){const e=f(t,o);if(-1==e)return d("InvalidChar","char '&' is not expected.",m(t,o));o=e}else if(!0===c&&!i(t[o]))return d("InvalidXml","Extra text at the end",m(t,o));"<"===t[o]&&o--}}}var h;return u?1==n.length?d("InvalidTag","Unclosed tag '"+n[0].tagName+"'.",m(t,n[0].tagStartPos)):!(n.length>0)||d("InvalidXml","Invalid '"+JSON.stringify(n.map((t=>t.tagName)),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1}):d("InvalidXml","Start tag expected.",1)};const u='"',c="'";function l(t,e){let n="",r="",o=!1;for(;e<t.length;e++){if(t[e]===u||t[e]===c)""===r?r=t[e]:r!==t[e]||(r="");else if(">"===t[e]&&""===r){o=!0;break}n+=t[e]}return""===r&&{value:n,index:e,tagClosed:o}}const h=new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");function p(t,e){const n=r.getAllMatches(t,h),o={};for(let t=0;t<n.length;t++){if(0===n[t][1].length)return d("InvalidAttr","Attribute '"+n[t][2]+"' has no space in starting.",y(n[t]));if(void 0!==n[t][3]&&void 0===n[t][4])return d("InvalidAttr","Attribute '"+n[t][2]+"' is without value.",y(n[t]));if(void 0===n[t][3]&&!e.allowBooleanAttributes)return d("InvalidAttr","boolean attribute '"+n[t][2]+"' is not allowed.",y(n[t]));const r=n[t][2];if(!g(r))return d("InvalidAttr","Attribute '"+r+"' is an invalid name.",y(n[t]));if(o.hasOwnProperty(r))return d("InvalidAttr","Attribute '"+r+"' is repeated.",y(n[t]));o[r]=1}return!0}function f(t,e){if(";"===t[++e])return-1;if("#"===t[e])return function(t,e){let n=/\d/;for("x"===t[e]&&(e++,n=/[\da-fA-F]/);e<t.length;e++){if(";"===t[e])return e;if(!t[e].match(n))break}return-1}(t,++e);let n=0;for(;e<t.length;e++,n++)if(!(t[e].match(/\w/)&&n<20)){if(";"===t[e])break;return-1}return e}function d(t,e,n){return{err:{code:t,msg:e,line:n.line||n,col:n.col}}}function g(t){return r.isName(t)}function m(t,e){const n=t.substring(0,e).split(/\r?\n/);return{line:n.length,col:n[n.length-1].length+1}}function y(t){return t.startIndex+t[1].length}},221:(t,e,n)=>{const r=n(87),o={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function i(t){this.options=Object.assign({},o,t),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=u),this.processTextOrObjNode=s,this.options.format?(this.indentate=a,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function s(t,e,n){const r=this.j2x(t,n+1);return void 0!==t[this.options.textNodeName]&&1===Object.keys(t).length?this.buildTextValNode(t[this.options.textNodeName],e,r.attrStr,n):this.buildObjectNode(r.val,e,r.attrStr,n)}function a(t){return this.options.indentBy.repeat(t)}function u(t){return!(!t.startsWith(this.options.attributeNamePrefix)||t===this.options.textNodeName)&&t.substr(this.attrPrefixLen)}i.prototype.build=function(t){return this.options.preserveOrder?r(t,this.options):(Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t={[this.options.arrayNodeName]:t}),this.j2x(t,0).val)},i.prototype.j2x=function(t,e){let n="",r="";for(let o in t)if(Object.prototype.hasOwnProperty.call(t,o))if(void 0===t[o])this.isAttribute(o)&&(r+="");else if(null===t[o])this.isAttribute(o)?r+="":"?"===o[0]?r+=this.indentate(e)+"<"+o+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+o+"/"+this.tagEndChar;else if(t[o]instanceof Date)r+=this.buildTextValNode(t[o],o,"",e);else if("object"!=typeof t[o]){const i=this.isAttribute(o);if(i)n+=this.buildAttrPairStr(i,""+t[o]);else if(o===this.options.textNodeName){let e=this.options.tagValueProcessor(o,""+t[o]);r+=this.replaceEntitiesValue(e)}else r+=this.buildTextValNode(t[o],o,"",e)}else if(Array.isArray(t[o])){const n=t[o].length;let i="",s="";for(let a=0;a<n;a++){const n=t[o][a];if(void 0===n);else if(null===n)"?"===o[0]?r+=this.indentate(e)+"<"+o+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+o+"/"+this.tagEndChar;else if("object"==typeof n)if(this.options.oneListGroup){const t=this.j2x(n,e+1);i+=t.val,this.options.attributesGroupName&&n.hasOwnProperty(this.options.attributesGroupName)&&(s+=t.attrStr)}else i+=this.processTextOrObjNode(n,o,e);else if(this.options.oneListGroup){let t=this.options.tagValueProcessor(o,n);t=this.replaceEntitiesValue(t),i+=t}else i+=this.buildTextValNode(n,o,"",e)}this.options.oneListGroup&&(i=this.buildObjectNode(i,o,s,e)),r+=i}else if(this.options.attributesGroupName&&o===this.options.attributesGroupName){const e=Object.keys(t[o]),r=e.length;for(let i=0;i<r;i++)n+=this.buildAttrPairStr(e[i],""+t[o][e[i]])}else r+=this.processTextOrObjNode(t[o],o,e);return{attrStr:n,val:r}},i.prototype.buildAttrPairStr=function(t,e){return e=this.options.attributeValueProcessor(t,""+e),e=this.replaceEntitiesValue(e),this.options.suppressBooleanAttributes&&"true"===e?" "+t:" "+t+'="'+e+'"'},i.prototype.buildObjectNode=function(t,e,n,r){if(""===t)return"?"===e[0]?this.indentate(r)+"<"+e+n+"?"+this.tagEndChar:this.indentate(r)+"<"+e+n+this.closeTag(e)+this.tagEndChar;{let o="</"+e+this.tagEndChar,i="";return"?"===e[0]&&(i="?",o=""),!n&&""!==n||-1!==t.indexOf("<")?!1!==this.options.commentPropName&&e===this.options.commentPropName&&0===i.length?this.indentate(r)+`\x3c!--${t}--\x3e`+this.newLine:this.indentate(r)+"<"+e+n+i+this.tagEndChar+t+this.indentate(r)+o:this.indentate(r)+"<"+e+n+i+">"+t+o}},i.prototype.closeTag=function(t){let e="";return-1!==this.options.unpairedTags.indexOf(t)?this.options.suppressUnpairedNode||(e="/"):e=this.options.suppressEmptyNode?"/":`></${t}`,e},i.prototype.buildTextValNode=function(t,e,n,r){if(!1!==this.options.cdataPropName&&e===this.options.cdataPropName)return this.indentate(r)+`<![CDATA[${t}]]>`+this.newLine;if(!1!==this.options.commentPropName&&e===this.options.commentPropName)return this.indentate(r)+`\x3c!--${t}--\x3e`+this.newLine;if("?"===e[0])return this.indentate(r)+"<"+e+n+"?"+this.tagEndChar;{let o=this.options.tagValueProcessor(e,t);return o=this.replaceEntitiesValue(o),""===o?this.indentate(r)+"<"+e+n+this.closeTag(e)+this.tagEndChar:this.indentate(r)+"<"+e+n+">"+o+"</"+e+this.tagEndChar}},i.prototype.replaceEntitiesValue=function(t){if(t&&t.length>0&&this.options.processEntities)for(let e=0;e<this.options.entities.length;e++){const n=this.options.entities[e];t=t.replace(n.regex,n.val)}return t},t.exports=i},87:t=>{function e(t,s,a,u){let c="",l=!1;for(let h=0;h<t.length;h++){const p=t[h],f=n(p);if(void 0===f)continue;let d="";if(d=0===a.length?f:`${a}.${f}`,f===s.textNodeName){let t=p[f];o(d,s)||(t=s.tagValueProcessor(f,t),t=i(t,s)),l&&(c+=u),c+=t,l=!1;continue}if(f===s.cdataPropName){l&&(c+=u),c+=`<![CDATA[${p[f][0][s.textNodeName]}]]>`,l=!1;continue}if(f===s.commentPropName){c+=u+`\x3c!--${p[f][0][s.textNodeName]}--\x3e`,l=!0;continue}if("?"===f[0]){const t=r(p[":@"],s),e="?xml"===f?"":u;let n=p[f][0][s.textNodeName];n=0!==n.length?" "+n:"",c+=e+`<${f}${n}${t}?>`,l=!0;continue}let g=u;""!==g&&(g+=s.indentBy);const m=u+`<${f}${r(p[":@"],s)}`,y=e(p[f],s,d,g);-1!==s.unpairedTags.indexOf(f)?s.suppressUnpairedNode?c+=m+">":c+=m+"/>":y&&0!==y.length||!s.suppressEmptyNode?y&&y.endsWith(">")?c+=m+`>${y}${u}</${f}>`:(c+=m+">",y&&""!==u&&(y.includes("/>")||y.includes("</"))?c+=u+s.indentBy+y+u:c+=y,c+=`</${f}>`):c+=m+"/>",l=!0}return c}function n(t){const e=Object.keys(t);for(let n=0;n<e.length;n++){const r=e[n];if(t.hasOwnProperty(r)&&":@"!==r)return r}}function r(t,e){let n="";if(t&&!e.ignoreAttributes)for(let r in t){if(!t.hasOwnProperty(r))continue;let o=e.attributeValueProcessor(r,t[r]);o=i(o,e),!0===o&&e.suppressBooleanAttributes?n+=` ${r.substr(e.attributeNamePrefix.length)}`:n+=` ${r.substr(e.attributeNamePrefix.length)}="${o}"`}return n}function o(t,e){let n=(t=t.substr(0,t.length-e.textNodeName.length-1)).substr(t.lastIndexOf(".")+1);for(let r in e.stopNodes)if(e.stopNodes[r]===t||e.stopNodes[r]==="*."+n)return!0;return!1}function i(t,e){if(t&&t.length>0&&e.processEntities)for(let n=0;n<e.entities.length;n++){const r=e.entities[n];t=t.replace(r.regex,r.val)}return t}t.exports=function(t,n){let r="";return n.format&&n.indentBy.length>0&&(r="\n"),e(t,n,"",r)}},193:(t,e,n)=>{const r=n(705);function o(t,e){let n="";for(;e<t.length&&"'"!==t[e]&&'"'!==t[e];e++)n+=t[e];if(n=n.trim(),-1!==n.indexOf(" "))throw new Error("External entites are not supported");const r=t[e++];let o="";for(;e<t.length&&t[e]!==r;e++)o+=t[e];return[n,o,e]}function i(t,e){return"!"===t[e+1]&&"-"===t[e+2]&&"-"===t[e+3]}function s(t,e){return"!"===t[e+1]&&"E"===t[e+2]&&"N"===t[e+3]&&"T"===t[e+4]&&"I"===t[e+5]&&"T"===t[e+6]&&"Y"===t[e+7]}function a(t,e){return"!"===t[e+1]&&"E"===t[e+2]&&"L"===t[e+3]&&"E"===t[e+4]&&"M"===t[e+5]&&"E"===t[e+6]&&"N"===t[e+7]&&"T"===t[e+8]}function u(t,e){return"!"===t[e+1]&&"A"===t[e+2]&&"T"===t[e+3]&&"T"===t[e+4]&&"L"===t[e+5]&&"I"===t[e+6]&&"S"===t[e+7]&&"T"===t[e+8]}function c(t,e){return"!"===t[e+1]&&"N"===t[e+2]&&"O"===t[e+3]&&"T"===t[e+4]&&"A"===t[e+5]&&"T"===t[e+6]&&"I"===t[e+7]&&"O"===t[e+8]&&"N"===t[e+9]}function l(t){if(r.isName(t))return t;throw new Error(`Invalid entity name ${t}`)}t.exports=function(t,e){const n={};if("O"!==t[e+3]||"C"!==t[e+4]||"T"!==t[e+5]||"Y"!==t[e+6]||"P"!==t[e+7]||"E"!==t[e+8])throw new Error("Invalid Tag instead of DOCTYPE");{e+=9;let r=1,h=!1,p=!1,f="";for(;e<t.length;e++)if("<"!==t[e]||p)if(">"===t[e]){if(p?"-"===t[e-1]&&"-"===t[e-2]&&(p=!1,r--):r--,0===r)break}else"["===t[e]?h=!0:f+=t[e];else{if(h&&s(t,e))e+=7,[entityName,val,e]=o(t,e+1),-1===val.indexOf("&")&&(n[l(entityName)]={regx:RegExp(`&${entityName};`,"g"),val});else if(h&&a(t,e))e+=8;else if(h&&u(t,e))e+=8;else if(h&&c(t,e))e+=9;else{if(!i)throw new Error("Invalid DOCTYPE");p=!0}r++,f=""}if(0!==r)throw new Error("Unclosed DOCTYPE")}return{entities:n,i:e}}},63:(t,e)=>{const n={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(t,e,n){return t}};e.buildOptions=function(t){return Object.assign({},n,t)},e.defaultOptions=n},299:(t,e,n)=>{const r=n(705),o=n(365),i=n(193),s=n(494);function a(t){const e=Object.keys(t);for(let n=0;n<e.length;n++){const r=e[n];this.lastEntities[r]={regex:new RegExp("&"+r+";","g"),val:t[r]}}}function u(t,e,n,r,o,i,s){if(void 0!==t&&(this.options.trimValues&&!r&&(t=t.trim()),t.length>0)){s||(t=this.replaceEntitiesValue(t));const r=this.options.tagValueProcessor(e,t,n,o,i);return null==r?t:typeof r!=typeof t||r!==t?r:this.options.trimValues||t.trim()===t?w(t,this.options.parseTagValue,this.options.numberParseOptions):t}}function c(t){if(this.options.removeNSPrefix){const e=t.split(":"),n="/"===t.charAt(0)?"/":"";if("xmlns"===e[0])return"";2===e.length&&(t=n+e[1])}return t}const l=new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");function h(t,e,n){if(!this.options.ignoreAttributes&&"string"==typeof t){const n=r.getAllMatches(t,l),o=n.length,i={};for(let t=0;t<o;t++){const r=this.resolveNameSpace(n[t][1]);let o=n[t][4],s=this.options.attributeNamePrefix+r;if(r.length)if(this.options.transformAttributeName&&(s=this.options.transformAttributeName(s)),"__proto__"===s&&(s="#__proto__"),void 0!==o){this.options.trimValues&&(o=o.trim()),o=this.replaceEntitiesValue(o);const t=this.options.attributeValueProcessor(r,o,e);i[s]=null==t?o:typeof t!=typeof o||t!==o?t:w(o,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(i[s]=!0)}if(!Object.keys(i).length)return;if(this.options.attributesGroupName){const t={};return t[this.options.attributesGroupName]=i,t}return i}}const p=function(t){t=t.replace(/\r\n?/g,"\n");const e=new o("!xml");let n=e,r="",s="";for(let a=0;a<t.length;a++)if("<"===t[a])if("/"===t[a+1]){const e=y(t,">",a,"Closing Tag is not closed.");let o=t.substring(a+2,e).trim();if(this.options.removeNSPrefix){const t=o.indexOf(":");-1!==t&&(o=o.substr(t+1))}this.options.transformTagName&&(o=this.options.transformTagName(o)),n&&(r=this.saveTextToParentTag(r,n,s));const i=s.substring(s.lastIndexOf(".")+1);if(o&&-1!==this.options.unpairedTags.indexOf(o))throw new Error(`Unpaired tag can not be used as closing tag: </${o}>`);let u=0;i&&-1!==this.options.unpairedTags.indexOf(i)?(u=s.lastIndexOf(".",s.lastIndexOf(".")-1),this.tagsNodeStack.pop()):u=s.lastIndexOf("."),s=s.substring(0,u),n=this.tagsNodeStack.pop(),r="",a=e}else if("?"===t[a+1]){let e=v(t,a,!1,"?>");if(!e)throw new Error("Pi Tag is not closed.");if(r=this.saveTextToParentTag(r,n,s),this.options.ignoreDeclaration&&"?xml"===e.tagName||this.options.ignorePiTags);else{const t=new o(e.tagName);t.add(this.options.textNodeName,""),e.tagName!==e.tagExp&&e.attrExpPresent&&(t[":@"]=this.buildAttributesMap(e.tagExp,s,e.tagName)),this.addChild(n,t,s)}a=e.closeIndex+1}else if("!--"===t.substr(a+1,3)){const e=y(t,"--\x3e",a+4,"Comment is not closed.");if(this.options.commentPropName){const o=t.substring(a+4,e-2);r=this.saveTextToParentTag(r,n,s),n.add(this.options.commentPropName,[{[this.options.textNodeName]:o}])}a=e}else if("!D"===t.substr(a+1,2)){const e=i(t,a);this.docTypeEntities=e.entities,a=e.i}else if("!["===t.substr(a+1,2)){const e=y(t,"]]>",a,"CDATA is not closed.")-2,o=t.substring(a+9,e);r=this.saveTextToParentTag(r,n,s);let i=this.parseTextData(o,n.tagname,s,!0,!1,!0,!0);null==i&&(i=""),this.options.cdataPropName?n.add(this.options.cdataPropName,[{[this.options.textNodeName]:o}]):n.add(this.options.textNodeName,i),a=e+2}else{let i=v(t,a,this.options.removeNSPrefix),u=i.tagName;const c=i.rawTagName;let l=i.tagExp,h=i.attrExpPresent,p=i.closeIndex;this.options.transformTagName&&(u=this.options.transformTagName(u)),n&&r&&"!xml"!==n.tagname&&(r=this.saveTextToParentTag(r,n,s,!1));const f=n;if(f&&-1!==this.options.unpairedTags.indexOf(f.tagname)&&(n=this.tagsNodeStack.pop(),s=s.substring(0,s.lastIndexOf("."))),u!==e.tagname&&(s+=s?"."+u:u),this.isItStopNode(this.options.stopNodes,s,u)){let e="";if(l.length>0&&l.lastIndexOf("/")===l.length-1)"/"===u[u.length-1]?(u=u.substr(0,u.length-1),s=s.substr(0,s.length-1),l=u):l=l.substr(0,l.length-1),a=i.closeIndex;else if(-1!==this.options.unpairedTags.indexOf(u))a=i.closeIndex;else{const n=this.readStopNodeData(t,c,p+1);if(!n)throw new Error(`Unexpected end of ${c}`);a=n.i,e=n.tagContent}const r=new o(u);u!==l&&h&&(r[":@"]=this.buildAttributesMap(l,s,u)),e&&(e=this.parseTextData(e,u,s,!0,h,!0,!0)),s=s.substr(0,s.lastIndexOf(".")),r.add(this.options.textNodeName,e),this.addChild(n,r,s)}else{if(l.length>0&&l.lastIndexOf("/")===l.length-1){"/"===u[u.length-1]?(u=u.substr(0,u.length-1),s=s.substr(0,s.length-1),l=u):l=l.substr(0,l.length-1),this.options.transformTagName&&(u=this.options.transformTagName(u));const t=new o(u);u!==l&&h&&(t[":@"]=this.buildAttributesMap(l,s,u)),this.addChild(n,t,s),s=s.substr(0,s.lastIndexOf("."))}else{const t=new o(u);this.tagsNodeStack.push(n),u!==l&&h&&(t[":@"]=this.buildAttributesMap(l,s,u)),this.addChild(n,t,s),n=t}r="",a=p}}else r+=t[a];return e.child};function f(t,e,n){const r=this.options.updateTag(e.tagname,n,e[":@"]);!1===r||("string"==typeof r?(e.tagname=r,t.addChild(e)):t.addChild(e))}const d=function(t){if(this.options.processEntities){for(let e in this.docTypeEntities){const n=this.docTypeEntities[e];t=t.replace(n.regx,n.val)}for(let e in this.lastEntities){const n=this.lastEntities[e];t=t.replace(n.regex,n.val)}if(this.options.htmlEntities)for(let e in this.htmlEntities){const n=this.htmlEntities[e];t=t.replace(n.regex,n.val)}t=t.replace(this.ampEntity.regex,this.ampEntity.val)}return t};function g(t,e,n,r){return t&&(void 0===r&&(r=0===Object.keys(e.child).length),void 0!==(t=this.parseTextData(t,e.tagname,n,!1,!!e[":@"]&&0!==Object.keys(e[":@"]).length,r))&&""!==t&&e.add(this.options.textNodeName,t),t=""),t}function m(t,e,n){const r="*."+n;for(const n in t){const o=t[n];if(r===o||e===o)return!0}return!1}function y(t,e,n,r){const o=t.indexOf(e,n);if(-1===o)throw new Error(r);return o+e.length-1}function v(t,e,n){const r=function(t,e){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:">",o="";for(let i=e;i<t.length;i++){let e=t[i];if(n)e===n&&(n="");else if('"'===e||"'"===e)n=e;else if(e===r[0]){if(!r[1])return{data:o,index:i};if(t[i+1]===r[1])return{data:o,index:i}}else"\t"===e&&(e=" ");o+=e}}(t,e+1,arguments.length>3&&void 0!==arguments[3]?arguments[3]:">");if(!r)return;let o=r.data;const i=r.index,s=o.search(/\s/);let a=o,u=!0;-1!==s&&(a=o.substring(0,s),o=o.substring(s+1).trimStart());const c=a;if(n){const t=a.indexOf(":");-1!==t&&(a=a.substr(t+1),u=a!==r.data.substr(t+1))}return{tagName:a,tagExp:o,closeIndex:i,attrExpPresent:u,rawTagName:c}}function b(t,e,n){const r=n;let o=1;for(;n<t.length;n++)if("<"===t[n])if("/"===t[n+1]){const i=y(t,">",n,`${e} is not closed`);if(t.substring(n+2,i).trim()===e&&(o--,0===o))return{tagContent:t.substring(r,n),i};n=i}else if("?"===t[n+1])n=y(t,"?>",n+1,"StopNode is not closed.");else if("!--"===t.substr(n+1,3))n=y(t,"--\x3e",n+3,"StopNode is not closed.");else if("!["===t.substr(n+1,2))n=y(t,"]]>",n,"StopNode is not closed.")-2;else{const r=v(t,n,">");r&&((r&&r.tagName)===e&&"/"!==r.tagExp[r.tagExp.length-1]&&o++,n=r.closeIndex)}}function w(t,e,n){if(e&&"string"==typeof t){const e=t.trim();return"true"===e||"false"!==e&&s(t,n)}return r.isExist(t)?t:""}t.exports=class{constructor(t){this.options=t,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"¢"},pound:{regex:/&(pound|#163);/g,val:"£"},yen:{regex:/&(yen|#165);/g,val:"¥"},euro:{regex:/&(euro|#8364);/g,val:"€"},copyright:{regex:/&(copy|#169);/g,val:"©"},reg:{regex:/&(reg|#174);/g,val:"®"},inr:{regex:/&(inr|#8377);/g,val:"₹"},num_dec:{regex:/&#([0-9]{1,7});/g,val:(t,e)=>String.fromCharCode(Number.parseInt(e,10))},num_hex:{regex:/&#x([0-9a-fA-F]{1,6});/g,val:(t,e)=>String.fromCharCode(Number.parseInt(e,16))}},this.addExternalEntities=a,this.parseXml=p,this.parseTextData=u,this.resolveNameSpace=c,this.buildAttributesMap=h,this.isItStopNode=m,this.replaceEntitiesValue=d,this.readStopNodeData=b,this.saveTextToParentTag=g,this.addChild=f}}},338:(t,e,n)=>{const{buildOptions:r}=n(63),o=n(299),{prettify:i}=n(728),s=n(31);t.exports=class{constructor(t){this.externalEntities={},this.options=r(t)}parse(t,e){if("string"==typeof t);else{if(!t.toString)throw new Error("XML data is accepted in String or Bytes[] form.");t=t.toString()}if(e){!0===e&&(e={});const n=s.validate(t,e);if(!0!==n)throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`)}const n=new o(this.options);n.addExternalEntities(this.externalEntities);const r=n.parseXml(t);return this.options.preserveOrder||void 0===r?r:i(r,this.options)}addEntity(t,e){if(-1!==e.indexOf("&"))throw new Error("Entity value can't have '&'");if(-1!==t.indexOf("&")||-1!==t.indexOf(";"))throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if("&"===e)throw new Error("An entity with value '&' is not permitted");this.externalEntities[t]=e}}},728:(t,e)=>{function n(t,e,s){let a;const u={};for(let c=0;c<t.length;c++){const l=t[c],h=r(l);let p="";if(p=void 0===s?h:s+"."+h,h===e.textNodeName)void 0===a?a=l[h]:a+=""+l[h];else{if(void 0===h)continue;if(l[h]){let t=n(l[h],e,p);const r=i(t,e);l[":@"]?o(t,l[":@"],p,e):1!==Object.keys(t).length||void 0===t[e.textNodeName]||e.alwaysCreateTextNode?0===Object.keys(t).length&&(e.alwaysCreateTextNode?t[e.textNodeName]="":t=""):t=t[e.textNodeName],void 0!==u[h]&&u.hasOwnProperty(h)?(Array.isArray(u[h])||(u[h]=[u[h]]),u[h].push(t)):e.isArray(h,p,r)?u[h]=[t]:u[h]=t}}}return"string"==typeof a?a.length>0&&(u[e.textNodeName]=a):void 0!==a&&(u[e.textNodeName]=a),u}function r(t){const e=Object.keys(t);for(let t=0;t<e.length;t++){const n=e[t];if(":@"!==n)return n}}function o(t,e,n,r){if(e){const o=Object.keys(e),i=o.length;for(let s=0;s<i;s++){const i=o[s];r.isArray(i,n+"."+i,!0,!0)?t[i]=[e[i]]:t[i]=e[i]}}}function i(t,e){const{textNodeName:n}=e,r=Object.keys(t).length;return 0===r||!(1!==r||!t[n]&&"boolean"!=typeof t[n]&&0!==t[n])}e.prettify=function(t,e){return n(t,e)}},365:t=>{t.exports=class{constructor(t){this.tagname=t,this.child=[],this[":@"]={}}add(t,e){"__proto__"===t&&(t="#__proto__"),this.child.push({[t]:e})}addChild(t){"__proto__"===t.tagname&&(t.tagname="#__proto__"),t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,":@":t[":@"]}):this.child.push({[t.tagname]:t.child})}}},135:t=>{function e(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(e(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&e(t.slice(0,0))}(t)||!!t._isBuffer)}},542:(t,e,n)=>{!function(){var e=n(298),r=n(526).utf8,o=n(135),i=n(526).bin,s=function(t,n){t.constructor==String?t=n&&"binary"===n.encoding?i.stringToBytes(t):r.stringToBytes(t):o(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var a=e.bytesToWords(t),u=8*t.length,c=1732584193,l=-271733879,h=-1732584194,p=271733878,f=0;f<a.length;f++)a[f]=16711935&(a[f]<<8|a[f]>>>24)|4278255360&(a[f]<<24|a[f]>>>8);a[u>>>5]|=128<<u%32,a[14+(u+64>>>9<<4)]=u;var d=s._ff,g=s._gg,m=s._hh,y=s._ii;for(f=0;f<a.length;f+=16){var v=c,b=l,w=h,x=p;c=d(c,l,h,p,a[f+0],7,-680876936),p=d(p,c,l,h,a[f+1],12,-389564586),h=d(h,p,c,l,a[f+2],17,606105819),l=d(l,h,p,c,a[f+3],22,-1044525330),c=d(c,l,h,p,a[f+4],7,-176418897),p=d(p,c,l,h,a[f+5],12,1200080426),h=d(h,p,c,l,a[f+6],17,-1473231341),l=d(l,h,p,c,a[f+7],22,-45705983),c=d(c,l,h,p,a[f+8],7,1770035416),p=d(p,c,l,h,a[f+9],12,-1958414417),h=d(h,p,c,l,a[f+10],17,-42063),l=d(l,h,p,c,a[f+11],22,-1990404162),c=d(c,l,h,p,a[f+12],7,1804603682),p=d(p,c,l,h,a[f+13],12,-40341101),h=d(h,p,c,l,a[f+14],17,-1502002290),c=g(c,l=d(l,h,p,c,a[f+15],22,1236535329),h,p,a[f+1],5,-165796510),p=g(p,c,l,h,a[f+6],9,-1069501632),h=g(h,p,c,l,a[f+11],14,643717713),l=g(l,h,p,c,a[f+0],20,-373897302),c=g(c,l,h,p,a[f+5],5,-701558691),p=g(p,c,l,h,a[f+10],9,38016083),h=g(h,p,c,l,a[f+15],14,-660478335),l=g(l,h,p,c,a[f+4],20,-405537848),c=g(c,l,h,p,a[f+9],5,568446438),p=g(p,c,l,h,a[f+14],9,-1019803690),h=g(h,p,c,l,a[f+3],14,-187363961),l=g(l,h,p,c,a[f+8],20,1163531501),c=g(c,l,h,p,a[f+13],5,-1444681467),p=g(p,c,l,h,a[f+2],9,-51403784),h=g(h,p,c,l,a[f+7],14,1735328473),c=m(c,l=g(l,h,p,c,a[f+12],20,-1926607734),h,p,a[f+5],4,-378558),p=m(p,c,l,h,a[f+8],11,-2022574463),h=m(h,p,c,l,a[f+11],16,1839030562),l=m(l,h,p,c,a[f+14],23,-35309556),c=m(c,l,h,p,a[f+1],4,-1530992060),p=m(p,c,l,h,a[f+4],11,1272893353),h=m(h,p,c,l,a[f+7],16,-155497632),l=m(l,h,p,c,a[f+10],23,-1094730640),c=m(c,l,h,p,a[f+13],4,681279174),p=m(p,c,l,h,a[f+0],11,-358537222),h=m(h,p,c,l,a[f+3],16,-722521979),l=m(l,h,p,c,a[f+6],23,76029189),c=m(c,l,h,p,a[f+9],4,-640364487),p=m(p,c,l,h,a[f+12],11,-421815835),h=m(h,p,c,l,a[f+15],16,530742520),c=y(c,l=m(l,h,p,c,a[f+2],23,-995338651),h,p,a[f+0],6,-198630844),p=y(p,c,l,h,a[f+7],10,1126891415),h=y(h,p,c,l,a[f+14],15,-1416354905),l=y(l,h,p,c,a[f+5],21,-57434055),c=y(c,l,h,p,a[f+12],6,1700485571),p=y(p,c,l,h,a[f+3],10,-1894986606),h=y(h,p,c,l,a[f+10],15,-1051523),l=y(l,h,p,c,a[f+1],21,-2054922799),c=y(c,l,h,p,a[f+8],6,1873313359),p=y(p,c,l,h,a[f+15],10,-30611744),h=y(h,p,c,l,a[f+6],15,-1560198380),l=y(l,h,p,c,a[f+13],21,1309151649),c=y(c,l,h,p,a[f+4],6,-145523070),p=y(p,c,l,h,a[f+11],10,-1120210379),h=y(h,p,c,l,a[f+2],15,718787259),l=y(l,h,p,c,a[f+9],21,-343485551),c=c+v>>>0,l=l+b>>>0,h=h+w>>>0,p=p+x>>>0}return e.endian([c,l,h,p])};s._ff=function(t,e,n,r,o,i,s){var a=t+(e&n|~e&r)+(o>>>0)+s;return(a<<i|a>>>32-i)+e},s._gg=function(t,e,n,r,o,i,s){var a=t+(e&r|n&~r)+(o>>>0)+s;return(a<<i|a>>>32-i)+e},s._hh=function(t,e,n,r,o,i,s){var a=t+(e^n^r)+(o>>>0)+s;return(a<<i|a>>>32-i)+e},s._ii=function(t,e,n,r,o,i,s){var a=t+(n^(e|~r))+(o>>>0)+s;return(a<<i|a>>>32-i)+e},s._blocksize=16,s._digestsize=16,t.exports=function(t,n){if(null==t)throw new Error("Illegal argument "+t);var r=e.wordsToBytes(s(t,n));return n&&n.asBytes?r:n&&n.asString?i.bytesToString(r):e.bytesToHex(r)}}()},285:(t,e,n)=>{var r=n(2);t.exports=function(t){return t?("{}"===t.substr(0,2)&&(t="\\{\\}"+t.substr(2)),m(function(t){return t.split("\\\\").join(o).split("\\{").join(i).split("\\}").join(s).split("\\,").join(a).split("\\.").join(u)}(t),!0).map(l)):[]};var o="\0SLASH"+Math.random()+"\0",i="\0OPEN"+Math.random()+"\0",s="\0CLOSE"+Math.random()+"\0",a="\0COMMA"+Math.random()+"\0",u="\0PERIOD"+Math.random()+"\0";function c(t){return parseInt(t,10)==t?parseInt(t,10):t.charCodeAt(0)}function l(t){return t.split(o).join("\\").split(i).join("{").split(s).join("}").split(a).join(",").split(u).join(".")}function h(t){if(!t)return[""];var e=[],n=r("{","}",t);if(!n)return t.split(",");var o=n.pre,i=n.body,s=n.post,a=o.split(",");a[a.length-1]+="{"+i+"}";var u=h(s);return s.length&&(a[a.length-1]+=u.shift(),a.push.apply(a,u)),e.push.apply(e,a),e}function p(t){return"{"+t+"}"}function f(t){return/^-?0\d/.test(t)}function d(t,e){return t<=e}function g(t,e){return t>=e}function m(t,e){var n=[],o=r("{","}",t);if(!o)return[t];var i=o.pre,a=o.post.length?m(o.post,!1):[""];if(/\$$/.test(o.pre))for(var u=0;u<a.length;u++){var l=i+"{"+o.body+"}"+a[u];n.push(l)}else{var y,v,b=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(o.body),w=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(o.body),x=b||w,N=o.body.indexOf(",")>=0;if(!x&&!N)return o.post.match(/,.*\}/)?m(t=o.pre+"{"+o.body+s+o.post):[t];if(x)y=o.body.split(/\.\./);else if(1===(y=h(o.body)).length&&1===(y=m(y[0],!1).map(p)).length)return a.map((function(t){return o.pre+y[0]+t}));if(x){var P=c(y[0]),A=c(y[1]),O=Math.max(y[0].length,y[1].length),E=3==y.length?Math.abs(c(y[2])):1,T=d;A<P&&(E*=-1,T=g);var j=y.some(f);v=[];for(var S=P;T(S,A);S+=E){var $;if(w)"\\"===($=String.fromCharCode(S))&&($="");else if($=String(S),j){var C=O-$.length;if(C>0){var I=new Array(C+1).join("0");$=S<0?"-"+I+$.slice(1):I+$}}v.push($)}}else{v=[];for(var k=0;k<y.length;k++)v.push.apply(v,m(y[k],!1))}for(k=0;k<v.length;k++)for(u=0;u<a.length;u++)l=i+v[k]+a[u],(!e||x||l)&&n.push(l)}return n}},829:t=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t){var e="function"==typeof Map?new Map:void 0;return n=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,s)}function s(){return r(t,arguments,i(this).constructor)}return s.prototype=Object.create(t.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),o(s,t)},n(t)}function r(t,e,n){return r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&o(i,n.prototype),i},r.apply(null,arguments)}function o(t,e){return o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(t,e)}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}var s=function(t){function n(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(r=function(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}(this,i(n).call(this,t))).name="ObjectPrototypeMutationError",r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(n,t),n}(n(Error));function a(t,n){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=n.split("."),i=o.length,s=function(e){var n=o[e];if(!t)return{v:void 0};if("+"===n){if(Array.isArray(t))return{v:t.map((function(n,i){var s=o.slice(e+1);return s.length>0?a(n,s.join("."),r):r(t,i,o,e)}))};var i=o.slice(0,e).join(".");throw new Error("Object at wildcard (".concat(i,") is not an array"))}t=r(t,n,o,e)},u=0;u<i;u++){var c=s(u);if("object"===e(c))return c.v}return t}function u(t,e){return t.length===e+1}t.exports={set:function(t,n,r){if("object"!=e(t)||null===t)return t;if(void 0===n)return t;if("number"==typeof n)return t[n]=r,t[n];try{return a(t,n,(function(t,e,n,o){if(t===Reflect.getPrototypeOf({}))throw new s("Attempting to mutate Object.prototype");if(!t[e]){var i=Number.isInteger(Number(n[o+1])),a="+"===n[o+1];t[e]=i||a?[]:{}}return u(n,o)&&(t[e]=r),t[e]}))}catch(e){if(e instanceof s)throw e;return t}},get:function(t,n){if("object"!=e(t)||null===t)return t;if(void 0===n)return t;if("number"==typeof n)return t[n];try{return a(t,n,(function(t,e){return t[e]}))}catch(e){return t}},has:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"!=e(t)||null===t)return!1;if(void 0===n)return!1;if("number"==typeof n)return n in t;try{var o=!1;return a(t,n,(function(t,e,n,i){if(!u(n,i))return t&&t[e];o=r.own?t.hasOwnProperty(e):e in t})),o}catch(t){return!1}},hasOwn:function(t,e,n){return this.has(t,e,n||{own:!0})},isIn:function(t,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("object"!=e(t)||null===t)return!1;if(void 0===n)return!1;try{var i=!1,s=!1;return a(t,n,(function(t,n,o,a){return i=i||t===r||!!t&&t[n]===r,s=u(o,a)&&"object"===e(t)&&n in t,t&&t[n]})),o.validPath?i&&s:i}catch(t){return!1}},ObjectPrototypeMutationError:s}},47:(t,e,n)=>{var r=n(410),o=function(t){return"string"==typeof t};function i(t,e){for(var n=[],r=0;r<t.length;r++){var o=t[r];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():e&&n.push(".."):n.push(o))}return n}var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,a={};function u(t){return s.exec(t).slice(1)}a.resolve=function(){for(var t="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var r=n>=0?arguments[n]:process.cwd();if(!o(r))throw new TypeError("Arguments to path.resolve must be strings");r&&(t=r+"/"+t,e="/"===r.charAt(0))}return(e?"/":"")+(t=i(t.split("/"),!e).join("/"))||"."},a.normalize=function(t){var e=a.isAbsolute(t),n="/"===t.substr(-1);return(t=i(t.split("/"),!e).join("/"))||e||(t="."),t&&n&&(t+="/"),(e?"/":"")+t},a.isAbsolute=function(t){return"/"===t.charAt(0)},a.join=function(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];if(!o(n))throw new TypeError("Arguments to path.join must be strings");n&&(t+=t?"/"+n:n)}return a.normalize(t)},a.relative=function(t,e){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n+1)}t=a.resolve(t).substr(1),e=a.resolve(e).substr(1);for(var r=n(t.split("/")),o=n(e.split("/")),i=Math.min(r.length,o.length),s=i,u=0;u<i;u++)if(r[u]!==o[u]){s=u;break}var c=[];for(u=s;u<r.length;u++)c.push("..");return(c=c.concat(o.slice(s))).join("/")},a._makeLong=function(t){return t},a.dirname=function(t){var e=u(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},a.basename=function(t,e){var n=u(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},a.extname=function(t){return u(t)[3]},a.format=function(t){if(!r.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof t);var e=t.root||"";if(!o(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof t.root);return(t.dir?t.dir+a.sep:"")+(t.base||"")},a.parse=function(t){if(!o(t))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof t);var e=u(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return e[1]=e[1]||"",e[2]=e[2]||"",e[3]=e[3]||"",{root:e[0],dir:e[0]+e[1].slice(0,e[1].length-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},a.sep="/",a.delimiter=":",t.exports=a},647:(t,e)=>{var n=Object.prototype.hasOwnProperty;function r(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(t){return null}}function o(t){try{return encodeURIComponent(t)}catch(t){return null}}e.stringify=function(t,e){e=e||"";var r,i,s=[];for(i in"string"!=typeof e&&(e="?"),t)if(n.call(t,i)){if((r=t[i])||null!=r&&!isNaN(r)||(r=""),i=o(i),r=o(r),null===i||null===r)continue;s.push(i+"="+r)}return s.length?e+s.join("&"):""},e.parse=function(t){for(var e,n=/([^=?#&]+)=?([^&]*)/g,o={};e=n.exec(t);){var i=r(e[1]),s=r(e[2]);null===i||null===s||i in o||(o[i]=s)}return o}},670:t=>{t.exports=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},494:t=>{const e=/^[-+]?0x[a-fA-F0-9]+$/,n=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);const r={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};t.exports=function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o=Object.assign({},r,o),!t||"string"!=typeof t)return t;let i=t.trim();if(void 0!==o.skipLike&&o.skipLike.test(i))return t;if(o.hex&&e.test(i))return Number.parseInt(i,16);{const e=n.exec(i);if(e){const n=e[1],r=e[2];let a=(s=e[3])&&-1!==s.indexOf(".")?("."===(s=s.replace(/0+$/,""))?s="0":"."===s[0]?s="0"+s:"."===s[s.length-1]&&(s=s.substr(0,s.length-1)),s):s;const u=e[4]||e[6];if(!o.leadingZeros&&r.length>0&&n&&"."!==i[2])return t;if(!o.leadingZeros&&r.length>0&&!n&&"."!==i[1])return t;{const e=Number(i),s=""+e;return-1!==s.search(/[eE]/)||u?o.eNotation?e:t:-1!==i.indexOf(".")?"0"===s&&""===a||s===a||n&&s==="-"+a?e:t:r?a===s||n+a===s?e:t:i===s||i===n+s?e:t}}return t}var s}},737:(t,e,n)=>{var r=n(670),o=n(647),i=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,s=/[\n\r\t]/g,a=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,u=/:\d+$/,c=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,l=/^[a-zA-Z]:/;function h(t){return(t||"").toString().replace(i,"")}var p=[["#","hash"],["?","query"],function(t,e){return g(e.protocol)?t.replace(/\\/g,"/"):t},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],f={hash:1,query:1};function d(t){var e,n=("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}).location||{},r={},o=typeof(t=t||n);if("blob:"===t.protocol)r=new y(unescape(t.pathname),{});else if("string"===o)for(e in r=new y(t,{}),f)delete r[e];else if("object"===o){for(e in t)e in f||(r[e]=t[e]);void 0===r.slashes&&(r.slashes=a.test(t.href))}return r}function g(t){return"file:"===t||"ftp:"===t||"http:"===t||"https:"===t||"ws:"===t||"wss:"===t}function m(t,e){t=(t=h(t)).replace(s,""),e=e||{};var n,r=c.exec(t),o=r[1]?r[1].toLowerCase():"",i=!!r[2],a=!!r[3],u=0;return i?a?(n=r[2]+r[3]+r[4],u=r[2].length+r[3].length):(n=r[2]+r[4],u=r[2].length):a?(n=r[3]+r[4],u=r[3].length):n=r[4],"file:"===o?u>=2&&(n=n.slice(2)):g(o)?n=r[4]:o?i&&(n=n.slice(2)):u>=2&&g(e.protocol)&&(n=r[4]),{protocol:o,slashes:i||g(o),slashesCount:u,rest:n}}function y(t,e,n){if(t=(t=h(t)).replace(s,""),!(this instanceof y))return new y(t,e,n);var i,a,u,c,f,v,b=p.slice(),w=typeof e,x=this,N=0;for("object"!==w&&"string"!==w&&(n=e,e=null),n&&"function"!=typeof n&&(n=o.parse),i=!(a=m(t||"",e=d(e))).protocol&&!a.slashes,x.slashes=a.slashes||i&&e.slashes,x.protocol=a.protocol||e.protocol||"",t=a.rest,("file:"===a.protocol&&(2!==a.slashesCount||l.test(t))||!a.slashes&&(a.protocol||a.slashesCount<2||!g(x.protocol)))&&(b[3]=[/(.*)/,"pathname"]);N<b.length;N++)"function"!=typeof(c=b[N])?(u=c[0],v=c[1],u!=u?x[v]=t:"string"==typeof u?~(f="@"===u?t.lastIndexOf(u):t.indexOf(u))&&("number"==typeof c[2]?(x[v]=t.slice(0,f),t=t.slice(f+c[2])):(x[v]=t.slice(f),t=t.slice(0,f))):(f=u.exec(t))&&(x[v]=f[1],t=t.slice(0,f.index)),x[v]=x[v]||i&&c[3]&&e[v]||"",c[4]&&(x[v]=x[v].toLowerCase())):t=c(t,x);n&&(x.query=n(x.query)),i&&e.slashes&&"/"!==x.pathname.charAt(0)&&(""!==x.pathname||""!==e.pathname)&&(x.pathname=function(t,e){if(""===t)return e;for(var n=(e||"/").split("/").slice(0,-1).concat(t.split("/")),r=n.length,o=n[r-1],i=!1,s=0;r--;)"."===n[r]?n.splice(r,1):".."===n[r]?(n.splice(r,1),s++):s&&(0===r&&(i=!0),n.splice(r,1),s--);return i&&n.unshift(""),"."!==o&&".."!==o||n.push(""),n.join("/")}(x.pathname,e.pathname)),"/"!==x.pathname.charAt(0)&&g(x.protocol)&&(x.pathname="/"+x.pathname),r(x.port,x.protocol)||(x.host=x.hostname,x.port=""),x.username=x.password="",x.auth&&(~(f=x.auth.indexOf(":"))?(x.username=x.auth.slice(0,f),x.username=encodeURIComponent(decodeURIComponent(x.username)),x.password=x.auth.slice(f+1),x.password=encodeURIComponent(decodeURIComponent(x.password))):x.username=encodeURIComponent(decodeURIComponent(x.auth)),x.auth=x.password?x.username+":"+x.password:x.username),x.origin="file:"!==x.protocol&&g(x.protocol)&&x.host?x.protocol+"//"+x.host:"null",x.href=x.toString()}y.prototype={set:function(t,e,n){var i=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(n||o.parse)(e)),i[t]=e;break;case"port":i[t]=e,r(e,i.protocol)?e&&(i.host=i.hostname+":"+e):(i.host=i.hostname,i[t]="");break;case"hostname":i[t]=e,i.port&&(e+=":"+i.port),i.host=e;break;case"host":i[t]=e,u.test(e)?(e=e.split(":"),i.port=e.pop(),i.hostname=e.join(":")):(i.hostname=e,i.port="");break;case"protocol":i.protocol=e.toLowerCase(),i.slashes=!n;break;case"pathname":case"hash":if(e){var s="pathname"===t?"/":"#";i[t]=e.charAt(0)!==s?s+e:e}else i[t]=e;break;case"username":case"password":i[t]=encodeURIComponent(e);break;case"auth":var a=e.indexOf(":");~a?(i.username=e.slice(0,a),i.username=encodeURIComponent(decodeURIComponent(i.username)),i.password=e.slice(a+1),i.password=encodeURIComponent(decodeURIComponent(i.password))):i.username=encodeURIComponent(decodeURIComponent(e))}for(var c=0;c<p.length;c++){var l=p[c];l[4]&&(i[l[1]]=i[l[1]].toLowerCase())}return i.auth=i.password?i.username+":"+i.password:i.username,i.origin="file:"!==i.protocol&&g(i.protocol)&&i.host?i.protocol+"//"+i.host:"null",i.href=i.toString(),i},toString:function(t){t&&"function"==typeof t||(t=o.stringify);var e,n=this,r=n.host,i=n.protocol;i&&":"!==i.charAt(i.length-1)&&(i+=":");var s=i+(n.protocol&&n.slashes||g(n.protocol)?"//":"");return n.username?(s+=n.username,n.password&&(s+=":"+n.password),s+="@"):n.password?(s+=":"+n.password,s+="@"):"file:"!==n.protocol&&g(n.protocol)&&!r&&"/"!==n.pathname&&(s+="@"),(":"===r[r.length-1]||u.test(n.hostname)&&!n.port)&&(r+=":"),s+=r+n.pathname,(e="object"==typeof n.query?t(n.query):n.query)&&(s+="?"!==e.charAt(0)?"?"+e:e),n.hash&&(s+=n.hash),s}},y.extractProtocol=m,y.location=d,y.trimLeft=h,y.qs=o,t.exports=y},410:()=>{},388:()=>{},805:()=>{},345:()=>{},800:()=>{}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var r={};n.d(r,{hT:()=>C,O4:()=>I,Kd:()=>S,YK:()=>$,UU:()=>en,Gu:()=>F,ky:()=>oe,h4:()=>ne,ch:()=>re,hq:()=>Xt,i5:()=>ie});var o=n(737),i=n.n(o);function s(t){if(!a(t))throw new Error("Parameter was not an error")}function a(t){return!!t&&"object"==typeof t&&"[object Error]"===(e=t,Object.prototype.toString.call(e))||t instanceof Error;var e}class u extends Error{constructor(t,e){const n=[...arguments],{options:r,shortMessage:o}=function(t){let e,n="";if(0===t.length)e={};else if(a(t[0]))e={cause:t[0]},n=t.slice(1).join(" ")||"";else if(t[0]&&"object"==typeof t[0])e=Object.assign({},t[0]),n=t.slice(1).join(" ")||"";else{if("string"!=typeof t[0])throw new Error("Invalid arguments passed to Layerr");e={},n=n=t.join(" ")||""}return{options:e,shortMessage:n}}(n);let i=o;if(r.cause&&(i=`${i}: ${r.cause.message}`),super(i),this.message=i,r.name&&"string"==typeof r.name?this.name=r.name:this.name="Layerr",r.cause&&Object.defineProperty(this,"_cause",{value:r.cause}),Object.defineProperty(this,"_info",{value:{}}),r.info&&"object"==typeof r.info&&Object.assign(this._info,r.info),Error.captureStackTrace){const t=r.constructorOpt||this.constructor;Error.captureStackTrace(this,t)}}static cause(t){return s(t),t._cause&&a(t._cause)?t._cause:null}static fullStack(t){s(t);const e=u.cause(t);return e?`${t.stack}\ncaused by: ${u.fullStack(e)}`:t.stack??""}static info(t){s(t);const e={},n=u.cause(t);return n&&Object.assign(e,u.info(n)),t._info&&Object.assign(e,t._info),e}toString(){let t=this.name||this.constructor.name||this.constructor.prototype.name;return this.message&&(t=`${t}: ${this.message}`),t}}var c=n(47),l=n.n(c);const h="__PATH_SEPARATOR_POSIX__",p="__PATH_SEPARATOR_WINDOWS__";function f(t){try{const e=t.replace(/\//g,h).replace(/\\\\/g,p);return encodeURIComponent(e).split(p).join("\\\\").split(h).join("/")}catch(t){throw new u(t,"Failed encoding path")}}function d(t){return t.startsWith("/")?t:"/"+t}function g(t){let e=t;return"/"!==e[0]&&(e="/"+e),/^.+\/$/.test(e)&&(e=e.substr(0,e.length-1)),e}function m(t){let e=new(i())(t).pathname;return e.length<=0&&(e="/"),g(e)}function y(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return function(t){var e=[];if(0===t.length)return"";if("string"!=typeof t[0])throw new TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var n=t.shift();t[0]=n+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<t.length;r++){var o=t[r];if("string"!=typeof o)throw new TypeError("Url must be a string. Received "+o);""!==o&&(r>0&&(o=o.replace(/^[\/]+/,"")),o=r<t.length-1?o.replace(/[\/]+$/,""):o.replace(/[\/]+$/,"/"),e.push(o))}var i=e.join("/"),s=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return s.shift()+(s.length>0?"?":"")+s.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}(e.reduce(((t,e,n)=>((0===n||"/"!==e||"/"===e&&"/"!==t[t.length-1])&&t.push(e),t)),[]))}var v=n(542),b=n.n(v);const w="abcdef0123456789";function x(t,e){const n=t.url.replace("//",""),r=-1==n.indexOf("/")?"/":n.slice(n.indexOf("/")),o=t.method?t.method.toUpperCase():"GET",i=!!/(^|,)\s*auth\s*($|,)/.test(e.qop)&&"auth",s=`00000000${e.nc}`.slice(-8),a=function(t,e,n,r,o,i,s){const a=s||b()(`${e}:${n}:${r}`);return t&&"md5-sess"===t.toLowerCase()?b()(`${a}:${o}:${i}`):a}(e.algorithm,e.username,e.realm,e.password,e.nonce,e.cnonce,e.ha1),u=b()(`${o}:${r}`),c=i?b()(`${a}:${e.nonce}:${s}:${e.cnonce}:${i}:${u}`):b()(`${a}:${e.nonce}:${u}`),l={username:e.username,realm:e.realm,nonce:e.nonce,uri:r,qop:i,response:c,nc:s,cnonce:e.cnonce,algorithm:e.algorithm,opaque:e.opaque},h=[];for(const t in l)l[t]&&("qop"===t||"nc"===t||"algorithm"===t?h.push(`${t}=${l[t]}`):h.push(`${t}="${l[t]}"`));return`Digest ${h.join(", ")}`}function N(t){return"digest"===(t.headers&&t.headers.get("www-authenticate")||"").split(/\s/)[0].toLowerCase()}var P=n(101),A=n.n(P);function O(t){return A().decode(t)}function E(t,e){var n;return`Basic ${n=`${t}:${e}`,A().encode(n)}`}const T="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:"undefined"!=typeof window?window:globalThis,j=T.fetch.bind(T),S=(T.Headers,T.Request),$=T.Response;let C=function(t){return t.Auto="auto",t.Digest="digest",t.None="none",t.Password="password",t.Token="token",t}({}),I=function(t){return t.DataTypeNoLength="data-type-no-length",t.InvalidAuthType="invalid-auth-type",t.InvalidOutputFormat="invalid-output-format",t.LinkUnsupportedAuthType="link-unsupported-auth",t.InvalidUpdateRange="invalid-update-range",t.NotSupported="not-supported",t}({});function k(t,e,n,r,o){switch(t.authType){case C.Auto:e&&n&&(t.headers.Authorization=E(e,n));break;case C.Digest:t.digest=function(t,e,n){return{username:t,password:e,ha1:n,nc:0,algorithm:"md5",hasDigestAuth:!1}}(e,n,o);break;case C.None:break;case C.Password:t.headers.Authorization=E(e,n);break;case C.Token:t.headers.Authorization=`${(i=r).token_type} ${i.access_token}`;break;default:throw new u({info:{code:I.InvalidAuthType}},`Invalid auth type: ${t.authType}`)}var i}n(345),n(800);const R="@@HOTPATCHER",L=()=>{};function _(t){return{original:t,methods:[t],final:!1}}class M{constructor(){this._configuration={registry:{},getEmptyAction:"null"},this.__type__=R}get configuration(){return this._configuration}get getEmptyAction(){return this.configuration.getEmptyAction}set getEmptyAction(t){this.configuration.getEmptyAction=t}control(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!t||t.__type__!==R)throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");return Object.keys(t.configuration.registry).forEach((n=>{this.configuration.registry.hasOwnProperty(n)?e&&(this.configuration.registry[n]=Object.assign({},t.configuration.registry[n])):this.configuration.registry[n]=Object.assign({},t.configuration.registry[n])})),t._configuration=this.configuration,this}execute(t){const e=this.get(t)||L;for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return e(...r)}get(t){const e=this.configuration.registry[t];if(!e)switch(this.getEmptyAction){case"null":return null;case"throw":throw new Error(`Failed handling method request: No method provided for override: ${t}`);default:throw new Error(`Failed handling request which resulted in an empty method: Invalid empty-action specified: ${this.getEmptyAction}`)}return function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)throw new Error("Failed creating sequence: No functions provided");return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];let o=n;const i=this;for(;e.length>0;)o=[e.shift().apply(i,o)];return o[0]}}(...e.methods)}isPatched(t){return!!this.configuration.registry[t]}patch(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{chain:r=!1}=n;if(this.configuration.registry[t]&&this.configuration.registry[t].final)throw new Error(`Failed patching '${t}': Method marked as being final`);if("function"!=typeof e)throw new Error(`Failed patching '${t}': Provided method is not a function`);if(r)this.configuration.registry[t]?this.configuration.registry[t].methods.push(e):this.configuration.registry[t]=_(e);else if(this.isPatched(t)){const{original:n}=this.configuration.registry[t];this.configuration.registry[t]=Object.assign(_(e),{original:n})}else this.configuration.registry[t]=_(e);return this}patchInline(t,e){this.isPatched(t)||this.patch(t,e);for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return this.execute(t,...r)}plugin(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return n.forEach((e=>{this.patch(t,e,{chain:!0})})),this}restore(t){if(!this.isPatched(t))throw new Error(`Failed restoring method: No method present for key: ${t}`);if("function"!=typeof this.configuration.registry[t].original)throw new Error(`Failed restoring method: Original method not found or of invalid type for key: ${t}`);return this.configuration.registry[t].methods=[this.configuration.registry[t].original],this}setFinal(t){if(!this.configuration.registry.hasOwnProperty(t))throw new Error(`Failed marking '${t}' as final: No method found for key`);return this.configuration.registry[t].final=!0,this}}let U=null;function F(){return U||(U=new M),U}function D(t){return function(t){if("object"!=typeof t||null===t||"[object Object]"!=Object.prototype.toString.call(t))return!1;if(null===Object.getPrototypeOf(t))return!0;let e=t;for(;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}(t)?Object.assign({},t):Object.setPrototypeOf(Object.assign({},t),Object.getPrototypeOf(t))}function B(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];let r=null,o=[...e];for(;o.length>0;){const t=o.shift();r=r?W(r,t):D(t)}return r}function W(t,e){const n=D(t);return Object.keys(e).forEach((t=>{n.hasOwnProperty(t)?Array.isArray(e[t])?n[t]=Array.isArray(n[t])?[...n[t],...e[t]]:[...e[t]]:"object"==typeof e[t]&&e[t]?n[t]="object"==typeof n[t]&&n[t]?W(n[t],e[t]):D(e[t]):n[t]=e[t]:n[t]=e[t]})),n}function V(t){const e={};for(const n of t.keys())e[n]=t.get(n);return e}function z(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)return{};const r={};return e.reduce(((t,e)=>(Object.keys(e).forEach((n=>{const o=n.toLowerCase();r.hasOwnProperty(o)?t[r[o]]=e[n]:(r[o]=n,t[n]=e[n])})),t)),{})}n(805);const G="function"==typeof ArrayBuffer,{toString:q}=Object.prototype;function H(t){return G&&(t instanceof ArrayBuffer||"[object ArrayBuffer]"===q.call(t))}function X(t){return null!=t&&null!=t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function Z(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}function Y(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}const K=Z((function(t){const e=t._digest;return delete t._digest,e.hasDigestAuth&&(t=B(t,{headers:{Authorization:x(t,e)}})),Y(et(t),(function(n){let r=!1;return o=function(t){return r?t:n},(i=function(){if(401==n.status)return e.hasDigestAuth=function(t,e){if(!N(t))return!1;const n=/([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;for(;;){const r=t.headers&&t.headers.get("www-authenticate")||"",o=n.exec(r);if(!o)break;e[o[1]]=o[2]||o[3]}return e.nc+=1,e.cnonce=function(){let t="";for(let e=0;e<32;++e)t=`${t}${w[Math.floor(16*Math.random())]}`;return t}(),!0}(n,e),function(){if(e.hasDigestAuth)return Y(et(t=B(t,{headers:{Authorization:x(t,e)}})),(function(t){return 401==t.status?e.hasDigestAuth=!1:e.nc++,r=!0,t}))}();e.nc++}())&&i.then?i.then(o):o(i);var o,i}))})),J=Z((function(t,e){return Y(et(t),(function(n){return n.ok?(e.authType=C.Password,n):401==n.status&&N(n)?(e.authType=C.Digest,k(e,e.username,e.password,void 0,void 0),t._digest=e.digest,K(t)):n}))})),Q=Z((function(t,e){return e.authType===C.Auto?J(t,e):t._digest?K(t):et(t)}));function tt(t,e,n){const r=D(t);return r.headers=z(e.headers,r.headers||{},n.headers||{}),void 0!==n.data&&(r.data=n.data),n.signal&&(r.signal=n.signal),e.httpAgent&&(r.httpAgent=e.httpAgent),e.httpsAgent&&(r.httpsAgent=e.httpsAgent),e.digest&&(r._digest=e.digest),"boolean"==typeof e.withCredentials&&(r.withCredentials=e.withCredentials),r}function et(t){const e=F();return e.patchInline("request",(t=>e.patchInline("fetch",j,t.url,function(t){let e={};const n={method:t.method};if(t.headers&&(e=z(e,t.headers)),void 0!==t.data){const[r,o]=function(t){if("string"==typeof t)return[t,{}];if(X(t))return[t,{}];if(H(t))return[t,{}];if(t&&"object"==typeof t)return[JSON.stringify(t),{"content-type":"application/json"}];throw new Error("Unable to convert request body: Unexpected body type: "+typeof t)}(t.data);n.body=r,e=z(e,o)}return t.signal&&(n.signal=t.signal),t.withCredentials&&(n.credentials="include"),n.headers=e,n}(t))),t)}var nt=n(285);const rt=t=>{if("string"!=typeof t)throw new TypeError("invalid pattern");if(t.length>65536)throw new TypeError("pattern is too long")},ot={"[:alnum:]":["\\p{L}\\p{Nl}\\p{Nd}",!0],"[:alpha:]":["\\p{L}\\p{Nl}",!0],"[:ascii:]":["\\x00-\\x7f",!1],"[:blank:]":["\\p{Zs}\\t",!0],"[:cntrl:]":["\\p{Cc}",!0],"[:digit:]":["\\p{Nd}",!0],"[:graph:]":["\\p{Z}\\p{C}",!0,!0],"[:lower:]":["\\p{Ll}",!0],"[:print:]":["\\p{C}",!0],"[:punct:]":["\\p{P}",!0],"[:space:]":["\\p{Z}\\t\\r\\n\\v\\f",!0],"[:upper:]":["\\p{Lu}",!0],"[:word:]":["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}",!0],"[:xdigit:]":["A-Fa-f0-9",!1]},it=t=>t.replace(/[[\]\\-]/g,"\\$&"),st=t=>t.join(""),at=(t,e)=>{const n=e;if("["!==t.charAt(n))throw new Error("not in a brace expression");const r=[],o=[];let i=n+1,s=!1,a=!1,u=!1,c=!1,l=n,h="";t:for(;i<t.length;){const e=t.charAt(i);if("!"!==e&&"^"!==e||i!==n+1){if("]"===e&&s&&!u){l=i+1;break}if(s=!0,"\\"!==e||u){if("["===e&&!u)for(const[e,[s,u,c]]of Object.entries(ot))if(t.startsWith(e,i)){if(h)return["$.",!1,t.length-n,!0];i+=e.length,c?o.push(s):r.push(s),a=a||u;continue t}u=!1,h?(e>h?r.push(it(h)+"-"+it(e)):e===h&&r.push(it(e)),h="",i++):t.startsWith("-]",i+1)?(r.push(it(e+"-")),i+=2):t.startsWith("-",i+1)?(h=e,i+=2):(r.push(it(e)),i++)}else u=!0,i++}else c=!0,i++}if(l<i)return["",!1,0,!1];if(!r.length&&!o.length)return["$.",!1,t.length-n,!0];if(0===o.length&&1===r.length&&/^\\?.$/.test(r[0])&&!c){return[(p=2===r[0].length?r[0].slice(-1):r[0],p.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")),!1,l-n,!1]}var p;const f="["+(c?"^":"")+st(r)+"]",d="["+(c?"":"^")+st(o)+"]";return[r.length&&o.length?"("+f+"|"+d+")":r.length?f:d,a,l-n,!0]},ut=function(t){let{windowsPathsNoEscape:e=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e?t.replace(/\[([^\/\\])\]/g,"$1"):t.replace(/((?!\\).|^)\[([^\/\\])\]/g,"$1$2").replace(/\\([^\/])/g,"$1")},ct=new Set(["!","?","+","*","@"]),lt=t=>ct.has(t),ht="(?!\\.)",pt=new Set(["[","."]),ft=new Set(["..","."]),dt=new Set("().*{}+?[]^$\\!"),gt="[^/]",mt=gt+"*?",yt=gt+"+?";class vt{type;#t;#e;#n=!1;#r=[];#o;#i;#s;#a=!1;#u;#c;#l=!1;constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.type=t,t&&(this.#e=!0),this.#o=e,this.#t=this.#o?this.#o.#t:this,this.#u=this.#t===this?n:this.#t.#u,this.#s=this.#t===this?[]:this.#t.#s,"!"!==t||this.#t.#a||this.#s.push(this),this.#i=this.#o?this.#o.#r.length:0}get hasMagic(){if(void 0!==this.#e)return this.#e;for(const t of this.#r)if("string"!=typeof t&&(t.type||t.hasMagic))return this.#e=!0;return this.#e}toString(){return void 0!==this.#c?this.#c:this.type?this.#c=this.type+"("+this.#r.map((t=>String(t))).join("|")+")":this.#c=this.#r.map((t=>String(t))).join("")}#h(){if(this!==this.#t)throw new Error("should only call on root");if(this.#a)return this;let t;for(this.toString(),this.#a=!0;t=this.#s.pop();){if("!"!==t.type)continue;let e=t,n=e.#o;for(;n;){for(let r=e.#i+1;!n.type&&r<n.#r.length;r++)for(const e of t.#r){if("string"==typeof e)throw new Error("string part in extglob AST??");e.copyIn(n.#r[r])}e=n,n=e.#o}}return this}push(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(const t of e)if(""!==t){if("string"!=typeof t&&!(t instanceof vt&&t.#o===this))throw new Error("invalid part: "+t);this.#r.push(t)}}toJSON(){const t=null===this.type?this.#r.slice().map((t=>"string"==typeof t?t:t.toJSON())):[this.type,...this.#r.map((t=>t.toJSON()))];return this.isStart()&&!this.type&&t.unshift([]),this.isEnd()&&(this===this.#t||this.#t.#a&&"!"===this.#o?.type)&&t.push({}),t}isStart(){if(this.#t===this)return!0;if(!this.#o?.isStart())return!1;if(0===this.#i)return!0;const t=this.#o;for(let e=0;e<this.#i;e++){const n=t.#r[e];if(!(n instanceof vt&&"!"===n.type))return!1}return!0}isEnd(){if(this.#t===this)return!0;if("!"===this.#o?.type)return!0;if(!this.#o?.isEnd())return!1;if(!this.type)return this.#o?.isEnd();const t=this.#o?this.#o.#r.length:0;return this.#i===t-1}copyIn(t){"string"==typeof t?this.push(t):this.push(t.clone(this))}clone(t){const e=new vt(this.type,t);for(const t of this.#r)e.copyIn(t);return e}static#p(t,e,n,r){let o=!1,i=!1,s=-1,a=!1;if(null===e.type){let u=n,c="";for(;u<t.length;){const n=t.charAt(u++);if(o||"\\"===n)o=!o,c+=n;else if(i)u===s+1?"^"!==n&&"!"!==n||(a=!0):"]"!==n||u===s+2&&a||(i=!1),c+=n;else if("["!==n)if(r.noext||!lt(n)||"("!==t.charAt(u))c+=n;else{e.push(c),c="";const o=new vt(n,e);u=vt.#p(t,o,u,r),e.push(o)}else i=!0,s=u,a=!1,c+=n}return e.push(c),u}let u=n+1,c=new vt(null,e);const l=[];let h="";for(;u<t.length;){const n=t.charAt(u++);if(o||"\\"===n)o=!o,h+=n;else if(i)u===s+1?"^"!==n&&"!"!==n||(a=!0):"]"!==n||u===s+2&&a||(i=!1),h+=n;else if("["!==n)if(lt(n)&&"("===t.charAt(u)){c.push(h),h="";const e=new vt(n,c);c.push(e),u=vt.#p(t,e,u,r)}else if("|"!==n){if(")"===n)return""===h&&0===e.#r.length&&(e.#l=!0),c.push(h),h="",e.push(...l,c),u;h+=n}else c.push(h),h="",l.push(c),c=new vt(null,e);else i=!0,s=u,a=!1,h+=n}return e.type=null,e.#e=void 0,e.#r=[t.substring(n-1)],u}static fromGlob(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=new vt(null,void 0,e);return vt.#p(t,n,0,e),n}toMMPattern(){if(this!==this.#t)return this.#t.toMMPattern();const t=this.toString(),[e,n,r,o]=this.toRegExpSource();if(!(r||this.#e||this.#u.nocase&&!this.#u.nocaseMagicOnly&&t.toUpperCase()!==t.toLowerCase()))return n;const i=(this.#u.nocase?"i":"")+(o?"u":"");return Object.assign(new RegExp(`^${e}$`,i),{_src:e,_glob:t})}get options(){return this.#u}toRegExpSource(t){const e=t??!!this.#u.dot;if(this.#t===this&&this.#h(),!this.type){const n=this.isStart()&&this.isEnd(),r=this.#r.map((e=>{const[r,o,i,s]="string"==typeof e?vt.#f(e,this.#e,n):e.toRegExpSource(t);return this.#e=this.#e||i,this.#n=this.#n||s,r})).join("");let o="";if(this.isStart()&&"string"==typeof this.#r[0]&&(1!==this.#r.length||!ft.has(this.#r[0]))){const n=pt,i=e&&n.has(r.charAt(0))||r.startsWith("\\.")&&n.has(r.charAt(2))||r.startsWith("\\.\\.")&&n.has(r.charAt(4)),s=!e&&!t&&n.has(r.charAt(0));o=i?"(?!(?:^|/)\\.\\.?(?:$|/))":s?ht:""}let i="";return this.isEnd()&&this.#t.#a&&"!"===this.#o?.type&&(i="(?:$|\\/)"),[o+r+i,ut(r),this.#e=!!this.#e,this.#n]}const n="*"===this.type||"+"===this.type,r="!"===this.type?"(?:(?!(?:":"(?:";let o=this.#d(e);if(this.isStart()&&this.isEnd()&&!o&&"!"!==this.type){const t=this.toString();return this.#r=[t],this.type=null,this.#e=void 0,[t,ut(this.toString()),!1,!1]}let i=!n||t||e?"":this.#d(!0);i===o&&(i=""),i&&(o=`(?:${o})(?:${i})*?`);let s="";return s="!"===this.type&&this.#l?(this.isStart()&&!e?ht:"")+yt:r+o+("!"===this.type?"))"+(!this.isStart()||e||t?"":ht)+mt+")":"@"===this.type?")":"?"===this.type?")?":"+"===this.type&&i?")":"*"===this.type&&i?")?":`)${this.type}`),[s,ut(o),this.#e=!!this.#e,this.#n]}#d(t){return this.#r.map((e=>{if("string"==typeof e)throw new Error("string type in extglob ast??");const[n,r,o,i]=e.toRegExpSource(t);return this.#n=this.#n||i,n})).filter((t=>!(this.isStart()&&this.isEnd()&&!t))).join("|")}static#f(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!1,o="",i=!1;for(let s=0;s<t.length;s++){const a=t.charAt(s);if(r)r=!1,o+=(dt.has(a)?"\\":"")+a;else if("\\"!==a){if("["===a){const[n,r,a,u]=at(t,s);if(a){o+=n,i=i||r,s+=a-1,e=e||u;continue}}"*"!==a?"?"!==a?o+=a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):(o+=gt,e=!0):(o+=n&&"*"===t?yt:mt,e=!0)}else s===t.length-1?o+="\\\\":r=!0}return[o,ut(t),!!e,i]}}const bt=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return rt(e),!(!n.nocomment&&"#"===e.charAt(0))&&new Gt(e,n).match(t)},wt=/^\*+([^+@!?\*\[\(]*)$/,xt=t=>e=>!e.startsWith(".")&&e.endsWith(t),Nt=t=>e=>e.endsWith(t),Pt=t=>(t=t.toLowerCase(),e=>!e.startsWith(".")&&e.toLowerCase().endsWith(t)),At=t=>(t=t.toLowerCase(),e=>e.toLowerCase().endsWith(t)),Ot=/^\*+\.\*+$/,Et=t=>!t.startsWith(".")&&t.includes("."),Tt=t=>"."!==t&&".."!==t&&t.includes("."),jt=/^\.\*+$/,St=t=>"."!==t&&".."!==t&&t.startsWith("."),$t=/^\*+$/,Ct=t=>0!==t.length&&!t.startsWith("."),It=t=>0!==t.length&&"."!==t&&".."!==t,kt=/^\?+([^+@!?\*\[\(]*)?$/,Rt=t=>{let[e,n=""]=t;const r=Ut([e]);return n?(n=n.toLowerCase(),t=>r(t)&&t.toLowerCase().endsWith(n)):r},Lt=t=>{let[e,n=""]=t;const r=Ft([e]);return n?(n=n.toLowerCase(),t=>r(t)&&t.toLowerCase().endsWith(n)):r},_t=t=>{let[e,n=""]=t;const r=Ft([e]);return n?t=>r(t)&&t.endsWith(n):r},Mt=t=>{let[e,n=""]=t;const r=Ut([e]);return n?t=>r(t)&&t.endsWith(n):r},Ut=t=>{let[e]=t;const n=e.length;return t=>t.length===n&&!t.startsWith(".")},Ft=t=>{let[e]=t;const n=e.length;return t=>t.length===n&&"."!==t&&".."!==t},Dt="object"==typeof process&&process?"object"==typeof process.env&&process.env&&process.env.__MINIMATCH_TESTING_PLATFORM__||process.platform:"posix";bt.sep="win32"===Dt?"\\":"/";const Bt=Symbol("globstar **");bt.GLOBSTAR=Bt,bt.filter=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=>bt(n,t,e)};const Wt=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.assign({},t,e)};bt.defaults=t=>{if(!t||"object"!=typeof t||!Object.keys(t).length)return bt;const e=bt;return Object.assign((function(n,r){return e(n,r,Wt(t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}))}),{Minimatch:class extends e.Minimatch{constructor(e){super(e,Wt(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}static defaults(n){return e.defaults(Wt(t,n)).Minimatch}},AST:class extends e.AST{constructor(e,n){super(e,n,Wt(t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}))}static fromGlob(n){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.AST.fromGlob(n,Wt(t,r))}},unescape:function(n){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.unescape(n,Wt(t,r))},escape:function(n){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.escape(n,Wt(t,r))},filter:function(n){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.filter(n,Wt(t,r))},defaults:n=>e.defaults(Wt(t,n)),makeRe:function(n){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.makeRe(n,Wt(t,r))},braceExpand:function(n){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.braceExpand(n,Wt(t,r))},match:function(n,r){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.match(n,r,Wt(t,o))},sep:e.sep,GLOBSTAR:Bt})};const Vt=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return rt(t),e.nobrace||!/\{(?:(?!\{).)*\}/.test(t)?[t]:nt(t)};bt.braceExpand=Vt,bt.makeRe=function(t){return new Gt(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).makeRe()},bt.match=function(t,e){const n=new Gt(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{});return t=t.filter((t=>n.match(t))),n.options.nonull&&!t.length&&t.push(e),t};const zt=/[?*]|[+@!]\(.*?\)|\[|\]/;class Gt{options;set;pattern;windowsPathsNoEscape;nonegate;negate;comment;empty;preserveMultipleSlashes;partial;globSet;globParts;nocase;isWindows;platform;windowsNoMagicRoot;regexp;constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};rt(t),e=e||{},this.options=e,this.pattern=t,this.platform=e.platform||Dt,this.isWindows="win32"===this.platform,this.windowsPathsNoEscape=!!e.windowsPathsNoEscape||!1===e.allowWindowsEscape,this.windowsPathsNoEscape&&(this.pattern=this.pattern.replace(/\\/g,"/")),this.preserveMultipleSlashes=!!e.preserveMultipleSlashes,this.regexp=null,this.negate=!1,this.nonegate=!!e.nonegate,this.comment=!1,this.empty=!1,this.partial=!!e.partial,this.nocase=!!this.options.nocase,this.windowsNoMagicRoot=void 0!==e.windowsNoMagicRoot?e.windowsNoMagicRoot:!(!this.isWindows||!this.nocase),this.globSet=[],this.globParts=[],this.set=[],this.make()}hasMagic(){if(this.options.magicalBraces&&this.set.length>1)return!0;for(const t of this.set)for(const e of t)if("string"!=typeof e)return!0;return!1}debug(){}make(){const t=this.pattern,e=this.options;if(!e.nocomment&&"#"===t.charAt(0))return void(this.comment=!0);if(!t)return void(this.empty=!0);this.parseNegate(),this.globSet=[...new Set(this.braceExpand())],e.debug&&(this.debug=function(){return console.error(...arguments)}),this.debug(this.pattern,this.globSet);const n=this.globSet.map((t=>this.slashSplit(t)));this.globParts=this.preprocess(n),this.debug(this.pattern,this.globParts);let r=this.globParts.map(((t,e,n)=>{if(this.isWindows&&this.windowsNoMagicRoot){const e=!(""!==t[0]||""!==t[1]||"?"!==t[2]&&zt.test(t[2])||zt.test(t[3])),n=/^[a-z]:/i.test(t[0]);if(e)return[...t.slice(0,4),...t.slice(4).map((t=>this.parse(t)))];if(n)return[t[0],...t.slice(1).map((t=>this.parse(t)))]}return t.map((t=>this.parse(t)))}));if(this.debug(this.pattern,r),this.set=r.filter((t=>-1===t.indexOf(!1))),this.isWindows)for(let t=0;t<this.set.length;t++){const e=this.set[t];""===e[0]&&""===e[1]&&"?"===this.globParts[t][2]&&"string"==typeof e[3]&&/^[a-z]:$/i.test(e[3])&&(e[2]="?")}this.debug(this.pattern,this.set)}preprocess(t){if(this.options.noglobstar)for(let e=0;e<t.length;e++)for(let n=0;n<t[e].length;n++)"**"===t[e][n]&&(t[e][n]="*");const{optimizationLevel:e=1}=this.options;return e>=2?(t=this.firstPhasePreProcess(t),t=this.secondPhasePreProcess(t)):t=e>=1?this.levelOneOptimize(t):this.adjascentGlobstarOptimize(t),t}adjascentGlobstarOptimize(t){return t.map((t=>{let e=-1;for(;-1!==(e=t.indexOf("**",e+1));){let n=e;for(;"**"===t[n+1];)n++;n!==e&&t.splice(e,n-e)}return t}))}levelOneOptimize(t){return t.map((t=>0===(t=t.reduce(((t,e)=>{const n=t[t.length-1];return"**"===e&&"**"===n?t:".."===e&&n&&".."!==n&&"."!==n&&"**"!==n?(t.pop(),t):(t.push(e),t)}),[])).length?[""]:t))}levelTwoFileOptimize(t){Array.isArray(t)||(t=this.slashSplit(t));let e=!1;do{if(e=!1,!this.preserveMultipleSlashes){for(let n=1;n<t.length-1;n++){const r=t[n];1===n&&""===r&&""===t[0]||"."!==r&&""!==r||(e=!0,t.splice(n,1),n--)}"."!==t[0]||2!==t.length||"."!==t[1]&&""!==t[1]||(e=!0,t.pop())}let n=0;for(;-1!==(n=t.indexOf("..",n+1));){const r=t[n-1];r&&"."!==r&&".."!==r&&"**"!==r&&(e=!0,t.splice(n-1,2),n-=2)}}while(e);return 0===t.length?[""]:t}firstPhasePreProcess(t){let e=!1;do{e=!1;for(let n of t){let r=-1;for(;-1!==(r=n.indexOf("**",r+1));){let o=r;for(;"**"===n[o+1];)o++;o>r&&n.splice(r+1,o-r);let i=n[r+1];const s=n[r+2],a=n[r+3];if(".."!==i)continue;if(!s||"."===s||".."===s||!a||"."===a||".."===a)continue;e=!0,n.splice(r,1);const u=n.slice(0);u[r]="**",t.push(u),r--}if(!this.preserveMultipleSlashes){for(let t=1;t<n.length-1;t++){const r=n[t];1===t&&""===r&&""===n[0]||"."!==r&&""!==r||(e=!0,n.splice(t,1),t--)}"."!==n[0]||2!==n.length||"."!==n[1]&&""!==n[1]||(e=!0,n.pop())}let o=0;for(;-1!==(o=n.indexOf("..",o+1));){const t=n[o-1];if(t&&"."!==t&&".."!==t&&"**"!==t){e=!0;const t=1===o&&"**"===n[o+1]?["."]:[];n.splice(o-1,2,...t),0===n.length&&n.push(""),o-=2}}}}while(e);return t}secondPhasePreProcess(t){for(let e=0;e<t.length-1;e++)for(let n=e+1;n<t.length;n++){const r=this.partsMatch(t[e],t[n],!this.preserveMultipleSlashes);if(r){t[e]=[],t[n]=r;break}}return t.filter((t=>t.length))}partsMatch(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=0,o=0,i=[],s="";for(;r<t.length&&o<e.length;)if(t[r]===e[o])i.push("b"===s?e[o]:t[r]),r++,o++;else if(n&&"**"===t[r]&&e[o]===t[r+1])i.push(t[r]),r++;else if(n&&"**"===e[o]&&t[r]===e[o+1])i.push(e[o]),o++;else if("*"!==t[r]||!e[o]||!this.options.dot&&e[o].startsWith(".")||"**"===e[o]){if("*"!==e[o]||!t[r]||!this.options.dot&&t[r].startsWith(".")||"**"===t[r])return!1;if("a"===s)return!1;s="b",i.push(e[o]),r++,o++}else{if("b"===s)return!1;s="a",i.push(t[r]),r++,o++}return t.length===e.length&&i}parseNegate(){if(this.nonegate)return;const t=this.pattern;let e=!1,n=0;for(let r=0;r<t.length&&"!"===t.charAt(r);r++)e=!e,n++;n&&(this.pattern=t.slice(n)),this.negate=e}matchOne(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=this.options;if(this.isWindows){const n="string"==typeof t[0]&&/^[a-z]:$/i.test(t[0]),r=!n&&""===t[0]&&""===t[1]&&"?"===t[2]&&/^[a-z]:$/i.test(t[3]),o="string"==typeof e[0]&&/^[a-z]:$/i.test(e[0]),i=r?3:n?0:void 0,s=!o&&""===e[0]&&""===e[1]&&"?"===e[2]&&"string"==typeof e[3]&&/^[a-z]:$/i.test(e[3])?3:o?0:void 0;if("number"==typeof i&&"number"==typeof s){const[n,r]=[t[i],e[s]];n.toLowerCase()===r.toLowerCase()&&(e[s]=n,s>i?e=e.slice(s):i>s&&(t=t.slice(i)))}}const{optimizationLevel:o=1}=this.options;o>=2&&(t=this.levelTwoFileOptimize(t)),this.debug("matchOne",this,{file:t,pattern:e}),this.debug("matchOne",t.length,e.length);for(var i=0,s=0,a=t.length,u=e.length;i<a&&s<u;i++,s++){this.debug("matchOne loop");var c=e[s],l=t[i];if(this.debug(e,c,l),!1===c)return!1;if(c===Bt){this.debug("GLOBSTAR",[e,c,l]);var h=i,p=s+1;if(p===u){for(this.debug("** at the end");i<a;i++)if("."===t[i]||".."===t[i]||!r.dot&&"."===t[i].charAt(0))return!1;return!0}for(;h<a;){var f=t[h];if(this.debug("\nglobstar while",t,h,e,p,f),this.matchOne(t.slice(h),e.slice(p),n))return this.debug("globstar found match!",h,a,f),!0;if("."===f||".."===f||!r.dot&&"."===f.charAt(0)){this.debug("dot detected!",t,h,e,p);break}this.debug("globstar swallow a segment, and continue"),h++}return!(!n||(this.debug("\n>>> no match, partial?",t,h,e,p),h!==a))}let o;if("string"==typeof c?(o=l===c,this.debug("string match",c,l,o)):(o=c.test(l),this.debug("pattern match",c,l,o)),!o)return!1}if(i===a&&s===u)return!0;if(i===a)return n;if(s===u)return i===a-1&&""===t[i];throw new Error("wtf?")}braceExpand(){return Vt(this.pattern,this.options)}parse(t){rt(t);const e=this.options;if("**"===t)return Bt;if(""===t)return"";let n,r=null;(n=t.match($t))?r=e.dot?It:Ct:(n=t.match(wt))?r=(e.nocase?e.dot?At:Pt:e.dot?Nt:xt)(n[1]):(n=t.match(kt))?r=(e.nocase?e.dot?Lt:Rt:e.dot?_t:Mt)(n):(n=t.match(Ot))?r=e.dot?Tt:Et:(n=t.match(jt))&&(r=St);const o=vt.fromGlob(t,this.options).toMMPattern();return r&&"object"==typeof o&&Reflect.defineProperty(o,"test",{value:r}),o}makeRe(){if(this.regexp||!1===this.regexp)return this.regexp;const t=this.set;if(!t.length)return this.regexp=!1,this.regexp;const e=this.options,n=e.noglobstar?"[^/]*?":e.dot?"(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?":"(?:(?!(?:\\/|^)\\.).)*?",r=new Set(e.nocase?["i"]:[]);let o=t.map((t=>{const e=t.map((t=>{if(t instanceof RegExp)for(const e of t.flags.split(""))r.add(e);return"string"==typeof t?t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):t===Bt?Bt:t._src}));return e.forEach(((t,r)=>{const o=e[r+1],i=e[r-1];t===Bt&&i!==Bt&&(void 0===i?void 0!==o&&o!==Bt?e[r+1]="(?:\\/|"+n+"\\/)?"+o:e[r]=n:void 0===o?e[r-1]=i+"(?:\\/|"+n+")?":o!==Bt&&(e[r-1]=i+"(?:\\/|\\/"+n+"\\/)"+o,e[r+1]=Bt))})),e.filter((t=>t!==Bt)).join("/")})).join("|");const[i,s]=t.length>1?["(?:",")"]:["",""];o="^"+i+o+s+"$",this.negate&&(o="^(?!"+o+").+$");try{this.regexp=new RegExp(o,[...r].join(""))}catch(t){this.regexp=!1}return this.regexp}slashSplit(t){return this.preserveMultipleSlashes?t.split("/"):this.isWindows&&/^\/\/[^\/]+/.test(t)?["",...t.split(/\/+/)]:t.split(/\/+/)}match(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.partial;if(this.debug("match",t,this.pattern),this.comment)return!1;if(this.empty)return""===t;if("/"===t&&e)return!0;const n=this.options;this.isWindows&&(t=t.split("\\").join("/"));const r=this.slashSplit(t);this.debug(this.pattern,"split",r);const o=this.set;this.debug(this.pattern,"set",o);let i=r[r.length-1];if(!i)for(let t=r.length-2;!i&&t>=0;t--)i=r[t];for(let t=0;t<o.length;t++){const s=o[t];let a=r;if(n.matchBase&&1===s.length&&(a=[i]),this.matchOne(a,s,e))return!!n.flipNegate||!this.negate}return!n.flipNegate&&this.negate}static defaults(t){return bt.defaults(t).Minimatch}}function qt(t){const e=new Error(`${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}Invalid response: ${t.status} ${t.statusText}`);return e.status=t.status,e.response=t,e}function Ht(t,e){const{status:n}=e;if(401===n&&t.digest)return e;if(n>=400)throw qt(e);return e}function Xt(t,e){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?{data:e,headers:t.headers?V(t.headers):{},status:t.status,statusText:t.statusText}:e}bt.AST=vt,bt.Minimatch=Gt,bt.escape=function(t){let{windowsPathsNoEscape:e=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e?t.replace(/[?*()[\]]/g,"[$&]"):t.replace(/[?*()[\]\\]/g,"\\$&")},bt.unescape=ut;const Zt=(Yt=function(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=tt({url:y(t.remoteURL,f(e)),method:"COPY",headers:{Destination:y(t.remoteURL,f(n)),Overwrite:!1===r.overwrite?"F":"T",Depth:r.shallow?"0":"infinity"}},t,r);return s=function(e){Ht(t,e)},(i=Q(o,t))&&i.then||(i=Promise.resolve(i)),s?i.then(s):i;var i,s},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(Yt.apply(this,t))}catch(t){return Promise.reject(t)}});var Yt,Kt=n(635),Jt=n(829),Qt=n.n(Jt),te=function(t){return t.Array="array",t.Object="object",t.Original="original",t}(te||{});function ee(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:te.Original;const r=Qt().get(t,e);return"array"===n&&!1===Array.isArray(r)?[r]:"object"===n&&Array.isArray(r)?r[0]:r}function ne(t){return new Promise((e=>{e(function(t){const{multistatus:e}=t;if(""===e)return{multistatus:{response:[]}};if(!e)throw new Error("Invalid response: No root multistatus found");const n={multistatus:Array.isArray(e)?e[0]:e};return Qt().set(n,"multistatus.response",ee(n,"multistatus.response",te.Array)),Qt().set(n,"multistatus.response",Qt().get(n,"multistatus.response").map((t=>function(t){const e=Object.assign({},t);return e.status?Qt().set(e,"status",ee(e,"status",te.Object)):(Qt().set(e,"propstat",ee(e,"propstat",te.Object)),Qt().set(e,"propstat.prop",ee(e,"propstat.prop",te.Object))),e}(t)))),n}(new Kt.XMLParser({removeNSPrefix:!0,numberParseOptions:{hex:!0,leadingZeros:!1}}).parse(t)))}))}function re(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{getlastmodified:r=null,getcontentlength:o="0",resourcetype:i=null,getcontenttype:s=null,getetag:a=null}=t,u=i&&"object"==typeof i&&void 0!==i.collection?"directory":"file",c={filename:e,basename:l().basename(e),lastmod:r,size:parseInt(o,10),type:u,etag:"string"==typeof a?a.replace(/"/g,""):null};return"file"===u&&(c.mime=s&&"string"==typeof s?s.split(";")[0]:""),n&&(void 0!==t.displayname&&(t.displayname=String(t.displayname)),c.props=t),c}function oe(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=null;try{t.multistatus.response[0].propstat&&(r=t.multistatus.response[0])}catch(t){}if(!r)throw new Error("Failed getting item stat: bad response");const{propstat:{prop:o,status:i}}=r,[s,a,u]=i.split(" ",3),c=parseInt(a,10);if(c>=400){const t=new Error(`Invalid response: ${c} ${u}`);throw t.status=c,t}return re(o,g(e),n)}function ie(t){switch(String(t)){case"-3":return"unlimited";case"-2":case"-1":return"unknown";default:return parseInt(String(t),10)}}function se(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}const ae=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{details:r=!1}=n,o=tt({url:y(t.remoteURL,f(e)),method:"PROPFIND",headers:{Accept:"text/plain,application/xml",Depth:"0"}},t,n);return se(Q(o,t),(function(n){return Ht(t,n),se(n.text(),(function(t){return se(ne(t),(function(t){const o=oe(t,e,r);return Xt(n,o,r)}))}))}))}));function ue(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}const ce=le((function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=function(t){if(!t||"/"===t)return[];let e=t;const n=[];do{n.push(e),e=l().dirname(e)}while(e&&"/"!==e);return n}(g(e));r.sort(((t,e)=>t.length>e.length?1:e.length>t.length?-1:0));let o=!1;return function(t,e,n){if("function"==typeof t[fe]){var r,o,i,s=t[fe]();function l(t){try{for(;!(r=s.next()).done;)if((t=e(r.value))&&t.then){if(!me(t))return void t.then(l,i||(i=de.bind(null,o=new ge,2)));t=t.v}o?de(o,1,t):o=t}catch(t){de(o||(o=new ge),2,t)}}if(l(),s.return){var a=function(t){try{r.done||s.return()}catch(t){}return t};if(o&&o.then)return o.then(a,(function(t){throw a(t)}));a()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var u=[],c=0;c<t.length;c++)u.push(t[c]);return function(t,e,n){var r,o,i=-1;return function s(a){try{for(;++i<t.length&&(!n||!n());)if((a=e(i))&&a.then){if(!me(a))return void a.then(s,o||(o=de.bind(null,r=new ge,2)));a=a.v}r?de(r,1,a):r=a}catch(t){de(r||(r=new ge),2,t)}}(),r}(u,(function(t){return e(u[t])}),n)}(r,(function(r){return i=function(){return function(n,o){try{var i=ue(ae(t,r),(function(t){if("directory"!==t.type)throw new Error(`Path includes a file: ${e}`)}))}catch(t){return o(t)}return i&&i.then?i.then(void 0,o):i}(0,(function(e){const i=e;return function(){if(404===i.status)return o=!0,pe(ye(t,r,{...n,recursive:!1}));throw e}()}))},(s=function(){if(o)return pe(ye(t,r,{...n,recursive:!1}))}())&&s.then?s.then(i):i();var i,s}),(function(){return!1}))}));function le(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}function he(){}function pe(t,e){if(!e)return t&&t.then?t.then(he):Promise.resolve()}const fe="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function de(t,e,n){if(!t.s){if(n instanceof ge){if(!n.s)return void(n.o=de.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(de.bind(null,t,e),de.bind(null,t,2));t.s=e,t.v=n;const r=t.o;r&&r(t)}}const ge=function(){function t(){}return t.prototype.then=function(e,n){const r=new t,o=this.s;if(o){const t=1&o?e:n;if(t){try{de(r,1,t(this.v))}catch(t){de(r,2,t)}return r}return this}return this.o=function(t){try{const o=t.v;1&t.s?de(r,1,e?e(o):o):n?de(r,1,n(o)):de(r,2,o)}catch(t){de(r,2,t)}},r},t}();function me(t){return t instanceof ge&&1&t.s}const ye=le((function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!0===n.recursive)return ce(t,e,n);const r=tt({url:y(t.remoteURL,(o=f(e),o.endsWith("/")?o:o+"/")),method:"MKCOL"},t,n);var o;return ue(Q(r,t),(function(e){Ht(t,e)}))}));var ve=n(388),be=n.n(ve);const we=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r={};if("object"==typeof n.range&&"number"==typeof n.range.start){let t=`bytes=${n.range.start}-`;"number"==typeof n.range.end&&(t=`${t}${n.range.end}`),r.Range=t}const o=tt({url:y(t.remoteURL,f(e)),method:"GET",headers:r},t,n);return s=function(e){if(Ht(t,e),r.Range&&206!==e.status){const t=new Error(`Invalid response code for partial request: ${e.status}`);throw t.status=e.status,t}return n.callback&&setTimeout((()=>{n.callback(e)}),0),e.body},(i=Q(o,t))&&i.then||(i=Promise.resolve(i)),s?i.then(s):i;var i,s})),xe=()=>{},Ne=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e,n){n.url||(n.url=y(t.remoteURL,f(e)));const r=tt(n,t,{});return i=function(e){return Ht(t,e),e},(o=Q(r,t))&&o.then||(o=Promise.resolve(o)),i?o.then(i):o;var o,i})),Pe=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=tt({url:y(t.remoteURL,f(e)),method:"DELETE"},t,n);return i=function(e){Ht(t,e)},(o=Q(r,t))&&o.then||(o=Promise.resolve(o)),i?o.then(i):o;var o,i})),Ae=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(r,o){try{var i=(s=ae(t,e,n),a=function(){return!0},u?a?a(s):s:(s&&s.then||(s=Promise.resolve(s)),a?s.then(a):s))}catch(t){return o(t)}var s,a,u;return i&&i.then?i.then(void 0,o):i}(0,(function(t){if(404===t.status)return!1;throw t}))}));function Oe(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}const Ee=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=tt({url:y(t.remoteURL,f(e),"/"),method:"PROPFIND",headers:{Accept:"text/plain,application/xml",Depth:n.deep?"infinity":"1"}},t,n);return Oe(Q(r,t),(function(r){return Ht(t,r),Oe(r.text(),(function(o){if(!o)throw new Error("Failed parsing directory contents: Empty response");return Oe(ne(o),(function(o){const i=d(e);let s=function(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const i=l().join(e,"/"),{multistatus:{response:s}}=t,a=s.map((t=>{const e=function(t){try{return t.replace(/^https?:\/\/[^\/]+/,"")}catch(t){throw new u(t,"Failed normalising HREF")}}(t.href),{propstat:{prop:n}}=t;return re(n,"/"===i?decodeURIComponent(g(e)):g(l().relative(decodeURIComponent(i),decodeURIComponent(e))),r)}));return o?a:a.filter((t=>t.basename&&("file"===t.type||t.filename!==n.replace(/\/$/,""))))}(o,d(t.remoteBasePath||t.remotePath),i,n.details,n.includeSelf);return n.glob&&(s=function(t,e){return t.filter((t=>bt(t.filename,e,{matchBase:!0})))}(s,n.glob)),Xt(r,s,n.details)}))}))}))}));function Te(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}const je=Te((function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=tt({url:y(t.remoteURL,f(e)),method:"GET",headers:{Accept:"text/plain"},transformResponse:[Ie]},t,n);return Se(Q(r,t),(function(e){return Ht(t,e),Se(e.text(),(function(t){return Xt(e,t,n.details)}))}))}));function Se(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}const $e=Te((function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=tt({url:y(t.remoteURL,f(e)),method:"GET"},t,n);return Se(Q(r,t),(function(e){let r;return Ht(t,e),function(t,e){var n=t();return n&&n.then?n.then(e):e()}((function(){return Se(e.arrayBuffer(),(function(t){r=t}))}),(function(){return Xt(e,r,n.details)}))}))})),Ce=Te((function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{format:r="binary"}=n;if("binary"!==r&&"text"!==r)throw new u({info:{code:I.InvalidOutputFormat}},`Invalid output format: ${r}`);return"text"===r?je(t,e,n):$e(t,e,n)})),Ie=t=>t;function ke(t){return new Kt.XMLBuilder({attributeNamePrefix:"@_",format:!0,ignoreAttributes:!1,suppressEmptyNode:!0}).build(Re({lockinfo:{"@_xmlns:d":"DAV:",lockscope:{exclusive:{}},locktype:{write:{}},owner:{href:t}}},"d"))}function Re(t,e){const n={...t};for(const t in n)n.hasOwnProperty(t)&&(n[t]&&"object"==typeof n[t]&&-1===t.indexOf(":")?(n[`${e}:${t}`]=Re(n[t],e),delete n[t]):!1===/^@_/.test(t)&&(n[`${e}:${t}`]=n[t],delete n[t]));return n}function Le(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function _e(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}const Me=_e((function(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=tt({url:y(t.remoteURL,f(e)),method:"UNLOCK",headers:{"Lock-Token":n}},t,r);return Le(Q(o,t),(function(e){if(Ht(t,e),204!==e.status&&200!==e.status)throw qt(e)}))})),Ue=_e((function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{refreshToken:r,timeout:o=Fe}=n,i={Accept:"text/plain,application/xml",Timeout:o};r&&(i.If=r);const s=tt({url:y(t.remoteURL,f(e)),method:"LOCK",headers:i,data:ke(t.contactHref)},t,n);return Le(Q(s,t),(function(e){return Ht(t,e),Le(e.text(),(function(t){const n=(i=t,new Kt.XMLParser({removeNSPrefix:!0,parseAttributeValue:!0,parseTagValue:!0}).parse(i)),r=Qt().get(n,"prop.lockdiscovery.activelock.locktoken.href"),o=Qt().get(n,"prop.lockdiscovery.activelock.timeout");var i;if(!r)throw qt(e,"No lock token received: ");return{token:r,serverTimeout:o}}))}))})),Fe="Infinite, Second-4100000000";function De(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}const Be=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=e.path||"/",r=tt({url:y(t.remoteURL,n),method:"PROPFIND",headers:{Accept:"text/plain,application/xml",Depth:"0"}},t,e);return De(Q(r,t),(function(n){return Ht(t,n),De(n.text(),(function(t){return De(ne(t),(function(t){const r=function(t){try{const[e]=t.multistatus.response,{propstat:{prop:{"quota-used-bytes":n,"quota-available-bytes":r}}}=e;return void 0!==n&&void 0!==r?{used:parseInt(String(n),10),available:ie(r)}:null}catch(t){}return null}(t);return Xt(n,r,e.details)}))}))}))}));function We(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}const Ve=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{details:r=!1}=n,o=tt({url:y(t.remoteURL,f(e)),method:"SEARCH",headers:{Accept:"text/plain,application/xml","Content-Type":t.headers["Content-Type"]||"application/xml; charset=utf-8"}},t,n);return We(Q(o,t),(function(n){return Ht(t,n),We(n.text(),(function(t){return We(ne(t),(function(t){const o=function(t,e,n){const r={truncated:!1,results:[]};return r.truncated=t.multistatus.response.some((t=>"507"===(t.status||t.propstat?.status).split(" ",3)?.[1]&&t.href.replace(/\/$/,"").endsWith(f(e).replace(/\/$/,"")))),t.multistatus.response.forEach((t=>{if(void 0===t.propstat)return;const e=t.href.split("/").map(decodeURIComponent).join("/");r.results.push(re(t.propstat.prop,e,n))})),r}(t,e,r);return Xt(n,o,r)}))}))}))})),ze=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=tt({url:y(t.remoteURL,f(e)),method:"MOVE",headers:{Destination:y(t.remoteURL,f(n)),Overwrite:!1===r.overwrite?"F":"T"}},t,r);return s=function(e){Ht(t,e)},(i=Q(o,t))&&i.then||(i=Promise.resolve(i)),s?i.then(s):i;var i,s}));var Ge=n(172);const qe=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{contentLength:o=!0,overwrite:i=!0}=r,s={"Content-Type":"application/octet-stream"};!1===o||(s["Content-Length"]="number"==typeof o?`${o}`:`${function(t){if(H(t))return t.byteLength;if(X(t))return t.length;if("string"==typeof t)return(0,Ge.d)(t);throw new u({info:{code:I.DataTypeNoLength}},"Cannot calculate data length: Invalid type")}(n)}`),i||(s["If-None-Match"]="*");const a=tt({url:y(t.remoteURL,f(e)),method:"PUT",headers:s,data:n},t,r);return l=function(e){try{Ht(t,e)}catch(t){const e=t;if(412!==e.status||i)throw e;return!1}return!0},(c=Q(a,t))&&c.then||(c=Promise.resolve(c)),l?c.then(l):c;var c,l})),He=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}((function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=tt({url:y(t.remoteURL,f(e)),method:"OPTIONS"},t,n);return i=function(e){try{Ht(t,e)}catch(t){throw t}return{compliance:(e.headers.get("DAV")??"").split(",").map((t=>t.trim())),server:e.headers.get("Server")??""}},(o=Q(r,t))&&o.then||(o=Promise.resolve(o)),i?o.then(i):o;var o,i}));function Xe(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}const Ze=Je((function(t,e,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};if(n>r||n<0)throw new u({info:{code:I.InvalidUpdateRange}},`Invalid update range ${n} for partial update`);const s={"Content-Type":"application/octet-stream","Content-Length":""+(r-n+1),"Content-Range":`bytes ${n}-${r}/*`},a=tt({url:y(t.remoteURL,f(e)),method:"PUT",headers:s,data:o},t,i);return Xe(Q(a,t),(function(e){Ht(t,e)}))}));function Ye(t,e){var n=t();return n&&n.then?n.then(e):e(n)}const Ke=Je((function(t,e,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};if(n>r||n<0)throw new u({info:{code:I.InvalidUpdateRange}},`Invalid update range ${n} for partial update`);const s={"Content-Type":"application/x-sabredav-partialupdate","Content-Length":""+(r-n+1),"X-Update-Range":`bytes=${n}-${r}`},a=tt({url:y(t.remoteURL,f(e)),method:"PATCH",headers:s,data:o},t,i);return Xe(Q(a,t),(function(e){Ht(t,e)}))}));function Je(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}const Qe=Je((function(t,e,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return Xe(He(t,e,i),(function(s){let a=!1;return Ye((function(){if(s.compliance.includes("sabredav-partialupdate"))return Xe(Ke(t,e,n,r,o,i),(function(t){return a=!0,t}))}),(function(c){let l=!1;return a?c:Ye((function(){if(s.server.includes("Apache")&&s.compliance.includes("<http://apache.org/dav/propset/fs/1>"))return Xe(Ze(t,e,n,r,o,i),(function(t){return l=!0,t}))}),(function(t){if(l)return t;throw new u({info:{code:I.NotSupported}},"Not supported")}))}))}))})),tn="https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";function en(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{authType:n=null,remoteBasePath:r,contactHref:o=tn,ha1:i,headers:s={},httpAgent:a,httpsAgent:c,password:l,token:h,username:p,withCredentials:d}=e;let g=n;g||(g=p||l?C.Password:C.None);const v={authType:g,remoteBasePath:r,contactHref:o,ha1:i,headers:Object.assign({},s),httpAgent:a,httpsAgent:c,password:l,remotePath:m(t),remoteURL:t,token:h,username:p,withCredentials:d};return k(v,p,l,h,i),{copyFile:(t,e,n)=>Zt(v,t,e,n),createDirectory:(t,e)=>ye(v,t,e),createReadStream:(t,e)=>function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=new(0,be().PassThrough);return we(t,e,n).then((t=>{t.pipe(r)})).catch((t=>{r.emit("error",t)})),r}(v,t,e),createWriteStream:(t,e,n)=>function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:xe;const o=new(0,be().PassThrough),i={};!1===n.overwrite&&(i["If-None-Match"]="*");const s=tt({url:y(t.remoteURL,f(e)),method:"PUT",headers:i,data:o,maxRedirects:0},t,n);return Q(s,t).then((e=>Ht(t,e))).then((t=>{setTimeout((()=>{r(t)}),0)})).catch((t=>{o.emit("error",t)})),o}(v,t,e,n),customRequest:(t,e)=>Ne(v,t,e),deleteFile:(t,e)=>Pe(v,t,e),exists:(t,e)=>Ae(v,t,e),getDirectoryContents:(t,e)=>Ee(v,t,e),getFileContents:(t,e)=>Ce(v,t,e),getFileDownloadLink:t=>function(t,e){let n=y(t.remoteURL,f(e));const r=/^https:/i.test(n)?"https":"http";switch(t.authType){case C.None:break;case C.Password:{const e=O(t.headers.Authorization.replace(/^Basic /i,"").trim());n=n.replace(/^https?:\/\//,`${r}://${e}@`);break}default:throw new u({info:{code:I.LinkUnsupportedAuthType}},`Unsupported auth type for file link: ${t.authType}`)}return n}(v,t),getFileUploadLink:t=>function(t,e){let n=`${y(t.remoteURL,f(e))}?Content-Type=application/octet-stream`;const r=/^https:/i.test(n)?"https":"http";switch(t.authType){case C.None:break;case C.Password:{const e=O(t.headers.Authorization.replace(/^Basic /i,"").trim());n=n.replace(/^https?:\/\//,`${r}://${e}@`);break}default:throw new u({info:{code:I.LinkUnsupportedAuthType}},`Unsupported auth type for file link: ${t.authType}`)}return n}(v,t),getHeaders:()=>Object.assign({},v.headers),getQuota:t=>Be(v,t),lock:(t,e)=>Ue(v,t,e),moveFile:(t,e,n)=>ze(v,t,e,n),putFileContents:(t,e,n)=>qe(v,t,e,n),partialUpdateFileContents:(t,e,n,r,o)=>Qe(v,t,e,n,r,o),getDAVCompliance:t=>He(v,t),search:(t,e)=>Ve(v,t,e),setHeaders:t=>{v.headers=Object.assign({},t)},stat:(t,e)=>ae(v,t,e),unlock:(t,e,n)=>Me(v,t,e,n)}}var nn=r.hT,rn=r.O4,on=r.Kd,sn=r.YK,an=r.UU,un=r.Gu,cn=r.ky,ln=r.h4,hn=r.ch,pn=r.hq,fn=r.i5;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");


vue__WEBPACK_IMPORTED_MODULE_1__["default"].mixin({
  methods: {
    t,
    n
  }
});
const View = vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend(_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
new View().$mount('#webtransfer');
})();

/******/ })()
;
//# sourceMappingURL=main.js.map