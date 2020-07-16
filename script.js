function degAdd() {
  var addDeg =
    parseInt(document.getElementById("addDegA").value) +
    parseInt(document.getElementById("addDegB").value);
  var addMin =
    parseInt(document.getElementById("addMinA").value) +
    parseInt(document.getElementById("addMinB").value);
  var addSec =
    parseInt(document.getElementById("addSecA").value) +
    parseInt(document.getElementById("addSecB").value);
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
  //I kept making notes in this function because it made me mad LOL
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
      //second's value is 0, but minute's isn't
      if (wd == 0) {
        //only minute's value isn't 0
        outwrite = wm + "′";
      } else {
        //only second's value is 0
        outwrite = wd + "°" + wm + "′";
      }
    }
  } else {
    //second's value isn't 0
    if (wm == 0) {
      //second's value isn't 0, but minute's is
      if (wd == 0) {
        //only second's value isn't 0
        outwrite = ws + "″";
      } else {
        //only minute's value is 0
        outwrite = wd + "°" + ws + "″";
      }
    } else {
      //neither second nor minute's value is 0
      if (wd == 0) {
        //only degree's value is 0
        outwrite = wm + "′" + ws + "″";
      } else {
        //none of degree, minute or second's value is 0
        outwrite = wd + "°" + wm + "′" + ws + "″";
      }
    }
  }
  return outwrite;
}
