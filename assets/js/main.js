// Основной JavaScript файл для максимально технологичной визитки

class TechPortfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupParticles();
        this.setupAnimations();
        this.setupInteractions();
        this.setupScrollEffects();
        this.setupTypingEffect();
        this.setupSkillBars();
        this.setupCounters();
        this.setupParallax();
        this.setupMagneticEffect();
        this.setupConsoleWelcome();
        this.setupPerformanceOptimizations();
    }

    // Настройка частиц
    setupParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 100, density: { enable: true, value_area: 800 } },
                    color: { value: '#00d4ff' },
                    shape: { type: 'circle' },
                    opacity: { value: 0.6, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#00d4ff',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 4,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: { enable: true, mode: 'repulse' },
                        onclick: { enable: true, mode: 'push' },
                        resize: true
                    },
                    modes: {
                        repulse: { distance: 200, duration: 0.4 },
                        push: { particles_nb: 4 }
                    }
                },
                retina_detect: true
            });
        }
    }

    // Настройка анимаций
    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    this.animateElement(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.loading, .fade-in-up, .section-transition').forEach(el => {
            observer.observe(el);
        });
    }

    // Анимация элементов
    animateElement(element) {
        const delay = element.dataset.delay || 0;
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    }

    // Настройка интерактивности
    setupInteractions() {
        // Эффект магнитного притяжения для карточек
        document.querySelectorAll('.tech-category, .project-card, .contact-item').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                card.style.transform = `perspective(1000px) rotateX(${y * 0.01}deg) rotateY(${x * 0.01}deg) scale(1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });

        // Эффект волны для кнопок
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = btn.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;

                btn.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // Настройка эффектов прокрутки
    setupScrollEffects() {
        let ticking = false;

        const updateScrollEffects = () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax-section');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });

            // Анимация навбара
            const nav = document.querySelector('.nav');
            if (scrolled > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick);
    }

    // Эффект печатающей машинки
    setupTypingEffect() {
        const heroTitle = document.querySelector('.hero-title');
        if (!heroTitle) return;

        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.classList.add('typewriter');

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                heroTitle.classList.remove('typewriter');
            }
        };

        setTimeout(typeWriter, 1000);
    }

    // Настройка прогресс-баров навыков
    setupSkillBars() {
        const skills = [
            { name: 'Python', level: 95 },
            { name: 'Django', level: 90 },
            { name: 'AWS', level: 85 },
            { name: 'Docker', level: 88 },
            { name: 'PostgreSQL', level: 82 },
            { name: 'DevOps', level: 80 }
        ];

        const skillsContainer = document.createElement('div');
        skillsContainer.className = 'skills-section';
        skillsContainer.innerHTML = `
            <h3 class="section-title">Уровень навыков</h3>
            <div class="skills-grid">
                ${skills.map(skill => `
                    <div class="skill-item">
                        <div class="skill-info">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-percentage">${skill.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="${skill.level}"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Вставляем секцию навыков после технологического стека
        const techSection = document.querySelector('#tech');
        if (techSection) {
            techSection.appendChild(skillsContainer);
        }

        // Анимируем прогресс-бары
        setTimeout(() => {
            document.querySelectorAll('.skill-progress').forEach(bar => {
                const width = bar.dataset.width;
                bar.style.width = width + '%';
            });
        }, 1000);
    }

    // Настройка счетчиков
    setupCounters() {
        const counters = [
            { element: 'years', target: 6, suffix: '+' },
            { element: 'projects', target: 25, suffix: '+' },
            { element: 'technologies', target: 20, suffix: '+' }
        ];

        const countersContainer = document.createElement('div');
        countersContainer.className = 'counters-section section-bg';
        countersContainer.innerHTML = `
            <div class="counters-grid">
                ${counters.map(counter => `
                    <div class="counter-item">
                        <div class="counter" data-target="${counter.target}">0</div>
                        <div class="counter-label">${counter.element}</div>
                    </div>
                `).join('')}
            </div>
        `;

        // Вставляем счетчики перед секцией опыта
        const experienceSection = document.querySelector('#experience');
        if (experienceSection) {
            experienceSection.parentNode.insertBefore(countersContainer, experienceSection);
        }

        // Анимируем счетчики
        this.animateCounters();
    }

    // Анимация счетчиков
    animateCounters() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            const increment = target / 100;
            let current = 0;

            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(counter);
        });
    }

    // Настройка параллакса
    setupParallax() {
        const parallaxElements = document.querySelectorAll('.tech-category, .project-card');
        
        parallaxElements.forEach((element, index) => {
            element.classList.add('parallax-section');
            element.dataset.speed = 0.1 + (index * 0.02);
        });
    }

    // Эффект магнитного притяжения
    setupMagneticEffect() {
        document.querySelectorAll('.btn, .tech-category, .project-card').forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0, 0)';
            });
        });
    }

    // Приветственное сообщение в консоли
    setupConsoleWelcome() {
        const messages = [
            '%c🚀 Добро пожаловать на мою страницу!',
            '%c💻 Python Developer | Backend Systems | Blockchain Integration',
            '%c🔧 Технологии: Django, AWS, Docker, PostgreSQL, Redis',
            '%c📱 Свяжитесь со мной: pirog11@ya.ru'
        ];

        const styles = [
            'color: #00d4ff; font-size: 20px; font-weight: bold;',
            'color: #0099cc; font-size: 14px;',
            'color: #ff6b6b; font-size: 12px;',
            'color: #00d4ff; font-size: 12px;'
        ];

        messages.forEach((message, index) => {
            setTimeout(() => {
                console.log(message, styles[index]);
            }, index * 500);
        });
    }

    // Оптимизация производительности
    setupPerformanceOptimizations() {
        // Ленивая загрузка изображений
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Дебаунсинг для событий прокрутки
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // Выполняем тяжелые операции только после остановки прокрутки
            }, 100);
        });
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    new TechPortfolio();
});

// Добавляем CSS анимации
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .skills-section {
        margin-top: 3rem;
        padding: 2rem;
        background: rgba(255, 255, 255, 0.02);
        border-radius: 20px;
        border: 1px solid var(--border);
    }
    
    .skills-grid {
        display: grid;
        gap: 1.5rem;
    }
    
    .skill-item {
        background: rgba(255, 255, 255, 0.05);
        padding: 1rem;
        border-radius: 10px;
    }
    
    .skill-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        color: var(--text);
    }
    
    .counters-section {
        padding: 4rem 2rem;
        text-align: center;
    }
    
    .counters-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto;
    }
    
    .counter-item {
        padding: 2rem;
        background: rgba(255, 255, 255, 0.02);
        border-radius: 20px;
        border: 1px solid var(--border);
        transition: all 0.3s ease;
    }
    
    .counter-item:hover {
        transform: translateY(-5px);
        border-color: var(--primary);
        box-shadow: var(--shadow);
    }
    
    .counter-label {
        color: var(--text-secondary);
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    
    .nav.scrolled {
        background: rgba(10, 10, 10, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    }
`;
document.head.appendChild(style);
