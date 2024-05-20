// Mensaje para verificar que Script se ejecuta bien
// console.log("Script Working!!! 🥳");

// Usando la funtion dragElement
// para darle propiedades de Arrastre
// a las Plantas

dragElement( document.getElementById('plant1') );
dragElement( document.getElementById('plant2') );
dragElement( document.getElementById('plant3') );
dragElement( document.getElementById('plant4') );
dragElement( document.getElementById('plant5'));
dragElement( document.getElementById('plant6') );
dragElement( document.getElementById('plant7') );
dragElement( document.getElementById('plant8') );
dragElement( document.getElementById('plant9') );
dragElement( document.getElementById('plant10') );
dragElement( document.getElementById('plant11') );
dragElement( document.getElementById('plant12') );
dragElement( document.getElementById('plant13') );
dragElement( document.getElementById('plant14') );

// Creando la Funcion dragElement

function dragElement(terrariumElement) {
  // Creando variable de Posicion
  let despX = 0, despY = 0, initPosX = 0, initPosY = 0;
  //Funcion elementDrag
  function elementDrag(e) {
    //Se calcula el Desplazamiento del mouse
    despX = e.clientX - initPosX;
    despY = e.clientY - initPosY;
    // Asignanco nueva posicion Inicial
    initPosX = e.clientX;
    initPosY = e.clientY;
    // Desplazamiento a la Planta
    terrariumElement.style.left = `${terrariumElement.offsetLeft + despX}px`;
    terrariumElement.style.top = `${terrariumElement.offsetLeftTop + despY}px`;
  }
  //Parando funcionalidad de Arrastre
  function onpointerup () {
    document.onpointerup = null;
    document.onpointermove = null;
  }
  // PointerDrag Function
  function pointerDrag(event) {
    // Previene el Funcionamiento por defecto
    event.preventDefault();
    initPosX = event.clientX;
    initPosY = event.clientY;
    // console.log(`initPosX> ${initPosX}`);
    // console.log(`initPosY> ${initPosY}`);
    // Realizando funcion de Arrastre
    document.onpointermove = elementDrag;
    // Funcion que ejecuta el usuario
    // cuando suelta el raton
    document.onpointerup = stopElementDrag;
  }
  // Detectando el evento de Sujetar
  // EJEMPLO terrariumElement.onpointerdown = ()=>{console.log("Auch!!!")}
  terrariumElement.onpointerdown = pointerDrag;
}
