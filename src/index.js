// Ejemplo función autoinvocada
// ((nombre) => {
//     console.log('Crando etiqueta h1');
//     const h1 =  document.createElement('h1');
//     h1.innerText = `Hola, ${nombre}`;
//     document.body.append(h1);
// })('Juan');

import { saludar } from './js/componentes.js'
import './styles.css'

const nombre = 'Juan'

saludar(nombre);