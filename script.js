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

  // Teacher info modal
  const equipeNomes = document.querySelectorAll('.equipe-nome');
  const modal = document.getElementById('equipeModal');

  if (modal) {
    const modalTitle = modal.querySelector('.equipe-modal-title');
    const modalRole = modal.querySelector('.equipe-modal-role');
    const modalBody = modal.querySelector('.equipe-modal-body');

    const openModal = (nome) => {
      const card = nome.closest('.equipe-card');
      const role = card.querySelector('.equipe-role');
      const balao = card.querySelector('.equipe-balao');

      modalTitle.textContent = nome.textContent;
      modalRole.textContent = role ? role.textContent : '';
      modalBody.innerHTML = balao ? balao.innerHTML : '';

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    equipeNomes.forEach(nome => {
      nome.addEventListener('click', () => openModal(nome));
      nome.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(nome);
        }
      });
    });

    modal.querySelectorAll('[data-close]').forEach(el => {
      el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });
  }

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
