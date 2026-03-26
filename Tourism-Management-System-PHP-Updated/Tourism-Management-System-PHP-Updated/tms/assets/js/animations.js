/**
 * =========================================================================
 * ANIMATIONS.JS - Tourism Management System
 * Advanced Animation Controllers & Scroll Effects
 * =========================================================================
 */

(function () {
    'use strict';

    // ========== AOS (Animate On Scroll) Initialization ==========
    function initAOS() {
        // Check if AOS is loaded
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-out',
                once: true,
                offset: 100,
                delay: 100
            });
        }
    }

    // ========== Custom Scroll Reveal ==========
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.scroll-reveal');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // ========== Parallax Effect ==========
    function initParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        window.addEventListener('scroll', () => {
            parallaxElements.forEach(el => {
                const speed = el.dataset.parallax || 0.5;
                const yPos = -(window.scrollY * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // ========== Stagger Animation ==========
    function initStaggerAnimation() {
        const staggerContainers = document.querySelectorAll('[data-stagger]');

        staggerContainers.forEach(container => {
            const children = container.children;
            const delay = parseInt(container.dataset.stagger) || 100;

            Array.from(children).forEach((child, index) => {
                child.style.animationDelay = `${index * delay}ms`;
                child.classList.add('animate-fade-in-up');
            });
        });
    }

    // ========== Image Zoom on Hover ==========
    function initImageZoom() {
        const images = document.querySelectorAll('.room-left img, .package-img');

        images.forEach(img => {
            const wrapper = img.parentElement;
            if (!wrapper.classList.contains('image-zoom-container')) {
                wrapper.classList.add('image-zoom-container');
            }
            img.classList.add('image-zoom');
        });
    }

    // ========== Card Hover Effects ==========
    function initCardEffects() {
        const cards = document.querySelectorAll('.rom-btm');

        cards.forEach(card => {
            card.classList.add('hover-lift');

            // Add ripple effect on click
            card.addEventListener('click', function (e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                ripple.style.cssText = `
          position: absolute;
          left: ${x}px;
          top: ${y}px;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(245, 158, 11, 0.3);
          transform: translate(-50%, -50%);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        `;

                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);

                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // ========== Button Glow Animation ==========
    function initButtonGlow() {
        const buttons = document.querySelectorAll('.view, a.learn, a.det, button.seabtn');

        buttons.forEach(btn => {
            btn.classList.add('btn-animate');

            // Optional: Add pulsing glow effect
            btn.addEventListener('mouseenter', function () {
                this.style.animation = 'pulse 0.6s ease';
            });

            btn.addEventListener('animationend', function () {
                this.style.animation = '';
            });
        });
    }

    // ========== Text Animation ==========
    function animateText(element, text, speed = 50) {
        let index = 0;
        element.textContent = '';

        const type = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        };

        type();
    }

    // ========== Number Counter Animation ==========
    function animateNumber(element, start, end, duration = 2000) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 16);
    }

    // ========== Page Load Animation ==========
    function initPageLoadAnimation() {
        document.body.style.opacity = '0';

        window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
            }, 100);
        });
    }

    // ========== Modal Animations ==========
    function enhanceModals() {
        const modals = document.querySelectorAll('.modal');

        modals.forEach(modal => {
            // Backdrop animation
            modal.addEventListener('shown.bs.modal', function () {
                const backdrop = document.querySelector('.modal-backdrop');
                if (backdrop) {
                    backdrop.style.animation = 'fadeIn 0.3s ease';
                }
            });

            // Content animation
            const content = modal.querySelector('.modal-content');
            if (content) {
                modal.addEventListener('show.bs.modal', function () {
                    content.style.animation = 'fadeInUp 0.4s ease';
                });
            }
        });
    }

    // ========== Scroll-triggered Animations ==========
    function initScrollAnimations() {
        const elements = document.querySelectorAll('.holiday h3, .routes-left, .package-card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }

    // ========== Navbar Background Transition ==========
    function animateNavbar() {
        const navbar = document.querySelector('.footer-btm');
        let lastScroll = 0;

        if (navbar) {
            window.addEventListener('scroll', () => {
                const currentScroll = window.scrollY;

                // Add/remove scrolled class
                if (currentScroll > 50) {
                    navbar.style.background = 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.98))';
                    navbar.style.backdropFilter = 'blur(10px)';
                    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    navbar.style.background = 'linear-gradient(135deg, #0F172A, #1E293B)';
                    navbar.style.backdropFilter = 'none';
                    navbar.style.boxShadow = 'none';
                }

                // Hide/show on scroll direction
                if (currentScroll > lastScroll && currentScroll > 100) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }

                lastScroll = currentScroll;
            });
        }
    }

    // ========== Initialize All Animations ==========
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initAll);
        } else {
            initAll();
        }
    }

    function initAll() {
        initAOS();
        initScrollReveal();
        initParallax();
        initStaggerAnimation();
        initImageZoom();
        initCardEffects();
        initButtonGlow();
        initPageLoadAnimation();
        enhanceModals();
        initScrollAnimations();
        animateNavbar();

        console.log('🎨 Animation system initialized');
    }

    // Start
    init();

    // Expose utilities to global scope
    window.TMSAnimations = {
        animateText,
        animateNumber
    };

})();
