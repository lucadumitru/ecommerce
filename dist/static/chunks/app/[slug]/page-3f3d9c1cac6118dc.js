(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [42, 931],
  {
    5421: function (e, t, s) {
      Promise.resolve().then(s.t.bind(s, 413, 23)),
        Promise.resolve().then(s.t.bind(s, 8326, 23)),
        Promise.resolve().then(s.bind(s, 3862)),
        Promise.resolve().then(s.bind(s, 5741)),
        Promise.resolve().then(s.bind(s, 8218)),
        Promise.resolve().then(s.bind(s, 3033)),
        Promise.resolve().then(s.bind(s, 3731)),
        Promise.resolve().then(s.bind(s, 3026)),
        Promise.resolve().then(s.bind(s, 7124)),
        Promise.resolve().then(s.bind(s, 1564)),
        Promise.resolve().then(s.bind(s, 461)),
        Promise.resolve().then(s.bind(s, 5677)),
        Promise.resolve().then(s.bind(s, 4794));
    },
    461: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ProductSection: function () {
            return x;
          }
        });
      var r = s(7437),
        i = s(6691),
        a = s.n(i),
        l = s(1396),
        o = s.n(l),
        n = s(2265),
        c = s(3046),
        d = s(5741),
        b = s(3108),
        u = s(9693);
      let x = (e) => {
        var t, s;
        let { data: i } = e,
          { product: l } = i,
          [x, h] = (0, n.useState)(1),
          m = l.attributes.productPreviewImg.data.attributes.url,
          f = (0, c.I0)(),
          [v, p] = (0, n.useState)("about"),
          j = ["".concat(l.attributes.category.data.attributes.title)],
          g = (0, n.useCallback)((e) => {
            p(e);
          }, []);
        return (0, r.jsxs)("section", {
          children: [
            (0, r.jsx)("div", {
              className: "mobile:border-b mobile:border-light-gray",
              children: (0, r.jsxs)(b.W2, {
                className: "flex h-[80px] items-center justify-between gap-2 laptop:h-[100px]",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-center gap-7",
                    children: [
                      (0, r.jsx)("button", {
                        "data-button": "about",
                        className: "".concat(
                          "about" === v && "!text-black before:!w-full",
                          " relative whitespace-nowrap text-[14px] font-semibold text-gray-400 before:absolute  before:bottom-0 before:h-[2px] before:w-0 before:rounded-full before:bg-blue before:transition-all hover:before:w-full"
                        ),
                        onClick: () => g("about"),
                        children: "About Product"
                      }),
                      (0, r.jsx)("button", {
                        "data-button": "details",
                        className: "".concat(
                          "details" === v && "!text-black before:!w-full",
                          " relative whitespace-nowrap text-[14px] font-semibold text-gray-400 before:absolute before:bottom-0 before:h-[2px] before:w-0 before:rounded-full before:bg-blue before:transition-all hover:before:w-full"
                        ),
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
                              (null === (t = l.attributes.discountPrice) || void 0 === t
                                ? void 0
                                : t.toFixed(2)) ||
                                (null === (s = l.attributes.price) || void 0 === s
                                  ? void 0
                                  : s.toFixed(2))
                            ]
                          })
                        ]
                      }),
                      (0, r.jsx)("div", {
                        className: "w-full max-w-[75px]",
                        children: (0, r.jsx)(b.Y2, {
                          onValueChange: (e) => {
                            h(e);
                          }
                        })
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex h-[50px] gap-2",
                        children: [
                          (0, r.jsx)(b.zx, {
                            onClick: () => {
                              f((0, u.gK)({ product: l, quantity: x }));
                            },
                            children: "Add to Cart"
                          }),
                          (0, r.jsx)(b.zx, {
                            className: "bg-orange hover:bg-yellow",
                            startIcon: (0, r.jsx)(b.vs, {})
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
                (0, r.jsx)("div", {
                  className: "flex w-[60%] justify-end bg-dark-white  p-[3.5%] pl-[15px]",
                  children: (0, r.jsxs)("div", {
                    className: "flex w-full max-w-[567px] flex-col gap-3",
                    children: [
                      (0, r.jsx)(d.BreadCrumbs, { customLinks: j }),
                      (0, r.jsx)(b.ZT, {
                        tag: "h1",
                        variant: "title-2",
                        children: l.attributes.shortName
                      }),
                      "about" === v && (0, r.jsx)("div", { children: l.attributes.name }),
                      "details" === v && (0, r.jsx)("div", { children: l.attributes.description }),
                      (0, r.jsxs)("div", {
                        className: "text-[12px] font-semibold",
                        children: [
                          "Have any questions?",
                          " ",
                          (0, r.jsx)(o(), {
                            className: "font-normal text-dark-blue hover:underline",
                            href: "/contact-us",
                            children: "Contact Us"
                          })
                        ]
                      })
                    ]
                  })
                }),
                (0, r.jsx)("div", {
                  className: "w-[40%] p-[3.5%] pr-[15px]",
                  children: (0, r.jsx)(a(), {
                    alt: "".concat(l.attributes.name, " img"),
                    height: 450,
                    src: "".concat("http://localhost:1337").concat(m),
                    width: 450
                  })
                })
              ]
            })
          ]
        });
      };
    }
  },
  function (e) {
    e.O(0, [736, 554, 971, 472, 744], function () {
      return e((e.s = 5421));
    }),
      (_N_E = e.O());
  }
]);
