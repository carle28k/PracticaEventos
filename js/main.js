

document.addEventListener("DOMContentLoaded", (event) => {
  
  
/* VARIABLES */ 


const urlBase='assets';


const arrayBotones=[
  {
      id:"mar",
      text:"Mar"
  },
  {
      id:"edificios",
      text:"Edificios"
  },
  {
      id:"senales",
      text:"Señales"
  },
  {
      id:"arena",
      text:"Arena"
  }
  
]


const arrayFotosViajes=[
  {
      id:1,
      src:`${urlBase}/fotos-viajes/viajes-1.jpg`,
      alt:'viajes 1',
      descripcion:'Esta es la descripción de la foto 1',
      tag: ["mar","arena"]
    },
  {
      id:2,
      src:`${urlBase}/fotos-viajes/viajes-2.jpg`,
      alt:'viajes 2',
      descripcion:'Esta es la descripción de la foto 2',
      tag: ["mar"]
  },
  {
      id:3,
      src:`${urlBase}/fotos-viajes/viajes-3.jpg`,
      alt:'viajes 3',
      descripcion:'Esta es la descripción de la foto 3',
      tag: ["senales"]
    },
  {
      id:4,
      src:`${urlBase}/fotos-viajes/viajes-4.jpg`,
      alt:'viajes 4',
      descripcion:'Esta es la descripción de la foto 4',
      tag: ["edificios"]
  },
  {
      id:5,
      src:`${urlBase}/fotos-viajes/viajes-5.jpg`,
      alt:'viajes 5',
      descripcion:'Esta es la descripción de la foto 5',
      tag: ["edificios"]
  },

  {
      id:6,
      src:`${urlBase}/fotos-viajes/viajes-6.jpg`,
      alt:'viajes 6',
      descripcion:'Esta es la descripción de la foto 6',
      tag: ["mar","arena"]
  },

  {
      id:7,
      src:`${urlBase}/fotos-viajes/viajes-7.jpg`,
      alt:'viajes 7',
      descripcion:'Esta es la descripción de la foto 7',
      tag: ["edificios"]
  }
]


/* FUNCIONES */


//-----PINTAR BOTONES-----
const pintarBotones=()=>{
  console.log('pintando Botones.....');
  
  arrayBotones.forEach((item)=>{
    buttons.innerHTML+=  `
         <button id="${item.id}">${item.text}</button>
    `
  })


}


pintarBotones()




//-----MOSTRAR INFO BOTONES-----
const mostrarMensaje = (text) => {
  console.log(text);

}



//-----DECLARAR VARIABLES BOTONES-----
const clicarBotones=()=>{

  arrayBotones.forEach((item, i)=>{
    const boton = document.querySelector(`#${item.id}`)
    boton.addEventListener("click", mostrarMensaje)
  })

}

clicarBotones()



//-----FILTRAR IMAGENES PARA GALERÍA-----
/*
const pintarImagenesGalería = () => {

  arrayFotosViajes.array.forEach((item, i)=>{

    if 
    item.array.forEach((item, i)=>{
    
  

    });
  

  });
}
*/



  });//DOM CARGADO
