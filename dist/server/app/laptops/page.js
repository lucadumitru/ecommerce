(() => {
  var e = {};
  (e.id = 40),
    (e.ids = [40]),
    (e.modules = {
      2934: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external.js");
      },
      5403: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external");
      },
      4580: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external.js");
      },
      4749: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external");
      },
      5869: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external.js");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      3685: (e) => {
        "use strict";
        e.exports = require("http");
      },
      5687: (e) => {
        "use strict";
        e.exports = require("https");
      },
      1017: (e) => {
        "use strict";
        e.exports = require("path");
      },
      5477: (e) => {
        "use strict";
        e.exports = require("punycode");
      },
      2781: (e) => {
        "use strict";
        e.exports = require("stream");
      },
      7310: (e) => {
        "use strict";
        e.exports = require("url");
      },
      9796: (e) => {
        "use strict";
        e.exports = require("zlib");
      },
      3312: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => d,
            originalPathname: () => c,
            pages: () => l,
            routeModule: () => x,
            tree: () => u
          });
        var s = r(7096),
          a = r(6132),
          i = r(7284),
          o = r.n(i),
          n = r(2564),
          p = {};
        for (let e in n)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule"
            ].indexOf(e) && (p[e] = () => n[e]);
        r.d(t, p);
        let u = [
            "",
            {
              children: [
                "laptops",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 4253)),
                        "/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/app/laptops/page.tsx"
                      ]
                    }
                  ]
                },
                {
                  metadata: {
                    icon: [async (e) => (await Promise.resolve().then(r.bind(r, 3881))).default(e)],
                    apple: [],
                    openGraph: [],
                    twitter: [],
                    manifest: void 0
                  }
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
              ],
              metadata: {
                icon: [async (e) => (await Promise.resolve().then(r.bind(r, 3881))).default(e)],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0
              }
            }
          ],
          l = [
            "/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/app/laptops/page.tsx"
          ],
          c = "/laptops/page",
          d = { require: r, loadChunk: () => Promise.resolve() },
          x = new s.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: "/laptops/page",
              pathname: "/laptops",
              bundlePath: "",
              filename: "",
              appPaths: []
            },
            userland: { loaderTree: u }
          });
      },
      5303: () => {},
      4253: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => a });
        var s = r(4656);
        let a = () => s.jsx("div", { children: "Laptops" });
      },
      3881: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => a });
        var s = r(8531);
        let a = (e) => {
          let t = (0, s.fillMetadataSegment)(".", e.params, "favicon.ico");
          return [{ type: "image/x-icon", sizes: "16x16", url: t + "" }];
        };
      }
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [271, 403, 323, 858], () => r(3312));
  module.exports = s;
})();
