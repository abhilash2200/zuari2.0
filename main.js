// -----------------------------------------------------------------
// Tab Logics (With ScrollTrigger Refresh)
// -----------------------------------------------------------------
function openPlanTab(evt, tabId) {
    let tabContents = document.getElementsByClassName("plan-tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("opacity-100");
        tabContents[i].classList.add("opacity-0");
    }

    let tabBtns = document.getElementsByClassName("plan-tab-btn");
    let tabArrows = document.getElementsByClassName("plan-tab-arrow");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("bg-[#ebd373]", "bg-gradient-to-r", "from-[#ebd373]", "to-yellow-600", "text-[#111]", "border-transparent", "font-semibold");
        tabBtns[i].classList.add("bg-transparent", "text-gray-400", "border-[#ebd373]/40");
        if (!tabBtns[i].className.includes("hover:border-[#ebd373]")) {
            tabBtns[i].classList.add("hover:border-[#ebd373]", "hover:text-white");
        }
        tabArrows[i].classList.add("hidden");
    }

    let activeTabContent = document.getElementById(tabId);
    activeTabContent.style.display = "block";
    setTimeout(() => {
        activeTabContent.classList.remove("opacity-0");
        activeTabContent.classList.add("opacity-100");
        ScrollTrigger.refresh();
    }, 50);

    let clickedBtn = evt.currentTarget;
    clickedBtn.classList.remove("hover:border-[#ebd373]", "hover:text-white", "bg-transparent", "text-gray-400", "border-[#ebd373]/40");
    clickedBtn.classList.add("bg-gradient-to-r", "from-[#ebd373]", "to-yellow-600", "text-[#111]", "border-transparent", "font-semibold");
    clickedBtn.querySelector('.plan-tab-arrow').classList.remove("hidden");
}

function openAmenityTab(evt, tabId, titleName) {
    document.getElementById("amenity-title-display").innerText = titleName;

    let tabContents = document.getElementsByClassName("amenity-tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("opacity-100");
        tabContents[i].classList.add("opacity-0");
    }

    let tabBtns = document.getElementsByClassName("amenity-tab-btn");
    let tabArrows = document.getElementsByClassName("amenity-tab-arrow");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("bg-[#ebd373]", "bg-gradient-to-r", "from-[#ebd373]", "to-yellow-600", "text-[#111]");
        tabBtns[i].classList.add("bg-transparent", "text-gray-400");
        if (!tabBtns[i].className.includes("hover:bg-gray-800/50")) {
            tabBtns[i].classList.add("hover:bg-gray-800/50", "hover:text-white");
        }
        tabArrows[i].classList.add("hidden");
    }

    let activeTabContent = document.getElementById(tabId);
    activeTabContent.style.display = "block";
    setTimeout(() => {
        activeTabContent.classList.remove("opacity-0");
        activeTabContent.classList.add("opacity-100");
        ScrollTrigger.refresh();
    }, 50);

    let clickedBtn = evt.currentTarget;
    clickedBtn.classList.remove("hover:bg-gray-800/50", "hover:text-white", "bg-transparent", "text-gray-400");
    clickedBtn.classList.add("bg-gradient-to-r", "from-[#ebd373]", "to-yellow-600", "text-[#111]");
    clickedBtn.querySelector('.amenity-tab-arrow').classList.remove("hidden");
}

function handleMobileAmenityChange(evt) {
    let select = evt.target;
    let selectedOption = select.options[select.selectedIndex];
    let tabId = selectedOption.value;
    let titleName = selectedOption.getAttribute('data-title');

    document.getElementById("amenity-title-display").innerText = titleName;

    let tabContents = document.getElementsByClassName("amenity-tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("opacity-100");
        tabContents[i].classList.add("opacity-0");
    }

    let activeTabContent = document.getElementById(tabId);
    activeTabContent.style.display = "block";
    setTimeout(() => {
        activeTabContent.classList.remove("opacity-0");
        activeTabContent.classList.add("opacity-100");
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }, 50);
}

