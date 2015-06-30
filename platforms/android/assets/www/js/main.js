AV.initialize("rh1qzccrs7lr1jr070phk4h6fhq747kh1f2r6fq4d35eyf6v",
              "xa8y6ov1tizdwxk1vx24gh1uvktj9h73x1cypu59je74dz1o");

var TestObject = AV.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}, {
  success: function(object) {
  alert("LeanCloud works!");
  }
});
