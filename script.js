// ==========================================
// Clubinho Verde Amarelo - Scripts
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close menu on link click
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Scroll animations
  const fadeElements = document.querySelectorAll(
    '.about-card, .info-card, .turma-card, .evento-card, .equipe-card, .contato-card'
  );

  fadeElements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  fadeElements.forEach(el => observer.observe(el));

  // Teacher info balloon toggle
  const equipeNomes = document.querySelectorAll('.equipe-nome');

  const closeAllBaloes = () => {
    equipeNomes.forEach(nome => {
      nome.closest('.equipe-card').classList.remove('open');
      nome.setAttribute('aria-expanded', 'false');
    });
  };

  equipeNomes.forEach(nome => {
    const toggle = (e) => {
      e.stopPropagation();
      const card = nome.closest('.equipe-card');
      const isOpen = card.classList.contains('open');
      closeAllBaloes();
      if (!isOpen) {
        card.classList.add('open');
        nome.setAttribute('aria-expanded', 'true');
      }
    };

    nome.addEventListener('click', toggle);
    nome.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle(e);
      }
    });
  });

  // Close balloons when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.equipe-card')) {
      closeAllBaloes();
    }
  });

  // Active nav link highlight
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