function openLocTab(evt, tabId) {
    let tabContents = document.getElementsByClassName("loc-tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("opacity-100");
        tabContents[i].classList.add("opacity-0");
    }

    let tabBtns = document.getElementsByClassName("loc-tab-btn");
    let tabArrows = document.getElementsByClassName("loc-tab-arrow");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("bg-[#ebd373]", "bg-gradient-to-r", "from-[#ebd373]", "to-yellow-600", "text-[#111]", "border-transparent", "font-semibold");
        tabBtns[i].classList.add("bg-transparent", "text-gray-400", "border-[#ebd373]/40");
        if (!tabBtns[i].className.includes("hover:border-[#ebd373]")) {
            tabBtns[i].classList.add("hover:border-[#ebd373]", "hover:text-white");
        }
        tabArrows[i].classList.add("hidden");
    }

    let activeTabContent = document.getElementById(tabId);
    activeTabContent.style.display = "block";
    setTimeout(() => {
        activeTabContent.classList.remove("opacity-0");
        activeTabContent.classList.add("opacity-100");
        ScrollTrigger.refresh();
    }, 50);

    let clickedBtn = evt.currentTarget;
    clickedBtn.classList.remove("hover:border-[#ebd373]", "hover:text-white", "bg-transparent", "text-gray-400", "border-[#ebd373]/40");
    clickedBtn.classList.add("bg-gradient-to-r", "from-[#ebd373]", "to-yellow-600", "text-[#111]", "border-transparent", "font-semibold");
    clickedBtn.querySelector('.loc-tab-arrow').classList.remove("hidden");
}

function handleMobileLocChange(evt) {
    let select = evt.target;
    let selectedOption = select.options[select.selectedIndex];
    let tabId = selectedOption.value;

    let tabContents = document.getElementsByClassName("loc-tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("opacity-100");
        tabContents[i].classList.add("opacity-0");
    }

    let activeTabContent = document.getElementById(tabId);
    activeTabContent.style.display = "block";
    setTimeout(() => {
        activeTabContent.classList.remove("opacity-0");
        activeTabContent.classList.add("opacity-100");
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }, 50);
}

function handleMobileGalChange(evt) {
    let select = evt.target;
    let selectedOption = select.options[select.selectedIndex];
    let tabId = selectedOption.value;

    let tabContents = document.getElementsByClassName("gal-tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("opacity-100");
        tabContents[i].classList.add("opacity-0");
    }

    let activeTabContent = document.getElementById(tabId);
    activeTabContent.style.display = "block";
    setTimeout(() => {
        activeTabContent.classList.remove("opacity-0");
        activeTabContent.classList.add("opacity-100");
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }, 50);
}

function openGalTab(evt, tabId) {
    let tabContents = document.getElementsByClassName("gal-tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("opacity-100");
        tabContents[i].classList.add("opacity-0");
    }

    let tabBtns = document.getElementsByClassName("gal-tab-btn");
    let tabArrows = document.getElementsByClassName("gal-tab-arrow");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].className = tabBtns[i].className.replace("bg-[#ebd373]", "bg-transparent").replace("text-[#111]", "text-gray-400").replace("border-transparent", "border-[#ebd373]/40");
        if (!tabBtns[i].className.includes("hover:border-[#ebd373]")) tabBtns[i].className += " hover:border-[#ebd373] hover:text-white";
        tabArrows[i].classList.add("hidden");
    }

    let activeTabContent = document.getElementById(tabId);
    activeTabContent.style.display = "block";
    setTimeout(() => {
        activeTabContent.classList.remove("opacity-0");
        activeTabContent.classList.add("opacity-100");
        ScrollTrigger.refresh();
    }, 50);

    let clickedBtn = evt.currentTarget;
    clickedBtn.className = clickedBtn.className.replace("hover:border-[#ebd373]", "").replace("hover:text-white", "").replace("bg-transparent", "bg-[#ebd373]").replace("text-gray-400", "text-[#111]").replace("border-[#ebd373]/40", "border-transparent");
    clickedBtn.querySelector('.gal-tab-arrow').classList.remove("hidden");
}

