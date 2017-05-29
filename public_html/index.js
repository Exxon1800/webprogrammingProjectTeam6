function initate() {
  LogoCanvas();
  sidebarToggle();
}

function sidebarToggle() {
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

function LogoCanvas() {
    var elem = document.getElementById("canvas");
    var canvas = elem.getContext("2d");

// W...........
    canvas.scale(0.8, 0.7);
    canvas.translate(70, 50);
    canvas.strokeStyle = "#4289f4";
    canvas.fillStyle = "#4289f4";
    canvas.lineWidth = 8;
    canvas.lineCap = "butt";
    canvas.lineJoin = "bevel";

    canvas.beginPath();
    canvas.moveTo(5, 5);
    canvas.lineTo(5, 102);
    canvas.lineTo(35, 8);
    canvas.lineTo(65, 102);
    canvas.lineTo(65, 5);
    canvas.stroke();
    canvas.closePath();

// o...........(First)
    canvas.beginPath();
    canvas.strokeStyle = "#ea4335";
    canvas.fillStyle = "#ea4335";
    canvas.lineWidth = 8;
    canvas.arc(86, 20, 12, 0, Math.PI * 2, false);
    canvas.stroke();
    canvas.closePath();

// o..........(Second)
    canvas.beginPath();
    canvas.strokeStyle = "#fbbc05";
    canvas.fillStyle = "#fbbc05";
    canvas.lineWidth = 8;
    canvas.arc(120, 20, 12, 0, Math.PI * 2, false);
    canvas.stroke();
    canvas.closePath();

// d..........
    canvas.strokeStyle = "#4289f4";
    canvas.fillStyle = "#4289f4";
    canvas.lineWidth = 8;
    canvas.lineCap = "butt";
    canvas.lineJoin = "bevel";

    canvas.beginPath();
    canvas.moveTo(142, 5);
    canvas.lineTo(142, 105);
    canvas.stroke();
    canvas.closePath();

    canvas.beginPath();
    canvas.moveTo(142, 62);
    canvas.arc(142, 81, 20, 0.5 * Math.PI, 1.5 * Math.PI, false);
    canvas.stroke();
    canvas.closePath();

// l............

    canvas.beginPath();
    canvas.strokeStyle = "#34a853";
    canvas.fillStyle = "#34a853";
    canvas.lineWidth = 8;
    canvas.lineCap = "butt";
    canvas.lineJoin = "bevel";

    canvas.moveTo(153, 5);
    canvas.lineTo(153, 105);
    canvas.stroke();
    canvas.closePath();

// e...............
    canvas.beginPath();
    canvas.strokeStyle = "#ea4335";
    canvas.fillStyle = "#ea4335";
    canvas.lineWidth = 8;
    canvas.lineCap = "butt";
    canvas.lineJoin = "bevel";

    canvas.arc(183, 80, 20, 0.15 * Math.PI, 1.92 * Math.PI, false);
    canvas.stroke();
    canvas.closePath();

    canvas.beginPath();
    canvas.moveTo(202, 71);
    canvas.lineTo(166, 82);
    canvas.stroke();
    canvas.closePath();
}

addEventListener("load", initate);

