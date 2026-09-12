(() => {
  "use strict";
  const startButton = document.getElementById("start-button");
  const startMenu = document.getElementById("start-menu");
  const panels = [...document.querySelectorAll(".window")];
  const tasks = new Map(
    [...document.querySelectorAll("[data-restore]")].map((button) => [
      button.dataset.restore,
      button,
    ]),
  );
  if (!startButton || !startMenu) return;
  function setStartMenu(open, returnFocus = false) {
    startMenu.hidden = !open;
    startButton.setAttribute("aria-expanded", String(open));
    if (open) startMenu.querySelector("a")?.focus();
    else if (returnFocus) startButton.focus();
  }
  function setMaximized(panel, maximize) {
    panel.classList.toggle("is-maximized", maximize);
    const control = panel.querySelector("[data-maximize]");
    if (!control) return;
    control.setAttribute("aria-pressed", String(maximize));
    control.setAttribute(
      "aria-label",
      panel.getAttribute("aria-label") +
        (maximize ? "を元の大きさに戻す" : "を最大化"),
    );
  }
  /** アンカー先がウィンドウ内なら、最小化状態を解除してから移動する。 */
  function revealTarget(id, focus = true) {
    const target = document.getElementById(id);
    if (!target) return;
    const panel = target.closest(".window");
    panels.forEach((item) => {
      if (item !== panel) setMaximized(item, false);
    });
    if (panel) {
      panel.hidden = false;
      tasks.get(panel.id)?.setAttribute("aria-pressed", "true");
    }
    // PCではデスクトップ自体を動かさず、スマホだけ通常のページ内移動を使う。
    if (matchMedia("(max-width:700px)").matches)
      target.scrollIntoView({ block: "start" });
    if (focus) (panel || target).focus({ preventScroll: true });
  }
  startButton.addEventListener("click", () => setStartMenu(startMenu.hidden));
  document.addEventListener("click", (event) => {
    if (
      !startMenu.contains(event.target) &&
      !startButton.contains(event.target)
    )
      setStartMenu(false);
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.hash.slice(1);
    if (!document.getElementById(id)) return;
    event.preventDefault();
    setStartMenu(false);
    revealTarget(id);
    history.replaceState(null, "", "#" + encodeURIComponent(id));
  });
  document.addEventListener("focusin", (event) => {
    if (
      !startMenu.hidden &&
      !startMenu.contains(event.target) &&
      event.target !== startButton
    )
      setStartMenu(false);
  });
  document.querySelectorAll("[data-minimize]").forEach((button) =>
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.dataset.minimize);
      setMaximized(panel, false);
      panel.hidden = true;
      const task = tasks.get(panel.id);
      task?.setAttribute("aria-pressed", "false");
      task?.focus();
    }),
  );
  tasks.forEach((button, id) =>
    button.addEventListener("click", () => revealTarget(id)),
  );
  document.querySelectorAll("[data-maximize]").forEach((button) =>
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.dataset.maximize);
      const maximize = !panel.classList.contains("is-maximized");
      panels.forEach((item) => setMaximized(item, false));
      setMaximized(panel, maximize);
    }),
  );
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (!startMenu.hidden) setStartMenu(false, true);
    else
      panels.forEach((panel) => {
        if (panel.classList.contains("is-maximized")) {
          setMaximized(panel, false);
          panel.querySelector("[data-maximize]")?.focus();
        }
      });
  });
  // 狭い画面に切り替わった際は、最大化の状態も解除する。
  const mobile = matchMedia("(max-width:700px)");
  mobile.addEventListener("change", (event) => {
    if (event.matches) panels.forEach((panel) => setMaximized(panel, false));
  });
  function revealHash() {
    try {
      if (location.hash)
        revealTarget(decodeURIComponent(location.hash.slice(1)), false);
    } catch {
      /* 不正なハッシュは通常表示のままにする。 */
    }
  }
  window.addEventListener("hashchange", revealHash);
  const clock = document.getElementById("desktop-clock");
  function updateClock() {
    if (!clock) return;
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
  document.documentElement.classList.add("desktop-ready");
  revealHash();
})();
