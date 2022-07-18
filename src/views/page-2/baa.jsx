import {Lucide, TomSelect, LoadingIcon } from "@/base-components";
import {useState} from 'react'
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import AsyncSelect from 'react-select/async';
import { Select } from "antd";
import { isNull } from "lodash";

function Main() {
  const { Moralis } = useMoralis();


  const [inputValue1, setValue1] = useState('');
  const [selectedValue1, setSelectedValue1] = useState(null);
  const [inputValue2, setValue2] = useState('');
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [amount, setAmount] = useState('0');
  const [chain, setChain] = useState('');
  const [loading, setLoading] = useState(false);
  const [swapQuote, setSwapQuote] = useState({});
  const [quoteGet, setquoteGet] = useState(false);



  useEffect(() => {


    (async function () {
      try {
        console.log("From ",selectedValue1)
        console.log("To ",selectedValue2)
        console.log(chain)
        console.log(amount)
        console.log("Current", Moralis.User.current().get("ethAddress"))
        if(selectedValue1,selectedValue2){
          getQuote('eth',selectedValue1.value,selectedValue2.value,String(amount))
        }





      } catch (e) {
        console.error(e);
      }
    })();
  }, [selectedValue1,selectedValue2,chain,amount]);

  async function getSupportedTokens(_chain) {
    const tokens = await Moralis.Plugins.oneInch.getSupportedTokens({
      chain: _chain, // The blockchain you want to use (eth/bsc/polygon)
    });

    return tokens.tokens;
  }

  // handle input change event
  const handleInputChange1 = value => {
    setValue1(value);
  };
 // handle input change event
 const handleInputChange2 = value => {
  setValue2(value);
};
  // handle selection
  const handleChange1 = value => {
    setSelectedValue1(value);
  }
  // handle selection
  const handleChange2 = value => {
    setSelectedValue2(value);
  }
  const handleChange3 = value => {
    setChain(value);
  }
  const handleAmount = value => {
    setAmount(value.value);
  }

  const data = [
    {
      value: 'eth',
      label: 'Ethereum',
      icon: <img width={30} height={30} src="https://tokens.1inch.io/0x0a50c93c762fdd6e56d86215c24aaad43ab629aa.png" />
    },
    {
      value: 'bsc',
      label: 'Binance Smart Chain',
      icon: <img width={30} height={30} src="https://tokens.1inch.io/0x0a50c93c762fdd6e56d86215c24aaad43ab629aa.png" />
    },
    {
      value: 'matic',
      label: 'Polygon',
      icon: <img width={30} height={30} src="https://tokens.1inch.io/0x0a50c93c762fdd6e56d86215c24aaad43ab629aa.png" />
    },
    {
      value: 4,
      label: 'Right Arrow',
      icon: <img width={30} height={30} src="https://tokens.1inch.io/0x0a50c93c762fdd6e56d86215c24aaad43ab629aa.png" />
    }
  ];



  async function getQuote(_chain, _fromAddress, _toAddress, _amount) {
   setLoading(true);
    try {
      const quote = await Moralis.Plugins.oneInch.quote({
          chain: _chain, // The blockchain you want to use (eth/bsc/polygon)
          fromTokenAddress: _fromAddress, // The token you want to swap
          toTokenAddress: _toAddress, // The token you want to receive
          amount: _amount,
        });
        console.log(quote);
        setLoading(false)
        setSwapQuote(quote)
        setquoteGet(true)
        return quote;
    } catch (error) {
      console.log(error);
      
      setLoading(false)
    }
   
  }


  async function swap(_chain, _fromToken, _toToken, _amount, _fromAddress, _slippage) {
    const receipt = await Moralis.Plugins.oneInch.swap({
      chain: _chain, // The blockchain you want to use (eth/bsc/polygon)
      fromTokenAddress: _fromToken, // The token you want to swap
      toTokenAddress: _toToken, // The token you want to receive
      amount: _amount,
      fromAddress: _fromAddress, // Your wallet address
      slippage: _slippage, // The slippage you want to use
    });
    console.log(receipt);
  }

  const promiseOptions = async () => {
    console.log("getting options");
    try {
       await Moralis.initPlugins();
      const res = await getSupportedTokens('eth').then(res => {

        return Object.keys(res).map((item, i) => 
          {
             return {
               value: res[item].address,
               label: res[item].symbol,
               icon: <img width={40} height={40} src={res[item].logoURI} />
             }
           }
         )
   
       
       });
       
       console.log("Options", res)
       if (res === 'No result found.') {
           return [];
       }
   
       return res;
    } catch (error) {
      console.error(error);
    }
   
    return [];
};




  
  return (
    <>
   

 
    <div className="intro-y box flex flex-col items-center justify-center py-24 my-4">
    <h1 className="text-lg text-white">Chain:</h1>
    <Select
          defaultActiveFirstOption={ {
            value: 'eth',
            label: 'Ethereum',
            icon: <img width={40} height={40} src="https://tokens.1inch.io/0x0a50c93c762fdd6e56d86215c24aaad43ab629aa.png" />
          }}
          showSearch={false}
          getOptionLabel={option => option.label}
          getOptionValue={option => option.value}
          defaultOptions={data}
        placeholder="Ethereum"
        options={data}
        onChange={handleChange3}

    />

   
   
  
                  
   
    <div className="mt-6 flex flex-auto	 flex-col grow-[2]  items-center justify-center bg-slate-900 px-12 py-24 rounded-3xl gap-4">


    <div className="flex rounded p-3 border-solid border-slate-900 w-full bg-white">
       <AsyncSelect
        cacheOptions
        defaultOptions
        isSearchable={false}
        showSearch={false}
        placeholder="Select Token"
        value={selectedValue1}
        getOptionLabel={e => (
          <div style={{ display: 'flex', alignItems: 'center' }} className="text-black">
            {e.icon}
            <span style={{ marginLeft: 5 }}>{e.label}</span>
          </div>
        )} 
        getOptionValue={e => e.address}
        loadOptions={promiseOptions}
        onInputChange={handleInputChange1}
        onChange={handleChange1}
        className="w-full"
        closeMenuOnScroll
      />

      

  <input className="w-40 text-black rounded-md text-center text-lg font-bold" type="text" placeholder="0.00" onChange={(e) => {
    setAmount(e.target.value)
    getQuote('eth',selectedValue1.value,selectedValue2.value,e.target.value)
  }
  } />

<button className="text-black rounded-xl btn-elevated-warning hover:bg-yellow-500 px-4 font-bold">MAX</button>
    </div>



  
  
        <div className="flex justify-center my-4">
           <Lucide
                        icon="Repeat"
                        className=" flex justify-center "
                      />

        </div>
          

        <div className="flex rounded p-3 w-full bg-white">
        
        <AsyncSelect
             cacheOptions
             defaultOptions
             showSearch={false}
             isSearchable={false}
             placeholder="Select Token"
             value={selectedValue2}
             getOptionLabel={e => (
               <div style={{ display: 'flex', alignItems: 'center' }} className="text-black">
                 {e.icon}
                 <span style={{ marginLeft: 5 }}>{e.label}</span>
               </div>
             )} 
             getOptionValue={e => e.id}
             loadOptions={promiseOptions}
             onInputChange={handleInputChange2}
             onChange={handleChange2}
             className="w-full"
          />

      

  <input className="w-140 text-black rounded-md text-center text-lg font-bold " type="text" placeholder={loading? 'Loading':''} 
  
  value={quoteGet ? 
   swapQuote.toTokenAmount / (10**swapQuote.toToken.decimals)
    :
    '0.00'
  } disabled  />

        </div>



        



    {/*     
    
          <div className="flex w-full justify-center mt-4">
            <button className="btn btn-elevated-warning w-full font-bold text-xl" onClick={()=>getQuote('eth',selectedValue1.value,selectedValue2.value,amount)}
            >
            {loading?
          <> 

            <LoadingIcon icon="puff" color="red" className="w-8 h-8 mr-2" /> Getting best Quote
          
          </>
          :
          <>
           <Lucide icon="Search" className="w-6 h-6 mr-2" />
          Get Quote</>
          }
            
          </button>

        </div> 
        
        */}



        <div className="flex w-full justify-center mt-4">
          <button className="btn btn-elevated-warning w-full font-bold text-xl" onClick={()=>getQuote('eth',selectedValue1.value,selectedValue2.value,amount)}
          >
            {loading?
          <> <LoadingIcon icon="puff" color="red" className="w-8 h-8 mr-2" /> Swapping</>
          :
          <>
           
          Swap</>
          }
            
          </button>

        </div>

        <div className="flex w-full justify-center mt-5 bg-white">



        </div>

 
    
    </div>
 
</div>



    </>
  );
}

export default Main;
