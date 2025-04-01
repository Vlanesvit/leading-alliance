/*
Документация слайдера: https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
	if (document.querySelector('.rs-slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-slider');
		sliderBlocks.forEach(sliderBlock => {
			const sliderImg = sliderBlock.querySelector('.rs-slider__img_slider');
			const sliderContent = sliderBlock.querySelector('.rs-slider__slider');
			const pagination = sliderBlock.querySelector('.rs-slider__pagination');
			const scrollbar = sliderBlock.querySelector('.rs-slider__scrollbar');

			const sliderSwiperContent = new Swiper(sliderContent, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				effect: 'fade',

				// Курсор
				// grabCursor: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					renderBullet: function (index, className) {
						return `<span class="${className}">${(index + 1).toString().padStart(2, "0")}</span>`;
					},
					// dynamicBullets: true
				},

				slidesPerView: 1,
			});

			const sliderSwiperImg = new Swiper(sliderImg, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: false,
				allowTouchMove: false,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				effect: 'fade',

				// Курсор
				// grabCursor: true,

				slidesPerView: 1,
			});

			// "Связка" слайдеров
			sliderSwiperImg.controller.control = sliderSwiperContent;
			sliderSwiperContent.controller.control = sliderSwiperImg;

			sliderSwiperContent.on('slideChange', () => {
				const totalSlides = sliderSwiperContent.slides.length; // Всего слайдов
				if (totalSlides === 0) return; // Защита от деления на 0

				const heightStep = 100 / totalSlides; // Шаг изменения высоты
				const realIndex = sliderSwiperContent.realIndex; // Реальный индекс слайда

				const currentHeight = (realIndex + 1) * heightStep; // Высота для текущего слайда

				scrollbar.style.setProperty('--height', `${currentHeight}%`);
			});
		});
	}

	if (document.querySelector('.rs-catalog-nav__slider')) {
		// До этой ширины слайдер будет неактивным
		const breakpoint = window.matchMedia('(min-width: 991.98px)');

		let sliderSwiper;

		const breakpointChecker = function () {
			if (breakpoint.matches === true) {
				// Выключаем слайдер
				if (sliderSwiper !== undefined) sliderSwiper.destroy(true, true);
				return;
			} else if (breakpoint.matches === false) {
				// Включаем слайдер
				return enableSwiper();
			}
		};

		// Инициализация слайдера
		const enableSwiper = function () {
			const sliderBlocks = document.querySelectorAll('.rs-catalog-nav');

			sliderBlocks.forEach(sliderBlock => {
				const sliders = sliderBlock.querySelectorAll('.rs-catalog-nav__slider');

				sliders.forEach(slider => {
					const arrowPrev = sliderBlock.querySelector('.rs-catalog-nav__button-prev');
					const arrowNext = sliderBlock.querySelector('.rs-catalog-nav__button-next');
					const pagination = sliderBlock.querySelector('.rs-catalog-nav__pagination');

					sliderSwiper = new Swiper(slider, {
						// // Автопрокрутка
						// autoplay: {
						// 	// Пауза между прокруткой
						// 	delay: 10000,
						// 	// Закончить на последнем слайде
						// 	stopOnLastSlide: false,
						// 	// Отключить после ручного переключения
						// 	disableOnInteraction: false,
						// },

						// Обновить свайпер
						// при изменении элементов слайдера
						observer: true,
						// при изменении родительских элементов слайдера
						observeParents: true,
						// при изменении дочерних элементов слайдера
						observeSlideChildren: true,

						// Скорость смены слайдов
						speed: 500,

						// Включение/отключение
						// перетаскивание на ПК
						simulateTouch: true,
						allowTouchMove: true,
						// Чувствительность свайпа
						touchRadio: 1,
						// Угол срабатывания свайпа/перетаскивания
						touchAngle: 45,

						// Цикличность слайдера
						// loop: true,

						// Анимация переключения
						// effect: 'fade',

						// Курсор перетаскивания
						grabCursor: true,

						// Стрелки
						navigation: {
							prevEl: arrowPrev,
							nextEl: arrowNext,
						},

						// Пагинация
						pagination: {
							el: pagination,
							clickable: true,
						},

						// Брекпоинты (адаптив)
						breakpoints: {
							320: {
								slidesPerView: 1.22,
								spaceBetween: 24,
							},
							767.98: {
								slidesPerView: 2.4,
								spaceBetween: 24,
							},
						},
					});
				});

			});
		}

		breakpoint.addListener(breakpointChecker);
		breakpointChecker();
	}

	if (document.querySelector('.rs-catalog-nav__slider')) {
		// До этой ширины слайдер будет неактивным
		const breakpoint = window.matchMedia('(max-width: 991.98px)');

		let sliderSwiper;

		const breakpointChecker = function () {
			if (breakpoint.matches === true) {
				// Выключаем слайдер
				if (sliderSwiper !== undefined) sliderSwiper.destroy(true, true);
				return;
			} else if (breakpoint.matches === false) {
				// Включаем слайдер
				return enableSwiper();
			}
		};

		// Инициализация слайдера
		const enableSwiper = function () {
			const sliderBlocks = document.querySelectorAll('.rs-product-slider');

			sliderBlocks.forEach(sliderBlock => {
				const sliders = sliderBlock.querySelectorAll('.rs-product-slider__slider');
				const scrollbar = sliderBlock.querySelector('.rs-product-slider__scrollbar');

				sliders.forEach(slider => {
					sliderSwiper = new Swiper(slider, {
						// // Автопрокрутка
						// autoplay: {
						// 	// Пауза между прокруткой
						// 	delay: 10000,
						// 	// Закончить на последнем слайде
						// 	stopOnLastSlide: false,
						// 	// Отключить после ручного переключения
						// 	disableOnInteraction: false,
						// },

						// Обновить свайпер
						// при изменении элементов слайдера
						observer: true,
						// при изменении родительских элементов слайдера
						observeParents: true,
						// при изменении дочерних элементов слайдера
						observeSlideChildren: true,

						// Скорость смены слайдов
						speed: 500,

						// Включение/отключение
						// перетаскивание на ПК
						simulateTouch: false,
						allowTouchMove: false,

						// Чувствительность свайпа
						touchRadio: 1,
						// Угол срабатывания свайпа/перетаскивания
						touchAngle: 45,
						waitForTransition: false,

						// Цикличность слайдера
						// loop: true,

						// Анимация переключения
						// effect: 'fade',

						// Курсор
						// grabCursor: true,

						slidesPerView: 4.23,

						centeredSlides: true,

						mousewheel: {
							invert: false, // Управление колесом мыши
							sensitivity: 1, // Чувствительность (чем больше, тем быстрее прокрутка)
						},
					});

					// Функция для обновления классов слайдов
					function updateSlideClasses() {
						// Получаем все слайды
						const allSlides = slider.querySelectorAll('.swiper-slide');

						// Удаляем все возможные классы перед обновлением
						allSlides.forEach(slide => {
							slide.classList.remove(
								'swiper-slide-prev-prev-prev-prev-prev',
								'swiper-slide-prev-prev-prev-prev',
								'swiper-slide-prev-prev-prev',
								'swiper-slide-prev-prev',
								'swiper-slide-prev',
								'swiper-slide-active',
								'swiper-slide-next',
								'swiper-slide-next-next',
								'swiper-slide-next-next-next',
								'swiper-slide-next-next-next-next',
								'swiper-slide-next-next-next-next-next'
							);
						});

						const activeIndex = sliderSwiper.activeIndex;

						// Назначаем классы новым слайдам
						allSlides.forEach((slide, index) => {
							if (index === activeIndex - 5) {
								slide.classList.add('swiper-slide-prev-prev-prev-prev-prev');
							} else if (index === activeIndex - 4) {
								slide.classList.add('swiper-slide-prev-prev-prev-prev');
							} else if (index === activeIndex - 3) {
								slide.classList.add('swiper-slide-prev-prev-prev');
							} else if (index === activeIndex - 2) {
								slide.classList.add('swiper-slide-prev-prev');
							} else if (index === activeIndex - 1) {
								slide.classList.add('swiper-slide-prev');
							} else if (index === activeIndex) {
								slide.classList.add('swiper-slide-active');
							} else if (index === activeIndex + 1) {
								slide.classList.add('swiper-slide-next');
							} else if (index === activeIndex + 2) {
								slide.classList.add('swiper-slide-next-next');
							} else if (index === activeIndex + 3) {
								slide.classList.add('swiper-slide-next-next-next');
							} else if (index === activeIndex + 4) {
								slide.classList.add('swiper-slide-next-next-next-next');
							} else if (index === activeIndex + 5) {
								slide.classList.add('swiper-slide-next-next-next-next-next');
							}
						});


						const totalSlides = sliderSwiper.slides.length; // Всего слайдов
						if (totalSlides === 0) return; // Защита от деления на 0
						const heightStep = 100 / totalSlides; // Шаг изменения высоты
						const realIndex = sliderSwiper.realIndex; // Реальный индекс слайда
						const currentHeight = (realIndex + 1) * heightStep; // Высота для текущего слайда
						scrollbar.style.setProperty('--width', `${currentHeight}%`);
					}

					// Вызов функции при смене слайда
					sliderSwiper.on('slideChangeTransitionStart', updateSlideClasses);
					sliderSwiper.on('slideChange', updateSlideClasses);
					sliderSwiper.on('touchMove', updateSlideClasses);
					sliderSwiper.on('transitionEnd', updateSlideClasses);

					// Инициализация классов при загрузке
					updateSlideClasses();
				});

			});
		}

		breakpoint.addListener(breakpointChecker);
		breakpointChecker();
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
	if (document.querySelector('.swiper')) {
		initSliders();
	}
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});