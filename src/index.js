import {Pessoa} from './modules/pessoa';
import './assets/css/style.scss'

const pessoaNova = new Pessoa('thiago', 34)
const soma = pessoaNova.sum(10,10)

let app = document.querySelector('#app')
let textEl = document.createElement('p')
textEl.innerHTML = `${pessoaNova.nome} ${soma}`
app.appendChild(textEl) 