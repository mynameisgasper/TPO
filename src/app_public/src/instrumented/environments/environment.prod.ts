function cov_1al4rmdatu() {
  var path = "/home/gasper/TPO/LP234-13/src/app_public/src/environments/environment.prod.ts";
  var hash = "2f1644a647c420141c30d3002190c7693d9fa645";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gasper/TPO/LP234-13/src/app_public/src/environments/environment.prod.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 27
        },
        end: {
          line: 4,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2f1644a647c420141c30d3002190c7693d9fa645"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1al4rmdatu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1al4rmdatu();
export const environment = (cov_1al4rmdatu().s[0]++, {
  production: true,
  apiUrl: "http://todo.heroku/api/v1"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnByb2QudHMiXSwibmFtZXMiOlsiZW52aXJvbm1lbnQiLCJwcm9kdWN0aW9uIiwiYXBpVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU8sTUFBTUEsV0FBVyw2QkFBRztBQUN6QkMsRUFBQUEsVUFBVSxFQUFFLElBRGE7QUFFekJDLEVBQUFBLE1BQU0sRUFBRTtBQUZpQixDQUFILENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xuICBwcm9kdWN0aW9uOiB0cnVlLFxuICBhcGlVcmw6IFwiaHR0cDovL3RvZG8uaGVyb2t1L2FwaS92MVwiXG59O1xuIl19