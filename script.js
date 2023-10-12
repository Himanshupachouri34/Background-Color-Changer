let button = document.querySelectorAll(".button")
let body = document.querySelector("body")
let timeout;

function myFunction(){
    button.forEach(function(button){
        console.log(button);
        button.addEventListener("click", function (e){
        
            if(button.id === "Light-Pink") {
                body.style.backgroundColor = "lightpink";
            }
            if(button.id === "Coral") {
                body.style.backgroundColor = "Coral";
            }
            if(button.id === "skyblue") {
                body.style.backgroundColor = "skyblue";
            }
            if(button.id === "Levender") {
                body.style.backgroundColor = "rgb(204, 155, 239)";
            }
            
            setTimeout((myFunction) => {
                body.style.backgroundColor = "white"
            }, 3000);
        })
    })
  
}
myFunction()

