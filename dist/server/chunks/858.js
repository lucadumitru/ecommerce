(exports.id = 858),
  (exports.ids = [858]),
  (exports.modules = {
    1933: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 3579, 23)),
        Promise.resolve().then(s.t.bind(s, 619, 23)),
        Promise.resolve().then(s.t.bind(s, 1459, 23)),
        Promise.resolve().then(s.t.bind(s, 3456, 23)),
        Promise.resolve().then(s.t.bind(s, 847, 23)),
        Promise.resolve().then(s.t.bind(s, 7303, 23));
    },
    171: (e, t, s) => {
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
        Promise.resolve().then(s.bind(s, 5292)),
        Promise.resolve().then(s.bind(s, 2411)),
        Promise.resolve().then(s.bind(s, 6029));
    },
    1600: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { AccordionItem: () => i });
      var r = s(3854),
        a = s(4218),
        l = s(585);
      let i = ({ title: e, body: t, bodyClassName: s }) => {
        let [i, o] = (0, a.useState)(!1);
        return (0, r.jsxs)("div", {
          className: "flex flex-col overflow-hidden border-b",
          children: [
            (0, r.jsxs)("button", {
              className: "mb-2 flex w-full justify-between text-[12px] font-bold",
              onClick: () => o(!i),
              children: [
                e,
                r.jsx("span", {
                  children: r.jsx(l.e0, { className: `${i ? "rotate-180 " : ""} transition` })
                })
              ]
            }),
            r.jsx("div", {
              className: `${i ? "  max-h-[600px]" : " max-h-0"} h-auto transition-all ${
                s?.length ? s : ""
              }`,
              children: t
            })
          ]
        });
      };
    },
    5047: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { BreadCrumbs: () => d });
      var r = s(3854),
        a = s(5548),
        l = s.n(a),
        i = s(1018),
        o = s(4218),
        n = s.n(o),
        c = s(585);
      let d = ({
        homeElement: e = "Home",
        separator: t = r.jsx(c.e0, { className: "-rotate-90 text-blue" }),
        containerClasses: s = "flex items-center text-[14px] mb-2 tablet:mb-5",
        listClasses: a = "hover:underline",
        activeClasses: o = "text-blue",
        capitalizeLinks: d = !0,
        customLinks: x
      }) => {
        let u = (0, i.usePathname)(),
          p = x || u.split("/").filter((e) => e);
        return r.jsx("div", {
          children: (0, r.jsxs)("ol", {
            className: s,
            children: [
              r.jsx("li", { className: a, children: r.jsx(l(), { href: "/", children: e }) }),
              p.length > 0 && t,
              p.map((e, s) => {
                let i = `/${p.slice(0, s + 1).join("/")}`,
                  c = u === i ? `${a} ${o}` : a,
                  x = d
                    ? e.replace(/\b\w/g, (e) => e.toUpperCase()).replace("-", " ")
                    : e.replace("-", " ");
                return (0, r.jsxs)(
                  n().Fragment,
                  {
                    children: [
                      r.jsx("li", { className: c, children: r.jsx(l(), { href: i, children: x }) }),
                      p.length !== s + 1 && t
                    ]
                  },
                  s
                );
              })
            ]
          })
        });
      };
    },
    6286: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { Cart: () => c });
      var r = s(3854),
        a = s(1018),
        l = s(4218),
        i = s(88),
        o = s(8914),
        n = s(5451);
      let c = () => {
        let e = (0, o.C)((e) => e.cartProducts.cartProducts),
          [t, s] = (0, l.useState)(!1),
          c = (0, l.useRef)(null),
          d = (0, l.useRef)(null),
          x = e.products ? e.products.reduce((e, t) => e + t.quantity, 0) : 0,
          u = (0, a.usePathname)(),
          p = u.includes("cart"),
          h = () => {
            p || (s(!t), document.body.classList.toggle("lock"));
          };
        return (
          (0, l.useEffect)(() => {
            let e = (e) => {
              c.current &&
                d.current &&
                !c.current.contains(e.target) &&
                !d.current.contains(e.target) &&
                (s(!1), document.body.classList.remove("lock"));
            };
            return (
              document.addEventListener("mousedown", e),
              p && (s(!1), document.body.classList.add("lock")),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, [t, p]),
          (0, r.jsxs)("div", {
            className: "flex items-center",
            children: [
              (0, r.jsxs)("button", {
                "aria-label": "cart button",
                className: "group relative",
                type: "button",
                onClick: h,
                children: [
                  r.jsx(i.w7, {
                    className:
                      "text-white transition-all laptop:text-black laptop:group-hover:text-blue",
                    height: 30,
                    width: 30
                  }),
                  r.jsx("span", {
                    className:
                      "absolute right-0 top-0 flex min-w-max  -translate-y-[50%]  translate-x-[20%] items-center justify-center rounded-full bg-white px-[6px] py-[1px] text-xs font-semibold text-blue laptop:bg-blue laptop:text-white",
                    children: x
                  })
                ]
              }),
              r.jsx("div", {
                className: `fixed right-0 top-0 z-10 min-h-full w-full shadow-lg  before:absolute before:h-full before:w-full before:bg-[rgb(1,86,255,0.3)] ${
                  t ? "before:opacity-100" : "invisible before:opacity-0"
                } before:transition-opacity`,
                children: (0, r.jsxs)("div", {
                  ref: c,
                  className: `absolute right-0 h-full w-[80%] bg-white pt-10 transition-all  mobile:w-[310px] ${
                    t ? "translate-x-0" : "translate-x-[100%] "
                  }`,
                  children: [
                    r.jsx("button", {
                      ref: d,
                      "aria-label": "close cart button",
                      className: "group absolute right-2 top-2",
                      onClick: h,
                      children: r.jsx(i.Tw, {
                        className: "text-black transition-all group-hover:text-blue",
                        width: "30"
                      })
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex h-full flex-col divide-y",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "px-7 py-5",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex flex-col gap-y-1 text-center",
                              children: [
                                r.jsx("div", {
                                  className: "text-[18px] font-semibold capitalize leading-6",
                                  children: "My Cart"
                                }),
                                (0, r.jsxs)("div", {
                                  className: "text-xs text-dark-gray",
                                  children: [" ", r.jsx("span", { children: x }), " items in cart"]
                                })
                              ]
                            }),
                            !!e.products &&
                              e.products.length > 0 &&
                              r.jsx("div", {
                                className: "mt-5",
                                children: r.jsx(i.ZP, {
                                  href: "/cart",
                                  variant: "outline",
                                  children: "View or edit your cart"
                                })
                              })
                          ]
                        }),
                        r.jsx("ul", {
                          className: "flex flex-col divide-y overflow-scroll ",
                          children:
                            e.products &&
                            e.products.map((e) =>
                              r.jsx(n.b, { cartProduct: e, variant: "small" }, e.id)
                            )
                        }),
                        e.products && e.products.length
                          ? (0, r.jsxs)("div", {
                              className: "px-7 py-5",
                              children: [
                                (0, r.jsxs)("div", {
                                  className:
                                    "flex w-full items-center justify-center gap-1 text-[14px] font-semibold text-dark-gray",
                                  children: [
                                    "Order Total:",
                                    " ",
                                    (0, r.jsxs)("span", {
                                      className: "text-[18px] text-black ",
                                      children: ["$", e.orderTotal.toFixed(2)]
                                    }),
                                    " "
                                  ]
                                }),
                                (0, r.jsxs)("div", {
                                  className: "mt-3 flex flex-col gap-y-2",
                                  children: [
                                    r.jsx(i.zx, { variant: "solid", children: "Go to Checkout" }),
                                    r.jsx(i.zx, {
                                      className:
                                        "bg-yellow text-[12px] text-black hover:bg-light-yellow",
                                      endIcon: r.jsx(i.vs, {}),
                                      children: r.jsx("span", { children: "Checkout" })
                                    })
                                  ]
                                }),
                                " "
                              ]
                            })
                          : (0, r.jsxs)("div", {
                              className: "flex flex-col items-center gap-2 px-7 py-5",
                              children: [
                                r.jsx(i.Q0, {
                                  className: "text-light-gray",
                                  height: 50,
                                  width: 50
                                }),
                                r.jsx("span", { children: "Your cart is empty" })
                              ]
                            })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        );
      };
    },
    5451: (e, t, s) => {
      "use strict";
      s.d(t, { b: () => p });
      var r = s(3854),
        a = s(8758),
        l = s(1956),
        i = s.n(l),
        o = s(5548),
        n = s.n(o),
        c = s(8157),
        d = s(88),
        x = s(6359);
      let u = (0, a.j)("", {
          variants: {
            variant: {
              small: "flex-col flex gap-1 text-[14px] w-full grow",
              large: "grid grid-cols-[1fr_1fr_1fr_25px] w-full gap-2 laptop:w-[60%]"
            }
          }
        }),
        p = ({ cartProduct: e, variant: t = "small" }) => {
          let s = (0, c.I0)(),
            a = r.jsx("button", {
              "aria-label": "delete cart item",
              className:
                "flex h-6 w-6 items-center justify-center justify-self-end text-dark-gray transition hover:text-blue",
              onClick: () => s((0, x.Ir)(e)),
              children: r.jsx(d.P9, {})
            });
          return (0, r.jsxs)("li", {
            className: ` ${"small" === t ? "px-7 py-5" : "py-5"} flex justify-between gap-2 `,
            children: [
              (0, r.jsxs)("div", {
                className: `${
                  "small" === t ? "grow gap-2" : "flex-wrap gap-2 laptop:flex-nowrap"
                } flex w-full`,
                children: [
                  (0, r.jsxs)("div", {
                    className: `${"large" === t && "flex w-full gap-2 laptop:w-[40%]"}  `,
                    children: [
                      r.jsx(i(), {
                        alt: "Cart item img",
                        height: 120,
                        src: `http://localhost:1337${e.attributes.productPreviewImg.data.attributes.url}`,
                        width: 120,
                        className: `${
                          "small" === t
                            ? "max-h-[65px] max-w-[65px]"
                            : "max-h-[70px] max-w-[70px] tablet:max-h-[120px] tablet:max-w-[120px] "
                        } object-contain `
                      }),
                      "large" === t &&
                        r.jsx(n(), {
                          className:
                            "w-full text-[12px] mobile:text-[14px] laptop:max-w-[270px] laptop:text-base",
                          href: `/${e.attributes.slug}`,
                          children: e.attributes.name
                        })
                    ]
                  }),
                  (0, r.jsxs)("div", {
                    className: u({ variant: t }),
                    children: [
                      "small" === t &&
                        r.jsx(n(), {
                          href: `/${e.attributes.slug}`,
                          children:
                            e.attributes.name.length >= 43
                              ? `${e.attributes.name.slice(0, 43)}...`
                              : e.attributes.name
                        }),
                      (0, r.jsxs)("div", {
                        className: "grow font-semibold",
                        children: [
                          "large" === t &&
                            r.jsx("div", {
                              className: "mb-2 block text-[12px] laptop:hidden",
                              children: "Price"
                            }),
                          (0, r.jsxs)("div", {
                            children: [
                              "$",
                              (e.attributes.discountPrice || e.attributes.price).toFixed(2)
                            ]
                          })
                        ]
                      }),
                      "small" === t
                        ? (0, r.jsxs)("div", {
                            children: [
                              "Quantity:",
                              r.jsx("span", {
                                className: "ml-1 font-semibold",
                                children: e.quantity
                              })
                            ]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsxs)("div", {
                                className: "flex w-full flex-col",
                                children: [
                                  r.jsx("span", {
                                    className: "mb-2 text-[12px] font-semibold laptop:hidden",
                                    children: "Qty"
                                  }),
                                  r.jsx("span", {
                                    className: "w-[75px]",
                                    children: r.jsx(d.Y2, {
                                      productId: e.id,
                                      startValue: e.quantity
                                    })
                                  })
                                ]
                              }),
                              (0, r.jsxs)("div", {
                                className: "font-semibold",
                                children: [
                                  r.jsx("div", {
                                    className: "mb-2 block text-[12px] laptop:hidden",
                                    children: "Subtotal"
                                  }),
                                  (0, r.jsxs)("div", { children: ["$", e.subTotal.toFixed(2)] })
                                ]
                              })
                            ]
                          }),
                      "large" === t && a
                    ]
                  })
                ]
              }),
              "small" === t && a
            ]
          });
        };
    },
    5441: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { ContactForm: () => o });
      var r = s(3854),
        a = s(2747),
        l = s(5256),
        i = s(88);
      let o = () => {
        let {
            register: e,
            reset: t,
            control: s,
            handleSubmit: o,
            formState: n
          } = (0, a.cI)({ defaultValues: { email: "", message: "", name: "", phone: "" } }),
          { isSubmitting: c } = n,
          d = async (e) => {
            let s = await fetch("/api/send", { method: "POST", body: JSON.stringify({ ...e }) });
            s.ok
              ? (l.default.success(`${e.name}, your message has been sent`), t())
              : l.default.error("Something went wrong, please try again");
          },
          x = "mb-1 text-[13px] font-semibold",
          u =
            "min-h-[50px] items-center rounded-[4px] border border-dark-gray outline-green focus-within:outline";
        return (0, r.jsxs)("form", {
          className: "flex flex-col gap-3",
          onSubmit: o(d),
          children: [
            (0, r.jsxs)("div", {
              className: "flex grid-cols-2 flex-col gap-4 laptop:grid",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, r.jsxs)("label", {
                      className: x,
                      htmlFor: "name",
                      children: [
                        "Your Name ",
                        r.jsx("span", { className: "text-red", children: "*" })
                      ]
                    }),
                    r.jsx(a.Qr, {
                      control: s,
                      defaultValue: "",
                      name: "name",
                      render: ({ field: { value: e, onChange: s } }) =>
                        r.jsx(i.II, {
                          required: !0,
                          className: u,
                          clearInput: () => t({ name: "" }),
                          id: "name",
                          placeholder: "Your Name",
                          tabIndex: -1,
                          type: "text",
                          value: e,
                          onChange: s
                        })
                    })
                  ]
                }),
                (0, r.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, r.jsxs)("label", {
                      className: x,
                      htmlFor: "email",
                      children: [
                        "Your Email ",
                        r.jsx("span", { className: "text-red", children: "*" })
                      ]
                    }),
                    r.jsx(a.Qr, {
                      control: s,
                      defaultValue: "",
                      name: "email",
                      render: ({ field: { value: e, onChange: s } }) =>
                        r.jsx(i.II, {
                          required: !0,
                          className: u,
                          clearInput: () => t({ email: "" }),
                          id: "email",
                          placeholder: "Your Email",
                          type: "email",
                          value: e,
                          onChange: s
                        })
                    })
                  ]
                }),
                (0, r.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    r.jsx("label", {
                      className: x,
                      htmlFor: "phone",
                      children: "Your Phone Number"
                    }),
                    r.jsx(a.Qr, {
                      control: s,
                      defaultValue: "",
                      name: "phone",
                      render: ({ field: { value: e, onChange: s } }) =>
                        r.jsx(i.II, {
                          className: u,
                          clearInput: () => t({ phone: "" }),
                          id: "phone",
                          name: "phone",
                          pattern: "^[0-9]*$",
                          placeholder: "Your Phone Number",
                          title: "please enter a valid phone number",
                          type: "tel",
                          value: e,
                          onChange: s
                        })
                    })
                  ]
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [
                (0, r.jsxs)("label", {
                  className: x,
                  htmlFor: "message",
                  children: [
                    "What’s on your mind? ",
                    r.jsx("span", { className: "text-red", children: "*" })
                  ]
                }),
                r.jsx("textarea", {
                  className:
                    "min-h-[50px] rounded-[4px] border border-dark-gray p-2 placeholder:text-[14px]",
                  cols: 30,
                  id: "message",
                  placeholder: "Jot us a note and we’ll get back to you as quickly as possible",
                  rows: 10,
                  ...e("message", { required: !0 })
                })
              ]
            }),
            r.jsx("div", {
              className: "h-[50px] min-w-[150px] mobile:self-start",
              children: r.jsx(i.zx, {
                isLoading: c,
                loadingText: "Sending...",
                type: "submit",
                children: "Submit"
              })
            })
          ]
        });
      };
    },
    9082: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { PaymentMethods: () => i });
      var r = s(3854),
        a = s(1956),
        l = s.n(a);
      let i = ({ paymentItems: e, className: t }) =>
        r.jsx("div", {
          className: `flex items-center justify-center gap-2 ${t?.length ? t : ""}`,
          children: e.map((e, t) =>
            r.jsx(
              l(),
              {
                alt: `${e.label} img`,
                className: " h-[22px] w-[34px] object-contain",
                height: 22,
                src: e.img,
                width: 34
              },
              t
            )
          )
        });
    },
    4886: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { ProductCard: () => f });
      var r = s(3854),
        a = s(1956),
        l = s.n(a),
        i = s(5548),
        o = s.n(i),
        n = s(8157),
        c = s(903),
        d = s(6359),
        x = s(6343),
        u = s(6916),
        p = s(585),
        h = s(8914);
      let m = ({ product: e, ...t }) => {
        let s = (0, h.C)((e) => e.cartProducts.cartProducts.products),
          a = Array.isArray(s) && s.some((t) => t.id === e.id);
        return r.jsx(u.h$, { ...t, icon: r.jsx(p.w7, { height: 25, solid: a, width: 25 }) });
      };
      var b = s(4218),
        g = s(88);
      let C = () => {
          let [e, t] = (0, b.useState)(!1);
          return r.jsx(g.h$, {
            icon: r.jsx(g.EL, {
              className: `${e && "fill-blue text-blue"}`,
              height: 22,
              width: 22
            }),
            onClick: () => t(!e)
          });
        },
        f = ({ product: e }) => {
          let t = (0, n.I0)(),
            s =
              e.attributes.name.length >= 60
                ? `${e.attributes.name.slice(0, 60)}...`
                : e.attributes.name;
          return (0, r.jsxs)("article", {
            className: "group relative flex flex-col gap-3 overflow-hidden p-6",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "absolute right-3 top-3 flex flex-col gap-1 transition hover-hover:translate-x-10 hover-hover:opacity-0 hover-hover:group-hover:visible hover-hover:group-hover:translate-x-0 hover-hover:group-hover:opacity-100",
                children: [
                  r.jsx(C, {}),
                  r.jsx(m, { product: e, onClick: () => t((0, d.gK)({ product: e })) })
                ]
              }),
              (0, r.jsxs)("div", {
                className: " left-6 top-2 text-[10px]",
                children: [
                  r.jsx(x.G, { stock: e.attributes.stock }),
                  r.jsx(o(), {
                    href: `/${e.attributes.slug}`,
                    children: r.jsx(l(), {
                      alt: `${e.attributes.name} image`,
                      className: "h-auto w-full object-cover",
                      height: 100,
                      src: `http://localhost:1337${e.attributes.productPreviewImg.data.attributes.url}`,
                      width: 100
                    })
                  })
                ]
              }),
              (0, r.jsxs)("div", {
                className: "flex grow flex-col gap-3",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex flex-wrap items-center justify-between gap-[2px]",
                    children: [
                      r.jsx(c.i, {
                        allowFraction: !0,
                        readonly: !0,
                        className: "mb-1",
                        initialValue: 5,
                        size: 17,
                        SVGclassName: "inline"
                      }),
                      r.jsx("div", {
                        className: "text-[12px] text-dark-gray",
                        children: "Reviews (4)"
                      })
                    ]
                  }),
                  r.jsx("h5", {
                    className: "grow text-[14px]",
                    children: r.jsx(o(), {
                      className: "text-[#564747] hover:text-[#000]",
                      href: `/${e.attributes.slug}`,
                      children: s
                    })
                  }),
                  (0, r.jsxs)("div", {
                    className: `flex items-center gap-1  text-[15px] font-semibold mobile:text-[18px] ${
                      e.attributes.discountPrice ? "justify-between" : "justify-end"
                    }`,
                    children: [
                      (0, r.jsxs)("div", {
                        className: `${
                          e.attributes.discountPrice &&
                          "text-[14px] font-normal text-red line-through"
                        }`,
                        children: ["$", e.attributes.price.toFixed(2)]
                      }),
                      e.attributes?.price &&
                        r.jsx("div", {
                          children:
                            e.attributes?.discountPrice &&
                            `$${e.attributes.discountPrice?.toFixed(2)}`
                        })
                    ]
                  })
                ]
              })
            ]
          });
        };
    },
    6228: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { ShopInfo: () => n });
      var r = s(3854),
        a = s(5548),
        l = s.n(a),
        i = s(4218),
        o = s(88);
      let n = () => {
        let [e, t] = (0, i.useState)(!1),
          s = (0, i.useRef)(null),
          a = (0, i.useRef)(null),
          n = new Date(),
          c = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][
            n.getDay()
          ];
        return (
          (0, i.useEffect)(() => {
            let e = (e) => {
              s.current &&
                a.current &&
                !s.current.contains(e.target) &&
                !a.current.contains(e.target) &&
                t(!1);
            };
            return (
              document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, [e]),
          (0, r.jsxs)("div", {
            className: "relative",
            children: [
              (0, r.jsxs)("button", {
                ref: a,
                className: "flex items-center gap-1 ",
                onClick: () => t(!e),
                children: [
                  `${c.slice(0, 3)}: ${
                    {
                      Monday: { hours: "9:00 AM - 5:30 PM" },
                      Tuesday: { hours: "9:00 AM - 5:30 PM" },
                      Wednesday: { hours: "9:00 AM - 5:30 PM" },
                      Thursday: { hours: "9:00 AM - 5:30 PM" },
                      Friday: { hours: "9:00 AM - 6:00 PM" },
                      Saturday: { hours: "11:00 AM - 5:00 PM" },
                      Sunday: { hours: "The shop is closed" }
                    }[c].hours
                  }`,
                  r.jsx(o.e0, { className: `transition-all ${e ? "rotate-180" : "rotate-0"}` })
                ]
              }),
              (0, r.jsxs)("div", {
                ref: s,
                className: `absolute -bottom-1 z-10  flex translate-y-[100%] flex-col divide-y-2 overflow-hidden border-2 border-light-gray bg-white text-[13px] text-black transition-all mobile:min-w-[300px] ${
                  e
                    ? "visible max-h-[1000px] border-opacity-100"
                    : "invisible max-h-0 border-opacity-0"
                }`,
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-start gap-3 px-5 py-2.5",
                    children: [
                      r.jsx(o.wZ, { className: "hidden text-blue mobile:block" }),
                      (0, r.jsxs)("div", {
                        children: [
                          r.jsx("div", { className: "mb-1 text-[12px]", children: "We are open:" }),
                          (0, r.jsxs)("div", {
                            className:
                              "flex flex-col gap-1 text-[14px] font-semibold text-dark-gray",
                            children: [
                              (0, r.jsxs)("div", {
                                children: [
                                  "Mon-Thu: ",
                                  r.jsx("span", {
                                    className: "text-black",
                                    children: "9:00 AM - 5:30 PM"
                                  })
                                ]
                              }),
                              (0, r.jsxs)("div", {
                                children: [
                                  "Fr: ",
                                  r.jsx("span", {
                                    className: "text-black",
                                    children: "9:00 AM - 6:00 PM"
                                  })
                                ]
                              }),
                              (0, r.jsxs)("div", {
                                children: [
                                  "Sat: ",
                                  r.jsx("span", {
                                    className: "text-black",
                                    children: "11:00 AM - 5:00 PM"
                                  })
                                ]
                              }),
                              (0, r.jsxs)("div", {
                                children: [
                                  "Sun: ",
                                  r.jsx("span", { className: "text-black", children: "Closed" })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex items-start gap-3 px-5 py-2.5",
                    children: [
                      r.jsx(o._t, { className: "hidden text-blue mobile:block" }),
                      (0, r.jsxs)("div", {
                        children: [
                          r.jsx("div", { className: "mb-1 text-[12px]", children: "Adress:" }),
                          r.jsx(l(), {
                            className: "hover:underline",
                            href: "#!",
                            children: "Street Adress, City Address, 1234"
                          })
                        ]
                      })
                    ]
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex flex-col gap-0.5 px-5 py-2.5",
                    children: [
                      (0, r.jsxs)("div", {
                        children: [
                          "Phones:",
                          " ",
                          r.jsx(l(), {
                            className: "whitespace-nowrap text-dark-blue hover:underline",
                            href: "tel:0012345678",
                            children: "(00) 1234 5678"
                          })
                        ]
                      }),
                      (0, r.jsxs)("div", {
                        children: [
                          "E-mail:",
                          " ",
                          r.jsx(l(), {
                            className: "text-dark-blue hover:underline",
                            href: "mailto:shop@email.com",
                            children: "shop@email.com"
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        );
      };
    },
    6343: (e, t, s) => {
      "use strict";
      s.d(t, { G: () => l });
      var r = s(3854),
        a = s(585);
      let l = ({ stock: e }) =>
        e > 0
          ? (0, r.jsxs)("div", {
              className: "flex items-center gap-2  text-green",
              children: [r.jsx(a.Ye, {}), r.jsx("span", { children: "in stock" })]
            })
          : (0, r.jsxs)("div", {
              className: "flex items-center gap-2  text-red",
              children: [r.jsx(a.qW, {}), r.jsx("span", { children: "check availability" })]
            });
    },
    2569: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { SubscribeForm: () => i });
      var r = s(3854),
        a = s(4218),
        l = s(88);
      let i = ({ description: e = !0, title: t, subTitle: s, className: i }) => {
        let [o, n] = (0, a.useState)("");
        return (0, r.jsxs)("section", {
          className: `${
            i?.length ? i : ""
          } flex flex-wrap items-center justify-between gap-[15px] laptop:flex-nowrap `,
          children: [
            e &&
              (0, r.jsxs)("div", {
                className: "",
                children: [
                  r.jsx("h2", {
                    className:
                      "mb-1 text-[18px] font-medium tablet:text-[30px] desktop:text-[38px]",
                    children: t
                  }),
                  r.jsx("p", {
                    className: "text-[12px] font-light tablet:text-[16px]",
                    children: s
                  })
                ]
              }),
            (0, r.jsxs)("form", {
              action: "#",
              className: "flex h-[50px] shrink  basis-full  gap-3 laptop:basis-[565px]",
              children: [
                r.jsx(l.II, {
                  className: "rounded-md border-2 border-white  bg-transparent",
                  clearInput: () => n(""),
                  inputClassName: "placeholder:text-white",
                  placeholder: "Your Email",
                  type: "email",
                  value: o,
                  onChange: (e) => n(e.target.value)
                }),
                r.jsx(l.zx, {
                  className: "max-w-[130px] tablet:max-w-[150px]",
                  type: "submit",
                  children: "Subscribe"
                })
              ]
            })
          ]
        });
      };
    },
    5292: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { NumberInput: () => n });
      var r = s(3854),
        a = s(4218),
        l = s(8157),
        i = s(585),
        o = s(6359);
      let n = ({
        startValue: e = 1,
        minValue: t = 1,
        maxValue: s = 99,
        productId: n,
        onValueChange: c
      }) => {
        let [d, x] = (0, a.useState)(e),
          u = (0, l.I0)();
        return (
          (0, a.useEffect)(() => {
            n && u((0, o.iK)({ productId: n, quantity: d })), c && c(d);
          }, [d, u, n, c]),
          (0, r.jsxs)("div", {
            className: "min-w-14 flex items-center rounded-[6px] bg-dark-white p-2",
            children: [
              r.jsx("input", {
                className: "h-full w-full bg-transparent px-2 font-[14px] font-semibold",
                value: d,
                onChange: (e) => {
                  let r = +e.target.value;
                  r >= t && r <= s && x(r);
                }
              }),
              (0, r.jsxs)("div", {
                className: "flex flex-col items-center justify-center text-black",
                children: [
                  r.jsx("button", {
                    "aria-label": "number increase",
                    className: "group disabled:pointer-events-none disabled:opacity-30",
                    disabled: d >= s,
                    onClick: () => {
                      s !== d && x(d + 1);
                    },
                    children: r.jsx(i.e0, {
                      className: "rotate-180 transition group-hover:text-blue",
                      height: 20,
                      width: 20
                    })
                  }),
                  r.jsx("button", {
                    "aria-label": "number decrease",
                    className: "group disabled:pointer-events-none disabled:opacity-30",
                    disabled: d <= t,
                    onClick: () => {
                      t !== d && x(d - 1);
                    },
                    children: r.jsx(i.e0, {
                      className: "transition group-hover:text-blue",
                      height: 20,
                      width: 20
                    })
                  })
                ]
              })
            ]
          })
        );
      };
    },
    2411: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { Search: () => i });
      var r = s(3854),
        a = s(4218),
        l = s(88);
      let i = () => {
        let [e, t] = (0, a.useState)(!1);
        return (0, r.jsxs)("div", {
          className: `absolute right-0 top-[50%] h-[100%] min-h-[38px] w-[100%] -translate-y-[50%]  laptop:pr-14 laptop:transition-all ${
            e ? "laptop:w-[100%]" : "laptop:w-0"
          }`,
          children: [
            r.jsx("span", {
              className: "absolute left-2 top-[50%] -translate-y-[50%] laptop:hidden",
              children: r.jsx(l.W1, { className: "text-light-gray", width: "30" })
            }),
            r.jsx("input", {
              placeholder: "Search here...",
              className: `h-full w-full rounded-full bg-dark-white pl-10  pr-5  placeholder:text-xs placeholder:text-dark-gray laptop:transition-all laptop:placeholder:text-base ${
                e
                  ? "laptop:opacity-100 laptop:placeholder:opacity-100"
                  : "laptop:opacity-0 laptop:placeholder:opacity-0"
              }`
            }),
            r.jsx("button", {
              "aria-label": "button",
              className: "z-1 absolute right-5 top-[50%] hidden -translate-y-[50%] laptop:block",
              type: "button",
              onClick: () => t(!e),
              children: e
                ? r.jsx(l.Tw, { className: "transition-all hover:text-blue", width: "30" })
                : r.jsx(l.W1, { className: "transition-all hover:text-blue", width: "30" })
            })
          ]
        });
      };
    },
    6916: (e, t, s) => {
      "use strict";
      s.d(t, { zx: () => c, ZP: () => h, h$: () => m });
      var r = s(3854),
        a = s(8758),
        l = s(1088),
        i = s(88);
      let o = (0, a.j)(
          "group inline-flex  whitespace-nowrap h-full w-full min-w-min items-center gap-2 justify-center rounded-[3.125rem] px-5 text-center font-semibold transition leading-normal text-[0.875rem] min-h-[2.313rem] capitalize",
          {
            variants: {
              variant: {
                outline:
                  "border-dark-blue text-dark-blue hover:border-blue hover:text-blue border-2 disabled:border-light-gray disabled:text-light-gray py-[0.385rem]",
                solid:
                  "bg-dark-blue hover:bg-blue text-white disabled:text-white disabled:bg-light-gray py-2"
              }
            }
          }
        ),
        n = (0, a.j)("transition ", {
          variants: {
            variant: {
              outline: "text-dark-blue group-hover:text-blue group-disabled:text-light-gray",
              solid: "text-white"
            },
            iconMobileOff: { true: "hidden tablet:block", false: "" }
          }
        }),
        c = ({
          variant: e = "solid",
          children: t,
          isLoading: s,
          loadingText: a = "Loading...",
          endIcon: c,
          className: d,
          startIcon: x,
          iconMobileOff: u = !1,
          ...p
        }) =>
          (0, r.jsxs)("button", {
            className: (0, l.m6)(o({ className: d, variant: e })),
            "data-test-id": "button-container",
            disabled: p.disabled || s,
            type: "button",
            ...p,
            children: [
              x &&
                !s &&
                r.jsx("span", { className: n({ iconMobileOff: u, variant: e }), children: x }),
              s
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      r.jsx("span", {
                        className: "w-5",
                        children: r.jsx(i.L4, { circle: e, path: e })
                      }),
                      a && r.jsx("span", { children: a })
                    ]
                  })
                : r.jsx("span", { children: t }),
              c && !s && r.jsx("span", { className: n({ variant: e }), children: c })
            ]
          });
      var d = s(5548),
        x = s.n(d);
      let u = (0, a.j)(
          "group inline-flex  whitespace-nowrap  w-full min-w-min items-center gap-2 justify-center rounded-[3.125rem] px-5 text-center font-semibold transition leading-normal text-[0.875rem] min-h-[2.313rem] capitalize",
          {
            variants: {
              variant: {
                outline:
                  "border-dark-blue text-dark-blue hover:border-blue hover:text-blue border-2 disabled:border-light-gray disabled:text-light-gray py-[0.385rem]",
                solid: "bg-dark-blue hover:bg-blue text-white disabled:bg-light-gray py-2"
              }
            }
          }
        ),
        p = (0, a.j)("mr-[0.625rem] transition", {
          variants: {
            variant: {
              outline: "text-dark-blue group-hover:blue group-disabled:text-light-gray",
              solid: "text-white"
            }
          }
        }),
        h = ({ variant: e = "solid", children: t, endIcon: s, className: a, startIcon: i, ...o }) =>
          (0, r.jsxs)(x(), {
            className: (0, l.m6)(u({ className: a, variant: e })),
            ...o,
            children: [
              i && r.jsx("span", { className: p({ variant: e }), children: i }),
              r.jsx("span", { children: t }),
              s && r.jsx("span", { className: p({ variant: e }), children: s })
            ]
          }),
        m = ({ icon: e, ...t }) =>
          r.jsx("button", {
            "aria-label": "round button",
            className:
              "inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-slate-100  text-dark-gray transition  hover:bg-slate-200 hover:text-blue",
            ...t,
            children: r.jsx("span", { children: e })
          });
    },
    585: (e, t, s) => {
      "use strict";
      s.d(t, {
        e0: () => u,
        w7: () => a,
        Tw: () => c,
        Q0: () => b,
        EL: () => C,
        _t: () => x,
        vs: () => p,
        qW: () => m,
        P9: () => g,
        W1: () => n,
        L4: () => o,
        Ye: () => h,
        wZ: () => d
      });
      var r = s(3854);
      let a = ({ solid: e = !1, ...t }) =>
        r.jsx("svg", {
          fill: "currentColor",
          height: "25",
          viewBox: "0 0 25 25",
          width: "25",
          xmlns: "http://www.w3.org/2000/svg",
          ...t,
          children: e
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  r.jsx("path", {
                    d: "M14.4574 20.6667C15.01 20.6667 15.5399 20.4472 15.9306 20.0565C16.3213 19.6658 16.5408 19.1359 16.5408 18.5833C16.5408 18.0308 16.3213 17.5009 15.9306 17.1102C15.5399 16.7195 15.01 16.5 14.4574 16.5C13.9049 16.5 13.375 16.7195 12.9843 17.1102C12.5936 17.5009 12.3741 18.0308 12.3741 18.5833C12.3741 19.1359 12.5936 19.6658 12.9843 20.0565C13.375 20.4472 13.9049 20.6667 14.4574 20.6667ZM7.16577 20.6667C7.7183 20.6667 8.24821 20.4472 8.63891 20.0565C9.02961 19.6658 9.2491 19.1359 9.2491 18.5833C9.2491 18.0308 9.02961 17.5009 8.63891 17.1102C8.24821 16.7195 7.7183 16.5 7.16577 16.5C6.61323 16.5 6.08333 16.7195 5.69263 17.1102C5.30193 17.5009 5.08243 18.0308 5.08243 18.5833C5.08243 19.1359 5.30193 19.6658 5.69263 20.0565C6.08333 20.4472 6.61323 20.6667 7.16577 20.6667Z",
                    fill: "#0156FF"
                  }),
                  r.jsx("path", {
                    d: "M21.4346 5.69863C21.2536 5.88554 21.0071 5.99474 20.747 6.00312H19.5481L18.2418 11.8802C18.0441 12.7702 17.5488 13.5661 16.8376 14.1366C16.1265 14.707 15.242 15.0178 14.3304 15.0177H6.50535C6.05849 15.0178 5.62444 14.8684 5.27224 14.5934C4.92003 14.3184 4.66989 13.9335 4.5616 13.5L3.05952 7.49167C2.98557 7.19627 2.97994 6.8879 3.04306 6.59C3.10618 6.2921 3.23639 6.01251 3.42379 5.77248C3.61118 5.53246 3.85084 5.33832 4.12453 5.20483C4.39823 5.07133 4.69875 5.00199 5.00327 5.00208L17.8125 5.00156C18.163 4.39468 18.8171 4 19.5481 4H20.747C21.0071 4.00839 21.2536 4.11758 21.4346 4.3045C21.6156 4.49141 21.7168 4.74139 21.7168 5.00156C21.7168 5.26174 21.6156 5.51171 21.4346 5.69863Z",
                    fill: "#0156FF"
                  })
                ]
              })
            : r.jsx("path", {
                d: "M14.5834 20.8334C15.1359 20.8334 15.6658 20.6139 16.0566 20.2232C16.4473 19.8325 16.6667 19.3026 16.6667 18.75C16.6667 18.1975 16.4473 17.6676 16.0566 17.2769C15.6658 16.8862 15.1359 16.6667 14.5834 16.6667C14.0309 16.6667 13.501 16.8862 13.1103 17.2769C12.7196 17.6676 12.5001 18.1975 12.5001 18.75C12.5001 19.3026 12.7196 19.8325 13.1103 20.2232C13.501 20.6139 14.0309 20.8334 14.5834 20.8334ZM7.29174 20.8334C7.84428 20.8334 8.37418 20.6139 8.76488 20.2232C9.15558 19.8325 9.37508 19.3026 9.37508 18.75C9.37508 18.1975 9.15558 17.6676 8.76488 17.2769C8.37418 16.8862 7.84428 16.6667 7.29174 16.6667C6.73921 16.6667 6.20931 16.8862 5.81861 17.2769C5.4279 17.6676 5.20841 18.1975 5.20841 18.75C5.20841 19.3026 5.4279 19.8325 5.81861 20.2232C6.20931 20.6139 6.73921 20.8334 7.29174 20.8334ZM20.873 6.16981C21.133 6.16142 21.3796 6.05223 21.5606 5.86531C21.7416 5.6784 21.8428 5.42842 21.8428 5.16825C21.8428 4.90807 21.7416 4.6581 21.5606 4.47118C21.3796 4.28427 21.133 4.17507 20.873 4.16669H19.674C18.7345 4.16669 17.922 4.81877 17.7178 5.73544L16.4126 11.6125C16.2084 12.5292 15.3959 13.1813 14.4563 13.1813H6.63133L5.12924 7.17085H14.8636C15.1212 7.1591 15.3644 7.0485 15.5425 6.86205C15.7206 6.67561 15.82 6.42767 15.82 6.16981C15.82 5.91195 15.7206 5.66401 15.5425 5.47757C15.3644 5.29113 15.1212 5.18052 14.8636 5.16877H5.12924C4.82473 5.16868 4.5242 5.23802 4.25051 5.37151C3.97682 5.50501 3.73716 5.69915 3.54976 5.93917C3.36236 6.17919 3.23215 6.45878 3.16903 6.75668C3.10591 7.05458 3.11154 7.36295 3.1855 7.65835L4.68758 13.6667C4.79586 14.1002 5.046 14.4851 5.39821 14.7601C5.75042 15.0351 6.18447 15.1845 6.63133 15.1844H14.4563C15.368 15.1845 16.2524 14.8737 16.9636 14.3032C17.6748 13.7328 18.1701 12.9369 18.3678 12.0469L19.674 6.16981H20.873Z"
              })
        });
      var l = s(8758);
      let i = (0, l.j)("spinner", {
          variants: {
            circle: { outline: "stroke-dark-gray", solid: "fill-light-gray stroke-white" },
            path: { outline: "fill-dark-gray ", solid: "fill-white" }
          }
        }),
        o = ({ circle: e, path: t }) =>
          (0, r.jsxs)("svg", {
            className: "animate-spin",
            fill: "none",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              r.jsx("circle", {
                className: `${i({ circle: e })} opacity-25`,
                cx: "12",
                cy: "12",
                r: "10",
                strokeWidth: "4"
              }),
              r.jsx("path", {
                className: `${i({ path: t })} opacity-75`,
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              })
            ]
          }),
        n = ({ ...e }) =>
          r.jsx("svg", {
            fill: "currentColor",
            viewBox: "0 0 25 25",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: r.jsx("path", {
              d: "M18.543 19.7987L18.543 19.7987C18.6259 19.8815 18.7242 19.9473 18.8325 19.9921C18.9407 20.0369 19.0567 20.06 19.1739 20.06C19.291 20.06 19.407 20.0369 19.5152 19.9921C19.6235 19.9473 19.7218 19.8815 19.8047 19.7987C19.8875 19.7159 19.9532 19.6175 19.9981 19.5093C20.0429 19.4011 20.066 19.285 20.066 19.1679C20.066 19.0507 20.0429 18.9347 19.9981 18.8265C19.9532 18.7183 19.8875 18.6199 19.8047 18.5371L19.8047 18.5371L16.4729 15.2061C17.4382 13.9251 17.8909 12.3286 17.74 10.7296C17.5862 9.1007 16.8177 7.59155 15.5908 6.50917C14.3638 5.42678 12.7706 4.85248 11.1353 4.90308C9.49994 4.95369 7.9453 5.62539 6.78763 6.78157C5.62895 7.93854 4.95504 9.49379 4.90322 11.1304C4.85141 12.767 5.4256 14.3618 6.50877 15.5897C7.59194 16.8177 9.10258 17.5864 10.7329 17.7392C12.3334 17.8893 13.931 17.4346 15.2118 16.4667L18.543 19.7987ZM14.6257 8.04382C15.0632 8.47432 15.4112 8.98719 15.6496 9.55285C15.8879 10.1185 16.012 10.7258 16.0145 11.3396C16.017 11.9534 15.8979 12.5617 15.6641 13.1293C15.4304 13.6968 15.0866 14.2125 14.6525 14.6466C14.2185 15.0806 13.7028 15.4244 13.1352 15.6582C12.5676 15.8919 11.9594 16.011 11.3456 16.0085C10.7317 16.006 10.1245 15.882 9.55881 15.6436C8.99315 15.4053 8.48028 15.0573 8.04978 14.6197C7.18947 13.7453 6.70954 12.5663 6.71453 11.3396C6.71953 10.1129 7.20904 8.9379 8.07645 8.07049C8.94386 7.20308 10.1189 6.71357 11.3456 6.70857C12.5722 6.70358 13.7512 7.18351 14.6257 8.04382Z",
              strokeWidth: "0.2"
            })
          }),
        c = ({ ...e }) =>
          (0, r.jsxs)("svg", {
            fill: "none",
            height: "25",
            viewBox: "0 0 25 25",
            width: "25",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              r.jsx("path", {
                d: "M7 7L18.3078 18.3078",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeWidth: "2.4"
              }),
              r.jsx("path", {
                d: "M18.3086 7L7.00083 18.3078",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeWidth: "2.4"
              })
            ]
          }),
        d = ({ ...e }) =>
          (0, r.jsxs)("svg", {
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 30 30",
            width: "30",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              r.jsx("path", {
                d: "M14.9999 24.5642C9.72747 24.5642 5.43564 20.2724 5.43564 14.9999C5.43564 9.72747 9.72747 5.43564 14.9999 5.43564C20.2724 5.43564 24.5642 9.72747 24.5642 14.9999C24.5642 20.2724 20.2724 24.5642 14.9999 24.5642Z",
                strokeWidth: "2.3"
              }),
              r.jsx("path", {
                d: "M15 10.5V15.75H20.25",
                strokeLinecap: "round",
                strokeWidth: "2.3"
              })
            ]
          }),
        x = ({ ...e }) =>
          r.jsx("svg", {
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0.1",
            viewBox: "0 0 30 30",
            width: "30",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: r.jsx("path", {
              d: "M14.5714 14.5714C13.3929 14.5714 12.4286 13.6456 12.4286 12.5142C12.4286 11.3828 13.3929 10.4571 14.5714 10.4571C15.75 10.4571 16.7143 11.3828 16.7143 12.5142C16.7143 13.6456 15.75 14.5714 14.5714 14.5714ZM21 12.7199C21 8.98622 18.1607 6.34279 14.5714 6.34279C10.9821 6.34279 8.14286 8.98622 8.14286 12.7199C8.14286 15.1268 10.2321 18.3154 14.5714 22.1211C18.9107 18.3154 21 15.1268 21 12.7199ZM14.5714 4.28564C19.0714 4.28564 23.1429 7.59764 23.1429 12.7199C23.1429 16.1348 20.2821 20.1771 14.5714 24.8571C8.86071 20.1771 6 16.1348 6 12.7199C6 7.59764 10.0714 4.28564 14.5714 4.28564Z"
            })
          }),
        u = ({ ...e }) =>
          r.jsx("svg", {
            fill: "none",
            height: "16",
            viewBox: "0 0 16 16",
            width: "16",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: r.jsx("path", {
              d: "M10 7.00006L8 9.00006L6 7.00006",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: "1.6"
            })
          }),
        p = ({ ...e }) =>
          (0, r.jsxs)("svg", {
            fill: "none",
            height: "18",
            viewBox: "0 0 72 18",
            width: "72",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              r.jsx("path", {
                d: "M55.6932 5H52.0409C51.8261 5 51.6113 5.21053 51.5039 5.42105L50 14.6842C50 14.8947 50.1074 15 50.3223 15H52.2558C52.4706 15 52.578 14.8947 52.578 14.6842L53.0077 12.0526C53.0077 11.8421 53.2225 11.6316 53.5448 11.6316H54.7264C57.197 11.6316 58.5935 10.4737 58.9157 8.15789C59.1306 7.21053 58.9157 6.36842 58.486 5.84211C57.8415 5.31579 56.8748 5 55.6932 5ZM56.1228 8.47368C55.908 9.73684 54.9412 9.73684 53.9745 9.73684H53.33L53.7596 7.31579C53.7596 7.21053 53.8671 7.10526 54.0819 7.10526H54.2967C54.9412 7.10526 55.5858 7.10526 55.908 7.52631C56.1228 7.63158 56.1228 7.94737 56.1228 8.47368Z",
                fill: "#139AD6"
              }),
              r.jsx("path", {
                d: "M27.6567 4.59998H23.771C23.5425 4.59998 23.3139 4.82855 23.1996 5.05712L21.5996 15.1142C21.5996 15.3428 21.7139 15.4571 21.9425 15.4571H23.771C23.9996 15.4571 24.2282 15.2285 24.3425 14.9999L24.7996 12.2571C24.7996 12.0285 25.0282 11.8 25.371 11.8H26.6282C29.2567 11.8 30.7424 10.5428 31.0853 8.02854C31.3139 6.99997 31.0853 6.08569 30.6282 5.51426C29.9424 4.94283 29.0282 4.59998 27.6567 4.59998ZM28.1139 8.37139C27.8853 9.74282 26.8567 9.74282 25.8282 9.74282H25.2567L25.7139 7.11425C25.7139 6.99997 25.8282 6.88568 26.0567 6.88568H26.2853C26.971 6.88568 27.6567 6.88568 27.9996 7.34282C28.1139 7.45711 28.2282 7.79997 28.1139 8.37139Z",
                fill: "#263B80"
              }),
              r.jsx("path", {
                d: "M39.4282 8.25714H37.5996C37.4854 8.25714 37.2568 8.37142 37.2568 8.48571L37.1425 9.05713L37.0282 8.82856C36.5711 8.25714 35.7711 8.02856 34.8568 8.02856C32.7997 8.02856 30.9711 9.62856 30.6282 11.8C30.3997 12.9428 30.7425 13.9714 31.3139 14.6571C31.8854 15.3428 32.6854 15.5714 33.7139 15.5714C35.4282 15.5714 36.3425 14.5428 36.3425 14.5428L36.2282 15.1143C36.2282 15.3428 36.3425 15.4571 36.5711 15.4571H38.2854C38.5139 15.4571 38.7425 15.2285 38.8568 15L39.8854 8.59999C39.7711 8.48571 39.5425 8.25714 39.4282 8.25714ZM36.7996 11.9143C36.5711 12.9428 35.7711 13.7428 34.6282 13.7428C34.0568 13.7428 33.5997 13.5143 33.3711 13.2857C33.1425 12.9428 33.0282 12.4857 33.0282 11.9143C33.1425 10.8857 34.0568 10.0857 35.0854 10.0857C35.6568 10.0857 35.9996 10.3143 36.3425 10.5428C36.6854 10.8857 36.7996 11.4571 36.7996 11.9143Z",
                fill: "#263B80"
              }),
              r.jsx("path", {
                d: "M67.51 8.24243H65.5498C65.4273 8.24243 65.1823 8.36364 65.1823 8.48485L65.0598 9.09091L64.9373 8.84849C64.4472 8.24243 63.5897 8 62.6096 8C60.4044 8 58.4443 9.69697 58.0767 12C57.8317 13.2121 58.1993 14.303 58.8118 15.0303C59.4243 15.7576 60.2819 16 61.3845 16C63.2221 16 64.2022 14.9091 64.2022 14.9091L64.0797 15.5151C64.0797 15.7576 64.2022 15.8788 64.4472 15.8788H66.2849C66.5299 15.8788 66.7749 15.6364 66.8974 15.3939L68 8.60606C67.8775 8.48485 67.755 8.24243 67.51 8.24243ZM64.6922 12.1212C64.4472 13.2121 63.5897 14.0606 62.3646 14.0606C61.752 14.0606 61.262 13.8182 61.017 13.5758C60.7719 13.2121 60.6494 12.7273 60.6494 12.1212C60.772 11.0303 61.752 10.1818 62.8546 10.1818C63.4672 10.1818 63.8347 10.4242 64.2022 10.6667C64.6922 11.0303 64.8148 11.6364 64.6922 12.1212Z",
                fill: "#139AD6"
              }),
              r.jsx("path", {
                d: "M49.7137 8H47.7899C47.5636 8 47.4504 8.11494 47.3372 8.22988L44.8476 12.1379L43.716 8.45977C43.6028 8.22988 43.4896 8.11494 43.1501 8.11494H41.3395C41.1132 8.11494 41 8.34483 41 8.57471L43.037 14.6667L41.1132 17.4253C41 17.6552 41.1132 18 41.3395 18H43.1501C43.3765 18 43.4896 17.8851 43.6028 17.7701L49.8269 8.68966C50.1664 8.34483 49.94 8 49.7137 8Z",
                fill: "#263B80"
              }),
              r.jsx("path", {
                d: "M69.5556 5.27587L68 15.6541C68 15.8847 68.1111 16 68.3333 16H69.8889C70.1111 16 70.3333 15.7694 70.4444 15.5387L72 5.39118C72 5.16055 71.8889 5.04524 71.6667 5.04524H69.8889C69.7778 4.92992 69.6667 5.04524 69.5556 5.27587Z",
                fill: "#139AD6"
              }),
              r.jsx("path", {
                d: "M13.0638 1.35211C12.2686 0.450703 10.7918 0 8.74706 0H3.06715C2.72636 0 2.38556 0.338026 2.27196 0.676055L0 15.4366C0 15.7746 0.227196 16 0.454393 16H3.97594L4.88472 10.4789V10.7042C4.99832 10.3662 5.33911 10.0282 5.67991 10.0282H7.38388C10.6782 10.0282 13.1774 8.67605 13.9726 4.95775C13.9726 4.84507 13.9726 4.73239 13.9726 4.61972C13.859 4.61972 13.859 4.61972 13.9726 4.61972C14.0862 3.15493 13.859 2.25352 13.0638 1.35211Z",
                fill: "#263B80"
              }),
              r.jsx("path", {
                d: "M13.712 4C13.712 4.11765 13.712 4.2353 13.712 4.35294C12.9566 8.35294 10.5826 9.64706 7.45314 9.64706H5.83448C5.51075 9.64706 5.18702 10 5.07911 10.3529L4 17.5294C4 17.7647 4.10791 18 4.43164 18H7.23732C7.56105 18 7.88479 17.7647 7.88479 17.4118V17.2941L8.42434 13.6471V13.4118C8.42434 13.0588 8.74807 12.8235 9.07181 12.8235H9.50345C12.2012 12.8235 14.3594 11.6471 14.899 8.11765C15.1148 6.70588 15.0069 5.41176 14.3594 4.58824C14.2515 4.35294 14.0357 4.11765 13.712 4Z",
                fill: "#139AD6"
              }),
              r.jsx("path", {
                d: "M13 4.35C12.8889 4.35 12.7778 4.23333 12.6667 4.23333C12.5556 4.23333 12.4444 4.23333 12.3333 4.11666C11.8889 4 11.4444 4 10.8889 4H6.55556C6.44444 4 6.33333 4 6.22222 4.11666C6 4.23333 5.88889 4.46666 5.88889 4.7L5 10.7667V11C5.11111 10.65 5.44444 10.3 5.77778 10.3H7.44444C10.6667 10.3 13.1111 8.9 13.8889 5.05C13.8889 4.93333 13.8889 4.81666 14 4.7C13.7778 4.58333 13.6667 4.46667 13.4444 4.46667C13.1111 4.35 13.1111 4.35 13 4.35Z",
                fill: "#232C65"
              })
            ]
          }),
        h = ({ ...e }) =>
          (0, r.jsxs)("svg", {
            fill: "none",
            height: "10",
            viewBox: "0 0 10 10",
            width: "10",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              r.jsx("circle", { cx: "5", cy: "5", fill: "currentColor", r: "5" }),
              r.jsx("path", {
                d: "M7 4L4.48404 7L3 5.27853",
                stroke: "#fff",
                strokeLinecap: "round"
              })
            ]
          }),
        m = ({ ...e }) =>
          (0, r.jsxs)("svg", {
            fill: "none",
            height: "10",
            viewBox: "0 0 10 10",
            width: "10",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              r.jsx("circle", { cx: "5", cy: "5", fill: "currentColor", r: "5" }),
              r.jsx("path", {
                d: "M5.67669 5.85626L6.02669 5.50626C6.07383 5.4597 6.13347 5.42783 6.19838 5.41452C6.26328 5.4012 6.33065 5.40702 6.39231 5.43126L6.81888 5.60157C6.88119 5.62686 6.93462 5.67004 6.97244 5.72565C7.01025 5.78126 7.03076 5.84682 7.03138 5.91407V6.69532C7.03101 6.74107 7.0214 6.78627 7.00311 6.8282C6.98481 6.87013 6.95823 6.90793 6.92494 6.93931C6.89166 6.9707 6.85237 6.99502 6.80944 7.01083C6.7665 7.02663 6.72082 7.03358 6.67513 7.03126C3.68607 6.84532 3.08294 4.31407 2.96888 3.34532C2.96358 3.29775 2.96842 3.24959 2.98307 3.20402C2.99772 3.15846 3.02186 3.11651 3.05389 3.08093C3.08592 3.04536 3.12511 3.01698 3.1689 2.99764C3.21269 2.97831 3.26007 2.96846 3.30794 2.96876H4.06263C4.12997 2.96896 4.19572 2.9893 4.25141 3.02717C4.3071 3.06504 4.35018 3.1187 4.37513 3.18126L4.54544 3.60782C4.57048 3.66924 4.57687 3.73667 4.56381 3.8017C4.55075 3.86672 4.51882 3.92646 4.472 3.97344L4.122 4.32344C4.122 4.32344 4.32356 5.68751 5.67669 5.85626Z",
                fill: "white"
              })
            ]
          }),
        b = ({ ...e }) =>
          (0, r.jsxs)("svg", {
            fill: "none",
            height: "26",
            viewBox: "0 0 30 26",
            width: "30",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              r.jsx("path", {
                d: "M17.8746 26C18.7366 26 19.5632 25.6576 20.1727 25.0481C20.7822 24.4386 21.1246 23.612 21.1246 22.75C21.1246 21.888 20.7822 21.0614 20.1727 20.4519C19.5632 19.8424 18.7366 19.5 17.8746 19.5C17.0127 19.5 16.186 19.8424 15.5765 20.4519C14.967 21.0614 14.6246 21.888 14.6246 22.75C14.6246 23.612 14.967 24.4386 15.5765 25.0481C16.186 25.6576 17.0127 26 17.8746 26ZM6.49961 26C7.36156 26 8.18821 25.6576 8.79771 25.0481C9.4072 24.4386 9.74961 23.612 9.74961 22.75C9.74961 21.888 9.4072 21.0614 8.79771 20.4519C8.18821 19.8424 7.36156 19.5 6.49961 19.5C5.63766 19.5 4.81101 19.8424 4.20151 20.4519C3.59202 21.0614 3.24961 21.888 3.24961 22.75C3.24961 23.612 3.59202 24.4386 4.20151 25.0481C4.81101 25.6576 5.63766 26 6.49961 26ZM27.6864 3.12487C28.092 3.11179 28.4767 2.94144 28.759 2.64986C29.0414 2.35827 29.1992 1.96831 29.1992 1.56244C29.1992 1.15656 29.0414 0.766601 28.759 0.475016C28.4767 0.18343 28.092 0.0130842 27.6864 0H25.816C24.3502 0 23.0827 1.01725 22.7642 2.44725L20.7281 11.6155C20.4096 13.0455 19.1421 14.0628 17.6764 14.0628H5.46936L3.12611 4.6865H18.3117C18.7136 4.66816 19.0929 4.49563 19.3708 4.20477C19.6487 3.91392 19.8037 3.52714 19.8037 3.12487C19.8037 2.72261 19.6487 2.33583 19.3708 2.04498C19.0929 1.75412 18.7136 1.58159 18.3117 1.56325H3.12611C2.65107 1.56311 2.18224 1.67128 1.75528 1.87953C1.32832 2.08778 0.954459 2.39064 0.662117 2.76507C0.369775 3.13951 0.166647 3.57567 0.0681796 4.04039C-0.0302884 4.50512 -0.0215047 4.98618 0.0938593 5.447L2.43711 14.82C2.60604 15.4963 2.99625 16.0967 3.5457 16.5257C4.09514 16.9548 4.77226 17.1877 5.46936 17.1876H17.6764C19.0986 17.1878 20.4783 16.7029 21.5877 15.813C22.6971 14.9232 23.4698 13.6815 23.7782 12.2931L25.816 3.12487H27.6864Z",
                fill: "currentColor"
              }),
              r.jsx("path", {
                d: "M9.58008 6.38733L15.5112 12.3184",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeWidth: "2"
              }),
              r.jsx("path", {
                d: "M15.5117 6.38733L9.58063 12.3184",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeWidth: "2"
              })
            ]
          }),
        g = ({ ...e }) =>
          (0, r.jsxs)("svg", {
            fill: "none",
            height: "20",
            viewBox: "0 0 20 20",
            width: "20",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              r.jsx("circle", {
                cx: "10",
                cy: "10",
                fill: "none",
                r: "9.25",
                stroke: "currentColor",
                strokeWidth: "1.5"
              }),
              r.jsx("path", {
                d: "M7 7L13.5 13.5",
                stroke: "currentColor",
                strokeLinecap: "round"
              }),
              r.jsx("path", { d: "M13.5 7L7 13.5", stroke: "currentColor", strokeLinecap: "round" })
            ]
          }),
        C = ({ ...e }) =>
          r.jsx("svg", {
            fill: "none",
            height: "14",
            viewBox: "0 0 17 14",
            width: "17",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: r.jsx("path", {
              d: "M7.68513 2.82536L8.39535 3.54187L9.10557 2.82536C9.77879 2.14617 10.8139 1.375 11.8922 1.375C12.9606 1.375 13.8026 1.73075 14.3714 2.278C14.9374 2.82255 15.2936 3.61414 15.2936 4.60948C15.2936 5.68046 14.8643 6.59251 14.1287 7.47611C13.3739 8.3829 12.3563 9.19134 11.2509 10.0643L11.2252 10.0846C10.2883 10.8241 9.24578 11.647 8.39584 12.5675C7.55422 11.655 6.52157 10.8387 5.59303 10.1047L5.54239 10.0646L5.54198 10.0643C4.43628 9.19109 3.4189 8.38246 2.66433 7.47571C1.92905 6.59215 1.5 5.68023 1.5 4.60948C1.5 3.61414 1.8562 2.82257 2.42223 2.27804C2.99108 1.73079 3.83327 1.375 4.9021 1.375C5.97913 1.375 7.01114 2.14538 7.68513 2.82536Z",
              stroke: "currentColor",
              strokeWidth: "1.5"
            })
          });
    },
    88: (e, t, s) => {
      "use strict";
      s.d(t, {
        e0: () => a.e0,
        zx: () => r.zx,
        ZP: () => r.ZP,
        w7: () => a.w7,
        Tw: () => a.Tw,
        W2: () => i,
        Q0: () => a.Q0,
        EL: () => a.EL,
        II: () => c,
        _t: () => a._t,
        Y2: () => n.NumberInput,
        vs: () => a.vs,
        P9: () => a.P9,
        h$: () => r.h$,
        W1: () => a.W1,
        L4: () => a.L4,
        wZ: () => a.wZ,
        ZT: () => o
      });
      var r = s(6916),
        a = s(585),
        l = s(3854);
      let i = ({ children: e, maxWidth: t = 1398, tag: s = "div", className: r }) =>
        l.jsx(s, {
          className: `${r?.length ? r : ""} mx-auto w-full px-[15px]`,
          style: { maxWidth: t },
          children: e
        });
      s(2411);
      let o = ({ children: e, variant: t, tag: s = "div", className: r = "", ...a }) =>
        l.jsx(s, { className: `${t} ${r}`, ...a, children: e });
      var n = s(5292);
      let c = ({ onChange: e, clearInput: t, className: s, inputClassName: r, value: i, ...o }) =>
        (0, l.jsxs)("div", {
          className: `${s?.length ? s : ""}  relative flex h-full w-full px-2`,
          children: [
            l.jsx("input", {
              ...o,
              value: i,
              className: `h-full w-full bg-transparent outline-none placeholder:text-[14px] placeholder:font-light ${
                r?.length ? r : ""
              }`,
              onChange: e
            }),
            i &&
              l.jsx("button", {
                "aria-label": "clear input",
                onClick: t,
                children: l.jsx(a.Tw, { height: 15, width: 15 })
              })
          ]
        });
    },
    6029: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => i });
      var r = s(3854),
        a = s(8157),
        l = s(8914);
      let i = ({ children: e }) => r.jsx(a.zt, { store: l.h, children: e });
    },
    6359: (e, t, s) => {
      "use strict";
      s.d(t, { Ir: () => n, LL: () => d, ZP: () => i, gK: () => o, iK: () => c });
      var r = s(6702);
      function a(e) {
        let t = e.reduce((e, t) => e + t.subTotal, 0);
        return t;
      }
      let l = (0, r.oM)({
          initialState: { cartProducts: { orderTotal: 0, products: [] } },
          name: "cart",
          reducers: {
            addProduct(e, t) {
              let s = e.cartProducts.products.find((e) => e.id === t.payload.product.id);
              s
                ? (e.cartProducts.products = e.cartProducts.products.map((e) =>
                    e.id === t.payload.product.id
                      ? {
                          ...e,
                          quantity: e.quantity + (t.payload.quantity || 1),
                          subTotal:
                            (t.payload.product.attributes.discountPrice ||
                              t.payload.product.attributes.price) *
                            (e.quantity + 1)
                        }
                      : e
                  ))
                : (e.cartProducts.products = [
                    ...e.cartProducts.products,
                    {
                      ...t.payload.product,
                      quantity: t.payload?.quantity || 1,
                      subTotal: t.payload.product.attributes.discountPrice
                        ? t.payload.product.attributes.discountPrice
                        : t.payload.product.attributes.price
                    }
                  ]),
                (e.cartProducts.orderTotal = a(e.cartProducts.products));
            },
            changeProductQty(e, t) {
              let s = e.cartProducts.products.findIndex((e) => e.id === t.payload.productId);
              -1 !== s &&
                ((e.cartProducts.products = e.cartProducts.products.map((e, r) =>
                  r === s
                    ? {
                        ...e,
                        quantity: t.payload.quantity,
                        subTotal:
                          (e.attributes.discountPrice || e.attributes.price) * t.payload.quantity
                      }
                    : e
                )),
                (e.cartProducts.orderTotal = a(e.cartProducts.products)));
            },
            clearCart(e) {
              (e.cartProducts.products = []),
                (e.cartProducts.orderTotal = a(e.cartProducts.products));
            },
            deleteProduct(e, t) {
              (e.cartProducts.products = e.cartProducts.products.filter(
                (e) => e.id !== t.payload.id
              )),
                (e.cartProducts.orderTotal = a(e.cartProducts.products));
            }
          }
        }),
        i = l.reducer,
        { addProduct: o, deleteProduct: n, changeProductQty: c, clearCart: d } = l.actions;
    },
    8914: (e, t, s) => {
      "use strict";
      s.d(t, { h: () => c, C: () => d });
      var r = s(6702),
        a = s(8157),
        l = s(6359);
      let i = (0, r.oM)({
          initialState: { menuOpen: !1 },
          name: "menu",
          reducers: {
            toggleMenuOpen(e, t) {
              (e.menuOpen = t.payload), console.log(e.menuOpen);
            }
          }
        }),
        o = i.reducer,
        { toggleMenuOpen: n } = i.actions,
        c = (0, r.xC)({ reducer: { cartProducts: l.ZP, menu: o } }),
        d = a.v9;
    },
    9423: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => p, metadata: () => u });
      var r = s(4656);
      s(7267);
      var a = s(4022),
        l = s.n(a),
        i = s(799),
        o = s(5153);
      let n = (0, o.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/store/StoreProvider.tsx`
        ),
        { __esModule: c, $$typeof: d } = n,
        x = n.default,
        u = { description: "Generated by create next app", title: "Ecommerce" },
        p = ({ children: e }) =>
          r.jsx("html", {
            className: `${l().className}  h-screen min-h-[450px] min-w-[375px] `,
            lang: "en",
            children: r.jsx("body", {
              className: "flex h-full flex-col",
              children: (0, r.jsxs)(x, {
                children: [
                  r.jsx(i.og, {}),
                  r.jsx(i.h4, {}),
                  e,
                  r.jsx(i.kI, { bg: "gray" }),
                  r.jsx(i.$_, {})
                ]
              })
            })
          });
    },
    301: (e, t, s) => {
      "use strict";
      s.d(t, { Q: () => o });
      var r = s(5153);
      let a = (0, r.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/Accordion/AccordionItem/AccordionItem.tsx`
        ),
        { __esModule: l, $$typeof: i } = a;
      a.default;
      let o = (0, r.createProxy)(
        String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/Accordion/AccordionItem/AccordionItem.tsx#AccordionItem`
      );
    },
    4460: (e, t, s) => {
      "use strict";
      s.d(t, {
        bu: () => $,
        AP: () => x,
        t: () => z,
        H9: () => B,
        A6: () => A,
        Il: () => m,
        uQ: () => o,
        I_: () => Z,
        g: () => F
      });
      var r = s(5153);
      let a = (0, r.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/ShopInfo/ShopInfo.tsx`
        ),
        { __esModule: l, $$typeof: i } = a;
      a.default;
      let o = (0, r.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/ShopInfo/ShopInfo.tsx#ShopInfo`
        ),
        n = (0, r.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/Cart/Cart.tsx`
        ),
        { __esModule: c, $$typeof: d } = n;
      n.default;
      let x = (0, r.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/Cart/Cart.tsx#Cart`
        ),
        u = (0, r.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/ProductCard/ProductCard.tsx`
        ),
        { __esModule: p, $$typeof: h } = u;
      u.default;
      let m = (0, r.createProxy)(
        String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/ProductCard/ProductCard.tsx#ProductCard`
      );
      var b = s(4656),
        g = s(8538);
      s(8639);
      var C = s(4353),
        f = s.n(C);
      s(2984);
      var j = s(4199);
      function v(e) {
        let t = e.reduce((e, t) => e + t.subTotal, 0);
        return t;
      }
      let w = (0, j.oM)({
        initialState: { cartProducts: { orderTotal: 0, products: [] } },
        name: "cart",
        reducers: {
          addProduct(e, t) {
            let s = e.cartProducts.products.find((e) => e.id === t.payload.product.id);
            s
              ? (e.cartProducts.products = e.cartProducts.products.map((e) =>
                  e.id === t.payload.product.id
                    ? {
                        ...e,
                        quantity: e.quantity + (t.payload.quantity || 1),
                        subTotal:
                          (t.payload.product.attributes.discountPrice ||
                            t.payload.product.attributes.price) *
                          (e.quantity + 1)
                      }
                    : e
                ))
              : (e.cartProducts.products = [
                  ...e.cartProducts.products,
                  {
                    ...t.payload.product,
                    quantity: t.payload?.quantity || 1,
                    subTotal: t.payload.product.attributes.discountPrice
                      ? t.payload.product.attributes.discountPrice
                      : t.payload.product.attributes.price
                  }
                ]),
              (e.cartProducts.orderTotal = v(e.cartProducts.products));
          },
          changeProductQty(e, t) {
            let s = e.cartProducts.products.findIndex((e) => e.id === t.payload.productId);
            -1 !== s &&
              ((e.cartProducts.products = e.cartProducts.products.map((e, r) =>
                r === s
                  ? {
                      ...e,
                      quantity: t.payload.quantity,
                      subTotal:
                        (e.attributes.discountPrice || e.attributes.price) * t.payload.quantity
                    }
                  : e
              )),
              (e.cartProducts.orderTotal = v(e.cartProducts.products)));
          },
          clearCart(e) {
            (e.cartProducts.products = []),
              (e.cartProducts.orderTotal = v(e.cartProducts.products));
          },
          deleteProduct(e, t) {
            (e.cartProducts.products = e.cartProducts.products.filter(
              (e) => e.id !== t.payload.id
            )),
              (e.cartProducts.orderTotal = v(e.cartProducts.products));
          }
        }
      });
      w.reducer;
      let { addProduct: y, deleteProduct: N, changeProductQty: k, clearCart: P } = w.actions;
      (0, g.j)("", {
        variants: {
          variant: {
            small: "flex-col flex gap-1 text-[14px] w-full grow",
            large: "grid grid-cols-[1fr_1fr_1fr_25px] w-full gap-2 laptop:w-[60%]"
          }
        }
      });
      let L = (0, r.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/BreadCrumbs/BreadCrumbs.tsx`
        ),
        { __esModule: M, $$typeof: S } = L;
      L.default;
      let $ = (0, r.createProxy)(
        String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/BreadCrumbs/BreadCrumbs.tsx#BreadCrumbs`
      );
      s(301);
      var I = s(2473);
      let Z = ({ className: e }) =>
          (0, b.jsxs)("div", {
            className: `flex items-center gap-2 ${e?.length ? e : ""}`,
            children: [
              b.jsx(f(), {
                className: "group",
                href: "!#",
                children: b.jsx(I.Vq, { className: "transition-all group-hover:text-dark-gray" })
              }),
              b.jsx(f(), {
                className: "group",
                href: "!#",
                children: b.jsx(I.yu, { className: "transition-all group-hover:text-dark-gray" })
              })
            ]
          }),
        H = (0, r.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/PaymentMethods/PaymentMethods.tsx`
        ),
        { __esModule: W, $$typeof: D } = H;
      H.default;
      let A = (0, r.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/PaymentMethods/PaymentMethods.tsx#PaymentMethods`
        ),
        T = (0, r.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/SubscribeForm/SubscribeForm.tsx`
        ),
        { __esModule: V, $$typeof: q } = T;
      T.default;
      let F = (0, r.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/SubscribeForm/SubscribeForm.tsx#SubscribeForm`
        ),
        B = ({ navLinks: e }) =>
          b.jsx("ul", {
            className: "flex flex-wrap gap-x-6 font-semibold",
            children: e.map((e) =>
              b.jsx("li", { children: b.jsx(f(), { href: e.href, children: e.label }) }, e.id)
            )
          }),
        U = (0, r.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/ContactForm/ContactForm-reakt-hook-form.tsx`
        ),
        { __esModule: _, $$typeof: J } = U;
      U.default;
      let z = (0, r.createProxy)(
        String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/common/ContactForm/ContactForm-reakt-hook-form.tsx#ContactForm`
      );
    },
    9844: (e, t, s) => {
      "use strict";
      s.d(t, { V: () => a });
      var r = s(4656);
      let a = ({ name: e, email: t, phone: s, message: a }) =>
        (0, r.jsxs)("div", {
          children: [
            (0, r.jsxs)("h1", { children: ["Welcome, ", e, "!"] }),
            (0, r.jsxs)("div", { children: ["email: ", r.jsx("span", { children: t })] }),
            s && (0, r.jsxs)("div", { children: ["phone: ", r.jsx("span", { children: s })] }),
            (0, r.jsxs)("div", { children: ["message: ", r.jsx("span", { children: a })] })
          ]
        });
    },
    5406: (e, t, s) => {
      "use strict";
      s.d(t, {
        I_: () => a.I_,
        W2: () => r.W2,
        ZT: () => r.ZT,
        bu: () => a.bu,
        t: () => a.t,
        uQ: () => a.uQ
      });
      var r = s(2984);
      s(799);
      var a = s(4460);
      s(9844);
    },
    799: (e, t, s) => {
      "use strict";
      s.d(t, { $_: () => v, h4: () => u, kI: () => g, og: () => n });
      var r = s(4656),
        a = s(4353),
        l = s.n(a),
        i = s(5406),
        o = s(2984);
      let n = () =>
        r.jsx("div", {
          className: "bg-black",
          children: r.jsx(o.W2, {
            children: (0, r.jsxs)("div", {
              className:
                "flex min-h-[40px] items-center justify-between gap-2 py-2 text-[10px] font-medium text-white mobile:text-xs",
              children: [
                r.jsx("span", {
                  className: "ml-20 ml-[70px] laptop:ml-0",
                  children: r.jsx(i.uQ, {})
                }),
                (0, r.jsxs)("div", {
                  className: " flex gap-2  text-light-gray",
                  children: [
                    r.jsx("span", {
                      className: "hidden laptop:block",
                      children: "Visit our showroom in 1234 Street Adress City Address, 1234"
                    }),
                    r.jsx(l(), {
                      className:
                        "relative whitespace-nowrap text-white before:pointer-events-none before:absolute before:-bottom-1 before:h-0.5 before:w-full before:rounded-full before:bg-white before:transition-all hover:before:w-0",
                      href: "/contact-us",
                      children: "Contact Us"
                    })
                  ]
                }),
                (0, r.jsxs)("div", {
                  className: "hidden items-center gap-2 laptop:flex",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "mr-2",
                      children: [
                        r.jsx("span", { className: "mr-1", children: "Call us:" }),
                        r.jsx(l(), {
                          className: "hover:underline",
                          href: "tel:0012345678",
                          children: "(00) 1234 5678"
                        })
                      ]
                    }),
                    r.jsx(i.I_, {})
                  ]
                })
              ]
            })
          })
        });
      var c = s(4460);
      let d = ({ ...e }) =>
        (0, r.jsxs)("svg", {
          fill: "none",
          height: "20",
          stroke: "currentColor",
          viewBox: "0 0 26 20",
          width: "26",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            r.jsx("path", { d: "M4 4H21", strokeLinecap: "round", strokeWidth: "2.4" }),
            r.jsx("path", { d: "M4 10H21", strokeLinecap: "round", strokeWidth: "2.4" }),
            r.jsx("path", { d: "M4 16H21", strokeLinecap: "round", strokeWidth: "2.4" })
          ]
        });
      var x = s(9878);
      let u = async () => {
          let e = await x.Ps.getNavLinks(),
            { navLinks: t } = e.navLinks.data[0].attributes;
          return r.jsx("header", {
            className:
              "bg-dark-blue  py-4 laptop:border-b laptop:border-light-gray laptop:bg-white ",
            children: r.jsx(o.W2, {
              children: (0, r.jsxs)("div", {
                className: "relative flex items-center justify-between gap-2",
                children: [
                  r.jsx("div", {
                    className: "ml-2 mr-5 laptop:hidden",
                    children: r.jsx(d, { className: "text-white" })
                  }),
                  r.jsx(l(), {
                    className: "hidden tablet:mr-4 laptop:block",
                    href: "/",
                    children: r.jsx(o.K7, {
                      className: "text-dark-blue transition hover:text-blue",
                      IconVariants: "big"
                    })
                  }),
                  r.jsx(l(), {
                    className: "absolute -top-[50px] tablet:mr-12 laptop:hidden",
                    href: "/",
                    children: r.jsx(o.K7, {
                      bg: !0,
                      className: "text-white",
                      IconVariants: "small"
                    })
                  }),
                  (0, r.jsxs)("div", {
                    className: "relative flex grow items-center pl-2 pr-16 laptop:h-[60px]",
                    children: [
                      (0, r.jsxs)("nav", {
                        className: "hidden items-center gap-x-5 laptop:flex",
                        children: [
                          r.jsx(c.H9, { navLinks: t }),
                          r.jsx("div", {
                            children: r.jsx(o.ZP, {
                              href: "/",
                              variant: "outline",
                              children: "Our Deals"
                            })
                          })
                        ]
                      }),
                      r.jsx(o.ol, {})
                    ]
                  }),
                  r.jsx(c.AP, {}),
                  r.jsx(o.tB, { className: "text-white laptop:text-black" })
                ]
              })
            })
          });
        },
        p = [
          {
            icon: "/icons/support.svg",
            label: "Product Support",
            text: "Up to 3 years on-site warranty available for your peace of mind."
          },
          {
            icon: "/icons/account.svg",
            label: "Personal Account",
            text: "With big discounts, free delivery and a dedicated support specialist."
          },
          {
            icon: "/icons/discount.svg",
            label: "Amazing Savings",
            text: "Up to 70% off new Products, you can be sure of the best price."
          }
        ];
      var h = s(8639),
        m = s.n(h);
      let b = ({ icon: e, label: t, text: s, iconClassName: a }) =>
          (0, r.jsxs)("div", {
            className: "flex max-w-[265px] grow flex-col items-center justify-center ",
            children: [
              r.jsx("div", {
                className: `mb-6 flex h-[65px] w-[65px] items-center justify-center rounded-full bg-dark-blue text-white ${a}`,
                children: r.jsx(m(), { alt: `${t} icon`, height: 30, src: e, width: 30 })
              }),
              (0, r.jsxs)("div", {
                className: "flex flex-col items-center justify-center gap-3",
                children: [
                  r.jsx(i.ZT, { tag: "h3", variant: "title-4", children: t }),
                  r.jsx(i.ZT, {
                    className: "text-center text-black-700",
                    tag: "p",
                    variant: "body-2",
                    children: s
                  })
                ]
              })
            ]
          }),
        g = ({ bg: e }) =>
          r.jsx("section", {
            className: `${"gray" === e && "bg-dark-white"}`,
            children: r.jsx(o.W2, {
              className:
                "flex flex-wrap items-center justify-around gap-x-2 gap-y-5 py-[25px] tablet:pb-[45px] tablet:pt-[60px]",
              children: p.map((e, t) => r.jsx(b, { icon: e.icon, label: e.label, text: e.text }, t))
            })
          });
      var C = s(301);
      let f = [
          {
            label: "Information",
            links: [
              { title: "About Us", link: "/" },
              { title: "About Zip", link: "/" },
              { title: "Search", link: "/" },
              { title: "Terms", link: "/" },
              { title: "Orders and Returns", link: "/" },
              { title: "Contact Us", link: "/" },
              { title: "Advanced Search", link: "/" },
              { title: "Newsletter Subscription", link: "/" }
            ]
          },
          {
            label: "PC Parts",
            links: [
              { title: "CPUS", link: "/" },
              { title: "Add On Cards", link: "/" },
              { title: "Hard Drives (Internal)", link: "/" },
              { title: "Graphic Cards", link: "/" },
              { title: "Keyboards / Mice", link: "/" },
              { title: "Cases / Power Supplies / Cooling", link: "/" },
              { title: "RAM (Memory)", link: "/" },
              { title: "Software", link: "/" },
              { title: "Speakers / Headsets", link: "/" },
              { title: "Motherboards", link: "/" }
            ]
          },
          {
            label: "Desktop PCs",
            links: [
              { title: "Custom PCs", link: "/" },
              { title: "Servers", link: "/" },
              { title: "MSI All-In-One PCs", link: "/" },
              { title: "HP/Compaq PCs", link: "/" },
              { title: "ASUS PCs", link: "/" },
              { title: "Tecs PCs", link: "/" }
            ]
          },
          {
            label: "Laptops",
            links: [
              { title: "Evryday Use Notebooks", link: "/" },
              { title: "MSI Workstation Series", link: "/" },
              { title: "MSI Prestige Series", link: "/" },
              { title: "Tablets and Pads", link: "/" },
              { title: "Netbooks", link: "/" },
              { title: "Infinity Gaming Notebooks", link: "/" }
            ]
          },
          {
            label: "Adress",
            links: [
              { title: "Address: 1234 Street Adress City Address, 1234", link: "/" },
              { title: "Phone: (00) 1234 5678", link: "/" },
              { title: "E-mail: shop@email.com", link: "/" }
            ]
          }
        ],
        j = [
          { label: "paypal", img: "/img/payment-methods/paypal.png" },
          { label: "visa", img: "/img/payment-methods/visa.png" },
          { label: "maestro", img: "/img/payment-methods/maestro.png" },
          { label: "discover", img: "/img/payment-methods/discover.png" },
          { label: "american-express", img: "/img/payment-methods/american-express.png" }
        ],
        v = () =>
          r.jsx("footer", {
            className: " bg-black pt-[50px] text-white",
            children: (0, r.jsxs)(o.W2, {
              className: "divide-[#353535] tablet:divide-y-[1px]",
              children: [
                (0, r.jsxs)("div", {
                  children: [
                    r.jsx(c.g, {
                      className: "mb-[15px] tablet:mb-[45px] ",
                      subTitle: "Be the first to hear about the latest offers.",
                      title: "Sign Up To Our Newsletter."
                    }),
                    r.jsx("div", {
                      className: "mb-[15px] grid gap-x-4 gap-y-3 tablet:grid-flow-col",
                      children: f.map((e, t) =>
                        (0, r.jsxs)(
                          "div",
                          {
                            children: [
                              (0, r.jsxs)("div", {
                                className: "hidden tablet:block",
                                children: [
                                  r.jsx("h5", {
                                    className: "mb-3 text-[14px] font-bold text-gray-500",
                                    children: e.label
                                  }),
                                  r.jsx("ul", {
                                    className: "text-[13px]",
                                    children: e.links.map((e, t) =>
                                      r.jsx(
                                        "li",
                                        {
                                          children: r.jsx(l(), {
                                            className: "hover:underline",
                                            href: e.link,
                                            children: e.title
                                          })
                                        },
                                        t
                                      )
                                    )
                                  })
                                ]
                              }),
                              r.jsx("div", {
                                className: "block tablet:hidden",
                                children: r.jsx(
                                  C.Q,
                                  {
                                    bodyClassName: "pl-2",
                                    title: e.label,
                                    body: r.jsx("ul", {
                                      className: "flex flex-col gap-2 pb-3 text-[12px] font-light",
                                      children: e.links.map((e, t) =>
                                        r.jsx(
                                          "li",
                                          {
                                            children: r.jsx(l(), {
                                              className: "hover:underline",
                                              href: e.link,
                                              children: e.title
                                            })
                                          },
                                          t
                                        )
                                      )
                                    })
                                  },
                                  t
                                )
                              })
                            ]
                          },
                          t
                        )
                      )
                    })
                  ]
                }),
                (0, r.jsxs)("div", {
                  className:
                    "grid grid-flow-row grid-cols-[auto_auto] gap-4 py-5 text-[12px] font-medium text-dark-gray tablet:grid-cols-3",
                  children: [
                    r.jsx(c.I_, { className: "order-1" }),
                    r.jsx(c.A6, {
                      className: "order-3 col-span-2 tablet:order-2 tablet:col-span-1",
                      paymentItems: j
                    }),
                    r.jsx("div", {
                      className: "order-2  text-right tablet:order-3",
                      children: "Copyright \xa9 2020 Shop Pty. Ltd."
                    })
                  ]
                })
              ]
            })
          });
    },
    2473: (e, t, s) => {
      "use strict";
      s.d(t, { Vq: () => l, yu: () => a, K7: () => i, tB: () => o });
      var r = s(4656);
      (0, s(8538).j)("spinner", {
        variants: {
          circle: { outline: "stroke-dark-gray", solid: "fill-light-gray stroke-white" },
          path: { outline: "fill-dark-gray ", solid: "fill-white" }
        }
      });
      let a = ({ ...e }) =>
          r.jsx("svg", {
            fill: "currentColor",
            viewBox: "0 0 20 20",
            width: "20",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: r.jsx("path", {
              d: "M9.9996 7.39645C8.56601 7.39645 7.39609 8.56638 7.39609 9.99997C7.39609 11.4336 8.56601 12.6035 9.9996 12.6035C11.4332 12.6035 12.6031 11.4336 12.6031 9.99997C12.6031 8.56638 11.4332 7.39645 9.9996 7.39645ZM17.8082 9.99997C17.8082 8.92184 17.818 7.85349 17.7574 6.77731C17.6969 5.52731 17.4117 4.41794 16.4977 3.50388C15.5816 2.58786 14.4742 2.30466 13.2242 2.24411C12.1461 2.18356 11.0777 2.19333 10.0016 2.19333C8.92343 2.19333 7.85507 2.18356 6.7789 2.24411C5.5289 2.30466 4.41953 2.58981 3.50546 3.50388C2.58945 4.41989 2.30624 5.52731 2.2457 6.77731C2.18515 7.85544 2.19492 8.9238 2.19492 9.99997C2.19492 11.0761 2.18515 12.1465 2.2457 13.2226C2.30624 14.4726 2.5914 15.582 3.50546 16.4961C4.42148 17.4121 5.5289 17.6953 6.7789 17.7558C7.85703 17.8164 8.92539 17.8066 10.0016 17.8066C11.0797 17.8066 12.148 17.8164 13.2242 17.7558C14.4742 17.6953 15.5836 17.4101 16.4977 16.4961C17.4137 15.58 17.6969 14.4726 17.7574 13.2226C17.8199 12.1465 17.8082 11.0781 17.8082 9.99997ZM9.9996 14.0058C7.78281 14.0058 5.99375 12.2168 5.99375 9.99997C5.99375 7.78317 7.78281 5.99411 9.9996 5.99411C12.2164 5.99411 14.0055 7.78317 14.0055 9.99997C14.0055 12.2168 12.2164 14.0058 9.9996 14.0058ZM14.1695 6.76559C13.6519 6.76559 13.234 6.34763 13.234 5.83005C13.234 5.31247 13.6519 4.8945 14.1695 4.8945C14.6871 4.8945 15.1051 5.31247 15.1051 5.83005C15.1052 5.95295 15.0811 6.07467 15.0342 6.18825C14.9872 6.30182 14.9183 6.40502 14.8314 6.49192C14.7445 6.57883 14.6413 6.64773 14.5277 6.69469C14.4142 6.74166 14.2924 6.76575 14.1695 6.76559Z"
            })
          }),
        l = ({ ...e }) =>
          r.jsx("svg", {
            fill: "currentColor",
            viewBox: "0 0 20 20",
            width: "20",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: r.jsx("path", {
              d: "M17.1051 2.27661H2.89423C2.55247 2.27661 2.27637 2.55272 2.27637 2.89447V17.1053C2.27637 17.4471 2.55247 17.7232 2.89423 17.7232H17.1051C17.4468 17.7232 17.723 17.4471 17.723 17.1053V2.89447C17.723 2.55272 17.4468 2.27661 17.1051 2.27661ZM15.321 6.78508H14.0872C13.1199 6.78508 12.9326 7.24462 12.9326 7.92041V9.40907H15.2418L14.9406 11.7396H12.9326V17.7232H10.5248V11.7415H8.51099V9.40907H10.5248V7.69064C10.5248 5.6961 11.7432 4.60905 13.5234 4.60905C14.3768 4.60905 15.1086 4.67276 15.3229 4.70173V6.78508H15.321Z"
            })
          }),
        i = ({ bg: e = !1, bgColor: t = "#0156FF", IconVariants: s = "big", ...a }) =>
          (0, r.jsxs)("svg", {
            fill: "currentColor",
            height: "50",
            viewBox: "0 0 64 50",
            width: "64",
            xmlns: "http://www.w3.org/2000/svg",
            ...a,
            children: [
              e &&
                r.jsx("path", {
                  d: "M63.9187 34.1965L32 49.6552L0.0813034 34.1965C0.0813034 34.1965 -3.20444 0 32 0C67.2044 0 63.9187 34.1965 63.9187 34.1965Z",
                  fill: t
                }),
              "big" === s &&
                r.jsx("path", {
                  d: "M21.7362 2L5 11.9183V24.1254L21.7362 34.0437L35.1619 26.4143V30.0383L21.7362 38.0492L5 27.9402V32.3271L21.7362 42.0546L38.4724 32.3271V20.12L25.0466 27.9402V24.1254L38.4724 16.1145V11.9183L21.7362 2Z",
                  transform: "translate(10, 0)"
                }),
              "small" === s &&
                r.jsx("path", {
                  d: "M31.7474 11.2864L22.6902 17.1799V24.4334L31.7474 30.3268L39.0131 25.7934V27.9468L31.7474 32.7069L22.6902 26.7001V29.3068L31.7474 35.087L40.8047 29.3068V22.0533L33.539 26.7001V24.4334L40.8047 19.6732V17.1799L31.7474 11.2864Z"
                })
            ]
          }),
        o = ({ ...e }) =>
          (0, r.jsxs)("svg", {
            fill: "none",
            height: "30",
            viewBox: "0 0 34 35",
            width: "30",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            stroke: "currentColor",
            children: [
              r.jsx("circle", { cx: "17", cy: "17.208", r: "16", strokeWidth: "2" }),
              r.jsx("path", {
                d: "M17 10.5415C17.8841 10.5415 18.7319 10.8927 19.357 11.5178C19.9822 12.1429 20.3333 12.9908 20.3333 13.8748C20.3333 14.7589 19.9822 15.6067 19.357 16.2319C18.7319 16.857 17.8841 17.2082 17 17.2082C16.116 17.2082 15.2681 16.857 14.643 16.2319C14.0179 15.6067 13.6667 14.7589 13.6667 13.8748C13.6667 12.9908 14.0179 12.1429 14.643 11.5178C15.2681 10.8927 16.116 10.5415 17 10.5415ZM17 18.8748C20.6833 18.8748 23.6667 20.3665 23.6667 22.2082V23.8748H10.3333V22.2082C10.3333 20.3665 13.3167 18.8748 17 18.8748Z",
                fill: "currentColor"
              })
            ]
          });
    },
    2984: (e, t, s) => {
      "use strict";
      s.d(t, {
        ZP: () => d,
        W2: () => u,
        K7: () => x.K7,
        ol: () => g,
        ZT: () => C,
        tB: () => x.tB
      });
      var r = s(4656),
        a = s(8538);
      (0, a.j)(
        "group inline-flex  whitespace-nowrap h-full w-full min-w-min items-center gap-2 justify-center rounded-[3.125rem] px-5 text-center font-semibold transition leading-normal text-[0.875rem] min-h-[2.313rem] capitalize",
        {
          variants: {
            variant: {
              outline:
                "border-dark-blue text-dark-blue hover:border-blue hover:text-blue border-2 disabled:border-light-gray disabled:text-light-gray py-[0.385rem]",
              solid:
                "bg-dark-blue hover:bg-blue text-white disabled:text-white disabled:bg-light-gray py-2"
            }
          }
        }
      ),
        (0, a.j)("transition ", {
          variants: {
            variant: {
              outline: "text-dark-blue group-hover:text-blue group-disabled:text-light-gray",
              solid: "text-white"
            },
            iconMobileOff: { true: "hidden tablet:block", false: "" }
          }
        });
      var l = s(4353),
        i = s.n(l),
        o = s(5011);
      let n = (0, a.j)(
          "group inline-flex  whitespace-nowrap  w-full min-w-min items-center gap-2 justify-center rounded-[3.125rem] px-5 text-center font-semibold transition leading-normal text-[0.875rem] min-h-[2.313rem] capitalize",
          {
            variants: {
              variant: {
                outline:
                  "border-dark-blue text-dark-blue hover:border-blue hover:text-blue border-2 disabled:border-light-gray disabled:text-light-gray py-[0.385rem]",
                solid: "bg-dark-blue hover:bg-blue text-white disabled:bg-light-gray py-2"
              }
            }
          }
        ),
        c = (0, a.j)("mr-[0.625rem] transition", {
          variants: {
            variant: {
              outline: "text-dark-blue group-hover:blue group-disabled:text-light-gray",
              solid: "text-white"
            }
          }
        }),
        d = ({ variant: e = "solid", children: t, endIcon: s, className: a, startIcon: l, ...d }) =>
          (0, r.jsxs)(i(), {
            className: (0, o.m6)(n({ className: a, variant: e })),
            ...d,
            children: [
              l && r.jsx("span", { className: c({ variant: e }), children: l }),
              r.jsx("span", { children: t }),
              s && r.jsx("span", { className: c({ variant: e }), children: s })
            ]
          });
      var x = s(2473);
      let u = ({ children: e, maxWidth: t = 1398, tag: s = "div", className: a }) =>
        r.jsx(s, {
          className: `${a?.length ? a : ""} mx-auto w-full px-[15px]`,
          style: { maxWidth: t },
          children: e
        });
      var p = s(5153);
      let h = (0, p.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/ui/Search/Search.tsx`
        ),
        { __esModule: m, $$typeof: b } = h;
      h.default;
      let g = (0, p.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/ui/Search/Search.tsx#Search`
        ),
        C = ({ children: e, variant: t, tag: s = "div", className: a = "", ...l }) =>
          r.jsx(s, { className: `${t} ${a}`, ...l, children: e }),
        f = (0, p.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/ui/NumberIput/NumberInput.tsx`
        ),
        { __esModule: j, $$typeof: v } = f;
      f.default,
        (0, p.createProxy)(
          String.raw`/Users/dumitruluca/Desktop/Web Pages Design/NextJs/ecommerce/src/components/ui/NumberIput/NumberInput.tsx#NumberInput`
        );
    },
    9878: (e, t, s) => {
      "use strict";
      s.d(t, { Ps: () => b });
      var r,
        a = s(8111),
        l = s(6487);
      !(function (e) {
        (e.Live = "LIVE"), (e.Preview = "PREVIEW");
      })(r || (r = {}));
      let i = l.ZP`
  fragment LinkFragment on ComponentUiLink {
    id
    label
    href
  }
`,
        o = l.ZP`
  fragment NavLinkFragment on NavLink {
    navLinks {
      ...LinkFragment
    }
  }
  ${i}
`,
        n = l.ZP`
  fragment File on UploadFile {
    name
    alternativeText
    caption
    width
    height
    formats
    hash
    ext
    mime
    size
    url
    previewUrl
    provider
    provider_metadata
  }
`,
        c = l.ZP`
  fragment Category on Category {
    title
  }
`,
        d = l.ZP`
  fragment Product on Product {
    name
    price
    discountPrice
    productPreviewImg {
      data {
        id
        attributes {
          ...File
        }
      }
    }
    stock
    slug
    shortName
    description
    category {
      data {
        attributes {
          ...Category
        }
      }
    }
  }
  ${n}
  ${c}
`,
        x = l.ZP`
  query getNavLinks {
    navLinks {
      data {
        id
        attributes {
          ...NavLinkFragment
        }
      }
    }
  }
  ${o}
`,
        u = l.ZP`
  query getProduct($slug: String) {
    products(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          ...Product
        }
      }
    }
  }
  ${d}
`,
        p = l.ZP`
  query getProducts {
    products {
      data {
        id
        attributes {
          ...Product
        }
      }
    }
  }
  ${d}
`,
        h = (e, t, s, r) => e(),
        m = new a.g6("http://localhost:1337/graphql/playground", {
          headers: {
            Authorization:
              "Bearer c74df24c296c1fe045f21ebe853ad084b43ff7369210fc686e5db61ae8fa01c5dfcfa4da74fa05b3dae1288c4be0751828b13a18bb914910d4976ed3a31c3853da4aa8c543e5d95b97f53d8432edadedc33ca50c68ef832ad9c3c94a5630568a8f5874672e7cc247c12469be6ff29e35dcb26296a5e2845a1a9fe45f642e7f58"
          }
        }),
        b = (function (e, t = h) {
          return {
            getNavLinks: (s, r) =>
              t((t) => e.request(x, s, { ...r, ...t }), "getNavLinks", "query", s),
            getProduct: (s, r) =>
              t((t) => e.request(u, s, { ...r, ...t }), "getProduct", "query", s),
            getProducts: (s, r) =>
              t((t) => e.request(p, s, { ...r, ...t }), "getProducts", "query", s)
          };
        })(m);
    },
    7267: () => {}
  });
