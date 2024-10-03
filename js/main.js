

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
      src:`${urlBase}/FOTOS_VIAJES/viajes-1.jpg`,
      alt:'viajes 1',
      descripcion:'Esta es la descripción de la foto 1',
      tag: ["mar","arena"],
      title: "Título imagen 1"
    },
  {
      id:2,
      src:`${urlBase}/FOTOS_VIAJES/viajes-2.jpg`,
      alt:'viajes 2',
      descripcion:'Esta es la descripción de la foto 2',
      tag: ["mar"],
      title: "Título imagen 2"
  },
  {
      id:3,
      src:`${urlBase}/FOTOS_VIAJES/viajes-3.jpg`,
      alt:'viajes 3',
      descripcion:'Esta es la descripción de la foto 3',
      tag: ["senales"],
      title: "Título imagen 3"
    },
  {
      id:4,
      src:`${urlBase}/FOTOS_VIAJES/viajes-4.jpg`,
      alt:'viajes 4',
      descripcion:'Esta es la descripción de la foto 4',
      tag: ["edificios"],
      title: "Título imagen 4"
  },
  {
      id:5,
      src:`${urlBase}/FOTOS_VIAJES/viajes-5.jpg`,
      alt:'viajes 5',
      descripcion:'Esta es la descripción de la foto 5',
      tag: ["edificios"],
      title: "Título imagen 5"
  },

  {
      id:6,
      src:`${urlBase}/FOTOS_VIAJES/viajes-6.jpg`,
      alt:'viajes 6',
      descripcion:'Esta es la descripción de la foto 6',
      tag: ["mar","arena"],
      title: "Título imagen 6"
  },

  {
      id:7,
      src:`${urlBase}/FOTOS_VIAJES/viajes-7.jpg`,
      alt:'viajes 7',
      descripcion:'Esta es la descripción de la foto 7',
      tag: ["edificios"],
      title: "Título imagen 7"
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




//-----MOSTRAR INFO BOTONES / IMPRIMIR FOTOS-----
const generarArrayImagenes = (tagBoton) => {
  console.log(tagBoton);

  //Limpieza de galería y mensaje
  gallery.innerHTML = ""
  textInfo.innerHTML = ""


  //Creación nuevo array
  let arrayFotosFiltradas = [];

  arrayFotosViajes.forEach((item)=>{
    //console.log(item.tag)

    arrayFotosFiltradas = arrayFotosViajes.filter((foto)=>foto.tag.includes(tagBoton))

  });

  
  //Pintar mensaje
    
    textInfo.innerHTML+=  `
        <p>Se han encontrado ${arrayFotosFiltradas.length} imágenes con el tag ${tagBoton}</p>
    `
  
  
  
  //Pintar imágenes
  console.log(arrayFotosFiltradas)
    arrayFotosFiltradas.forEach((item)=>{
      gallery.innerHTML+=  `
        <div>
              <h3>${item.title}</h3>
              <img id="${item.id}" src="${item.src}" alt="">
        </div>
    `
    })


}


/*
1.generarImagenes
2. Recorrer lista imagenes
2.5 Recorrer sublista tags
3.    Si valor entrada es igual a tag
        imprimir imagen

*/







//-----DECLARAR VARIABLES BOTONES-----
const clicarBotones=()=>{

  arrayBotones.forEach((item, i)=>{
    const boton = document.querySelector(`#${item.id}`)
    boton.addEventListener("click", () => generarArrayImagenes(item.id))
  })

}

clicarBotones()



//-----FILTRAR IMAGENES PARA GALERÍA-----
/*
const pintarImagenesGaleria = () => {

  arrayFotosViajes.array.forEach((item, i)=>{

    if 
    item.array.forEach((item, i)=>{
    
  

    });
  

  });
}
*/



  });//DOM CARGADO
