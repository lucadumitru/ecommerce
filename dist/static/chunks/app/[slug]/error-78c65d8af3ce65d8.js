(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [466],
  {
    8679: function (e, r, n) {
      Promise.resolve().then(n.bind(n, 8344));
    },
    8344: function (e, r, n) {
      "use strict";
      n.r(r);
      var t = n(7437),
        o = n(2265);
      r.default = (e) => {
        let { error: r, reset: n } = e;
        return (
          (0, o.useEffect)(() => {
            console.error(r);
          }, [r]),
          (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("h2", { children: "Something went wrong!" }),
              (0, t.jsx)("button", { onClick: () => n(), children: "Try again" })
            ]
          })
        );
      };
    },
    622: function (e, r, n) {
      "use strict";
      var t = n(2265),
        o = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(e, r, n) {
        var t,
          s = {},
          c = null,
          l = null;
        for (t in (void 0 !== n && (c = "" + n),
        void 0 !== r.key && (c = "" + r.key),
        void 0 !== r.ref && (l = r.ref),
        r))
          f.call(r, t) && !u.hasOwnProperty(t) && (s[t] = r[t]);
        if (e && e.defaultProps) for (t in (r = e.defaultProps)) void 0 === s[t] && (s[t] = r[t]);
        return { $$typeof: o, type: e, key: c, ref: l, props: s, _owner: i.current };
      }
      (r.Fragment = s), (r.jsx = c), (r.jsxs = c);
    },
    7437: function (e, r, n) {
      "use strict";
      e.exports = n(622);
    }
  },
  function (e) {
    e.O(0, [971, 472, 744], function () {
      return e((e.s = 8679));
    }),
      (_N_E = e.O());
  }
]);
