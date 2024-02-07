import purchasedTvs from "./purchasedTvs.js";
import soldTvs from "./soldTvs.js";


function stockTvs(productArray){
    const purchased = purchasedTvs(productArray);
    const sold = soldTvs(productArray);
    return purchased - sold;
}

export default stockTvs;