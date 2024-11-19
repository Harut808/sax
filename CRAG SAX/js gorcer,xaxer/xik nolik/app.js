const obshi = document.querySelector("#dem");
const vandak = [...document.querySelectorAll(".div")];
const body = document.querySelector("body");
const verj = document.createElement("section");
const audio = document.querySelector('audio')
let x = "X";
let y = 'O'
let count = 0;
verj.className = 'verjin'

const krel = () => {
  verj.style.fontSize = '300%';
  verj.style.width = "100%";
  verj.style.height = "100%";
  verj.style.background = "white";
  verj.style.display = "flex";
  verj.style.flexDirection = 'column'
  verj.style.justifyContent = "center";
  verj.style.alignItems = "center";
  verj.style.position = "relative";
  obshi.style.position = "absolute";
  body.append(verj);
  let but = document.createElement('button')
  but.className = 'but'
  but.innerText = 'Play again'
  but.addEventListener("click", () => {
      location.reload()
  })
  but.style.fontSize = '50%'
  but.style.borderRadius = '30px'
verj.append(but)

};

const stugum = () => {
  let i = 0;
  if (
    vandak[i].innerText === x &&
    vandak[i + 1].innerText === x &&
    vandak[i + 2].innerText === x
  ) {
    verj.innerText = "Winner is X";
    obshi.removeEventListener("click", foo);
     guyn(0,1,2)
 setTimeout(() => {

  krel();
}, 1000);
  } else if (
    vandak[0].innerText === y &&
    vandak[1].innerText === y &&
    vandak[2].innerText === y
  ) {
    verj.innerText = "Winner is O";
    obshi.removeEventListener("click", foo);
    guyn(0,1,2)
 setTimeout(() => {

  krel();
}, 1000);
  } else if (
    vandak[0].innerText === x &&
    vandak[3].innerText === x &&
    vandak[6].innerText === x
  ) {
    verj.innerText = "Winner is X";
    obshi.removeEventListener("click", foo);
    guyn(0,3,6)
 setTimeout(() => {

  krel();
}, 1000);
  } else if (
    vandak[0].innerText === y &&
    vandak[3].innerText === y &&
    vandak[6].innerText === y
  ) {
    verj.innerText = "Winner is O";
    obshi.removeEventListener("click", foo);
    guyn(0,3,6)
 setTimeout(() => {

  krel();
}, 1000);
  } else if (
    vandak[3].innerText === x &&
    vandak[4].innerText === x &&
    vandak[5].innerText === x
  ) {
    verj.innerText = "Winner is X";
    obshi.removeEventListener("click", foo);
    guyn(3,4,5)
 setTimeout(() => {

  krel();
}, 1000);
  } else if (
    vandak[3].innerText === y &&
    vandak[4].innerText === y &&
    vandak[5].innerText === y
  ) {
    verj.innerText = "Winner is O";
    obshi.removeEventListener("click", foo);
    guyn(3,4,5)

 setTimeout(() => {

  krel();
}, 1000);
  } else if (
    vandak[6].innerText === x &&
    vandak[7].innerText === x &&
    vandak[8].innerText === x
  ) {
    verj.innerText = "Winner is X";
    obshi.removeEventListener("click", foo);
    guyn(6,7,8)
 setTimeout(() => {

  krel();
}, 1000);
  } else if (
    vandak[6].innerText === y &&
    vandak[7].innerText === y &&
    vandak[8].innerText === y
  ) {
    verj.innerText = "Winner is O";
    obshi.removeEventListener("click", foo);
    guyn(6,7,8)
 setTimeout(() => {

  krel();
}, 1000);
  } else if (
    vandak[1].innerText === x &&
    vandak[4].innerText === x &&
    vandak[7].innerText === x
  ) {
    verj.innerText = "Winner is X";
    obshi.removeEventListener("click", foo);
    guyn(1,4,7)
 setTimeout(() => {

  krel();
}, 1000);
  } else if (
    vandak[1].innerText === y &&
    vandak[4].innerText === y &&
    vandak[7].innerText === y
  ) {
    verj.innerText = "Winner is O";
    obshi.removeEventListener("click", foo);
    guyn(1,4,7)
 setTimeout(() => {

  krel();
}, 1000);
  } else if (
    vandak[2].innerText === x &&
    vandak[5].innerText === x &&
    vandak[8].innerText === x
  ) {
    verj.innerText = "Winner is X";
    obshi.removeEventListener("click", foo);
   
 setTimeout(() => {

  krel();
}, 1000);
  } else if ( 
    vandak[2].innerText === y &&
    vandak[5].innerText === y &&
    vandak[8].innerText === y
  ) {
    verj.innerText = "Winner is O";
    obshi.removeEventListener("click", foo);
    guyn(2,5,8)
 setTimeout(() => {

  krel();
}, 1000);
  } else if (
    vandak[0].innerText === x &&
    vandak[4].innerText === x &&
    vandak[8].innerText === x
  ) {
    verj.innerText = "Winner is X";
    obshi.removeEventListener("click", foo);
    guyn(0,4,8)
 setTimeout(() => {

  krel();
}, 1000);
  } else if (
    vandak[0].innerText === y &&
    vandak[4].innerText === y &&
    vandak[8].innerText === y
  ) {
    verj.innerText = "Winner is O";
    obshi.removeEventListener("click", foo);
    guyn(0,4,8)
 setTimeout(() => {

  krel();
}, 1000);
  } else if (
    vandak[2].innerText === x &&
    vandak[5].innerText === x &&
    vandak[8].innerText === x
  ) {
    verj.innerText = "Winner is X";
    obshi.removeEventListener("click", foo);
    guyn(2,5,8)
    time()
  } else if (
    vandak[2].innerText === y &&
    vandak[5].innerText === y &&
    vandak[8].innerText === y
  ) {
    verj.innerText = "Winner is O";
    obshi.removeEventListener("click", foo);
    guyn(2,5,8)
 setTimeout(() => {

  krel();
}, 1000);
  } else if (
    vandak[2].innerText === x &&
    vandak[4].innerText === x &&
    vandak[6].innerText === x
  ) {
    verj.innerText = "Winner is X";
    obshi.removeEventListener("click", foo);
    guyn(2,4,6)
 setTimeout(() => {

  krel();
}, 1000);
  } else if (
    vandak[2].innerText === y &&
    vandak[4].innerText === y &&
    vandak[6].innerText === y
  ) {
    verj.innerText = "Winner is O";
    obshi.removeEventListener("click", foo);
    guyn(2,4,6)
 setTimeout(() => {

  krel();
}, 1000);
  } else if (count === 9 && verj.innerText !== y && verj.innerText !== x) {
    verj.innerText = "Nichya";
 setTimeout(() => {

  krel();
}, 1000);
  }
};

function foo(event) {
  if (!event.target.innerText) {
    if (count % 2 === 0) {
      event.target.innerText = x;
      counting();
    } else {
      event.target.innerText = y;
      event.target.style.color = 'red'
      counting();
    }
  }
}

obshi.addEventListener("click", foo);
const counting = () => {
  count++;
  if (count >= 5) {
    stugum();
  }
};
let guyn = (a,b,c) => {
     vandak[a].style.background = 'rgb(27, 255, 27)'
     vandak[b].style.background = 'rgb(27, 255, 27)'
     vandak[c].style.background = 'rgb(27, 255, 27)'
     vandak[a].style.border = 'none'
     vandak[b].style.border = 'none'
     vandak[c].style.border = 'none'
};
