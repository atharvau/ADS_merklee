class Node {
  constructor(value, hash) {
    this.value = value;
    this.hash = hash;
    this.left = null;
    this.right = null;
  }

  generateHash() {
    var h = "";
    if (this.left != null) h += this.left.hash;
    if (this.right != null) h += this.right.hash;
    if (this.value != null) h += this.value;

    this.hash = CryptoJS.MD5(h).toString();
  }
}
