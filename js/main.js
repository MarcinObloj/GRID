const nav = document.querySelector('.nav-hidden');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav-hidden__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer_year');
const handleNav = () => {
	nav.classList.toggle('nav-hidden--active');
	navBtnBars.classList.remove('black-bars-color');
	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-hidden--active');
		});
	});

	handleNavItemsAnimation();
	deleteAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const deleteAnimation = () => {
	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			allNavItems.forEach((el) => {
				el.classList.remove('nav-items-animation');
			});
		});
	});
};
const handleObserver = () => {
	const currentSection = window.scrollY;
	allSections.forEach((section) => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add('black-bars-color');
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);
