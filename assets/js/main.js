document.addEventListener('DOMContentLoaded', () => {
    // Inject global UI elements
    injectScrollProgress();
    injectBackToTop();

    // Core functionality
    initScrollReveal();
    initHeaderScroll();
    initNavigationDrawer();
    initCookieBanner();

    // Enhancements
    initScrollProgress();
    initBackToTop();
    initLazyImageFadeIn();
    initActiveNavLink();
    initContactFormValidation();
    initTextareaAutoResize();
    initParallaxScroll();
    initShaderThrottle();
});

/* ═══════════════════════════════════════════
   GLOBAL UI ELEMENT INJECTION
   ═══════════════════════════════════════════ */

function injectScrollProgress() {
    if (document.getElementById('scroll-progress')) return;
    const bar = document.createElement('div');
    bar.id = 'scroll-progress';
    document.body.prepend(bar);
}

function injectBackToTop() {
    if (document.getElementById('back-to-top')) return;
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<span class="material-symbols-outlined">arrow_upward</span>';
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(btn);
}

/* ═══════════════════════════════════════════
   SCROLL REVEAL OBSERVER
   ═══════════════════════════════════════════ */

function initScrollReveal() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.1 });

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════
   HEADER SCROLL EFFECT
   ═══════════════════════════════════════════ */

function initHeaderScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;

    const isTransparentStart = header.classList.contains('header-transparent');
    let ticking = false;

    function handleScroll() {
        if (window.scrollY > 40) {
            header.classList.remove('header-transparent', 'py-6');
            header.classList.add('py-4');

            // Apply solid background
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.92)';
            header.style.backdropFilter = 'blur(12px)';
            header.style.webkitBackdropFilter = 'blur(12px)';
            header.style.borderBottomWidth = '1px';
            header.style.borderBottomColor = 'rgba(226, 226, 226, 0.6)';
            header.style.borderBottomStyle = 'solid';

            if (isTransparentStart) {
                header.classList.remove('text-gallery-white');
                header.classList.add('text-monolith-black');
            }
        } else {
            header.classList.add('py-6');
            header.classList.remove('py-4');

            if (isTransparentStart) {
                header.classList.add('header-transparent', 'text-gallery-white');
                header.classList.remove('text-monolith-black');
                header.style.backgroundColor = '';
                header.style.backdropFilter = '';
                header.style.webkitBackdropFilter = '';
                header.style.borderBottomWidth = '';
                header.style.borderBottomColor = '';
                header.style.borderBottomStyle = '';
            } else {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.92)';
                header.style.backdropFilter = 'blur(12px)';
                header.style.webkitBackdropFilter = 'blur(12px)';
            }
        }
    }

    // Throttled scroll handler
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    handleScroll(); // Initial check
}

/* ═══════════════════════════════════════════
   NAVIGATION DRAWER
   ═══════════════════════════════════════════ */

function initNavigationDrawer() {
    const menuTrigger = document.getElementById('menu-trigger');
    const closeMenu = document.getElementById('close-menu');
    const navDrawer = document.getElementById('nav-drawer');

    if (!menuTrigger || !navDrawer) return;

    function openDrawer() {
        navDrawer.classList.remove('opacity-0', 'pointer-events-none');
        navDrawer.classList.add('opacity-100', 'pointer-events-auto', 'active');
        document.body.style.overflow = 'hidden';
        // Focus the close button for keyboard users
        if (closeMenu) setTimeout(() => closeMenu.focus(), 300);
    }

    function closeDrawer() {
        navDrawer.classList.remove('opacity-100', 'pointer-events-auto', 'active');
        navDrawer.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
        // Return focus to menu trigger
        menuTrigger.focus();
    }

    menuTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        openDrawer();
    });

    if (closeMenu) {
        closeMenu.addEventListener('click', (e) => {
            e.preventDefault();
            closeDrawer();
        });
    }

    // Close on click of drawer links
    navDrawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    // ESC key to close drawer
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navDrawer.classList.contains('active')) {
            closeDrawer();
        }
    });

    // Focus trap within drawer
    navDrawer.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;
        const focusable = navDrawer.querySelectorAll('a, button, [role="button"], [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    });
}

