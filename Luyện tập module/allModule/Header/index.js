export default function Header() {
  const nav_items = document.querySelectorAll('.nav__item');
  const spans = document.querySelectorAll('.span');

  if (nav_items.length && spans.length) {
    spans[0].classList.add('active');

    nav_items.forEach((nav_item, index) => {
      nav_item.addEventListener('click', () => {
        spans.forEach(span => span.classList.remove('active'));
        if (spans[index]) {
          spans[index].classList.add('active');
        }
      });
    });
  } else {
    console.error('không tìm thấy');
  }
}
export const nav_list = [
  { home: 'home' },
  { about: 'about' },
  { facebook: 'facebook' },
  { youtube: 'youtube' },
  { hello: 'hello' },
];



