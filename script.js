/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

function degAdd() {
  var addDeg =
    document.getElementById("addDegA") + document.getElementById("addDegB");
  var addMin =
    document.getElementById("addMinA") + document.getElementById("addMinB");
  var addSec =
    document.getElementById("addSecA") + document.getElementById("addSecB");
  if (addSec >= 60) {
    addSec -= 60;
    addMin += 1;
  }
  if (addMin >= 60) {
    addMin -= 60;
    addDeg += 1;
  }
  document.getElementById("result").innerHTML = writeDeg(
    addDeg,
    addMin,
    addSec
  );
}
function writeDeg(wd, wm, ws) {
  var outwrite;
  if (ws == 0) {
    //second's value is 0
    if (wm == 0) {
      //both second and minute's values are 0
      if (wd == 0) {
        //all values are 0
        outwrite = "0°";
      } else {
        //only degree's value isn't 0
        outwrite = wd + "°";
      }
    } else {
    }
  }
  return outwrite;
}
