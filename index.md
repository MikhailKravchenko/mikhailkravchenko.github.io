---
layout: default
---

<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mikhail Kravchenko - Python Developer</title>
    <meta name="description" content="Full-stack Python developer specializing in backend systems, blockchain integration, and modern web technologies">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Particles.js -->
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    
    <style>
        :root {
            --primary: #00d4ff;
            --secondary: #0099cc;
            --accent: #ff6b6b;
            --dark: #0a0a0a;
            --darker: #050505;
            --light: #f8f9fa;
            --text: #e0e0e0;
            --text-secondary: #b0b0b0;
            --border: #2a2a2a;
            --gradient: linear-gradient(135deg, var(--primary), var(--secondary));
            --shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
            --shadow-hover: 0 12px 40px rgba(0, 212, 255, 0.2);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--dark);
            color: var(--text);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Particles Background */
        #particles-js {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: -1;
        }

        /* Navigation */
        .nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border);
            z-index: 1000;
            padding: 1rem 0;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
        }

        .nav-logo {
            font-size: 1.5rem;
            font-weight: 700;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-links a {
            color: var(--text);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a:hover {
            color: var(--primary);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--gradient);
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
            position: relative;
        }

        .hero-content {
            max-width: 800px;
            z-index: 1;
        }

        .hero-title {
            font-size: clamp(2.5rem, 8vw, 4rem);
            font-weight: 700;
            margin-bottom: 1rem;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: fadeInUp 1s ease-out;
        }

        .hero-subtitle {
            font-size: 1.25rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
            animation: fadeInUp 1s ease-out 0.2s both;
        }

        .hero-description {
            font-size: 1.1rem;
            color: var(--text);
            margin-bottom: 3rem;
            animation: fadeInUp 1s ease-out 0.4s both;
        }

        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            animation: fadeInUp 1s ease-out 0.6s both;
        }

        .btn {
            padding: 1rem 2rem;
            border: none;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }

        .btn-primary {
            background: var(--gradient);
            color: white;
            box-shadow: var(--shadow);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-hover);
        }

        .btn-secondary {
            background: transparent;
            color: var(--primary);
            border: 2px solid var(--primary);
        }

        .btn-secondary:hover {
            background: var(--primary);
            color: white;
            transform: translateY(-2px);
        }

        /* Sections */
        .section {
            padding: 5rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 3rem;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* Tech Stack */
        .tech-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .tech-category {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 2rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .tech-category:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
            box-shadow: var(--shadow);
        }

        .tech-category h3 {
            color: var(--primary);
            margin-bottom: 1rem;
            font-size: 1.25rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .tech-list {
            list-style: none;
        }

        .tech-list li {
            padding: 0.5rem 0;
            color: var(--text-secondary);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .tech-list li:last-child {
            border-bottom: none;
        }

        /* Experience */
        .experience-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 2rem;
            margin-bottom: 2rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .experience-item:hover {
            transform: translateX(10px);
            border-color: var(--primary);
            box-shadow: var(--shadow);
        }

        .experience-title {
            color: var(--primary);
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
        }

        .experience-company {
            color: var(--accent);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .experience-period {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }

        .experience-description {
            color: var(--text);
            line-height: 1.7;
        }

        /* Education */
        .education-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 2rem;
        }

        .education-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 2rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .education-item:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
            box-shadow: var(--shadow);
        }

        .education-title {
            color: var(--primary);
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
        }

        .education-company {
            color: var(--accent);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .education-period {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }

        .education-description {
            color: var(--text);
            line-height: 1.7;
        }

        /* Projects */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .project-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 2rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            position: relative;
            overflow: hidden;
        }

        .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
            transition: left 0.5s ease;
        }

        .project-card:hover::before {
            left: 100%;
        }

        .project-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
            box-shadow: var(--shadow);
        }

        .project-title {
            color: var(--primary);
            font-size: 1.25rem;
            margin-bottom: 1rem;
        }

        .project-link {
            color: var(--accent);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .project-link:hover {
            color: var(--primary);
        }

        /* Contact */
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .contact-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 2rem;
            text-align: center;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .contact-item:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
            box-shadow: var(--shadow);
        }

        .contact-icon {
            font-size: 2rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }

        .contact-label {
            color: var(--text-secondary);
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
        }

        .contact-value {
            color: var(--text);
            font-weight: 600;
        }

        .contact-link {
            color: var(--primary);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .contact-link:hover {
            color: var(--accent);
        }

        /* Footer */
        .footer {
            background: rgba(5, 5, 5, 0.95);
            border-top: 1px solid var(--border);
            padding: 2rem;
            text-align: center;
            margin-top: 5rem;
        }

        .footer-content {
            color: var(--text-secondary);
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-20px);
            }
        }

        .floating {
            animation: float 6s ease-in-out infinite;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .hero-title {
                font-size: 2.5rem;
            }

            .section {
                padding: 3rem 1rem;
            }

            .tech-grid,
            .projects-grid,
            .contact-grid,
            .education-grid {
                grid-template-columns: 1fr;
            }

            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: var(--darker);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--primary);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--secondary);
        }

        /* Loading animation */
        .loading {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }

        .loading.loaded {
            opacity: 1;
            transform: translateY(0);
        }
    </style>

