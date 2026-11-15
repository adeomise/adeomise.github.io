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
    return `<details class="project-card" data-category="${escapeHtml(project.category)}" data-featured="${project.featured}">
      <summary>
        <span class="project-number">${String(index + 1).padStart(2, '0')}</span>
        <span class="project-heading"><span class="project-name">${escapeHtml(project.name)}</span><span class="project-category">${escapeHtml(project.category)}${project.featured ? ' · 대표 프로젝트' : ''}</span></span>
        <span class="project-status">${escapeHtml(project.status)}</span>
        <span class="project-toggle" aria-hidden="true">+</span>
      </summary>
      <div class="project-copy source-content">${project.body}</div>
    </details>`;
  }

  const templates = {
    about: () => `
      <h2 id="detail-title">INTRODUCE</h2>
      <p class="detail-lede">움직이는 것의 원리를 배우고, 움직이게 하는 방법을 고민합니다.</p>
      <div class="detail-grid">
        <p class="detail-label">ABOUT / APPROACH</p>
        <div class="detail-body">
          <p><strong>이수아 · 서강대학교 컴퓨터공학 + 기계공학</strong></p>
          <p>기계공학에서 배운 원리와 컴퓨터공학의 기술을 바탕으로 다양한 분야를 탐구하고 있습니다.</p>
          <h3>FOCUS</h3>
          <ul class="tags"><li>AI / DATA</li><li>ROBOTICS</li><li>AEROSPACE</li></ul>
          <h3>SKILLS</h3>
          <ul class="tags"><li>Python</li><li>C</li><li>C++</li><li>OpenCV</li><li>WebGL</li></ul>
          <h3>자격증</h3>
          <ul class="tags"><li>SQLD</li></ul>
        </div>
      </div>`,
    community: () => `
      <h2 id="detail-title">COMMUNITY</h2>
      <p class="detail-lede">서강대학교에서 함께한 학회·연구 활동입니다.</p>
      <div class="detail-grid">
        <p class="detail-label">LEADERSHIP / STUDY</p>
        <div class="detail-body">
          <h3>PARROT — PRESIDENT</h3>
          <p>서강대학교 데이터사이언스 학회 Parrot에서 학회장으로 OT·MT와 동문 연사 행사를 기획·운영하고, 학회원들이 교류하고 함께 활동할 기회를 마련했습니다. 타 대학 학회와 연합 데이터톤을 기획해 데이터셋 선정부터 과제, 진행 방식, 시제품 시연과 발표 안내까지 준비했습니다. 화재 탐지 드론과 반도체 PVD 증착률 예측 프로젝트를 기획하고, 데이터와 기술을 사전 검토해 참가자용 개발 가이드와 진행 절차를 정리했습니다.</p>
          <h3>SOGANG INTELLIGENCE TEAM</h3>
          <p>대학원생이 운영하는 스터디에서 AI 논문의 문제의식, 방법론, 실험 결과와 한계를 분석했습니다. 논문을 발표 자료로 정리하고, 평가 지표와 연구 결과를 비교·해석하며 스터디원들과 토론했습니다. 관심 분야의 연구 흐름을 파악하고 복잡한 기술 내용을 명확히 설명하는 능력을 길렀습니다.</p>
          <a href="https://parrot-alumni-2026.netlify.app/" target="_blank" rel="noreferrer">PARROT ALUMNI EVENT WEBSITE ↗</a>
        </div>
      </div>`,
    contact: () => `
      <h2 id="detail-title">CONTACT</h2>
      <p class="detail-lede">새로운 문제를 함께 정의하고, 실제로 움직이는 결과를 만들고 싶습니다.</p>
      <div class="detail-grid">
        <p class="detail-label">PROFILE / INTERESTS</p>
        <div class="detail-body">
          <h3>PROFILE</h3><p><a href="https://github.com/adeomise" target="_blank" rel="noreferrer">github.com/adeomise ↗</a></p>
          <h3>INTERESTED IN</h3><ul class="tags"><li>PRODUCT ENGINEERING</li><li>AI APPLICATION</li><li>ROBOTICS</li><li>RESEARCH</li></ul>
        </div>
      </div>`,
    projects: () => `
      <h2 id="detail-title">PROJECTS</h2>
      <p class="detail-lede">궁금한 것을 찾아보고 직접 시도하며 쌓아 온 ${projects.length}개의 프로젝트입니다. 제목을 누르면 세부 내용을 펼쳐볼 수 있습니다.</p>
      <div class="project-filters" role="group" aria-label="프로젝트 필터">
        ${['전체', '대표 프로젝트', ...new Set(projects.map(project => project.category))].map(category => `<button type="button" data-filter="${escapeHtml(category)}" aria-pressed="${category === '전체'}">${escapeHtml(category)}</button>`).join('')}
      </div>
      <p class="project-count" aria-live="polite">전체 ${projects.length}개</p>
      <div class="project-list" aria-label="전체 프로젝트 목록">${projects.map(projectMarkup).join('')}</div>`
  };

  function filterProjects(category) {
    content.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    let count = 0;
    content.querySelectorAll('.project-card').forEach(card => {
      const matches = category === '대표 프로젝트' ? card.dataset.featured === 'true' : card.dataset.category === category;
      card.hidden = category !== '전체' && !matches;
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
})();
