const button = document.getElementById("btn-theme");
const root = document.documentElement;

const toggleTheme = () => {
  const light = root.classList.toggle("light-theme");
  button.textContent = light ? "Modo escuro" : "Modo claro";
};

button.addEventListener("click", toggleTheme);
