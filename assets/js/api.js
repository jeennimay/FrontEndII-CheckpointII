//alert("Hey");
//IMPORT DAS FUNÇÕES DENTRO DA PASTA MODULO
import { darkMode, ligthMode } from "./modulo/darkmode.js"

const completo = document.getElementById("completo");
const tarefa = document.querySelector('#tarefa');

//console.log(pronto);
const mostrarDados = (result) => {
    for (const campo in result) {
        //console.log(result[campo]);
        const card = `  <div class="card">
                            <h4>User ID: ${result[campo].userId}</h4>
                            <h4>ID Tarefa: ${result[campo].id}</h4>
                            <h5>Tarefa: ${result[campo].title}</h5>
                        </div>`

        if (result[campo].completed) {
            completo.innerHTML += card;
        } else {
            tarefa.innerHTML += card;
        }

    }
}

//Evento onload - quando a páginoa carrega
document.querySelector("body").addEventListener("loadstart", carregarAPI());

function carregarAPI() {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    };

    fetch(`https://jsonplaceholder.typicode.com/todos/`, options)
        .then(response => {
            response.json()
            .then(dado => mostrarDados(dado))
        })
        .catch(e => console.error('Deu erro mano! ' + e, message))
};

//Dark theme
let contador = 0;

let btnThmDark = document.querySelector(".thmDark")
btnThmDark.addEventListener("click", () => {
    if (contador % 2 == 0) {
        darkMode();
    } else {
        ligthMode();
    }
    contador++;
})
