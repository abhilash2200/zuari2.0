document.addEventListener("DOMContentLoaded", function () {
  // ----------------------------------------------------
  // Hero Carousel Logic
  // ----------------------------------------------------
  const heroSlides = document.querySelectorAll(".gsap-hero-slide");
  const customPagination = document.getElementById("custom-pagination");

  if (heroSlides.length > 0 && customPagination) {
    let slideTimeout;
    let currentSlide = 0;

    // Create pagination dots
    heroSlides.forEach((slide, index) => {
      let dot = document.createElement("button");
      dot.className =
        "w-3 h-3 rounded-full border border-yellow-500 transition-all duration-300 block p-0 m-0 cursor-pointer focus:outline-none " +
        (index === 0 ? "bg-[#eab308]" : "");
      dot.onclick = () => goToSlide(index);
      customPagination.appendChild(dot);
    });

    const dots = customPagination.querySelectorAll("button");

    function goToSlide(index) {
      if (index === currentSlide) return;
      clearTimeout(slideTimeout);

      let prevSlide = currentSlide;
      currentSlide = index;

      dots[prevSlide].classList.remove("bg-[#eab308]");
      dots[currentSlide].classList.add("bg-[#eab308]");

      gsap.to(heroSlides[prevSlide], {
        xPercent: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
      });
      gsap.set(heroSlides[currentSlide], {
        xPercent: 100,
        opacity: 0,
        scale: 1,
      });
      gsap.to(heroSlides[currentSlide], {
        xPercent: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
      });
      gsap.to(heroSlides[currentSlide], {
        scale: 1.05,
        duration: 6,
        ease: "none",
      });

      slideTimeout = setTimeout(
        () => goToSlide((currentSlide + 1) % heroSlides.length),
        5000,
      );
    }

    gsap.set(heroSlides[0], { opacity: 1, scale: 1, xPercent: 0 });
    gsap.to(heroSlides[0], { scale: 1.05, duration: 6, ease: "none" });
    slideTimeout = setTimeout(() => goToSlide(1), 5000);
  }

  // ----------------------------------------------------
  // Hero Callback Form Logic
  // ----------------------------------------------------
  const closeHeroCallbackBtn = document.getElementById(
    "close-hero-callback-btn",
  );
  const heroCallbackContainer = document.getElementById(
    "hero-callback-container",
  );

  if (closeHeroCallbackBtn && heroCallbackContainer) {
    closeHeroCallbackBtn.addEventListener("click", function () {
      heroCallbackContainer.classList.add("hidden");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const L = document.getElementById("callback-form");
  if (L) {
    const e = document.getElementById("country"),
      t = document.getElementById("phone"),
      n = document.getElementById("whatsapp-check"),
      o = document.getElementById("whatsapp-no-field"),
      a = document.getElementById("whatsapp-no"),
      s = document.getElementById("send-otp-btn");

    e.addEventListener("change", function () {
      const e = this.options[this.selectedIndex];
      if (e) e.getAttribute("data-code");
      if ("" !== this.value) {
        this.classList.remove("text-gray-400");
        this.classList.add("text-white");
      }
    });

    n.addEventListener("change", function () {
      if (this.checked) {
        gsap.to(o, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          onComplete: () => o.classList.add("hidden"),
        });
        a.value = t.value;
        a.removeAttribute("required");
      } else {
        o.classList.remove("hidden");
        gsap.fromTo(
          o,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3 },
        );
        a.setAttribute("required", "required");
      }
    });

    t.addEventListener("input", function () {
      if (n.checked) a.value = this.value;
    });

    const l = document.getElementById("submit-first-step-btn"),
      d = document.getElementById("submit-final-btn"),
      i = document.getElementById("otp-step-container"),
      r = document.getElementById("otp"),
      c = document.getElementById("otp-success-msg");
    let u = !1;

    s.addEventListener("click", function () {
      const n = t.value;
      if (n.length >= 7 && n.length <= 15 && /^\d+$/.test(n)) {
        this.innerText = "OTP Sent!";
        this.classList.add("bg-green-600/20", "text-green-500");
        const opt = e.options[e.selectedIndex];
        const code = opt ? opt.getAttribute("data-code") : "+91";
        c.innerText = "OTP sent to " + code + " " + n + "!";
        c.classList.remove("hidden");
        setTimeout(() => {
          this.innerText = "Resend OTP";
          this.classList.remove("bg-green-600/20", "text-green-500");
        }, 5e3);
      } else {
        alert("Please enter a valid phone number first.");
      }
    });

    L.addEventListener("submit", function (ev) {
      ev.preventDefault();
      const email = document.getElementById("email").value,
        phone = t.value,
        whatsapp = a.value,
        salutation = document.getElementById("salutation").value,
        prefTime = document.getElementById("preferred-time").value,
        c1 = document.getElementById("consent-1").checked,
        c2 = document.getElementById("consent-2").checked;
      let errs = [];

      if (!salutation) errs.push("Please select a salutation.");
      if (!/^\S+@\S+\.\S+$/.test(email))
        errs.push("Please enter a valid email address.");
      if (phone.length < 7 || phone.length > 15)
        errs.push("Please enter a valid phone number.");
      if (!n.checked && (whatsapp.length < 7 || whatsapp.length > 15))
        errs.push("Please enter a valid WhatsApp number.");
      if (!prefTime) errs.push("Please select a preferred time to call.");
      if (!(c1 && c2)) errs.push("Please accept all consent checkboxes.");

      if (errs.length > 0) {
        alert(errs.join("\n"));
      } else if (!u) {
        u = !0;
        i.classList.remove("hidden");
        i.offsetWidth;
        i.classList.add("opacity-100");
        l.classList.add("hidden");
        d.classList.remove("hidden");

        const opt = e.options[e.selectedIndex];
        const code = opt ? opt.getAttribute("data-code") : "+91";
        c.innerText = "OTP sent to " + code + " " + phone + "!";
        c.classList.remove("hidden");
        r.focus();
      }
    });

    d.addEventListener("click", function () {
      const otpVal = r.value;
      if (6 !== otpVal.length || !/^\d+$/.test(otpVal)) {
        alert(
          "Please enter a valid 6-digit OTP code to verify your mobile number.",
        );
        return;
      }
      const btnText = document.getElementById("btn-text"),
        btnLoader = document.getElementById("btn-loader");
      d.disabled = !0;
      d.classList.add("opacity-80", "cursor-not-allowed");
      btnText.innerText = "Verifying & Submitting...";
      btnLoader.classList.remove("hidden");

      setTimeout(() => {
        const fullName = document.getElementById("full-name").value,
          salutation = document.getElementById("salutation").value;
        window.location.href = `thank-you.html?salutation=${encodeURIComponent(salutation)}&name=${encodeURIComponent(fullName)}`;
      }, 2200);
    });

    document.querySelectorAll("#callback-form select").forEach((sel) => {
      sel.addEventListener("change", function () {
        if (this.value) {
          this.classList.remove("text-gray-400");
          this.classList.add("text-white");
        }
      });
    });
  }
});
