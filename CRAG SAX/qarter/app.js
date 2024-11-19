let cont = document.querySelector('section')
let a = 0
let kar = 0
let d = 0
let v = 0
let tiv1 = 0
let tiv2 = 0
let tiv3 = 0
let tiv4 = 0
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let k = 8
cont.addEventListener('click', (event) => {

    if (!event.target.innerText) {
        if (arr.indexOf(1) === Math.round(Math.random() * k) && a !== 2) {
            event.target.innerText = 1
            a++
            console.log(k, arr);
        } else if (a === 2) {
            --k
            arr.splice(arr.indexOf(1), 1)
        } else  if (arr.indexOf(2) === Math.round(Math.random() * k) && kar !== 2) {
            event.target.innerText = 2
            kar++
            console.log(k, arr);
        } else if (kar === 2) {
            --k
            arr.splice(arr.indexOf(2) , 1)
            console.log(k, arr);
        } else if (arr.indexOf(3) === Math.round(Math.random() * k) && d !== 2) {
            event.target.innerText = 3
            d++
            console.log(k, arr);
        }else  if (d === 2) {
            --k
            arr.splice(arr.indexOf(3) , 1)
            console.log(k, arr);
        } else if (arr.indexOf(4) === Math.round(Math.random() * k) && v !== 2) {
            event.target.innerText = 4
            v++
            console.log(k, arr);
        }    else if (v === 2) {
            --k
            arr.splice(arr.indexOf(4) , 1)
            console.log(k, arr);
        } else if (arr.indexOf(5) === Math.round(Math.random() * k) && tiv1 !== 2) {
            event.target.innerText = 5
            tiv1++
            console.log(k, arr);
        } else if (tiv1 === 2) {
            --k
            arr.splice(arr.indexOf(5) , 1)
            console.log(k, arr);
        } else if (arr.indexOf(6) === Math.round(Math.random() * k) && tiv2 !== 2) {
            event.target.innerText = 6
            tiv2++
            console.log(k, arr);
        } else if (tiv2 === 2) {
            --k
            arr.splice(arr.indexOf(6) , 1)
            console.log(k, arr);
        } else if (arr.indexOf(7) === Math.round(Math.random() * k) && tiv3 !== 2) {
            event.target.innerText = 7
            tiv3++
            console.log(k, arr);
        }  else if (tiv3 === 2) {
            --k
            arr.splice(arr.indexOf(7) , 1)
            console.log(k, arr);
        } else if (arr.indexOf(8) === Math.round(Math.random() * k) && tiv4 !== 2) {
            event.target.innerText = 8
            tiv4++
            console.log(k, arr);
        } else if (tiv4 === 2) {
            --k
            arr.splice(arr.indexOf(8) , 1)
            console.log(k, arr);
        }

    }
})
