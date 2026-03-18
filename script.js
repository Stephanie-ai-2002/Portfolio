function closeMM() {
  let e = document.getElementById("mmenu"),
    t = document.getElementById("ham");
  (e && e.classList.remove("open"),
    t && t.classList.remove("open"),
    (document.body.style.overflow = ""));
}
(!(function e() {
  let t = document.getElementById("tgl");
  if (!t) {
    setTimeout(e, 50);
    return;
  }
  t.addEventListener("click", function () {
    let e = document.documentElement,
      t = "dark" === e.getAttribute("data-theme") ? "light" : "dark";
    e.setAttribute("data-theme", t);
  });
})(),
  (function e() {
    let t = document.getElementById("tw");
    if (!t) {
      setTimeout(e, 50);
      return;
    }
    let n = [
        "Je construis des sites web qui convertissent.",
        "Je cr\xe9e des visuels qui marquent les esprits.",
        "Je donne vie \xe0 vos id\xe9es — en code et en images.",
      ],
      r = 0,
      i = 0,
      l = !1;
    function s() {
      let e = n[r];
      if (l) {
        if ((i--, (t.textContent = e.substring(0, i)), i <= 0)) {
          ((l = !1), (r = (r + 1) % n.length), setTimeout(s, 400));
          return;
        }
        setTimeout(s, 30);
      } else {
        if ((i++, (t.textContent = e.substring(0, i)), i >= e.length)) {
          ((l = !0), setTimeout(s, 2e3));
          return;
        }
        setTimeout(s, 60);
      }
    }
    setTimeout(s, 400);
  })(),
  document.addEventListener("click", function (e) {
    let t = document.getElementById("mmenu"),
      n = document.getElementById("ham");
    if (t && n) {
      if (e.target.closest("#ham")) {
        let r = !t.classList.contains("open");
        (t.classList.toggle("open", r),
          n.classList.toggle("open", r),
          (document.body.style.overflow = r ? "hidden" : ""));
      }
      e.target.closest(".mml") && closeMM();
    }
  }),
  document.addEventListener("keydown", (e) => {
    "Escape" === e.key && closeMM();
  }),
  document.addEventListener("DOMContentLoaded", function () {
    var e = document.querySelector("nav"),
      t = document.getElementById("scroll-bar");
    (window.addEventListener(
      "scroll",
      function () {
        var n = document.documentElement.scrollTop,
          r =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        (t && (t.style.width = (n / r) * 100 + "%"),
          e && e.classList.toggle("scrolled", window.scrollY > 60));
        var i = e ? e.offsetHeight : 64,
          l = "";
        (document.querySelectorAll("section[id]").forEach(function (e) {
          window.scrollY >= e.offsetTop - i - 24 && (l = e.id);
        }),
          document.querySelectorAll(".nl").forEach(function (e) {
            e.classList.toggle("active", e.getAttribute("href") === "#" + l);
          }));
      },
      { passive: !0 },
    ),
      document.querySelectorAll('a[href^="#"]').forEach(function (t) {
        t.addEventListener("click", function (n) {
          var r = t.getAttribute("href");
          if ("#" !== r) {
            n.preventDefault();
            var i = document.querySelector(r);
            (i &&
              window.scrollTo({
                top: i.offsetTop - (e ? e.offsetHeight : 64) - 8,
                behavior: "smooth",
              }),
              closeMM());
          }
        });
      }));
    var n = new IntersectionObserver(
      function (e) {
        e.forEach(function (e) {
          e.isIntersecting &&
            (e.target.classList.add("visible"), n.unobserve(e.target));
        });
      },
      { threshold: 0.1 },
    );
    (document.querySelectorAll(".fade-up").forEach(function (e) {
      if (e.closest("#hero")) {
        e.classList.add("visible");
        return;
      }
      n.observe(e);
    }),
      document.querySelectorAll(".skfill").forEach(function (e) {
        e.style.width = "0";
      }));
    var r = document.getElementById("skbars");
    if (r) {
      var i = new IntersectionObserver(
        function (e) {
          e.forEach(function (e) {
            e.isIntersecting &&
              (e.target.querySelectorAll(".skfill").forEach(function (e, t) {
                setTimeout(
                  function () {
                    e.style.width = e.dataset.width;
                  },
                  200 + 120 * t,
                );
              }),
              i.unobserve(e.target));
          });
        },
        { threshold: 0.15 },
      );
      i.observe(r);
    }
    var l = document.querySelector("#stats");
    if (l) {
      var s = new IntersectionObserver(
        function (e) {
          e.forEach(function (e) {
            e.isIntersecting &&
              (document.querySelectorAll("[data-target]").forEach(function (e) {
                var t, n, r, i;
                ((t = e),
                  (n = parseInt(e.dataset.target)),
                  (r = e.dataset.suffix || ""),
                  (i = null),
                  (function e(l) {
                    i || (i = l);
                    var s = Math.min((l - i) / 1800, 1);
                    ((t.textContent =
                      Math.floor((1 - Math.pow(1 - s, 3)) * n) + r),
                      s < 1 && requestAnimationFrame(e));
                  })(performance.now()));
              }),
              s.unobserve(e.target));
          });
        },
        { threshold: 0.15 },
      );
      s.observe(l);
    }
    var o = document.getElementById("pgrid"),
      a = document.querySelectorAll(".p-dot"),
      c = document.getElementById("pnext"),
      f = document.getElementById("pprev"),
      u = 0,
      d = null;
    function $() {
      return window.innerWidth < 560 ? 1 : window.innerWidth < 900 ? 2 : 3;
    }
    function v() {
      return Array.from(document.querySelectorAll(".pcard")).filter(
        function (e) {
          return "none" !== e.style.display;
        },
      );
    }
    function m(e) {
      if (o) {
        var t = v();
        if (t.length) {
          var n = $();
          u = Math.max(0, Math.min(e, Math.max(0, t.length - n)));
          var r = (o.parentElement.offsetWidth - (n - 1) * 24) / n;
          (t.forEach(function (e) {
            ((e.style.flex = "0 0 " + r + "px"), (e.style.maxWidth = r + "px"));
          }),
            (o.style.transform = "translateX(-" + u * (r + 24) + "px)"),
            a.forEach(function (e, t) {
              e.classList.toggle("active", t === Math.min(u, a.length - 1));
            }));
        }
      }
    }
    function y() {
      m(u >= Math.max(0, v().length - $()) ? 0 : u + 1);
    }
    function g() {
      (clearInterval(d), (d = setInterval(y, 4500)));
    }
    (c &&
      c.addEventListener("click", function () {
        (m(u + 1), g());
      }),
      f &&
        f.addEventListener("click", function () {
          (m(u - 1), g());
        }),
      a.forEach(function (e) {
        e.addEventListener("click", function () {
          (m(+e.dataset.pi), g());
        });
      }),
      window.addEventListener(
        "resize",
        function () {
          m(u);
        },
        { passive: !0 },
      ),
      setTimeout(function () {
        (m(0), g());
      }, 250),
      document.querySelectorAll(".ftab").forEach(function (e) {
        e.addEventListener("click", function () {
          (document.querySelectorAll(".ftab").forEach(function (e) {
            e.classList.remove("active");
          }),
            e.classList.add("active"));
          var t = e.dataset.filter;
          (document.querySelectorAll(".pcard").forEach(function (e) {
            e.style.display =
              "tous" === t || e.dataset.category === t ? "" : "none";
          }),
            (u = 0),
            setTimeout(function () {
              (m(0), g());
            }, 60));
        });
      }));
    var h = document.getElementById("testi-track"),
      E = document.querySelectorAll(".testi-dot"),
      p = document.querySelectorAll(".testi-card"),
      q = 0,
      _ = null;
    function L() {
      return window.innerWidth < 560 ? 1 : window.innerWidth < 900 ? 2 : 3;
    }
    function b(e) {
      if (h && p.length) {
        var t = L();
        q = Math.max(0, Math.min(e, Math.max(0, p.length - t)));
        var n = h.parentElement.offsetWidth;
        ((h.style.transform =
          "translateX(-" + q * ((n - (t - 1) * 24) / t + 24) + "px)"),
          E.forEach(function (e, t) {
            e.classList.toggle("active", t === Math.min(q, E.length - 1));
          }));
      }
    }
    function S() {
      b(q + 1 > p.length - L() ? 0 : q + 1);
    }
    function x() {
      (clearInterval(_), (_ = setInterval(S, 4e3)));
    }
    var A = document.getElementById("tnext"),
      k = document.getElementById("tprev");
    (A &&
      A.addEventListener("click", function () {
        (b(q + 1), x());
      }),
      k &&
        k.addEventListener("click", function () {
          (b(q - 1), x());
        }),
      E.forEach(function (e) {
        e.addEventListener("click", function () {
          (b(+e.dataset.i), x());
        });
      }),
      window.addEventListener(
        "resize",
        function () {
          b(q);
        },
        { passive: !0 },
      ),
      setTimeout(function () {
        (b(0), x());
      }, 250));
    var I = document.getElementById("cform");
(I &&
  I.addEventListener("submit", function (e) {
    e.preventDefault();
    var formData = new FormData(I);
    fetch(I.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    }).then(function(res) {
      if (res.ok) {
        var smsg = document.getElementById("smsg");
        smsg && ((smsg.style.display = "flex"), I.reset());
        setTimeout(function() {
          smsg && (smsg.style.display = "none");
        }, 6000);
      }
    }).catch(function() {
      var smsg = document.getElementById("smsg");
      smsg && ((smsg.style.display = "flex"), I.reset());
      setTimeout(function() {
        smsg && (smsg.style.display = "none");
      }, 6000);
    });
  }),
      document.querySelectorAll(".tilt-card").forEach(function (e) {
        if (!e.querySelector(".tilt-shine")) {
          var t = document.createElement("div");
          ((t.className = "tilt-shine"), e.appendChild(t));
        }
        (e.addEventListener("mousemove", function (t) {
          var n = e.getBoundingClientRect(),
            r = (t.clientX - n.left) / n.width - 0.5,
            i = (t.clientY - n.top) / n.height - 0.5;
          ((e.style.transform =
            "perspective(600px) rotateY(" +
            12 * r +
            "deg) rotateX(" +
            -(12 * i) +
            "deg) scale(1.03)"),
            (e.style.transition = "transform 0.1s ease"));
          var l = e.querySelector(".tilt-shine");
          l &&
            ((l.style.background =
              "radial-gradient(circle at " +
              (r + 0.5) * 100 +
              "% " +
              (i + 0.5) * 100 +
              "%,rgba(255,255,255,0.1) 0%,transparent 60%)"),
            (l.style.opacity = "1"));
        }),
          e.addEventListener("mouseleave", function () {
            ((e.style.transform =
              "perspective(600px) rotateY(0) rotateX(0) scale(1)"),
              (e.style.transition =
                "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)"));
            var t = e.querySelector(".tilt-shine");
            t && (t.style.opacity = "0");
          }));
      }),
      document.querySelectorAll(".mag").forEach(function (e) {
        var t = e.closest(".mag-wrap") || e;
        (t.addEventListener("mousemove", function (t) {
          var n = e.getBoundingClientRect();
          ((e.style.transform =
            "translate(" +
            (t.clientX - n.left - n.width / 2) * 0.36 +
            "px," +
            (t.clientY - n.top - n.height / 2) * 0.36 +
            "px)"),
            (e.style.transition = "transform 0.1s ease"));
        }),
          t.addEventListener("mouseleave", function () {
            ((e.style.transform = "translate(0,0)"),
              (e.style.transition =
                "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)"));
          }));
      }),
      document.querySelectorAll(".faq-item").forEach(function (e) {
        var t = e.querySelector(".faq-q"),
          n = e.querySelector(".faq-body");
        t &&
          n &&
          ((n.style.maxHeight = "0"),
          (n.style.overflow = "hidden"),
          (n.style.transition = "max-height 0.4s ease"),
          t.addEventListener("click", function () {
            var t = e.classList.contains("open");
            if (
              (document
                .querySelectorAll(".faq-item.open")
                .forEach(function (e) {
                  (e.classList.remove("open"),
                    (e.querySelector(".faq-body").style.maxHeight = "0"));
                  var t = e.querySelector(".faq-icon i");
                  t && (t.className = "fas fa-plus");
                }),
              !t)
            ) {
              (e.classList.add("open"),
                (n.style.maxHeight = n.scrollHeight + "px"));
              var r = e.querySelector(".faq-icon i");
              r && (r.className = "fas fa-minus");
            }
          }));
      }));
  }));
