(() => {
  var e = {};
  (e.id = 565),
    (e.ids = [565]),
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
      1845: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, {
            GlobalError: () => l.a,
            __next_app__: () => p,
            originalPathname: () => x,
            pages: () => o,
            routeModule: () => u,
            tree: () => d
          });
        var r = s(7096),
          a = s(6132),
          i = s(7284),
          l = s.n(i),
          n = s(2564),
          c = {};
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
            ].indexOf(e) && (c[e] = () => n[e]);
        s.d(t, c);
        let d = [
            "",
            {
              children: [
                "cart",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(s.bind(s, 5850)),
                        "/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/app/cart/page.tsx"
                      ]
                    }
                  ]
                },
                {
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
          o = [
            "/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/app/cart/page.tsx"
          ],
          x = "/cart/page",
          p = { require: s, loadChunk: () => Promise.resolve() },
          u = new r.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: "/cart/page",
              pathname: "/cart",
              bundlePath: "",
              filename: "",
              appPaths: []
            },
            userland: { loaderTree: d }
          });
      },
      2647: (e, t, s) => {
        Promise.resolve().then(s.bind(s, 3485));
      },
      3485: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => o });
        var r = s(3854),
          a = s(8157);
        s(6228), s(6286), s(4886);
        var i = s(5451),
          l = s(5047);
        s(1600), s(5548), s(585), s(9082), s(2569), s(6343), s(5441);
        var n = s(88),
          c = s(6359),
          d = s(8914);
        let o = () => {
          let e = (0, d.C)((e) => e.cartProducts.cartProducts),
            t = e.products.length ? 21 : 0,
            s = e.products.length ? 1.91 : 0,
            o = +(0.1 * e.orderTotal).toFixed(2),
            x = Number(e.orderTotal + t + s + o).toFixed(2),
            p = (0, a.I0)();
          return r.jsx("main", {
            className: "pb-16 pt-5",
            children: (0, r.jsxs)(n.W2, {
              children: [
                r.jsx(l.BreadCrumbs, {}),
                r.jsx(n.ZT, {
                  className: "mb-4 tablet:mb-7 ",
                  tag: "h1",
                  variant: "title-2",
                  children: "Shopping Cart"
                }),
                (0, r.jsxs)("div", {
                  className: "flex flex-col gap-4 tablet:flex-row tablet:items-start",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "grow",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            " hidden gap-2 border-b pb-3 text-[14px] font-semibold laptop:flex",
                          children: [
                            r.jsx("span", { className: "w-[40%]", children: "Items" }),
                            (0, r.jsxs)("div", {
                              className: "grid w-[60%] grid-cols-[1fr_1fr_1fr_25px] gap-2",
                              children: [
                                r.jsx("span", { children: "Price" }),
                                r.jsx("span", { children: "Qty " }),
                                r.jsx("span", { children: "Subtotal" }),
                                r.jsx("span", {})
                              ]
                            })
                          ]
                        }),
                        r.jsx("ul", {
                          className: "grid grid-flow-row divide-y",
                          children: e.products.length
                            ? e.products.map((e) =>
                                r.jsx(i.b, { cartProduct: e, variant: "large" }, e.id)
                              )
                            : (0, r.jsxs)("div", {
                                className:
                                  "mx-auto mt-5 flex flex-col items-center justify-center font-semibold text-light-gray",
                                children: [
                                  r.jsx(n.Q0, { height: 100, width: 100 }),
                                  r.jsx("span", {
                                    className: " capitalize",
                                    children: "The cart is empty"
                                  })
                                ]
                              })
                        }),
                        r.jsx("div", {
                          className: "mt-2 flex w-full justify-end",
                          children:
                            !!e.products.length &&
                            r.jsx(n.zx, {
                              className: "w-auto bg-black hover:bg-black-700",
                              onClick: () => p((0, c.LL)()),
                              children: "Clear Shopping Cart"
                            })
                        })
                      ]
                    }),
                    (0, r.jsxs)("div", {
                      className: "shrink-1 h-auto w-full bg-dark-white p-4 tablet:max-w-[446px]",
                      children: [
                        r.jsx(n.ZT, {
                          className: "mb-5",
                          tag: "h2",
                          variant: "title-5",
                          children: "Summary"
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex flex-col gap-1",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex justify-between text-[13px] font-semibold",
                              children: [
                                r.jsx("div", { children: "Subtotal" }),
                                (0, r.jsxs)("div", { children: ["$", e.orderTotal] })
                              ]
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex justify-between text-[13px] font-semibold",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "flex flex-col",
                                  children: [
                                    "Shipping",
                                    " ",
                                    r.jsx("span", {
                                      className:
                                        "mt-1 max-w-[70%] text-[10px] font-normal text-dark-gray",
                                      children:
                                        "(Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.)"
                                    })
                                  ]
                                }),
                                (0, r.jsxs)("div", {
                                  children: ["$", `${e.products.length ? t : 0}`]
                                })
                              ]
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex justify-between text-[13px] font-semibold",
                              children: [
                                r.jsx("div", { children: "Tax" }),
                                (0, r.jsxs)("div", { children: ["$", s] })
                              ]
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex justify-between text-[13px] font-semibold",
                              children: [
                                r.jsx("div", { children: "GTS (10%)" }),
                                (0, r.jsxs)("div", { children: ["$", o] })
                              ]
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex justify-between text-[13px] font-semibold",
                              children: [
                                r.jsx("div", { children: "Order Total" }),
                                (0, r.jsxs)("div", { children: ["$", x] })
                              ]
                            })
                          ]
                        }),
                        (0, r.jsxs)("div", {
                          className: "mt-2 flex flex-col gap-3",
                          children: [
                            r.jsx(n.zx, { className: "py-4", children: "Proceed to Checkout" }),
                            r.jsx(n.zx, {
                              className: "bg-yellow py-4 text-black hover:bg-light-yellow",
                              endIcon: r.jsx(n.vs, {}),
                              children: r.jsx("span", { children: "Checkout" })
                            }),
                            r.jsx(n.zx, {
                              disabled: !0,
                              className: "py-4",
                              variant: "outline",
                              children: "Check Out with Multiple Addresses"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          });
        };
      },
      5850: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { $$typeof: () => l, __esModule: () => i, default: () => c });
        var r = s(5153);
        let a = (0, r.createProxy)(
            String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/app/cart/page.tsx`
          ),
          { __esModule: i, $$typeof: l } = a,
          n = a.default,
          c = n;
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
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var s = (e) => t((t.s = e)),
    r = t.X(0, [271, 403, 323, 858], () => s(1845));
  module.exports = r;
})();
