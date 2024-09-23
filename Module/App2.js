import { ArrNavList, Products } from "./AllModules/index.js";
const NavList = () => {
  const nav = document.querySelector('.nav');
  ArrNavList.map(item => {
    const itemValue = Object.values(item)[0];
    nav.innerHTML += `
    <ul class="nav__list">
          <li class="nav__item">
            <span class="nav__span">
              ${itemValue}
            </span>
          </li>
      </ul>
    `
  })
}
NavList();

const displayProducts = (limit) => {
  Products(limit).then(products => {
    const content__main = document.querySelector('.content__main');
    products.forEach(item => {
      content__main.innerHTML += `
        <div class="title">${item.title} ${item.id}</div>
        <img src="${item.thumbnail}" alt="" />
      `;
    });
  });
};

displayProducts(10);
