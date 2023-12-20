const randomNumber = (interval, duration)=>{
const elementNumber = document.querySelector("div.generator-container h1")
const btn = document.querySelector("div.generator-container button")
let animation

btn.onclick = () =>{
    
    btn.classList.toggle("sort")
   animation = setInterval(() => {
    //gera um número aleatório no intervalode 0 a 1
    elementNumber.innerHTML = Math.floor(Math.random() * interval + 1)
   }, 20)
   setTimeout(() =>{
    clearInterval(animation)
    btn.classList.toggle("sort")
   }, duration)
}

}
window.onload = randomNumber(200, 1000)