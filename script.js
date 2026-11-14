(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const layer = document.querySelector('.detail-layer');
  const panel = document.querySelector('.detail-panel');
  const content = document.querySelector('#detail-content');
  const openers = [...document.querySelectorAll('[data-open]')];
  let lastFocused = null;

  const projects = window.PORTFOLIO_PROJECTS || [];
  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);

  function projectMarkup(project, index) {
    return `<details class="project-card" data-category="${escapeHtml(project.category)}">
      <summary>
        <span class="project-number">${String(index + 1).padStart(2, '0')}</span>
        <span class="project-heading"><span class="project-name">${escapeHtml(project.name)}</span><span class="project-category">${escapeHtml(project.category)}</span></span>
        <span class="project-status">${escapeHtml(project.status)}</span>
        <span class="project-toggle" aria-hidden="true">+</span>
      </summary>
      <div class="project-copy source-content">${project.body}</div>
    </details>`;
  }

  const templates = {
    about: () => `
      <h2 id="detail-title">INTRODUCE</h2>
      <p class="detail-lede">궁금한 것은 직접 만들고 실험하며 배우는 컴퓨터공학 학생, 이수아입니다.</p>
      <div class="detail-grid">
        <p class="detail-label">ABOUT / APPROACH</p>
        <div class="detail-body">
          <p>AI와 소프트웨어를 중심으로 웹 서비스, 로봇, 위성통신까지 서로 다른 분야를 연결합니다. 아이디어에서 멈추지 않고 직접 구현한 뒤, 다른 사람도 따라갈 수 있도록 과정과 한계를 정리하는 일을 중요하게 생각합니다.</p>
          <h3>FOCUS</h3>
          <ul class="tags"><li>SOFTWARE</li><li>AI & DATA</li><li>ROBOTICS</li><li>RESEARCH & SIMULATION</li></ul>
        </div>
      </div>`,
    community: () => `
      <h2 id="detail-title">COMMUNITY</h2>
      <p class="detail-lede">배운 것을 혼자 남겨두지 않고, 함께 실험할 수 있는 구조로 바꿉니다.</p>
      <div class="detail-grid">
        <p class="detail-label">LEADERSHIP / STUDY</p>
        <div class="detail-body">
          <h3>PARROT — PRESIDENT</h3>
          <p>AI/Data Science 학회장으로 산학·연합 프로젝트, 데이터톤, 동문 연사 행사를 기획하고 진행했습니다. 화재 탐지 드론과 PVD 증착률 예측 프로젝트는 참가 전에 기술과 데이터를 직접 점검해 실행 흐름을 정리했습니다.</p>
          <h3>SOGANG INTELLIGENCE TEAM</h3>
          <p>AI 논문을 문제, 방법, 실험, 한계로 나누어 분석하고 발표·토론합니다. 복잡한 연구를 정확하면서도 이해하기 쉬운 언어로 설명하는 역량을 기르고 있습니다.</p>
          <a href="https://parrot-alumni-2026.netlify.app/" target="_blank" rel="noreferrer">PARROT ALUMNI EVENT WEBSITE ↗</a>
        </div>
      </div>`,
    contact: () => `
      <h2 id="detail-title">CONTACT</h2>
      <p class="detail-lede">새로운 문제를 함께 정의하고, 실제로 움직이는 결과를 만들고 싶습니다.</p>
      <div class="detail-grid">
        <p class="detail-label">EMAIL / LOCATION</p>
        <div class="detail-body">
          <h3>PROFILE</h3><p><a href="https://github.com/adeomise" target="_blank" rel="noreferrer">github.com/adeomise ↗</a></p>
          <h3>BASE</h3><p>Seoul, Korea</p>
          <h3>INTERESTED IN</h3><ul class="tags"><li>PRODUCT ENGINEERING</li><li>AI APPLICATION</li><li>ROBOTICS</li><li>RESEARCH</li></ul>
        </div>
      </div>`,
    projects: () => `
      <h2 id="detail-title">PROJECTS</h2>
      <p class="detail-lede">직접 만들고, 분석하고, 기획한 ${projects.length}개의 작업입니다. 제목을 누르면 세부 내용을 펼쳐볼 수 있습니다.</p>
      <div class="project-filters" role="group" aria-label="분야별 프로젝트 보기">
        ${['전체', ...new Set(projects.map(project => project.category))].map(category => `<button type="button" data-filter="${escapeHtml(category)}" aria-pressed="${category === '전체'}">${escapeHtml(category)}</button>`).join('')}
      </div>
      <p class="project-count" aria-live="polite">전체 ${projects.length}개</p>
      <div class="project-list" aria-label="전체 프로젝트 목록">${projects.map(projectMarkup).join('')}</div>`
  };

  function filterProjects(category) {
    content.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    let count = 0;
    content.querySelectorAll('.project-card').forEach(card => {
      card.hidden = category !== '전체' && card.dataset.category !== category;
      if (!card.hidden) count++;
    });
    content.querySelector('.project-count').textContent = `${category} ${count}개`;
  }

  function openDetail(key) {
    if (!templates[key]) return;
    lastFocused = document.activeElement;
    content.innerHTML = templates[key]();
    panel.classList.toggle('is-projects', key === 'projects');
    layer.classList.add('is-open');
    layer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (window.gsap && !reduceMotion) {
      gsap.timeline().to('.detail-backdrop', { opacity: 1, duration: .35 }).to(panel, { x: 0, duration: .72, ease: 'power4.out' }, 0);
    } else {
      document.querySelector('.detail-backdrop').style.opacity = '1';
      panel.style.transform = 'translateX(0)';
    }
    panel.scrollTop = 0;
    panel.focus();
  }

  function closeDetail() {
    const finish = () => {
      layer.classList.remove('is-open');
      layer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      panel.style.transform = '';
      document.querySelector('.detail-backdrop').style.opacity = '';
      if (lastFocused) lastFocused.focus();
    };
    if (window.gsap && !reduceMotion) {
      gsap.timeline({ onComplete: finish }).to(panel, { x: '100%', duration: .55, ease: 'power3.in' }).to('.detail-backdrop', { opacity: 0, duration: .25 }, .2);
    } else finish();
  }

  function initVerticalProgress() {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: self => gsap.set('.progress span', { width: `${self.progress * 100}%` })
    });
  }

  function initShuttleEntrance() {
    const image = document.querySelector('.hero-shuttle');
    if (!window.gsap || reduceMotion) {
      image.style.visibility = 'visible';
      return;
    }
    gsap.set(image, { autoAlpha: 0 });
    const hero = document.querySelector('.panel-hero');
    const shuttle = image.parentElement;
    function enter() {
      shuttle.classList.add('is-entering');
      gsap.fromTo(image, {
        x: -hero.clientWidth * .95,
        y: -hero.clientHeight * .8,
        scale: .72,
        autoAlpha: 0
      }, {
        x: 0, y: 0, scale: 1, autoAlpha: 1,
        delay: .05, duration: 1.1, ease: 'power2.out',
        onComplete: () => {
          shuttle.classList.remove('is-entering');
          gsap.set(image, { clearProps: 'transform' });
        }
      });
    }
    if (image.complete) enter();
    else image.addEventListener('load', enter, { once: true });
  }

  openers.forEach(button => button.addEventListener('click', () => openDetail(button.dataset.open)));
  layer.addEventListener('click', event => {
    if (event.target.closest('[data-close]')) closeDetail();
    const filter = event.target.closest('[data-filter]');
    if (filter) filterProjects(filter.dataset.filter);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && layer.classList.contains('is-open')) closeDetail();
    if (event.key === 'Tab' && layer.classList.contains('is-open')) {
      const focusable = [...panel.querySelectorAll('a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])')].filter(element => element.getClientRects().length > 0);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === panel)) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });

  initVerticalProgress();
  initShuttleEntrance();
})();