/* ═══════════════════════════════════════════
   COOKIE BANNER
   ═══════════════════════════════════════════ */

function initCookieBanner() {
    const cookieBanner = document.getElementById('cookie-banner');
    if (!cookieBanner) return;

    if (localStorage.getItem('cookies-accepted') !== null) {
        cookieBanner.style.display = 'none';
        return;
    }

    setTimeout(() => {
        cookieBanner.style.transform = 'translateY(0)';
    }, 2000);

    window.acceptCookies = function() {
        localStorage.setItem('cookies-accepted', 'true');
        cookieBanner.style.transform = 'translateY(100%)';
        setTimeout(() => cookieBanner.style.display = 'none', 500);
    };

    window.rejectCookies = function() {
        localStorage.setItem('cookies-accepted', 'false');
        cookieBanner.style.transform = 'translateY(100%)';
        setTimeout(() => cookieBanner.style.display = 'none', 500);
    };
}

/* ═══════════════════════════════════════════
   SCROLL PROGRESS INDICATOR
   ═══════════════════════════════════════════ */

function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                bar.style.width = progress + '%';
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ═══════════════════════════════════════════
   BACK TO TOP BUTTON
   ═══════════════════════════════════════════ */

function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
                if (scrollPercent > 0.25) {
                    btn.classList.add('visible');
                } else {
                    btn.classList.remove('visible');
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ═══════════════════════════════════════════
   LAZY IMAGE FADE-IN
   ═══════════════════════════════════════════ */

function initLazyImageFadeIn() {
    // Fade in lazy images when they load
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        if (img.complete) {
            img.classList.add('img-loaded');
        } else {
            img.addEventListener('load', () => img.classList.add('img-loaded'), { once: true });
            img.addEventListener('error', () => img.classList.add('img-loaded'), { once: true });
        }
    });

    // For images without loading="lazy", ensure they're visible
    document.querySelectorAll('img:not([loading="lazy"])').forEach(img => {
        img.classList.add('img-loaded');
    });
}

/* ═══════════════════════════════════════════
   ACTIVE NAV LINK HIGHLIGHTING
   ═══════════════════════════════════════════ */

function initActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Desktop nav links
    document.querySelectorAll('#main-header nav a, #nav-drawer a').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        const linkPage = href.split('/').pop();

        if (linkPage === currentPage) {
            link.setAttribute('aria-current', 'page');
        }
    });
}

/* ═══════════════════════════════════════════
   CONTACT FORM VALIDATION
   ═══════════════════════════════════════════ */

function initContactFormValidation() {
    const form = document.querySelector('form');
    if (!form) return;

    // Create success message element
    const successMsg = document.createElement('div');
    successMsg.className = 'text-muted-sage text-sm font-semibold uppercase tracking-widest mt-6 opacity-0 transition-opacity duration-500';
    successMsg.textContent = '✓ Your inquiry has been submitted successfully.';

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Validate required fields
        form.querySelectorAll('[required]').forEach(field => {
            clearFieldError(field);

            if (!field.value.trim()) {
                showFieldError(field, 'This field is required');
                isValid = false;
            } else if (field.type === 'email' && !isValidEmail(field.value)) {
                showFieldError(field, 'Please enter a valid email');
                isValid = false;
            }
        });

        if (isValid) {
            // Show success state
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.textContent = 'SUBMITTED';
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.6';
                submitBtn.style.cursor = 'default';
            }

            // Append success message
            if (!form.contains(successMsg)) {
                form.appendChild(successMsg);
            }
            setTimeout(() => successMsg.style.opacity = '1', 50);

            // Reset form after delay
            setTimeout(() => {
                form.reset();
                if (submitBtn) {
                    submitBtn.textContent = 'Submit Inquiry';
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '';
                    submitBtn.style.cursor = '';
                }
                successMsg.style.opacity = '0';
            }, 4000);
        }
    });

    // Clear errors on input
    form.querySelectorAll('[required]').forEach(field => {
        field.addEventListener('input', () => clearFieldError(field));
    });
}

