function cov_1kljq28qyp() {
  var path = "/home/gasper/TPO/LP234-13/src/app_public/src/app/Classes/storage.ts";
  var hash = "56f6357f93e6cd2b312e69c9fbb7dc6390418d9f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gasper/TPO/LP234-13/src/app_public/src/app/Classes/storage.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 34
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 7,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 13
          },
          end: {
            line: 7,
            column: 14
          }
        },
        loc: {
          start: {
            line: 7,
            column: 19
          },
          end: {
            line: 7,
            column: 31
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "56f6357f93e6cd2b312e69c9fbb7dc6390418d9f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1kljq28qyp = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1kljq28qyp();
import { InjectionToken } from '@angular/core';
export const SHRAMBA_BRSKALNIKA = (cov_1kljq28qyp().s[0]++, new InjectionToken() < Storage > ('Browser storage', {
  providedIn: 'root',
  factory: () => {
    cov_1kljq28qyp().f[0]++;
    cov_1kljq28qyp().s[1]++;
    return localStorage;
  }
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JhZ2UudHMiXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJTSFJBTUJBX0JSU0tBTE5JS0EiLCJTdG9yYWdlIiwicHJvdmlkZWRJbiIsImZhY3RvcnkiLCJsb2NhbFN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFTQSxjQUFULFFBQStCLGVBQS9CO0FBRUEsT0FBTyxNQUFNQyxrQkFBa0IsNkJBQUcsSUFBSUQsY0FBSixLQUFtQkUsT0FBbkIsSUFDaEMsbUJBQ0E7QUFDRUMsRUFBQUEsVUFBVSxFQUFFLE1BRGQ7QUFFRUMsRUFBQUEsT0FBTyxFQUFFLE1BQU1DO0FBQUFBO0FBQUFBO0FBQUFBLFdBQUFBLFlBQVk7QUFBQTtBQUY3QixDQUZnQyxDQUFILENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IFNIUkFNQkFfQlJTS0FMTklLQSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTdG9yYWdlPihcbiAgJ0Jyb3dzZXIgc3RvcmFnZScsXG4gIHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG4gICAgZmFjdG9yeTogKCkgPT4gbG9jYWxTdG9yYWdlXG4gIH1cbik7XG4iXX0=