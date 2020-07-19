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
  while (addSec >= 60) {
    addSec -= 60;
    addMin += 1;
  }
  while (addMin >= 60) {
    addMin -= 60;
    addDeg += 1;
  }
  var addPrint = writeDeg(addDeg, addMin, addSec);
  document.getElementById("addResult").innerHTML = addPrint;
  console.log(
    document.getElementById("addDegA").value +
      "°" +
      document.getElementById("addMinA").value +
      "′" +
      document.getElementById("addSecA").value +
      "″+" +
      document.getElementById("addDegB").value +
      "°" +
      document.getElementById("addMinB").value +
      "′" +
      document.getElementById("addSecB").value +
      "″=" +
      addPrint
  );
}

function degMin() {
  var minDeg =
    parseInt(document.getElementById("minDegA").value) -
    parseInt(document.getElementById("minDegB").value);
  var minMin =
    parseInt(document.getElementById("minMinA").value) -
    parseInt(document.getElementById("minMinB").value);
  var minSec =
    parseInt(document.getElementById("minSecA").value) -
    parseInt(document.getElementById("minSecB").value);
  while (minSec < 0) {
    minSec += 60;
    minMin -= 1;
  }
  while (minMin < 0) {
    minMin += 60;
    minDeg -= 1;
  }
  var minPrint = writeDeg(minDeg, minMin, minSec);
  document.getElementById("minResult").innerHTML = minPrint;
  console.log(
    document.getElementById("minDegA").value +
      "°" +
      document.getElementById("minMinA").value +
      "′" +
      document.getElementById("minSecA").value +
      "″-" +
      document.getElementById("minDegB").value +
      "°" +
      document.getElementById("minMinB").value +
      "′" +
      document.getElementById("minSecB").value +
      "″=" +
      minPrint
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
  if (wd < 0) {
    outwrite = undefined;
  }
  return outwrite;
}
document.getElementsByTagName