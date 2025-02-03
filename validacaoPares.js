function verificaNum(num){
    if(num % 2 == 0){
        console.log(`O numero é par`);
    }else{
        console.log(`O numero é impar`);
    }
}

function opTernario(n){
    (n % 2 == 0)? console.log(`Par`) : console.log(`Imprar`)
}

verificaNum(5);
opTernario(2);