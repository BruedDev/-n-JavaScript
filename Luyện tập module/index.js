import Header from "./allModule/Header/index.js";
import { nav_list } from './allModule/Header/index.js';
const nav = () => {
  const navElement = document.querySelector('.nav');

  nav_list.map((item, _) => {
    const value = Object.values(item)[0];

    navElement.innerHTML += `
      <ul class="nav__list">
        <li class="nav__item">
          <span class="span">${value}</span>
        </li>
      </ul>
    `;
  });
};
nav()
Header();
