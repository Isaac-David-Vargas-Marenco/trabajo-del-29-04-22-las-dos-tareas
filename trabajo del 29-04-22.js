alert ('Esta funcionando');
//primera parte de la tarea *_*

var numero_que_queremos_evaluar = 100;

function log10(numero) {
    return Math.log10(numero);
}
console.log(log10(numero_que_queremos_evaluar));





//segunda parte de la tarea *_*
 var text = 'mañana vamos a comer un churchill al puerto, y luego  vamos a la playa'// hay poner no en medio de luego y vamos para que salga no vamos a ir a la playa

function busqueda_de_la_playa(texto) {
    if (text.includes('playa')) {
      if (text.includes('no')) {
          console.log('no vamos a ir a la playa');
      } else {
          console.log('vamos a ir a la playa');
      }  
    }
}

busqueda_de_la_playa(text);