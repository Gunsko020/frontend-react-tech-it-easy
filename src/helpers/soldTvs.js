

function soldTvs(productArray){
    let total = 0;

    for(let i; i < productArray.length; i++){
        total = total + productArray[i].sold
    }

    return total;
}

export default soldTvs();