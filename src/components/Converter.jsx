import { useState } from "react";

export default function Converter(){
    const [inputValue, setInputValue] = useState("0")

    const [inputCurrency, setInputCurrency] = useState("USD")

    const [outputCurrency, setOutputCurrency] = useState("YEN")

    const currencyVals = {
        "USD": 1,
        "YEN": 144.33,
        "WON": 1318.15
    }

    const currencyDecimals = {
        "USD": 2,
        "YEN": 0,
        "WON": 0
    }


    return (
        <section className="converter">
            <form>
                <label htmlFor="inputData">{inputCurrency}: 
                    <input type="text" name="inputData"
                        onChange={e => setInputValue(e.target.value)}>
                    </input>
                </label>
            </form>

            <label htmlFor="from"> Convert From:
                <select onChange={(e) => setInputCurrency(e.target.value)}>
                    <option value="YEN">YEN</option>
                    <option value="USD">USD</option>
                    <option value="WON">WON</option>
                </select>
            </label>

            <label htmlFor="to"> Convert To:
                <select onChange={(e) => setOutputCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="YEN">YEN</option>
                    <option value="WON">WON</option>
                </select>
            </label>
            <h2>{(inputValue * currencyVals[outputCurrency] / currencyVals[inputCurrency]).toFixed(currencyDecimals[outputCurrency])} {outputCurrency}</h2>
        </section>
    )
}