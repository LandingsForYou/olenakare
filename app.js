const revals = document.querySelectorAll(".reval");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

revals.forEach((el) => observer.observe(el));
