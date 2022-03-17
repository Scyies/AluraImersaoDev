


function aumentarPontosNos() {
    let pontosNos = document.getElementById('pontosNos')
    console.log(pontosNos.innerHTML)
    let pontosNosValor = parseInt(pontosNos.innerHTML)

    if (pontosNosValor <= 12 && document.getElementById('trucobtn').value == 0) {
        pontosNosValor++
        pontosNos.innerHTML = pontosNosValor
        if (pontosNosValor >= 12) {
            alert("Comi o cu de quem ta lendo")
            pontosNos.innerHTML = 0;
            return;
        }
    }
    else if (document.getElementById('trucobtn').value > 0) {
        pontosNosValor = pontosNosValor + parseInt(document.getElementById('trucobtn').value);
        pontosNos.innerHTML = pontosNosValor
        console.log(pontosNosValor)
        if (pontosNosValor >= 12) {
            alert("Comi o cu de quem ta lendo")
            pontosNos.innerHTML = 0;
            return;
        }
    }
}
function aumentarPontosEles() {
    let pontosEles = document.getElementById('pontosEles')
    console.log(pontosEles.innerHTML)
    let pontosElesValor = parseInt(pontosEles.innerHTML)

    if (pontosElesValor <= 12 && document.getElementById('trucobtn').value == 0) {
        pontosElesValor++
        pontosEles.innerHTML = pontosElesValor
        if (pontosElesValor >= 12) {
            alert("Comi o cu de quem ta lendo")
            pontosEles.innerHTML = 0;
            return;
        }
    }
    else if (document.getElementById('trucobtn').value > 0) {
        pontosElesValor = pontosElesValor + parseInt(document.getElementById('trucobtn').value);
        pontosEles.innerHTML = pontosElesValor
        console.log(pontosElesValor)
        if (pontosElesValor >= 12) {
            alert("Comi o cu de quem ta lendo")
            pontosEles.innerHTML = 0;
            return;
        }
    }
}

function diminuirPontosEles() {
    let pontosEles = document.getElementById('pontosEles')
    console.log(pontosEles.innerHTML)
    let pontosElesValor = parseInt(pontosEles.innerHTML)

    if (pontosElesValor > 0) {
        pontosElesValor--
        pontosEles.innerHTML = pontosElesValor
    }
}
function diminuirPontosNos() {
    let pontosNos = document.getElementById('pontosNos')
    console.log(pontosNos.innerHTML)
    let pontosNosValor = parseInt(pontosNos.innerHTML)

    if (pontosNosValor > 0) {
        pontosNosValor--
        pontosNos.innerHTML = pontosNosValor
    }
}

function truco() {
    let facao = document.getElementById('trucobtn')
    let facaoMais = parseInt(facao.value) + 3
    if (facaoMais < 12) {
        facao.value = facaoMais
        facao.innerHTML = facao.value
    }
    else if (facaoMais == 12) {
        facao.value = facaoMais
        facao.innerHTML = facao.value
    }
    else {
        facao.value = 0
        facao.innerHTML = 'Truco'
    }
}

