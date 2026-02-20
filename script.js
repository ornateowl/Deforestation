/* .js files add interaction to your website */

var factList =  ["Tropical forests hold over 228 to 247 gigatons of carbon. Without these carbon sinks, global warming effects will become more deadly", "Forests help the water cycle and help create local rainfall. Unhealthy forests are less capable of fulfilling this role, which endangers humans, animals, and plants dependent on water.", "Soil erosion from lack of tree roots to stabilize the earth results in soil unfit for irrigation. The land will also be more prone to forest fires", "Slash and burn agriculture, which is the practice of using fire to clear forests and allowing the ashes to fertilize the soil, only keeps soil fertile for a limited amount of time."];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton) {
myButton.addEventListener("click", displayFact);
}
  
function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
