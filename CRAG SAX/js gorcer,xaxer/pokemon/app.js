// let user = {
//     skil: 90,
//     age: 15,
//     gjl: 50
// }
// const values = Object.values(user);
// console.log(values.every(el => typeof el === 'number'));
let section = document.querySelector('section')
const pokemons = []

fetch('app.json')
    .then(res => res.json())
    .then(data => {
        data.map(pokemon => {
            let container = document.createElement('div')
            container.innerHTML = `
        <img src = ${pokemon.url} />
        <p>name:${pokemon.name}  </p>
        <p>id:${pokemon.id}  </p>
        <p>width:${pokemon.weight}  </p> 
        <p>height:${pokemon.weight}  </p>
        `
            section.append(container)
        })

    })