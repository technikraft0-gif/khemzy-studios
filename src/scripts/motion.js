/**
 * KHEMZY STUDIOS — LUXURY CLIENT INTERACTION & MOTION CONTROLLER
 */

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

/**
 * Responsive Mobile Navigation Controller
 */
function initNavigation() {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  // Support both data-navigation and data-mobile-menu
  const navMenu =
    document.querySelector("[data-navigation]") ||
    document.querySelector("[data-mobile-menu]");

  if (header) {
    const updateHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 30);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  if (!menuToggle || !navMenu) return;

  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  const openMenu = () => {
    menuToggle.setAttribute("aria-expanded", "true");
    navMenu.classList.add("is-open");
    document.body.classList.add("menu-open");
  };

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      menuToggle.getAttribute("aria-expanded") === "true" &&
      header &&
      !header.contains(event.target)
    ) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1020) {
      closeMenu();
    }
  });
}

/**
 * Scroll Progress Bar
 */
function initScrollProgress() {
  let bar = document.querySelector(".scroll-progress-bar");
  if (!bar) {
    bar = document.createElement("div");
    bar.className = "scroll-progress-bar";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
  }

  const updateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    if (bar) {
      bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
}

/**
 * Scroll Reveal & Stagger Animation Controller
 */
function initScrollReveals() {
  const revealElements = document.querySelectorAll("[data-reveal]");
  const staggerGroups = document.querySelectorAll(
    "[data-reveal-stagger], [data-stagger]"
  );

  if (!revealElements.length && !staggerGroups.length) return;

  // Reduced motion bypass
  if (prefersReducedMotion.matches) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    staggerGroups.forEach((group) => {
      group.classList.add("is-visible");
      group.querySelectorAll(":scope > *").forEach((child) => {
        child.classList.add("is-visible");
      });
    });
    return;
  }

  document.documentElement.classList.add("motion-ready");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    staggerGroups.forEach((group) => {
      group.classList.add("is-visible");
      group.querySelectorAll(":scope > *").forEach((child) => {
        child.classList.add("is-visible");
      });
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -30px 0px",
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });

  staggerGroups.forEach((group) => {
    const children = group.querySelectorAll(":scope > *");
    children.forEach((child, index) => {
      const delay = `${Math.min(index * 110, 660)}ms`;
      child.style.setProperty("--item-delay", delay);
      child.style.setProperty("--stagger-delay", delay);
      observer.observe(child);
    });
    observer.observe(group);
  });
}

/**
 * Smooth Anchor Navigation
 */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion.matches ? "auto" : "smooth",
        block: "start",
      });

      if (target instanceof HTMLElement && !target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
      }
      if (target instanceof HTMLElement) {
        target.focus({ preventScroll: true });
      }
    });
  });
}

/**
 * FAQ Accordion Controller
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      // Close other open faqs
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove("is-open");
          other.querySelector(".faq-trigger")?.setAttribute("aria-expanded", "false");
        }
      });

      if (isOpen) {
        item.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/**
 * Initialize all motion and interactive behaviors
 */
function initMotion() {
  initNavigation();
  initScrollProgress();
  initScrollReveals();
  initSmoothAnchors();
  initFaqAccordion();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMotion, { once: true });
} else {
  initMotion();
}

document.addEventListener("astro:page-load", initMotion);
