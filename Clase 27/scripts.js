const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");

const padre = document.getElementById("padre");

//  input.addEventListener('keyup', (fse) => {
//     console.log(fse);
// })

const gallery = document.getElementById("gallery");

gallery.addEventListener("click", (e) => {
    console.log(e.target);
    console.dir(e.target);
    // e.target.classList.add("red");
});

/*const link = document.getElementById('link')

link.addEventListener('click', (e) => {
    e.preventDefault()
    
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('El formulario se ha enviado');
})

button.addEventListener('click', () => {
    input.value = 'Has hecho click'
})*/

//button.click()
