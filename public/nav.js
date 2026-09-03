// モバイル用メニューの開閉。CSSだけでも閲覧は成立するため、失敗しても本文には影響しない
(function () {
  var nav = document.getElementById("siteNav");
  var toggle = document.getElementById("navToggle");
  var close = document.getElementById("navClose");
  var scrim = document.getElementById("navScrim");
  if (!nav || !toggle) return;
  function setOpen(open) {
    nav.classList.toggle("isOpen", open);
    scrim.classList.toggle("isOpen", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("navLock", open);
  }
  toggle.addEventListener("click", function () { setOpen(!nav.classList.contains("isOpen")); });
  close.addEventListener("click", function () { setOpen(false); });
  scrim.addEventListener("click", function () { setOpen(false); });
  nav.addEventListener("click", function (e) { if (e.target.tagName === "A") setOpen(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
})();
