const formulario = document.querySelector("body > form");
const input = document.querySelector("body > form > input[type=number]")
const boton = document.querySelector("body > form > button")

const pizzas = [{
    id: 0,
    name: "Muzzarella",
    url: "./assets/Pizza-Muzzarella.jpg",
    ingredientes: "muzarella, sal, tomate",
    precio: 420
  },
  {
    id: 1,
    name: "Pepperoni",
    url: "./assets/photo-pepperoni-pizza.jpg",
    ingredientes: "pepperoni, queso, tomate",
    precio: 650
  },
  {
    id: 2,
    name: "Fugazzeta",
    url: "./assets/Fugazza.jpg",
    ingredientes: "cebolla, queso, tomate",
    precio: 390
  },
  {
    id: 3,
    name: "Hawaiana",
    url: "./assets/istockphoto-503580316-170667a.jpg",
    ingredientes: "piña, queso, tomate",
    precio: 620
  },
  {
    id: 4,
    name: "Mexicana",
    url: "./assets/39-mexicana_1200x1200.jpg",
    ingredientes: "carne, sal, queso",
    precio: 680
  },
  {
    id: 5,
    name: "Anchoa",
    url: "./assets/Pizza-con-anchoas.jpg",
    ingredientes: "anchoas, muzzarella, tomate",
    precio: 500
  }
];


formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Formulario Enviado");
  const resultado = input.value;
  buscadorPizzas(resultado);
});


const buscadorPizzas = (resultado) => {
  strPizzasLocal.map(pizza => {
    const h2 = document.querySelector("#card > h2")
    const h4 = document.querySelector("#card > h4")
    const img = document.querySelector("#card > img")
    const parrafo = document.querySelector("#card > p")
    
    if (resultado == pizza.id)  {
      h2.textContent = `Nombre: ${pizza.name} `
      h4.textContent = `Precio: ${pizza.precio}`
      img.src = `${pizza.url}`
      parrafo.textContent = `Ingredientes: ${pizza.ingredientes}`
    } else {if (resultado < 0 || resultado > pizzas.length - 1 ) {
      h2.textContent = "Esta pizza no existe"
      h4.textContent = "-"
      img.src = "./assets/pagina-error-404-distorsion_23-2148105404.jpg"
      parrafo.textContent = `-`
    } 
    }
  })
  
}; 

const strPizzas = JSON.stringify(pizzas)
localStorage.setItem('pizzas', strPizzas )

const pizzasLocal = localStorage.getItem('pizzas')
const strPizzasLocal = JSON.parse(pizzasLocal)