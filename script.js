const button = document.getElementById("btn-theme");
const root = document.documentElement;
const track = document.querySelector(".journey-track");
const train = document.querySelector(".train-icon");
const timelineItems = document.querySelectorAll(".timeline__item");

const toggleTheme = () => {
  const light = root.classList.toggle("light-theme");
  button.textContent = light ? "Voltar ao céu noturno" : "Acender o trem";
};

button?.addEventListener("click", toggleTheme);

const updateTrainPosition = () => {
  if (!track || !train) return;
  const trackTop = track.getBoundingClientRect().top + window.scrollY;
  const trackHeight = track.offsetHeight;
  const scrollAnchor = window.scrollY + window.innerHeight * 0.35;
  const progress = Math.min(
    Math.max((scrollAnchor - trackTop) / trackHeight, 0),
    1
  );
  train.style.setProperty("--train-progress", `${progress * 100}%`);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("timeline__item--active", entry.isIntersecting);
    });
  },
  { threshold: 0.45 }
);

timelineItems.forEach((item) => observer.observe(item));

window.addEventListener("scroll", updateTrainPosition);
window.addEventListener("resize", updateTrainPosition);
updateTrainPosition();
