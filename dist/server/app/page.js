(() => {
  var e = {};
  (e.id = 931),
    (e.ids = [931]),
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
      9356: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => x,
            originalPathname: () => u,
            pages: () => d,
            routeModule: () => p,
            tree: () => c
          });
        var r = s(7096),
          a = s(6132),
          i = s(7284),
          o = s.n(i),
          n = s(2564),
          l = {};
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
            ].indexOf(e) && (l[e] = () => n[e]);
        s.d(t, l);
        let c = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [
                    () => Promise.resolve().then(s.bind(s, 8203)),
                    "/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/app/page.tsx"
                  ],
                  metadata: {
                    icon: [async (e) => (await Promise.resolve().then(s.bind(s, 3881))).default(e)],
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
                () => Promise.resolve().then(s.bind(s, 9423)),
                "/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/app/layout.tsx"
              ],
              "not-found": [
                () => Promise.resolve().then(s.t.bind(s, 9291, 23)),
                "next/dist/client/components/not-found-error"
              ],
              metadata: {
                icon: [async (e) => (await Promise.resolve().then(s.bind(s, 3881))).default(e)],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0
              }
            }
          ],
          d = ["/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/app/page.tsx"],
          u = "/page",
          x = { require: s, loadChunk: () => Promise.resolve() },
          p = new r.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: "/page",
              pathname: "/",
              bundlePath: "",
              filename: "",
              appPaths: []
            },
            userland: { loaderTree: c }
          });
      },
      336: (e, t, s) => {
        Promise.resolve().then(s.t.bind(s, 8469, 23)),
          Promise.resolve().then(s.t.bind(s, 7490, 23)),
          Promise.resolve().then(s.bind(s, 1600)),
          Promise.resolve().then(s.bind(s, 5047)),
          Promise.resolve().then(s.bind(s, 6286)),
          Promise.resolve().then(s.bind(s, 5441)),
          Promise.resolve().then(s.bind(s, 9082)),
          Promise.resolve().then(s.bind(s, 4886)),
          Promise.resolve().then(s.bind(s, 6228)),
          Promise.resolve().then(s.bind(s, 2569)),
          Promise.resolve().then(s.bind(s, 7838)),
          Promise.resolve().then(s.bind(s, 5292)),
          Promise.resolve().then(s.bind(s, 2411));
      },
      7838: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { ProductSection: () => p });
        var r = s(3854),
          a = s(1956),
          i = s.n(a),
          o = s(5548),
          n = s.n(o),
          l = s(4218),
          c = s(8157),
          d = s(5047),
          u = s(88),
          x = s(6359);
        let p = ({ data: e }) => {
          let { product: t } = e,
            [s, a] = (0, l.useState)(1),
            o = t.attributes.productPreviewImg.data.attributes.url,
            p = (0, c.I0)(),
            [m, b] = (0, l.useState)("about"),
            h = [`${t.attributes.category.data.attributes.title}`],
            g = (0, l.useCallback)((e) => {
              b(e);
            }, []);
          return (0, r.jsxs)("section", {
            children: [
              r.jsx("div", {
                className: "mobile:border-b mobile:border-light-gray",
                children: (0, r.jsxs)(u.W2, {
                  className: "flex h-[80px] items-center justify-between gap-2 laptop:h-[100px]",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex items-center gap-7",
                      children: [
                        r.jsx("button", {
                          "data-button": "about",
                          className: `${
                            "about" === m && "!text-black before:!w-full"
                          } relative whitespace-nowrap text-[14px] font-semibold text-gray-400 before:absolute  before:bottom-0 before:h-[2px] before:w-0 before:rounded-full before:bg-blue before:transition-all hover:before:w-full`,
                          onClick: () => g("about"),
                          children: "About Product"
                        }),
                        r.jsx("button", {
                          "data-button": "details",
                          className: `${
                            "details" === m && "!text-black before:!w-full"
                          } relative whitespace-nowrap text-[14px] font-semibold text-gray-400 before:absolute before:bottom-0 before:h-[2px] before:w-0 before:rounded-full before:bg-blue before:transition-all hover:before:w-full`,
                          onClick: () => g("details"),
                          children: "Details"
                        })
                      ]
                    }),
                    (0, r.jsxs)("div", {
                      className: "gap flex items-center gap-3",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "text-center",
                          children: [
                            "On Sale from",
                            " ",
                            (0, r.jsxs)("span", {
                              className: " font-semibold",
                              children: [
                                "$",
                                t.attributes.discountPrice?.toFixed(2) ||
                                  t.attributes.price?.toFixed(2)
                              ]
                            })
                          ]
                        }),
                        r.jsx("div", {
                          className: "w-full max-w-[75px]",
                          children: r.jsx(u.Y2, {
                            onValueChange: (e) => {
                              a(e);
                            }
                          })
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex h-[50px] gap-2",
                          children: [
                            r.jsx(u.zx, {
                              onClick: () => {
                                p((0, x.gK)({ product: t, quantity: s }));
                              },
                              children: "Add to Cart"
                            }),
                            r.jsx(u.zx, {
                              className: "bg-orange hover:bg-yellow",
                              startIcon: r.jsx(u.vs, {})
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              }),
              (0, r.jsxs)("div", {
                className: "flex gap-2",
                children: [
                  r.jsx("div", {
                    className: "flex w-[60%] justify-end bg-dark-white  p-[3.5%] pl-[15px]",
                    children: (0, r.jsxs)("div", {
                      className: "flex w-full max-w-[567px] flex-col gap-3",
                      children: [
                        r.jsx(d.BreadCrumbs, { customLinks: h }),
                        r.jsx(u.ZT, {
                          tag: "h1",
                          variant: "title-2",
                          children: t.attributes.shortName
                        }),
                        "about" === m && r.jsx("div", { children: t.attributes.name }),
                        "details" === m && r.jsx("div", { children: t.attributes.description }),
                        (0, r.jsxs)("div", {
                          className: "text-[12px] font-semibold",
                          children: [
                            "Have any questions?",
                            " ",
                            r.jsx(n(), {
                              className: "font-normal text-dark-blue hover:underline",
                              href: "/contact-us",
                              children: "Contact Us"
                            })
                          ]
                        })
                      ]
                    })
                  }),
                  r.jsx("div", {
                    className: "w-[40%] p-[3.5%] pr-[15px]",
                    children: r.jsx(i(), {
                      alt: `${t.attributes.name} img`,
                      height: 450,
                      src: `http://localhost:1337${o}`,
                      width: 450
                    })
                  })
                ]
              })
            ]
          });
        };
      },
      8203: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => c, revalidate: () => n });
        var r = s(4656),
          a = s(8481),
          i = s(2984),
          o = s(9878);
        let n = 5,
          l = async () => {
            let e = (await o.Ps.getProducts()).products.data;
            return (
              console.log("revalidate"),
              r.jsx("main", {
                className: "grow",
                children: r.jsx(i.W2, { children: r.jsx(a.C, { data: { products: e } }) })
              })
            );
          },
          c = l;
      },
      8481: (e, t, s) => {
        "use strict";
        s.d(t, { C: () => d, l: () => n });
        var r = s(5153);
        let a = (0, r.createProxy)(
            String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/sections/ProductSection/ProductSection.tsx`
          ),
          { __esModule: i, $$typeof: o } = a;
        a.default;
        let n = (0, r.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/sections/ProductSection/ProductSection.tsx#ProductSection`
        );
        var l = s(4656),
          c = s(4460);
        let d = ({ data: e }) => {
          let { products: t } = e;
          return l.jsx("section", {
            className: "grid grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-5 desktop:grid-cols-6",
            children: t.map((e) => l.jsx(c.Il, { product: e }, e.id))
          });
        };
      },
      3881: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => a });
        var r = s(8531);
        let a = (e) => {
          let t = (0, r.fillMetadataSegment)(".", e.params, "favicon.ico");
          return [{ type: "image/x-icon", sizes: "16x16", url: t + "" }];
        };
      }
    });
  var t = require("../webpack-runtime.js");
  t.C(e);
  var s = (e) => t((t.s = e)),
    r = t.X(0, [271, 403, 323, 858], () => s(9356));
  module.exports = r;
})();
