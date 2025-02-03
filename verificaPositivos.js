let numeros = [5, 3, -4, -3, -9]
function validaPositivo(){
    let contPos = 0, contNeg = 0;
    for(let i = 0; i < 5; i++){
        if(numeros[i] < 0){
            contNeg += 1;
        }else{
            contPos += 1;
        }
    }
    return `qtd positivos: ${contPos}
qtd negativo: ${contNeg}`
}

console.log(validaPositivo())