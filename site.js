const typeButtons = [...document.querySelectorAll('[data-publication-type]')];
if (typeButtons.length) {
  const papers = [...document.querySelectorAll('.publication-list .publication-row')];
  const empty = document.querySelector('.publication-empty');
  let selectedType = 'all';
  const filterPublications = () => {
    let visibleCount = 0;
    papers.forEach(paper => {
      const visible = selectedType === 'all' || paper.dataset.type === selectedType;
      paper.hidden = !visible;
      if (visible) visibleCount++;
    });
    if (empty) empty.hidden = visibleCount > 0;
    typeButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.publicationType === selectedType)));
  };
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

const emailButton = document.getElementById('name-email-button');
const emailDialog = document.getElementById('email-dialog');
const emailClose = document.getElementById('email-close');
if (emailButton && emailDialog && emailClose) {
  emailButton.addEventListener('click', () => emailDialog.showModal());
  emailClose.addEventListener('click', () => emailDialog.close());
  emailDialog.addEventListener('click', event => {
    if (event.target === emailDialog) emailDialog.close();
  });
  emailDialog.addEventListener('close', () => emailButton.focus());
}

const projectGallery = document.querySelector('.project-gallery');
if (projectGallery) {
  const figure = projectGallery.querySelector('.project-gallery-image');
  const status = projectGallery.querySelector('.project-gallery-status');
  const slides = [
    { box: '0 0 1280 720', label: 'Complete study figure' },
    { box: '0 0 873 720', label: 'Video stimuli' },
    { box: '873 0 407 720', label: 'Brain connectivity' }
  ];
  let current = 0;
  const changeFigure = step => {
    current = (current + step + slides.length) % slides.length;
    figure.setAttribute('viewBox', slides[current].box);
    figure.setAttribute('aria-label', slides[current].label);
    status.textContent = slides[current].label;
  };
  projectGallery.querySelector('.project-gallery-prev').addEventListener('click', () => changeFigure(-1));
  projectGallery.querySelector('.project-gallery-next').addEventListener('click', () => changeFigure(1));
}

const copyEmail = document.getElementById('copy-email');
const copyEmailStatus = document.getElementById('copy-email-status');
if (copyEmail && copyEmailStatus) {
  let copyStatusTimeout;
  copyEmail.addEventListener('click', async () => {
    clearTimeout(copyStatusTimeout);
    try {
      await navigator.clipboard.writeText(copyEmail.dataset.email);
      copyEmail.textContent = 'Copied!';
      copyEmail.setAttribute('aria-label', 'Email address copied');
      copyEmailStatus.textContent = '';
    } catch {
      copyEmail.textContent = 'Copy';
      copyEmailStatus.textContent = 'Select the address to copy.';
    }
    copyStatusTimeout = setTimeout(() => {
      copyEmail.textContent = 'Copy';
      copyEmail.setAttribute('aria-label', 'Copy email address');
      copyEmailStatus.textContent = '';
    }, 3000);
  });
}
