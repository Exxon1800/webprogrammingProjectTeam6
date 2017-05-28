function initate() {
  var button = document.getElementsByClassName("sidebar-toggle")[0];

  button.onclick = function() {
    var body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("sidebar-closed")) {
      body.classList.remove("sidebar-closed");
      body.classList.add("sidebar-opened");
    } else {
      body.classList.remove("sidebar-opened");
      body.classList.add("sidebar-closed");
    }
  };
}
addEventListener("load", initate);
