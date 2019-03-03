"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      n.d(o, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 3);
}([function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "next", function () {
    return s;
  }), n.d(t, "prev", function () {
    return c;
  }), n.d(t, "nextSlide", function () {
    return l;
  }), n.d(t, "prevSlide", function () {
    return u;
  });
  var o = 0;

  var r = document.querySelector(".holder"),
      i = r.querySelectorAll(".slide"),
      s = document.querySelector(".next"),
      c = document.querySelector(".prev"),
      a = function a(e) {
    var t = 100 * -e + "vw";
    r.style.left = t;
  },
      l = function l() {
    (o += 1) > i.length - 1 && (o = 0), a(o);
  },
      u = function u() {
    (o -= 1) < 0 && (o = i.length - 1), a(o);
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "accordion", function () {
    return r;
  }), n.d(t, "scheduleInfo", function () {
    return i;
  });

  var o = document.querySelectorAll(".acc-content"),
      r = function r() {
    o.forEach(function (e) {
      e.addEventListener("click", function () {
        var t = e.querySelector(".plus"),
            n = e.nextElementSibling;
        n.classList.toggle("panel-open"), n.classList.contains("panel-open") ? t.innerHTML = "<img src='img/minus.svg'>" : t.innerHTML = "<img src='img/plus.svg'>";
      });
    });
  },
      i = [{
    info: '<h3 class="white pd-btm-2">Intelligent Experiences</h3>\n                <p class="white pd-btm-5">10AM - Room 1 - <span class="bold">XpandIt</span></p>\n                <h3 class="white pd-btm-2">Big Trucks, Big Data</h3>\n                <p class="white pd-btm-5">10:30AM - Room 1 - <span class="bold">Tech+Data Hub</span></p>\n                <h3 class="white pd-btm-2">Welcome to the New Human Era</h3>\n                <p class="white pd-btm-5">11:30AM - Room 1 - <span class="bold">Everis</span></p>'
  }, {
    info: '<h3 class="white pd-btm-2">Bing Wei</h3>\n                <p class="white pd-btm-2"><span class="bold">Staff Engineer @ Slack</span> - 3PM - Auditorium</p>\n                <p class="white pd-btm-5">Slack - a communication and collaboration platform - has\n                been fortunate to experience exponential user growth since its launch in 2014. Some of its initial \n                design decisions, centered on small teams, became liabilities when we had to support hundreds of \n                thousands of users communicating with each other. In this talk, you’ll hear how re-architecting the \n                system with lazy loading, a publish/subscribe model and an edge cache service overcame the problem \n                with improved performance and reliability. I’ll discuss the challenges and pain points we ran into, \n                how we innovated when new usage patterns emerged, and ongoing optimization to the service.</p>\n                <h3 class="white pd-btm-2">Diana Kelley</h3>\n                <p class="white pd-btm-2"><span class="bold">Cybersecurity Field CTO @ Microsoft</span> - 3PM - \n                Auditorium</p>\n                <p class="white pd-btm-5">Insights from Microsoft on the latest cybersecurity threats and trends.</p>\n                <h3 class="white pd-btm-2">António Gameiro Marques</h3>\n                <p class="white pd-btm-2"><span class="bold">Director @ Portugal\'s National Security Office</span> \n                - 3PM - Auditorium</p>\n                <p class="white pd-btm-5">During the presentation, a brief description of the forthcoming National \n                Cyberspace Security Strategy will be done and the importance of the human factor has the most \n                fragile element in cyberspace will be addressed. The national cybersecurity ecosystem will be \n                described, including the national cybersecurity framework and the associated deliverables to \n                contribute to the digital resilience of the Portuguese society.</p>'
  }, {
    info: '<h3 class="white pd-btm-2">André Guilhoto</h3>\n                <p class="white pd-btm-5"><span class="bold">Head Coach, League of Legends @ Origen</span> - 2PM \n                - Auditorium</p>\n                <h3 class="white pd-btm-2">Scott Warner</h3>\n                <p class="white pd-btm-5"><span class="bold">Game Director @ Ubisoft</span> - 3PM \n                - Auditorium</p>\n                <h3 class="white pd-btm-2">Philippe Renaud</h3>\n                <p class="white pd-btm-5"><span class="bold">Senior User Experience Researcher @ EA</span> - 3PM \n                - Auditorium</p>'
  }];
}, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "toggleMenu", function () {
    return i;
  });

  var o = document.querySelector(".menu-icon"),
      r = document.querySelector(".mobile-menu"),
      i = function i() {
    o.addEventListener("click", function (e) {
      e.preventDefault(), r.classList.toggle("open-menu"), r.classList.contains("open-menu") ? (o.style.transform = "rotate(90deg)", o.style.background = "#fff") : (o.style.transform = "rotate(0deg)", o.style.background = "none");
    });
  };
}, function (e, t, n) {
  n(4), n(2), n(1), e.exports = n(0);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var o = n(2),
      r = n(1),
      i = n(0);
  Object(o.toggleMenu)(), document.querySelectorAll(".sm-scroll").forEach(function (e) {
    e.addEventListener("click", function (t) {
      t.preventDefault();
      var n = e.getAttribute("href");
      document.querySelector(n).scrollIntoView({
        behavior: "smooth"
      });
    });
  }), Object(r.accordion)(), document.querySelectorAll(".panel-menu a").forEach(function (e, t) {
    e.addEventListener("click", function () {
      document.querySelector(".panel-content").innerHTML = r.scheduleInfo[t].info;
    });
  }), i.next.addEventListener("click", function () {
    Object(i.nextSlide)();
  }), i.prev.addEventListener("click", function () {
    Object(i.prevSlide)();
  });
}]);