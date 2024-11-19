let cont = document.querySelector("#section1");
let cont1 = document.querySelector("#section2");
let vandak = document.querySelectorAll(".vandak");
let araj = document.querySelector("#arajin");
let erk = document.querySelector("#erkrord")
let arajin = 0;
let erkrord = 0;
let count = 0;
let count1 = 0;
let x = 0;
let y = 0;

cont.addEventListener("click", (event) => {
    if (!event.target.innerText && x === y) {
        event.target.innerText = Math.round(Math.random() * 1000);
        arajin = arajin + Number(event.target.innerText);
    
        count++;
        x++
        if (count === 20) {
            araj.innerText = arajin;
        }
    }


});


cont1.addEventListener("click", (event) => {
    if (!event.target.innerText && x - 1 === y) {
        event.target.innerText = Math.round(Math.random() * 1000);
        erkrord = erkrord + Number(event.target.innerText);
        count1++;
        y++
        if (count1 === 20) {
            erk.innerText = erkrord;
          
        }
    }

});
