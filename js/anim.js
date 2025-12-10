document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".fade-up-blur");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 0.25}s`;
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
  });