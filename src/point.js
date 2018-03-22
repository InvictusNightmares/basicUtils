var name = "WindowName";
function a() {
  var name = "Mike";

  console.log(this.name);
  console.log("inner:" + this);
}
a();
console.log(this.name);
console.log("outer:" + this);