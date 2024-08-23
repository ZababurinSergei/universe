// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/app/vendor/tweenjs/build/tween.min.js":[function(require,module,exports) {
// tween.js v.0.15.0 https://github.com/sole/tween.js
void 0 === Date.now && (Date.now = function () {
  return new Date().valueOf();
});
var TWEEN = TWEEN || function () {
  var n = [];
  return {
    REVISION: "14",
    getAll: function getAll() {
      return n;
    },
    removeAll: function removeAll() {
      n = [];
    },
    add: function add(t) {
      n.push(t);
    },
    remove: function remove(t) {
      var r = n.indexOf(t);
      -1 !== r && n.splice(r, 1);
    },
    update: function update(t) {
      if (0 === n.length) return !1;
      var r = 0;
      for (t = void 0 !== t ? t : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(); r < n.length;) n[r].update(t) ? r++ : n.splice(r, 1);
      return !0;
    }
  };
}();
TWEEN.Tween = function (n) {
  var t = n,
    r = {},
    i = {},
    u = {},
    o = 1e3,
    e = 0,
    a = !1,
    f = !1,
    c = !1,
    s = 0,
    h = null,
    l = TWEEN.Easing.Linear.None,
    p = TWEEN.Interpolation.Linear,
    E = [],
    d = null,
    v = !1,
    I = null,
    w = null,
    M = null;
  for (var O in n) r[O] = parseFloat(n[O], 10);
  this.to = function (n, t) {
    return void 0 !== t && (o = t), i = n, this;
  }, this.start = function (n) {
    TWEEN.add(this), f = !0, v = !1, h = void 0 !== n ? n : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(), h += s;
    for (var o in i) {
      if (i[o] instanceof Array) {
        if (0 === i[o].length) continue;
        i[o] = [t[o]].concat(i[o]);
      }
      r[o] = t[o], r[o] instanceof Array == !1 && (r[o] *= 1), u[o] = r[o] || 0;
    }
    return this;
  }, this.stop = function () {
    return f ? (TWEEN.remove(this), f = !1, null !== M && M.call(t), this.stopChainedTweens(), this) : this;
  }, this.stopChainedTweens = function () {
    for (var n = 0, t = E.length; t > n; n++) E[n].stop();
  }, this.delay = function (n) {
    return s = n, this;
  }, this.repeat = function (n) {
    return e = n, this;
  }, this.yoyo = function (n) {
    return a = n, this;
  }, this.easing = function (n) {
    return l = n, this;
  }, this.interpolation = function (n) {
    return p = n, this;
  }, this.chain = function () {
    return E = arguments, this;
  }, this.onStart = function (n) {
    return d = n, this;
  }, this.onUpdate = function (n) {
    return I = n, this;
  }, this.onComplete = function (n) {
    return w = n, this;
  }, this.onStop = function (n) {
    return M = n, this;
  }, this.update = function (n) {
    var f;
    if (h > n) return !0;
    v === !1 && (null !== d && d.call(t), v = !0);
    var M = (n - h) / o;
    M = M > 1 ? 1 : M;
    var O = l(M);
    for (f in i) {
      var m = r[f] || 0,
        N = i[f];
      N instanceof Array ? t[f] = p(N, O) : ("string" == typeof N && (N = m + parseFloat(N, 10)), "number" == typeof N && (t[f] = m + (N - m) * O));
    }
    if (null !== I && I.call(t, O), 1 == M) {
      if (e > 0) {
        isFinite(e) && e--;
        for (f in u) {
          if ("string" == typeof i[f] && (u[f] = u[f] + parseFloat(i[f], 10)), a) {
            var T = u[f];
            u[f] = i[f], i[f] = T;
          }
          r[f] = u[f];
        }
        return a && (c = !c), h = n + s, !0;
      }
      null !== w && w.call(t);
      for (var g = 0, W = E.length; W > g; g++) E[g].start(n);
      return !1;
    }
    return !0;
  };
}, TWEEN.Easing = {
  Linear: {
    None: function None(n) {
      return n;
    }
  },
  Quadratic: {
    In: function In(n) {
      return n * n;
    },
    Out: function Out(n) {
      return n * (2 - n);
    },
    InOut: function InOut(n) {
      return (n *= 2) < 1 ? .5 * n * n : -.5 * (--n * (n - 2) - 1);
    }
  },
  Cubic: {
    In: function In(n) {
      return n * n * n;
    },
    Out: function Out(n) {
      return --n * n * n + 1;
    },
    InOut: function InOut(n) {
      return (n *= 2) < 1 ? .5 * n * n * n : .5 * ((n -= 2) * n * n + 2);
    }
  },
  Quartic: {
    In: function In(n) {
      return n * n * n * n;
    },
    Out: function Out(n) {
      return 1 - --n * n * n * n;
    },
    InOut: function InOut(n) {
      return (n *= 2) < 1 ? .5 * n * n * n * n : -.5 * ((n -= 2) * n * n * n - 2);
    }
  },
  Quintic: {
    In: function In(n) {
      return n * n * n * n * n;
    },
    Out: function Out(n) {
      return --n * n * n * n * n + 1;
    },
    InOut: function InOut(n) {
      return (n *= 2) < 1 ? .5 * n * n * n * n * n : .5 * ((n -= 2) * n * n * n * n + 2);
    }
  },
  Sinusoidal: {
    In: function In(n) {
      return 1 - Math.cos(n * Math.PI / 2);
    },
    Out: function Out(n) {
      return Math.sin(n * Math.PI / 2);
    },
    InOut: function InOut(n) {
      return .5 * (1 - Math.cos(Math.PI * n));
    }
  },
  Exponential: {
    In: function In(n) {
      return 0 === n ? 0 : Math.pow(1024, n - 1);
    },
    Out: function Out(n) {
      return 1 === n ? 1 : 1 - Math.pow(2, -10 * n);
    },
    InOut: function InOut(n) {
      return 0 === n ? 0 : 1 === n ? 1 : (n *= 2) < 1 ? .5 * Math.pow(1024, n - 1) : .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
    }
  },
  Circular: {
    In: function In(n) {
      return 1 - Math.sqrt(1 - n * n);
    },
    Out: function Out(n) {
      return Math.sqrt(1 - --n * n);
    },
    InOut: function InOut(n) {
      return (n *= 2) < 1 ? -.5 * (Math.sqrt(1 - n * n) - 1) : .5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
    }
  },
  Elastic: {
    In: function In(n) {
      var t,
        r = .1,
        i = .4;
      return 0 === n ? 0 : 1 === n ? 1 : (!r || 1 > r ? (r = 1, t = i / 4) : t = i * Math.asin(1 / r) / (2 * Math.PI), -(r * Math.pow(2, 10 * (n -= 1)) * Math.sin(2 * (n - t) * Math.PI / i)));
    },
    Out: function Out(n) {
      var t,
        r = .1,
        i = .4;
      return 0 === n ? 0 : 1 === n ? 1 : (!r || 1 > r ? (r = 1, t = i / 4) : t = i * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * n) * Math.sin(2 * (n - t) * Math.PI / i) + 1);
    },
    InOut: function InOut(n) {
      var t,
        r = .1,
        i = .4;
      return 0 === n ? 0 : 1 === n ? 1 : (!r || 1 > r ? (r = 1, t = i / 4) : t = i * Math.asin(1 / r) / (2 * Math.PI), (n *= 2) < 1 ? -.5 * r * Math.pow(2, 10 * (n -= 1)) * Math.sin(2 * (n - t) * Math.PI / i) : r * Math.pow(2, -10 * (n -= 1)) * Math.sin(2 * (n - t) * Math.PI / i) * .5 + 1);
    }
  },
  Back: {
    In: function In(n) {
      var t = 1.70158;
      return n * n * ((t + 1) * n - t);
    },
    Out: function Out(n) {
      var t = 1.70158;
      return --n * n * ((t + 1) * n + t) + 1;
    },
    InOut: function InOut(n) {
      var t = 2.5949095;
      return (n *= 2) < 1 ? .5 * n * n * ((t + 1) * n - t) : .5 * ((n -= 2) * n * ((t + 1) * n + t) + 2);
    }
  },
  Bounce: {
    In: function In(n) {
      return 1 - TWEEN.Easing.Bounce.Out(1 - n);
    },
    Out: function Out(n) {
      return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375;
    },
    InOut: function InOut(n) {
      return .5 > n ? .5 * TWEEN.Easing.Bounce.In(2 * n) : .5 * TWEEN.Easing.Bounce.Out(2 * n - 1) + .5;
    }
  }
}, TWEEN.Interpolation = {
  Linear: function Linear(n, t) {
    var r = n.length - 1,
      i = r * t,
      u = Math.floor(i),
      o = TWEEN.Interpolation.Utils.Linear;
    return 0 > t ? o(n[0], n[1], i) : t > 1 ? o(n[r], n[r - 1], r - i) : o(n[u], n[u + 1 > r ? r : u + 1], i - u);
  },
  Bezier: function Bezier(n, t) {
    var r,
      i = 0,
      u = n.length - 1,
      o = Math.pow,
      e = TWEEN.Interpolation.Utils.Bernstein;
    for (r = 0; u >= r; r++) i += o(1 - t, u - r) * o(t, r) * n[r] * e(u, r);
    return i;
  },
  CatmullRom: function CatmullRom(n, t) {
    var r = n.length - 1,
      i = r * t,
      u = Math.floor(i),
      o = TWEEN.Interpolation.Utils.CatmullRom;
    return n[0] === n[r] ? (0 > t && (u = Math.floor(i = r * (1 + t))), o(n[(u - 1 + r) % r], n[u], n[(u + 1) % r], n[(u + 2) % r], i - u)) : 0 > t ? n[0] - (o(n[0], n[0], n[1], n[1], -i) - n[0]) : t > 1 ? n[r] - (o(n[r], n[r], n[r - 1], n[r - 1], i - r) - n[r]) : o(n[u ? u - 1 : 0], n[u], n[u + 1 > r ? r : u + 1], n[u + 2 > r ? r : u + 2], i - u);
  },
  Utils: {
    Linear: function Linear(n, t, r) {
      return (t - n) * r + n;
    },
    Bernstein: function Bernstein(n, t) {
      var r = TWEEN.Interpolation.Utils.Factorial;
      return r(n) / r(t) / r(n - t);
    },
    Factorial: function () {
      var n = [1];
      return function (t) {
        var r,
          i = 1;
        if (n[t]) return n[t];
        for (r = t; r > 1; r--) i *= r;
        return n[t] = i;
      };
    }(),
    CatmullRom: function CatmullRom(n, t, r, i, u) {
      var o = .5 * (r - n),
        e = .5 * (i - t),
        a = u * u,
        f = u * a;
      return (2 * t - 2 * r + o + e) * f + (-3 * t + 3 * r - 2 * o - e) * a + o * u + t;
    }
  }
}, "undefined" != typeof module && module.exports && (module.exports = TWEEN);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33421" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/app/vendor/tweenjs/build/tween.min.js"], null)
//# sourceMappingURL=/tween.min.8d560a33.js.map