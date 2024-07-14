import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const VAT = 0.07;

function App() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vat, setVAT] = useState(0);
  const [grossPrice, setGrossPrice] = useState(0);

  const handlerPriceChange = (e) => {
    const newPrice =
      e.target.value != "" ? parseFloat(e.target.value) : e.target.value;
    setPrice(newPrice);
    calculateGrossPrice(newPrice, discount);
  };

  const handlerDiscountChange = (e) => {
    const newDiscount =
      e.target.value != "" ? parseFloat(e.target.value) : e.target.value;
    setDiscount(newDiscount);
    calculateGrossPrice(price, newDiscount);
  };

  const calculateGrossPrice = (newPrice, newDiscount) => {
    const totalVAT = (newPrice - newDiscount) * VAT;
    setVAT(totalVAT.toFixed(2));
    setGrossPrice(newPrice - newDiscount + totalVAT);
  };

  return (
    <>
      <div>
        <label style={{ fontSize: "30pt" }} htmlFor="price">
          Price:{" "}
        </label>
        <input
          type="number"
          name="price"
          value={price}
          style={{ fontSize: "30pt" }}
          onChange={handlerPriceChange}
        />
      </div>
      <div>
        <label style={{ fontSize: "30pt" }} htmlFor="discount">
          Discount:{" "}
        </label>
        <input
          type="number"
          name="discount"
          value={discount}
          style={{ fontSize: "30pt" }}
          onChange={handlerDiscountChange}
        />
      </div>

      <h1>Gross Price = {grossPrice}</h1>
      <h1>VAT = {vat}</h1>
    </>
  );
}

export default App;
