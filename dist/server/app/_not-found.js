"use strict";
(() => {
  var e = {};
  (e.id = 165),
    (e.ids = [165]),
    (e.modules = {
      2934: (e) => {
        e.exports = require("next/dist/client/components/action-async-storage.external.js");
      },
      5403: (e) => {
        e.exports = require("next/dist/client/components/request-async-storage.external");
      },
      4580: (e) => {
        e.exports = require("next/dist/client/components/request-async-storage.external.js");
      },
      4749: (e) => {
        e.exports = require("next/dist/client/components/static-generation-async-storage.external");
      },
      5869: (e) => {
        e.exports = require("next/dist/client/components/static-generation-async-storage.external.js");
      },
      399: (e) => {
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      3685: (e) => {
        e.exports = require("http");
      },
      5687: (e) => {
        e.exports = require("https");
      },
      5477: (e) => {
        e.exports = require("punycode");
      },
      2781: (e) => {
        e.exports = require("stream");
      },
      7310: (e) => {
        e.exports = require("url");
      },
      9796: (e) => {
        e.exports = require("zlib");
      },
      6524: (e, t, r) => {
        r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => x,
            originalPathname: () => d,
            pages: () => l,
            routeModule: () => c,
            tree: () => u
          });
        var n = r(7096),
          o = r(6132),
          s = r(7284),
          i = r.n(s),
          a = r(2564),
          p = {};
        for (let e in a)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule"
            ].indexOf(e) && (p[e] = () => a[e]);
        r.d(t, p);
        let u = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [
                    () => Promise.resolve().then(r.t.bind(r, 9291, 23)),
                    "next/dist/client/components/not-found-error"
                  ]
                }
              ]
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 9423)),
                "/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/app/layout.tsx"
              ],
              "not-found": [
                () => Promise.resolve().then(r.t.bind(r, 9291, 23)),
                "next/dist/client/components/not-found-error"
              ]
            }
          ],
          l = [],
          d = "/_not-found",
          x = { require: r, loadChunk: () => Promise.resolve() },
          c = new n.AppPageRouteModule({
            definition: {
              kind: o.x.APP_PAGE,
              page: "/_not-found",
              pathname: "/_not-found",
              bundlePath: "",
              filename: "",
              appPaths: []
            },
            userland: { loaderTree: u }
          });
      }
    });
  var t = require("../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [271, 403, 858], () => r(6524));
  module.exports = n;
})();
