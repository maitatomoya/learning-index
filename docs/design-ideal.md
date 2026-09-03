# 私の理想のサイト像（メモ）

自分のポートフォリオサイト（Learning Index）の雰囲気を決めるための、好みの記録。
2026-09-03に参考サイト23件（[design-references.md](design-references.md)）を見て、自分が「いい」と感じたものと、その理由をここに残す。

## 前提：自分の好み

- デジモンが好き
- ドット文字（ビットマップフォント）が好き
- ピクセルアートが好き
- ただし、それらに寄せすぎたくない。ドットの気配は「少しだけ」

## いいと思ったサイト（感想そのまま）

| サイト | 感想 | このサイトの何が効いているか |
| --- | --- | --- |
| [Undertale](https://undertale.com/) | まず、いいなと思った | 黒地に赤#E5141F×黄#F9FF10の2色。8bit書体は見出しだけ。情報量が少なく、1画面1メッセージ |
| [Stardew Valley](https://www.stardewvalley.net/) | いいが、真似は難しそう | 青#0069CD×クリーム黄#FFFFCC×オレンジ#FF6633の牧歌的な配色。ただし魅力の大半が手描きのイラストと世界観なので、素材がないと再現しにくい |
| [PICO-8](https://www.lexaloffle.com/pico-8.php) | めっちゃいい | ダークグレー#303030にピンク#FF6688／#FFAABB。proggy系のドット書体を本文にも使う潔さ。16色パレットそのものが世界観 |
| [Lospec Palette List](https://lospec.com/palette-list) | 配色がすごく好き。内容のピクセル感もいい | ダークグレー#332F35×赤#F96854×黄#F6C43B。UIは現代的で、ピクセル感はコンテンツ（パレットのタイル）が担っている |
| [DOTOWN](https://dotown.maeda-design-room.net/) | すごくいい | 白／薄灰#F3F3F3に黒、赤#FF0000と青#1D85C4を点で。Noto Sans JPで日本語が読みやすい。ドット絵素材が主役で、枠組みは静か |
| [Pixel Art Academy](https://pixelart.academy/) | サイトがカッコよすぎる。こんな自分のサイトを作ってみたい | サイト自体がゲーム画面。黒地に水色#92CEEA×紺#1C4C78。「学ぶ場所がゲームの中にある」という体験設計 |
| [Poolsuite](https://poolsuite.net/) | すごく好き。こういうWindows XPみたいなサイトを作りたい | クリーム#F9EFE4×ピンク#F7D5D5×ティール#44BEAC。ウィンドウ・タイトルバー・ボタンといった昔のOSのUIをそのまま画面構成にしている。ドット書体（Pixolde）を見出しに |

## 共通点から見える方向性

1. **暗色地＋アクセント2色**が多い（Undertale、PICO-8、Lospec、Pixel Art Academy）。明色で好きなのはDOTOWNとPoolsuiteで、どちらも白かクリームの静かな地
2. **画面の「メタファー」がある**ものに強く惹かれている。Poolsuiteは昔のOSのデスクトップ、Pixel Art Academyはゲーム画面。単なる配色より「何の画面に見立てるか」が効いている
3. **ドット書体は見出しかロゴに限定**し、本文は読みやすい書体（DOTOWNのNoto Sans JP、Lospecの現代的UI）。PICO-8だけが本文までドットだが、あれは道具のサイトだから成立している
4. **ピクセル感はコンテンツが担う**（Lospecのパレットタイル、DOTOWNの素材）。枠組み側はむしろ静か

## 自分のサイトに落とすなら（案）

- **見立て**：Poolsuite型の「昔のOSのデスクトップ」を第一候補にする。案内カードはウィンドウ、PICK UPはダイアログ、ナビはメニューバーかタスクバー。ゲーム画面型（Pixel Art Academy）は学びのページだけに限定して使う手もある
- **配色**：地はLospec系のダークグレー（#332F35前後）か、Poolsuite系のクリーム（#F9EFE4）の二択。アクセントは赤×黄（Undertale／Lospec）か、ピンク×ティール（Poolsuite）
- **書体**：見出しとウィンドウのタイトルバーだけDotGothic16（日本語対応）。本文はNoto Sans JPか丸ゴシック
- **ピクセル感の担い手**：各サービスのサムネイルを16色パレットで描いたドット絵（表紙）にする。枠組みはドットにしない
- **デジモン**：色だけ拝借する（青#1251D0×淡青#E4E9FF）。キャラクターや意匠は使わない

## 参考

- 配色・フォント資源を含む一覧：[design-references.md](design-references.md)
- DotGothic16の一次情報：作者はフォントワークス。公式リポジトリ https://github.com/fontworks-fonts/DotGothic16 （SIL OFL）、製品ページ https://fontworks.co.jp/fontsearch/dotgothic16std-m/ 。Google Fontsのページ（ https://fonts.google.com/specimen/DotGothic16 ）は配布と`<link>`読み込み用の公式入口
- デザイン別バージョン（7案の見比べ）：`public/variants/index.html`
- 現在のデザイン（参考サイトの構成を踏襲した版）：[screenshots/top.png](screenshots/top.png)