// Initialize Engine
document.addEventListener('DOMContentLoaded', function () {

    // 1. Lenis Smooth Scrolling
    let lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });
    window.lenis = lenis;

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            lenis.scrollTo(this.getAttribute('href'), { offset: -80 });
        });
    });

    // 2. GSAP ScrollTrigger Registration
    gsap.registerPlugin(ScrollTrigger);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    // 3. Custom GSAP Hero Carousel
    const heroSlides = document.querySelectorAll('.gsap-hero-slide');
    const dotsContainer = document.getElementById('custom-pagination');
    let currentSlide = 0;
    let slideTimer;

    // Generate dots dynamically
    heroSlides.forEach((_, i) => {
        let dot = document.createElement('button');
        dot.className = `w-3 h-3 rounded-full border border-yellow-500 transition-all duration-300 block p-0 m-0 cursor-pointer focus:outline-none ${i === 0 ? 'bg-[#eab308]' : ''}`;
        dot.onclick = () => goToHeroSlide(i);
        dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('button');

    // Initialize first slide
    gsap.set(heroSlides[0], { opacity: 1, scale: 1 });
    gsap.to(heroSlides[0], { scale: 1.15, duration: 6, ease: "none" });

    function goToHeroSlide(index) {
        if (index === currentSlide) return;
        clearTimeout(slideTimer);

        let prev = currentSlide;
        currentSlide = index;

        // Update dots
        dots[prev].classList.remove('bg-[#eab308]');
        dots[currentSlide].classList.add('bg-[#eab308]');

        // Crossfade
        gsap.to(heroSlides[prev], { opacity: 0, duration: 1.5, ease: "power2.inOut" });

        // Reset scale and fade in next
        gsap.set(heroSlides[currentSlide], { opacity: 0, scale: 1 });
        gsap.to(heroSlides[currentSlide], { opacity: 1, duration: 1.5, ease: "power2.inOut" });

        // Ken burns zoom
        gsap.to(heroSlides[currentSlide], { scale: 1.15, duration: 6, ease: "none" });

        // Loop
        slideTimer = setTimeout(() => goToHeroSlide((currentSlide + 1) % heroSlides.length), 5000);
    }
    // Start Loop
    slideTimer = setTimeout(() => goToHeroSlide(1), 5000);


    // 4. Custom GSAP Lightbox Gallery
    const galleryItems = document.querySelectorAll('.custom-gallery-item');
    const lb = document.getElementById('custom-lightbox');
    const lbImg = document.getElementById('lb-img');
    const lbCaption = document.getElementById('lb-caption');
    const lbClose = document.getElementById('lb-close');
    const lbPrev = document.getElementById('lb-prev');
    const lbNext = document.getElementById('lb-next');
    let currentLbIndex = 0;
    let galleryData = [];

    galleryItems.forEach((item, index) => {
        // Collect all data for the array
        const src = item.getAttribute('href');
        const caption = item.querySelector('p')?.innerText || '';
        galleryData.push({ src, caption });

        item.addEventListener('click', (e) => {
            e.preventDefault();
            openLb(index);
        });
    });

    function openLb(index) {
        currentLbIndex = index;
        updateLbContent(true); // pass true to skip fade out on first open
        gsap.to(lb, { display: 'flex', opacity: 1, duration: 0.4, ease: "power2.out" });
        if (lenis) lenis.stop(); // Stop scroll while modal is open
    }

    function closeLb() {
        gsap.to(lb, { opacity: 0, duration: 0.4, ease: "power2.in", onComplete: () => { lb.style.display = 'none'; } });
        if (lenis) lenis.start(); // Resume scroll
    }

    function updateLbContent(isFirstOpen = false) {
        if (isFirstOpen) {
            lbImg.src = galleryData[currentLbIndex].src;
            lbCaption.innerText = galleryData[currentLbIndex].caption;
            gsap.set(lbImg, { opacity: 1 });
        } else {
            gsap.to(lbImg, {
                opacity: 0, duration: 0.2, onComplete: () => {
                    lbImg.src = galleryData[currentLbIndex].src;
                    lbCaption.innerText = galleryData[currentLbIndex].caption;
                    gsap.to(lbImg, { opacity: 1, duration: 0.3 });
                }
            });
        }
    }

    lbClose.addEventListener('click', closeLb);
    lbPrev.addEventListener('click', () => {
        currentLbIndex = (currentLbIndex - 1 + galleryData.length) % galleryData.length;
        updateLbContent();
    });
    lbNext.addEventListener('click', () => {
        currentLbIndex = (currentLbIndex + 1) % galleryData.length;
        updateLbContent();
    });

    // 5. Sticky Nav Transformation
    ScrollTrigger.create({
        trigger: "#nav-wrapper",
        start: "top top",
        endTrigger: "body",
        end: "bottom top",
        toggleClass: {
            targets: "#nav-wrapper",
            className: "is-stuck"
        }
    });

    // 6. ScrollSpy: Highlight Active Nav Link
    const navLinks = gsap.utils.toArray('#nav-links-container .nav-link');
    navLinks.forEach(link => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                ScrollTrigger.create({
                    trigger: targetSection,
                    start: "top center",
                    end: "bottom center",
                    onToggle: self => {
                        if (self.isActive) {
                            navLinks.forEach(l => {
                                l.classList.remove('text-[#ebd373]');
                                l.classList.add('text-gray-400');
                            });
                            link.classList.remove('text-gray-400');
                            link.classList.add('text-[#ebd373]');
                        }
                    }
                });
            }
        }
    });

    // 7. Setup GSAP Scroll Reveals
    const elements = document.querySelectorAll('[data-gsap]');

    // Set initial state for all GSAP elements to avoid flash
    elements.forEach((el) => {
        const type = el.getAttribute('data-gsap');
        const delay = (parseFloat(el.getAttribute('data-delay')) || 0) / 1000;
        const duration = (parseFloat(el.getAttribute('data-duration')) || 1200) / 1000;

        let fromVars = {
            opacity: 0,
            duration: duration,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        };

        switch (type) {
            case 'fade-up': fromVars.y = 60; break;
            case 'fade-down': fromVars.y = -60; break;
            case 'fade-left': fromVars.x = 60; break;
            case 'fade-right': fromVars.x = -60; break;
        }

        gsap.from(el, fromVars);
    });

    // 8. Form Handling Logic
    const countryCodes = {
        "India": "+91",
        "United Arab Emirates": "+971",
        "United States": "+1",
        "United Kingdom": "+44",
        "Singapore": "+65",
        "Australia": "+61",
        "Canada": "+1",
        "Germany": "+49",
        "France": "+33",
        "Other": "+"
    };

    const callbackForm = document.getElementById('callback-form');
    if (callbackForm) {
        const countrySelect = document.getElementById('country');
        const phoneInput = document.getElementById('phone');
        const whatsappCheck = document.getElementById('whatsapp-check');
        const whatsappNoField = document.getElementById('whatsapp-no-field');
        const whatsappNoInput = document.getElementById('whatsapp-no');
        const countryCodeDisplay = document.getElementById('country-code-display');
        const waCountryCodeDisplay = document.getElementById('wa-country-code-display');
        const sendOtpBtn = document.getElementById('send-otp-btn');

        // Update country code display
        countrySelect.addEventListener('change', function () {
            const code = countryCodes[this.value] || "+";
            countryCodeDisplay.innerText = code;
            waCountryCodeDisplay.innerText = code;

            if (this.value !== "") {
                this.classList.remove('text-gray-400');
                this.classList.add('text-white');
            }
        });

        // WhatsApp field toggle
        whatsappCheck.addEventListener('change', function () {
            if (this.checked) {
                gsap.to(whatsappNoField, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => whatsappNoField.classList.add('hidden')
                });
                whatsappNoInput.value = phoneInput.value;
                whatsappNoInput.removeAttribute('required');
            } else {
                whatsappNoField.classList.remove('hidden');
                gsap.fromTo(whatsappNoField, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.3 });
                whatsappNoInput.setAttribute('required', 'required');
            }
        });

        // Sync phone to WhatsApp if checked
        phoneInput.addEventListener('input', function () {
            if (whatsappCheck.checked) {
                whatsappNoInput.value = this.value;
            }
        });

        // OTP Simulation
        sendOtpBtn.addEventListener('click', function () {
            const phone = phoneInput.value;
            if (phone.length === 10 && /^\d+$/.test(phone)) {
                this.innerText = "OTP Sent!";
                this.classList.add('bg-green-600/20', 'text-green-500');
                setTimeout(() => {
                    this.innerText = "Resend OTP";
                    this.classList.remove('bg-green-600/20', 'text-green-500');
                }, 5000);
            } else {
                alert('Please enter a valid 10-digit phone number first.');
            }
        });

        // Form Validation & Submission
        callbackForm.addEventListener('submit', function (e) {
            const email = document.getElementById('email').value;
            const phone = phoneInput.value;
            const whatsappNo = whatsappNoInput.value;
            const salutation = document.getElementById('salutation').value;
            const preferredTime = document.getElementById('preferred-time').value;

            let errors = [];

            if (!salutation) errors.push("Please select a salutation.");
            if (!/^\S+@\S+\.\S+$/.test(email)) errors.push("Please enter a valid email address.");
            if (phone.length !== 10) errors.push("Phone number must be exactly 10 digits.");
            if (!whatsappCheck.checked && whatsappNo.length !== 10) errors.push("WhatsApp number must be exactly 10 digits.");
            if (!preferredTime) errors.push("Please select a preferred time to call.");

            if (errors.length > 0) {
                e.preventDefault();
                alert(errors.join("\n"));
            } else {
                e.preventDefault();
                const fullName = document.getElementById('full-name').value;
                const salutation = document.getElementById('salutation').value;

                // Redirect to thank-you page with parameters
                window.location.href = `thank-you.html?salutation=${encodeURIComponent(salutation)}&name=${encodeURIComponent(fullName)}`;
            }
        });

        // Change select text color when an option is selected
        document.querySelectorAll('select').forEach(select => {
            select.addEventListener('change', function () {
                if (this.value) {
                    this.classList.remove('text-gray-400');
                    this.classList.add('text-white');
                }
            });
        });
    }

});

