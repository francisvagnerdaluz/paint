import {Pincel} from "./pincel.js";
import {Cores} from "./cores.js";
import {abrirLista} from "./scripts.js";
const tamanho=localStorage.getItem('Tamanho')
const cor=localStorage.getItem('Cor')
abrirLista()
Pincel(tamanho,cor)
Cores()
