const yearFilter = document.getElementById('year-filter');
if (yearFilter) {
  const typeButtons = [...document.querySelectorAll('[data-publication-type]')];
  const groups = [...document.querySelectorAll('.year-group[data-year]')];
  const empty = document.querySelector('.publication-empty');
  let selectedType = 'all';
  const filterPublications = () => {
    let visibleCount = 0;
    groups.forEach(group => {
      const matchesYear = yearFilter.value === 'all' || group.dataset.year === yearFilter.value;
      let groupCount = 0;
      group.querySelectorAll('.publication-row').forEach(paper => {
        const visible = matchesYear && (selectedType === 'all' || paper.dataset.type === selectedType);
        paper.hidden = !visible;
        if (visible) groupCount++;
      });
      group.hidden = groupCount === 0;
      visibleCount += groupCount;
    });
    if (empty) empty.hidden = visibleCount > 0;
    typeButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.publicationType === selectedType)));
  };
  yearFilter.addEventListener('change', filterPublications);
  typeButtons.forEach(button => button.addEventListener('click', () => {
    selectedType = button.dataset.publicationType;
    filterPublications();
  }));
  filterPublications();
}

const viewer = document.querySelector('.image-viewer');
if (viewer) {
  let slides = [
    { box: '0 0 1280 720', label: 'Complete study figure' },
    { box: '0 0 873 720', label: 'Video stimuli — figure detail' },
    { box: '873 0 407 720', label: 'Brain connectivity — figure detail' }
  ];
  const image = viewer.querySelector('.viewer-image');
  const status = viewer.querySelector('.viewer-status');
  let current = 0;
  let opener;
  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    if (slides[current].src) image.querySelector('image').setAttribute('href', slides[current].src);
    image.setAttribute('viewBox', slides[current].box);
    image.setAttribute('aria-label', slides[current].label);
    status.textContent = `${current + 1} / ${slides.length} · ${slides[current].label}`;
  };
  document.querySelectorAll('[data-gallery-index]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      opener = link;
      if (viewer.dataset.gallery === 'news') {
        slides = [...link.closest('.news-gallery').querySelectorAll('a[data-gallery-index]')].slice(0, 3).map(item => ({
          src: item.getAttribute('href'),
          box: item.dataset.viewbox || '0 0 1280 720',
          label: item.querySelector('img').alt
        }));
      }
      showSlide(Number(link.dataset.galleryIndex));
      viewer.showModal();
      document.body.classList.add('viewer-open');
    });
  });
  viewer.querySelector('.viewer-prev').addEventListener('click', () => showSlide(current - 1));
  viewer.querySelector('.viewer-next').addEventListener('click', () => showSlide(current + 1));
  viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showSlide(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
  viewer.addEventListener('close', () => {
    document.body.classList.remove('viewer-open');
    opener?.focus();
  });
}

const newsList = document.querySelector('.news-list');
if (newsList) {
  const newsRows = [...newsList.querySelectorAll(':scope > .news-row')];
  const latestNews = newsRows.reduce((latest, row) => {
    const date = Date.parse(row.querySelector('time[datetime]')?.dateTime || '');
    return Number.isFinite(date) && (!latest || date > latest.date) ? { row, date } : latest;
  }, null);
  const latestTitle = latestNews?.row.querySelector('.news-copy h3');
  if (latestTitle) {
    const badge = document.createElement('span');
    badge.className = 'news-new-badge';
    badge.textContent = 'NEW';
    badge.setAttribute('aria-label', 'Latest news');
    latestTitle.append(' ', badge);
  }

  const sizeNewsList = () => {
    const scrollable = newsRows.length > 5;
    if (scrollable) {
      const fifth = newsRows[4];
      newsList.style.maxHeight = `${fifth.offsetTop + fifth.offsetHeight - newsRows[0].offsetTop}px`;
      newsList.tabIndex = 0;
    } else {
      newsList.style.maxHeight = '';
      newsList.removeAttribute('tabindex');
    }
  };
  sizeNewsList();
  const newsResizeObserver = new ResizeObserver(sizeNewsList);
  newsRows.forEach(row => newsResizeObserver.observe(row));
}
