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

  const handleClick = (event) => {
    console.log(event.target.innerText);
  }

  return (
      <>
      <main>

    <h1>Tech It Easy Dashboard</h1>
        <section>
          <div>
            <h2> Verkoopoverzicht </h2>
            <article>
              <h3>Aantal verkochte Tvs : {soldTvs(inventory)}</h3>
            </article>
            <article>
              <h3>Aantal ingekochte producten : {purchasedTvs(inventory)} </h3>
            </article>
            <article>
              <h3>Aantal te verkopen producten : {stockTvs(inventory)} </h3>
            </article>


          </div>
        </section>
        <section>
          <div>
            <h2>Best verkochte tv</h2>
            <p>{nameTv(bestSellingTv)}</p>
            <p>{moneySign(bestSellingTv)}</p>
            <p>{inchesTv(bestSellingTv.availableSizes)}</p>

            <span><img src={bestSellingTv.sourceImg}/></span>
            <p>{nameTv(bestSellingTv)} </p>
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

            <button type="button" onClick={handleClick}>
              Meest verkocht eerst
            </button>
            <button type="button" onClick={handleClick}>
              Goedkoopste eerst
            </button>
            <button type="button" onClick={handleClick}>
              Meest geschikte voor sport eerst
            </button>




          </div>
        </section>
      </main>
      </>
  )
}

export default App
