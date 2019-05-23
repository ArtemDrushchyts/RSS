window.onload = () => {
  const div = document.createElement('div');
  const input = document.createElement('input');
  input.placeholder = 'Enter request';
  input.id = 'search';
  div.id = 'input';
  document.body.appendChild(div);
  div.style.margin = '0 auto';
  div.appendChild(input);
  const wrap = document.createElement('main');
  wrap.id = 'wrap';
  wrap.classList = 'wrap';
  document.body.appendChild(wrap);
};
export default class AppView {
  constructor(cards) {
    this.cards = cards;
  }

  render() {
    const contentDiv = document.getElementById('cont');
    const wrap = document.getElementById('wrap');
    if (contentDiv) {
      contentDiv.remove();
    }

    const content = document.createElement('div');
    content.innerHTML = this.cards.map(card => `<div class="clip">${card}</div>`).join('');
    content.id = 'cont';
    content.classList = 'clips';
    wrap.appendChild(content);

    const slider = document.querySelector('.clips');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      // eslint-disable-next-line prefer-destructuring
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });
  }
}
