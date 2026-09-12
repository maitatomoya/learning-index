const projects = {
  pix: {
    title: "Pixsmith",
    symbol: "Px",
    category: "CREATIVE TOOL",
    kind: "アイコン・ピクセルロゴメーカー",
    description:
      "写真を下絵にしてドットを置き、ピクセル文字を添える。自分だけのアイコンやロゴを作って書き出せます。",
    url: "https://pixsmith.pages.dev",
  },
  sapor: {
    title: "Sapor",
    symbol: "Sp",
    category: "DESIGN CATALOG",
    kind: "デザインを採集し、言葉にする",
    description:
      "世界中のWebデザインをURLで集め、AIが読める「Design DNA」として言語化。好きなデザインを次の制作に活かすカタログです。",
    url: "https://sapor.mt114r-an.workers.dev",
  },
  python: {
    title: "Python 200 Steps",
    symbol: "Py",
    category: "INTERACTIVE LEARNING",
    kind: "ブラウザで書いて動かす教材",
    description:
      "コードを直して、その場で実行。250ステップで基礎から中級へ進む学習教材。エラーを読んで直す50問も収録しています。",
    url: "https://python-200-steps.pages.dev",
  },
};
document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.project];
    document.querySelectorAll("[data-project]").forEach((item) => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-pressed", String(item === button));
    });
    for (const [id, key] of Object.entries({
      "detail-title": "title",
      "detail-emblem": "symbol",
      "detail-category": "category",
      "detail-kind": "kind",
      "detail-description": "description",
    }))
      document.getElementById(id).textContent = project[key];
    document.getElementById("detail-link").href = project.url;
  });
});
