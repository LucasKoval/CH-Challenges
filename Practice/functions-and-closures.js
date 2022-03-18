function mostrarLista(dataList) {
   if (dataList.length) {
      console.log(dataList);
   } else {
      console.log('Lista vacía');
   }
}

mostrarLista();
mostrarLista([]);
mostrarLista(['Lucas']);
mostrarLista(['Rojo', 'Azul', 'Blanco']);

//-----------------------------------------//

(function ([1,2,3]) {
    if (data) {
       console.log(dataList);
    } else {
       console.log('Lista vacía');
    }
})()
 
//-----------------------------------------//

function crearMultiplicador(numberA) {
    return function (numberB) {
        console.log(numberA * numberB)
    }
}
    const duplicar = crearMultiplicador(2)

