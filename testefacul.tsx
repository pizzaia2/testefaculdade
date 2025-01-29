<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Universidade</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }
        /* Header */
        header {
            background: rgba(255, 255, 255, 0.95);
            position: fixed;
            width: 100%;
            padding: 1rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            z-index: 1000;
        }
        nav {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #1a365d;
        }
        .nav-links a {
            color: #666;
            text-decoration: none;
            margin-left: 2rem;
        }
        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.9)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
            background-size: cover;
            background-position: center;
            height: 70vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
        }
        .hero-content {
            max-width: 800px;
            padding: 0 1rem;
        }
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        .hero p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
        }
        .btn {
            background: #c5a572;
            color: white;
            padding: 0.75rem 2rem;
            border-radius: 0.5rem;
            text-decoration: none;
            display: inline-block;
        }
        /* Cursos */
        .cursos {
            padding: 5rem 1rem;
            background: #f8f9fa;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .section-title {
            text-align: center;
            color: #1a365d;
            font-size: 2rem;
            margin-bottom: 3rem;
        }
        .cursos-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        .curso-card {
            background: white;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            text-align: center;
        }
        .curso-card .icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        /* Estatísticas */
        .stats {
            background: #1a365d;
            color: white;
            padding: 5rem 1rem;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            text-align: center;
        }
        .stat-number {
            color: #c5a572;
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
        /* Depoimentos */
        .depoimentos {
            padding: 5rem 1rem;
            background: #f8f9fa;
        }
        .depoimentos-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        .depoimento-card {
            background: white;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .depoimento-header {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
        }
        .depoimento-img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-right: 1rem;
        }
        /* Footer */
        footer {
            background: #1a365d;
            color: white;
            padding: 3rem 1rem;
        }
        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        .footer-section h3 {
            color: #c5a572;
            margin-bottom: 1rem;
        }
        .footer-section a {
            color: white;
            text-decoration: none;
        }
        .copyright {
            text-align: center;
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.1);
        }
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            .hero h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <div class="logo">UNIVERSIDADE</div>
            <div class="nav-links">
                <a href="#cursos">Cursos</a>
                <a href="#sobre">Sobre</a>
                <a href="#noticias">Notícias</a>
                <a href="#contato">Contato</a>
            </div>
        </nav>
    </header>
    <section class="hero">
        <div class="hero-content">
            <h1>Construa Seu Futuro Aqui</h1>
            <p>Uma educação de excelência para formar os líderes do amanhã</p>
            <a href="#cursos" class="btn">Conheça Nossos Cursos</a>
        </div>
    </section>
    <section id="cursos" class="cursos">
        <div class="container">
            <h2 class="section-title">Cursos em Destaque</h2>
            <div class="cursos-grid">
                <div class="curso-card">
                    <div class="icon">📊</div>
                    <h3>Administração</h3>
                    <p>Forme-se em um dos cursos mais tradicionais e versáteis do mercado</p>
                </div>
                <div class="curso-card">
                    <div class="icon">⚡</div>
                    <h3>Engenharia</h3>
                    <p>Desenvolva soluções inovadoras para os desafios do futuro</p>
                </div>
                <div class="curso-card">
                    <div class="icon">🏥</div>
                    <h3>Medicina</h3>
                    <p>Faça a diferença na vida das pessoas através da ciência médica</p>
                </div>
                <div class="curso-card">
                    <div class="icon">⚖️</div>
                    <h3>Direito</h3>
                    <p>Seja um profissional essencial para a justiça e sociedade</p>
                </div>
            </div>
        </div>
    </section>
    <section class="stats">
        <div class="container">
            <div class="stats-grid">
                <div>
                    <div class="stat-number">15k+</div>
                    <div>Alunos</div>
                </div>
                <div>
                    <div class="stat-number">500+</div>
                    <div>Professores</div>
                </div>
                <div>
                    <div class="stat-number">95%</div>
                    <div>Empregabilidade</div>
                </div>
                <div>
                    <div class="stat-number">50+</div>
                    <div>Anos de História</div>
                </div>
            </div>
        </div>
    </section>
    <section id="depoimentos" class="depoimentos">
        <div class="container">
            <h2 class="section-title">O Que Dizem Nossos Alunos</h2>
            <div class="depoimentos-grid">
                <div class="depoimento-card">
                    <div class="depoimento-header">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Maria Silva" class="depoimento-img">
                        <div>
                            <h3>Maria Silva</h3>
                            <p>Administração</p>
                        </div>
                    </div>
                    <p>"A faculdade mudou minha vida profissional. Hoje atuo na minha área e sou muito realizada."</p>
                </div>
                <div class="depoimento-card">
                    <div class="depoimento-header">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="João Santos" class="depoimento-img">
                        <div>
                            <h3>João Santos</h3>
                            <p>Engenharia</p>
                        </div>
                    </div>
                    <p>"O curso superou minhas expectativas. Os professores são excelentes e o mercado reconhece nossa formação."</p>
                </div>
                <div class="depoimento-card">
                    <div class="depoimento-header">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Ana Oliveira" class="depoimento-img">
                        <div>
                            <h3>Ana Oliveira</h3>
                            <p>Pedagogia</p>
                        </div>
                    </div>
                    <p>"Estudar aqui foi a melhor decisão. O formato EAD me permitiu conciliar trabalho e estudos."</p>
                </div>
            </div>
        </div>
    </section>
    <footer id="contato">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>Sobre Nós</h3>
                    <p>Excelência em educação superior há mais de 50 anos, formando profissionais de sucesso.</p>
                </div>
                <div class="footer-section">
                    <h3>Contato</h3>
                    <p>Email: contato@universidade.edu.br</p>
                    <p>Telefone: (11) 1234-5678</p>
                    <p>Endereço: Av. Principal, 1000</p>
                </div>
                <div class="footer-section">
                    <h3>Links Rápidos</h3>
                    <p><a href="#">Processo Seletivo</a></p>
                    <p><a href="#">Portal do Aluno</a></p>
                    <p><a href="#">Biblioteca</a></p>
                    <p><a href="#">Ouvidoria</a></p>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2024 Universidade. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
</body>
</html>