function showFieldError(field, message) {
    field.classList.add('input-error');
    // Create or show error message
    let errorEl = field.parentElement.querySelector('.input-error-message');
    if (!errorEl) {
        errorEl = document.createElement('span');
        errorEl.className = 'input-error-message';
        field.parentElement.appendChild(errorEl);
    }
    errorEl.textContent = message;
    requestAnimationFrame(() => errorEl.classList.add('visible'));
}

function clearFieldError(field) {
    field.classList.remove('input-error');
    const errorEl = field.parentElement.querySelector('.input-error-message');
    if (errorEl) {
        errorEl.classList.remove('visible');
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ═══════════════════════════════════════════
   TEXTAREA AUTO-RESIZE
   ═══════════════════════════════════════════ */

function initTextareaAutoResize() {
    document.querySelectorAll('textarea').forEach(tx => {
        tx.style.height = tx.scrollHeight + 'px';
        tx.style.overflowY = 'hidden';
        tx.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    });
}

/* ═══════════════════════════════════════════
   PARALLAX SCROLL EFFECT
   ═══════════════════════════════════════════ */

function initParallaxScroll() {
    const parallaxElements = document.querySelectorAll('.parallax-img');
    if (parallaxElements.length === 0) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                parallaxElements.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    const windowH = window.innerHeight;
                    if (rect.top < windowH && rect.bottom > 0) {
                        const progress = (windowH - rect.top) / (windowH + rect.height);
                        const translate = (progress - 0.5) * 30;
                        el.style.transform = `scale(1.08) translateY(${translate}px)`;
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ═══════════════════════════════════════════
   WEBGL SHADER (with Page Visibility throttle)
   ═══════════════════════════════════════════ */

let shaderAnimationId = null;
let shaderPaused = false;

function initHeroShader(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    function syncSize() {
        const w = canvas.clientWidth || window.innerWidth;
        const h = canvas.clientHeight || window.innerHeight;
        if (canvas.width !== w || canvas.height !== h) {
            canvas.width = w;
            canvas.height = h;
        }
    }

    if (typeof ResizeObserver !== 'undefined') {
        new ResizeObserver(syncSize).observe(canvas);
    }
    syncSize();

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
    v_texCoord = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = v_texCoord;
    
    float noise = sin(uv.x * 3.0 + u_time * 0.15) * cos(uv.y * 2.0 - u_time * 0.1);
    noise += sin(uv.y * 5.0 + u_time * 0.08) * 0.5;
    
    vec3 color1 = vec3(0.04, 0.04, 0.04);
    vec3 color2 = vec3(0.09, 0.09, 0.09);
    
    vec3 finalColor = mix(color1, color2, noise * 0.5 + 0.5);
    
    float vignette = length(uv - 0.5);
    finalColor *= 1.0 - vignette * 0.4;
    
    gl_FragColor = vec4(finalColor, 1.0);
}`;

    function cs(type, src) {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');

    function render(t) {
        if (shaderPaused) {
            shaderAnimationId = requestAnimationFrame(render);
            return;
        }
        if (typeof ResizeObserver === 'undefined') syncSize();
        gl.viewport(0, 0, canvas.width, canvas.height);
        if (uTime) gl.uniform1f(uTime, t * 0.001);
        if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        shaderAnimationId = requestAnimationFrame(render);
    }
    render(0);
}

function initShaderThrottle() {
    document.addEventListener('visibilitychange', () => {
        shaderPaused = document.hidden;
    });
}

// Attach shader function to window so html templates can trigger it selectively
window.initHeroShader = initHeroShader;
