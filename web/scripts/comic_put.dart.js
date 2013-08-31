//  ********** Library dart:core **************
//  ********** Natives dart:core **************
Object.prototype.$typeNameOf = function() {
  if ((typeof(window) != 'undefined' && window.constructor.name == 'DOMWindow')
      || typeof(process) != 'undefined') { // fast-path for Chrome and Node
    return this.constructor.name;
  }
  var str = Object.prototype.toString.call(this);
  str = str.substring(8, str.length - 1);
  if (str == 'Window') {
    str = 'DOMWindow';
  } else if (str == 'Document') {
    str = 'HTMLDocument';
  }
  return str;
}
function $throw(e) {
  // If e is not a value, we can use V8's captureStackTrace utility method.
  // TODO(jmesserly): capture the stack trace on other JS engines.
  if (e && (typeof e == 'object') && Error.captureStackTrace) {
    // TODO(jmesserly): this will clobber the e.stack property
    Error.captureStackTrace(e, $throw);
  }
  throw e;
}
Object.prototype.$index = function(i) {
  var proto = Object.getPrototypeOf(this);
  if (proto !== Object) {
    proto.$index = function(i) { return this[i]; }
  }
  return this[i];
}
Array.prototype.$index = function(i) { return this[i]; }
String.prototype.$index = function(i) { return this[i]; }
Object.prototype.$setindex = function(i, value) {
  var proto = Object.getPrototypeOf(this);
  if (proto !== Object) {
    proto.$setindex = function(i, value) { return this[i] = value; }
  }
  return this[i] = value;
}
Array.prototype.$setindex = function(i, value) { return this[i] = value; }
function $wrap_call$1(fn) { return fn; }
function $eq(x, y) {
  if (x == null) return y == null;
  return (typeof(x) == 'number' && typeof(y) == 'number') ||
         (typeof(x) == 'boolean' && typeof(y) == 'boolean') ||
         (typeof(x) == 'string' && typeof(y) == 'string')
    ? x == y : x.$eq(y);
}
// TODO(jimhug): Should this or should it not match equals?
Object.prototype.$eq = function(other) { return this === other; }
function $truncdiv(x, y) {
  if (typeof(x) == 'number' && typeof(y) == 'number') {
    if (y == 0) $throw(new IntegerDivisionByZeroException());
    var tmp = x / y;
    return (tmp < 0) ? Math.ceil(tmp) : Math.floor(tmp);
  } else {
    return x.$truncdiv(y);
  }
}
// ********** Code for Object **************
Object.prototype.get$dynamic = function() {
  return this;
}
Object.prototype.noSuchMethod = function(name, args) {
  $throw(new NoSuchMethodException(this, name, args));
}
Object.prototype.add$1 = function($0) {
  return this.noSuchMethod("add", [$0]);
};
Object.prototype.addEventListener$3 = function($0, $1, $2) {
  return this.noSuchMethod("addEventListener", [$0, $1, $2]);
};
Object.prototype.hashCode$0 = function() {
  return this.noSuchMethod("hashCode", []);
};
Object.prototype.is$Map_dart_core_String$Dynamic = function() {
  return false;
};
Object.prototype.is$html_html_Document = function() {
  return false;
};
Object.prototype.open$2 = function($0, $1) {
  return this.noSuchMethod("open", [$0, $1]);
};
Object.prototype.open$3 = function($0, $1, $2) {
  return this.noSuchMethod("open", [$0, $1, $2]);
};
Object.prototype.open$4 = function($0, $1, $2, $3) {
  return this.noSuchMethod("open", [$0, $1, $2, $3]);
};
Object.prototype.open$5 = function($0, $1, $2, $3, $4) {
  return this.noSuchMethod("open", [$0, $1, $2, $3, $4]);
};
Object.prototype.preventDefault$0 = function() {
  return this.noSuchMethod("preventDefault", []);
};
Object.prototype.query$1 = function($0) {
  return this.noSuchMethod("query", [$0]);
};
Object.prototype.queryAll$1 = function($0) {
  return this.noSuchMethod("queryAll", [$0]);
};
Object.prototype.querySelector$1 = function($0) {
  return this.noSuchMethod("querySelector", [$0]);
};
Object.prototype.querySelectorAll$1 = function($0) {
  return this.noSuchMethod("querySelectorAll", [$0]);
};
Object.prototype.send$0 = function() {
  return this.noSuchMethod("send", []);
};
Object.prototype.send$1 = function($0) {
  return this.noSuchMethod("send", [$0]);
};
Object.prototype.setRequestHeader$2 = function($0, $1) {
  return this.noSuchMethod("setRequestHeader", [$0, $1]);
};
Object.prototype.submit$0 = function() {
  return this.noSuchMethod("submit", []);
};
Object.prototype.toString$0 = function() {
  return this.toString();
};
// ********** Code for NoSuchMethodException **************
function NoSuchMethodException(_receiver, _functionName, _arguments) {
  this._receiver = _receiver;
  this._functionName = _functionName;
  this._arguments = _arguments;
  // Initializers done
}
NoSuchMethodException.prototype.toString = function() {
  var sb = new StringBufferImpl("");
  for (var i = 0;
   i < this._arguments.get$length(); i++) {
    if (i > 0) {
      sb.add(", ");
    }
    sb.add(this._arguments.$index(i));
  }
  sb.add("]");
  return ("NoSuchMethodException - receiver: '" + this._receiver + "' ") + ("function name: '" + this._functionName + "' arguments: [" + sb + "]");
}
NoSuchMethodException.prototype.toString$0 = NoSuchMethodException.prototype.toString;
// ********** Code for ClosureArgumentMismatchException **************
function ClosureArgumentMismatchException() {
  // Initializers done
}
ClosureArgumentMismatchException.prototype.toString = function() {
  return "Closure argument mismatch";
}
ClosureArgumentMismatchException.prototype.toString$0 = ClosureArgumentMismatchException.prototype.toString;
// ********** Code for IllegalArgumentException **************
function IllegalArgumentException(args) {
  this._args = args;
  // Initializers done
}
IllegalArgumentException.prototype.toString = function() {
  return ("Illegal argument(s): " + this._args);
}
IllegalArgumentException.prototype.toString$0 = IllegalArgumentException.prototype.toString;
// ********** Code for EmptyQueueException **************
function EmptyQueueException() {
  // Initializers done
}
EmptyQueueException.prototype.toString = function() {
  return "EmptyQueueException";
}
EmptyQueueException.prototype.toString$0 = EmptyQueueException.prototype.toString;
// ********** Code for UnsupportedOperationException **************
function UnsupportedOperationException(_message) {
  this._message = _message;
  // Initializers done
}
UnsupportedOperationException.prototype.toString = function() {
  return ("UnsupportedOperationException: " + this._message);
}
UnsupportedOperationException.prototype.toString$0 = UnsupportedOperationException.prototype.toString;
// ********** Code for dart_core_Function **************
Function.prototype.to$call$1 = function() {
  this.call$1 = this._genStub(1);
  this.to$call$1 = function() { return this.call$1; };
  return this.call$1;
};
Function.prototype.call$1 = function($0) {
  return this.to$call$1()($0);
};
function to$call$1(f) { return f && f.to$call$1(); }
// ********** Code for top level **************
function dart_core_print(obj) {
  return _print(obj);
}
function _print(obj) {
  if (typeof console == 'object') {
    if (obj) obj = obj.toString();
    console.log(obj);
  } else {
    write(obj);
    write('\n');
  }
}
function _map(itemsAndKeys) {
  var ret = new LinkedHashMapImplementation();
  for (var i = 0;
   i < itemsAndKeys.get$length(); ) {
    ret.$setindex(itemsAndKeys.$index(i++), itemsAndKeys.$index(i++));
  }
  return ret;
}
//  ********** Library dart:coreimpl **************
// ********** Code for ListFactory **************
ListFactory = Array;
ListFactory.prototype.get$length = function() { return this.length; };
ListFactory.prototype.set$length = function(value) { return this.length = value; };
ListFactory.prototype.add = function(value) {
  this.push(value);
}
ListFactory.prototype.clear = function() {
  this.set$length(0);
}
ListFactory.prototype.add$1 = ListFactory.prototype.add;
ListFactory_E = ListFactory;
ListFactory_dart_core_String = ListFactory;
ListFactory_V = ListFactory;
ListFactory__EventListenerWrapper = ListFactory;
// ********** Code for NumImplementation **************
NumImplementation = Number;
NumImplementation.prototype.hashCode = function() {
  'use strict'; return this & 0x1FFFFFFF;
}
NumImplementation.prototype.hashCode$0 = NumImplementation.prototype.hashCode;
// ********** Code for HashMapImplementation **************
function HashMapImplementation() {
  // Initializers done
  this._numberOfEntries = 0;
  this._numberOfDeleted = 0;
  this._loadLimit = HashMapImplementation._computeLoadLimit(8/*HashMapImplementation._INITIAL_CAPACITY*/);
  this._keys = new Array(8/*HashMapImplementation._INITIAL_CAPACITY*/);
  this._values = new Array(8/*HashMapImplementation._INITIAL_CAPACITY*/);
}
HashMapImplementation.prototype.is$Map_dart_core_String$Dynamic = function(){return true};
HashMapImplementation._computeLoadLimit = function(capacity) {
  return $truncdiv((capacity * 3), 4);
}
HashMapImplementation._firstProbe = function(hashCode, length) {
  return hashCode & (length - 1);
}
HashMapImplementation._nextProbe = function(currentProbe, numberOfProbes, length) {
  return (currentProbe + numberOfProbes) & (length - 1);
}
HashMapImplementation.prototype._probeForAdding = function(key) {
  var hash = HashMapImplementation._firstProbe(key.hashCode$0(), this._keys.get$length());
  var numberOfProbes = 1;
  var initialHash = hash;
  var insertionIndex = -1;
  while (true) {
    var existingKey = this._keys.$index(hash);
    if (existingKey == null) {
      if (insertionIndex < 0) return hash;
      return insertionIndex;
    }
    else if ($eq(existingKey, key)) {
      return hash;
    }
    else if ((insertionIndex < 0) && (const$1/*HashMapImplementation._DELETED_KEY*/ === existingKey)) {
      insertionIndex = hash;
    }
    hash = HashMapImplementation._nextProbe(hash, numberOfProbes++, this._keys.get$length());
  }
}
HashMapImplementation.prototype._probeForLookup = function(key) {
  var hash = HashMapImplementation._firstProbe(key.hashCode$0(), this._keys.get$length());
  var numberOfProbes = 1;
  var initialHash = hash;
  while (true) {
    var existingKey = this._keys.$index(hash);
    if (existingKey == null) return -1;
    if ($eq(existingKey, key)) return hash;
    hash = HashMapImplementation._nextProbe(hash, numberOfProbes++, this._keys.get$length());
  }
}
HashMapImplementation.prototype._ensureCapacity = function() {
  var newNumberOfEntries = this._numberOfEntries + 1;
  if (newNumberOfEntries >= this._loadLimit) {
    this._grow(this._keys.get$length() * 2);
    return;
  }
  var capacity = this._keys.get$length();
  var numberOfFreeOrDeleted = capacity - newNumberOfEntries;
  var numberOfFree = numberOfFreeOrDeleted - this._numberOfDeleted;
  if (this._numberOfDeleted > numberOfFree) {
    this._grow(this._keys.get$length());
  }
}
HashMapImplementation._isPowerOfTwo = function(x) {
  return ((x & (x - 1)) == 0);
}
HashMapImplementation.prototype._grow = function(newCapacity) {
  var capacity = this._keys.get$length();
  this._loadLimit = HashMapImplementation._computeLoadLimit(newCapacity);
  var oldKeys = this._keys;
  var oldValues = this._values;
  this._keys = new Array(newCapacity);
  this._values = new Array(newCapacity);
  for (var i = 0;
   i < capacity; i++) {
    var key = oldKeys.$index(i);
    if (key == null || key === const$1/*HashMapImplementation._DELETED_KEY*/) {
      continue;
    }
    var value = oldValues.$index(i);
    var newIndex = this._probeForAdding(key);
    this._keys.$setindex(newIndex, key);
    this._values.$setindex(newIndex, value);
  }
  this._numberOfDeleted = 0;
}
HashMapImplementation.prototype.$setindex = function(key, value) {
  this._ensureCapacity();
  var index = this._probeForAdding(key);
  if ((this._keys.$index(index) == null) || (this._keys.$index(index) === const$1/*HashMapImplementation._DELETED_KEY*/)) {
    this._numberOfEntries++;
  }
  this._keys.$setindex(index, key);
  this._values.$setindex(index, value);
}
HashMapImplementation.prototype.$index = function(key) {
  var index = this._probeForLookup(key);
  if (index < 0) return null;
  return this._values.$index(index);
}
HashMapImplementation.prototype.putIfAbsent = function(key, ifAbsent) {
  var index = this._probeForLookup(key);
  if (index >= 0) return this._values.$index(index);
  var value = ifAbsent();
  this.$setindex(key, value);
  return value;
}
HashMapImplementation.prototype.get$length = function() {
  return this._numberOfEntries;
}
HashMapImplementation.prototype.forEach = function(f) {
  var length = this._keys.get$length();
  for (var i = 0;
   i < length; i++) {
    if ((this._keys.$index(i) != null) && (this._keys.$index(i) !== const$1/*HashMapImplementation._DELETED_KEY*/)) {
      f(this._keys.$index(i), this._values.$index(i));
    }
  }
}
HashMapImplementation.prototype.containsKey = function(key) {
  return (this._probeForLookup(key) != -1);
}
// ********** Code for HashMapImplementation_E$E **************
/** Implements extends for Dart classes on JavaScript prototypes. */
function $inherits(child, parent) {
  if (child.prototype.__proto__) {
    child.prototype.__proto__ = parent.prototype;
  } else {
    function tmp() {};
    tmp.prototype = parent.prototype;
    child.prototype = new tmp();
    child.prototype.constructor = child;
  }
}
$inherits(HashMapImplementation_E$E, HashMapImplementation);
function HashMapImplementation_E$E() {}
HashMapImplementation_E$E.prototype.is$Map_dart_core_String$Dynamic = function(){return true};
// ********** Code for HashMapImplementation_K$DoubleLinkedQueueEntry_KeyValuePair_K$V **************
$inherits(HashMapImplementation_K$DoubleLinkedQueueEntry_KeyValuePair_K$V, HashMapImplementation);
function HashMapImplementation_K$DoubleLinkedQueueEntry_KeyValuePair_K$V() {}
HashMapImplementation_K$DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype.is$Map_dart_core_String$Dynamic = function(){return true};
// ********** Code for _DeletedKeySentinel **************
function _DeletedKeySentinel() {
  // Initializers done
}
// ********** Code for KeyValuePair **************
function KeyValuePair(key, value) {
  this.key = key;
  this.value = value;
  // Initializers done
}
KeyValuePair.prototype.get$value = function() { return this.value; };
KeyValuePair.prototype.set$value = function(value) { return this.value = value; };
// ********** Code for KeyValuePair_K$V **************
$inherits(KeyValuePair_K$V, KeyValuePair);
function KeyValuePair_K$V(key, value) {
  this.key = key;
  this.value = value;
  // Initializers done
}
// ********** Code for LinkedHashMapImplementation **************
function LinkedHashMapImplementation() {
  // Initializers done
  this._map = new HashMapImplementation();
  this._list = new DoubleLinkedQueue_KeyValuePair_K$V();
}
LinkedHashMapImplementation.prototype.is$Map_dart_core_String$Dynamic = function(){return true};
LinkedHashMapImplementation.prototype.$setindex = function(key, value) {
  if (this._map.containsKey(key)) {
    this._map.$index(key).get$element().set$value(value);
  }
  else {
    this._list.addLast(new KeyValuePair_K$V(key, value));
    this._map.$setindex(key, this._list.lastEntry());
  }
}
LinkedHashMapImplementation.prototype.$index = function(key) {
  var entry = this._map.$index(key);
  if (entry == null) return null;
  return entry.get$element().get$value();
}
LinkedHashMapImplementation.prototype.putIfAbsent = function(key, ifAbsent) {
  var value = this.$index(key);
  if ((this.$index(key) == null) && !(this.containsKey(key))) {
    value = ifAbsent();
    this.$setindex(key, value);
  }
  return value;
}
LinkedHashMapImplementation.prototype.forEach = function(f) {
  this._list.forEach(function _(entry) {
    f(entry.key, entry.value);
  }
  );
}
LinkedHashMapImplementation.prototype.containsKey = function(key) {
  return this._map.containsKey(key);
}
LinkedHashMapImplementation.prototype.get$length = function() {
  return this._map.get$length();
}
// ********** Code for DoubleLinkedQueueEntry **************
function DoubleLinkedQueueEntry(e) {
  // Initializers done
  this._element = e;
}
DoubleLinkedQueueEntry.prototype._link = function(p, n) {
  this._next = n;
  this._previous = p;
  p._next = this;
  n._previous = this;
}
DoubleLinkedQueueEntry.prototype.prepend = function(e) {
  new DoubleLinkedQueueEntry_E(e)._link(this._previous, this);
}
DoubleLinkedQueueEntry.prototype._asNonSentinelEntry = function() {
  return this;
}
DoubleLinkedQueueEntry.prototype.previousEntry = function() {
  return this._previous._asNonSentinelEntry();
}
DoubleLinkedQueueEntry.prototype.get$element = function() {
  return this._element;
}
// ********** Code for DoubleLinkedQueueEntry_E **************
$inherits(DoubleLinkedQueueEntry_E, DoubleLinkedQueueEntry);
function DoubleLinkedQueueEntry_E(e) {
  // Initializers done
  this._element = e;
}
DoubleLinkedQueueEntry_E.prototype._link = function(p, n) {
  this._next = n;
  this._previous = p;
  p._next = this;
  n._previous = this;
}
DoubleLinkedQueueEntry_E.prototype.prepend = function(e) {
  new DoubleLinkedQueueEntry_E(e)._link(this._previous, this);
}
DoubleLinkedQueueEntry_E.prototype._asNonSentinelEntry = function() {
  return this;
}
DoubleLinkedQueueEntry_E.prototype.previousEntry = function() {
  return this._previous._asNonSentinelEntry();
}
// ********** Code for DoubleLinkedQueueEntry_KeyValuePair_K$V **************
$inherits(DoubleLinkedQueueEntry_KeyValuePair_K$V, DoubleLinkedQueueEntry);
function DoubleLinkedQueueEntry_KeyValuePair_K$V(e) {
  // Initializers done
  this._element = e;
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype._link = function(p, n) {
  this._next = n;
  this._previous = p;
  p._next = this;
  n._previous = this;
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype.prepend = function(e) {
  new DoubleLinkedQueueEntry_KeyValuePair_K$V(e)._link(this._previous, this);
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype._asNonSentinelEntry = function() {
  return this;
}
DoubleLinkedQueueEntry_KeyValuePair_K$V.prototype.previousEntry = function() {
  return this._previous._asNonSentinelEntry();
}
// ********** Code for _DoubleLinkedQueueEntrySentinel **************
$inherits(_DoubleLinkedQueueEntrySentinel, DoubleLinkedQueueEntry_E);
function _DoubleLinkedQueueEntrySentinel() {
  // Initializers done
  DoubleLinkedQueueEntry_E.call(this, null);
  this._link(this, this);
}
_DoubleLinkedQueueEntrySentinel.prototype._asNonSentinelEntry = function() {
  return null;
}
_DoubleLinkedQueueEntrySentinel.prototype.get$element = function() {
  $throw(const$4/*const EmptyQueueException()*/);
}
// ********** Code for _DoubleLinkedQueueEntrySentinel_E **************
$inherits(_DoubleLinkedQueueEntrySentinel_E, _DoubleLinkedQueueEntrySentinel);
function _DoubleLinkedQueueEntrySentinel_E() {
  // Initializers done
  DoubleLinkedQueueEntry_E.call(this, null);
  this._link(this, this);
}
// ********** Code for _DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V **************
$inherits(_DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V, _DoubleLinkedQueueEntrySentinel);
function _DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V() {
  // Initializers done
  DoubleLinkedQueueEntry_KeyValuePair_K$V.call(this, null);
  this._link(this, this);
}
// ********** Code for DoubleLinkedQueue **************
function DoubleLinkedQueue() {
  // Initializers done
  this._sentinel = new _DoubleLinkedQueueEntrySentinel_E();
}
DoubleLinkedQueue.prototype.addLast = function(value) {
  this._sentinel.prepend(value);
}
DoubleLinkedQueue.prototype.add = function(value) {
  this.addLast(value);
}
DoubleLinkedQueue.prototype.lastEntry = function() {
  return this._sentinel.previousEntry();
}
DoubleLinkedQueue.prototype.get$length = function() {
  var counter = 0;
  this.forEach(function _(element) {
    counter++;
  }
  );
  return counter;
}
DoubleLinkedQueue.prototype.forEach = function(f) {
  var entry = this._sentinel._next;
  while (entry !== this._sentinel) {
    var nextEntry = entry._next;
    f(entry._element);
    entry = nextEntry;
  }
}
DoubleLinkedQueue.prototype.add$1 = DoubleLinkedQueue.prototype.add;
// ********** Code for DoubleLinkedQueue_KeyValuePair_K$V **************
$inherits(DoubleLinkedQueue_KeyValuePair_K$V, DoubleLinkedQueue);
function DoubleLinkedQueue_KeyValuePair_K$V() {
  // Initializers done
  this._sentinel = new _DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V();
}
DoubleLinkedQueue_KeyValuePair_K$V.prototype.addLast = function(value) {
  this._sentinel.prepend(value);
}
DoubleLinkedQueue_KeyValuePair_K$V.prototype.lastEntry = function() {
  return this._sentinel.previousEntry();
}
DoubleLinkedQueue_KeyValuePair_K$V.prototype.forEach = function(f) {
  var entry = this._sentinel._next;
  while (entry !== this._sentinel) {
    var nextEntry = entry._next;
    f(entry._element);
    entry = nextEntry;
  }
}
// ********** Code for StringBufferImpl **************
function StringBufferImpl(content) {
  // Initializers done
  this.clear();
  this.add(content);
}
StringBufferImpl.prototype.get$length = function() {
  return this._length;
}
StringBufferImpl.prototype.add = function(obj) {
  var str = obj.toString();
  if (str == null || str.isEmpty()) return this;
  this._buffer.add(str);
  this._length += str.length;
  return this;
}
StringBufferImpl.prototype.clear = function() {
  this._buffer = new Array();
  this._length = 0;
  return this;
}
StringBufferImpl.prototype.toString = function() {
  if (this._buffer.get$length() == 0) return "";
  if (this._buffer.get$length() == 1) return this._buffer.$index(0);
  var result = StringBase.concatAll(this._buffer);
  this._buffer.clear();
  this._buffer.add(result);
  return result;
}
StringBufferImpl.prototype.add$1 = StringBufferImpl.prototype.add;
StringBufferImpl.prototype.toString$0 = StringBufferImpl.prototype.toString;
// ********** Code for StringBase **************
function StringBase() {}
StringBase.join = function(strings, separator) {
  if (strings.get$length() == 0) return '';
  var s = strings.$index(0);
  for (var i = 1;
   i < strings.get$length(); i++) {
    s = s + separator + strings.$index(i);
  }
  return s;
}
StringBase.concatAll = function(strings) {
  return StringBase.join(strings, "");
}
// ********** Code for StringImplementation **************
StringImplementation = String;
StringImplementation.prototype.get$length = function() { return this.length; };
StringImplementation.prototype.isEmpty = function() {
  return this.length == 0;
}
StringImplementation.prototype.hashCode = function() {
      'use strict';
      var hash = 0;
      for (var i = 0; i < this.length; i++) {
        hash = 0x1fffffff & (hash + this.charCodeAt(i));
        hash = 0x1fffffff & (hash + ((0x0007ffff & hash) << 10));
        hash ^= hash >> 6;
      }

      hash = 0x1fffffff & (hash + (0x03ffffff & hash) << 3);
      hash ^= hash >> 11;
      return 0x1fffffff & (hash + (0x00003fff & hash) << 15);
}
StringImplementation.prototype.hashCode$0 = StringImplementation.prototype.hashCode;
// ********** Code for _Worker **************
// ********** Code for _ArgumentMismatchException **************
$inherits(_ArgumentMismatchException, ClosureArgumentMismatchException);
function _ArgumentMismatchException(_message) {
  this._dart_coreimpl_message = _message;
  // Initializers done
  ClosureArgumentMismatchException.call(this);
}
_ArgumentMismatchException.prototype.toString = function() {
  return ("Closure argument mismatch: " + this._dart_coreimpl_message);
}
_ArgumentMismatchException.prototype.toString$0 = _ArgumentMismatchException.prototype.toString;
// ********** Code for _FunctionImplementation **************
_FunctionImplementation = Function;
_FunctionImplementation.prototype._genStub = function(argsLength, names) {
      // Fast path #1: if no named arguments and arg count matches
      if (this.length == argsLength && !names) {
        return this;
      }

      var paramsNamed = this.$optional ? (this.$optional.length / 2) : 0;
      var paramsBare = this.length - paramsNamed;
      var argsNamed = names ? names.length : 0;
      var argsBare = argsLength - argsNamed;

      // Check we got the right number of arguments
      if (argsBare < paramsBare || argsLength > this.length ||
          argsNamed > paramsNamed) {
        return function() {
          $throw(new _ArgumentMismatchException(
            'Wrong number of arguments to function. Expected ' + paramsBare +
            ' positional arguments and at most ' + paramsNamed +
            ' named arguments, but got ' + argsBare +
            ' positional arguments and ' + argsNamed + ' named arguments.'));
        };
      }

      // First, fill in all of the default values
      var p = new Array(paramsBare);
      if (paramsNamed) {
        p = p.concat(this.$optional.slice(paramsNamed));
      }
      // Fill in positional args
      var a = new Array(argsLength);
      for (var i = 0; i < argsBare; i++) {
        p[i] = a[i] = '$' + i;
      }
      // Then overwrite with supplied values for optional args
      var lastParameterIndex;
      var namesInOrder = true;
      for (var i = 0; i < argsNamed; i++) {
        var name = names[i];
        a[i + argsBare] = name;
        var j = this.$optional.indexOf(name);
        if (j < 0 || j >= paramsNamed) {
          return function() {
            $throw(new _ArgumentMismatchException(
              'Named argument "' + name + '" was not expected by function.' +
              ' Did you forget to mark the function parameter [optional]?'));
          };
        } else if (lastParameterIndex && lastParameterIndex > j) {
          namesInOrder = false;
        }
        p[j + paramsBare] = name;
        lastParameterIndex = j;
      }

      if (this.length == argsLength && namesInOrder) {
        // Fast path #2: named arguments, but they're in order and all supplied.
        return this;
      }

      // Note: using Function instead of 'eval' to get a clean scope.
      // TODO(jmesserly): evaluate the performance of these stubs.
      var f = 'function(' + a.join(',') + '){return $f(' + p.join(',') + ');}';
      return new Function('$f', 'return ' + f + '').call(null, this);
    
}
// ********** Code for top level **************
//  ********** Library dom **************
//  ********** Natives dom_frog.js **************
// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

// TODO(jmesserly): we need to find a way to avoid conflicts with other
// generated "typeName" fields. Ideally we wouldn't be patching 'Object' here.
Object.prototype.get$typeName = Object.prototype.$typeNameOf;
// ********** Code for Window **************
// ********** Code for AbstractWorker **************
function $dynamic(name) {
  var f = Object.prototype[name];
  if (f && f.methods) return f.methods;

  var methods = {};
  if (f) methods.Object = f;
  function $dynamicBind() {
    // Find the target method
    var obj = this;
    var tag = obj.$typeNameOf();
    var method = methods[tag];
    if (!method) {
      var table = $dynamicMetadata;
      for (var i = 0; i < table.length; i++) {
        var entry = table[i];
        if (entry.map.hasOwnProperty(tag)) {
          method = methods[entry.tag];
          if (method) break;
        }
      }
    }
    method = method || methods.Object;
    // Patch the prototype, but don't overwrite an existing stub, like
    // the one on Object.prototype.
    var proto = Object.getPrototypeOf(obj);
    if (!proto.hasOwnProperty(name)) proto[name] = method;

    return method.apply(this, Array.prototype.slice.call(arguments));
  };
  $dynamicBind.methods = methods;
  Object.prototype[name] = $dynamicBind;
  return methods;
}
if (typeof $dynamicMetadata == 'undefined') $dynamicMetadata = [];

function $dynamicSetMetadata(inputTable) {
  // TODO: Deal with light isolates.
  var table = [];
  for (var i = 0; i < inputTable.length; i++) {
    var tag = inputTable[i][0];
    var tags = inputTable[i][1];
    var map = {};
    var tagNames = tags.split('|');
    for (var j = 0; j < tagNames.length; j++) {
      map[tagNames[j]] = true;
    }
    table.push({tag: tag, tags: tags, map: map});
  }
  $dynamicMetadata = table;
}
$dynamic("get$dartObjectLocalStorage").AbstractWorker = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AbstractWorker = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").AbstractWorker = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for ArrayBuffer **************
$dynamic("get$dartObjectLocalStorage").ArrayBuffer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ArrayBuffer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for ArrayBufferView **************
$dynamic("get$dartObjectLocalStorage").ArrayBufferView = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ArrayBufferView = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_Attr **************
$dynamic("get$value").Attr = function() { return this.value; };
$dynamic("set$value").Attr = function(value) { return this.value = value; };
// ********** Code for AudioBuffer **************
$dynamic("get$length").AudioBuffer = function() { return this.length; };
$dynamic("set$length").AudioBuffer = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").AudioBuffer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AudioBuffer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for AudioBufferSourceNode **************
// ********** Code for AudioChannelMerger **************
// ********** Code for AudioChannelSplitter **************
// ********** Code for AudioContext **************
$dynamic("get$dartObjectLocalStorage").AudioContext = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AudioContext = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for AudioDestinationNode **************
// ********** Code for AudioGain **************
// ********** Code for AudioGainNode **************
// ********** Code for AudioListener **************
$dynamic("get$dartObjectLocalStorage").AudioListener = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AudioListener = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for AudioNode **************
$dynamic("get$dartObjectLocalStorage").AudioNode = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AudioNode = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for AudioPannerNode **************
// ********** Code for AudioParam **************
$dynamic("get$value").AudioParam = function() { return this.value; };
$dynamic("set$value").AudioParam = function(value) { return this.value = value; };
$dynamic("get$dartObjectLocalStorage").AudioParam = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").AudioParam = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for AudioProcessingEvent **************
// ********** Code for AudioSourceNode **************
// ********** Code for BarInfo **************
$dynamic("get$dartObjectLocalStorage").BarInfo = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").BarInfo = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for BeforeLoadEvent **************
// ********** Code for BiquadFilterNode **************
// ********** Code for Blob **************
$dynamic("get$dartObjectLocalStorage").Blob = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Blob = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CDATASection **************
// ********** Code for CSSCharsetRule **************
// ********** Code for CSSFontFaceRule **************
// ********** Code for CSSImportRule **************
// ********** Code for CSSMediaRule **************
// ********** Code for CSSPageRule **************
// ********** Code for CSSPrimitiveValue **************
// ********** Code for CSSRule **************
CSSRule.prototype.get$dartObjectLocalStorage = function() { return this.dartObjectLocalStorage; };
CSSRule.prototype.set$dartObjectLocalStorage = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CSSRuleList **************
$dynamic("get$length").CSSRuleList = function() { return this.length; };
$dynamic("set$length").CSSRuleList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").CSSRuleList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CSSRuleList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CSSStyleDeclaration **************
$dynamic("get$length").CSSStyleDeclaration = function() { return this.length; };
$dynamic("set$length").CSSStyleDeclaration = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").CSSStyleDeclaration = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CSSStyleDeclaration = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CSSStyleRule **************
// ********** Code for CSSStyleSheet **************
// ********** Code for CSSUnknownRule **************
// ********** Code for CSSValue **************
$dynamic("get$dartObjectLocalStorage").CSSValue = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CSSValue = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CSSValueList **************
$dynamic("get$length").CSSValueList = function() { return this.length; };
$dynamic("set$length").CSSValueList = function(value) { return this.length = value; };
// ********** Code for CanvasGradient **************
$dynamic("get$dartObjectLocalStorage").CanvasGradient = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CanvasGradient = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CanvasPattern **************
$dynamic("get$dartObjectLocalStorage").CanvasPattern = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CanvasPattern = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CanvasPixelArray **************
$dynamic("get$length").CanvasPixelArray = function() { return this.length; };
$dynamic("set$length").CanvasPixelArray = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").CanvasPixelArray = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CanvasPixelArray = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CanvasRenderingContext **************
$dynamic("get$dartObjectLocalStorage").CanvasRenderingContext = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").CanvasRenderingContext = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CanvasRenderingContext2D **************
// ********** Code for CharacterData **************
CharacterData.prototype.get$length = function() { return this.length; };
CharacterData.prototype.set$length = function(value) { return this.length = value; };
// ********** Code for ClientRect **************
$dynamic("get$dartObjectLocalStorage").ClientRect = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ClientRect = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for ClientRectList **************
$dynamic("get$length").ClientRectList = function() { return this.length; };
$dynamic("set$length").ClientRectList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").ClientRectList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ClientRectList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Clipboard **************
$dynamic("get$dartObjectLocalStorage").Clipboard = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Clipboard = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CloseEvent **************
// ********** Code for Comment **************
// ********** Code for CompositionEvent **************
// ********** Code for Console **************
Console = (typeof console == 'undefined' ? {} : console);
Console.get$dartObjectLocalStorage = function() { return this.dartObjectLocalStorage; };
Console.set$dartObjectLocalStorage = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for ConvolverNode **************
// ********** Code for Coordinates **************
$dynamic("get$dartObjectLocalStorage").Coordinates = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Coordinates = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Counter **************
$dynamic("get$dartObjectLocalStorage").Counter = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Counter = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Crypto **************
$dynamic("get$dartObjectLocalStorage").Crypto = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Crypto = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for CustomEvent **************
// ********** Code for DOMApplicationCache **************
$dynamic("get$dartObjectLocalStorage").DOMApplicationCache = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMApplicationCache = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").DOMApplicationCache = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for DOMException **************
$dynamic("get$dartObjectLocalStorage").DOMException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").DOMException = function() {
  return this.toString();
};
// ********** Code for DOMFileSystem **************
$dynamic("get$dartObjectLocalStorage").DOMFileSystem = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMFileSystem = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMFileSystemSync **************
$dynamic("get$dartObjectLocalStorage").DOMFileSystemSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMFileSystemSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMFormData **************
$dynamic("get$dartObjectLocalStorage").DOMFormData = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMFormData = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_DOMImplementation **************
$dynamic("get$dartObjectLocalStorage").DOMImplementation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMImplementation = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMMimeType **************
$dynamic("get$dartObjectLocalStorage").DOMMimeType = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMMimeType = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMMimeTypeArray **************
$dynamic("get$length").DOMMimeTypeArray = function() { return this.length; };
$dynamic("set$length").DOMMimeTypeArray = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").DOMMimeTypeArray = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMMimeTypeArray = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMParser **************
$dynamic("get$dartObjectLocalStorage").DOMParser = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMParser = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMPlugin **************
$dynamic("get$length").DOMPlugin = function() { return this.length; };
$dynamic("set$length").DOMPlugin = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").DOMPlugin = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMPlugin = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMPluginArray **************
$dynamic("get$length").DOMPluginArray = function() { return this.length; };
$dynamic("set$length").DOMPluginArray = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").DOMPluginArray = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMPluginArray = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DOMSelection **************
$dynamic("get$dartObjectLocalStorage").DOMSelection = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMSelection = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").DOMSelection = function() {
  return this.toString();
};
// ********** Code for DOMSettableTokenList **************
$dynamic("get$value").DOMSettableTokenList = function() { return this.value; };
$dynamic("set$value").DOMSettableTokenList = function(value) { return this.value = value; };
// ********** Code for DOMTokenList **************
$dynamic("get$length").DOMTokenList = function() { return this.length; };
$dynamic("set$length").DOMTokenList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").DOMTokenList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMTokenList = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("add$1").DOMTokenList = function($0) {
  return this.add($0);
};
$dynamic("toString$0").DOMTokenList = function() {
  return this.toString();
};
// ********** Code for DOMURL **************
$dynamic("get$dartObjectLocalStorage").DOMURL = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMURL = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_DOMWindow **************
$dynamic("get$length").DOMWindow = function() { return this.length; };
$dynamic("set$length").DOMWindow = function(value) { return this.length = value; };
$dynamic("get$open").DOMWindow = function() {
  return this.open.bind(this);
}
$dynamic("get$dartObjectLocalStorage").DOMWindow = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DOMWindow = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").DOMWindow = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("open$2").DOMWindow = function($0, $1) {
  return this.open($0, $1);
};
$dynamic("open$3").DOMWindow = function($0, $1, $2) {
  return this.open($0, $1, $2);
};
// ********** Code for DataTransferItem **************
$dynamic("get$dartObjectLocalStorage").DataTransferItem = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DataTransferItem = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DataTransferItemList **************
$dynamic("get$length").DataTransferItemList = function() { return this.length; };
$dynamic("set$length").DataTransferItemList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").DataTransferItemList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DataTransferItemList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DataView **************
// ********** Code for dom_Database **************
$dynamic("get$dartObjectLocalStorage").Database = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Database = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_DatabaseSync **************
$dynamic("get$dartObjectLocalStorage").DatabaseSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DatabaseSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_DedicatedWorkerContext **************
// ********** Code for DelayNode **************
// ********** Code for DeviceMotionEvent **************
// ********** Code for DeviceOrientationEvent **************
// ********** Code for DirectoryEntry **************
// ********** Code for DirectoryEntrySync **************
// ********** Code for DirectoryReader **************
$dynamic("get$dartObjectLocalStorage").DirectoryReader = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DirectoryReader = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for DirectoryReaderSync **************
$dynamic("get$dartObjectLocalStorage").DirectoryReaderSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").DirectoryReaderSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Document **************
Document.prototype.get$documentElement = function() { return this.documentElement; };
Document.prototype.set$documentElement = function(value) { return this.documentElement = value; };
Document.prototype.querySelector$1 = function($0) {
  return this.querySelector($0);
};
Document.prototype.querySelectorAll$1 = function($0) {
  return this.querySelectorAll($0);
};
// ********** Code for DocumentFragment **************
$dynamic("querySelector$1").DocumentFragment = function($0) {
  return this.querySelector($0);
};
$dynamic("querySelectorAll$1").DocumentFragment = function($0) {
  return this.querySelectorAll($0);
};
// ********** Code for dom_DocumentType **************
// ********** Code for DynamicsCompressorNode **************
// ********** Code for Element **************
Element.prototype.querySelector$1 = function($0) {
  return this.querySelector($0);
};
Element.prototype.querySelectorAll$1 = function($0) {
  return this.querySelectorAll($0);
};
// ********** Code for ElementTimeControl **************
$dynamic("get$dartObjectLocalStorage").ElementTimeControl = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ElementTimeControl = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_ElementTraversal **************
$dynamic("get$dartObjectLocalStorage").ElementTraversal = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ElementTraversal = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Entity **************
// ********** Code for EntityReference **************
// ********** Code for Entry **************
$dynamic("get$dartObjectLocalStorage").Entry = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Entry = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for EntryArray **************
$dynamic("get$length").EntryArray = function() { return this.length; };
$dynamic("set$length").EntryArray = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").EntryArray = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EntryArray = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for EntryArraySync **************
$dynamic("get$length").EntryArraySync = function() { return this.length; };
$dynamic("set$length").EntryArraySync = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").EntryArraySync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EntryArraySync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for EntrySync **************
$dynamic("get$dartObjectLocalStorage").EntrySync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EntrySync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for ErrorEvent **************
// ********** Code for Event **************
Event.prototype.get$target = function() { return this.target; };
Event.prototype.set$target = function(value) { return this.target = value; };
Event.prototype.get$dartObjectLocalStorage = function() { return this.dartObjectLocalStorage; };
Event.prototype.set$dartObjectLocalStorage = function(value) { return this.dartObjectLocalStorage = value; };
Event.prototype.preventDefault$0 = function() {
  return this.preventDefault();
};
// ********** Code for EventException **************
$dynamic("get$dartObjectLocalStorage").EventException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EventException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").EventException = function() {
  return this.toString();
};
// ********** Code for EventSource **************
$dynamic("get$dartObjectLocalStorage").EventSource = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EventSource = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").EventSource = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for EventTarget **************
$dynamic("get$dartObjectLocalStorage").EventTarget = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").EventTarget = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").EventTarget = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for File **************
// ********** Code for FileEntry **************
// ********** Code for FileEntrySync **************
// ********** Code for FileError **************
$dynamic("get$dartObjectLocalStorage").FileError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for FileException **************
$dynamic("get$dartObjectLocalStorage").FileException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").FileException = function() {
  return this.toString();
};
// ********** Code for FileList **************
$dynamic("get$length").FileList = function() { return this.length; };
$dynamic("set$length").FileList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").FileList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for FileReader **************
$dynamic("get$dartObjectLocalStorage").FileReader = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileReader = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for FileReaderSync **************
$dynamic("get$dartObjectLocalStorage").FileReaderSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileReaderSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for FileWriter **************
$dynamic("get$length").FileWriter = function() { return this.length; };
$dynamic("set$length").FileWriter = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").FileWriter = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileWriter = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for FileWriterSync **************
$dynamic("get$length").FileWriterSync = function() { return this.length; };
$dynamic("set$length").FileWriterSync = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").FileWriterSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").FileWriterSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Float32Array **************
$dynamic("get$length").Float32Array = function() { return this.length; };
$dynamic("set$length").Float32Array = function(value) { return this.length = value; };
// ********** Code for Float64Array **************
$dynamic("get$length").Float64Array = function() { return this.length; };
$dynamic("set$length").Float64Array = function(value) { return this.length = value; };
// ********** Code for Geolocation **************
$dynamic("get$dartObjectLocalStorage").Geolocation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Geolocation = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Geoposition **************
$dynamic("get$dartObjectLocalStorage").Geoposition = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Geoposition = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for HTMLAllCollection **************
$dynamic("get$length").HTMLAllCollection = function() { return this.length; };
$dynamic("set$length").HTMLAllCollection = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").HTMLAllCollection = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").HTMLAllCollection = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_HTMLAnchorElement **************
$dynamic("get$target").HTMLAnchorElement = function() { return this.target; };
$dynamic("set$target").HTMLAnchorElement = function(value) { return this.target = value; };
$dynamic("toString$0").HTMLAnchorElement = function() {
  return this.toString();
};
// ********** Code for dom_HTMLAppletElement **************
// ********** Code for dom_HTMLAreaElement **************
$dynamic("get$target").HTMLAreaElement = function() { return this.target; };
$dynamic("set$target").HTMLAreaElement = function(value) { return this.target = value; };
// ********** Code for dom_HTMLAudioElement **************
// ********** Code for dom_HTMLBRElement **************
// ********** Code for dom_HTMLBaseElement **************
$dynamic("get$target").HTMLBaseElement = function() { return this.target; };
$dynamic("set$target").HTMLBaseElement = function(value) { return this.target = value; };
// ********** Code for dom_HTMLBaseFontElement **************
// ********** Code for dom_HTMLBodyElement **************
// ********** Code for dom_HTMLButtonElement **************
$dynamic("get$value").HTMLButtonElement = function() { return this.value; };
$dynamic("set$value").HTMLButtonElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLCanvasElement **************
// ********** Code for HTMLCollection **************
HTMLCollection.prototype.get$length = function() { return this.length; };
HTMLCollection.prototype.set$length = function(value) { return this.length = value; };
HTMLCollection.prototype.get$dartObjectLocalStorage = function() { return this.dartObjectLocalStorage; };
HTMLCollection.prototype.set$dartObjectLocalStorage = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_HTMLDListElement **************
// ********** Code for dom_HTMLDataListElement **************
// ********** Code for dom_HTMLDetailsElement **************
$dynamic("get$open").HTMLDetailsElement = function() { return this.open; };
$dynamic("set$open").HTMLDetailsElement = function(value) { return this.open = value; };
$dynamic("open$2").HTMLDetailsElement = function($0, $1) {
  return this.open($0, $1);
};
$dynamic("open$4").HTMLDetailsElement = function($0, $1, $2, $3) {
  return this.open($0, $1, $2, $3);
};
$dynamic("open$5").HTMLDetailsElement = function($0, $1, $2, $3, $4) {
  return this.open($0, $1, $2, $3, $4);
};
// ********** Code for dom_HTMLDirectoryElement **************
// ********** Code for dom_HTMLDivElement **************
// ********** Code for dom_HTMLDocument **************
$dynamic("get$open").HTMLDocument = function() {
  return this.open.bind(this);
}
// ********** Code for HTMLElement **************
// ********** Code for dom_HTMLEmbedElement **************
// ********** Code for dom_HTMLFieldSetElement **************
// ********** Code for dom_HTMLFontElement **************
// ********** Code for dom_HTMLFormElement **************
$dynamic("get$length").HTMLFormElement = function() { return this.length; };
$dynamic("set$length").HTMLFormElement = function(value) { return this.length = value; };
$dynamic("get$target").HTMLFormElement = function() { return this.target; };
$dynamic("set$target").HTMLFormElement = function(value) { return this.target = value; };
$dynamic("get$submit").HTMLFormElement = function() {
  return this.submit.bind(this);
}
$dynamic("submit$0").HTMLFormElement = function() {
  return this.submit();
};
// ********** Code for dom_HTMLFrameElement **************
// ********** Code for dom_HTMLFrameSetElement **************
// ********** Code for dom_HTMLHRElement **************
// ********** Code for dom_HTMLHeadElement **************
// ********** Code for dom_HTMLHeadingElement **************
// ********** Code for dom_HTMLHtmlElement **************
// ********** Code for dom_HTMLIFrameElement **************
// ********** Code for dom_HTMLImageElement **************
// ********** Code for HTMLInputElement **************
HTMLInputElement.prototype.get$value = function() { return this.value; };
HTMLInputElement.prototype.set$value = function(value) { return this.value = value; };
// ********** Code for dom_HTMLIsIndexElement **************
// ********** Code for dom_HTMLKeygenElement **************
// ********** Code for dom_HTMLLIElement **************
$dynamic("get$value").HTMLLIElement = function() { return this.value; };
$dynamic("set$value").HTMLLIElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLLabelElement **************
// ********** Code for dom_HTMLLegendElement **************
// ********** Code for dom_HTMLLinkElement **************
$dynamic("get$target").HTMLLinkElement = function() { return this.target; };
$dynamic("set$target").HTMLLinkElement = function(value) { return this.target = value; };
// ********** Code for dom_HTMLMapElement **************
// ********** Code for dom_HTMLMarqueeElement **************
// ********** Code for HTMLMediaElement **************
// ********** Code for dom_HTMLMenuElement **************
// ********** Code for dom_HTMLMetaElement **************
// ********** Code for dom_HTMLMeterElement **************
$dynamic("get$value").HTMLMeterElement = function() { return this.value; };
$dynamic("set$value").HTMLMeterElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLModElement **************
// ********** Code for dom_HTMLOListElement **************
// ********** Code for dom_HTMLObjectElement **************
// ********** Code for dom_HTMLOptGroupElement **************
// ********** Code for dom_HTMLOptionElement **************
$dynamic("get$value").HTMLOptionElement = function() { return this.value; };
$dynamic("set$value").HTMLOptionElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLOptionsCollection **************
$dynamic("get$length").HTMLOptionsCollection = function() { return this.length; };
$dynamic("set$length").HTMLOptionsCollection = function(value) { return this.length = value; };
// ********** Code for dom_HTMLOutputElement **************
$dynamic("get$value").HTMLOutputElement = function() { return this.value; };
$dynamic("set$value").HTMLOutputElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLParagraphElement **************
// ********** Code for dom_HTMLParamElement **************
$dynamic("get$value").HTMLParamElement = function() { return this.value; };
$dynamic("set$value").HTMLParamElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLPreElement **************
// ********** Code for dom_HTMLProgressElement **************
$dynamic("get$value").HTMLProgressElement = function() { return this.value; };
$dynamic("set$value").HTMLProgressElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLQuoteElement **************
// ********** Code for dom_HTMLScriptElement **************
// ********** Code for dom_HTMLSelectElement **************
$dynamic("get$length").HTMLSelectElement = function() { return this.length; };
$dynamic("set$length").HTMLSelectElement = function(value) { return this.length = value; };
$dynamic("get$value").HTMLSelectElement = function() { return this.value; };
$dynamic("set$value").HTMLSelectElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLSourceElement **************
// ********** Code for dom_HTMLSpanElement **************
// ********** Code for dom_HTMLStyleElement **************
// ********** Code for dom_HTMLTableCaptionElement **************
// ********** Code for dom_HTMLTableCellElement **************
// ********** Code for dom_HTMLTableColElement **************
// ********** Code for dom_HTMLTableElement **************
// ********** Code for dom_HTMLTableRowElement **************
// ********** Code for dom_HTMLTableSectionElement **************
// ********** Code for dom_HTMLTextAreaElement **************
$dynamic("get$value").HTMLTextAreaElement = function() { return this.value; };
$dynamic("set$value").HTMLTextAreaElement = function(value) { return this.value = value; };
// ********** Code for dom_HTMLTitleElement **************
// ********** Code for dom_HTMLTrackElement **************
// ********** Code for dom_HTMLUListElement **************
// ********** Code for dom_HTMLUnknownElement **************
// ********** Code for dom_HTMLVideoElement **************
// ********** Code for HashChangeEvent **************
// ********** Code for HighPass2FilterNode **************
// ********** Code for History **************
$dynamic("get$length").History = function() { return this.length; };
$dynamic("set$length").History = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").History = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").History = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBAny **************
$dynamic("get$dartObjectLocalStorage").IDBAny = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBAny = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBCursor **************
$dynamic("get$dartObjectLocalStorage").IDBCursor = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBCursor = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBCursorWithValue **************
$dynamic("get$value").IDBCursorWithValue = function() { return this.value; };
$dynamic("set$value").IDBCursorWithValue = function(value) { return this.value = value; };
// ********** Code for IDBDatabase **************
$dynamic("get$dartObjectLocalStorage").IDBDatabase = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBDatabase = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").IDBDatabase = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for IDBDatabaseError **************
$dynamic("get$dartObjectLocalStorage").IDBDatabaseError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBDatabaseError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBDatabaseException **************
$dynamic("get$dartObjectLocalStorage").IDBDatabaseException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBDatabaseException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").IDBDatabaseException = function() {
  return this.toString();
};
// ********** Code for IDBFactory **************
$dynamic("get$open").IDBFactory = function() {
  return this.open.bind(this);
}
$dynamic("get$dartObjectLocalStorage").IDBFactory = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBFactory = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBIndex **************
$dynamic("get$dartObjectLocalStorage").IDBIndex = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBIndex = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBKey **************
$dynamic("get$dartObjectLocalStorage").IDBKey = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBKey = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBKeyRange **************
$dynamic("get$dartObjectLocalStorage").IDBKeyRange = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBKeyRange = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for IDBObjectStore **************
$dynamic("get$dartObjectLocalStorage").IDBObjectStore = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBObjectStore = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("add$1").IDBObjectStore = function($0) {
  return this.add($0);
};
// ********** Code for IDBRequest **************
$dynamic("get$dartObjectLocalStorage").IDBRequest = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBRequest = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").IDBRequest = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for IDBTransaction **************
$dynamic("get$dartObjectLocalStorage").IDBTransaction = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").IDBTransaction = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").IDBTransaction = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for IDBVersionChangeEvent **************
// ********** Code for IDBVersionChangeRequest **************
// ********** Code for ImageData **************
$dynamic("get$dartObjectLocalStorage").ImageData = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ImageData = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_InjectedScriptHost **************
$dynamic("get$dartObjectLocalStorage").InjectedScriptHost = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").InjectedScriptHost = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_InspectorFrontendHost **************
$dynamic("get$dartObjectLocalStorage").InspectorFrontendHost = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").InspectorFrontendHost = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Int16Array **************
$dynamic("get$length").Int16Array = function() { return this.length; };
$dynamic("set$length").Int16Array = function(value) { return this.length = value; };
// ********** Code for Int32Array **************
$dynamic("get$length").Int32Array = function() { return this.length; };
$dynamic("set$length").Int32Array = function(value) { return this.length = value; };
// ********** Code for Int8Array **************
$dynamic("get$length").Int8Array = function() { return this.length; };
$dynamic("set$length").Int8Array = function(value) { return this.length = value; };
// ********** Code for JavaScriptAudioNode **************
// ********** Code for dom_JavaScriptCallFrame **************
$dynamic("get$dartObjectLocalStorage").JavaScriptCallFrame = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").JavaScriptCallFrame = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for KeyboardEvent **************
// ********** Code for Location **************
$dynamic("get$dartObjectLocalStorage").Location = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Location = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").Location = function() {
  return this.toString();
};
// ********** Code for LowPass2FilterNode **************
// ********** Code for MediaElementAudioSourceNode **************
// ********** Code for MediaError **************
$dynamic("get$dartObjectLocalStorage").MediaError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MediaError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MediaList **************
$dynamic("get$length").MediaList = function() { return this.length; };
$dynamic("set$length").MediaList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").MediaList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MediaList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MediaQueryList **************
$dynamic("get$dartObjectLocalStorage").MediaQueryList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MediaQueryList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MediaQueryListListener **************
$dynamic("get$dartObjectLocalStorage").MediaQueryListListener = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MediaQueryListListener = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_MemoryInfo **************
$dynamic("get$dartObjectLocalStorage").MemoryInfo = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MemoryInfo = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MessageChannel **************
$dynamic("get$dartObjectLocalStorage").MessageChannel = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MessageChannel = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MessageEvent **************
// ********** Code for MessagePort **************
$dynamic("get$dartObjectLocalStorage").MessagePort = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MessagePort = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").MessagePort = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for Metadata **************
$dynamic("get$dartObjectLocalStorage").Metadata = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Metadata = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MouseEvent **************
// ********** Code for MutationCallback **************
$dynamic("get$dartObjectLocalStorage").MutationCallback = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MutationCallback = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for MutationEvent **************
// ********** Code for MutationRecord **************
$dynamic("get$target").MutationRecord = function() { return this.target; };
$dynamic("set$target").MutationRecord = function(value) { return this.target = value; };
$dynamic("get$dartObjectLocalStorage").MutationRecord = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").MutationRecord = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_NamedNodeMap **************
$dynamic("get$length").NamedNodeMap = function() { return this.length; };
$dynamic("set$length").NamedNodeMap = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").NamedNodeMap = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NamedNodeMap = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Navigator **************
$dynamic("get$dartObjectLocalStorage").Navigator = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Navigator = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for NavigatorUserMediaError **************
$dynamic("get$dartObjectLocalStorage").NavigatorUserMediaError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NavigatorUserMediaError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for NavigatorUserMediaSuccessCallback **************
$dynamic("get$dartObjectLocalStorage").NavigatorUserMediaSuccessCallback = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NavigatorUserMediaSuccessCallback = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Node **************
Node.prototype.get$parentNode = function() { return this.parentNode; };
Node.prototype.set$parentNode = function(value) { return this.parentNode = value; };
Node.prototype.get$dartObjectLocalStorage = function() { return this.dartObjectLocalStorage; };
Node.prototype.set$dartObjectLocalStorage = function(value) { return this.dartObjectLocalStorage = value; };
Node.prototype.addEventListener$3 = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for dom_NodeFilter **************
$dynamic("get$dartObjectLocalStorage").NodeFilter = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NodeFilter = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_NodeIterator **************
$dynamic("get$dartObjectLocalStorage").NodeIterator = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NodeIterator = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for NodeList **************
$dynamic("get$length").NodeList = function() { return this.length; };
$dynamic("set$length").NodeList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").NodeList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NodeList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_NodeSelector **************
$dynamic("get$dartObjectLocalStorage").NodeSelector = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NodeSelector = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("querySelector$1").NodeSelector = function($0) {
  return this.querySelector($0);
};
$dynamic("querySelectorAll$1").NodeSelector = function($0) {
  return this.querySelectorAll($0);
};
// ********** Code for Notation **************
// ********** Code for Notification **************
$dynamic("get$dartObjectLocalStorage").Notification = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Notification = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").Notification = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for NotificationCenter **************
$dynamic("get$dartObjectLocalStorage").NotificationCenter = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").NotificationCenter = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for OESStandardDerivatives **************
$dynamic("get$dartObjectLocalStorage").OESStandardDerivatives = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").OESStandardDerivatives = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for OESTextureFloat **************
$dynamic("get$dartObjectLocalStorage").OESTextureFloat = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").OESTextureFloat = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for OESVertexArrayObject **************
$dynamic("get$dartObjectLocalStorage").OESVertexArrayObject = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").OESVertexArrayObject = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for OfflineAudioCompletionEvent **************
// ********** Code for OperationNotAllowedException **************
$dynamic("get$dartObjectLocalStorage").OperationNotAllowedException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").OperationNotAllowedException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").OperationNotAllowedException = function() {
  return this.toString();
};
// ********** Code for OverflowEvent **************
// ********** Code for PageTransitionEvent **************
// ********** Code for dom_Performance **************
$dynamic("get$dartObjectLocalStorage").Performance = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Performance = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_PerformanceNavigation **************
$dynamic("get$dartObjectLocalStorage").PerformanceNavigation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").PerformanceNavigation = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_PerformanceTiming **************
$dynamic("get$dartObjectLocalStorage").PerformanceTiming = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").PerformanceTiming = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for PopStateEvent **************
// ********** Code for PositionError **************
$dynamic("get$dartObjectLocalStorage").PositionError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").PositionError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for ProcessingInstruction **************
$dynamic("get$target").ProcessingInstruction = function() { return this.target; };
$dynamic("set$target").ProcessingInstruction = function(value) { return this.target = value; };
// ********** Code for ProgressEvent **************
// ********** Code for RGBColor **************
$dynamic("get$dartObjectLocalStorage").RGBColor = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").RGBColor = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Range **************
$dynamic("get$dartObjectLocalStorage").Range = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Range = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").Range = function() {
  return this.toString();
};
// ********** Code for RangeException **************
$dynamic("get$dartObjectLocalStorage").RangeException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").RangeException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").RangeException = function() {
  return this.toString();
};
// ********** Code for RealtimeAnalyserNode **************
// ********** Code for Rect **************
$dynamic("get$dartObjectLocalStorage").Rect = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Rect = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLError **************
$dynamic("get$dartObjectLocalStorage").SQLError = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLError = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLException **************
$dynamic("get$dartObjectLocalStorage").SQLException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLException = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLResultSet **************
$dynamic("get$dartObjectLocalStorage").SQLResultSet = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLResultSet = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLResultSetRowList **************
$dynamic("get$length").SQLResultSetRowList = function() { return this.length; };
$dynamic("set$length").SQLResultSetRowList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").SQLResultSetRowList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLResultSetRowList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLTransaction **************
$dynamic("get$dartObjectLocalStorage").SQLTransaction = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLTransaction = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_SQLTransactionSync **************
$dynamic("get$dartObjectLocalStorage").SQLTransactionSync = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SQLTransactionSync = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAElement **************
$dynamic("get$target").SVGAElement = function() { return this.target; };
$dynamic("set$target").SVGAElement = function(value) { return this.target = value; };
// ********** Code for SVGAltGlyphDefElement **************
// ********** Code for SVGAltGlyphElement **************
// ********** Code for SVGAltGlyphItemElement **************
// ********** Code for SVGAngle **************
$dynamic("get$value").SVGAngle = function() { return this.value; };
$dynamic("set$value").SVGAngle = function(value) { return this.value = value; };
$dynamic("get$dartObjectLocalStorage").SVGAngle = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAngle = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimateColorElement **************
// ********** Code for SVGAnimateElement **************
// ********** Code for SVGAnimateMotionElement **************
// ********** Code for SVGAnimateTransformElement **************
// ********** Code for SVGAnimatedAngle **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedAngle = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedAngle = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedBoolean **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedBoolean = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedBoolean = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedEnumeration **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedEnumeration = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedEnumeration = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedInteger **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedInteger = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedInteger = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedLength **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedLength = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedLength = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedLengthList **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedLengthList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedLengthList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedNumber **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedNumber = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedNumber = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedNumberList **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedNumberList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedNumberList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedPreserveAspectRatio **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedPreserveAspectRatio = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedPreserveAspectRatio = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedRect **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedRect = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedRect = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedString **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedString = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedString = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimatedTransformList **************
$dynamic("get$dartObjectLocalStorage").SVGAnimatedTransformList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGAnimatedTransformList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGAnimationElement **************
// ********** Code for SVGCircleElement **************
// ********** Code for SVGClipPathElement **************
// ********** Code for SVGColor **************
// ********** Code for SVGComponentTransferFunctionElement **************
// ********** Code for SVGCursorElement **************
// ********** Code for SVGDefsElement **************
// ********** Code for SVGDescElement **************
// ********** Code for SVGDocument **************
// ********** Code for SVGElement **************
// ********** Code for SVGElementInstance **************
$dynamic("get$parentNode").SVGElementInstance = function() { return this.parentNode; };
$dynamic("set$parentNode").SVGElementInstance = function(value) { return this.parentNode = value; };
$dynamic("get$dartObjectLocalStorage").SVGElementInstance = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGElementInstance = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").SVGElementInstance = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for SVGElementInstanceList **************
$dynamic("get$length").SVGElementInstanceList = function() { return this.length; };
$dynamic("set$length").SVGElementInstanceList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").SVGElementInstanceList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGElementInstanceList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGEllipseElement **************
// ********** Code for SVGException **************
$dynamic("get$dartObjectLocalStorage").SVGException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").SVGException = function() {
  return this.toString();
};
// ********** Code for SVGExternalResourcesRequired **************
$dynamic("get$dartObjectLocalStorage").SVGExternalResourcesRequired = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGExternalResourcesRequired = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGFEBlendElement **************
// ********** Code for SVGFEColorMatrixElement **************
// ********** Code for SVGFEComponentTransferElement **************
// ********** Code for dom_SVGFECompositeElement **************
// ********** Code for SVGFEConvolveMatrixElement **************
// ********** Code for SVGFEDiffuseLightingElement **************
// ********** Code for SVGFEDisplacementMapElement **************
// ********** Code for SVGFEDistantLightElement **************
// ********** Code for SVGFEDropShadowElement **************
// ********** Code for SVGFEFloodElement **************
// ********** Code for SVGFEFuncAElement **************
// ********** Code for SVGFEFuncBElement **************
// ********** Code for SVGFEFuncGElement **************
// ********** Code for SVGFEFuncRElement **************
// ********** Code for SVGFEGaussianBlurElement **************
// ********** Code for SVGFEImageElement **************
// ********** Code for SVGFEMergeElement **************
// ********** Code for SVGFEMergeNodeElement **************
// ********** Code for dom_SVGFEMorphologyElement **************
// ********** Code for SVGFEOffsetElement **************
// ********** Code for SVGFEPointLightElement **************
// ********** Code for SVGFESpecularLightingElement **************
// ********** Code for SVGFESpotLightElement **************
// ********** Code for SVGFETileElement **************
// ********** Code for SVGFETurbulenceElement **************
// ********** Code for SVGFilterElement **************
// ********** Code for SVGFilterPrimitiveStandardAttributes **************
// ********** Code for SVGFitToViewBox **************
$dynamic("get$dartObjectLocalStorage").SVGFitToViewBox = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGFitToViewBox = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGFontElement **************
// ********** Code for SVGFontFaceElement **************
// ********** Code for SVGFontFaceFormatElement **************
// ********** Code for SVGFontFaceNameElement **************
// ********** Code for SVGFontFaceSrcElement **************
// ********** Code for SVGFontFaceUriElement **************
// ********** Code for SVGForeignObjectElement **************
// ********** Code for SVGGElement **************
// ********** Code for SVGGlyphElement **************
// ********** Code for SVGGlyphRefElement **************
// ********** Code for SVGGradientElement **************
// ********** Code for SVGHKernElement **************
// ********** Code for SVGImageElement **************
// ********** Code for SVGLangSpace **************
$dynamic("get$dartObjectLocalStorage").SVGLangSpace = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGLangSpace = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGLength **************
$dynamic("get$value").SVGLength = function() { return this.value; };
$dynamic("set$value").SVGLength = function(value) { return this.value = value; };
$dynamic("get$dartObjectLocalStorage").SVGLength = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGLength = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGLengthList **************
$dynamic("get$dartObjectLocalStorage").SVGLengthList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGLengthList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGLineElement **************
// ********** Code for SVGLinearGradientElement **************
// ********** Code for SVGLocatable **************
$dynamic("get$dartObjectLocalStorage").SVGLocatable = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGLocatable = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGMPathElement **************
// ********** Code for SVGMarkerElement **************
// ********** Code for SVGMaskElement **************
// ********** Code for SVGMatrix **************
$dynamic("get$dartObjectLocalStorage").SVGMatrix = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGMatrix = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGMetadataElement **************
// ********** Code for SVGMissingGlyphElement **************
// ********** Code for SVGNumber **************
$dynamic("get$value").SVGNumber = function() { return this.value; };
$dynamic("set$value").SVGNumber = function(value) { return this.value = value; };
$dynamic("get$dartObjectLocalStorage").SVGNumber = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGNumber = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGNumberList **************
$dynamic("get$dartObjectLocalStorage").SVGNumberList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGNumberList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGPaint **************
// ********** Code for SVGPathElement **************
// ********** Code for SVGPathSeg **************
$dynamic("get$dartObjectLocalStorage").SVGPathSeg = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGPathSeg = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGPathSegArcAbs **************
// ********** Code for SVGPathSegArcRel **************
// ********** Code for SVGPathSegClosePath **************
// ********** Code for SVGPathSegCurvetoCubicAbs **************
// ********** Code for SVGPathSegCurvetoCubicRel **************
// ********** Code for SVGPathSegCurvetoCubicSmoothAbs **************
// ********** Code for SVGPathSegCurvetoCubicSmoothRel **************
// ********** Code for SVGPathSegCurvetoQuadraticAbs **************
// ********** Code for SVGPathSegCurvetoQuadraticRel **************
// ********** Code for SVGPathSegCurvetoQuadraticSmoothAbs **************
// ********** Code for SVGPathSegCurvetoQuadraticSmoothRel **************
// ********** Code for SVGPathSegLinetoAbs **************
// ********** Code for SVGPathSegLinetoHorizontalAbs **************
// ********** Code for SVGPathSegLinetoHorizontalRel **************
// ********** Code for SVGPathSegLinetoRel **************
// ********** Code for SVGPathSegLinetoVerticalAbs **************
// ********** Code for SVGPathSegLinetoVerticalRel **************
// ********** Code for SVGPathSegList **************
$dynamic("get$dartObjectLocalStorage").SVGPathSegList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGPathSegList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGPathSegMovetoAbs **************
// ********** Code for SVGPathSegMovetoRel **************
// ********** Code for SVGPatternElement **************
// ********** Code for SVGPoint **************
$dynamic("get$dartObjectLocalStorage").SVGPoint = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGPoint = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGPointList **************
$dynamic("get$dartObjectLocalStorage").SVGPointList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGPointList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGPolygonElement **************
// ********** Code for SVGPolylineElement **************
// ********** Code for SVGPreserveAspectRatio **************
$dynamic("get$dartObjectLocalStorage").SVGPreserveAspectRatio = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGPreserveAspectRatio = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGRadialGradientElement **************
// ********** Code for SVGRect **************
$dynamic("get$dartObjectLocalStorage").SVGRect = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGRect = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGRectElement **************
// ********** Code for SVGRenderingIntent **************
$dynamic("get$dartObjectLocalStorage").SVGRenderingIntent = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGRenderingIntent = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGSVGElement **************
// ********** Code for SVGScriptElement **************
// ********** Code for SVGSetElement **************
// ********** Code for SVGStopElement **************
// ********** Code for SVGStringList **************
$dynamic("get$dartObjectLocalStorage").SVGStringList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGStringList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGStylable **************
$dynamic("get$dartObjectLocalStorage").SVGStylable = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGStylable = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGStyleElement **************
// ********** Code for SVGSwitchElement **************
// ********** Code for SVGSymbolElement **************
// ********** Code for SVGTRefElement **************
// ********** Code for SVGTSpanElement **************
// ********** Code for SVGTests **************
$dynamic("get$dartObjectLocalStorage").SVGTests = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGTests = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGTextContentElement **************
// ********** Code for SVGTextElement **************
// ********** Code for SVGTextPathElement **************
// ********** Code for SVGTextPositioningElement **************
// ********** Code for SVGTitleElement **************
// ********** Code for SVGTransform **************
$dynamic("get$dartObjectLocalStorage").SVGTransform = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGTransform = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGTransformList **************
$dynamic("get$dartObjectLocalStorage").SVGTransformList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGTransformList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGTransformable **************
// ********** Code for SVGURIReference **************
$dynamic("get$dartObjectLocalStorage").SVGURIReference = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGURIReference = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGUnitTypes **************
$dynamic("get$dartObjectLocalStorage").SVGUnitTypes = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGUnitTypes = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGUseElement **************
// ********** Code for SVGVKernElement **************
// ********** Code for SVGViewElement **************
// ********** Code for SVGViewSpec **************
// ********** Code for SVGZoomAndPan **************
$dynamic("get$dartObjectLocalStorage").SVGZoomAndPan = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SVGZoomAndPan = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SVGZoomEvent **************
// ********** Code for Screen **************
$dynamic("get$dartObjectLocalStorage").Screen = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Screen = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_ScriptProfile **************
$dynamic("get$dartObjectLocalStorage").ScriptProfile = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ScriptProfile = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_ScriptProfileNode **************
$dynamic("get$dartObjectLocalStorage").ScriptProfileNode = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ScriptProfileNode = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SharedWorker **************
// ********** Code for dom_SharedWorkercontext **************
// ********** Code for SpeechInputEvent **************
// ********** Code for SpeechInputResult **************
$dynamic("get$dartObjectLocalStorage").SpeechInputResult = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SpeechInputResult = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for SpeechInputResultList **************
$dynamic("get$length").SpeechInputResultList = function() { return this.length; };
$dynamic("set$length").SpeechInputResultList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").SpeechInputResultList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").SpeechInputResultList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Storage **************
$dynamic("get$length").Storage = function() { return this.length; };
$dynamic("set$length").Storage = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").Storage = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Storage = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for StorageEvent **************
// ********** Code for StorageInfo **************
$dynamic("get$dartObjectLocalStorage").StorageInfo = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").StorageInfo = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for StyleMedia **************
$dynamic("get$dartObjectLocalStorage").StyleMedia = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").StyleMedia = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for StyleSheet **************
StyleSheet.prototype.get$dartObjectLocalStorage = function() { return this.dartObjectLocalStorage; };
StyleSheet.prototype.set$dartObjectLocalStorage = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for StyleSheetList **************
$dynamic("get$length").StyleSheetList = function() { return this.length; };
$dynamic("set$length").StyleSheetList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").StyleSheetList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").StyleSheetList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Text **************
// ********** Code for TextEvent **************
// ********** Code for TextMetrics **************
$dynamic("get$dartObjectLocalStorage").TextMetrics = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TextMetrics = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for TextTrack **************
$dynamic("get$dartObjectLocalStorage").TextTrack = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TextTrack = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for TextTrackCue **************
$dynamic("get$dartObjectLocalStorage").TextTrackCue = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TextTrackCue = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for TextTrackCueList **************
$dynamic("get$length").TextTrackCueList = function() { return this.length; };
$dynamic("set$length").TextTrackCueList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").TextTrackCueList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TextTrackCueList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for TimeRanges **************
$dynamic("get$length").TimeRanges = function() { return this.length; };
$dynamic("set$length").TimeRanges = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").TimeRanges = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TimeRanges = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for Touch **************
$dynamic("get$target").Touch = function() { return this.target; };
$dynamic("set$target").Touch = function(value) { return this.target = value; };
$dynamic("get$dartObjectLocalStorage").Touch = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").Touch = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for TouchEvent **************
// ********** Code for TouchList **************
$dynamic("get$length").TouchList = function() { return this.length; };
$dynamic("set$length").TouchList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").TouchList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TouchList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_TreeWalker **************
$dynamic("get$parentNode").TreeWalker = function() {
  return this.parentNode.bind(this);
}
$dynamic("get$dartObjectLocalStorage").TreeWalker = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").TreeWalker = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for UIEvent **************
// ********** Code for Uint16Array **************
$dynamic("get$length").Uint16Array = function() { return this.length; };
$dynamic("set$length").Uint16Array = function(value) { return this.length = value; };
// ********** Code for Uint32Array **************
$dynamic("get$length").Uint32Array = function() { return this.length; };
$dynamic("set$length").Uint32Array = function(value) { return this.length = value; };
// ********** Code for Uint8Array **************
$dynamic("get$length").Uint8Array = function() { return this.length; };
$dynamic("set$length").Uint8Array = function(value) { return this.length = value; };
// ********** Code for ValidityState **************
$dynamic("get$dartObjectLocalStorage").ValidityState = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").ValidityState = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WaveShaperNode **************
// ********** Code for WebGLActiveInfo **************
$dynamic("get$dartObjectLocalStorage").WebGLActiveInfo = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLActiveInfo = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLBuffer **************
$dynamic("get$dartObjectLocalStorage").WebGLBuffer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLBuffer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLContextAttributes **************
$dynamic("get$dartObjectLocalStorage").WebGLContextAttributes = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLContextAttributes = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLContextEvent **************
// ********** Code for WebGLDebugRendererInfo **************
$dynamic("get$dartObjectLocalStorage").WebGLDebugRendererInfo = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLDebugRendererInfo = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLDebugShaders **************
$dynamic("get$dartObjectLocalStorage").WebGLDebugShaders = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLDebugShaders = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLFramebuffer **************
$dynamic("get$dartObjectLocalStorage").WebGLFramebuffer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLFramebuffer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLProgram **************
$dynamic("get$dartObjectLocalStorage").WebGLProgram = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLProgram = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLRenderbuffer **************
$dynamic("get$dartObjectLocalStorage").WebGLRenderbuffer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLRenderbuffer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLRenderingContext **************
// ********** Code for WebGLShader **************
$dynamic("get$dartObjectLocalStorage").WebGLShader = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLShader = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLTexture **************
$dynamic("get$dartObjectLocalStorage").WebGLTexture = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLTexture = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLUniformLocation **************
$dynamic("get$dartObjectLocalStorage").WebGLUniformLocation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLUniformLocation = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebGLVertexArrayObjectOES **************
$dynamic("get$dartObjectLocalStorage").WebGLVertexArrayObjectOES = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebGLVertexArrayObjectOES = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitAnimation **************
$dynamic("get$dartObjectLocalStorage").WebKitAnimation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitAnimation = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitAnimationEvent **************
// ********** Code for dom_WebKitAnimationList **************
$dynamic("get$length").WebKitAnimationList = function() { return this.length; };
$dynamic("set$length").WebKitAnimationList = function(value) { return this.length = value; };
$dynamic("get$dartObjectLocalStorage").WebKitAnimationList = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitAnimationList = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitBlobBuilder **************
$dynamic("get$dartObjectLocalStorage").WebKitBlobBuilder = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitBlobBuilder = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebKitCSSFilterValue **************
// ********** Code for dom_WebKitCSSKeyframeRule **************
// ********** Code for dom_WebKitCSSKeyframesRule **************
// ********** Code for dom_WebKitCSSMatrix **************
$dynamic("get$dartObjectLocalStorage").WebKitCSSMatrix = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitCSSMatrix = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").WebKitCSSMatrix = function() {
  return this.toString();
};
// ********** Code for dom_WebKitCSSTransformValue **************
// ********** Code for dom_WebKitFlags **************
$dynamic("get$dartObjectLocalStorage").WebKitFlags = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitFlags = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitLoseContext **************
$dynamic("get$dartObjectLocalStorage").WebKitLoseContext = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitLoseContext = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for WebKitMutationObserver **************
$dynamic("get$dartObjectLocalStorage").WebKitMutationObserver = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitMutationObserver = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitPoint **************
$dynamic("get$dartObjectLocalStorage").WebKitPoint = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebKitPoint = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_WebKitTransitionEvent **************
// ********** Code for WebSocket **************
$dynamic("get$dartObjectLocalStorage").WebSocket = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WebSocket = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").WebSocket = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("send$1").WebSocket = function($0) {
  return this.send($0);
};
// ********** Code for WheelEvent **************
// ********** Code for Worker **************
// ********** Code for dom_WorkerContext **************
$dynamic("get$dartObjectLocalStorage").WorkerContext = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WorkerContext = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").WorkerContext = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for dom_WorkerLocation **************
$dynamic("get$dartObjectLocalStorage").WorkerLocation = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WorkerLocation = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").WorkerLocation = function() {
  return this.toString();
};
// ********** Code for dom_WorkerNavigator **************
$dynamic("get$dartObjectLocalStorage").WorkerNavigator = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").WorkerNavigator = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for XMLHttpRequest **************
$dynamic("get$responseText").XMLHttpRequest = function() { return this.responseText; };
$dynamic("set$responseText").XMLHttpRequest = function(value) { return this.responseText = value; };
$dynamic("get$open").XMLHttpRequest = function() {
  return this.open.bind(this);
}
$dynamic("get$dartObjectLocalStorage").XMLHttpRequest = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XMLHttpRequest = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").XMLHttpRequest = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
$dynamic("open$2").XMLHttpRequest = function($0, $1) {
  return this.open($0, $1);
};
$dynamic("open$3").XMLHttpRequest = function($0, $1, $2) {
  return this.open($0, $1, $2);
};
$dynamic("open$4").XMLHttpRequest = function($0, $1, $2, $3) {
  return this.open($0, $1, $2, $3);
};
$dynamic("open$5").XMLHttpRequest = function($0, $1, $2, $3, $4) {
  return this.open($0, $1, $2, $3, $4);
};
$dynamic("send$0").XMLHttpRequest = function() {
  return this.send();
};
$dynamic("send$1").XMLHttpRequest = function($0) {
  return this.send($0);
};
$dynamic("setRequestHeader$2").XMLHttpRequest = function($0, $1) {
  return this.setRequestHeader($0, $1);
};
// ********** Code for XMLHttpRequestException **************
$dynamic("get$dartObjectLocalStorage").XMLHttpRequestException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XMLHttpRequestException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").XMLHttpRequestException = function() {
  return this.toString();
};
// ********** Code for XMLHttpRequestProgressEvent **************
// ********** Code for XMLHttpRequestUpload **************
$dynamic("get$dartObjectLocalStorage").XMLHttpRequestUpload = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XMLHttpRequestUpload = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("addEventListener$3").XMLHttpRequestUpload = function($0, $1, $2) {
  return this.addEventListener($0, $wrap_call$1(to$call$1($1)), $2);
};
// ********** Code for dom_XMLSerializer **************
$dynamic("get$dartObjectLocalStorage").XMLSerializer = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XMLSerializer = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_XPathEvaluator **************
$dynamic("get$dartObjectLocalStorage").XPathEvaluator = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XPathEvaluator = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_XPathException **************
$dynamic("get$dartObjectLocalStorage").XPathException = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XPathException = function(value) { return this.dartObjectLocalStorage = value; };
$dynamic("toString$0").XPathException = function() {
  return this.toString();
};
// ********** Code for dom_XPathExpression **************
$dynamic("get$dartObjectLocalStorage").XPathExpression = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XPathExpression = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_XPathNSResolver **************
$dynamic("get$dartObjectLocalStorage").XPathNSResolver = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XPathNSResolver = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_XPathResult **************
$dynamic("get$dartObjectLocalStorage").XPathResult = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XPathResult = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for dom_XSLTProcessor **************
$dynamic("get$dartObjectLocalStorage").XSLTProcessor = function() { return this.dartObjectLocalStorage; };
$dynamic("set$dartObjectLocalStorage").XSLTProcessor = function(value) { return this.dartObjectLocalStorage = value; };
// ********** Code for _Collections **************
function _Collections() {}
// ********** Code for _VariableSizeListIterator_T **************
$inherits(_VariableSizeListIterator_T, _VariableSizeListIterator);
function _VariableSizeListIterator_T() {}
// ********** Code for _FixedSizeListIterator **************
$inherits(_FixedSizeListIterator, _VariableSizeListIterator_T);
function _FixedSizeListIterator() {}
// ********** Code for _VariableSizeListIterator **************
function _VariableSizeListIterator() {}
// ********** Code for _Lists **************
function _Lists() {}
// ********** Code for top level **************
function get$window() {
  return window;
}
function get$document() {
  return window.document;
}
//  ********** Library htmlimpl **************
// ********** Code for DOMWrapperBase **************
function DOMWrapperBase() {}
DOMWrapperBase._wrap$ctor = function(_ptr) {
  this._ptr = _ptr;
  // Initializers done
  this._ptr.set$dartObjectLocalStorage(this);
}
DOMWrapperBase._wrap$ctor.prototype = DOMWrapperBase.prototype;
DOMWrapperBase.prototype.get$_ptr = function() { return this._ptr; };
// ********** Code for EventTargetWrappingImplementation **************
$inherits(EventTargetWrappingImplementation, DOMWrapperBase);
function EventTargetWrappingImplementation() {}
EventTargetWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  DOMWrapperBase._wrap$ctor.call(this, ptr);
}
EventTargetWrappingImplementation._wrap$ctor.prototype = EventTargetWrappingImplementation.prototype;
EventTargetWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new EventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
// ********** Code for NodeWrappingImplementation **************
$inherits(NodeWrappingImplementation, EventTargetWrappingImplementation);
function NodeWrappingImplementation() {}
NodeWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
NodeWrappingImplementation._wrap$ctor.prototype = NodeWrappingImplementation.prototype;
// ********** Code for ElementWrappingImplementation **************
$inherits(ElementWrappingImplementation, NodeWrappingImplementation);
function ElementWrappingImplementation() {}
ElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
ElementWrappingImplementation._wrap$ctor.prototype = ElementWrappingImplementation.prototype;
ElementWrappingImplementation.prototype.query = function(selectors) {
  return LevelDom.wrapElement(this._ptr.querySelector$1(selectors));
}
ElementWrappingImplementation.prototype.queryAll = function(selectors) {
  return new FrozenElementList._wrap$ctor(this._ptr.querySelectorAll$1(selectors));
}
ElementWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new ElementEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
ElementWrappingImplementation.prototype.query$1 = ElementWrappingImplementation.prototype.query;
ElementWrappingImplementation.prototype.queryAll$1 = ElementWrappingImplementation.prototype.queryAll;
// ********** Code for AnchorElementWrappingImplementation **************
$inherits(AnchorElementWrappingImplementation, ElementWrappingImplementation);
function AnchorElementWrappingImplementation() {}
AnchorElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
AnchorElementWrappingImplementation._wrap$ctor.prototype = AnchorElementWrappingImplementation.prototype;
AnchorElementWrappingImplementation.prototype.get$target = function() {
  return this._ptr.get$target();
}
AnchorElementWrappingImplementation.prototype.toString = function() {
  return this._ptr.toString$0();
}
AnchorElementWrappingImplementation.prototype.toString$0 = AnchorElementWrappingImplementation.prototype.toString;
// ********** Code for AreaElementWrappingImplementation **************
$inherits(AreaElementWrappingImplementation, ElementWrappingImplementation);
function AreaElementWrappingImplementation() {}
AreaElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
AreaElementWrappingImplementation._wrap$ctor.prototype = AreaElementWrappingImplementation.prototype;
AreaElementWrappingImplementation.prototype.get$target = function() {
  return this._ptr.get$target();
}
// ********** Code for MediaElementWrappingImplementation **************
$inherits(MediaElementWrappingImplementation, ElementWrappingImplementation);
function MediaElementWrappingImplementation() {}
MediaElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MediaElementWrappingImplementation._wrap$ctor.prototype = MediaElementWrappingImplementation.prototype;
// ********** Code for AudioElementWrappingImplementation **************
$inherits(AudioElementWrappingImplementation, MediaElementWrappingImplementation);
function AudioElementWrappingImplementation() {}
AudioElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  MediaElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
AudioElementWrappingImplementation._wrap$ctor.prototype = AudioElementWrappingImplementation.prototype;
// ********** Code for EventWrappingImplementation **************
$inherits(EventWrappingImplementation, DOMWrapperBase);
function EventWrappingImplementation() {}
EventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  DOMWrapperBase._wrap$ctor.call(this, ptr);
}
EventWrappingImplementation._wrap$ctor.prototype = EventWrappingImplementation.prototype;
EventWrappingImplementation.prototype.get$target = function() {
  return LevelDom.wrapEventTarget(this._ptr.get$target());
}
EventWrappingImplementation.prototype.preventDefault = function() {
  this._ptr.preventDefault$0();
  return;
}
EventWrappingImplementation.prototype.preventDefault$0 = EventWrappingImplementation.prototype.preventDefault;
// ********** Code for AudioProcessingEventWrappingImplementation **************
$inherits(AudioProcessingEventWrappingImplementation, EventWrappingImplementation);
function AudioProcessingEventWrappingImplementation() {}
AudioProcessingEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
AudioProcessingEventWrappingImplementation._wrap$ctor.prototype = AudioProcessingEventWrappingImplementation.prototype;
// ********** Code for BRElementWrappingImplementation **************
$inherits(BRElementWrappingImplementation, ElementWrappingImplementation);
function BRElementWrappingImplementation() {}
BRElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
BRElementWrappingImplementation._wrap$ctor.prototype = BRElementWrappingImplementation.prototype;
// ********** Code for BaseElementWrappingImplementation **************
$inherits(BaseElementWrappingImplementation, ElementWrappingImplementation);
function BaseElementWrappingImplementation() {}
BaseElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
BaseElementWrappingImplementation._wrap$ctor.prototype = BaseElementWrappingImplementation.prototype;
BaseElementWrappingImplementation.prototype.get$target = function() {
  return this._ptr.get$target();
}
// ********** Code for ButtonElementWrappingImplementation **************
$inherits(ButtonElementWrappingImplementation, ElementWrappingImplementation);
function ButtonElementWrappingImplementation() {}
ButtonElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ButtonElementWrappingImplementation._wrap$ctor.prototype = ButtonElementWrappingImplementation.prototype;
ButtonElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
ButtonElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for CharacterDataWrappingImplementation **************
$inherits(CharacterDataWrappingImplementation, NodeWrappingImplementation);
function CharacterDataWrappingImplementation() {}
CharacterDataWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
CharacterDataWrappingImplementation._wrap$ctor.prototype = CharacterDataWrappingImplementation.prototype;
CharacterDataWrappingImplementation.prototype.get$length = function() {
  return this._ptr.get$length();
}
// ********** Code for TextWrappingImplementation **************
$inherits(TextWrappingImplementation, CharacterDataWrappingImplementation);
function TextWrappingImplementation() {}
TextWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  CharacterDataWrappingImplementation._wrap$ctor.call(this, ptr);
}
TextWrappingImplementation._wrap$ctor.prototype = TextWrappingImplementation.prototype;
// ********** Code for CDATASectionWrappingImplementation **************
$inherits(CDATASectionWrappingImplementation, TextWrappingImplementation);
function CDATASectionWrappingImplementation() {}
CDATASectionWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  TextWrappingImplementation._wrap$ctor.call(this, ptr);
}
CDATASectionWrappingImplementation._wrap$ctor.prototype = CDATASectionWrappingImplementation.prototype;
// ********** Code for CanvasElementWrappingImplementation **************
$inherits(CanvasElementWrappingImplementation, ElementWrappingImplementation);
function CanvasElementWrappingImplementation() {}
CanvasElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
CanvasElementWrappingImplementation._wrap$ctor.prototype = CanvasElementWrappingImplementation.prototype;
// ********** Code for CommentWrappingImplementation **************
$inherits(CommentWrappingImplementation, CharacterDataWrappingImplementation);
function CommentWrappingImplementation() {}
CommentWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  CharacterDataWrappingImplementation._wrap$ctor.call(this, ptr);
}
CommentWrappingImplementation._wrap$ctor.prototype = CommentWrappingImplementation.prototype;
// ********** Code for DListElementWrappingImplementation **************
$inherits(DListElementWrappingImplementation, ElementWrappingImplementation);
function DListElementWrappingImplementation() {}
DListElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
DListElementWrappingImplementation._wrap$ctor.prototype = DListElementWrappingImplementation.prototype;
// ********** Code for DataListElementWrappingImplementation **************
$inherits(DataListElementWrappingImplementation, ElementWrappingImplementation);
function DataListElementWrappingImplementation() {}
DataListElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
DataListElementWrappingImplementation._wrap$ctor.prototype = DataListElementWrappingImplementation.prototype;
// ********** Code for DetailsElementWrappingImplementation **************
$inherits(DetailsElementWrappingImplementation, ElementWrappingImplementation);
function DetailsElementWrappingImplementation() {}
DetailsElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
DetailsElementWrappingImplementation._wrap$ctor.prototype = DetailsElementWrappingImplementation.prototype;
DetailsElementWrappingImplementation.prototype.get$open = function() {
  return this._ptr.get$open();
}
DetailsElementWrappingImplementation.prototype.open$2 = function($0, $1) {
  return this.get$open()($0, $1);
};
DetailsElementWrappingImplementation.prototype.open$4 = function($0, $1, $2, $3) {
  return this.get$open()($0, $1, $2, $3);
};
DetailsElementWrappingImplementation.prototype.open$5 = function($0, $1, $2, $3, $4) {
  return this.get$open()($0, $1, $2, $3, $4);
};
// ********** Code for DivElementWrappingImplementation **************
$inherits(DivElementWrappingImplementation, ElementWrappingImplementation);
function DivElementWrappingImplementation() {}
DivElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
DivElementWrappingImplementation._wrap$ctor.prototype = DivElementWrappingImplementation.prototype;
// ********** Code for EmbedElementWrappingImplementation **************
$inherits(EmbedElementWrappingImplementation, ElementWrappingImplementation);
function EmbedElementWrappingImplementation() {}
EmbedElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
EmbedElementWrappingImplementation._wrap$ctor.prototype = EmbedElementWrappingImplementation.prototype;
// ********** Code for EntityReferenceWrappingImplementation **************
$inherits(EntityReferenceWrappingImplementation, NodeWrappingImplementation);
function EntityReferenceWrappingImplementation() {}
EntityReferenceWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
EntityReferenceWrappingImplementation._wrap$ctor.prototype = EntityReferenceWrappingImplementation.prototype;
// ********** Code for EntityWrappingImplementation **************
$inherits(EntityWrappingImplementation, NodeWrappingImplementation);
function EntityWrappingImplementation() {}
EntityWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
EntityWrappingImplementation._wrap$ctor.prototype = EntityWrappingImplementation.prototype;
// ********** Code for FieldSetElementWrappingImplementation **************
$inherits(FieldSetElementWrappingImplementation, ElementWrappingImplementation);
function FieldSetElementWrappingImplementation() {}
FieldSetElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
FieldSetElementWrappingImplementation._wrap$ctor.prototype = FieldSetElementWrappingImplementation.prototype;
// ********** Code for FontElementWrappingImplementation **************
$inherits(FontElementWrappingImplementation, ElementWrappingImplementation);
function FontElementWrappingImplementation() {}
FontElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
FontElementWrappingImplementation._wrap$ctor.prototype = FontElementWrappingImplementation.prototype;
// ********** Code for FormElementWrappingImplementation **************
$inherits(FormElementWrappingImplementation, ElementWrappingImplementation);
function FormElementWrappingImplementation() {}
FormElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
FormElementWrappingImplementation._wrap$ctor.prototype = FormElementWrappingImplementation.prototype;
FormElementWrappingImplementation.prototype.get$length = function() {
  return this._ptr.get$length();
}
FormElementWrappingImplementation.prototype.get$target = function() {
  return this._ptr.get$target();
}
FormElementWrappingImplementation.prototype.submit = function() {
  this._ptr.submit$0();
  return;
}
FormElementWrappingImplementation.prototype.get$submit = function() {
  return this.submit.bind(this);
}
FormElementWrappingImplementation.prototype.submit$0 = FormElementWrappingImplementation.prototype.submit;
// ********** Code for HRElementWrappingImplementation **************
$inherits(HRElementWrappingImplementation, ElementWrappingImplementation);
function HRElementWrappingImplementation() {}
HRElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
HRElementWrappingImplementation._wrap$ctor.prototype = HRElementWrappingImplementation.prototype;
// ********** Code for HeadElementWrappingImplementation **************
$inherits(HeadElementWrappingImplementation, ElementWrappingImplementation);
function HeadElementWrappingImplementation() {}
HeadElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
HeadElementWrappingImplementation._wrap$ctor.prototype = HeadElementWrappingImplementation.prototype;
// ********** Code for HeadingElementWrappingImplementation **************
$inherits(HeadingElementWrappingImplementation, ElementWrappingImplementation);
function HeadingElementWrappingImplementation() {}
HeadingElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
HeadingElementWrappingImplementation._wrap$ctor.prototype = HeadingElementWrappingImplementation.prototype;
// ********** Code for IDBVersionChangeEventWrappingImplementation **************
$inherits(IDBVersionChangeEventWrappingImplementation, EventWrappingImplementation);
function IDBVersionChangeEventWrappingImplementation() {}
IDBVersionChangeEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
IDBVersionChangeEventWrappingImplementation._wrap$ctor.prototype = IDBVersionChangeEventWrappingImplementation.prototype;
// ********** Code for IFrameElementWrappingImplementation **************
$inherits(IFrameElementWrappingImplementation, ElementWrappingImplementation);
function IFrameElementWrappingImplementation() {}
IFrameElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
IFrameElementWrappingImplementation._wrap$ctor.prototype = IFrameElementWrappingImplementation.prototype;
// ********** Code for ImageElementWrappingImplementation **************
$inherits(ImageElementWrappingImplementation, ElementWrappingImplementation);
function ImageElementWrappingImplementation() {}
ImageElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ImageElementWrappingImplementation._wrap$ctor.prototype = ImageElementWrappingImplementation.prototype;
// ********** Code for InputElementWrappingImplementation **************
$inherits(InputElementWrappingImplementation, ElementWrappingImplementation);
function InputElementWrappingImplementation() {}
InputElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
InputElementWrappingImplementation._wrap$ctor.prototype = InputElementWrappingImplementation.prototype;
InputElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
InputElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for KeygenElementWrappingImplementation **************
$inherits(KeygenElementWrappingImplementation, ElementWrappingImplementation);
function KeygenElementWrappingImplementation() {}
KeygenElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
KeygenElementWrappingImplementation._wrap$ctor.prototype = KeygenElementWrappingImplementation.prototype;
// ********** Code for LIElementWrappingImplementation **************
$inherits(LIElementWrappingImplementation, ElementWrappingImplementation);
function LIElementWrappingImplementation() {}
LIElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
LIElementWrappingImplementation._wrap$ctor.prototype = LIElementWrappingImplementation.prototype;
LIElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
LIElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for LabelElementWrappingImplementation **************
$inherits(LabelElementWrappingImplementation, ElementWrappingImplementation);
function LabelElementWrappingImplementation() {}
LabelElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
LabelElementWrappingImplementation._wrap$ctor.prototype = LabelElementWrappingImplementation.prototype;
// ********** Code for LegendElementWrappingImplementation **************
$inherits(LegendElementWrappingImplementation, ElementWrappingImplementation);
function LegendElementWrappingImplementation() {}
LegendElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
LegendElementWrappingImplementation._wrap$ctor.prototype = LegendElementWrappingImplementation.prototype;
// ********** Code for LinkElementWrappingImplementation **************
$inherits(LinkElementWrappingImplementation, ElementWrappingImplementation);
function LinkElementWrappingImplementation() {}
LinkElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
LinkElementWrappingImplementation._wrap$ctor.prototype = LinkElementWrappingImplementation.prototype;
LinkElementWrappingImplementation.prototype.get$target = function() {
  return this._ptr.get$target();
}
// ********** Code for MapElementWrappingImplementation **************
$inherits(MapElementWrappingImplementation, ElementWrappingImplementation);
function MapElementWrappingImplementation() {}
MapElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MapElementWrappingImplementation._wrap$ctor.prototype = MapElementWrappingImplementation.prototype;
// ********** Code for MarqueeElementWrappingImplementation **************
$inherits(MarqueeElementWrappingImplementation, ElementWrappingImplementation);
function MarqueeElementWrappingImplementation() {}
MarqueeElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MarqueeElementWrappingImplementation._wrap$ctor.prototype = MarqueeElementWrappingImplementation.prototype;
// ********** Code for MenuElementWrappingImplementation **************
$inherits(MenuElementWrappingImplementation, ElementWrappingImplementation);
function MenuElementWrappingImplementation() {}
MenuElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MenuElementWrappingImplementation._wrap$ctor.prototype = MenuElementWrappingImplementation.prototype;
// ********** Code for MetaElementWrappingImplementation **************
$inherits(MetaElementWrappingImplementation, ElementWrappingImplementation);
function MetaElementWrappingImplementation() {}
MetaElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MetaElementWrappingImplementation._wrap$ctor.prototype = MetaElementWrappingImplementation.prototype;
// ********** Code for MeterElementWrappingImplementation **************
$inherits(MeterElementWrappingImplementation, ElementWrappingImplementation);
function MeterElementWrappingImplementation() {}
MeterElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
MeterElementWrappingImplementation._wrap$ctor.prototype = MeterElementWrappingImplementation.prototype;
MeterElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
MeterElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for ModElementWrappingImplementation **************
$inherits(ModElementWrappingImplementation, ElementWrappingImplementation);
function ModElementWrappingImplementation() {}
ModElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ModElementWrappingImplementation._wrap$ctor.prototype = ModElementWrappingImplementation.prototype;
// ********** Code for NotationWrappingImplementation **************
$inherits(NotationWrappingImplementation, NodeWrappingImplementation);
function NotationWrappingImplementation() {}
NotationWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
NotationWrappingImplementation._wrap$ctor.prototype = NotationWrappingImplementation.prototype;
// ********** Code for OListElementWrappingImplementation **************
$inherits(OListElementWrappingImplementation, ElementWrappingImplementation);
function OListElementWrappingImplementation() {}
OListElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
OListElementWrappingImplementation._wrap$ctor.prototype = OListElementWrappingImplementation.prototype;
// ********** Code for OfflineAudioCompletionEventWrappingImplementation **************
$inherits(OfflineAudioCompletionEventWrappingImplementation, EventWrappingImplementation);
function OfflineAudioCompletionEventWrappingImplementation() {}
OfflineAudioCompletionEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
OfflineAudioCompletionEventWrappingImplementation._wrap$ctor.prototype = OfflineAudioCompletionEventWrappingImplementation.prototype;
// ********** Code for OptGroupElementWrappingImplementation **************
$inherits(OptGroupElementWrappingImplementation, ElementWrappingImplementation);
function OptGroupElementWrappingImplementation() {}
OptGroupElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
OptGroupElementWrappingImplementation._wrap$ctor.prototype = OptGroupElementWrappingImplementation.prototype;
// ********** Code for OptionElementWrappingImplementation **************
$inherits(OptionElementWrappingImplementation, ElementWrappingImplementation);
function OptionElementWrappingImplementation() {}
OptionElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
OptionElementWrappingImplementation._wrap$ctor.prototype = OptionElementWrappingImplementation.prototype;
OptionElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
OptionElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for OutputElementWrappingImplementation **************
$inherits(OutputElementWrappingImplementation, ElementWrappingImplementation);
function OutputElementWrappingImplementation() {}
OutputElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
OutputElementWrappingImplementation._wrap$ctor.prototype = OutputElementWrappingImplementation.prototype;
OutputElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
OutputElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for ParagraphElementWrappingImplementation **************
$inherits(ParagraphElementWrappingImplementation, ElementWrappingImplementation);
function ParagraphElementWrappingImplementation() {}
ParagraphElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ParagraphElementWrappingImplementation._wrap$ctor.prototype = ParagraphElementWrappingImplementation.prototype;
// ********** Code for ParamElementWrappingImplementation **************
$inherits(ParamElementWrappingImplementation, ElementWrappingImplementation);
function ParamElementWrappingImplementation() {}
ParamElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ParamElementWrappingImplementation._wrap$ctor.prototype = ParamElementWrappingImplementation.prototype;
ParamElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
ParamElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for PreElementWrappingImplementation **************
$inherits(PreElementWrappingImplementation, ElementWrappingImplementation);
function PreElementWrappingImplementation() {}
PreElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
PreElementWrappingImplementation._wrap$ctor.prototype = PreElementWrappingImplementation.prototype;
// ********** Code for ProcessingInstructionWrappingImplementation **************
$inherits(ProcessingInstructionWrappingImplementation, NodeWrappingImplementation);
function ProcessingInstructionWrappingImplementation() {}
ProcessingInstructionWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
ProcessingInstructionWrappingImplementation._wrap$ctor.prototype = ProcessingInstructionWrappingImplementation.prototype;
ProcessingInstructionWrappingImplementation.prototype.get$target = function() {
  return this._ptr.get$target();
}
// ********** Code for ProgressElementWrappingImplementation **************
$inherits(ProgressElementWrappingImplementation, ElementWrappingImplementation);
function ProgressElementWrappingImplementation() {}
ProgressElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ProgressElementWrappingImplementation._wrap$ctor.prototype = ProgressElementWrappingImplementation.prototype;
ProgressElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
ProgressElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for QuoteElementWrappingImplementation **************
$inherits(QuoteElementWrappingImplementation, ElementWrappingImplementation);
function QuoteElementWrappingImplementation() {}
QuoteElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
QuoteElementWrappingImplementation._wrap$ctor.prototype = QuoteElementWrappingImplementation.prototype;
// ********** Code for SVGElementWrappingImplementation **************
$inherits(SVGElementWrappingImplementation, ElementWrappingImplementation);
function SVGElementWrappingImplementation() {}
SVGElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGElementWrappingImplementation._wrap$ctor.prototype = SVGElementWrappingImplementation.prototype;
// ********** Code for SVGAElementWrappingImplementation **************
$inherits(SVGAElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGAElementWrappingImplementation() {}
SVGAElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAElementWrappingImplementation._wrap$ctor.prototype = SVGAElementWrappingImplementation.prototype;
SVGAElementWrappingImplementation.prototype.get$target = function() {
  return LevelDom.wrapSVGAnimatedString(this._ptr.get$target());
}
// ********** Code for SVGAltGlyphDefElementWrappingImplementation **************
$inherits(SVGAltGlyphDefElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGAltGlyphDefElementWrappingImplementation() {}
SVGAltGlyphDefElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAltGlyphDefElementWrappingImplementation._wrap$ctor.prototype = SVGAltGlyphDefElementWrappingImplementation.prototype;
// ********** Code for SVGTextContentElementWrappingImplementation **************
$inherits(SVGTextContentElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGTextContentElementWrappingImplementation() {}
SVGTextContentElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTextContentElementWrappingImplementation._wrap$ctor.prototype = SVGTextContentElementWrappingImplementation.prototype;
// ********** Code for SVGTextPositioningElementWrappingImplementation **************
$inherits(SVGTextPositioningElementWrappingImplementation, SVGTextContentElementWrappingImplementation);
function SVGTextPositioningElementWrappingImplementation() {}
SVGTextPositioningElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGTextContentElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTextPositioningElementWrappingImplementation._wrap$ctor.prototype = SVGTextPositioningElementWrappingImplementation.prototype;
// ********** Code for SVGAltGlyphElementWrappingImplementation **************
$inherits(SVGAltGlyphElementWrappingImplementation, SVGTextPositioningElementWrappingImplementation);
function SVGAltGlyphElementWrappingImplementation() {}
SVGAltGlyphElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGTextPositioningElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAltGlyphElementWrappingImplementation._wrap$ctor.prototype = SVGAltGlyphElementWrappingImplementation.prototype;
// ********** Code for SVGAltGlyphItemElementWrappingImplementation **************
$inherits(SVGAltGlyphItemElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGAltGlyphItemElementWrappingImplementation() {}
SVGAltGlyphItemElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAltGlyphItemElementWrappingImplementation._wrap$ctor.prototype = SVGAltGlyphItemElementWrappingImplementation.prototype;
// ********** Code for SVGAnimationElementWrappingImplementation **************
$inherits(SVGAnimationElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGAnimationElementWrappingImplementation() {}
SVGAnimationElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAnimationElementWrappingImplementation._wrap$ctor.prototype = SVGAnimationElementWrappingImplementation.prototype;
// ********** Code for SVGAnimateColorElementWrappingImplementation **************
$inherits(SVGAnimateColorElementWrappingImplementation, SVGAnimationElementWrappingImplementation);
function SVGAnimateColorElementWrappingImplementation() {}
SVGAnimateColorElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGAnimationElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAnimateColorElementWrappingImplementation._wrap$ctor.prototype = SVGAnimateColorElementWrappingImplementation.prototype;
// ********** Code for SVGAnimateElementWrappingImplementation **************
$inherits(SVGAnimateElementWrappingImplementation, SVGAnimationElementWrappingImplementation);
function SVGAnimateElementWrappingImplementation() {}
SVGAnimateElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGAnimationElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAnimateElementWrappingImplementation._wrap$ctor.prototype = SVGAnimateElementWrappingImplementation.prototype;
// ********** Code for SVGAnimateMotionElementWrappingImplementation **************
$inherits(SVGAnimateMotionElementWrappingImplementation, SVGAnimationElementWrappingImplementation);
function SVGAnimateMotionElementWrappingImplementation() {}
SVGAnimateMotionElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGAnimationElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAnimateMotionElementWrappingImplementation._wrap$ctor.prototype = SVGAnimateMotionElementWrappingImplementation.prototype;
// ********** Code for SVGAnimateTransformElementWrappingImplementation **************
$inherits(SVGAnimateTransformElementWrappingImplementation, SVGAnimationElementWrappingImplementation);
function SVGAnimateTransformElementWrappingImplementation() {}
SVGAnimateTransformElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGAnimationElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGAnimateTransformElementWrappingImplementation._wrap$ctor.prototype = SVGAnimateTransformElementWrappingImplementation.prototype;
// ********** Code for SVGAnimatedStringWrappingImplementation **************
$inherits(SVGAnimatedStringWrappingImplementation, DOMWrapperBase);
function SVGAnimatedStringWrappingImplementation() {}
SVGAnimatedStringWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  DOMWrapperBase._wrap$ctor.call(this, ptr);
}
SVGAnimatedStringWrappingImplementation._wrap$ctor.prototype = SVGAnimatedStringWrappingImplementation.prototype;
// ********** Code for SVGCircleElementWrappingImplementation **************
$inherits(SVGCircleElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGCircleElementWrappingImplementation() {}
SVGCircleElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGCircleElementWrappingImplementation._wrap$ctor.prototype = SVGCircleElementWrappingImplementation.prototype;
// ********** Code for SVGClipPathElementWrappingImplementation **************
$inherits(SVGClipPathElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGClipPathElementWrappingImplementation() {}
SVGClipPathElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGClipPathElementWrappingImplementation._wrap$ctor.prototype = SVGClipPathElementWrappingImplementation.prototype;
// ********** Code for SVGComponentTransferFunctionElementWrappingImplementation **************
$inherits(SVGComponentTransferFunctionElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGComponentTransferFunctionElementWrappingImplementation() {}
SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor.prototype = SVGComponentTransferFunctionElementWrappingImplementation.prototype;
// ********** Code for SVGCursorElementWrappingImplementation **************
$inherits(SVGCursorElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGCursorElementWrappingImplementation() {}
SVGCursorElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGCursorElementWrappingImplementation._wrap$ctor.prototype = SVGCursorElementWrappingImplementation.prototype;
// ********** Code for SVGDefsElementWrappingImplementation **************
$inherits(SVGDefsElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGDefsElementWrappingImplementation() {}
SVGDefsElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGDefsElementWrappingImplementation._wrap$ctor.prototype = SVGDefsElementWrappingImplementation.prototype;
// ********** Code for SVGDescElementWrappingImplementation **************
$inherits(SVGDescElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGDescElementWrappingImplementation() {}
SVGDescElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGDescElementWrappingImplementation._wrap$ctor.prototype = SVGDescElementWrappingImplementation.prototype;
// ********** Code for SVGEllipseElementWrappingImplementation **************
$inherits(SVGEllipseElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGEllipseElementWrappingImplementation() {}
SVGEllipseElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGEllipseElementWrappingImplementation._wrap$ctor.prototype = SVGEllipseElementWrappingImplementation.prototype;
// ********** Code for SVGFEBlendElementWrappingImplementation **************
$inherits(SVGFEBlendElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEBlendElementWrappingImplementation() {}
SVGFEBlendElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEBlendElementWrappingImplementation._wrap$ctor.prototype = SVGFEBlendElementWrappingImplementation.prototype;
// ********** Code for SVGFEColorMatrixElementWrappingImplementation **************
$inherits(SVGFEColorMatrixElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEColorMatrixElementWrappingImplementation() {}
SVGFEColorMatrixElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEColorMatrixElementWrappingImplementation._wrap$ctor.prototype = SVGFEColorMatrixElementWrappingImplementation.prototype;
// ********** Code for SVGFEComponentTransferElementWrappingImplementation **************
$inherits(SVGFEComponentTransferElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEComponentTransferElementWrappingImplementation() {}
SVGFEComponentTransferElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEComponentTransferElementWrappingImplementation._wrap$ctor.prototype = SVGFEComponentTransferElementWrappingImplementation.prototype;
// ********** Code for SVGFEConvolveMatrixElementWrappingImplementation **************
$inherits(SVGFEConvolveMatrixElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEConvolveMatrixElementWrappingImplementation() {}
SVGFEConvolveMatrixElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEConvolveMatrixElementWrappingImplementation._wrap$ctor.prototype = SVGFEConvolveMatrixElementWrappingImplementation.prototype;
// ********** Code for SVGFEDiffuseLightingElementWrappingImplementation **************
$inherits(SVGFEDiffuseLightingElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEDiffuseLightingElementWrappingImplementation() {}
SVGFEDiffuseLightingElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEDiffuseLightingElementWrappingImplementation._wrap$ctor.prototype = SVGFEDiffuseLightingElementWrappingImplementation.prototype;
// ********** Code for SVGFEDisplacementMapElementWrappingImplementation **************
$inherits(SVGFEDisplacementMapElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEDisplacementMapElementWrappingImplementation() {}
SVGFEDisplacementMapElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEDisplacementMapElementWrappingImplementation._wrap$ctor.prototype = SVGFEDisplacementMapElementWrappingImplementation.prototype;
// ********** Code for SVGFEDistantLightElementWrappingImplementation **************
$inherits(SVGFEDistantLightElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEDistantLightElementWrappingImplementation() {}
SVGFEDistantLightElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEDistantLightElementWrappingImplementation._wrap$ctor.prototype = SVGFEDistantLightElementWrappingImplementation.prototype;
// ********** Code for SVGFEDropShadowElementWrappingImplementation **************
$inherits(SVGFEDropShadowElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEDropShadowElementWrappingImplementation() {}
SVGFEDropShadowElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEDropShadowElementWrappingImplementation._wrap$ctor.prototype = SVGFEDropShadowElementWrappingImplementation.prototype;
// ********** Code for SVGFEFloodElementWrappingImplementation **************
$inherits(SVGFEFloodElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEFloodElementWrappingImplementation() {}
SVGFEFloodElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEFloodElementWrappingImplementation._wrap$ctor.prototype = SVGFEFloodElementWrappingImplementation.prototype;
// ********** Code for SVGFEFuncAElementWrappingImplementation **************
$inherits(SVGFEFuncAElementWrappingImplementation, SVGComponentTransferFunctionElementWrappingImplementation);
function SVGFEFuncAElementWrappingImplementation() {}
SVGFEFuncAElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEFuncAElementWrappingImplementation._wrap$ctor.prototype = SVGFEFuncAElementWrappingImplementation.prototype;
// ********** Code for SVGFEFuncBElementWrappingImplementation **************
$inherits(SVGFEFuncBElementWrappingImplementation, SVGComponentTransferFunctionElementWrappingImplementation);
function SVGFEFuncBElementWrappingImplementation() {}
SVGFEFuncBElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEFuncBElementWrappingImplementation._wrap$ctor.prototype = SVGFEFuncBElementWrappingImplementation.prototype;
// ********** Code for SVGFEFuncGElementWrappingImplementation **************
$inherits(SVGFEFuncGElementWrappingImplementation, SVGComponentTransferFunctionElementWrappingImplementation);
function SVGFEFuncGElementWrappingImplementation() {}
SVGFEFuncGElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEFuncGElementWrappingImplementation._wrap$ctor.prototype = SVGFEFuncGElementWrappingImplementation.prototype;
// ********** Code for SVGFEFuncRElementWrappingImplementation **************
$inherits(SVGFEFuncRElementWrappingImplementation, SVGComponentTransferFunctionElementWrappingImplementation);
function SVGFEFuncRElementWrappingImplementation() {}
SVGFEFuncRElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEFuncRElementWrappingImplementation._wrap$ctor.prototype = SVGFEFuncRElementWrappingImplementation.prototype;
// ********** Code for SVGFEGaussianBlurElementWrappingImplementation **************
$inherits(SVGFEGaussianBlurElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEGaussianBlurElementWrappingImplementation() {}
SVGFEGaussianBlurElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEGaussianBlurElementWrappingImplementation._wrap$ctor.prototype = SVGFEGaussianBlurElementWrappingImplementation.prototype;
// ********** Code for SVGFEImageElementWrappingImplementation **************
$inherits(SVGFEImageElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEImageElementWrappingImplementation() {}
SVGFEImageElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEImageElementWrappingImplementation._wrap$ctor.prototype = SVGFEImageElementWrappingImplementation.prototype;
// ********** Code for SVGFEMergeElementWrappingImplementation **************
$inherits(SVGFEMergeElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEMergeElementWrappingImplementation() {}
SVGFEMergeElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEMergeElementWrappingImplementation._wrap$ctor.prototype = SVGFEMergeElementWrappingImplementation.prototype;
// ********** Code for SVGFEMergeNodeElementWrappingImplementation **************
$inherits(SVGFEMergeNodeElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEMergeNodeElementWrappingImplementation() {}
SVGFEMergeNodeElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEMergeNodeElementWrappingImplementation._wrap$ctor.prototype = SVGFEMergeNodeElementWrappingImplementation.prototype;
// ********** Code for SVGFEOffsetElementWrappingImplementation **************
$inherits(SVGFEOffsetElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEOffsetElementWrappingImplementation() {}
SVGFEOffsetElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEOffsetElementWrappingImplementation._wrap$ctor.prototype = SVGFEOffsetElementWrappingImplementation.prototype;
// ********** Code for SVGFEPointLightElementWrappingImplementation **************
$inherits(SVGFEPointLightElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFEPointLightElementWrappingImplementation() {}
SVGFEPointLightElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFEPointLightElementWrappingImplementation._wrap$ctor.prototype = SVGFEPointLightElementWrappingImplementation.prototype;
// ********** Code for SVGFESpecularLightingElementWrappingImplementation **************
$inherits(SVGFESpecularLightingElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFESpecularLightingElementWrappingImplementation() {}
SVGFESpecularLightingElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFESpecularLightingElementWrappingImplementation._wrap$ctor.prototype = SVGFESpecularLightingElementWrappingImplementation.prototype;
// ********** Code for SVGFESpotLightElementWrappingImplementation **************
$inherits(SVGFESpotLightElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFESpotLightElementWrappingImplementation() {}
SVGFESpotLightElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFESpotLightElementWrappingImplementation._wrap$ctor.prototype = SVGFESpotLightElementWrappingImplementation.prototype;
// ********** Code for SVGFETileElementWrappingImplementation **************
$inherits(SVGFETileElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFETileElementWrappingImplementation() {}
SVGFETileElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFETileElementWrappingImplementation._wrap$ctor.prototype = SVGFETileElementWrappingImplementation.prototype;
// ********** Code for SVGFETurbulenceElementWrappingImplementation **************
$inherits(SVGFETurbulenceElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFETurbulenceElementWrappingImplementation() {}
SVGFETurbulenceElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFETurbulenceElementWrappingImplementation._wrap$ctor.prototype = SVGFETurbulenceElementWrappingImplementation.prototype;
// ********** Code for SVGFilterElementWrappingImplementation **************
$inherits(SVGFilterElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFilterElementWrappingImplementation() {}
SVGFilterElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFilterElementWrappingImplementation._wrap$ctor.prototype = SVGFilterElementWrappingImplementation.prototype;
// ********** Code for SVGFontElementWrappingImplementation **************
$inherits(SVGFontElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontElementWrappingImplementation() {}
SVGFontElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontElementWrappingImplementation._wrap$ctor.prototype = SVGFontElementWrappingImplementation.prototype;
// ********** Code for SVGFontFaceElementWrappingImplementation **************
$inherits(SVGFontFaceElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontFaceElementWrappingImplementation() {}
SVGFontFaceElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontFaceElementWrappingImplementation._wrap$ctor.prototype = SVGFontFaceElementWrappingImplementation.prototype;
// ********** Code for SVGFontFaceFormatElementWrappingImplementation **************
$inherits(SVGFontFaceFormatElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontFaceFormatElementWrappingImplementation() {}
SVGFontFaceFormatElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontFaceFormatElementWrappingImplementation._wrap$ctor.prototype = SVGFontFaceFormatElementWrappingImplementation.prototype;
// ********** Code for SVGFontFaceNameElementWrappingImplementation **************
$inherits(SVGFontFaceNameElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontFaceNameElementWrappingImplementation() {}
SVGFontFaceNameElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontFaceNameElementWrappingImplementation._wrap$ctor.prototype = SVGFontFaceNameElementWrappingImplementation.prototype;
// ********** Code for SVGFontFaceSrcElementWrappingImplementation **************
$inherits(SVGFontFaceSrcElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontFaceSrcElementWrappingImplementation() {}
SVGFontFaceSrcElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontFaceSrcElementWrappingImplementation._wrap$ctor.prototype = SVGFontFaceSrcElementWrappingImplementation.prototype;
// ********** Code for SVGFontFaceUriElementWrappingImplementation **************
$inherits(SVGFontFaceUriElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGFontFaceUriElementWrappingImplementation() {}
SVGFontFaceUriElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGFontFaceUriElementWrappingImplementation._wrap$ctor.prototype = SVGFontFaceUriElementWrappingImplementation.prototype;
// ********** Code for SVGForeignObjectElementWrappingImplementation **************
$inherits(SVGForeignObjectElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGForeignObjectElementWrappingImplementation() {}
SVGForeignObjectElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGForeignObjectElementWrappingImplementation._wrap$ctor.prototype = SVGForeignObjectElementWrappingImplementation.prototype;
// ********** Code for SVGGElementWrappingImplementation **************
$inherits(SVGGElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGGElementWrappingImplementation() {}
SVGGElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGGElementWrappingImplementation._wrap$ctor.prototype = SVGGElementWrappingImplementation.prototype;
// ********** Code for SVGGlyphElementWrappingImplementation **************
$inherits(SVGGlyphElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGGlyphElementWrappingImplementation() {}
SVGGlyphElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGGlyphElementWrappingImplementation._wrap$ctor.prototype = SVGGlyphElementWrappingImplementation.prototype;
// ********** Code for SVGGlyphRefElementWrappingImplementation **************
$inherits(SVGGlyphRefElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGGlyphRefElementWrappingImplementation() {}
SVGGlyphRefElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGGlyphRefElementWrappingImplementation._wrap$ctor.prototype = SVGGlyphRefElementWrappingImplementation.prototype;
// ********** Code for SVGGradientElementWrappingImplementation **************
$inherits(SVGGradientElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGGradientElementWrappingImplementation() {}
SVGGradientElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGGradientElementWrappingImplementation._wrap$ctor.prototype = SVGGradientElementWrappingImplementation.prototype;
// ********** Code for SVGHKernElementWrappingImplementation **************
$inherits(SVGHKernElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGHKernElementWrappingImplementation() {}
SVGHKernElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGHKernElementWrappingImplementation._wrap$ctor.prototype = SVGHKernElementWrappingImplementation.prototype;
// ********** Code for SVGImageElementWrappingImplementation **************
$inherits(SVGImageElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGImageElementWrappingImplementation() {}
SVGImageElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGImageElementWrappingImplementation._wrap$ctor.prototype = SVGImageElementWrappingImplementation.prototype;
// ********** Code for SVGLineElementWrappingImplementation **************
$inherits(SVGLineElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGLineElementWrappingImplementation() {}
SVGLineElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGLineElementWrappingImplementation._wrap$ctor.prototype = SVGLineElementWrappingImplementation.prototype;
// ********** Code for SVGLinearGradientElementWrappingImplementation **************
$inherits(SVGLinearGradientElementWrappingImplementation, SVGGradientElementWrappingImplementation);
function SVGLinearGradientElementWrappingImplementation() {}
SVGLinearGradientElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGGradientElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGLinearGradientElementWrappingImplementation._wrap$ctor.prototype = SVGLinearGradientElementWrappingImplementation.prototype;
// ********** Code for SVGMPathElementWrappingImplementation **************
$inherits(SVGMPathElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGMPathElementWrappingImplementation() {}
SVGMPathElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGMPathElementWrappingImplementation._wrap$ctor.prototype = SVGMPathElementWrappingImplementation.prototype;
// ********** Code for SVGMarkerElementWrappingImplementation **************
$inherits(SVGMarkerElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGMarkerElementWrappingImplementation() {}
SVGMarkerElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGMarkerElementWrappingImplementation._wrap$ctor.prototype = SVGMarkerElementWrappingImplementation.prototype;
// ********** Code for SVGMaskElementWrappingImplementation **************
$inherits(SVGMaskElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGMaskElementWrappingImplementation() {}
SVGMaskElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGMaskElementWrappingImplementation._wrap$ctor.prototype = SVGMaskElementWrappingImplementation.prototype;
// ********** Code for SVGMetadataElementWrappingImplementation **************
$inherits(SVGMetadataElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGMetadataElementWrappingImplementation() {}
SVGMetadataElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGMetadataElementWrappingImplementation._wrap$ctor.prototype = SVGMetadataElementWrappingImplementation.prototype;
// ********** Code for SVGMissingGlyphElementWrappingImplementation **************
$inherits(SVGMissingGlyphElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGMissingGlyphElementWrappingImplementation() {}
SVGMissingGlyphElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGMissingGlyphElementWrappingImplementation._wrap$ctor.prototype = SVGMissingGlyphElementWrappingImplementation.prototype;
// ********** Code for SVGPathElementWrappingImplementation **************
$inherits(SVGPathElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGPathElementWrappingImplementation() {}
SVGPathElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGPathElementWrappingImplementation._wrap$ctor.prototype = SVGPathElementWrappingImplementation.prototype;
// ********** Code for SVGPatternElementWrappingImplementation **************
$inherits(SVGPatternElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGPatternElementWrappingImplementation() {}
SVGPatternElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGPatternElementWrappingImplementation._wrap$ctor.prototype = SVGPatternElementWrappingImplementation.prototype;
// ********** Code for SVGPolygonElementWrappingImplementation **************
$inherits(SVGPolygonElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGPolygonElementWrappingImplementation() {}
SVGPolygonElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGPolygonElementWrappingImplementation._wrap$ctor.prototype = SVGPolygonElementWrappingImplementation.prototype;
// ********** Code for SVGPolylineElementWrappingImplementation **************
$inherits(SVGPolylineElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGPolylineElementWrappingImplementation() {}
SVGPolylineElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGPolylineElementWrappingImplementation._wrap$ctor.prototype = SVGPolylineElementWrappingImplementation.prototype;
// ********** Code for SVGRadialGradientElementWrappingImplementation **************
$inherits(SVGRadialGradientElementWrappingImplementation, SVGGradientElementWrappingImplementation);
function SVGRadialGradientElementWrappingImplementation() {}
SVGRadialGradientElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGGradientElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGRadialGradientElementWrappingImplementation._wrap$ctor.prototype = SVGRadialGradientElementWrappingImplementation.prototype;
// ********** Code for SVGRectElementWrappingImplementation **************
$inherits(SVGRectElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGRectElementWrappingImplementation() {}
SVGRectElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGRectElementWrappingImplementation._wrap$ctor.prototype = SVGRectElementWrappingImplementation.prototype;
// ********** Code for SVGScriptElementWrappingImplementation **************
$inherits(SVGScriptElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGScriptElementWrappingImplementation() {}
SVGScriptElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGScriptElementWrappingImplementation._wrap$ctor.prototype = SVGScriptElementWrappingImplementation.prototype;
// ********** Code for SVGSetElementWrappingImplementation **************
$inherits(SVGSetElementWrappingImplementation, SVGAnimationElementWrappingImplementation);
function SVGSetElementWrappingImplementation() {}
SVGSetElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGAnimationElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGSetElementWrappingImplementation._wrap$ctor.prototype = SVGSetElementWrappingImplementation.prototype;
// ********** Code for SVGStopElementWrappingImplementation **************
$inherits(SVGStopElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGStopElementWrappingImplementation() {}
SVGStopElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGStopElementWrappingImplementation._wrap$ctor.prototype = SVGStopElementWrappingImplementation.prototype;
// ********** Code for SVGStyleElementWrappingImplementation **************
$inherits(SVGStyleElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGStyleElementWrappingImplementation() {}
SVGStyleElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGStyleElementWrappingImplementation._wrap$ctor.prototype = SVGStyleElementWrappingImplementation.prototype;
// ********** Code for SVGSwitchElementWrappingImplementation **************
$inherits(SVGSwitchElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGSwitchElementWrappingImplementation() {}
SVGSwitchElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGSwitchElementWrappingImplementation._wrap$ctor.prototype = SVGSwitchElementWrappingImplementation.prototype;
// ********** Code for SVGSymbolElementWrappingImplementation **************
$inherits(SVGSymbolElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGSymbolElementWrappingImplementation() {}
SVGSymbolElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGSymbolElementWrappingImplementation._wrap$ctor.prototype = SVGSymbolElementWrappingImplementation.prototype;
// ********** Code for SVGTRefElementWrappingImplementation **************
$inherits(SVGTRefElementWrappingImplementation, SVGTextPositioningElementWrappingImplementation);
function SVGTRefElementWrappingImplementation() {}
SVGTRefElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGTextPositioningElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTRefElementWrappingImplementation._wrap$ctor.prototype = SVGTRefElementWrappingImplementation.prototype;
// ********** Code for SVGTSpanElementWrappingImplementation **************
$inherits(SVGTSpanElementWrappingImplementation, SVGTextPositioningElementWrappingImplementation);
function SVGTSpanElementWrappingImplementation() {}
SVGTSpanElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGTextPositioningElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTSpanElementWrappingImplementation._wrap$ctor.prototype = SVGTSpanElementWrappingImplementation.prototype;
// ********** Code for SVGTextElementWrappingImplementation **************
$inherits(SVGTextElementWrappingImplementation, SVGTextPositioningElementWrappingImplementation);
function SVGTextElementWrappingImplementation() {}
SVGTextElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGTextPositioningElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTextElementWrappingImplementation._wrap$ctor.prototype = SVGTextElementWrappingImplementation.prototype;
// ********** Code for SVGTextPathElementWrappingImplementation **************
$inherits(SVGTextPathElementWrappingImplementation, SVGTextContentElementWrappingImplementation);
function SVGTextPathElementWrappingImplementation() {}
SVGTextPathElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGTextContentElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTextPathElementWrappingImplementation._wrap$ctor.prototype = SVGTextPathElementWrappingImplementation.prototype;
// ********** Code for SVGTitleElementWrappingImplementation **************
$inherits(SVGTitleElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGTitleElementWrappingImplementation() {}
SVGTitleElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGTitleElementWrappingImplementation._wrap$ctor.prototype = SVGTitleElementWrappingImplementation.prototype;
// ********** Code for SVGUseElementWrappingImplementation **************
$inherits(SVGUseElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGUseElementWrappingImplementation() {}
SVGUseElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGUseElementWrappingImplementation._wrap$ctor.prototype = SVGUseElementWrappingImplementation.prototype;
// ********** Code for SVGVKernElementWrappingImplementation **************
$inherits(SVGVKernElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGVKernElementWrappingImplementation() {}
SVGVKernElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGVKernElementWrappingImplementation._wrap$ctor.prototype = SVGVKernElementWrappingImplementation.prototype;
// ********** Code for SVGViewElementWrappingImplementation **************
$inherits(SVGViewElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGViewElementWrappingImplementation() {}
SVGViewElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGViewElementWrappingImplementation._wrap$ctor.prototype = SVGViewElementWrappingImplementation.prototype;
// ********** Code for UIEventWrappingImplementation **************
$inherits(UIEventWrappingImplementation, EventWrappingImplementation);
function UIEventWrappingImplementation() {}
UIEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
UIEventWrappingImplementation._wrap$ctor.prototype = UIEventWrappingImplementation.prototype;
// ********** Code for SVGZoomEventWrappingImplementation **************
$inherits(SVGZoomEventWrappingImplementation, UIEventWrappingImplementation);
function SVGZoomEventWrappingImplementation() {}
SVGZoomEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGZoomEventWrappingImplementation._wrap$ctor.prototype = SVGZoomEventWrappingImplementation.prototype;
// ********** Code for ScriptElementWrappingImplementation **************
$inherits(ScriptElementWrappingImplementation, ElementWrappingImplementation);
function ScriptElementWrappingImplementation() {}
ScriptElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ScriptElementWrappingImplementation._wrap$ctor.prototype = ScriptElementWrappingImplementation.prototype;
// ********** Code for SelectElementWrappingImplementation **************
$inherits(SelectElementWrappingImplementation, ElementWrappingImplementation);
function SelectElementWrappingImplementation() {}
SelectElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SelectElementWrappingImplementation._wrap$ctor.prototype = SelectElementWrappingImplementation.prototype;
SelectElementWrappingImplementation.prototype.get$length = function() {
  return this._ptr.get$length();
}
SelectElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
SelectElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for SourceElementWrappingImplementation **************
$inherits(SourceElementWrappingImplementation, ElementWrappingImplementation);
function SourceElementWrappingImplementation() {}
SourceElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SourceElementWrappingImplementation._wrap$ctor.prototype = SourceElementWrappingImplementation.prototype;
// ********** Code for SpanElementWrappingImplementation **************
$inherits(SpanElementWrappingImplementation, ElementWrappingImplementation);
function SpanElementWrappingImplementation() {}
SpanElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SpanElementWrappingImplementation._wrap$ctor.prototype = SpanElementWrappingImplementation.prototype;
// ********** Code for SpeechInputEventWrappingImplementation **************
$inherits(SpeechInputEventWrappingImplementation, EventWrappingImplementation);
function SpeechInputEventWrappingImplementation() {}
SpeechInputEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
SpeechInputEventWrappingImplementation._wrap$ctor.prototype = SpeechInputEventWrappingImplementation.prototype;
// ********** Code for StyleElementWrappingImplementation **************
$inherits(StyleElementWrappingImplementation, ElementWrappingImplementation);
function StyleElementWrappingImplementation() {}
StyleElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
StyleElementWrappingImplementation._wrap$ctor.prototype = StyleElementWrappingImplementation.prototype;
// ********** Code for TableCaptionElementWrappingImplementation **************
$inherits(TableCaptionElementWrappingImplementation, ElementWrappingImplementation);
function TableCaptionElementWrappingImplementation() {}
TableCaptionElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableCaptionElementWrappingImplementation._wrap$ctor.prototype = TableCaptionElementWrappingImplementation.prototype;
// ********** Code for TableCellElementWrappingImplementation **************
$inherits(TableCellElementWrappingImplementation, ElementWrappingImplementation);
function TableCellElementWrappingImplementation() {}
TableCellElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableCellElementWrappingImplementation._wrap$ctor.prototype = TableCellElementWrappingImplementation.prototype;
// ********** Code for TableColElementWrappingImplementation **************
$inherits(TableColElementWrappingImplementation, ElementWrappingImplementation);
function TableColElementWrappingImplementation() {}
TableColElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableColElementWrappingImplementation._wrap$ctor.prototype = TableColElementWrappingImplementation.prototype;
// ********** Code for TableElementWrappingImplementation **************
$inherits(TableElementWrappingImplementation, ElementWrappingImplementation);
function TableElementWrappingImplementation() {}
TableElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableElementWrappingImplementation._wrap$ctor.prototype = TableElementWrappingImplementation.prototype;
// ********** Code for TableRowElementWrappingImplementation **************
$inherits(TableRowElementWrappingImplementation, ElementWrappingImplementation);
function TableRowElementWrappingImplementation() {}
TableRowElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableRowElementWrappingImplementation._wrap$ctor.prototype = TableRowElementWrappingImplementation.prototype;
// ********** Code for TableSectionElementWrappingImplementation **************
$inherits(TableSectionElementWrappingImplementation, ElementWrappingImplementation);
function TableSectionElementWrappingImplementation() {}
TableSectionElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TableSectionElementWrappingImplementation._wrap$ctor.prototype = TableSectionElementWrappingImplementation.prototype;
// ********** Code for TextAreaElementWrappingImplementation **************
$inherits(TextAreaElementWrappingImplementation, ElementWrappingImplementation);
function TextAreaElementWrappingImplementation() {}
TextAreaElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TextAreaElementWrappingImplementation._wrap$ctor.prototype = TextAreaElementWrappingImplementation.prototype;
TextAreaElementWrappingImplementation.prototype.get$value = function() {
  return this._ptr.get$value();
}
TextAreaElementWrappingImplementation.prototype.set$value = function(value) {
  this._ptr.set$value(value);
}
// ********** Code for TitleElementWrappingImplementation **************
$inherits(TitleElementWrappingImplementation, ElementWrappingImplementation);
function TitleElementWrappingImplementation() {}
TitleElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TitleElementWrappingImplementation._wrap$ctor.prototype = TitleElementWrappingImplementation.prototype;
// ********** Code for TrackElementWrappingImplementation **************
$inherits(TrackElementWrappingImplementation, ElementWrappingImplementation);
function TrackElementWrappingImplementation() {}
TrackElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
TrackElementWrappingImplementation._wrap$ctor.prototype = TrackElementWrappingImplementation.prototype;
// ********** Code for UListElementWrappingImplementation **************
$inherits(UListElementWrappingImplementation, ElementWrappingImplementation);
function UListElementWrappingImplementation() {}
UListElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
UListElementWrappingImplementation._wrap$ctor.prototype = UListElementWrappingImplementation.prototype;
// ********** Code for UnknownElementWrappingImplementation **************
$inherits(UnknownElementWrappingImplementation, ElementWrappingImplementation);
function UnknownElementWrappingImplementation() {}
UnknownElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
UnknownElementWrappingImplementation._wrap$ctor.prototype = UnknownElementWrappingImplementation.prototype;
// ********** Code for VideoElementWrappingImplementation **************
$inherits(VideoElementWrappingImplementation, MediaElementWrappingImplementation);
function VideoElementWrappingImplementation() {}
VideoElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  MediaElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
VideoElementWrappingImplementation._wrap$ctor.prototype = VideoElementWrappingImplementation.prototype;
// ********** Code for WebGLContextEventWrappingImplementation **************
$inherits(WebGLContextEventWrappingImplementation, EventWrappingImplementation);
function WebGLContextEventWrappingImplementation() {}
WebGLContextEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
WebGLContextEventWrappingImplementation._wrap$ctor.prototype = WebGLContextEventWrappingImplementation.prototype;
// ********** Code for LevelDom **************
function LevelDom() {}
LevelDom.wrapDocument = function(raw) {
  if (raw == null) {
    return null;
  }
  if (raw.get$dartObjectLocalStorage() != null) {
    return raw.get$dartObjectLocalStorage();
  }
  switch (raw.get$typeName()) {
    case "HTMLDocument":

      return new DocumentWrappingImplementation._wrap$ctor(raw, raw.get$documentElement());

    case "SVGDocument":

      return new SVGDocumentWrappingImplementation._wrap$ctor(raw);

    default:

      $throw(new UnsupportedOperationException("Unknown type:" + raw.toString$0()));

  }
}
LevelDom.wrapElement = function(raw) {
  if (raw == null) {
    return null;
  }
  if (raw.get$dartObjectLocalStorage() != null) {
    return raw.get$dartObjectLocalStorage();
  }
  switch (raw.get$typeName()) {
    case "HTMLAnchorElement":

      return new AnchorElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLAreaElement":

      return new AreaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLAudioElement":

      return new AudioElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBRElement":

      return new BRElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBaseElement":

      return new BaseElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBodyElement":

      return new BodyElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLButtonElement":

      return new ButtonElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLCanvasElement":

      return new CanvasElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDListElement":

      return new DListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDataListElement":

      return new DataListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDetailsElement":

      return new DetailsElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDivElement":

      return new DivElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLElement":

      return new ElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLEmbedElement":

      return new EmbedElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLFieldSetElement":

      return new FieldSetElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLFontElement":

      return new FontElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLFormElement":

      return new FormElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHRElement":

      return new HRElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHeadElement":

      return new HeadElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHeadingElement":

      return new HeadingElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHtmlElement":

      return new DocumentWrappingImplementation._wrap$ctor(raw.get$parentNode(), raw);

    case "HTMLIFrameElement":

      return new IFrameElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLImageElement":

      return new ImageElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLInputElement":

      return new InputElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLKeygenElement":

      return new KeygenElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLIElement":

      return new LIElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLabelElement":

      return new LabelElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLegendElement":

      return new LegendElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLinkElement":

      return new LinkElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMapElement":

      return new MapElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMarqueeElement":

      return new MarqueeElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMediaElement":

      return new MediaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMenuElement":

      return new MenuElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMetaElement":

      return new MetaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMeterElement":

      return new MeterElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLModElement":

      return new ModElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOListElement":

      return new OListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLObjectElement":

      return new ObjectElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOptGroupElement":

      return new OptGroupElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOptionElement":

      return new OptionElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOutputElement":

      return new OutputElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLParagraphElement":

      return new ParagraphElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLParamElement":

      return new ParamElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLPreElement":

      return new PreElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLProgressElement":

      return new ProgressElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLQuoteElement":

      return new QuoteElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAElement":

      return new SVGAElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphDefElement":

      return new SVGAltGlyphDefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphElement":

      return new SVGAltGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphItemElement":

      return new SVGAltGlyphItemElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateColorElement":

      return new SVGAnimateColorElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateElement":

      return new SVGAnimateElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateMotionElement":

      return new SVGAnimateMotionElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateTransformElement":

      return new SVGAnimateTransformElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimationElement":

      return new SVGAnimationElementWrappingImplementation._wrap$ctor(raw);

    case "SVGCircleElement":

      return new SVGCircleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGClipPathElement":

      return new SVGClipPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGComponentTransferFunctionElement":

      return new SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor(raw);

    case "SVGCursorElement":

      return new SVGCursorElementWrappingImplementation._wrap$ctor(raw);

    case "SVGDefsElement":

      return new SVGDefsElementWrappingImplementation._wrap$ctor(raw);

    case "SVGDescElement":

      return new SVGDescElementWrappingImplementation._wrap$ctor(raw);

    case "SVGElement":

      return new SVGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGEllipseElement":

      return new SVGEllipseElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEBlendElement":

      return new SVGFEBlendElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEColorMatrixElement":

      return new SVGFEColorMatrixElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEComponentTransferElement":

      return new SVGFEComponentTransferElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEConvolveMatrixElement":

      return new SVGFEConvolveMatrixElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDiffuseLightingElement":

      return new SVGFEDiffuseLightingElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDisplacementMapElement":

      return new SVGFEDisplacementMapElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDistantLightElement":

      return new SVGFEDistantLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDropShadowElement":

      return new SVGFEDropShadowElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFloodElement":

      return new SVGFEFloodElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncAElement":

      return new SVGFEFuncAElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncBElement":

      return new SVGFEFuncBElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncGElement":

      return new SVGFEFuncGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncRElement":

      return new SVGFEFuncRElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEGaussianBlurElement":

      return new SVGFEGaussianBlurElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEImageElement":

      return new SVGFEImageElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEMergeElement":

      return new SVGFEMergeElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEMergeNodeElement":

      return new SVGFEMergeNodeElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEOffsetElement":

      return new SVGFEOffsetElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEPointLightElement":

      return new SVGFEPointLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFESpecularLightingElement":

      return new SVGFESpecularLightingElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFESpotLightElement":

      return new SVGFESpotLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFETileElement":

      return new SVGFETileElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFETurbulenceElement":

      return new SVGFETurbulenceElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFilterElement":

      return new SVGFilterElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontElement":

      return new SVGFontElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceElement":

      return new SVGFontFaceElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceFormatElement":

      return new SVGFontFaceFormatElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceNameElement":

      return new SVGFontFaceNameElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceSrcElement":

      return new SVGFontFaceSrcElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceUriElement":

      return new SVGFontFaceUriElementWrappingImplementation._wrap$ctor(raw);

    case "SVGForeignObjectElement":

      return new SVGForeignObjectElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGElement":

      return new SVGGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGlyphElement":

      return new SVGGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGlyphRefElement":

      return new SVGGlyphRefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGradientElement":

      return new SVGGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGHKernElement":

      return new SVGHKernElementWrappingImplementation._wrap$ctor(raw);

    case "SVGImageElement":

      return new SVGImageElementWrappingImplementation._wrap$ctor(raw);

    case "SVGLineElement":

      return new SVGLineElementWrappingImplementation._wrap$ctor(raw);

    case "SVGLinearGradientElement":

      return new SVGLinearGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMPathElement":

      return new SVGMPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMarkerElement":

      return new SVGMarkerElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMaskElement":

      return new SVGMaskElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMetadataElement":

      return new SVGMetadataElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMissingGlyphElement":

      return new SVGMissingGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPathElement":

      return new SVGPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPatternElement":

      return new SVGPatternElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPolygonElement":

      return new SVGPolygonElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPolylineElement":

      return new SVGPolylineElementWrappingImplementation._wrap$ctor(raw);

    case "SVGRadialGradientElement":

      return new SVGRadialGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGRectElement":

      return new SVGRectElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSVGElement":

      return new SVGSVGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGScriptElement":

      return new SVGScriptElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSetElement":

      return new SVGSetElementWrappingImplementation._wrap$ctor(raw);

    case "SVGStopElement":

      return new SVGStopElementWrappingImplementation._wrap$ctor(raw);

    case "SVGStyleElement":

      return new SVGStyleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSwitchElement":

      return new SVGSwitchElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSymbolElement":

      return new SVGSymbolElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTRefElement":

      return new SVGTRefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTSpanElement":

      return new SVGTSpanElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextContentElement":

      return new SVGTextContentElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextElement":

      return new SVGTextElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextPathElement":

      return new SVGTextPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextPositioningElement":

      return new SVGTextPositioningElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTitleElement":

      return new SVGTitleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGUseElement":

      return new SVGUseElementWrappingImplementation._wrap$ctor(raw);

    case "SVGVKernElement":

      return new SVGVKernElementWrappingImplementation._wrap$ctor(raw);

    case "SVGViewElement":

      return new SVGViewElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLScriptElement":

      return new ScriptElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSelectElement":

      return new SelectElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSourceElement":

      return new SourceElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSpanElement":

      return new SpanElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLStyleElement":

      return new StyleElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableCaptionElement":

      return new TableCaptionElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableCellElement":

      return new TableCellElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableColElement":

      return new TableColElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableElement":

      return new TableElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableRowElement":

      return new TableRowElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableSectionElement":

      return new TableSectionElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTextAreaElement":

      return new TextAreaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTitleElement":

      return new TitleElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTrackElement":

      return new TrackElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLUListElement":

      return new UListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLUnknownElement":

      return new UnknownElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLVideoElement":

      return new VideoElementWrappingImplementation._wrap$ctor(raw);

    default:

      $throw(new UnsupportedOperationException("Unknown type:" + raw.toString$0()));

  }
}
LevelDom.wrapElementList = function(raw) {
  return raw == null ? null : new FrozenElementList._wrap$ctor(raw);
}
LevelDom.wrapEvent = function(raw) {
  if (raw == null) {
    return null;
  }
  if (raw.get$dartObjectLocalStorage() != null) {
    return raw.get$dartObjectLocalStorage();
  }
  switch (raw.get$typeName()) {
    case "WebKitAnimationEvent":

      return new AnimationEventWrappingImplementation._wrap$ctor(raw);

    case "AudioProcessingEvent":

      return new AudioProcessingEventWrappingImplementation._wrap$ctor(raw);

    case "BeforeLoadEvent":

      return new BeforeLoadEventWrappingImplementation._wrap$ctor(raw);

    case "CloseEvent":

      return new CloseEventWrappingImplementation._wrap$ctor(raw);

    case "CompositionEvent":

      return new CompositionEventWrappingImplementation._wrap$ctor(raw);

    case "CustomEvent":

      return new CustomEventWrappingImplementation._wrap$ctor(raw);

    case "DeviceMotionEvent":

      return new DeviceMotionEventWrappingImplementation._wrap$ctor(raw);

    case "DeviceOrientationEvent":

      return new DeviceOrientationEventWrappingImplementation._wrap$ctor(raw);

    case "ErrorEvent":

      return new ErrorEventWrappingImplementation._wrap$ctor(raw);

    case "Event":

      return new EventWrappingImplementation._wrap$ctor(raw);

    case "HashChangeEvent":

      return new HashChangeEventWrappingImplementation._wrap$ctor(raw);

    case "IDBVersionChangeEvent":

      return new IDBVersionChangeEventWrappingImplementation._wrap$ctor(raw);

    case "KeyboardEvent":

      return new KeyboardEventWrappingImplementation._wrap$ctor(raw);

    case "MessageEvent":

      return new MessageEventWrappingImplementation._wrap$ctor(raw);

    case "MouseEvent":

      return new MouseEventWrappingImplementation._wrap$ctor(raw);

    case "MutationEvent":

      return new MutationEventWrappingImplementation._wrap$ctor(raw);

    case "OfflineAudioCompletionEvent":

      return new OfflineAudioCompletionEventWrappingImplementation._wrap$ctor(raw);

    case "OverflowEvent":

      return new OverflowEventWrappingImplementation._wrap$ctor(raw);

    case "PageTransitionEvent":

      return new PageTransitionEventWrappingImplementation._wrap$ctor(raw);

    case "PopStateEvent":

      return new PopStateEventWrappingImplementation._wrap$ctor(raw);

    case "ProgressEvent":

      return new ProgressEventWrappingImplementation._wrap$ctor(raw);

    case "SVGZoomEvent":

      return new SVGZoomEventWrappingImplementation._wrap$ctor(raw);

    case "SpeechInputEvent":

      return new SpeechInputEventWrappingImplementation._wrap$ctor(raw);

    case "StorageEvent":

      return new StorageEventWrappingImplementation._wrap$ctor(raw);

    case "TextEvent":

      return new TextEventWrappingImplementation._wrap$ctor(raw);

    case "TouchEvent":

      return new TouchEventWrappingImplementation._wrap$ctor(raw);

    case "WebKitTransitionEvent":

      return new TransitionEventWrappingImplementation._wrap$ctor(raw);

    case "UIEvent":

      return new UIEventWrappingImplementation._wrap$ctor(raw);

    case "WebGLContextEvent":

      return new WebGLContextEventWrappingImplementation._wrap$ctor(raw);

    case "WheelEvent":

      return new WheelEventWrappingImplementation._wrap$ctor(raw);

    case "XMLHttpRequestProgressEvent":

      return new XMLHttpRequestProgressEventWrappingImplementation._wrap$ctor(raw);

    default:

      $throw(new UnsupportedOperationException("Unknown type:" + raw.toString$0()));

  }
}
LevelDom.wrapEventTarget = function(raw) {
  if (raw == null) {
    return null;
  }
  if (raw.get$dartObjectLocalStorage() != null) {
    return raw.get$dartObjectLocalStorage();
  }
  switch (raw.get$typeName()) {
    case "HTMLAnchorElement":

      return new AnchorElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLAreaElement":

      return new AreaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLAudioElement":

      return new AudioElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBRElement":

      return new BRElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBaseElement":

      return new BaseElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLBodyElement":

      return new BodyElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLButtonElement":

      return new ButtonElementWrappingImplementation._wrap$ctor(raw);

    case "CDATASection":

      return new CDATASectionWrappingImplementation._wrap$ctor(raw);

    case "HTMLCanvasElement":

      return new CanvasElementWrappingImplementation._wrap$ctor(raw);

    case "CharacterData":

      return new CharacterDataWrappingImplementation._wrap$ctor(raw);

    case "Comment":

      return new CommentWrappingImplementation._wrap$ctor(raw);

    case "HTMLDListElement":

      return new DListElementWrappingImplementation._wrap$ctor(raw);

    case "DOMApplicationCache":

      return new DOMApplicationCacheWrappingImplementation._wrap$ctor(raw);

    case "HTMLDataListElement":

      return new DataListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDetailsElement":

      return new DetailsElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDivElement":

      return new DivElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLDocument":

      return new DocumentWrappingImplementation._wrap$ctor(raw, raw.get$documentElement());

    case "DocumentFragment":

      return new DocumentFragmentWrappingImplementation._wrap$ctor(raw);

    case "HTMLElement":

      return new ElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLEmbedElement":

      return new EmbedElementWrappingImplementation._wrap$ctor(raw);

    case "Entity":

      return new EntityWrappingImplementation._wrap$ctor(raw);

    case "EntityReference":

      return new EntityReferenceWrappingImplementation._wrap$ctor(raw);

    case "EventSource":

      return new EventSourceWrappingImplementation._wrap$ctor(raw);

    case "EventTarget":

      return new EventTargetWrappingImplementation._wrap$ctor(raw);

    case "HTMLFieldSetElement":

      return new FieldSetElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLFontElement":

      return new FontElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLFormElement":

      return new FormElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHRElement":

      return new HRElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHeadElement":

      return new HeadElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHeadingElement":

      return new HeadingElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLHtmlElement":

      return new DocumentWrappingImplementation._wrap$ctor(raw.get$parentNode(), raw);

    case "HTMLIFrameElement":

      return new IFrameElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLImageElement":

      return new ImageElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLInputElement":

      return new InputElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLKeygenElement":

      return new KeygenElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLIElement":

      return new LIElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLabelElement":

      return new LabelElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLegendElement":

      return new LegendElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLLinkElement":

      return new LinkElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMapElement":

      return new MapElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMarqueeElement":

      return new MarqueeElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMediaElement":

      return new MediaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMenuElement":

      return new MenuElementWrappingImplementation._wrap$ctor(raw);

    case "MessagePort":

      return new MessagePortWrappingImplementation._wrap$ctor(raw);

    case "HTMLMetaElement":

      return new MetaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLMeterElement":

      return new MeterElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLModElement":

      return new ModElementWrappingImplementation._wrap$ctor(raw);

    case "Node":

      return new NodeWrappingImplementation._wrap$ctor(raw);

    case "Notation":

      return new NotationWrappingImplementation._wrap$ctor(raw);

    case "Notification":

      return new NotificationWrappingImplementation._wrap$ctor(raw);

    case "HTMLOListElement":

      return new OListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLObjectElement":

      return new ObjectElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOptGroupElement":

      return new OptGroupElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOptionElement":

      return new OptionElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLOutputElement":

      return new OutputElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLParagraphElement":

      return new ParagraphElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLParamElement":

      return new ParamElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLPreElement":

      return new PreElementWrappingImplementation._wrap$ctor(raw);

    case "ProcessingInstruction":

      return new ProcessingInstructionWrappingImplementation._wrap$ctor(raw);

    case "HTMLProgressElement":

      return new ProgressElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLQuoteElement":

      return new QuoteElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAElement":

      return new SVGAElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphDefElement":

      return new SVGAltGlyphDefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphElement":

      return new SVGAltGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAltGlyphItemElement":

      return new SVGAltGlyphItemElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateColorElement":

      return new SVGAnimateColorElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateElement":

      return new SVGAnimateElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateMotionElement":

      return new SVGAnimateMotionElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimateTransformElement":

      return new SVGAnimateTransformElementWrappingImplementation._wrap$ctor(raw);

    case "SVGAnimationElement":

      return new SVGAnimationElementWrappingImplementation._wrap$ctor(raw);

    case "SVGCircleElement":

      return new SVGCircleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGClipPathElement":

      return new SVGClipPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGComponentTransferFunctionElement":

      return new SVGComponentTransferFunctionElementWrappingImplementation._wrap$ctor(raw);

    case "SVGCursorElement":

      return new SVGCursorElementWrappingImplementation._wrap$ctor(raw);

    case "SVGDefsElement":

      return new SVGDefsElementWrappingImplementation._wrap$ctor(raw);

    case "SVGDescElement":

      return new SVGDescElementWrappingImplementation._wrap$ctor(raw);

    case "SVGDocument":

      return new SVGDocumentWrappingImplementation._wrap$ctor(raw);

    case "SVGElement":

      return new SVGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGElementInstance":

      return new SVGElementInstanceWrappingImplementation._wrap$ctor(raw);

    case "SVGEllipseElement":

      return new SVGEllipseElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEBlendElement":

      return new SVGFEBlendElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEColorMatrixElement":

      return new SVGFEColorMatrixElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEComponentTransferElement":

      return new SVGFEComponentTransferElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEConvolveMatrixElement":

      return new SVGFEConvolveMatrixElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDiffuseLightingElement":

      return new SVGFEDiffuseLightingElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDisplacementMapElement":

      return new SVGFEDisplacementMapElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDistantLightElement":

      return new SVGFEDistantLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEDropShadowElement":

      return new SVGFEDropShadowElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFloodElement":

      return new SVGFEFloodElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncAElement":

      return new SVGFEFuncAElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncBElement":

      return new SVGFEFuncBElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncGElement":

      return new SVGFEFuncGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEFuncRElement":

      return new SVGFEFuncRElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEGaussianBlurElement":

      return new SVGFEGaussianBlurElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEImageElement":

      return new SVGFEImageElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEMergeElement":

      return new SVGFEMergeElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEMergeNodeElement":

      return new SVGFEMergeNodeElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEOffsetElement":

      return new SVGFEOffsetElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFEPointLightElement":

      return new SVGFEPointLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFESpecularLightingElement":

      return new SVGFESpecularLightingElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFESpotLightElement":

      return new SVGFESpotLightElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFETileElement":

      return new SVGFETileElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFETurbulenceElement":

      return new SVGFETurbulenceElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFilterElement":

      return new SVGFilterElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontElement":

      return new SVGFontElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceElement":

      return new SVGFontFaceElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceFormatElement":

      return new SVGFontFaceFormatElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceNameElement":

      return new SVGFontFaceNameElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceSrcElement":

      return new SVGFontFaceSrcElementWrappingImplementation._wrap$ctor(raw);

    case "SVGFontFaceUriElement":

      return new SVGFontFaceUriElementWrappingImplementation._wrap$ctor(raw);

    case "SVGForeignObjectElement":

      return new SVGForeignObjectElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGElement":

      return new SVGGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGlyphElement":

      return new SVGGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGlyphRefElement":

      return new SVGGlyphRefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGGradientElement":

      return new SVGGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGHKernElement":

      return new SVGHKernElementWrappingImplementation._wrap$ctor(raw);

    case "SVGImageElement":

      return new SVGImageElementWrappingImplementation._wrap$ctor(raw);

    case "SVGLineElement":

      return new SVGLineElementWrappingImplementation._wrap$ctor(raw);

    case "SVGLinearGradientElement":

      return new SVGLinearGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMPathElement":

      return new SVGMPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMarkerElement":

      return new SVGMarkerElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMaskElement":

      return new SVGMaskElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMetadataElement":

      return new SVGMetadataElementWrappingImplementation._wrap$ctor(raw);

    case "SVGMissingGlyphElement":

      return new SVGMissingGlyphElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPathElement":

      return new SVGPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPatternElement":

      return new SVGPatternElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPolygonElement":

      return new SVGPolygonElementWrappingImplementation._wrap$ctor(raw);

    case "SVGPolylineElement":

      return new SVGPolylineElementWrappingImplementation._wrap$ctor(raw);

    case "SVGRadialGradientElement":

      return new SVGRadialGradientElementWrappingImplementation._wrap$ctor(raw);

    case "SVGRectElement":

      return new SVGRectElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSVGElement":

      return new SVGSVGElementWrappingImplementation._wrap$ctor(raw);

    case "SVGScriptElement":

      return new SVGScriptElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSetElement":

      return new SVGSetElementWrappingImplementation._wrap$ctor(raw);

    case "SVGStopElement":

      return new SVGStopElementWrappingImplementation._wrap$ctor(raw);

    case "SVGStyleElement":

      return new SVGStyleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSwitchElement":

      return new SVGSwitchElementWrappingImplementation._wrap$ctor(raw);

    case "SVGSymbolElement":

      return new SVGSymbolElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTRefElement":

      return new SVGTRefElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTSpanElement":

      return new SVGTSpanElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextContentElement":

      return new SVGTextContentElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextElement":

      return new SVGTextElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextPathElement":

      return new SVGTextPathElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTextPositioningElement":

      return new SVGTextPositioningElementWrappingImplementation._wrap$ctor(raw);

    case "SVGTitleElement":

      return new SVGTitleElementWrappingImplementation._wrap$ctor(raw);

    case "SVGUseElement":

      return new SVGUseElementWrappingImplementation._wrap$ctor(raw);

    case "SVGVKernElement":

      return new SVGVKernElementWrappingImplementation._wrap$ctor(raw);

    case "SVGViewElement":

      return new SVGViewElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLScriptElement":

      return new ScriptElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSelectElement":

      return new SelectElementWrappingImplementation._wrap$ctor(raw);

    case "SharedWorker":

      return new SharedWorkerWrappingImplementation._wrap$ctor(raw);

    case "HTMLSourceElement":

      return new SourceElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLSpanElement":

      return new SpanElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLStyleElement":

      return new StyleElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableCaptionElement":

      return new TableCaptionElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableCellElement":

      return new TableCellElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableColElement":

      return new TableColElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableElement":

      return new TableElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableRowElement":

      return new TableRowElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTableSectionElement":

      return new TableSectionElementWrappingImplementation._wrap$ctor(raw);

    case "Text":

      return new TextWrappingImplementation._wrap$ctor(raw);

    case "HTMLTextAreaElement":

      return new TextAreaElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTitleElement":

      return new TitleElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLTrackElement":

      return new TrackElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLUListElement":

      return new UListElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLUnknownElement":

      return new UnknownElementWrappingImplementation._wrap$ctor(raw);

    case "HTMLVideoElement":

      return new VideoElementWrappingImplementation._wrap$ctor(raw);

    case "WebSocket":

      return new WebSocketWrappingImplementation._wrap$ctor(raw);

    case "Window":

      return new WindowWrappingImplementation._wrap$ctor(raw);

    case "Worker":

      return new WorkerWrappingImplementation._wrap$ctor(raw);

    case "XMLHttpRequest":

      return new XMLHttpRequestWrappingImplementation._wrap$ctor(raw);

    case "XMLHttpRequestUpload":

      return new XMLHttpRequestUploadWrappingImplementation._wrap$ctor(raw);

    default:

      $throw(new UnsupportedOperationException("Unknown type:" + raw.toString$0()));

  }
}
LevelDom.wrapSVGAnimatedString = function(raw) {
  return raw == null ? null : raw.get$dartObjectLocalStorage() != null ? raw.get$dartObjectLocalStorage() : new SVGAnimatedStringWrappingImplementation._wrap$ctor(raw);
}
LevelDom.wrapSVGElementInstance = function(raw) {
  return raw == null ? null : raw.get$dartObjectLocalStorage() != null ? raw.get$dartObjectLocalStorage() : new SVGElementInstanceWrappingImplementation._wrap$ctor(raw);
}
LevelDom.wrapWindow = function(raw) {
  return raw == null ? null : raw.get$dartObjectLocalStorage() != null ? raw.get$dartObjectLocalStorage() : new WindowWrappingImplementation._wrap$ctor(raw);
}
LevelDom.unwrapMaybePrimitive = function(raw) {
  return (raw == null || (typeof(raw) == 'string') || (typeof(raw) == 'number') || (typeof(raw) == 'boolean')) ? raw : raw.get$_ptr();
}
LevelDom.initialize = function() {
  $globals.secretWindow = LevelDom.wrapWindow(get$window());
  $globals.secretDocument = LevelDom.wrapDocument(get$document());
}
// ********** Code for EventsImplementation **************
function EventsImplementation() {}
EventsImplementation._wrap$ctor = function(_ptr) {
  this._ptr = _ptr;
  // Initializers done
  this._listenerMap = new HashMapImplementation();
}
EventsImplementation._wrap$ctor.prototype = EventsImplementation.prototype;
EventsImplementation.prototype.get$_ptr = function() { return this._ptr; };
EventsImplementation.prototype.set$_ptr = function(value) { return this._ptr = value; };
EventsImplementation.prototype.$index = function(type) {
  return this._get(type.toLowerCase());
}
EventsImplementation.prototype._get = function(type) {
  var $this = this; // closure support
  return this._listenerMap.putIfAbsent(type, (function () {
    return new EventListenerListImplementation($this._ptr, type);
  })
  );
}
// ********** Code for AbstractWorkerEventsImplementation **************
$inherits(AbstractWorkerEventsImplementation, EventsImplementation);
function AbstractWorkerEventsImplementation() {}
AbstractWorkerEventsImplementation._wrap$ctor = function(_ptr) {
  // Initializers done
  EventsImplementation._wrap$ctor.call(this, _ptr);
}
AbstractWorkerEventsImplementation._wrap$ctor.prototype = AbstractWorkerEventsImplementation.prototype;
// ********** Code for AbstractWorkerWrappingImplementation **************
$inherits(AbstractWorkerWrappingImplementation, EventTargetWrappingImplementation);
function AbstractWorkerWrappingImplementation() {}
AbstractWorkerWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
AbstractWorkerWrappingImplementation._wrap$ctor.prototype = AbstractWorkerWrappingImplementation.prototype;
AbstractWorkerWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new AbstractWorkerEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
// ********** Code for AnimationEventWrappingImplementation **************
$inherits(AnimationEventWrappingImplementation, EventWrappingImplementation);
function AnimationEventWrappingImplementation() {}
AnimationEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
AnimationEventWrappingImplementation._wrap$ctor.prototype = AnimationEventWrappingImplementation.prototype;
// ********** Code for BeforeLoadEventWrappingImplementation **************
$inherits(BeforeLoadEventWrappingImplementation, EventWrappingImplementation);
function BeforeLoadEventWrappingImplementation() {}
BeforeLoadEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
BeforeLoadEventWrappingImplementation._wrap$ctor.prototype = BeforeLoadEventWrappingImplementation.prototype;
// ********** Code for ElementEventsImplementation **************
$inherits(ElementEventsImplementation, EventsImplementation);
function ElementEventsImplementation() {}
ElementEventsImplementation._wrap$ctor = function(_ptr) {
  // Initializers done
  EventsImplementation._wrap$ctor.call(this, _ptr);
}
ElementEventsImplementation._wrap$ctor.prototype = ElementEventsImplementation.prototype;
ElementEventsImplementation.prototype.get$submit = function() {
  return this._get("submit");
}
ElementEventsImplementation.prototype.submit$0 = function() {
  return this.get$submit()();
};
// ********** Code for BodyElementEventsImplementation **************
$inherits(BodyElementEventsImplementation, ElementEventsImplementation);
function BodyElementEventsImplementation() {}
BodyElementEventsImplementation._wrap$ctor = function(_ptr) {
  // Initializers done
  ElementEventsImplementation._wrap$ctor.call(this, _ptr);
}
BodyElementEventsImplementation._wrap$ctor.prototype = BodyElementEventsImplementation.prototype;
// ********** Code for BodyElementWrappingImplementation **************
$inherits(BodyElementWrappingImplementation, ElementWrappingImplementation);
function BodyElementWrappingImplementation() {}
BodyElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
BodyElementWrappingImplementation._wrap$ctor.prototype = BodyElementWrappingImplementation.prototype;
BodyElementWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new BodyElementEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
// ********** Code for CloseEventWrappingImplementation **************
$inherits(CloseEventWrappingImplementation, EventWrappingImplementation);
function CloseEventWrappingImplementation() {}
CloseEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
CloseEventWrappingImplementation._wrap$ctor.prototype = CloseEventWrappingImplementation.prototype;
// ********** Code for CompositionEventWrappingImplementation **************
$inherits(CompositionEventWrappingImplementation, UIEventWrappingImplementation);
function CompositionEventWrappingImplementation() {}
CompositionEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
CompositionEventWrappingImplementation._wrap$ctor.prototype = CompositionEventWrappingImplementation.prototype;
// ********** Code for CustomEventWrappingImplementation **************
$inherits(CustomEventWrappingImplementation, EventWrappingImplementation);
function CustomEventWrappingImplementation() {}
CustomEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
CustomEventWrappingImplementation._wrap$ctor.prototype = CustomEventWrappingImplementation.prototype;
// ********** Code for DeviceMotionEventWrappingImplementation **************
$inherits(DeviceMotionEventWrappingImplementation, EventWrappingImplementation);
function DeviceMotionEventWrappingImplementation() {}
DeviceMotionEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
DeviceMotionEventWrappingImplementation._wrap$ctor.prototype = DeviceMotionEventWrappingImplementation.prototype;
// ********** Code for DeviceOrientationEventWrappingImplementation **************
$inherits(DeviceOrientationEventWrappingImplementation, EventWrappingImplementation);
function DeviceOrientationEventWrappingImplementation() {}
DeviceOrientationEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
DeviceOrientationEventWrappingImplementation._wrap$ctor.prototype = DeviceOrientationEventWrappingImplementation.prototype;
// ********** Code for DocumentFragmentWrappingImplementation **************
$inherits(DocumentFragmentWrappingImplementation, NodeWrappingImplementation);
function DocumentFragmentWrappingImplementation() {}
DocumentFragmentWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  NodeWrappingImplementation._wrap$ctor.call(this, ptr);
}
DocumentFragmentWrappingImplementation._wrap$ctor.prototype = DocumentFragmentWrappingImplementation.prototype;
DocumentFragmentWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new ElementEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
DocumentFragmentWrappingImplementation.prototype.query = function(selectors) {
  return LevelDom.wrapElement(this._ptr.querySelector$1(selectors));
}
DocumentFragmentWrappingImplementation.prototype.queryAll = function(selectors) {
  return LevelDom.wrapElementList(this._ptr.querySelectorAll$1(selectors));
}
DocumentFragmentWrappingImplementation.prototype.query$1 = DocumentFragmentWrappingImplementation.prototype.query;
DocumentFragmentWrappingImplementation.prototype.queryAll$1 = DocumentFragmentWrappingImplementation.prototype.queryAll;
// ********** Code for DocumentEventsImplementation **************
$inherits(DocumentEventsImplementation, ElementEventsImplementation);
function DocumentEventsImplementation() {}
DocumentEventsImplementation._wrap$ctor = function(_ptr) {
  // Initializers done
  ElementEventsImplementation._wrap$ctor.call(this, _ptr);
}
DocumentEventsImplementation._wrap$ctor.prototype = DocumentEventsImplementation.prototype;
// ********** Code for DocumentWrappingImplementation **************
$inherits(DocumentWrappingImplementation, ElementWrappingImplementation);
function DocumentWrappingImplementation() {}
DocumentWrappingImplementation._wrap$ctor = function(_documentPtr, ptr) {
  this._documentPtr = _documentPtr;
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
  this._documentPtr.get$dynamic().set$dartObjectLocalStorage(this);
}
DocumentWrappingImplementation._wrap$ctor.prototype = DocumentWrappingImplementation.prototype;
DocumentWrappingImplementation.prototype.is$html_html_Document = function(){return true};
DocumentWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new DocumentEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
// ********** Code for DOMApplicationCacheEventsImplementation **************
$inherits(DOMApplicationCacheEventsImplementation, EventsImplementation);
function DOMApplicationCacheEventsImplementation() {}
DOMApplicationCacheEventsImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventsImplementation._wrap$ctor.call(this, ptr);
}
DOMApplicationCacheEventsImplementation._wrap$ctor.prototype = DOMApplicationCacheEventsImplementation.prototype;
// ********** Code for DOMApplicationCacheWrappingImplementation **************
$inherits(DOMApplicationCacheWrappingImplementation, EventTargetWrappingImplementation);
function DOMApplicationCacheWrappingImplementation() {}
DOMApplicationCacheWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
DOMApplicationCacheWrappingImplementation._wrap$ctor.prototype = DOMApplicationCacheWrappingImplementation.prototype;
DOMApplicationCacheWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new DOMApplicationCacheEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
// ********** Code for FrozenElementList **************
function FrozenElementList() {}
FrozenElementList._wrap$ctor = function(_ptr) {
  this._ptr = _ptr;
  // Initializers done
}
FrozenElementList._wrap$ctor.prototype = FrozenElementList.prototype;
FrozenElementList.prototype.get$_ptr = function() { return this._ptr; };
FrozenElementList.prototype.get$length = function() {
  return this._ptr.get$length();
}
FrozenElementList.prototype.$index = function(index) {
  return LevelDom.wrapElement(this._ptr.$index(index));
}
FrozenElementList.prototype.$setindex = function(index, value) {
  $throw(const$3/*const UnsupportedOperationException('')*/);
}
FrozenElementList.prototype.add = function(value) {
  $throw(const$3/*const UnsupportedOperationException('')*/);
}
FrozenElementList.prototype.clear = function() {
  $throw('Not impl yet. todo(jacobr)');
}
FrozenElementList.prototype.add$1 = FrozenElementList.prototype.add;
// ********** Code for ErrorEventWrappingImplementation **************
$inherits(ErrorEventWrappingImplementation, EventWrappingImplementation);
function ErrorEventWrappingImplementation() {}
ErrorEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
ErrorEventWrappingImplementation._wrap$ctor.prototype = ErrorEventWrappingImplementation.prototype;
// ********** Code for EventSourceEventsImplementation **************
$inherits(EventSourceEventsImplementation, EventsImplementation);
function EventSourceEventsImplementation() {}
EventSourceEventsImplementation._wrap$ctor = function(_ptr) {
  // Initializers done
  EventsImplementation._wrap$ctor.call(this, _ptr);
}
EventSourceEventsImplementation._wrap$ctor.prototype = EventSourceEventsImplementation.prototype;
EventSourceEventsImplementation.prototype.get$open = function() {
  return this._get('open');
}
EventSourceEventsImplementation.prototype.open$2 = function($0, $1) {
  return this.get$open()($0, $1);
};
EventSourceEventsImplementation.prototype.open$4 = function($0, $1, $2, $3) {
  return this.get$open()($0, $1, $2, $3);
};
EventSourceEventsImplementation.prototype.open$5 = function($0, $1, $2, $3, $4) {
  return this.get$open()($0, $1, $2, $3, $4);
};
// ********** Code for EventSourceWrappingImplementation **************
$inherits(EventSourceWrappingImplementation, EventTargetWrappingImplementation);
function EventSourceWrappingImplementation() {}
EventSourceWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
EventSourceWrappingImplementation._wrap$ctor.prototype = EventSourceWrappingImplementation.prototype;
EventSourceWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new EventSourceEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
// ********** Code for _EventListenerWrapper **************
function _EventListenerWrapper(raw, wrapped, useCapture) {
  this.raw = raw;
  this.wrapped = wrapped;
  this.useCapture = useCapture;
  // Initializers done
}
// ********** Code for EventListenerListImplementation **************
function EventListenerListImplementation(_ptr, _type) {
  this._ptr = _ptr;
  this._type = _type;
  this._wrappers = new Array();
  // Initializers done
}
EventListenerListImplementation.prototype.get$_ptr = function() { return this._ptr; };
EventListenerListImplementation.prototype.add = function(listener, useCapture) {
  this._add(listener, useCapture);
  return this;
}
EventListenerListImplementation.prototype._add = function(listener, useCapture) {
  this._ptr.addEventListener$3(this._type, this._findOrAddWrapper(listener, useCapture), useCapture);
}
EventListenerListImplementation.prototype._findOrAddWrapper = function(listener, useCapture) {
  if (this._wrappers == null) {
    this._wrappers = [];
  }
  else {
    var $$list = this._wrappers;
    for (var $$i = 0;$$i < $$list.get$length(); $$i++) {
      var wrapper = $$list.$index($$i);
      if (wrapper.raw === listener && $eq(wrapper.useCapture, useCapture)) {
        return wrapper.wrapped;
      }
    }
  }
  var wrapped = (function (e) {
    listener(LevelDom.wrapEvent(e));
  })
  ;
  this._wrappers.add(new _EventListenerWrapper(listener, wrapped, useCapture));
  return wrapped;
}
EventListenerListImplementation.prototype.add$1 = function($0) {
  return this.add(to$call$1($0), false);
};
// ********** Code for HashChangeEventWrappingImplementation **************
$inherits(HashChangeEventWrappingImplementation, EventWrappingImplementation);
function HashChangeEventWrappingImplementation() {}
HashChangeEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
HashChangeEventWrappingImplementation._wrap$ctor.prototype = HashChangeEventWrappingImplementation.prototype;
// ********** Code for KeyboardEventWrappingImplementation **************
$inherits(KeyboardEventWrappingImplementation, UIEventWrappingImplementation);
function KeyboardEventWrappingImplementation() {}
KeyboardEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
KeyboardEventWrappingImplementation._wrap$ctor.prototype = KeyboardEventWrappingImplementation.prototype;
// ********** Code for MessageEventWrappingImplementation **************
$inherits(MessageEventWrappingImplementation, EventWrappingImplementation);
function MessageEventWrappingImplementation() {}
MessageEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
MessageEventWrappingImplementation._wrap$ctor.prototype = MessageEventWrappingImplementation.prototype;
// ********** Code for MessagePortWrappingImplementation **************
$inherits(MessagePortWrappingImplementation, EventTargetWrappingImplementation);
function MessagePortWrappingImplementation() {}
MessagePortWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
MessagePortWrappingImplementation._wrap$ctor.prototype = MessagePortWrappingImplementation.prototype;
// ********** Code for MouseEventWrappingImplementation **************
$inherits(MouseEventWrappingImplementation, UIEventWrappingImplementation);
function MouseEventWrappingImplementation() {}
MouseEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
MouseEventWrappingImplementation._wrap$ctor.prototype = MouseEventWrappingImplementation.prototype;
// ********** Code for MutationEventWrappingImplementation **************
$inherits(MutationEventWrappingImplementation, EventWrappingImplementation);
function MutationEventWrappingImplementation() {}
MutationEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
MutationEventWrappingImplementation._wrap$ctor.prototype = MutationEventWrappingImplementation.prototype;
// ********** Code for NotificationWrappingImplementation **************
$inherits(NotificationWrappingImplementation, EventTargetWrappingImplementation);
function NotificationWrappingImplementation() {}
NotificationWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
NotificationWrappingImplementation._wrap$ctor.prototype = NotificationWrappingImplementation.prototype;
NotificationWrappingImplementation.prototype.get$typeName = function() {
  return "Notification";
}
// ********** Code for ObjectElementWrappingImplementation **************
$inherits(ObjectElementWrappingImplementation, ElementWrappingImplementation);
function ObjectElementWrappingImplementation() {}
ObjectElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
ObjectElementWrappingImplementation._wrap$ctor.prototype = ObjectElementWrappingImplementation.prototype;
// ********** Code for OverflowEventWrappingImplementation **************
$inherits(OverflowEventWrappingImplementation, EventWrappingImplementation);
function OverflowEventWrappingImplementation() {}
OverflowEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
OverflowEventWrappingImplementation._wrap$ctor.prototype = OverflowEventWrappingImplementation.prototype;
// ********** Code for PageTransitionEventWrappingImplementation **************
$inherits(PageTransitionEventWrappingImplementation, EventWrappingImplementation);
function PageTransitionEventWrappingImplementation() {}
PageTransitionEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
PageTransitionEventWrappingImplementation._wrap$ctor.prototype = PageTransitionEventWrappingImplementation.prototype;
// ********** Code for PopStateEventWrappingImplementation **************
$inherits(PopStateEventWrappingImplementation, EventWrappingImplementation);
function PopStateEventWrappingImplementation() {}
PopStateEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
PopStateEventWrappingImplementation._wrap$ctor.prototype = PopStateEventWrappingImplementation.prototype;
// ********** Code for ProgressEventWrappingImplementation **************
$inherits(ProgressEventWrappingImplementation, EventWrappingImplementation);
function ProgressEventWrappingImplementation() {}
ProgressEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
ProgressEventWrappingImplementation._wrap$ctor.prototype = ProgressEventWrappingImplementation.prototype;
// ********** Code for SharedWorkerWrappingImplementation **************
$inherits(SharedWorkerWrappingImplementation, AbstractWorkerWrappingImplementation);
function SharedWorkerWrappingImplementation() {}
SharedWorkerWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  AbstractWorkerWrappingImplementation._wrap$ctor.call(this, ptr);
}
SharedWorkerWrappingImplementation._wrap$ctor.prototype = SharedWorkerWrappingImplementation.prototype;
// ********** Code for StorageEventWrappingImplementation **************
$inherits(StorageEventWrappingImplementation, EventWrappingImplementation);
function StorageEventWrappingImplementation() {}
StorageEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
StorageEventWrappingImplementation._wrap$ctor.prototype = StorageEventWrappingImplementation.prototype;
// ********** Code for SVGDocumentWrappingImplementation **************
$inherits(SVGDocumentWrappingImplementation, DocumentWrappingImplementation);
function SVGDocumentWrappingImplementation() {}
SVGDocumentWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  DocumentWrappingImplementation._wrap$ctor.call(this, ptr, ptr.rootElement);
}
SVGDocumentWrappingImplementation._wrap$ctor.prototype = SVGDocumentWrappingImplementation.prototype;
SVGDocumentWrappingImplementation.prototype.is$html_html_Document = function(){return true};
// ********** Code for SVGElementInstanceWrappingImplementation **************
$inherits(SVGElementInstanceWrappingImplementation, EventTargetWrappingImplementation);
function SVGElementInstanceWrappingImplementation() {}
SVGElementInstanceWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGElementInstanceWrappingImplementation._wrap$ctor.prototype = SVGElementInstanceWrappingImplementation.prototype;
SVGElementInstanceWrappingImplementation.prototype.get$parentNode = function() {
  return LevelDom.wrapSVGElementInstance(this._ptr.get$parentNode());
}
// ********** Code for SVGSVGElementWrappingImplementation **************
$inherits(SVGSVGElementWrappingImplementation, SVGElementWrappingImplementation);
function SVGSVGElementWrappingImplementation() {}
SVGSVGElementWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  SVGElementWrappingImplementation._wrap$ctor.call(this, ptr);
}
SVGSVGElementWrappingImplementation._wrap$ctor.prototype = SVGSVGElementWrappingImplementation.prototype;
// ********** Code for TextEventWrappingImplementation **************
$inherits(TextEventWrappingImplementation, UIEventWrappingImplementation);
function TextEventWrappingImplementation() {}
TextEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
TextEventWrappingImplementation._wrap$ctor.prototype = TextEventWrappingImplementation.prototype;
// ********** Code for TouchEventWrappingImplementation **************
$inherits(TouchEventWrappingImplementation, UIEventWrappingImplementation);
function TouchEventWrappingImplementation() {}
TouchEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
TouchEventWrappingImplementation._wrap$ctor.prototype = TouchEventWrappingImplementation.prototype;
// ********** Code for TransitionEventWrappingImplementation **************
$inherits(TransitionEventWrappingImplementation, EventWrappingImplementation);
function TransitionEventWrappingImplementation() {}
TransitionEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventWrappingImplementation._wrap$ctor.call(this, ptr);
}
TransitionEventWrappingImplementation._wrap$ctor.prototype = TransitionEventWrappingImplementation.prototype;
// ********** Code for WebSocketWrappingImplementation **************
$inherits(WebSocketWrappingImplementation, EventTargetWrappingImplementation);
function WebSocketWrappingImplementation() {}
WebSocketWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
WebSocketWrappingImplementation._wrap$ctor.prototype = WebSocketWrappingImplementation.prototype;
WebSocketWrappingImplementation.prototype.send = function(data) {
  return this._ptr.send$1(data);
}
WebSocketWrappingImplementation.prototype.get$typeName = function() {
  return "WebSocket";
}
WebSocketWrappingImplementation.prototype.send$1 = WebSocketWrappingImplementation.prototype.send;
// ********** Code for WheelEventWrappingImplementation **************
$inherits(WheelEventWrappingImplementation, UIEventWrappingImplementation);
function WheelEventWrappingImplementation() {}
WheelEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  UIEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
WheelEventWrappingImplementation._wrap$ctor.prototype = WheelEventWrappingImplementation.prototype;
// ********** Code for WindowEventsImplementation **************
$inherits(WindowEventsImplementation, EventsImplementation);
function WindowEventsImplementation() {}
WindowEventsImplementation._wrap$ctor = function(_ptr) {
  // Initializers done
  EventsImplementation._wrap$ctor.call(this, _ptr);
}
WindowEventsImplementation._wrap$ctor.prototype = WindowEventsImplementation.prototype;
WindowEventsImplementation.prototype.get$submit = function() {
  return this._get('submit');
}
WindowEventsImplementation.prototype.submit$0 = function() {
  return this.get$submit()();
};
// ********** Code for WindowWrappingImplementation **************
$inherits(WindowWrappingImplementation, EventTargetWrappingImplementation);
function WindowWrappingImplementation() {}
WindowWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
WindowWrappingImplementation._wrap$ctor.prototype = WindowWrappingImplementation.prototype;
WindowWrappingImplementation.prototype.get$length = function() {
  return this._ptr.get$length();
}
WindowWrappingImplementation.prototype.open = function(url, target, features) {
  if (features == null) {
    return LevelDom.wrapWindow(this._ptr.open$2(url, target));
  }
  else {
    return LevelDom.wrapWindow(this._ptr.open$3(url, target, features));
  }
}
WindowWrappingImplementation.prototype.open.$optional = ['features', 'null']
WindowWrappingImplementation.prototype.get$open = function() {
  return this.open.bind(this);
}
WindowWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new WindowEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
WindowWrappingImplementation.prototype.open$2 = WindowWrappingImplementation.prototype.open;
WindowWrappingImplementation.prototype.open$3 = WindowWrappingImplementation.prototype.open;
// ********** Code for WorkerEventsImplementation **************
$inherits(WorkerEventsImplementation, AbstractWorkerEventsImplementation);
function WorkerEventsImplementation() {}
WorkerEventsImplementation._wrap$ctor = function(_ptr) {
  // Initializers done
  AbstractWorkerEventsImplementation._wrap$ctor.call(this, _ptr);
}
WorkerEventsImplementation._wrap$ctor.prototype = WorkerEventsImplementation.prototype;
// ********** Code for WorkerWrappingImplementation **************
$inherits(WorkerWrappingImplementation, EventTargetWrappingImplementation);
function WorkerWrappingImplementation() {}
WorkerWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
WorkerWrappingImplementation._wrap$ctor.prototype = WorkerWrappingImplementation.prototype;
WorkerWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new WorkerEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
// ********** Code for XMLHttpRequestProgressEventWrappingImplementation **************
$inherits(XMLHttpRequestProgressEventWrappingImplementation, ProgressEventWrappingImplementation);
function XMLHttpRequestProgressEventWrappingImplementation() {}
XMLHttpRequestProgressEventWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  ProgressEventWrappingImplementation._wrap$ctor.call(this, ptr);
}
XMLHttpRequestProgressEventWrappingImplementation._wrap$ctor.prototype = XMLHttpRequestProgressEventWrappingImplementation.prototype;
// ********** Code for XMLHttpRequestUploadEventsImplementation **************
$inherits(XMLHttpRequestUploadEventsImplementation, EventsImplementation);
function XMLHttpRequestUploadEventsImplementation() {}
XMLHttpRequestUploadEventsImplementation._wrap$ctor = function(_ptr) {
  // Initializers done
  EventsImplementation._wrap$ctor.call(this, _ptr);
}
XMLHttpRequestUploadEventsImplementation._wrap$ctor.prototype = XMLHttpRequestUploadEventsImplementation.prototype;
// ********** Code for XMLHttpRequestUploadWrappingImplementation **************
$inherits(XMLHttpRequestUploadWrappingImplementation, EventTargetWrappingImplementation);
function XMLHttpRequestUploadWrappingImplementation() {}
XMLHttpRequestUploadWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
XMLHttpRequestUploadWrappingImplementation._wrap$ctor.prototype = XMLHttpRequestUploadWrappingImplementation.prototype;
XMLHttpRequestUploadWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new XMLHttpRequestUploadEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
// ********** Code for XMLHttpRequestEventsImplementation **************
$inherits(XMLHttpRequestEventsImplementation, EventsImplementation);
function XMLHttpRequestEventsImplementation() {}
XMLHttpRequestEventsImplementation._wrap$ctor = function(_ptr) {
  // Initializers done
  EventsImplementation._wrap$ctor.call(this, _ptr);
}
XMLHttpRequestEventsImplementation._wrap$ctor.prototype = XMLHttpRequestEventsImplementation.prototype;
// ********** Code for XMLHttpRequestWrappingImplementation **************
$inherits(XMLHttpRequestWrappingImplementation, EventTargetWrappingImplementation);
function XMLHttpRequestWrappingImplementation() {}
XMLHttpRequestWrappingImplementation._wrap$ctor = function(ptr) {
  // Initializers done
  EventTargetWrappingImplementation._wrap$ctor.call(this, ptr);
}
XMLHttpRequestWrappingImplementation._wrap$ctor.prototype = XMLHttpRequestWrappingImplementation.prototype;
XMLHttpRequestWrappingImplementation.XMLHttpRequestWrappingImplementation$factory = function() {
  return new XMLHttpRequestWrappingImplementation._wrap$ctor(new XMLHttpRequest());
}
XMLHttpRequestWrappingImplementation.prototype.get$responseText = function() {
  return this._ptr.get$responseText();
}
XMLHttpRequestWrappingImplementation.prototype.open = function(method, url, async, user, password) {
  if (user == null) {
    if (password == null) {
      this._ptr.open$3(method, url, async);
      return;
    }
  }
  else {
    if (password == null) {
      this._ptr.open$4(method, url, async, user);
      return;
    }
    else {
      this._ptr.open$5(method, url, async, user, password);
      return;
    }
  }
  $throw("Incorrect number or type of arguments");
}
XMLHttpRequestWrappingImplementation.prototype.open.$optional = ['user', 'password', 'null', 'null']
XMLHttpRequestWrappingImplementation.prototype.get$open = function() {
  return this.open.bind(this);
}
XMLHttpRequestWrappingImplementation.prototype.send = function(data) {
  if (data == null) {
    this._ptr.send$0();
    return;
  }
  else {
    if (!!(data && data.is$html_html_Document())) {
      this._ptr.send$1(LevelDom.unwrapMaybePrimitive(data));
      return;
    }
    else {
      if ((typeof(data) == 'string')) {
        this._ptr.send$1(LevelDom.unwrapMaybePrimitive(data));
        return;
      }
    }
  }
  $throw("Incorrect number or type of arguments");
}
XMLHttpRequestWrappingImplementation.prototype.setRequestHeader = function(header, value) {
  this._ptr.setRequestHeader$2(header, value);
}
XMLHttpRequestWrappingImplementation.prototype.get$on = function() {
  if (this._on == null) {
    this._on = new XMLHttpRequestEventsImplementation._wrap$ctor(this._ptr);
  }
  return this._on;
}
XMLHttpRequestWrappingImplementation.prototype.open$3 = XMLHttpRequestWrappingImplementation.prototype.open;
XMLHttpRequestWrappingImplementation.prototype.open$4 = XMLHttpRequestWrappingImplementation.prototype.open;
XMLHttpRequestWrappingImplementation.prototype.open$5 = XMLHttpRequestWrappingImplementation.prototype.open;
XMLHttpRequestWrappingImplementation.prototype.send$0 = XMLHttpRequestWrappingImplementation.prototype.send;
XMLHttpRequestWrappingImplementation.prototype.send$1 = XMLHttpRequestWrappingImplementation.prototype.send;
XMLHttpRequestWrappingImplementation.prototype.setRequestHeader$2 = XMLHttpRequestWrappingImplementation.prototype.setRequestHeader;
// ********** Code for top level **************
var _pendingRequests;
var _pendingMeasurementFrameCallbacks;
//  ********** Library html **************
// ********** Code for top level **************
var secretWindow;
var secretDocument;
function html_get$document() {
  if ($globals.secretWindow == null) {
    LevelDom.initialize();
  }
  return $globals.secretDocument;
}
//  ********** Library json **************
// ********** Code for _JSON **************
_JSON = JSON;
// ********** Code for json_JSON **************
function json_JSON() {}
json_JSON.stringify = function(value) {
  return _JSON.stringify(value, (function (_, obj) {
    if (_directToJson(obj)) return obj;
    if (!!(obj && obj.is$Map_dart_core_String$Dynamic())) {
      var map = obj;
      obj = new Object();
      map.forEach((function (k, v) {
        return _setValue(obj, k, v);
      })
      );
      return obj;
    }
    $throw(new IllegalArgumentException(('cannot convert "' + value + '" to JSON')));
  })
  );
}
// ********** Code for top level **************
function _setValue(obj, key, value) {
  obj[key] = value
}
function _directToJson(obj) {
  return typeof obj != 'object' || obj == null || obj instanceof Array
}
//  ********** Library comic_put **************
// ********** Code for top level **************
function main() {
  var form_el = html_get$document().query('#new-comic-form');
  form_el.get$on().get$submit().add$1((function (event) {
    var form = event.get$target(), title = form.query$1('input[name=title]'), author = form.query$1('input[name=author]'), format = form.queryAll$1('input[name=format]');
    event.preventDefault$0();
    dart_core_print(("title: " + title.get$value()));
    dart_core_print(("author: " + author.get$value()));
    dart_core_print(format);
    var data = _map(['title', title.get$value(), 'author', author.get$value()]), json = json_JSON.stringify(data);
    dart_core_print(json);
    var req = XMLHttpRequestWrappingImplementation.XMLHttpRequestWrappingImplementation$factory();
    req.open$3('post', '/comics', false);
    req.setRequestHeader$2('Content-type', 'application/json');
    req.send$1(json);
    dart_core_print(req.get$responseText());
  })
  );
}
// ********** Generic Type Inheritance **************
/** Implements extends for generic types. */
function $inheritsMembers(child, parent) {
  child = child.prototype;
  parent = parent.prototype;
  Object.getOwnPropertyNames(parent).forEach(function(name) {
    if (typeof(child[name]) == 'undefined') child[name] = parent[name];
  });
}
$inheritsMembers(_DoubleLinkedQueueEntrySentinel_E, DoubleLinkedQueueEntry_E);
$inheritsMembers(_DoubleLinkedQueueEntrySentinel_KeyValuePair_K$V, DoubleLinkedQueueEntry_KeyValuePair_K$V);
// 243 dynamic types.
// 302 types
// 21 !leaf
(function(){
  var v0/*CSSValueList*/ = 'CSSValueList|WebKitCSSFilterValue|WebKitCSSTransformValue';
  var table = [
    // [dynamic-dispatch-tag, tags of classes implementing dynamic-dispatch-tag]
    ['AbstractWorker', 'AbstractWorker|SharedWorker|Worker'],
    ['ArrayBufferView', 'ArrayBufferView|DataView|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array'],
    ['AudioNode', 'AudioNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioSourceNode|AudioBufferSourceNode|MediaElementAudioSourceNode|BiquadFilterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|HighPass2FilterNode|JavaScriptAudioNode|LowPass2FilterNode|RealtimeAnalyserNode|WaveShaperNode'],
    ['AudioParam', 'AudioParam|AudioGain'],
    ['Blob', 'Blob|File'],
    ['CSSValueList', v0/*CSSValueList*/],
    ['CSSValue', [v0/*CSSValueList*/,'CSSValue|CSSPrimitiveValue|SVGColor|SVGPaint'].join('|')],
    ['CanvasRenderingContext', 'CanvasRenderingContext|CanvasRenderingContext2D|WebGLRenderingContext'],
    ['DOMTokenList', 'DOMTokenList|DOMSettableTokenList'],
    ['DOMWindow', 'DOMWindow|Window'],
    ['Entry', 'Entry|DirectoryEntry|FileEntry'],
    ['EntrySync', 'EntrySync|DirectoryEntrySync|FileEntrySync'],
    ['IDBCursor', 'IDBCursor|IDBCursorWithValue'],
    ['IDBRequest', 'IDBRequest|IDBVersionChangeRequest'],
    ['SVGLocatable', 'SVGLocatable|SVGTransformable'],
    ['SVGPathSeg', 'SVGPathSeg|SVGPathSegArcAbs|SVGPathSegArcRel|SVGPathSegClosePath|SVGPathSegCurvetoCubicAbs|SVGPathSegCurvetoCubicRel|SVGPathSegCurvetoCubicSmoothAbs|SVGPathSegCurvetoCubicSmoothRel|SVGPathSegCurvetoQuadraticAbs|SVGPathSegCurvetoQuadraticRel|SVGPathSegCurvetoQuadraticSmoothAbs|SVGPathSegCurvetoQuadraticSmoothRel|SVGPathSegLinetoAbs|SVGPathSegLinetoHorizontalAbs|SVGPathSegLinetoHorizontalRel|SVGPathSegLinetoRel|SVGPathSegLinetoVerticalAbs|SVGPathSegLinetoVerticalRel|SVGPathSegMovetoAbs|SVGPathSegMovetoRel'],
    ['SVGStylable', 'SVGStylable|SVGFilterPrimitiveStandardAttributes'],
    ['SVGZoomAndPan', 'SVGZoomAndPan|SVGViewSpec'],
    ['WorkerContext', 'WorkerContext|DedicatedWorkerContext|SharedWorkercontext'],
  ];
  $dynamicSetMetadata(table);
})();
//  ********** Globals **************
function $static_init(){
}
var const$1 = new _DeletedKeySentinel()/*const _DeletedKeySentinel()*/;
var const$3 = new UnsupportedOperationException('')/*const UnsupportedOperationException('')*/;
var const$4 = new EmptyQueueException()/*const EmptyQueueException()*/;
var $globals = {};
$static_init();
main();
