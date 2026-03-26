/**
 * =========================================================================
 * MAIN.JS - Tourism Management System
 * Core JavaScript Functionality & Enhancements
 * =========================================================================
 */

(function() {
  'use strict';

  // ========== Smooth Scrolling ==========
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#myModal' && href !== '#myModal3' && href !== '#myModal4') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }

  // ========== Scroll Progress Bar ==========
  function initScrollProgress() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);

    // Update on scroll
    window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }

  // ========== Back to Top Button ==========
  function initBackToTop() {
    // Create button
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fa fa-arrow-up"></i>';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #F59E0B, #FBBF24);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        font-size: 1.25rem;
      }
      .back-to-top.visible {
        opacity: 1;
        visibility: visible;
      }
      .back-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 20px rgba(245, 158, 11, 0.4), 0 10px 30px rgba(0, 0, 0, 0.2);
      }
    `;
    document.head.appendChild(style);

    // Show/hide on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ========== Navbar Scroll Effect ==========
  function initNavbarScroll() {
    const navbar = document.querySelector('.footer-btm');
    
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      });
    }
  }

  // ========== Animated Counters ==========
  function initAnimatedCounters() {
    const counters = document.querySelectorAll('.rou-rgt h3');
    const speed = 200; // Animation speed
    
    const animateCounter = (counter) => {
      const target = parseInt(counter.textContent.replace(/,/g, ''));
      const increment = target / speed;
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };
      
      updateCounter();
    };
    
    // Intersection Observer for triggering animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
  }

  // ========== Modal Enhancements ==========
  function initModalEnhancements() {
    // Add animation classes to modals
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
      modal.addEventListener('show.bs.modal', function() {
        const dialog = this.querySelector('.modal-dialog');
        if (dialog) {
          dialog.classList.add('modal-slide-up');
        }
      });
    });
  }

  // ========== Form Enhancements ==========
  function initFormEnhancements() {
    // Floating labels
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], input[type="tel"]');
    
    inputs.forEach(input => {
      // Add focus/blur effects
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', function() {
        if (!this.value) {
          this.parentElement.classList.remove('focused');
        }
      });
      
      // Initialize if has value
      if (input.value) {
        input.parentElement.classList.add('focused');
      }
    });
    
    // Form validation feedback
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        const requiredInputs = this.querySelectorAll('[required]');
        let isValid = true;
        
        requiredInputs.forEach(input => {
          if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#EF4444';
            input.classList.add('shake');
            setTimeout(() => input.classList.remove('shake'), 500);
          } else {
            input.style.borderColor = '#10B981';
          }
        });
        
        if (!isValid) {
          e.preventDefault();
        }
      });
    });
    
    // Add shake animation
    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
      }
      .shake {
        animation: shake 0.3s ease;
      }
    `;
    document.head.appendChild(shakeStyle);
  }

  // ========== Toast Notifications ==========
  function createToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    const style = document.createElement('style');
    if (!document.getElementById('toast-styles')) {
      style.id = 'toast-styles';
      style.textContent = `
        .toast {
          position: fixed;
          top: 80px;
          right: 30px;
          padding: 16px 24px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          z-index: 10000;
          animation: slideInRight 0.3s ease;
          min-width: 250px;
          font-family: 'Poppins', sans-serif;
        }
        .toast-success {
          border-left: 4px solid #10B981;
        }
        .toast-error {
          border-left: 4px solid #EF4444;
        }
        .toast-info {
          border-left: 4px solid #3B82F6;
        }
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'slideInRight 0.3s ease reverse';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
  
  // Expose toast to global scope
  window.showToast = createToast;

  // ========== Image Lazy Loading Enhancement ==========
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }

  // ========== Mobile Menu Toggle ==========
  function initMobileMenu() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.nav-wil');
    
    if (navbarToggle && navLinks) {
      navbarToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!e.target.closest('.navigation') && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          navbarToggle.classList.remove('active');
        }
      });
      
      // Close menu when clicking a link
      const navItems = navLinks.querySelectorAll('a');
      navItems.forEach(item => {
        item.addEventListener('click', () => {
          navLinks.classList.remove('active');
          navbarToggle.classList.remove('active');
        });
      });
    }
  }

  // ========== Initialize All ==========
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAll);
    } else {
      initAll();
    }
  }

  function initAll() {
    initSmoothScrolling();
    initScrollProgress();
    initBackToTop();
    initNavbarScroll();
    initAnimatedCounters();
    initModalEnhancements();
    initFormEnhancements();
    initLazyLoading();
    initMobileMenu();
    
    console.log('✨ TMS Premium v2.0 - Loaded successfully');
  }

  // Start initialization
  init();

})();
