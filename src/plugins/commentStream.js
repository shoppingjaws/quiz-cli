export default class commentStream {
  constructor(speed, frameTag, unitTag) {
    // console.debug("commentStream:constructor");
    this.speed = speed;
    this.frameTag = frameTag;
    this.unitTag = unitTag;
    this.commentView = document.getElementById(this.frameTag);
  }
  send(val) {
    // console.log("cms.send");
    // var comment = document.createTextNode(val);
    // console.log("comment:", comment);
    var node = document.createElement("div");
    // console.log("node:", node);
    node.setAttribute("id", this.unitTag); //<div id=unitTag>val</div>
    var num = this.getRandom(10, 85);
    // console.log("num:", num);
    node.style.top = num.toString() + "%";
    node.textContent = val;
    // node.appendChild(comment);
    this.commentView.appendChild(node);
    console.log("this.commentView:", this.commentView);
  }
  removeComments() {}
  getRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
}
