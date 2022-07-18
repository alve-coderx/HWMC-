import React, { useEffect, useState } from "react";


const logoApi = "https://bitpanda-broker-production-assets.s3-eu-west-1.amazonaws.com/static/cryptocoin/";
const priceApi = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,ripple,litecoin,binancecoin,polkadot,dogecoin,avalanche-2,matic-network&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true";



const Tracker = () => {
  const [trackerData, setTrackerData] = useState({});
  console.log("🚀 ~ file: Tracker.jsx ~ line 10 ~ Tracker ~ trackerData", trackerData)


    const nameToSymbol = (fullname) => {
      let symbol;
    switch (fullname) {
      case "bitcoin":
        symbol = "BTC";
        break;
      case "ethereum":
        symbol = "ETH";
        break;
      case "binancecoin":
        symbol = "BNB";
        break;
      case "litecoin":
        symbol = "LTC";
        break;
      case "ripple":
        symbol = "XRP";
        break;
      case "solana":
        symbol = "SOL";
        break;
      case "cardano":
        symbol = "ADA";
        break;
      case "polkadot":
        symbol = "DOT";
        break;
      case "dogecoin":
        symbol = "DOGE";
        break;
      case "avalanche-2":
        symbol = "AVAX";
        break;
      case "matic-network":
        symbol = "MATIC";
        break;
      default:
        symbol = fullname;
        break;
    }
    return symbol;
  };

  const numberWithCommas = (x) => {
    let num = x;
    return num.toLocaleString("en-US");
  };

const getColor = (changePercent) => {
  if (parseInt(changePercent) > 0) {
    return "color: rgb(22, 206, 185)";
  } else {
    return "color: rgb(252, 10, 84)";
  }
};

    useEffect(() => {
      fetch(priceApi)
      .then(res => res.json())
      .then(res => setTrackerData(res))
      .catch((err) => console.log(">>>> err", err ))
    } , []);

    // console.log(Object.keys(trackerData))
  return (
    <div className="w-full h-12">
      <div className="crypto-marquee rounded-lg">
        <div className="marquee-track">
          <div className="marquee-item">
          {
            Object.keys(trackerData && trackerData).map((data) => {
            const {usd, usd_24th_change, usd_24thvol, usd_market_cap} = trackerData[data]
            
            return(
                <div className="marquee-coin">

                  <img src={`${logoApi}${nameToSymbol(data).toLowerCase()}.svg`} className="w-4" alt="" />
                  
                  <span style={{color:"rgb(120, 120, 131)"}}>${nameToSymbol(data)}</span> • <span>${numberWithCommas(trackerData[data].usd.toFixed(2))}</span>
                  
                  <span style={{color: parseInt(trackerData[data].usd_24h_change) > 0 ? "rgb(22, 206, 185)" : "rgb(252, 10, 84)"}}>
                    ${numberWithCommas(trackerData[data].usd_24h_change.toFixed(2))}%
                  </span>
                </div>
            )
          })
        }
        </div>
      </div>
      </div>
    </div>
  );
};

export default Tracker;
