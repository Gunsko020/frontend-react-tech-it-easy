import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import soldTvs from "./helpers/soldTvs.js";
import purchasedTvs from "./helpers/purchasedTvs.js";
import stockTvs from "./helpers/stockTvs.js";
import nameTv from "./helpers/nameTv.js";
import moneySign from "./helpers/moneySign.js";
import inchesTv from "./helpers/inchesTv.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";







function App() {

    function bestSellers() {
        inventory.sort((a,b)=>{
            return a.sold - b.sold
        });
        console.log (bestSellers)
    }
    function sortCheapest () {
        inventory.sort ((a,b) => {
            return b.price - a.price

        });
        console.log(sortCheapest)
    }
    function  sortSport () {
        inventory.sort((a,b) =>{
            return a.refreshRate - b.refreshRate
        });
        console.log(sortSport)
    }




  return (
      <>
      <main className="page-container">

    <h1>Tech It Easy Dashboard</h1>
        <section>
          <h2> Verkoopoverzicht </h2>
          <div className="dashboard-container">
            <article className='dashboard-item item-sold'>
              <h3>Aantal verkochte Tvs : {soldTvs(inventory)}</h3>
            </article>
            <article className='dashboard-item item-purchased'>
              <h3>Aantal ingekochte producten : {purchasedTvs(inventory)} </h3>
            </article>
            <article className='dashboard-item item-stock'>
              <h3>Aantal te verkopen producten : {stockTvs(inventory)} </h3>
            </article>


          </div>
        </section>
        <section>
          <h2>Best verkochte tv</h2>
          <div className="best-seller-container">
            <span><img src={bestSellingTv.sourceImg}/></span>
            <article className="best-seller-article">


            <p>{nameTv(bestSellingTv)}</p>
            <p>{moneySign(bestSellingTv)}</p>
            <p>{inchesTv(bestSellingTv.availableSizes)}</p>




            <ul>
              <li>
                <img className="icon" src={check}/> wifi
              </li>
              <li>
                <img className="icon" src={minus}/> speech
              </li>
              <li>
                <img className="icon" src={check}/> hdr
              </li>
              <li>
                <img className="icon" src={check}/> bluetooth
              </li>
              <li>
                <img className="icon" src={minus}/> ambilight
              </li>
            </ul>
            </article>
          </div>
        </section>
        <section>
        <button type="button" onClick={bestSellers}>
          Meest verkocht eerst
        </button>
        <button type="button" onClick={sortCheapest}>
          Goedkoopste eerst
        </button>
        <button type="button" onClick={sortSport}>
          Meest geschikte voor sport eerst
        </button>
        </section>
          <section>
              {inventory.map((tv)=>{
                  return <ul key={tv.id}>
                      <li>
                    <span>
                         <img src={tv.sourceImg}/>
                    </span>
                      </li>
                      <li>
                      {tv.brand}
                      </li>
                      <li>
                          {moneySign(tv)}
                      </li>
                      <li>
                          {inchesTv(tv.availableSizes)}
                      </li>
                             {tv.options.map((option)=>{
                                 if(option.applicable === true){
                                     return <li key={option.id}>
                                         <img className="icon" src={check} alt="plus"/>
                                         {option.name}
                                     </li>
                                 }else
                                     return <li key={option.id}>
                                         <img className="icon" src={minus} alt="min" />
                                         {option.name}
                                     </li>
                             })}
                  </ul>
              })}
          </section>

      </main>
      </>
  )
}

export default App
