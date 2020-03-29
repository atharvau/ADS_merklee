"use strict";
class Tree {
  constructor(list, n) {
    this.list = list;
    this.n = n;
  }
  insertAuto() {
    console.log(this.list);
    var n = this.n;
    this.list.map(function(params) {
      var a = new Node(params, null);
      a.generateHash();
      n.push(a);
    });

    console.log(n);
  }

  build() {
    var n = this.n;
    var j = 0;

    var level1 = [];

    while (true) {
      level1.push([]);
      for (var i = 0; i < n.length - 1; i++) {
        var nod = new Node(null, null);
        nod.left = n[i];
        nod.right = n[i + 1];
        nod.generateHash();
        level1[j].push(nod);
      }
      n = level1[j];
      if (n.length === 1) {
        break;
      }
      j++;
    }
    console.log(level1);
    return level1[j - 1][0];
  }
}
