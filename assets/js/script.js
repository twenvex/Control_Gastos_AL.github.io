let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGasto = [];
let indexEditar = -1;

function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('DescripcionGasto').value;

    if (indexEditar === -1) {
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaDescripcionGasto.push(descripcionGasto);

    } else {
        listaNombresGastos[indexEditar] = nombreGasto;
        listaValoresGastos[indexEditar] = valorGasto;
        listaDescripcionGasto[indexEditar] = descripcionGasto;
        indexEditar = -1;
        document.getElementById('botonAccion').innerText = 'Agregar Gasto';

    }



    if (valorGasto > 150) {
        alert("¡Alerta! El gasto es mayor a 150 dólares.");

    }

    actualizarListaGastos();
}


function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');


    let htmlLista = '';
    let totalGastos =  0;

    listaNombresGastos.forEach((elemento, posicion) => {

        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcionGasto = listaDescripcionGasto[posicion]; 
        

        htmlLista += `
            <li>

                ${elemento}, Información del gasto: ${descripcionGasto ? descripcionGasto : 'Sin descripción'} 
                USD ${valorGasto.toFixed(2)}
                <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                <button onclick="editarGasto(${posicion});">Editar</button>

            </li>
        `;

        totalGastos += valorGasto;

    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);

    limpiar();

}


function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('DescripcionGasto').value = '';

}


function eliminarGasto(posicion){

    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripcionGasto.splice(posicion, 1);
    
    actualizarListaGastos();

}


function editarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
      document.getElementById('valorGasto').value = listaValoresGastos[posicion];

    document.getElementById('DescripcionGasto').value = listaDescripcionGasto[posicion];


    document.getElementById('botonAccion').innerText = 'Guardar Cambios';

    indexEditar = posicion;

}
