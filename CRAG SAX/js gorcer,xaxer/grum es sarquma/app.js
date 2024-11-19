let but = document.querySelector("button");
let select = document.querySelector("#q");
let cont = document.querySelector("#content");
let gorc = document.querySelector("#gorc");
let width = document.querySelector('#width')
let height = document.querySelector('#height')
let color = document.querySelector('#color')
let bgcolor = document.querySelector('#bgcolor')

let y = 0


but.addEventListener("click", () => {
    y++
    const selectedTagName = document.createElement(select.value)
    selectedTagName.innerText = cont.value;
    selectedTagName.style.width = width.value + 'px'
    selectedTagName.style.height = height.value + 'vh'
    selectedTagName.style.color = color.value
    selectedTagName.style.backgroundColor = bgcolor.value
    gorc.append(selectedTagName)
    if (y === 1) {
        but.innerText = 'refresh'
        but.addEventListener("click", () => {
            location.reload()
        });


    }
});

