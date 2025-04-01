document.addEventListener("DOMContentLoaded", (event) => {
	gsap.registerPlugin(ScrollTrigger);

	function pinBlock(elem) {
		const blocks = document.querySelectorAll(elem);
		blocks.forEach((block, index) => {
			gsap.fromTo(block,
				{ yPercent: 0 },
				{
					yPercent: -100,
					scrollTrigger: {
						trigger: block,
						start: "top+=100px bottom",
						end: "bottom top",
						scrub: true,
					},
				}
			);
		});
	}
	pinBlock('.rs-sticky-block');
});