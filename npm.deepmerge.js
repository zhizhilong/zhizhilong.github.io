((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([["npm.deepmerge"],{

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isMergeableObject = function isMergeableObject(value) {\n\treturn isNonNullObject(value)\n\t\t&& !isSpecial(value)\n};\n\nfunction isNonNullObject(value) {\n\treturn !!value && typeof value === 'object'\n}\n\nfunction isSpecial(value) {\n\tvar stringValue = Object.prototype.toString.call(value);\n\n\treturn stringValue === '[object RegExp]'\n\t\t|| stringValue === '[object Date]'\n\t\t|| isReactElement(value)\n}\n\n// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25\nvar canUseSymbol = typeof Symbol === 'function' && Symbol.for;\nvar REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;\n\nfunction isReactElement(value) {\n\treturn value.$$typeof === REACT_ELEMENT_TYPE\n}\n\nfunction emptyTarget(val) {\n    return Array.isArray(val) ? [] : {}\n}\n\nfunction cloneIfNecessary(value, optionsArgument) {\n    var clone = optionsArgument && optionsArgument.clone === true;\n    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value\n}\n\nfunction defaultArrayMerge(target, source, optionsArgument) {\n    var destination = target.slice();\n    source.forEach(function(e, i) {\n        if (typeof destination[i] === 'undefined') {\n            destination[i] = cloneIfNecessary(e, optionsArgument);\n        } else if (isMergeableObject(e)) {\n            destination[i] = deepmerge(target[i], e, optionsArgument);\n        } else if (target.indexOf(e) === -1) {\n            destination.push(cloneIfNecessary(e, optionsArgument));\n        }\n    });\n    return destination\n}\n\nfunction mergeObject(target, source, optionsArgument) {\n    var destination = {};\n    if (isMergeableObject(target)) {\n        Object.keys(target).forEach(function(key) {\n            destination[key] = cloneIfNecessary(target[key], optionsArgument);\n        });\n    }\n    Object.keys(source).forEach(function(key) {\n        if (!isMergeableObject(source[key]) || !target[key]) {\n            destination[key] = cloneIfNecessary(source[key], optionsArgument);\n        } else {\n            destination[key] = deepmerge(target[key], source[key], optionsArgument);\n        }\n    });\n    return destination\n}\n\nfunction deepmerge(target, source, optionsArgument) {\n    var sourceIsArray = Array.isArray(source);\n    var targetIsArray = Array.isArray(target);\n    var options = optionsArgument || { arrayMerge: defaultArrayMerge };\n    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;\n\n    if (!sourceAndTargetTypesMatch) {\n        return cloneIfNecessary(source, optionsArgument)\n    } else if (sourceIsArray) {\n        var arrayMerge = options.arrayMerge || defaultArrayMerge;\n        return arrayMerge(target, source, optionsArgument)\n    } else {\n        return mergeObject(target, source, optionsArgument)\n    }\n}\n\ndeepmerge.all = function deepmergeAll(array, optionsArgument) {\n    if (!Array.isArray(array) || array.length < 2) {\n        throw new Error('first argument should be an array with at least two elements')\n    }\n\n    // we are sure there are at least 2 values, so it is safe to have no initial value\n    return array.reduce(function(prev, next) {\n        return deepmerge(prev, next, optionsArgument)\n    })\n};\n\nvar deepmerge_1 = deepmerge;\n\nmodule.exports = deepmerge_1;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZGVlcG1lcmdlL2Rpc3QvY2pzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlZXBtZXJnZS9kaXN0L2Nqcy5qcz8zYzRlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGlzTWVyZ2VhYmxlT2JqZWN0ID0gZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSlcblx0XHQmJiAhaXNTcGVjaWFsKHZhbHVlKVxufTtcblxuZnVuY3Rpb24gaXNOb25OdWxsT2JqZWN0KHZhbHVlKSB7XG5cdHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZnVuY3Rpb24gaXNTcGVjaWFsKHZhbHVlKSB7XG5cdHZhciBzdHJpbmdWYWx1ZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cblx0cmV0dXJuIHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBSZWdFeHBdJ1xuXHRcdHx8IHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBEYXRlXSdcblx0XHR8fCBpc1JlYWN0RWxlbWVudCh2YWx1ZSlcbn1cblxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL2I1YWM5NjNmYjc5MWQxMjk4ZTdmMzk2MjM2MzgzYmM5NTVmOTE2YzEvc3JjL2lzb21vcnBoaWMvY2xhc3NpYy9lbGVtZW50L1JlYWN0RWxlbWVudC5qcyNMMjEtTDI1XG52YXIgY2FuVXNlU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGNhblVzZVN5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcblxuZnVuY3Rpb24gaXNSZWFjdEVsZW1lbnQodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEVcbn1cblxuZnVuY3Rpb24gZW1wdHlUYXJnZXQodmFsKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVJZk5lY2Vzc2FyeSh2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGNsb25lID0gb3B0aW9uc0FyZ3VtZW50ICYmIG9wdGlvbnNBcmd1bWVudC5jbG9uZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gKGNsb25lICYmIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSkgPyBkZWVwbWVyZ2UoZW1wdHlUYXJnZXQodmFsdWUpLCB2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSA6IHZhbHVlXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB0YXJnZXQuc2xpY2UoKTtcbiAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbihlLCBpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVzdGluYXRpb25baV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChpc01lcmdlYWJsZU9iamVjdChlKSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2ldLCBlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5pbmRleE9mKGUpID09PSAtMSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb24ucHVzaChjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB7fTtcbiAgICBpZiAoaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeSh0YXJnZXRba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKCFpc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIHNvdXJjZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG4gICAgdmFyIHRhcmdldElzQXJyYXkgPSBBcnJheS5pc0FycmF5KHRhcmdldCk7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRpb25zQXJndW1lbnQgfHwgeyBhcnJheU1lcmdlOiBkZWZhdWx0QXJyYXlNZXJnZSB9O1xuICAgIHZhciBzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoID0gc291cmNlSXNBcnJheSA9PT0gdGFyZ2V0SXNBcnJheTtcblxuICAgIGlmICghc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCkge1xuICAgICAgICByZXR1cm4gY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2UsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9IGVsc2UgaWYgKHNvdXJjZUlzQXJyYXkpIHtcbiAgICAgICAgdmFyIGFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG4gICAgICAgIHJldHVybiBhcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCB0d28gZWxlbWVudHMnKVxuICAgIH1cblxuICAgIC8vIHdlIGFyZSBzdXJlIHRoZXJlIGFyZSBhdCBsZWFzdCAyIHZhbHVlcywgc28gaXQgaXMgc2FmZSB0byBoYXZlIG5vIGluaXRpYWwgdmFsdWVcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSlcbn07XG5cbnZhciBkZWVwbWVyZ2VfMSA9IGRlZXBtZXJnZTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWVwbWVyZ2VfMTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/deepmerge/dist/cjs.js\n");

/***/ })

}]);