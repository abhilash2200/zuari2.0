function openPlanTab(e, t) {
  let n = document.getElementsByClassName("plan-tab-content");
  for (let e = 0; e < n.length; e++)
    ((n[e].style.display = "none"),
      n[e].classList.remove("opacity-100"),
      n[e].classList.add("opacity-0"));
  let o = document.getElementsByClassName("plan-tab-btn"),
    a = document.getElementsByClassName("plan-tab-arrow");
  for (let e = 0; e < o.length; e++)
    (o[e].classList.remove(
      "bg-[#ebd373]",
      "bg-gradient-to-r",
      "from-[#ebd373]",
      "to-yellow-600",
      "text-[#111]",
      "border-transparent",
      "font-semibold",
    ),
      o[e].classList.add(
        "bg-transparent",
        "text-gray-400",
        "border-[#ebd373]/40",
      ),
      o[e].className.includes("hover:border-[#ebd373]") ||
        o[e].classList.add("hover:border-[#ebd373]", "hover:text-white"),
      a[e].classList.add("hidden"));
  let s = document.getElementById(t);
  ((s.style.display = "block"),
    setTimeout(() => {
      (s.classList.remove("opacity-0"),
        s.classList.add("opacity-100"),
        ScrollTrigger.refresh());
    }, 50));
  let l = e.currentTarget;
  (l.classList.remove(
    "hover:border-[#ebd373]",
    "hover:text-white",
    "bg-transparent",
    "text-gray-400",
    "border-[#ebd373]/40",
  ),
    l.classList.add(
      "bg-gradient-to-r",
      "from-[#ebd373]",
      "to-yellow-600",
      "text-[#111]",
      "border-transparent",
      "font-semibold",
    ),
    l.querySelector(".plan-tab-arrow").classList.remove("hidden"));
}
function openAmenityTab(e, t, n) {
  document.getElementById("amenity-title-display").innerText = n;
  let o = document.getElementsByClassName("amenity-tab-content");
  for (let e = 0; e < o.length; e++)
    ((o[e].style.display = "none"),
      o[e].classList.remove("opacity-100"),
      o[e].classList.add("opacity-0"));
  let a = document.getElementsByClassName("amenity-tab-btn"),
    s = document.getElementsByClassName("amenity-tab-arrow");
  for (let e = 0; e < a.length; e++)
    (a[e].classList.remove(
      "bg-[#ebd373]",
      "bg-gradient-to-r",
      "from-[#ebd373]",
      "to-yellow-600",
      "text-[#111]",
    ),
      a[e].classList.add("bg-transparent", "text-gray-400"),
      a[e].className.includes("hover:bg-gray-800/50") ||
        a[e].classList.add("hover:bg-gray-800/50", "hover:text-white"),
      s[e].classList.add("hidden"));
  let l = document.getElementById(t);
  ((l.style.display = "block"),
    setTimeout(() => {
      (l.classList.remove("opacity-0"),
        l.classList.add("opacity-100"),
        ScrollTrigger.refresh());
    }, 50));
  let d = e.currentTarget;
  (d.classList.remove(
    "hover:bg-gray-800/50",
    "hover:text-white",
    "bg-transparent",
    "text-gray-400",
  ),
    d.classList.add(
      "bg-gradient-to-r",
      "from-[#ebd373]",
      "to-yellow-600",
      "text-[#111]",
    ),
    d.querySelector(".amenity-tab-arrow").classList.remove("hidden"));
}
function handleMobileAmenityChange(e) {
  let t = e.target,
    n = t.options[t.selectedIndex],
    o = n.value,
    a = n.getAttribute("data-title");
  document.getElementById("amenity-title-display").innerText = a;
  let s = document.getElementsByClassName("amenity-tab-content");
  for (let e = 0; e < s.length; e++)
    ((s[e].style.display = "none"),
      s[e].classList.remove("opacity-100"),
      s[e].classList.add("opacity-0"));
  let l = document.getElementById(o);
  ((l.style.display = "block"),
    setTimeout(() => {
      (l.classList.remove("opacity-0"),
        l.classList.add("opacity-100"),
        "undefined" != typeof ScrollTrigger && ScrollTrigger.refresh());
    }, 50));
}
function openLocTab(e, t) {
  let n = document.getElementsByClassName("loc-tab-content");
  for (let e = 0; e < n.length; e++)
    ((n[e].style.display = "none"),
      n[e].classList.remove("opacity-100"),
      n[e].classList.add("opacity-0"));
  let o = document.getElementsByClassName("loc-tab-btn"),
    a = document.getElementsByClassName("loc-tab-arrow");
  for (let e = 0; e < o.length; e++)
    (o[e].classList.remove(
      "bg-[#ebd373]",
      "bg-gradient-to-r",
      "from-[#ebd373]",
      "to-yellow-600",
      "text-[#111]",
      "border-transparent",
      "font-semibold",
    ),
      o[e].classList.add(
        "bg-transparent",
        "text-gray-400",
        "border-[#ebd373]/40",
      ),
      o[e].className.includes("hover:border-[#ebd373]") ||
        o[e].classList.add("hover:border-[#ebd373]", "hover:text-white"),
      a[e].classList.add("hidden"));
  let s = document.getElementById(t);
  ((s.style.display = "block"),
    setTimeout(() => {
      (s.classList.remove("opacity-0"),
        s.classList.add("opacity-100"),
        ScrollTrigger.refresh());
    }, 50));
  let l = e.currentTarget;
  (l.classList.remove(
    "hover:border-[#ebd373]",
    "hover:text-white",
    "bg-transparent",
    "text-gray-400",
    "border-[#ebd373]/40",
  ),
    l.classList.add(
      "bg-gradient-to-r",
      "from-[#ebd373]",
      "to-yellow-600",
      "text-[#111]",
      "border-transparent",
      "font-semibold",
    ),
    l.querySelector(".loc-tab-arrow").classList.remove("hidden"));
}
function handleMobileLocChange(e) {
  let t = e.target,
    n = t.options[t.selectedIndex].value,
    o = document.getElementsByClassName("loc-tab-content");
  for (let e = 0; e < o.length; e++)
    ((o[e].style.display = "none"),
      o[e].classList.remove("opacity-100"),
      o[e].classList.add("opacity-0"));
  let a = document.getElementById(n);
  ((a.style.display = "block"),
    setTimeout(() => {
      (a.classList.remove("opacity-0"),
        a.classList.add("opacity-100"),
        "undefined" != typeof ScrollTrigger && ScrollTrigger.refresh());
    }, 50));
}
function handleMobileGalChange(e) {
  let t = e.target,
    n = t.options[t.selectedIndex].value,
    o = document.getElementsByClassName("gal-tab-content");
  for (let e = 0; e < o.length; e++)
    ((o[e].style.display = "none"),
      o[e].classList.remove("opacity-100"),
      o[e].classList.add("opacity-0"));
  let a = document.getElementById(n);
  ((a.style.display = "block"),
    setTimeout(() => {
      (a.classList.remove("opacity-0"),
        a.classList.add("opacity-100"),
        "undefined" != typeof ScrollTrigger && ScrollTrigger.refresh());
    }, 50));
}
function openGalTab(e, t) {
  let n = document.getElementsByClassName("gal-tab-content");
  for (let e = 0; e < n.length; e++)
    ((n[e].style.display = "none"),
      n[e].classList.remove("opacity-100"),
      n[e].classList.add("opacity-0"));
  let o = document.getElementsByClassName("gal-tab-btn"),
    a = document.getElementsByClassName("gal-tab-arrow");
  for (let e = 0; e < o.length; e++)
    ((o[e].className = o[e].className
      .replace("bg-[#ebd373]", "bg-transparent")
      .replace("text-[#111]", "text-gray-400")
      .replace("border-transparent", "border-[#ebd373]/40")),
      o[e].className.includes("hover:border-[#ebd373]") ||
        (o[e].className += " hover:border-[#ebd373] hover:text-white"),
      a[e].classList.add("hidden"));
  let s = document.getElementById(t);
  ((s.style.display = "block"),
    setTimeout(() => {
      (s.classList.remove("opacity-0"),
        s.classList.add("opacity-100"),
        ScrollTrigger.refresh());
    }, 50));
  let l = e.currentTarget;
  ((l.className = l.className
    .replace("hover:border-[#ebd373]", "")
    .replace("hover:text-white", "")
    .replace("bg-transparent", "bg-[#ebd373]")
    .replace("text-gray-400", "text-[#111]")
    .replace("border-[#ebd373]/40", "border-transparent")),
    l.querySelector(".gal-tab-arrow").classList.remove("hidden"));
}
document.addEventListener("DOMContentLoaded", function () {
  let e = new Lenis({
    duration: 1.2,
    easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: !0,
    mouseMultiplier: 1,
    smoothTouch: !1,
    touchMultiplier: 2,
  });
  ((window.lenis = e),
    requestAnimationFrame(function t(n) {
      (e.raf(n), requestAnimationFrame(t));
    }),
    document.querySelectorAll('a[href^="#"]').forEach((t) => {
      t.addEventListener("click", function (t) {
        (t.preventDefault(),
          e.scrollTo(this.getAttribute("href"), { offset: -80 }));
      });
    }),
    gsap.registerPlugin(ScrollTrigger),
    e.on("scroll", ScrollTrigger.update),
    gsap.ticker.add((t) => {
      e.raf(1e3 * t);
    }),
    gsap.ticker.lagSmoothing(0));
  const d = document.querySelectorAll(".custom-gallery-item"),
    i = document.getElementById("custom-lightbox"),
    r = document.getElementById("lb-img"),
    c = document.getElementById("lb-caption"),
    u = document.getElementById("lb-close"),
    p = document.getElementById("lb-prev"),
    m = document.getElementById("lb-next");
  let g = 0,
    y = [];
  function b(e = !1) {
    e
      ? ((r.src = y[g].src),
        (c.innerText = y[g].caption),
        gsap.set(r, { opacity: 1 }))
      : gsap.to(r, {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            ((r.src = y[g].src),
              (c.innerText = y[g].caption),
              gsap.to(r, { opacity: 1, duration: 0.3 }));
          },
        });
  }
  (d.forEach((t, n) => {
    const o = t.getAttribute("href"),
      a = t.querySelector("p")?.innerText || "";
    (y.push({ src: o, caption: a }),
      t.addEventListener("click", (t) => {
        (t.preventDefault(),
          (function (t) {
            ((g = t),
              b(!0),
              gsap.to(i, {
                display: "flex",
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
              }),
              e && e.stop());
          })(n));
      }));
  }),
    u.addEventListener("click", function () {
      (gsap.to(i, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          i.style.display = "none";
        },
      }),
        e && e.start());
    }),
    p.addEventListener("click", () => {
      ((g = (g - 1 + y.length) % y.length), b());
    }),
    m.addEventListener("click", () => {
      ((g = (g + 1) % y.length), b());
    }),
    ScrollTrigger.create({
      trigger: "#nav-wrapper",
      start: "top top",
      end: "+=999999",
      toggleClass: { targets: "#nav-wrapper", className: "is-stuck" },
    }));
  const h = gsap.utils.toArray("#nav-links-container .nav-link");
  h.forEach((e) => {
    const t = e.getAttribute("href");
    if (t && t.startsWith("#")) {
      const n = document.querySelector(t);
      n &&
        ScrollTrigger.create({
          trigger: n,
          start: "top center",
          end: "bottom center",
          onToggle: (t) => {
            t.isActive &&
              (h.forEach((e) => {
                (e.classList.remove("text-[#ebd373]"),
                  e.classList.add("text-gray-400"));
              }),
              e.classList.remove("text-gray-400"),
              e.classList.add("text-[#ebd373]"));
          },
        });
    }
  });
  document.querySelectorAll("[data-gsap]").forEach((e) => {
    const t = e.getAttribute("data-gsap"),
      n = (parseFloat(e.getAttribute("data-delay")) || 0) / 1e3;
    let o = {
      opacity: 0,
      duration: (parseFloat(e.getAttribute("data-duration")) || 1200) / 1e3,
      delay: n,
      ease: "power3.out",
      scrollTrigger: {
        trigger: e,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    };
    switch (t) {
      case "fade-up":
        o.y = 60;
        break;
      case "fade-down":
        o.y = -60;
        break;
      case "fade-left":
        o.x = 60;
        break;
      case "fade-right":
        o.x = -60;
    }
    gsap.from(e, o);
  });
  const E = document.getElementById("popup-form");
  if (E) {
    const e = document.getElementById("popup-country"),
      t = document.getElementById("popup-phone"),
      n = document.getElementById("popup-whatsapp-check"),
      o = document.getElementById("popup-whatsapp-no-field"),
      a = document.getElementById("popup-whatsapp-no"),
      s = document.getElementById("popup-send-otp-btn"),
      l = document.getElementById("popup-submit-first-step-btn"),
      d = document.getElementById("popup-submit-final-btn"),
      i = document.getElementById("popup-otp-step-container"),
      r = document.getElementById("popup-otp"),
      c = document.getElementById("popup-otp-success-msg");
    let u = !1;
    (e.addEventListener("change", function () {
      const e = this.options[this.selectedIndex];
      e && e.getAttribute("data-code");
      "" !== this.value &&
        (this.classList.remove("text-gray-400"),
        this.classList.add("text-white"));
    }),
      n.addEventListener("change", function () {
        this.checked
          ? (gsap.to(o, {
              height: 0,
              opacity: 0,
              duration: 0.3,
              onComplete: () => o.classList.add("hidden"),
            }),
            (a.value = t.value),
            a.removeAttribute("required"))
          : (o.classList.remove("hidden"),
            gsap.fromTo(
              o,
              { height: 0, opacity: 0 },
              { height: "auto", opacity: 1, duration: 0.3 },
            ),
            a.setAttribute("required", "required"));
      }),
      t.addEventListener("input", function () {
        n.checked && (a.value = this.value);
      }),
      s.addEventListener("click", function () {
        const n = t.value;
        if (n.length >= 7 && n.length <= 15 && /^\d+$/.test(n)) {
          ((this.innerText = "OTP Sent!"),
            this.classList.add("bg-green-600/20", "text-green-500"));
          const t = e.options[e.selectedIndex],
            o = t ? t.getAttribute("data-code") : "+91";
          ((c.innerText = "OTP sent to " + o + " " + n + "!"),
            c.classList.remove("hidden"),
            setTimeout(() => {
              ((this.innerText = "Resend OTP"),
                this.classList.remove("bg-green-600/20", "text-green-500"));
            }, 5e3));
        } else alert("Please enter a valid phone number first.");
      }),
      E.addEventListener("submit", function (o) {
        o.preventDefault();
        const s = document.getElementById("popup-email").value,
          p = t.value,
          m = a.value,
          g = document.getElementById("popup-salutation").value,
          y = document.getElementById("popup-preferred-time").value,
          b = document.getElementById("popup-consent-1").checked,
          h = document.getElementById("popup-consent-2").checked;
        let v = [];
        if (
          (g || v.push("Please select a salutation."),
          /^\S+@\S+\.\S+$/.test(s) ||
            v.push("Please enter a valid email address."),
          (p.length < 7 || p.length > 15) &&
            v.push("Please enter a valid phone number."),
          !n.checked &&
            (m.length < 7 || m.length > 15) &&
            v.push("Please enter a valid WhatsApp number."),
          y || v.push("Please select a preferred time to call."),
          (b && h) || v.push("Please accept all consent checkboxes."),
          v.length > 0)
        )
          alert(v.join("\n"));
        else if (!u) {
          ((u = !0),
            i.classList.remove("hidden"),
            i.offsetWidth,
            i.classList.add("opacity-100"),
            l.classList.add("hidden"),
            d.classList.remove("hidden"));
          const t = e.options[e.selectedIndex],
            n = t ? t.getAttribute("data-code") : "+91";
          ((c.innerText = "OTP sent to " + n + " " + p + "!"),
            c.classList.remove("hidden"),
            r.focus());
        }
      }),
      d.addEventListener("click", function () {
        const e = r.value;
        if (6 !== e.length || !/^\d+$/.test(e))
          return void alert(
            "Please enter a valid 6-digit OTP code to verify your mobile number.",
          );
        const t = document.getElementById("popup-btn-text"),
          n = document.getElementById("popup-btn-loader");
        ((d.disabled = !0),
          d.classList.add("opacity-80", "cursor-not-allowed"),
          (t.innerText = "Verifying & Submitting..."),
          n.classList.remove("hidden"),
          setTimeout(() => {
            const e = document.getElementById("popup-full-name").value,
              t = document.getElementById("popup-salutation").value;
            window.location.href = `thank-you.html?salutation=${encodeURIComponent(t)}&name=${encodeURIComponent(e)}`;
          }, 2200));
      }));
  }
});
const mainHeader = document.getElementById("main-header");
(window.addEventListener("scroll", () => {
  window.scrollY > 50 && window.innerWidth < 768
    ? (mainHeader.classList.add(
        "bg-[#111111]/95",
        "backdrop-blur-md",
        "shadow-md",
      ),
      mainHeader.classList.remove("bg-transparent"))
    : (mainHeader.classList.remove(
        "bg-[#111111]/95",
        "backdrop-blur-md",
        "shadow-md",
      ),
      mainHeader.classList.add("bg-transparent"));
}),
  window.addEventListener("resize", () => {
    window.dispatchEvent(new Event("scroll"));
  }));