// --- Sticky Mobile Header Background ---
const mainHeader = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50 && window.innerWidth < 768) {
        mainHeader.classList.add('bg-[#111111]/95', 'backdrop-blur-md', 'shadow-md');
        mainHeader.classList.remove('bg-transparent');
    } else {
        mainHeader.classList.remove('bg-[#111111]/95', 'backdrop-blur-md', 'shadow-md');
        mainHeader.classList.add('bg-transparent');
    }
});
window.addEventListener('resize', () => {
    window.dispatchEvent(new Event('scroll'));
});

// --- Mobile Sidebar Drawer Logic ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const mobileSidebar = document.getElementById('mobile-sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function openSidebar() {
    mobileSidebar.classList.remove('translate-x-full');
    sidebarOverlay.classList.remove('hidden');

    // Slight delay to allow display:block to apply before animating opacity
    requestAnimationFrame(() => {
        sidebarOverlay.classList.remove('opacity-0');
        sidebarOverlay.classList.add('opacity-100');
    });

    if (typeof lenis !== 'undefined') lenis.stop(); // Stop scroll when menu is open
}

function closeSidebar() {
    mobileSidebar.classList.add('translate-x-full');
    sidebarOverlay.classList.remove('opacity-100');
    sidebarOverlay.classList.add('opacity-0');

    setTimeout(() => {
        sidebarOverlay.classList.add('hidden');
    }, 300);

    if (typeof lenis !== 'undefined') lenis.start(); // Resume scroll
}

