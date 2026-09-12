const startButton = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");
const windows = [...document.querySelectorAll(".window")];
function setStartMenu(open, returnFocus = false) {
  startMenu.hidden = !open;
  startButton.setAttribute("aria-expanded", String(open));
  if (open) startMenu.querySelector("a").focus();
  else if (returnFocus) startButton.focus();
}
startButton.addEventListener("click", () => setStartMenu(startMenu.hidden));
document.addEventListener("click", (event) => {
  if (!startMenu.contains(event.target) && !startButton.contains(event.target))
    setStartMenu(false);
});
function restoreWindow(id) {
  const window = document.getElementById(id);
  if (!window?.classList.contains("window")) return;
  window.hidden = false;
  document
    .querySelector(`[data-restore="${id}"]`)
    .setAttribute("aria-pressed", "true");
  window.scrollIntoView({ block: "nearest" });
  window.querySelector("button").focus({ preventScroll: true });
}
document.querySelectorAll("[data-minimize]").forEach((button) =>
  button.addEventListener("click", () => {
    const id = button.dataset.minimize;
    document.getElementById(id).hidden = true;
    const task = document.querySelector(`[data-restore="${id}"]`);
    task.setAttribute("aria-pressed", "false");
    task.focus();
  }),
);
document
  .querySelectorAll("[data-restore]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      restoreWindow(button.dataset.restore),
    ),
  );
document.querySelectorAll("[data-maximize]").forEach((button) =>
  button.addEventListener("click", () => {
    const window = document.getElementById(button.dataset.maximize);
    const maximize = !window.classList.contains("is-maximized");
    windows.forEach((item) => {
      item.classList.remove("is-maximized");
      const control = item.querySelector("[data-maximize]");
      control.setAttribute("aria-pressed", "false");
      control.setAttribute(
        "aria-label",
        item.getAttribute("aria-label") + "を最大化",
      );
    });
    window.classList.toggle("is-maximized", maximize);
    button.setAttribute("aria-pressed", String(maximize));
    button.setAttribute(
      "aria-label",
      window.getAttribute("aria-label") +
        (maximize ? "を元の大きさに戻す" : "を最大化"),
    );
  }),
);
document
  .querySelectorAll(
    '.desktop-shortcuts a[href^="#"], .start-links a[href^="#"]',
  )
  .forEach((link) =>
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setStartMenu(false);
      restoreWindow(link.getAttribute("href").slice(1));
    }),
  );
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !startMenu.hidden) setStartMenu(false, true);
});
// 時計は端末のタイムゾーンに合わせ、読み上げが繰り返されないようライブ通知を使わない。
const clock = document.getElementById("desktop-clock");
function updateClock() {
  const now = new Date();
  clock.textContent = new Intl.DateTimeFormat("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);
  clock.dateTime = now.toISOString();
}
updateClock();
setInterval(updateClock, 30000);
