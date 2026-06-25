/**
 * Scroll reveal animation utility.
 * Inline this in layouts to initialize .reveal elements.
 */
export function initScrollReveal() {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		document.querySelectorAll(".reveal").forEach((el) => el.classList.add("revealed"));
		return;
	}
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("revealed");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
	);
	document.addEventListener("DOMContentLoaded", () => {
		document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
	});
}
