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
