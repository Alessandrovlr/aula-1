function getNum(n1, n2){
    console.log(soma(n1,n2))
    console.log(subtracao(n1,n2))
    console.log(mult(n1,n2))
    console.log(div(n1,n2))
}

function soma(n1, n2){
    return n1 + n2; 
}

function subtracao(n1, n2){
    return n1 - n2; 
}

function mult(n1, n2){
    return n1 * n2; 
}

function div(n1, n2){
    return n1 / n2; 
}

getNum(1,2)