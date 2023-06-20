count1 = 0;
count2 = 6;
count3 = 11;
document.getElementById("principales").addEventListener("mouseenter", () => {
  if (count1 < 5) {
    count1++;
    getPjPrincipal(count1);
  }
});

const getPjPrincipal = (id) => {
  fetch(`https://swapi.dev/api/people/${id}`)
    .then((res) => res.json())
    .then((data) => mostrarPjPrincipal(data));
};

const mostrarPjPrincipal = (personaje) => {
  const { name, height, mass } = personaje;
  console.log(name, height, mass);
  const pjPrincipal = document.getElementById("pjPrincipal");
  const nuevoPersonaje = document.createElement("div");
  nuevoPersonaje.classList.add("col-12", "col-md-6", "col-lg-4");
  nuevoPersonaje.innerHTML = `<div class="col-12", "col-md-6", "col-lg-4">
      <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
        <div class="timeline-icon color1"><i class="fa fa-address-card" aria-hidden="true"></i></div>
        <div class="timeline-text">
          <h6>${name}</h6>
          <p>Estatura: ${height} Peso: ${mass}</p>
        </div>
      </div>
      </div>`;

  pjPrincipal.appendChild(nuevoPersonaje);
};

document.getElementById('secundarios').addEventListener("mouseenter", () => {
  if (count2 < 11) {
    count2++;
    getPjSecundarios(count2);
  }
})

const getPjSecundarios = (id) =>{ 
  fetch(`https://swapi.dev/api/people/${id}`)
  .then((res) => res.json())
  .then((data) => mostrarPjSecundarios(data));
}

const mostrarPjSecundarios = (personaje) => {
  const { name, height, mass } = personaje;
  console.log(name, height, mass);
  const pjSecundario = document.getElementById("pjSecundario");
  const nuevoPersonaje = document.createElement("div");
  nuevoPersonaje.classList.add("col-12", "col-md-6", "col-lg-4");
  nuevoPersonaje.innerHTML = `<div class="col-12", "col-md-6", "col-lg-4">
      <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
        <div class="timeline-icon color2"><i class="fa fa-address-card" aria-hidden="true"></i></div>
        <div class="timeline-text">
          <h6>${name}</h6>
          <p>Estatura: ${height} Peso: ${mass}</p>
        </div>
      </div>
      </div>`;

  pjSecundario.appendChild(nuevoPersonaje);
}

document.getElementById('terciarios').addEventListener("mouseenter", () => {
  if (count3 < 16) {
    count3++;
    getPjTerciarios(count3);
  }
})

const getPjTerciarios = (id) =>{
  fetch(`https://swapi.dev/api/people/${id}`)
 .then((res) => res.json())
 .then((data) => mostrarPjTerciarios(data));
}

const mostrarPjTerciarios = (personaje) => {
  const { name, height, mass } = personaje;
  console.log(name, height, mass);
  const pjTerciario = document.getElementById("pjTerciario");
  const nuevoPersonaje = document.createElement("div");
  nuevoPersonaje.classList.add("col-12", "col-md-6", "col-lg-4");
  nuevoPersonaje.innerHTML = `<div class="col-12", "col-md-6", "col-lg-4">
      <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
        <div class="timeline-icon color3"><i class="fa fa-address-card" aria-hidden="true"></i></div>
        <div class="timeline-text">
          <h6>${name}</h6>
          <p>Estatura: ${height} Peso: ${mass}</p>
        </div>
      </div>
      </div>`;

  pjTerciario.appendChild(nuevoPersonaje);
}