var c = document.getElementById("game");
var ctx = c.getContext("2d");
var canvas = c;
var context = ctx;
var WIDTH = 20;
var HEIGHT = 20;
var MARGIN = 10;

var list = [];
var a = null;

var rects = [];
var i = 0;
var r;

while ((r = rects[i++]))
  canvas.onmousemove = function(e) {
    var rect = this.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top,
      i = 0,
      r;

    while ((r = rects[i++])) {
      context.beginPath();
      context.rect(r.x, r.y, r.w, r.h);
      context.fillStyle = context.isPointInPath(x, y) ? "blue" : "yellow";
      context.fill();
    }
  };
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function printInorder(node, x, y, rects) {
  sleep(2000).then(() => {
    console.log("World!");
  });

  if (node == null) return;

  printInorder(node.left, x - 100, y + 100, rects);

  if (node.left != null) {
    ctx.beginPath();
    ctx.moveTo(x, y + 70);
    ctx.lineTo(x - 40, y + 100);
    ctx.stroke();
    var has = node.hash;
    has = has.substring(0, has.length / 2 + 6);
    ctx.fillText(has, x + 12, y + 50);
  }

  ctx.beginPath();
  rects.push({
    x: x,
    y: y,
    w: (MARGIN + WIDTH) * 5 + MARGIN,
    h: (MARGIN + WIDTH) * 2 + MARGIN
  });

  ctx.rect(x, y, (MARGIN + WIDTH) * 5 + MARGIN, (MARGIN + WIDTH) * 2 + MARGIN);

  if (node.value != null) {
    context.beginPath();
    context.rect(
      x,
      y,
      (MARGIN + WIDTH) * 5 + MARGIN,
      (MARGIN + WIDTH) * 2 + MARGIN
    );
    ctx.font = "23px Arial";
    ctx.fillText(node.value, x + 30, y + 30);
    ctx.font = "12px Arial";
    var has = node.hash;
    has = has.substring(0, has.length / 2 + 6);
    ctx.fillText(has, x + 12, y + 50);
  }
  ctx.stroke();

  printInorder(node.right, x + 100, y + 100, rects);
  if (node.right != null) {
    ctx.beginPath();
    ctx.moveTo(x + 160, y + 70);
    ctx.lineTo(x + 190, y + 100);
    ctx.stroke();
    var has = node.hash;
    has = has.substring(0, has.length / 2 + 6);
    ctx.fillText(has, x + 12, y + 50);
  }
}

function addData() {
  ctx.clearRect(0, 0, 10000, 10000);

  list = [];
  var d1 = $("#d1").val();
  var d2 = $("#d2").val();
  var d3 = $("#d3").val();
  var d4 = $("#d4").val();
  var d5 = $("#d5").val();
  list.push(d1);
  list.push(d2);
  list.push(d3);
  list.push(d4);
  list.push(d5);

  var tree = new Tree(list, []);
  tree.insertAuto();
  a = tree.build();
  setTimeout(printInorder(a, 350, 1, rects), 30000);
  $("#ghash").text(a.hash);
}
