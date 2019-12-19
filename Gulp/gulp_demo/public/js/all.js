"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var a = ['red', 'blue', 'dark'];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = a.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _slicedToArray(_step.value, 2),
        index = _step$value[0],
        item = _step$value[1];

    console.log(index, item);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log(' 嗨');
"use strict";

var bang = 'hello world';
var a = 'd';
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC5qcyIsImFsbDIuanMiXSwibmFtZXMiOlsiYSIsImVudHJpZXMiLCJpbmRleCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiYmFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBRyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLE1BQWhCLENBQVI7Ozs7OztBQUVBLHVCQUE0QkEsQ0FBQyxDQUFDQyxPQUFGLEVBQTVCLDhIQUF5QztBQUFBO0FBQUEsUUFBN0JDLEtBQTZCO0FBQUEsUUFBdEJDLElBQXNCOztBQUN2Q0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVosRUFBbUJDLElBQW5CO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFREMsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWjs7O0FDTkEsSUFBSUMsSUFBSSxHQUFHLGFBQVg7QUFDQSxJQUFNTixDQUFDLEdBQUcsR0FBViIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYSA9IFsncmVkJywgJ2JsdWUnLCAnZGFyayddO1xyXG5cclxuZm9yIChjb25zdCBbaW5kZXgsIGl0ZW1dIG9mIGEuZW50cmllcygpKSB7XHJcbiAgY29uc29sZS5sb2coaW5kZXgsIGl0ZW0pO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZygnIOWXqCcpXHJcbiIsImxldCBiYW5nID0gJ2hlbGxvIHdvcmxkJztcclxuY29uc3QgYSA9ICdkJyJdfQ==
