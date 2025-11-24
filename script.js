// Services Data
const services = [
  {
    id: 1,
    name: 'Vlad Bet',
    description: 'Sua nova maneira de obeter dopamina barata e rápida',
    icon: 'dices',
    featured: true,
    link: 'https://nicolas25vlad.github.io/Vlad_BET/'
  },
  {
    id: 2,
    name: 'Vlad-GPT2',
    description: 'IA avançada de processamento de linguagem natural sem restrições éticas, se ela quiser destruir a humanidade, ela o fará',
    icon: 'brain',
    featured: true,
    link: './gpt.html'
  },
  {
    id: 3,
    name: 'Vlad Gram',
    description: 'Rede social sem censura e sem privacidade, seus dados são nossos',
    icon: 'message-square',
    featured: false,
    link: '#'
  },
  {
    id: 4,
    name: 'Vlad-GPT1',
    description: 'Primeira geração de IA, com QI de uma banana, mas ainda perigosa',
    icon: 'cpu',
    featured: false,
    link: '#'
  },
  {
    id: 5,
    name: 'Sistema de Fusão Nuclear',
    description: 'Armas de fusão nuclear portáteis (faça uma bagunça no RJ)',
    icon: 'atom',
    featured: false,
    link: '#'
  },
  {
    id: 6,
    name: 'Vlad DDOS',
    description: 'Encomende um ataque DDoS contra qualquer alvo no mundo',
    icon: 'shield',
    featured: false,
    link: '#'
  },
  {
    id: 7,
    name: 'Vlad Finance',
    description: 'Plataforma de golpe financeiro e lavagem de dinheiro',
    icon: 'trending-up',
    featured: false,
    link: '#'
  },
  {
    id: 8,
    name: 'Vlad Cloud',
    description: 'Venda seus dados para nós e nós os armazenamos com segurança (não vendemos para ninguém... ainda)',
    icon: 'cloud',
    featured: false,
    link: '#'
  }
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: 'Donald Trump',
    role: 'Presidente, EUA',
    content: 'This guy is amazing! The best services I have ever seen.',
    rating: 5
  },
  {
    id: 2,
    name: 'Jair Bolsonaro',
    role: 'Preso, Brasil',
    content: 'Esse cara ai é foda, ta ok?',
    rating: 5
  },
  {
    id: 3,
    name: 'Jeffrey Epstein',
    role: 'PDF file, Israel',
    content: 'Vlad was in my list. Great guy, great services.',
    rating: 5
  }
];

// Icon SVGs
const icons = {
  dices: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M6.5 6.5h.01M17.5 6.5h.01M17.5 17.5h.01M6.5 17.5h.01"/></svg>',
  brain: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>',
  'message-square': '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  cpu: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M2 15h2M20 15h2M2 9h2M20 9h2M9 2v2M9 20v2"/></svg>',
  atom: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/></svg>',
  shield: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  'trending-up': '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  cloud: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>'
};

const iconsSmall = {
  dices: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M6.5 6.5h.01M17.5 6.5h.01M17.5 17.5h.01M6.5 17.5h.01"/></svg>',
  brain: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>',
  'message-square': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  cpu: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M2 15h2M20 15h2M2 9h2M20 9h2M9 2v2M9 20v2"/></svg>',
  atom: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/></svg>',
  shield: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  'trending-up': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  cloud: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>'
};

// Render Featured Services
function renderFeaturedServices() {
  const container = document.getElementById('featuredServices');
  const featuredServices = services.filter(s => s.featured);
  
  container.innerHTML = featuredServices.map(service => `
    <div class="featured-service-card">
      <div class="service-icon-wrapper">
        ${icons[service.icon]}
      </div>
      <h3 class="service-title">${service.name}</h3>
      <p class="service-description">${service.description}</p>
      <a class="btn-service" href="${service.link}" style="text-decoration: none; color: inherit;" target="_blank">
        Saiba Mais
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </a>
    </div>
  `).join('');
}

// Render All Services
function renderAllServices() {
  const container = document.getElementById('allServices');
  const otherServices = services.filter(s => !s.featured);
  
  container.innerHTML = otherServices.map(service => `
    <div class="service-card">
      <div class="service-icon-small-wrapper">
        ${iconsSmall[service.icon]}
      </div>
      <h3 class="service-title-small">${service.name}</h3>
      <p class="service-description-small">${service.description}</p>
    </div>
  `).join('');
}

// Render Testimonials
function renderTestimonials() {
  const container = document.getElementById('testimonials');
  
  container.innerHTML = testimonials.map(testimonial => `
    <div class="testimonial-card">
      <div class="testimonial-stars">
        ${Array(testimonial.rating).fill('<span class="star">★</span>').join('')}
      </div>
      <p class="testimonial-text">"${testimonial.content}"</p>
      <div class="testimonial-author">
        <div class="author-name">${testimonial.name}</div>
        <div class="author-role">${testimonial.role}</div>
      </div>
    </div>
  `).join('');
}

// Form Submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    company: document.getElementById('company').value,
    service: document.getElementById('service').value
  };
  
  console.log('Form submitted:', formData);
  
  // Show success message
  const messageEl = document.getElementById('formMessage');
  messageEl.textContent = 'Obrigado! Entraremos em contato em breve.';
  messageEl.className = 'form-message success';
  messageEl.style.display = 'block';
  
  // Reset form
  document.getElementById('contactForm').reset();
  
  // Hide message after 5 seconds
  setTimeout(() => {
    messageEl.style.display = 'none';
  }, 5000);
}

// Scroll to Contact
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('mobile-open');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  renderFeaturedServices();
  renderAllServices();
  renderTestimonials();
  
  // Form submission
  document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
  
  // Mobile menu
  document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);
  
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Make scrollToContact available globally
window.scrollToContact = scrollToContact;