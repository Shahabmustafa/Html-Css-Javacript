var input = document.querySelector(".input_text");
var main = document.querySelector("#name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var clouds = document.querySelector(".clouds");
var button = document.querySelector(".submit");

button.addEventListener("click", function (name) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&units=metric&appid=50a7aa80fa492fa92e874d23ad061374"
  )
    .then((response) => response.json())
    .then((data) => {
      var tempValue = data["main"]["temp"];
      var nameValue = data["name"];
      var descValue = data["weather"][0]["description"];
      var cloudsValue = data["clouds"]["all"];

      main.innerHTML = nameValue;
      desc.innerHTML = "Desc - " + descValue;
      temp.innerHTML = "Temp - " + tempValue + " °C";
      clouds.innerHTML = "Clouds - " + cloudsValue;
      input.value = "";
    })
    .catch((err) => alert("Wrong city name!"));
});