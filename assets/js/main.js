/**
 * Template Name: ComingSoon
 * Template URL: https://bootstrapmade.com/comingsoon-free-html-bootstrap-template/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Prevent scroll jump on page load
   */
  function preventScrollJump() {
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Force scroll to top on page load
    window.scrollTo(0, 0);
    
    // Prevent any automatic scrolling
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Remove loading class and re-enable smooth scroll after page is ready
    setTimeout(() => {
      document.body.classList.remove('loading');
      document.body.classList.add('loaded');
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 300);
  }

  // Run on page load
  window.addEventListener('load', preventScrollJump);
  document.addEventListener('DOMContentLoaded', preventScrollJump);

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);


  /**
   * Hide mobile nav on same-page/hash links
   */
  // document.querySelectorAll("#navmenu a").forEach((navmenu) => {
  //   navmenu.addEventListener("click", () => {
  //     if (document.querySelector(".mobile-nav-active")) {
  //       mobileNavToogle();
  //     }
  //   });
  // });

  // /**
  //  * Toggle mobile nav dropdowns
  //  */
  // document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
  //   navmenu.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     this.parentNode.classList.toggle("active");
  //     this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
  //     e.stopImmediatePropagation();
  //   });
  // });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    AOS.init({
      duration: prefersReduced ? 0 : 500,
      easing: prefersReduced ? 'linear' : 'ease-out',
      once: true,
      mirror: false,
      disable: prefersReduced
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Countdown timer
   */
  function updateCountDown(countDownItem) {
    const timeleft =
      new Date(countDownItem.getAttribute("data-count")).getTime() -
      new Date().getTime();

    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    countDownItem.querySelector(".count-days").innerHTML = days;
    countDownItem.querySelector(".count-hours").innerHTML = hours;
    countDownItem.querySelector(".count-minutes").innerHTML = minutes;
    countDownItem.querySelector(".count-seconds").innerHTML = seconds;
  }

  document.querySelectorAll(".countdown").forEach(function (countDownItem) {
    updateCountDown(countDownItem);
    setInterval(function () {
      updateCountDown(countDownItem);
    }, 1000);
  });

  const btnLangSwitch = document.getElementById("btn-lang-switch");
  let currentLang = "fa"; // زبان پیش‌فرض

  function switchLanguage(lang) {
    document.body.classList.remove("ltr", "rtl");
    if (lang === "fa") {
      document.body.classList.add("rtl");
      document.documentElement.lang = "fa";
      document.documentElement.dir = "rtl";
    } else {
      document.body.classList.add("ltr");
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    }

    // تغییر متن‌ها
    document.querySelectorAll("[data-en]").forEach((el) => {
      if (lang === "fa") {
        el.textContent = el.getAttribute("data-fa");
      } else {
        el.textContent = el.getAttribute("data-en");
      }
    });

    document.querySelectorAll("[data-en]").forEach((el) => {
      if (el.tagName.toLowerCase() === 'input' && el.type === 'submit') {
        if (lang === "fa") {
          el.value = el.getAttribute("data-fa");
        } else {
          el.value = el.getAttribute("data-en");
        }
      } else {
        if (lang === "fa") {
          el.textContent = el.getAttribute("data-fa");
        } else {
          el.textContent = el.getAttribute("data-en");
        }
      }
    });

    document.querySelectorAll("[data-en-placeholder]").forEach((el) => {
      if (el.tagName.toLowerCase() === 'input') {
        if (lang === "fa") {
          el.value = el.getAttribute("data-fa-placeholder");
        } else {
          el.value = el.getAttribute("data-en-placeholder");
        }
      } else {
        if (lang === "fa") {
          el.textContent = el.getAttribute("data-fa-placeholder");
        } else {
          el.textContent = el.getAttribute("data-en-placeholder");
        }
      }
    });

    currentLang = lang;
  }

  // ابتدا زبان پیش‌فرض تنظیم شود
  switchLanguage(currentLang);

  // کلیک روی دکمه برای تغییر زبان
  btnLangSwitch.addEventListener("click", () => {
    if (currentLang === "en") {
      switchLanguage("fa");
    } else {
      switchLanguage("en");
    }
  });

  /**
   * Modern Contact Form Handler
   */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Hide all messages
      const errorMessage = contactForm.querySelector('.error-message');
      const sentMessage = contactForm.querySelector('.sent-message');
      const loadingMessage = contactForm.querySelector('.loading');
      
      errorMessage.style.display = 'none';
      sentMessage.style.display = 'none';
      loadingMessage.style.display = 'none';
      
      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      // Validate form
      if (!name || !email || !subject || !message) {
        errorMessage.style.display = 'flex';
        return;
      }
      
      // Show loading
      loadingMessage.style.display = 'flex';
      
      // Simulate form submission (replace with actual form handling)
      setTimeout(() => {
        loadingMessage.style.display = 'none';
        sentMessage.style.display = 'flex';
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          sentMessage.style.display = 'none';
        }, 5000);
      }, 2000);
    });
  }

  /**
   * Smooth scrolling for anchor links with fixed header
   */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = 70; // Reduced header height
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /**
   * Add scroll effect to header and active navigation
   */
  function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Update active navigation
    updateActiveNavigation();
  }

  function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navmenu a[href^="#"]');
    
    let currentSection = '';
    const headerHeight = 70; // Reduced fixed header height
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight - 30;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleHeaderScroll);

  /**
   * Counter Animation for About Section
   */
  function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = Math.floor(current);
      }, 16);
    });
  }

  /**
   * Intersection Observer for Counter Animation
   */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const aboutStats = document.querySelector('.about-stats');
  if (aboutStats) {
    counterObserver.observe(aboutStats);
  }

  /**
   * Enhanced AOS initialization
   */
  function enhancedAosInit() {
    // Wait for page to be fully loaded
    setTimeout(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      AOS.init({
        duration: prefersReduced ? 0 : 600,
        easing: prefersReduced ? 'linear' : 'ease-out',
        once: true,
        mirror: false,
        offset: prefersReduced ? 0 : 80,
        disable: prefersReduced
      });
    }, 400);
  }
  
  window.addEventListener('load', enhancedAosInit);
  
  /**
   * Ensure on page reload we land on the home (hero) section
   */
  function scrollHomeOnReload() {
    try {
      const navEntries = performance.getEntriesByType && performance.getEntriesByType('navigation');
      const isReload = navEntries && navEntries.length
        ? navEntries[0].type === 'reload'
        : (performance && performance.navigation && performance.navigation.type === 1);

      if (!isReload) return;

      const hero = document.querySelector('#hero');
      if (!hero) return;

      // Clear hash to avoid the browser auto-jumping to anchors
      if (location.hash) {
        history.replaceState(null, '', location.pathname + location.search);
      }

      // Align considering fixed header height; run after initial scroll prevention settles
      const headerHeight = 70;
      const targetTop = hero.offsetTop - headerHeight;

      setTimeout(() => {
        window.scrollTo({ top: Math.max(0, targetTop), behavior: 'auto' });
      }, 350);
    } catch (_) {
      // no-op
    }
  }

  window.addEventListener('load', scrollHomeOnReload);
  
  /**
   * Team avatar image fallback: show image when it loads; otherwise keep icon
   */
  function initTeamAvatarFallbacks() {
    document.querySelectorAll('.team-avatar').forEach((avatar) => {
      const img = avatar.querySelector('img');
      if (!img) return;

      const showImage = () => avatar.classList.add('has-image');
      const hideImage = () => avatar.classList.remove('has-image');

      // If image already loaded from cache
      if (img.complete && img.naturalWidth > 0) {
        showImage();
      }

      img.addEventListener('load', showImage, { once: true });
      img.addEventListener('error', hideImage, { once: true });
    });
  }

  window.addEventListener('load', initTeamAvatarFallbacks);

})();
