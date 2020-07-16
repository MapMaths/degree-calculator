/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

function degadd() {
  var adddeg =
    document.getElementById("adddega") + document.getElementById("adddegb");
  var addmin =
    document.getElementById("addmina") + document.getElementById("addminb");
  var addsec =
    document.getElementById("addseca") + document.getElementById("addsecb");
  if (addsec >= 60) {
    addsec -= 60;
    addmin += 1;
  }
  if (addmin >= 60) {
    addmin -= 60;
    adddeg += 1;
  }
  document.getElementById("result").innerHTML = "";
}