const mobileMenuBtn = document.getElementById("mobile-menu-btn"),
  closeSidebarBtn = document.getElementById("close-sidebar-btn"),
  mobileSidebar = document.getElementById("mobile-sidebar"),
  sidebarOverlay = document.getElementById("sidebar-overlay"),
  mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
function openSidebar() {
  (mobileSidebar.classList.remove("translate-x-full"),
    sidebarOverlay.classList.remove("hidden"),
    requestAnimationFrame(() => {
      (sidebarOverlay.classList.remove("opacity-0"),
        sidebarOverlay.classList.add("opacity-100"));
    }),
    "undefined" != typeof lenis && lenis.stop());
}
function closeSidebar() {
  (mobileSidebar.classList.add("translate-x-full"),
    sidebarOverlay.classList.remove("opacity-100"),
    sidebarOverlay.classList.add("opacity-0"),
    setTimeout(() => {
      sidebarOverlay.classList.add("hidden");
    }, 300),
    "undefined" != typeof lenis && lenis.start());
}
(mobileMenuBtn && mobileMenuBtn.addEventListener("click", openSidebar),
  closeSidebarBtn && closeSidebarBtn.addEventListener("click", closeSidebar),
  sidebarOverlay && sidebarOverlay.addEventListener("click", closeSidebar),
  mobileNavLinks.forEach((e) => {
    e.addEventListener("click", closeSidebar);
  }));
