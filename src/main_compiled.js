let main = (() => {
  var _ref = _asyncToGenerator(function* () {
    try {
      result = yield callApi(apiType.getBalance);
      console.log(result);
    } catch (e) {
      return 'exception';
    }
  });

  return function main() {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var apiType = require('./model/apiType.js');
var callApi = require('./model/query.js');

var result;

main();
