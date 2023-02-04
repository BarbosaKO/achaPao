var visor = document.getElementById("visor");
var numVezesClicado = 0;
var codTeclado = "";
var codPaes = [
                {nome: 'PÃO FRANCES', codigo: '17'},
                {nome: 'PÃO FRANCÊS INTEGRAL', codigo: '1328'},
                {nome: 'SEMI ITALIANO', codigo: '604475'}, 
                {nome: 'PÃO DA ÁGUA', codigo: '106954'},
                {nome: 'BAGUETE COM QUEIJO', codigo: '587266'},
                {nome: 'BAGUETE COM GERGILIM', codigo: '123'},
                {nome: 'RUSTICO', codigo: '113854'},
                {nome: 'CACHORRINHO', codigo: '2547'},
                {nome: 'PÃO DE CEBOLA ERVAS FINAS', codigo: '111623'},
                {nome: 'ROSQUINHA DE LARANJA', codigo: '111007'},
            ];

var paoProcurado = codPaes[Math.floor(Math.random() * codPaes.length)];
visor.innerHTML = paoProcurado.nome+": ";

function achaPao(){

    let stringProcurada = codTeclado;
    console.log(codTeclado);
    let resultado = codPaes.findIndex(objeto => objeto.codigo === stringProcurada);
    if (resultado === -1) {
        console.log('A string não foi encontrada no array de objetos');
        visor.innerHTML = "ERRO...";
        setTimeout(function(){
            numVezesClicado = 0;
            codTeclado = "";
            paoProcurado = codPaes[Math.floor(Math.random() * codPaes.length)];
            visor.innerHTML = paoProcurado.nome+": ";
        }, 2000);
    } else {
            console.log('A string foi encontrada no objeto com índice ' + resultado + ' do array');
            numVezesClicado = 0;
            codTeclado = "";
            paoProcurado = codPaes[Math.floor(Math.random() * codPaes.length)];
            visor.innerHTML = paoProcurado.nome+": ";
    //codPaes[resultado].nome;
    }
}

function numClicado(tecla){
    if(numVezesClicado == 9){
        numVezesClicado = 0;
        codTeclado = "";
        visor.innerHTML = paoProcurado.nome+": ";
    }else{
        numVezesClicado++;
        codTeclado = codTeclado.concat(tecla);
        let novoVisor = document.getElementById("visor").innerText.concat(tecla);
        document.getElementById("visor").innerHTML = novoVisor;
        console.log(codTeclado);
    }
}