if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openSidebar);
if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

// Auto-close sidebar when a navigation link is clicked
mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// --- Popup Form Logic ---
const enquireModal = document.getElementById('enquire-modal');
const closePopupBtn = document.getElementById('close-popup-btn');
const openPopupBtns = document.querySelectorAll('.open-popup-btn');

function openPopup(e) {
    if (e) e.preventDefault();
    enquireModal.classList.remove('hidden');
    enquireModal.classList.add('flex');
    requestAnimationFrame(() => {
        enquireModal.classList.remove('opacity-0');
        enquireModal.classList.add('opacity-100');
    });
    if (window.lenis) window.lenis.stop();
}

function closePopup() {
    enquireModal.classList.remove('opacity-100');
    enquireModal.classList.add('opacity-0');
    setTimeout(() => {
        enquireModal.classList.add('hidden');
        enquireModal.classList.remove('flex');
    }, 300);
    if (window.lenis) window.lenis.start();
}

openPopupBtns.forEach(btn => {
    btn.addEventListener('click', openPopup);
});

if (closePopupBtn) {
    closePopupBtn.addEventListener('click', closePopup);
}

enquireModal.addEventListener('click', (e) => {
    if (e.target === enquireModal) {
        closePopup();
    }
});

// --- Google Maps iframe Lazy Loading ---
document.addEventListener('DOMContentLoaded', function () {
    const lazyMaps = document.querySelectorAll('.lazy-map');

    if ('IntersectionObserver' in window) {
        const mapObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    const src = iframe.getAttribute('data-src');
                    if (src) {
                        iframe.setAttribute('src', src);
                        iframe.removeAttribute('data-src');
                    }
                    observer.unobserve(iframe); // Cleanup observer after load
                }
            });
        }, {
            rootMargin: '300px' // Preload slightly before visibility
        });

        lazyMaps.forEach(map => {
            mapObserver.observe(map);
        });
    } else {
        // Fallback for older browsers
        lazyMaps.forEach(map => {
            const src = map.getAttribute('data-src');
            if (src) {
                map.setAttribute('src', src);
                map.removeAttribute('data-src');
            }
        });
    }
});