const enquireModal = document.getElementById("enquire-modal"),
  closePopupBtn = document.getElementById("close-popup-btn"),
  openPopupBtns = document.querySelectorAll(".open-popup-btn");
function openPopup(e) {
  (e && e.preventDefault(),
    enquireModal.classList.remove("hidden"),
    enquireModal.classList.add("flex"),
    requestAnimationFrame(() => {
      (enquireModal.classList.remove("opacity-0"),
        enquireModal.classList.add("opacity-100"));
    }),
    window.lenis && window.lenis.stop());
}
function closePopup() {
  (enquireModal.classList.remove("opacity-100"),
    enquireModal.classList.add("opacity-0"),
    setTimeout(() => {
      (enquireModal.classList.add("hidden"),
        enquireModal.classList.remove("flex"));
    }, 300),
    window.lenis && window.lenis.start());
}
(openPopupBtns.forEach((e) => {
  e.addEventListener("click", openPopup);
}),
  closePopupBtn && closePopupBtn.addEventListener("click", closePopup),
  enquireModal.addEventListener("click", (e) => {
    e.target === enquireModal && closePopup();
  }));
const contentModal = document.getElementById("content-popup-modal");
if (contentModal) {
  const e = document.getElementById("close-content-popup-btn"),
    t = document.querySelectorAll(".open-content-popup-btn");
  function openContentPopup(e) {
    (e && e.preventDefault(),
      contentModal.classList.remove("hidden"),
      contentModal.classList.add("flex"),
      requestAnimationFrame(() => {
        (contentModal.classList.remove("opacity-0"),
          contentModal.classList.add("opacity-100"));
      }),
      window.lenis && window.lenis.stop());
  }
  function closeContentPopup() {
    (contentModal.classList.remove("opacity-100"),
      contentModal.classList.add("opacity-0"),
      setTimeout(() => {
        (contentModal.classList.add("hidden"),
          contentModal.classList.remove("flex"));
      }, 300),
      window.lenis && window.lenis.start());
  }
  (t &&
    t.forEach((e) => {
      e.addEventListener("click", openContentPopup);
    }),
    e && e.addEventListener("click", closeContentPopup),
    contentModal.addEventListener("click", (e) => {
      e.target === contentModal && closeContentPopup();
    }));
}
const playAboutVideoBtn = document.getElementById("play-about-video-btn"),
  videoPopupModal = document.getElementById("video-popup-modal"),
  popupVideoPlayer = document.getElementById("popup-video-player"),
  videoModalClose = document.getElementById("video-modal-close");
