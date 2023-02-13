/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
  const heroSlider = document.querySelector('.slider-hero');
	if (heroSlider) { // Указываем скласс нужного слайдера
    const heroNext = heroSlider.querySelector('.slider-hero__arrow_prev');
    const heroPrev = heroSlider.querySelector('.slider-hero__arrow_next');
    const heroPagin = heroSlider.querySelector('.slider-hero__pagination');
		// Создаем слайдер
		new Swiper(heroSlider, { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			*/
			pagination: {
				el: heroPagin,
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: heroPrev,
				nextEl: heroNext,
			},

			// Брейкпоинты
			/*
			*/
			breakpoints: {
				319: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 28,
				},
			},
			// События
			on: {

			}
		});
	}
  const infoSlider = document.querySelector('.info__slider');
	if (infoSlider) { // Указываем скласс нужного слайдера
    const heroPrev = infoSlider.querySelector('.slider-hero__arrow_prev');
    const heroNext = infoSlider.querySelector('.slider-hero__arrow_next');
    const heroPagin = infoSlider.querySelector('.slider-hero__pagination');
		// Создаем слайдер
		new Swiper(infoSlider, { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			speed: 800,
      spaceBetween: 20,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			*/
			pagination: {
				el: heroPagin,
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: heroPrev,
				nextEl: heroNext,
			},

			// Брейкпоинты
			/*
			*/
			// breakpoints: {
			// 	319: {
			// 		slidesPerView: 1,
			// 		spaceBetween: 20,
			// 	},
			// 	768: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 28,
			// 	},
			// },
			// События
			on: {

			}
		});
	}
  const clientsSlider = document.querySelector('.slider-clients');
	if (clientsSlider) { // Указываем скласс нужного слайдера
    const heroPrev = clientsSlider.querySelector('.slider-clients__arrow_prev');
    const heroNext = clientsSlider.querySelector('.slider-clients__arrow_next');
		// Создаем слайдер
		new Swiper(clientsSlider, { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			speed: 800,
      spaceBetween: 60,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			*/
			// pagination: {
			// 	el: heroPagin,
			// 	clickable: true,
			// },

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: heroPrev,
				nextEl: heroNext,
			},

			// Брейкпоинты
			/*
			*/
			breakpoints: {
				319: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 60,
				},
			},
			// События
			on: {

			}
		});
	}
  const mechSlider = document.querySelector('.slider-mech');
	if (mechSlider) { // Указываем скласс нужного слайдера
    const heroPagin = mechSlider.querySelector('.slider-hero__pagination');
		// Создаем слайдер
		new Swiper(mechSlider, { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			observer: true,
			observeParents: true,
			speed: 800,
      autoHeight: false,
      spaceBetween: 0,
      slidesPerView: 'auto',

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			*/
			pagination: {
				el: heroPagin,
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: heroPrev,
			// 	nextEl: heroNext,
			// },

			// Брейкпоинты
			/*
			*/
			// breakpoints: {
			// 	319: {
			// 		slidesPerView: 2,
			// 	},
			// 	480: {
			// 		slidesPerView: 3,
			// 	},
			// 	768: {
			// 		slidesPerView: 4,
			// 	},
			// },
			// События
			on: {

			}
		});
	}
  const similarSlider = document.querySelector('.similar__slider');
	if (similarSlider) { // Указываем скласс нужного слайдера
    const heroPrev = similarSlider.querySelector('.similar__arrow_prev');
    const heroNext = similarSlider.querySelector('.similar__arrow_next');
    const heroPagin = similarSlider.querySelector('.similar__pagination');
    const loop = similarSlider.hasAttribute('data-loop');
    const slidesPerView = similarSlider.hasAttribute('data-slides') ? parseFloat(similarSlider.getAttribute('data-slides')) : 5;
		// Создаем слайдер
		new Swiper(similarSlider, { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			speed: 800,
      autoHeight: false,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: loop,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			*/
			pagination: {
				el: heroPagin,
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: heroPrev,
				nextEl: heroNext,
			},

			// Брейкпоинты
			/*
			*/
			breakpoints: {
				319: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				480: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: slidesPerView,
					spaceBetween: 22,
				},
			},
			// События
			on: {

			}
		});
	}
  const productSlider = document.querySelector('.media-product__slider');
	if (productSlider) { // Указываем скласс нужного слайдера
    const heroPrev = productSlider.querySelector('.media-product__arrow_prev');
    const heroNext = productSlider.querySelector('.media-product__arrow_next');
    const heroPagin = productSlider.querySelector('.media-product__pagination');
    const loop = productSlider.hasAttribute('data-loop');
    const slidesPerView = productSlider.hasAttribute('data-slides') ? parseFloat(productSlider.hasAttribute('data-slides')) : 5;
		// Создаем слайдер
		new Swiper(productSlider, { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			speed: 800,
      autoHeight: false,
      slidesPerView: 1,
      spaceBetween: 20,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: loop,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			*/
			pagination: {
				el: heroPagin,
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: heroPrev,
				nextEl: heroNext,
			},

			// Брейкпоинты
			/*
			*/
			// breakpoints: {
			// 	319: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 20,
			// 	},
			// 	480: {
			// 		slidesPerView: 3,
			// 	},
			// 	768: {
			// 		slidesPerView: slidesPerView,
			// 		spaceBetween: 22,
			// 	},
			// },
			// События
			on: {

			}
		});
	}
  const newsSlider = document.querySelector('.one-news__slider');
	if (newsSlider) { // Указываем скласс нужного слайдера
    const heroPrev = newsSlider.querySelector('.one-news__arrow_prev');
    const heroNext = newsSlider.querySelector('.one-news__arrow_next');
    const heroPagin = newsSlider.querySelector('.one-news__pagination');
    const loop = newsSlider.hasAttribute('data-loop');
    const slidesPerView = newsSlider.hasAttribute('data-slides') ? parseFloat(newsSlider.hasAttribute('data-slides')) : 5;
		// Создаем слайдер
		new Swiper(newsSlider, { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			speed: 800,
      autoHeight: false,
      slidesPerView: 1,
      spaceBetween: 20,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: loop,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			*/
			pagination: {
				el: heroPagin,
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: heroPrev,
				nextEl: heroNext,
			},

			// Брейкпоинты
			/*
			*/
			// breakpoints: {
			// 	319: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 20,
			// 	},
			// 	480: {
			// 		slidesPerView: 3,
			// 	},
			// 	768: {
			// 		slidesPerView: slidesPerView,
			// 		spaceBetween: 22,
			// 	},
			// },
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});