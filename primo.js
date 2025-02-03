function numPrimo(num){
    let cont = 0
    for(let i= 0; i <= num; i++){
        if(num % i == 0){
            cont++
        }
    }
    if(cont > 2){
        console.log("No el primo")
    }else{
        console.log("el primo")
    }
}
numPrimo(2)