! function(e) {
    var t = {};

    function r(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) r.d(i, n, function(t) {
                return e[t]
            }.bind(null, n));
        return i
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 66)
}({
    0: function(e, t) {
        e.exports = jQuery
    },
    66: function(e, t, r) {
        "use strict";
        var i, n = r(67);
        (new((i = n) && i.__esModule ? i : {
            default: i
        }).default).bootstrap()
    },
    67: function(e, t, r) {
        "use strict";
        (function(e, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }();

            function n(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
                return Array.from(e)
            }
            var a = function() {
                function t() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.selector = ".js-price_plan_select", this.selectors = {
                        seek: ".b-pricing-block__plan--price-length-slider-slide",
                        pricingPlans: ".b-pricing-block__plans",
                        singlePlan: ".b-pricing-block__plan",
                        planPrice: ".b-pricing-block__plan--price",
                        planPriceLength: ".b-pricing-block__plan--price-length",
                        planPriceSub: ".b-pricing-block__plan--price-sub",
                        sliderItem: ".b-pricing-block__plan--price-length-slider--item ",
                        activePlanPriceSingle: ".b-pricing-block__plan--price-single.active"
                    }, this.classes = {
                        activeMonthly: "b-pricing-block__plans--active-monthly",
                        darkMode: "b-pricing-block--dark-mode"
                    }, this.nodes = {
                        toggleButton: document.querySelector(".b-pricing-block__toggle--button"),
                        pricingPlans: document.querySelector(this.selectors.pricingPlans)
                    }
                }
                return i(t, [{
                    key: "bootstrap",
                    value: function() {
                        var t = this;
                        t.updateSliderOnLoad(), this.nodes.toggleButton && (e(this.selector).on("click", (function() {
                            e(this).toggleClass("expanded")
                        })), e(".b-pricing-block__toggle--button").on("click", (function() {
                            var r = e(this).closest(".b-pricing-block__toggle"),
                                i = e(this).closest(".b-pricing-block");
                            r.toggleClass("b-pricing-block__toggle--active-monthly"), "monthly" === r.data("paymentPeriod") ? e(this).data("paymentPeriod", "annually") : e(this).data("paymentPeriod", "monthly"), i.find(t.selectors.pricingPlans).toggleClass(t.classes.activeMonthly), r.find(".b-pricing-block__toggle--discount").toggleClass("b-pricing-block__toggle--discount--disabled"), i.find(t.selectors.pricingPlans).hasClass(t.classes.activeMonthly) ? t.updatePricingTableCTAs("monthly") : t.updatePricingTableCTAs("annually"), t.watchHeights()
                        }))), this.nodes.pricingPlans && "monthly" === this.nodes.pricingPlans.dataset.defaultPlan && this.nodes.pricingPlans.classList.add("b-pricing-block__plans--active-monthly"), e(".b-pricing-block__plan--price-length-slider--item").on("click", (function() {
                            var r = e(this).closest(t.selectors.singlePlan),
                                i = r.find(t.selectors.seek),
                                n = e(this).data("length"),
                                a = r.find(t.selectors.activePlanPriceSingle),
                                l = r.find(".b-pricing-block__plan--price-" + n),
                                c = r.find(".b-pricing-block__plan--price-sub-single.active"),
                                o = r.find(".b-pricing-block__plan--price-sub-" + n);
                            i.each((function() {
                                e(this).val(parseInt(n + 1, 10)), e(this).trigger("change")
                            })), a.each((function() {
                                e(this).removeClass("active")
                            })), l.each((function() {
                                e(this).addClass("active")
                            })), c.each((function() {
                                e(this).removeClass("active")
                            })), o.each((function() {
                                e(this).addClass("active")
                            }))
                        })), e(t.selectors.seek).on("input change", (function() {
                            var r = e(this).closest(t.selectors.pricingPlans),
                                i = e(this).closest(t.selectors.singlePlan),
                                n = e(this).closest(".b-pricing-block__plan--content"),
                                a = n.find(".b-pricing-block__plan--price-length-slider--items").data("total"),
                                l = e(this).val(),
                                c = parseInt(l, 10) - 1,
                                o = i.find(t.selectors.activePlanPriceSingle),
                                s = i.find(".b-pricing-block__plan--price-" + c),
                                g = i.find(".b-pricing-block__plan--price-sub-single.active"),
                                u = i.find(".b-pricing-block__plan--price-sub-" + c),
                                b = i.find(".b-pricing-block__plan--price-cta.active"),
                                p = i.find(".b-pricing-block__plan--price-cta-" + c),
                                d = n.data("color"),
                                h = n.siblings().find(t.selectors.seek),
                                f = "",
                                v = i.data("price-plan");
                            f = r.hasClass(t.classes.activeMonthly) ? i.find(".b-pricing-block__plan--content-month").find(".b-pricing-block__plan--price-cta-" + c).attr("href") : i.find(".b-pricing-block__plan--content-year").find(".b-pricing-block__plan--price-cta-" + c).attr("href"), t.updatePricingTableCTAs(v, f);
                            var y = {
                                none: "#7B61FF",
                                yellow: "#f3af00",
                                violet: "#c971ff",
                                purple: "#7B61FF",
                                green: "#429CA5",
                                blue: "#3766d8",
                                black: "#161616"
                            };
                            o.each((function() {
                                e(this).removeClass("active")
                            })), s.each((function() {
                                e(this).addClass("active")
                            })), g.each((function() {
                                e(this).removeClass("active")
                            })), u.each((function() {
                                e(this).addClass("active")
                            })), b.each((function() {
                                e(this).removeClass("active")
                            })), p.each((function() {
                                e(this).addClass("active")
                            })), h.val(parseInt(l, 10)), h.css("background", "linear-gradient(to right, " + y[d] + " 0%, " + y[d] + " " + (l - 1) / (a - 1) * 100 + "%, rgba(123, 97, 255, 0.1) " + (l - 1) / (a - 1) * 100 + "%, rgba(123, 97, 255, 0.1) 100%)"), e(this).css("background", "linear-gradient(to right, " + y[d] + " 0%, " + y[d] + " " + (l - 1) / (a - 1) * 100 + "%, rgba(123, 97, 255, 0.1) " + (l - 1) / (a - 1) * 100 + "%, rgba(123, 97, 255, 0.1) 100%)"), e(".b-pricing-block").hasClass(t.classes.darkMode) && ("" + y[d] == "#f3af00" ? (h.css("background", "linear-gradient(to right, " + y[d] + " 0%, " + y[d] + " " + (l - 1) / (a - 1) * 100 + "%, rgba(243, 175, 0, 0.4) " + (l - 1) / (a - 1) * 100 + "%, rgba(243, 175, 0, 0.4) 100%)"), e(this).css("background", "linear-gradient(to right, " + y[d] + " 0%, " + y[d] + " " + (l - 1) / (a - 1) * 100 + "%, rgba(243, 175, 0, 0.4) " + (l - 1) / (a - 1) * 100 + "%, rgba(243, 175, 0, 0.4) 100%)")) : "" + y[d] == "#c971ff" ? (h.css("background", "linear-gradient(to right, " + y[d] + " 0%, " + y[d] + " " + (l - 1) / (a - 1) * 100 + "%, rgba(201, 113, 255, 0.4) " + (l - 1) / (a - 1) * 100 + "%, rgba(201, 113, 255, 0.4) 100%)"), e(this).css("background", "linear-gradient(to right, " + y[d] + " 0%, " + y[d] + " " + (l - 1) / (a - 1) * 100 + "%, rgba(201, 113, 255, 0.4) " + (l - 1) / (a - 1) * 100 + "%, rgba(201, 113, 255, 0.4) 100%)")) : "" + y[d] == "#7B61FF" ? (h.css("background", "linear-gradient(to right, " + y[d] + " 0%, " + y[d] + " " + (l - 1) / (a - 1) * 100 + "%, rgba(123, 97, 255, 0.4) " + (l - 1) / (a - 1) * 100 + "%, rgba(123, 97, 255, 0.4) 100%)"), e(this).css("background", "linear-gradient(to right, " + y[d] + " 0%, " + y[d] + " " + (l - 1) / (a - 1) * 100 + "%, rgba(123, 97, 255, 0.4) " + (l - 1) / (a - 1) * 100 + "%, rgba(123, 97, 255, 0.4) 100%)")) : "" + y[d] == "#3766d8" ? (h.css("background", "linear-gradient(to right, " + y[d] + " 0%, " + y[d] + " " + (l - 1) / (a - 1) * 100 + "%, rgba(55, 102, 216, 0.4) " + (l - 1) / (a - 1) * 100 + "%, rgba(55, 102, 216, 0.4) 100%)"), e(this).css("background", "linear-gradient(to right, " + y[d] + " 0%, " + y[d] + " " + (l - 1) / (a - 1) * 100 + "%, rgba(55, 102, 216, 0.4) " + (l - 1) / (a - 1) * 100 + "%, rgba(55, 102, 216, 0.4) 100%)")) : "" + y[d] == "#161616" ? (h.css("background", "linear-gradient(to right, " + y[d] + " 0%, " + y[d] + " " + (l - 1) / (a - 1) * 100 + "%, rgba(22, 22, 22, 0.4) " + (l - 1) / (a - 1) * 100 + "%, rgba(22, 22, 22, 0.4) 100%)"), e(this).css("background", "linear-gradient(to right, " + y[d] + " 0%, " + y[d] + " " + (l - 1) / (a - 1) * 100 + "%, rgba(22, 22, 22, 0.4) " + (l - 1) / (a - 1) * 100 + "%, rgba(22, 22, 22, 0.4) 100%)")) : "" + y[d] == "#429CA5" && (h.css("background", "linear-gradient(to right, " + y[d] + " 0%, " + y[d] + " " + (l - 1) / (a - 1) * 100 + "%, rgba(66, 156, 165, 0.4) " + (l - 1) / (a - 1) * 100 + "%, rgba(66, 156, 165, 0.4) 100%)"), e(this).css("background", "linear-gradient(to right, " + y[d] + " 0%, " + y[d] + " " + (l - 1) / (a - 1) * 100 + "%, rgba(66, 156, 165, 0.4) " + (l - 1) / (a - 1) * 100 + "%, rgba(66, 156, 165, 0.4) 100%)")))
                        })), t.watchHeights()
                    }
                }, {
                    key: "updateSliderOnLoad",
                    value: function() {
                        var e = document.querySelectorAll(this.selectors.seek),
                            t = {
                                none: "#7B61FF",
                                yellow: "#f3af00",
                                violet: "#c971ff",
                                purple: "#7B61FF",
                                green: "#429CA5",
                                blue: "#3766d8",
                                black: "#161616"
                            };
                        if (e.length > 0) {
                            var r = !0,
                                i = !1,
                                n = void 0;
                            try {
                                for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) {
                                    var c = a.value,
                                        o = parseInt(c.value, 10),
                                        s = parseInt(o, 10) - 1,
                                        g = c.closest(".b-pricing-block__plan--content"),
                                        u = g.querySelector(".b-pricing-block__plan--price-length-slider--items").dataset.total,
                                        b = g.dataset.color;
                                    c.value = o, c.style.background = "linear-gradient(to right, " + t[b] + " 0%, " + t[b] + " " + (o - 1) / (u - 1) * 100 + "%, rgba(123, 97, 255, 0.1) " + (o - 1) / (u - 1) * 100 + "%, rgba(123, 97, 255, 0.1) 100%)", this.updateClasses(g, s)
                                }
                            } catch (e) {
                                i = !0, n = e
                            } finally {
                                try {
                                    !r && l.return && l.return()
                                } finally {
                                    if (i) throw n
                                }
                            }
                        }
                    }
                }, {
                    key: "updateClasses",
                    value: function(e, t) {
                        var r = e.querySelectorAll(this.selectors.activePlanPriceSingle),
                            i = e.querySelectorAll(".b-pricing-block__plan--price-" + t),
                            n = e.querySelectorAll(".b-pricing-block__plan--price-sub-single.active"),
                            a = e.querySelectorAll(".b-pricing-block__plan--price-sub-" + t),
                            l = e.querySelectorAll(".b-pricing-block__plan--price-cta.active"),
                            c = e.querySelectorAll(".b-pricing-block__plan--price-cta-" + t),
                            o = !0,
                            s = !1,
                            g = void 0;
                        try {
                            for (var u, b = r[Symbol.iterator](); !(o = (u = b.next()).done); o = !0) {
                                u.value.classList.remove("active")
                            }
                        } catch (e) {
                            s = !0, g = e
                        } finally {
                            try {
                                !o && b.return && b.return()
                            } finally {
                                if (s) throw g
                            }
                        }
                        var p = !0,
                            d = !1,
                            h = void 0;
                        try {
                            for (var f, v = i[Symbol.iterator](); !(p = (f = v.next()).done); p = !0) {
                                f.value.classList.add("active")
                            }
                        } catch (e) {
                            d = !0, h = e
                        } finally {
                            try {
                                !p && v.return && v.return()
                            } finally {
                                if (d) throw h
                            }
                        }
                        var y = !0,
                            _ = !1,
                            k = void 0;
                        try {
                            for (var m, P = n[Symbol.iterator](); !(y = (m = P.next()).done); y = !0) {
                                m.value.classList.remove("active")
                            }
                        } catch (e) {
                            _ = !0, k = e
                        } finally {
                            try {
                                !y && P.return && P.return()
                            } finally {
                                if (_) throw k
                            }
                        }
                        var S = !0,
                            C = !1,
                            A = void 0;
                        try {
                            for (var x, w = a[Symbol.iterator](); !(S = (x = w.next()).done); S = !0) {
                                x.value.classList.add("active")
                            }
                        } catch (e) {
                            C = !0, A = e
                        } finally {
                            try {
                                !S && w.return && w.return()
                            } finally {
                                if (C) throw A
                            }
                        }
                        var q = !0,
                            M = !1,
                            H = void 0;
                        try {
                            for (var j, L = l[Symbol.iterator](); !(q = (j = L.next()).done); q = !0) {
                                j.value.classList.remove("active")
                            }
                        } catch (e) {
                            M = !0, H = e
                        } finally {
                            try {
                                !q && L.return && L.return()
                            } finally {
                                if (M) throw H
                            }
                        }
                        var T = !0,
                            O = !1,
                            F = void 0;
                        try {
                            for (var I, B = c[Symbol.iterator](); !(T = (I = B.next()).done); T = !0) {
                                I.value.classList.add("active")
                            }
                        } catch (e) {
                            O = !0, F = e
                        } finally {
                            try {
                                !T && B.return && B.return()
                            } finally {
                                if (O) throw F
                            }
                        }
                    }
                }, {
                    key: "watchSliderItems",
                    value: function() {
                        var e = this,
                            t = document.querySelectorAll(this.selectors.sliderItem);
                        if (t.length > 0) {
                            var r = function(t) {
                                    t.addEventListener("click", (function() {
                                        var r = t.closest(".b-pricing-block__plan--price-length-slider").querySelector(e.selectors.seek);
                                        r.value = parseInt(r.dataset.length, 10) + 1
                                    }))
                                },
                                i = !0,
                                n = !1,
                                a = void 0;
                            try {
                                for (var l, c = t[Symbol.iterator](); !(i = (l = c.next()).done); i = !0) {
                                    r(l.value)
                                }
                            } catch (e) {
                                n = !0, a = e
                            } finally {
                                try {
                                    !i && c.return && c.return()
                                } finally {
                                    if (n) throw a
                                }
                            }
                        }
                    }
                }, {
                    key: "watchHeights",
                    value: function() {
                        if (this.nodes.pricingPlans) {
                            var e, r, i, a = document.querySelectorAll(this.selectors.singlePlan),
                                l = [],
                                c = [],
                                o = [];
                            if (a.length > 0) {
                                var s = !0,
                                    g = !1,
                                    u = void 0;
                                try {
                                    for (var b, p = a[Symbol.iterator](); !(s = (b = p.next()).done); s = !0) {
                                        var d = b.value;
                                        l.push(t.getDivHeight(d, this.selectors.planPrice)), c.push(t.getDivHeight(d, this.selectors.planPriceLength)), o.push(t.getDivHeight(d, this.selectors.planPriceSub))
                                    }
                                } catch (e) {
                                    g = !0, u = e
                                } finally {
                                    try {
                                        !s && p.return && p.return()
                                    } finally {
                                        if (g) throw u
                                    }
                                }
                            }
                            var h = (e = []).concat.apply(e, l),
                                f = (r = []).concat.apply(r, c),
                                v = (i = []).concat.apply(i, o);
                            t.updateHeight(this.selectors.planPrice, Math.max.apply(Math, n(h))), t.updateHeight(this.selectors.planPriceLength, Math.max.apply(Math, n(f))), t.updateHeight(this.selectors.planPriceSub, Math.max.apply(Math, n(v)))
                        }
                    }
                }, {
                    key: "updatePricingTableCTAs",
                    value: function(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            i = e(".b-pricing-table-block"),
                            n = i.find("th .c-cta");
                        "monthly" === t || "annually" === t ? n.each((function() {
                            e(this).attr("href", e(this).data(t))
                        })) : (n = i.find("th.b-pricing-table-block__table--body-" + t + " .c-cta")).attr("href", r)
                    }
                }, {
                    key: "equalizeHeight",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".js-equalize-height--parent",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".js-equalize-height--child",
                            i = 0,
                            n = r(e),
                            a = n.find(t);
                        a.each((function() {
                            var e = r(this).outerHeight();
                            e > i && (i = e)
                        })), a.css("height", i + "px")
                    }
                }, {
                    key: "updateCTAInPricingTable",
                    value: function(t, r) {
                        var i = e(".b-pricing-table-block");
                        if (0 !== i.length) {
                            var n = i.find(".b-pricing-table-block__table--body-" + t).find(".c-cta");
                            n.attr("href", n.data(r))
                        }
                    }
                }], [{
                    key: "getDivHeight",
                    value: function(e, t) {
                        var r = e.querySelectorAll(t),
                            i = [],
                            n = !0,
                            a = !1,
                            l = void 0;
                        try {
                            for (var c, o = r[Symbol.iterator](); !(n = (c = o.next()).done); n = !0) {
                                var s = c.value;
                                i.push(s.scrollHeight)
                            }
                        } catch (e) {
                            a = !0, l = e
                        } finally {
                            try {
                                !n && o.return && o.return()
                            } finally {
                                if (a) throw l
                            }
                        }
                        return i
                    }
                }, {
                    key: "updateHeight",
                    value: function(e, t) {
                        var r = document.querySelectorAll(e),
                            i = !0,
                            n = !1,
                            a = void 0;
                        try {
                            for (var l, c = r[Symbol.iterator](); !(i = (l = c.next()).done); i = !0) {
                                l.value.setAttribute("style", "height: " + t + "px")
                            }
                        } catch (e) {
                            n = !0, a = e
                        } finally {
                            try {
                                !i && c.return && c.return()
                            } finally {
                                if (n) throw a
                            }
                        }
                    }
                }]), t
            }();
            t.default = a
        }).call(this, r(0), r(0))
    }
});