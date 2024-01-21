(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [565],
  {
    7049: function (e, s, l) {
      Promise.resolve().then(l.bind(l, 793));
    },
    793: function (e, s, l) {
      "use strict";
      l.r(s),
        l.d(s, {
          default: function () {
            return x;
          }
        });
      var t = l(7437),
        a = l(3046);
      l(7124), l(8218), l(3026);
      var i = l(4696),
        d = l(5741);
      l(3862), l(1396), l(6331), l(3731), l(1564), l(8310), l(3033);
      var r = l(3108),
        c = l(9693),
        n = l(7563),
        x = () => {
          let e = (0, n.C)((e) => e.cartProducts.cartProducts),
            s = e.products.length ? 21 : 0,
            l = e.products.length ? 1.91 : 0,
            x = +(0.1 * e.orderTotal).toFixed(2),
            o = Number(e.orderTotal + s + l + x).toFixed(2),
            h = (0, a.I0)();
          return (0, t.jsx)("main", {
            className: "pb-16 pt-5",
            children: (0, t.jsxs)(r.W2, {
              children: [
                (0, t.jsx)(d.BreadCrumbs, {}),
                (0, t.jsx)(r.ZT, {
                  className: "mb-4 tablet:mb-7 ",
                  tag: "h1",
                  variant: "title-2",
                  children: "Shopping Cart"
                }),
                (0, t.jsxs)("div", {
                  className: "flex flex-col gap-4 tablet:flex-row tablet:items-start",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "grow",
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            " hidden gap-2 border-b pb-3 text-[14px] font-semibold laptop:flex",
                          children: [
                            (0, t.jsx)("span", { className: "w-[40%]", children: "Items" }),
                            (0, t.jsxs)("div", {
                              className: "grid w-[60%] grid-cols-[1fr_1fr_1fr_25px] gap-2",
                              children: [
                                (0, t.jsx)("span", { children: "Price" }),
                                (0, t.jsx)("span", { children: "Qty " }),
                                (0, t.jsx)("span", { children: "Subtotal" }),
                                (0, t.jsx)("span", {})
                              ]
                            })
                          ]
                        }),
                        (0, t.jsx)("ul", {
                          className: "grid grid-flow-row divide-y",
                          children: e.products.length
                            ? e.products.map((e) =>
                                (0, t.jsx)(i.b, { cartProduct: e, variant: "large" }, e.id)
                              )
                            : (0, t.jsxs)("div", {
                                className:
                                  "mx-auto mt-5 flex flex-col items-center justify-center font-semibold text-light-gray",
                                children: [
                                  (0, t.jsx)(r.Q0, { height: 100, width: 100 }),
                                  (0, t.jsx)("span", {
                                    className: " capitalize",
                                    children: "The cart is empty"
                                  })
                                ]
                              })
                        }),
                        (0, t.jsx)("div", {
                          className: "mt-2 flex w-full justify-end",
                          children:
                            !!e.products.length &&
                            (0, t.jsx)(r.zx, {
                              className: "w-auto bg-black hover:bg-black-700",
                              onClick: () => h((0, c.LL)()),
                              children: "Clear Shopping Cart"
                            })
                        })
                      ]
                    }),
                    (0, t.jsxs)("div", {
                      className: "shrink-1 h-auto w-full bg-dark-white p-4 tablet:max-w-[446px]",
                      children: [
                        (0, t.jsx)(r.ZT, {
                          className: "mb-5",
                          tag: "h2",
                          variant: "title-5",
                          children: "Summary"
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex flex-col gap-1",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex justify-between text-[13px] font-semibold",
                              children: [
                                (0, t.jsx)("div", { children: "Subtotal" }),
                                (0, t.jsxs)("div", { children: ["$", e.orderTotal] })
                              ]
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex justify-between text-[13px] font-semibold",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col",
                                  children: [
                                    "Shipping",
                                    " ",
                                    (0, t.jsx)("span", {
                                      className:
                                        "mt-1 max-w-[70%] text-[10px] font-normal text-dark-gray",
                                      children:
                                        "(Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.)"
                                    })
                                  ]
                                }),
                                (0, t.jsxs)("div", {
                                  children: ["$", "".concat(e.products.length ? s : 0)]
                                })
                              ]
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex justify-between text-[13px] font-semibold",
                              children: [
                                (0, t.jsx)("div", { children: "Tax" }),
                                (0, t.jsxs)("div", { children: ["$", l] })
                              ]
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex justify-between text-[13px] font-semibold",
                              children: [
                                (0, t.jsx)("div", { children: "GTS (10%)" }),
                                (0, t.jsxs)("div", { children: ["$", x] })
                              ]
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex justify-between text-[13px] font-semibold",
                              children: [
                                (0, t.jsx)("div", { children: "Order Total" }),
                                (0, t.jsxs)("div", { children: ["$", o] })
                              ]
                            })
                          ]
                        }),
                        (0, t.jsxs)("div", {
                          className: "mt-2 flex flex-col gap-3",
                          children: [
                            (0, t.jsx)(r.zx, {
                              className: "py-4",
                              children: "Proceed to Checkout"
                            }),
                            (0, t.jsx)(r.zx, {
                              className: "bg-yellow py-4 text-black hover:bg-light-yellow",
                              endIcon: (0, t.jsx)(r.vs, {}),
                              children: (0, t.jsx)("span", { children: "Checkout" })
                            }),
                            (0, t.jsx)(r.zx, {
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
    }
  },
  function (e) {
    e.O(0, [736, 554, 971, 472, 744], function () {
      return e((e.s = 7049));
    }),
      (_N_E = e.O());
  }
]);
