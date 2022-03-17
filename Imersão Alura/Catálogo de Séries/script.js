function adicionarAoCatalogo() {

    var imagemFilme = document.getElementById("imagem").value;

    var nomeFilme = document.getElementById("nome").value;

    var comentariosFilme = document.getElementById("comentarios").value;

    if (imagemFilme.endsWith(".jpg")) {
        const div = document.getElementById("catalogo");
        const itemContainer = document.createElement("div");

        itemContainer.classList.add("itemContainer");

        itemContainer.innerHTML = `<img class='cover-img' src='${imagemFilme}'></img>
        <div class='text'>
            <h3 class='titulo'>${nomeFilme}</h3>
            <p>${comentariosFilme}</p>
        </div>
        `;
        div.appendChild(itemContainer);
    }
    else {
        alert("O endenreço da imagem está incorreto")
    }

    document.getElementById("imagem").value = ""
    document.getElementById("nome").value = ""
    document.getElementById("comentarios").value = ""
}

listaInicialCatalogo = [{tituloFilme: "Fate:Zero", imagemFilme: "https://m.media-amazon.com/images/M/MV5BMDNiZjIzMzYtMDg1Zi00ZjM3LWFlZjUtZmNhMTQ1MDU3ODU0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg",
 filmeComentarios: "Based" },
{tituloFilme: "Code Geass", imagemFilme: "https://static.displate.com/857x1200/displate/2020-05-19/79f8f80a8c340c36f4d82af807fa4fee_8343239c386a39bd047a91a356af498f.jpg", filmeComentarios: "Based"},
{tituloFilme: "Steins;Gate", imagemFilme: "https://images.fanart.tv/fanart/steinsgate-57b2753b9dc66.jpg", filmeComentarios: "Based"}];

listaInicialCatalogo.forEach((filme) => {
    const div = document.getElementById("catalogo");
    const itemContainer = document.createElement("div");

    itemContainer.classList.add("itemContainer");

    itemContainer.innerHTML = `<img class='cover-img' src='${filme.imagemFilme}'></img>
    <div class='text'>
        <h3 class='titulo'>${filme.tituloFilme}</h3>
        <p>${filme.filmeComentarios}</p>
    </div>   
    
    `;
    div.appendChild(itemContainer);
})

// carousel try

const delay = 3000; //ms

const slides =  document.querySelector(".catalogo");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
    if (next) {
        current += current > maxLeft ? -100 : current * -1;
    }
    else {
        current = current < 0 ? current + 100 : maxLeft;
    }

    slides.style.left = current + "%";
};

// Controls

document.querySelector(".next-slide").addEventListener("click", function() {
    changeSlide ();
    restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
    changeSlide(false);
    restart();
});