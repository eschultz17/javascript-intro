function changeText(){
  document.getElementById("text").innerHTML = document.getElementById("input").value
}
function resetText(){
  document.getElementById("text").innerHTML = "JavaScript can change HTML content."
}

function changeImage(){
  document.getElementById('myImage').src = document.getElementById('image-location').value
}

function changeSize(){
  document.getElementById('example').style.fontSize = document.getElementById('size-input').value + "px"
}

function changeColor(){
  document.getElementById('example').style.color = document.getElementById('color-input').value
}

function hide(){
  document.getElementById('content').style.display='none'
}

function show(){
  document.getElementById('content').style.display='block'
}

var x = document.getElementById("location");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    url = "https://www.google.com/maps/@" + position.coords.latitude + "," + position.coords.longitude + ",18z";
    x.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude + "<br><a href='" + url + "' target='_blank'>View Map</a>";
}
