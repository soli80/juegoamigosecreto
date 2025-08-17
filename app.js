let nombresIngresados = [];
let resultado = "";

function agregarAmigo() {
  const input = document.getElementById("nombreInput");
  const nombre = input.value.trim();
  if (typeof nombre !== 'string' || nombre.length < 2) {
    alert("Debe ingresar un nombre valido, que tenga minimo dos letras.");
    return;
  }

  nombresIngresados.push(nombre);
  mostrarNombres();
  input.value = "";
}

function mostrarNombres() {
  const lista = document.getElementById("listaNombres");
  lista.innerHTML = "";
  nombresIngresados.forEach(nombre => {
    const p = document.createElement("p");
    p.textContent = nombre;
    lista.appendChild(p);
    });
}

function sortearAmigo() {
    if (nombresIngresados.length === 0) return;

    const indice = Math.floor(Math.random() * nombresIngresados.length);
    resultado = nombresIngresados[indice];

    const amigoSorteado = "El amigo secreto sorteado es: " + resultado;

    document.getElementById("listaNombres").style.display = "none";
    document.getElementById("sortearBtn").style.display = "none";

    const resultadoDiv = document.getElementById("resultadoFinal");
    resultadoDiv.innerHTML = `<p>${amigoSorteado}</p>`;

    document.getElementById("reiniciarBtn").style.display = "inline";
}

//función adicional------------------------
function reiniciar() {

    nombresIngresados = [];
    resultado = "";

    document.getElementById("listaNombres").innerHTML = "";
    document.getElementById("listaNombres").style.display = "block";
    document.getElementById("resultadoFinal").innerHTML = "";
    document.getElementById("sortearBtn").style.display = "flex";
    document.getElementById("reiniciarBtn").style.display = "none";
}