


import CurrencyInput from "react-currency-input-field";
import { useEffect, useState } from "react";


function index() {
    const [countries, setCountries] = useState([]);
    const [rates, setRates] = useState([]);
  
    const [selectedCountry, setSelectedCountry] = useState();
    const [amount, setAmount] = useState(1000);
    const [bestValue, setBestValue] = useState(null);
    const [exchangeRates, setExchangeRates] = useState(false);
  
    useEffect(() => {
      const fetchCountries = async () => {
       
        await fetch("/countries.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            setCountries(data);
            setSelectedCountry(data[0]);
          });
      };
      const fetchRates = async () => {
        await fetch("/rates.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            data.sort(function (a, b) {
              return a.rate - b.rate;
            });
            var min = data[0];
  
            console.log(min);
  
            setBestValue(min);
  
            setRates(data);
        
          });
      };
  
      const fetchExchangeRates = async () => {
        await fetch("https://api.exchangerate.host/latest?base=AED")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setExchangeRates(data.rates);
          });
      };
      fetchCountries();
      fetchRates();
      fetchExchangeRates();
    }, []);
  
    return (
      <div className="App">
        <div className="title p-3">
          <h2>Transfer Rates</h2>
        </div>
  
        <div className="countries d-flex px-2" style={{ overflowX: "scroll" }}>
          {countries.map((countrie) => (
            <div
              className="flag mx-2"
              style={{
                border:
                  countrie?.id === selectedCountry?.id
                    ? "3px solid rgb(17 165 55 / 90%)"
                    : "3px solid #D9D9D9",
                borderRadius: "50%",
              }}
              onClick={() => setSelectedCountry(countrie)}
              key={countrie.id}
            >
              <img src={countrie.image} width={40} alt="" />
            </div>
          ))}
        </div>
        {selectedCountry ? (
          <div className="amount d-flex pt-4 ml-5 justify-content-center">
            <CurrencyInput
              id="amount-input"
              name="input-name"
              placeholder="Amount to send"
              defaultValue={1000}
              decimalsLimit={2}
              intlConfig={{ locale: "en-US", currency: "AED" }}
              onValueChange={(value, name) => setAmount(value)}
            />
          </div>
        ) : null}
  
        <div className="rates py-4 px-3" style={{ overflowY: "scroll" }}>
          {rates.map((rate) => (
            <>
              <div className="rate-container d-flex py-2" key={rate.id}>
                <div className="rate-image ">
                  <img src={rate.image} width={50} alt="" />
                </div>
                <div className="rate-data px-2 ">
                  <p>
                    {rate.title}{" "}
                    {bestValue.id === rate.id && selectedCountry && amount ? (
                      <span className="bestValue">Best Value</span>
                    ) : null}
                  </p>
                  <span className="rate">
                    {selectedCountry && amount
                      ? (
                          exchangeRates[selectedCountry.code] * amount -
                          rate.rate
                        ).toLocaleString("en-US", {
                          style: "currency",
                          currency: selectedCountry?.code,
                        })
                      : null}{" "}
                  </span>
                </div>
              </div>
              <hr />
            </>
          ))}
          <div className="declamer ">
            <p>
              To know the accurate exchange rates & details, please contact the
              corresponding exchange houses!
            </p>
          </div>
        </div>
      </div>
    );
  }

export default index