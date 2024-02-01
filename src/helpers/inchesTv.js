
function inchesTv(sizesArray){
    let space = " ";
    for(let i = 0; i < sizesArray.length; i++){
        const inches = sizesArray[i];
        const cms = Math.round(sizesArray[i] * 2.54)

        space =  space + `${inches} inch  ${cms} cms` ;

        if (i < sizesArray.length -1){
            space = `${space} | `
        }

    }

    return space;
}


export default inchesTv;