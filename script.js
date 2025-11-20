//change greeting msg
document.getElementById("btn").addEventListener("click",()=>{
    const naming= document.getElementById("name").value;
    const greeting= document.getElementById("greet");
    greeting.textContent= "Hello, "+ naming;
})

//change box color
const boxes =document.querySelectorAll(".box");

boxes.forEach(box=>{box.addEventListener("click",function(){
    const colour = box.textContent.trim().toLowerCase();
    box.style.backgroundColor = colour;
    box.style.color= "white";
})})