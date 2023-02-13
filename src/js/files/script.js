// Подключение функционала "Чертогов Фрилансера"
import { isMobile, menuOpen, menuClose } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import { gotoBlock } from "./scroll/gotoblock.js";

let md3 = window.matchMedia('(max-width: 767px)');
document.addEventListener('DOMContentLoaded', function() {
  const headerOpen = document.querySelector('.header__open');
  if (headerOpen) {
    const iconMenu = document.querySelector('.icon-menu');
    let top = iconMenu ? iconMenu.getBoundingClientRect().top : 100;
    headerOpen.style.top = `${top+iconMenu.offsetHeight/2}px`;
    headerOpen.addEventListener('click', (e)=>{
      document.documentElement.classList.contains('menu-open') ? menuClose() : menuOpen();
    })
  }
  window.addEventListener('resize', (e)=>{
    menuBodySetTop();
  });
  setTimeout(() => {
    menuBodySetTop();
  }, 300);

  const ontop = document.querySelector('#ontop');
  ontop ? ontopActions(ontop) : null;

  const filterParents =document.querySelectorAll('[data-filters]');
  filterParents.length ? filterParents.forEach(filterParent=>{
    filtersActions(filterParent);
  }) : null;

  const productInfo = document.querySelector('.info-product');
  const productImgs =document.querySelectorAll('.media-product__slide img');
  if (productInfo&&productImgs.length&&!document.querySelector('.news-one')) {
    productInfoImgsActions(productInfo, productImgs);
    window.addEventListener('resize', ()=>{
      productInfoImgsActions(productInfo, productImgs);
    })
  }
})


function menuBodySetTop() {
  const menuBody = document.querySelector('.menu__body');
  const hero = document.querySelector('.hero__wrapper');
  let topPage = document.querySelector('.toppage');
  let headerHeight = document.querySelector('header.header').offsetHeight;
  if (md3.matches) {
    if (menuBody) {
      menuBody.style = `top: ${headerHeight}px; height: calc(100vh - ${headerHeight}px)`;
      topPage?topPage.style = `top: ${headerHeight}px;`: null;
    }
    topPage&&hero ? hero.style=`padding-top: ${topPage.offsetHeight}px` : null;
  } else {
    menuBody ? menuBody.style = `` : null;
    topPage&&hero ? hero.style=`padding-top: ${topPage.offsetHeight}px` : null;
    topPage?topPage.style = ``: null;
  }
}

function ontopActions(ontop) {
  ontop.addEventListener('click', (e)=>{
    e.preventDefault();
    gotoBlock('.wrapper');
  })

  let offset = ontop.hasAttribute('data-offset')&&!isNaN(parseInt(ontop.getAttribute('data-offset'))) ? parseInt(ontop.getAttribute('data-offset')) : 250;
  window.addEventListener('scroll', (e)=>{
    pageYOffset >= offset ? ontop.classList.remove("_hidden") : ontop.classList.add("_hidden");
  })
}

function filtersActions(filterParent) {
  const filterOpenButton = filterParent.querySelector('[data-filters-open]');
  const filterBody = filterParent.querySelector('[data-filters-body]');
  const filterSbrosButtons =filterParent.querySelectorAll('[data-filters-sbros]');
  const filterItems =filterParent.querySelectorAll('[data-filters-item]');
  filterCheck();
  document.addEventListener('change', filterCheck)
  document.addEventListener('input', filterCheck)
  if (filterOpenButton&&filterBody) {
    filterOpenButton.addEventListener('click', (e)=>{
      e.preventDefault();
      filterBody.classList.toggle('_active');
    });
    document.addEventListener('click', (e)=>{
      if ((e.target!==filterOpenButton&&!e.target.closest('[data-filters-body]'))||e.target.closest('.filters-hero__ok')||e.target.closest('[data-filters-close]')) {
        filterBody.classList.remove('_active');
      }
    })
  }
  filterSbrosButtons.length ? filterSbrosButtons.forEach(filterSbrosButton=>{
    filterSbrosButton.addEventListener('click', (e)=>{
      e.preventDefault();
      let parent = filterSbrosButton.closest('[data-filters-item]');
      if (parent) {
        const textinputs = parent.querySelectorAll('input');
        textinputs.length ? textinputs.forEach(textinput=>{
          let type = textinput.getAttribute('type');
          if (type==='checkbox'||type==='radio') {
            textinput.checked = false;
          } else {
            textinput.value = '';
          }
        }) : null;
        filterCheck();
      }
    })
  }) : null;


  function filterCheck() {
    filterItems ? filterItems.forEach(filterItem => {
      let arr = [];
      const inputs = filterItem.querySelectorAll('input');
      inputs.length ? inputs.forEach(input=>{
        let type = input.getAttribute('type');
        if (type==='checkbox'||type==='radio') {
          if (input.checked) {
            arr.push(input);
          }
        } else {
          if (input.value !== '') {
            arr.push(input);
          }
        }
      }) : null;
      if (arr.length) {
        filterItem.classList.add('_changed');
      } else {
        filterItem.classList.remove('_changed');
      }
    }) : null
  }
}

function productInfoImgsActions(productInfo, productImgs) {
  productInfo.style.minHeight = '';
  let productInfoHeight = productInfo.offsetHeight;
  productInfo.style.minHeight = window.innerWidth > 650 ? `${productInfoHeight*1.1}px` : '';
  productImgs.forEach(productImg=>{
    productImg.style.maxHeight = window.innerWidth > 650 ? `${productInfoHeight}px` : '';
  })
}