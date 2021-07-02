var color1=  document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var cssdisplay=document.getElementsByTagName("h3")
var body = document.getElementsByTagName("body")
cssdisplay[0].textContent="linear-gradient(to right," + color1.value + "," + color2.value + ")"
function changecssandbackground(){
    console.log("hekkkk")
    body[0].style.background="linear-gradient(to right," + color1.value + "," + color2.value + ")"
    cssdisplay[0].textContent="linear-gradient(to right)" + color1.value + "," + color2.value + ")"
}
color1.addEventListener("input",changecssandbackground)
color2.addEventListener("input",changecssandbackground)



// body.style.background="linear-gradient(to right)" + color1.value + "," + color2.value + ")"