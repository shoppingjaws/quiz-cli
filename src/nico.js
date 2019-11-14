import Nico from "nicojs";

const nico = function() {
  var nc = new Nico({
    ele: document.getElementById("nico"), // スクリーンになる要素
    width: 400, // スクリーン幅
    height: 400, // スクリーン高さ
    font: 50, // フォントサイズ
    color: "#fff", // フォントカラー
    speed: 3 // 流れるスピード
  });
  nc.loop();
};
export default {
  nico
};