if (
  playAboutVideoBtn &&
  videoPopupModal &&
  popupVideoPlayer &&
  videoModalClose
) {
  function closeVideoModal() {
    (gsap.to(videoPopupModal, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        ((videoPopupModal.style.display = "none"),
          popupVideoPlayer.pause(),
          (popupVideoPlayer.currentTime = 0));
      },
    }),
      window.lenis && window.lenis.start());
  }
  (playAboutVideoBtn.addEventListener("click", function (e) {
    (e.preventDefault(),
      videoPopupModal.classList.remove("hidden"),
      gsap.set(videoPopupModal, { display: "flex" }),
      gsap.to(videoPopupModal, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      }),
      popupVideoPlayer.play(),
      window.lenis && window.lenis.stop());
  }),
    videoModalClose.addEventListener("click", closeVideoModal),
    videoPopupModal.addEventListener("click", function (e) {
      e.target === videoPopupModal && closeVideoModal();
    }));
}
document.addEventListener("DOMContentLoaded", function () {
  const e = document.querySelectorAll(".lazy-map");
  if ("IntersectionObserver" in window) {
    const t = new IntersectionObserver(
      (e, t) => {
        e.forEach((e) => {
          if (e.isIntersecting) {
            const n = e.target,
              o = n.getAttribute("data-src");
            (o && (n.setAttribute("src", o), n.removeAttribute("data-src")),
              t.unobserve(n));
          }
        });
      },
      { rootMargin: "300px" },
    );
    e.forEach((e) => {
      t.observe(e);
    });
  } else
    e.forEach((e) => {
      const t = e.getAttribute("data-src");
      t && (e.setAttribute("src", t), e.removeAttribute("data-src"));
    });
});
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const aboutLeft = document.getElementById("about-sticky-inner");
    const aboutGrid = document.getElementById("about-kinetix-grid");
    if (
      aboutLeft &&
      aboutGrid &&
      window.innerWidth >= 1024 &&
      typeof ScrollTrigger !== "undefined"
    ) {
      ScrollTrigger.create({
        trigger: aboutLeft,
        start: "top 128px",
        endTrigger: aboutGrid,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    }
  }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
  const stickyImg = document.getElementById("about-sticky-img");
  const h3Elements = document.querySelectorAll(".about-section-h3");

  if (
    stickyImg &&
    h3Elements.length > 0 &&
    typeof ScrollTrigger !== "undefined"
  ) {
    h3Elements.forEach((h3, index) => {
      if (index === 0) return;
      ScrollTrigger.create({
        trigger: h3,
        start: "top 15%",
        onEnter: (self) => updateImg(h3, self.direction),
        onLeaveBack: (self) => {
          updateImg(h3Elements[index - 1], self.direction);
        },
      });
    });

    let currentAnim = null;

    function updateImg(el, direction) {
      const newSrc = el.getAttribute("data-img");
      if (newSrc && stickyImg.getAttribute("src") !== newSrc) {
        if (currentAnim) {
          currentAnim.kill();
          const extras = stickyImg.parentNode.querySelectorAll(
            "img:not(#about-sticky-img)",
          );
          extras.forEach((img) => img.remove());
          gsap.set(stickyImg, { yPercent: 0 });
        }

        // Determine slide directions based on scroll direction
        const isScrollingDown = direction === 1;
        const newYStart = isScrollingDown ? 100 : -100;
        const oldYEnd = isScrollingDown ? -100 : 100;

        const parent = stickyImg.parentNode;
        const newImg = document.createElement("img");
        newImg.src = newSrc;
        newImg.className = stickyImg.className;

        gsap.set(newImg, { yPercent: newYStart, zIndex: 20 });
        gsap.set(stickyImg, { zIndex: 10 });

        parent.appendChild(newImg);

        // Pure slide, no fade!
        gsap.to(stickyImg, {
          yPercent: oldYEnd,
          duration: 0.8,
          ease: "power3.inOut",
        });

        currentAnim = gsap.to(newImg, {
          yPercent: 0,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => {
            stickyImg.setAttribute("src", newSrc);
            gsap.set(stickyImg, { yPercent: 0, zIndex: 10 });
            newImg.remove();
            currentAnim = null;
          },
        });
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const tSlides = document.querySelectorAll(".trust-slide");
  const tPagination = document.getElementById("trust-pagination");

  if (tSlides.length > 0) {
    let timeoutId;
    let currentSlide = 0;
    const dots = [];

    // Create pagination dots
    if (tPagination) {
      tSlides.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.className =
          "w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-yellow-500 transition-all duration-300 block p-0 m-0 cursor-pointer focus:outline-none " +
          (index === 0 ? "bg-[#eab308]" : "");
        dot.onclick = () => goToSlide(index);
        tPagination.appendChild(dot);
        dots.push(dot);
      });
    }

    function goToSlide(index) {
      if (index === currentSlide) return;
      clearTimeout(timeoutId);

      let prevSlide = currentSlide;
      currentSlide = index;

      if (dots.length > 0) {
        dots[prevSlide].classList.remove("bg-[#eab308]");
        dots[currentSlide].classList.add("bg-[#eab308]");
      }

      // Animate out previous slide
      gsap.to(tSlides[prevSlide], {
        xPercent: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
      });

      // Set up and animate in new slide
      gsap.set(tSlides[currentSlide], { xPercent: 100, opacity: 0 });
      gsap.to(tSlides[currentSlide], {
        xPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.inOut",
      });

      timeoutId = setTimeout(
        () => goToSlide((currentSlide + 1) % tSlides.length),
        4000,
      );
    }

    // Initialize first slide
    gsap.set(tSlides, { opacity: 0, xPercent: 100 });
    gsap.set(tSlides[0], { opacity: 1, xPercent: 0 });

    timeoutId = setTimeout(() => goToSlide(1), 4000);
  }
});

function openPhaseTab(e, tabId) {
  let contents = document.getElementsByClassName("phase-tab-content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
    contents[i].classList.remove("opacity-100");
    contents[i].classList.add("opacity-0");
  }

  let btns = document.getElementsByClassName("phase-tab-btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove("bg-[#ebd373]", "text-[#111]");
    btns[i].classList.add("bg-transparent", "text-gray-400");
  }

  let targetContent = document.getElementById(tabId);
  if (targetContent) {
    targetContent.style.display = "block";
    setTimeout(() => {
      targetContent.classList.remove("opacity-0");
      targetContent.classList.add("opacity-100");
      if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
    }, 50);
  }

  let currentBtn = e.currentTarget;
  if (currentBtn) {
    currentBtn.classList.remove("bg-transparent", "text-gray-400");
    currentBtn.classList.add("bg-[#ebd373]", "text-[#111]");
  }
}
