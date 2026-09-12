const descriptions = {
  desktop: "A / 90年代のパソコン。スタートメニューとウィンドウ操作ができる、自分だけの机。",
  gallery: "B / 古い工業製品のカタログ。大胆な文字と整った余白で、作品を展示。",
  archive: "C / 携帯ゲーム機の記録帳。作品を選ぶと、図鑑の詳細が切り替わる。",
};
const preview = document.getElementById("preview");
document.querySelectorAll("[data-page]").forEach((button) =>
  button.addEventListener("click", () => {
    const page = button.dataset.page;
    preview.src = page + ".html";
    preview.title = button.textContent + "のプレビュー";
    document.getElementById("standalone").href = page + ".html";
    document.getElementById("concept-caption").textContent = descriptions[page];
    document
      .querySelectorAll("[data-page]")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
  }),
);
document.querySelectorAll("[data-size]").forEach((button) =>
  button.addEventListener("click", () => {
    preview.classList.toggle(
      "mobile-preview",
      button.dataset.size === "mobile",
    );
    document
      .querySelectorAll("[data-size]")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
  }),
);