</head>
<body>
    <!-- Particles Background -->
    <div id="particles-js"></div>

    <!-- Navigation -->
    <nav class="nav">
        <div class="nav-container">
            <div class="nav-logo">MK</div>
            <ul class="nav-links">
                <li><a href="#about">Обо мне</a></li>
                <li><a href="#tech">Технологии</a></li>
                <li><a href="#experience">Опыт</a></li>
                <li><a href="#projects">Проекты</a></li>
                <li><a href="#education">Образование</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title floating">Привет! 👋</h1>
            <p class="hero-subtitle">Меня зовут <strong>Михаил</strong></p>
            <p class="hero-description">
                Опытный Python-разработчик с более чем 15-летним стажем в IT. Специализируюсь на создании высоконагруженных backend-систем,
                DevOps-практиках и интеграции современных технологий. В настоящее время работаю в "Перекресток" и изучаю DevOps в Яндекс.Практикуме.
            </p>
            <div class="cta-buttons">
                <a href="#contact" class="btn btn-primary">
                    <i class="fas fa-paper-plane"></i>
                    Связаться
                </a>
                <a href="#projects" class="btn btn-secondary">
                    <i class="fas fa-code"></i>
                    Проекты
                </a>
            </div>
        </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech" class="section">
        <h2 class="section-title">Технологический стек</h2>
        <div class="tech-grid">
            <div class="tech-category loading">
                <h3><i class="fas fa-code"></i> Языки программирования</h3>
                <ul class="tech-list">
                    <li>Python (3.7+)</li>
                    <li>Bash</li>
                </ul>
            </div>

            <div class="tech-category loading">
                <h3><i class="fas fa-server"></i> Backend-разработка</h3>
                <ul class="tech-list">
                    <li>Django, Django ORM, DRF</li>
                    <li>Django Channels, Daphne</li>
                    <li>Flask</li>
                    <li>asyncio, multiprocessing</li>
                </ul>
            </div>

            <div class="tech-category loading">
                <h3><i class="fas fa-globe"></i> Веб-сервисы и API</h3>
                <ul class="tech-list">
                    <li>REST, Swagger</li>
                </ul>
            </div>

            <div class="tech-category loading">
                <h3><i class="fas fa-cloud"></i> Инфраструктура и DevOps</h3>
                <ul class="tech-list">
                    <li>Docker, Docker Compose</li>
                    <li>Kubernetes, Helm</li>
                    <li>Nginx</li>
                    <li>CI/CD: GitHub Actions, Jenkins, GitLab CI</li>
                    <li>AWS: IAM, EC2, S3, RDS, ELB, Auto Scaling, VPC</li>
                    <li>Yandex.Cloud</li>
                    <li>Ansible</li>
                </ul>
            </div>

            <div class="tech-category loading">
                <h3><i class="fas fa-database"></i> Базы данных</h3>
                <ul class="tech-list">
                    <li>PostgreSQL</li>
                    <li>Redis</li>
                </ul>
            </div>

            <div class="tech-category loading">
                <h3><i class="fas fa-exchange-alt"></i> Очереди сообщений</h3>
                <ul class="tech-list">
                    <li>RabbitMQ, Celery</li>
                </ul>
            </div>

            <div class="tech-category loading">
                <h3><i class="fas fa-chart-line"></i> Мониторинг</h3>
                <ul class="tech-list">
                    <li>Elasticsearch, Loki, Kibana</li>
                    <li>Prometheus, Grafana</li>
                    <li>Zabbix</li>
                    <li>Graylog</li>
                </ul>
            </div>

            <div class="tech-category loading">
                <h3><i class="fas fa-vial"></i> Тестирование</h3>
                <ul class="tech-list">
                    <li>Pytest</li>
                    <li>pre-commit</li>
                </ul>
            </div>

            <div class="tech-category loading">
                <h3><i class="fas fa-code-branch"></i> Системы контроля версий</h3>
                <ul class="tech-list">
                    <li>Git (Git Flow)</li>
                </ul>
            </div>

            <div class="tech-category loading">
                <h3><i class="fas fa-tools"></i> Инструменты разработки</h3>
                <ul class="tech-list">
                    <li>Postman</li>
                    <li>GitLab, GitHub</li>
                    <li>Jira, Redmine</li>
                    <li>Confluence</li>
                </ul>
            </div>

            <div class="tech-category loading">
                <h3><i class="fab fa-linux"></i> ОС</h3>
                <ul class="tech-list">
                    <li>Debian, Ubuntu, Linux</li>
                    <li>Windows</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section">
        <h2 class="section-title">Опыт работы</h2>

        <div class="experience-item loading">
            <h3 class="experience-title">Перекресток</h3>
            <p class="experience-company">Ведущий специалист второй линии поддержки</p>
            <p class="experience-period">2018 – настоящее время</p>
            <p class="experience-description">
                Техническая поддержка и сопровождение онлайн-магазина "Перекресток Впрок". Мониторинг работоспособности
                интернет-магазина с использованием Zabbix и Graylog. Управление очередями RabbitMQ и демонами загрузки.
                Работа с боевыми базами данных, выполнение SQL-запросов. Администрирование серверов через SSH,
                настройка Nginx и PHP. Создание автоматизаций и Telegram-ботов на Python для отслеживания задач.
            </p>
        </div>

        <div class="experience-item loading">
            <h3 class="experience-title">Яндекс.Практикум</h3>
            <p class="experience-company">DevOps-инженер (стажёр)</p>
            <p class="experience-period">Апрель 2025 – настоящее время</p>
            <p class="experience-description">
                Осваиваю полный стек DevOps: CI/CD, контейнеризация, мониторинг, автоматизация инфраструктуры.
                Настройка пайплайнов с помощью Jenkins и GitLab CI. Infrastructure as Code с Ansible, управление NGINX,
                балансировка нагрузки, бэкапы. Работа с Docker, Kubernetes, Helm. Внедрение систем мониторинга
                (Prometheus, Grafana) в Linux и облачной среде Yandex.Cloud.
            </p>
        </div>

        <div class="experience-item loading">
            <h3 class="experience-title">CoreBlocks</h3>
            <p class="experience-company">Python Developer</p>
            <p class="experience-period">Август 2022 – Апрель 2025</p>
            <p class="experience-description">
                Разработка и поддержка высоконагруженных backend-систем для различных проектов. Создание backend для
                NFT-маркетплейса на базе сети LRC с автоматизацией операций с NFT. Разработка сканеров событий в
                блокчейн-сетях. Управление AWS-окружениями, настройка систем мониторинга (Elasticsearch, Prometheus, Grafana).
                Настройка CI/CD GitHub Actions, работа с Docker и Git Flow.
            </p>
        </div>

        <div class="experience-item loading">
            <h3 class="experience-title">SIB5</h3>
            <p class="experience-company">Python Developer</p>
            <p class="experience-period">Декабрь 2021 – Октябрь 2022</p>
            <p class="experience-description">
                Разработка backend-системы для поиска и деперсонализации персональных данных. Создание высоконагруженной
                системы обработки документов с акцентом на безопасность. Разработка параллельных процессов с использованием
                Python библиотек для обработки больших объемов данных. Работа с Django, DRF, RabbitMQ, Celery, Docker.
            </p>
        </div>

        <div class="experience-item loading">
            <h3 class="experience-title">Евросеть (Россия) Про-сервис</h3>
            <p class="experience-company">Инженер ТБТ (торгово-банковская техника)</p>
            <p class="experience-period">Май 2016 – Сентябрь 2018</p>
            <p class="experience-description">
                Удаленное и выездное обслуживание ИТ-оборудования, оргтехники, компьютерных сетей, кассового и торгового
                оборудования. Поддержка серверов, рабочих станций, торгового ПО, эквайринга. Обслуживание сетевого
                оборудования, монтаж ЛВС, видеонаблюдения, систем пожарной сигнализации, телефонии.
            </p>
        </div>

        <div class="experience-item loading">
            <h3 class="experience-title">Региональный платежный центр ООО</h3>
            <p class="experience-company">Руководитель технического отдела</p>
            <p class="experience-period">Июнь 2012 – Январь 2016</p>
            <p class="experience-description">
                Организация работы технического отдела, планирование и контроль работ по установке, монтажу, настройке,
                обслуживанию компьютерного оборудования и платежных терминалов. Руководство сотрудниками отдела,
                диагностика и ремонт оборудования, участие в конкурсах и аукционах.
            </p>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
        <h2 class="section-title">Примеры проектов</h2>
        <div class="projects-grid">
            <div class="project-card loading">
                <h3 class="project-title">Перекресток Впрок</h3>
                <p>Техническая поддержка и сопровождение онлайн-магазина. Мониторинг, автоматизация процессов, создание Telegram-ботов</p>
                <a href="https://www.perekrestok.ru/" class="project-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Посетить сайт
                </a>
            </div>

            <div class="project-card loading">
                <h3 class="project-title">Startup Wise Guys</h3>
                <p>Участие в акселерационной программе для стартапов</p>
                <a href="https://startupwiseguys.com/" class="project-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Посетить сайт
                </a>
            </div>

            <div class="project-card loading">
                <h3 class="project-title">CyberCrew NFT</h3>
                <p>Разработка и запуск платформы для работы с NFT</p>
                <a href="https://cybercrewnft.io/" class="project-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Посетить сайт
                </a>
            </div>

            <div class="project-card loading">
                <h3 class="project-title">AR Voyage</h3>
                <p>Работа над 3D веб-приложением</p>
                <a href="https://ar.voyage/" class="project-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Посетить сайт
                </a>
            </div>

            <div class="project-card loading">
                <h3 class="project-title">Dotcore</h3>
                <p>NFT-маркетплейс на базе сети LRC</p>
                <a href="https://dotcore.io/" class="project-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Посетить сайт
                </a>
            </div>
        </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="section">
        <h2 class="section-title">Образование и курсы</h2>
        <div class="education-grid">
            <div class="education-item loading">
                <h3 class="education-title">DevOps для эксплуатации и разработки</h3>
                <p class="education-company">Яндекс.Практикум</p>
                <p class="education-period">2025 – настоящее время</p>
                <p class="education-description">
                    Осваиваю полный стек DevOps: CI/CD, контейнеризация, мониторинг, автоматизация инфраструктуры.
                    Работа с Docker, Kubernetes, Helm, Ansible, Jenkins, GitLab CI.
                </p>
            </div>

            <div class="education-item loading">
                <h3 class="education-title">Service Desk и процессы поддержки ИТ услуг</h3>
                <p class="education-company">Учебный центр «Специалист» при МГТУ им. Н.Э. Баумана</p>
                <p class="education-period">2021</p>
                <p class="education-description">
                    Изучение процессов поддержки ИТ-услуг, работа с системами тикетов, управление инцидентами.
                </p>
            </div>

            <div class="education-item loading">
                <h3 class="education-title">Основы управления ИТ услугами по ITIL® 4.0</h3>
                <p class="education-company">Учебный центр «Специалист» при МГТУ им. Н.Э. Баумана</p>
                <p class="education-period">2021</p>
                <p class="education-description">
                    Изучение методологии ITIL 4.0 для управления ИТ-услугами и процессами.
                </p>
            </div>

            <div class="education-item loading">
                <h3 class="education-title">Прикладная информатика</h3>
                <p class="education-company">Филиал Московской академии предпринимательства при Правительстве Москвы</p>
                <p class="education-period">2007</p>
                <p class="education-description">
                    Высшее образование по специальности "Информатик – Юрист".
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
        <h2 class="section-title">Контакты</h2>
        <div class="contact-grid">
            <div class="contact-item loading">
                <div class="contact-icon">
                    <i class="fab fa-github"></i>
                </div>
                <div class="contact-label">GitHub</div>
                <a href="https://github.com/MikhailKravchenko" class="contact-value contact-link" target="_blank">
                    MikhailKravchenko
                </a>
            </div>

            <div class="contact-item loading">
                <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-label">Email</div>
                <a href="mailto:pirog11@ya.ru" class="contact-value contact-link">
                    pirog11@ya.ru
                </a>
            </div>

            <div class="contact-item loading">
                <div class="contact-icon">
                    <i class="fab fa-telegram"></i>
                </div>
                <div class="contact-label">Telegram</div>
                <a href="https://t.me/pirog" class="contact-value contact-link" target="_blank">
                    @pirog
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2025 Mikhail Kravchenko. Создано с ❤️ и современными технологиями.</p>
            <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">
                Python Developer | DevOps Engineer | 15+ лет опыта в IT
            </p>
        </div>
    </footer>

    <script>
        // Particles.js Configuration
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#00d4ff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00d4ff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                }
            });
        }, observerOptions);

        // Observe all loading elements
        document.querySelectorAll('.loading').forEach(el => {
            observer.observe(el);
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                nav.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });

        // Typing effect for hero title
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';

            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }

            type();
        }

        // Initialize typing effect after page load
        window.addEventListener('load', () => {
            const heroTitle = document.querySelector('.hero-title');
            const originalText = heroTitle.textContent;
            setTimeout(() => {
                typeWriter(heroTitle, originalText, 80);
            }, 1000);
        });

        // Add hover effects to tech categories
        document.querySelectorAll('.tech-category').forEach(category => {
            category.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });

            category.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add click effects to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });

        // Add floating animation to random elements
        function addFloatingAnimation() {
            const elements = document.querySelectorAll('.tech-category, .project-card, .contact-item');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.animationDelay = `${index * 0.2}s`;
                    el.classList.add('floating');
                }, index * 100);
            });
        }

        // Initialize floating animations
        setTimeout(addFloatingAnimation, 2000);

        // Console welcome message
        console.log('%c🚀 Добро пожаловать на мою страницу!', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
        console.log('%c💻 Python Developer | Backend Systems | Blockchain Integration', 'color: #0099cc; font-size: 14px;');
    </script>

</body>
</html>
