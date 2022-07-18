import {Lucide, Tippy, Dropdown, DropdownToggle, DropdownMenu, DropdownContent, DropdownItem, PreviewComponent, Preview, Source, Highlight, } from "@/base-components";
import ReportLineChart from "@/components/report-line-chart/Main";
import VerticalBarChart from "@/components/vertical-bar-chart/Main";
import { faker as $f } from "@/utils";
import logoUrl from "@/assets/images/logo-icon.png";
import { useState, useEffect } from "react";
import { db } from "@/firebase-config";
import {  getFirestore,  onSnapshot,  query,  collection,  getDocs,  addDoc,  updateDoc,  deleteDoc,  doc,  getDoc,} from "firebase/firestore";
import { fnHashRate, fnBTCMined, fnInvestmentValue, fnInitInvestment, fnTokens, fnDailyBTC, fnDailyHashs } from "@/firestoreData";
import {AiOutlineArrowRight} from 'react-icons/ai'
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

import Analytics from "@/components/Analytics";
import { IoMdArrowDropup } from "react-icons/io"
import CircleProgress from "@/components/CircleProgress";
import TinyLineChart from "@/components/LineChart";
import CustomBarChart from "@/components/CustomBarChart";


function Main() {

  const [hashRate, setHashRate] = useState("");
  const [BTCMined, setBTCMined] = useState("");
  const [InvestmentValue, setInvestmentValue] = useState("");
  const [InitInvestment, setInitInvestment] = useState("");
  const [tokens, setTokens] = useState("");
  const [dailyBTC, setdailyBTC] = useState([]);
  const [DailyHashs, setDailyHashs] = useState([]);



  useEffect(() => {
    const getHashRate = async () => {
      const hashRateValue = await fnHashRate();
      setHashRate(hashRateValue);
  };

    const getBTCMined = async () => {
      const btcValue = await fnBTCMined();
      setBTCMined(btcValue);};
      
    const getTokens = async () => {
        const tokens = await fnTokens();
        setTokens(tokens);};

    const getInvestmentValue = async () => {
      const value = await fnInvestmentValue();
      setInvestmentValue(value);};

      const getInitInvestment = async () => {
        const value = await fnInitInvestment();
        setInitInvestment(value);};

    const getdailyBTC = async () =>{
      const values = await fnDailyBTC();
      setdailyBTC(values); 
    } 

    const getDailyHashs = async () =>{
      const values = await fnDailyHashs();
      setDailyHashs(values); 
    } 

    getHashRate();
    getDailyHashs();
    getBTCMined();
    getInvestmentValue();
    getInitInvestment();
    getTokens();
    getdailyBTC();
  }, []);

  return (
    <>
    <div className="grid lg:grid-cols-3 md:grid-cols-3  gap-4 font-neuePlak" style={{minWidth: "380px"}}>
    <div className="lg:col-span-2 md:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* ----------------- First Card Start ----------------- */}
          <div className="intro-y w-full h-full"> 
            <div className="report-box zoom-in w-full h-full">  
              <div className="min-w-fit h-full box rounded-lg py-4 px-6 text-white"> <span className=" text-dark dark:text-white font-neuePlak">Total earning</span>
                <div className="flex space-x-1">
                  <h2 className="text-xl font-bold text-dark dark:text-white py-1 m-0">{ '$'+InvestmentValue }</h2>
                  <div className="text-slate-500 flex items-end py-1">
                    <IoMdArrowDropup size="20px" />
                    <span>10%</span>
                  </div>
                </div>
                <span className="text-xs text-gray-400 ">Compared to coming soon</span>
              </div>
            </div>
          </div>
          {/* ----------------- First Card End ----------------- */}
          {/* ----------------- Second Card Start ----------------- */}
          <div className="intro-y w-full h-full">
            <div className="report-box zoom-in w-full h-full">
              <div className="min-w-fit h-full box rounded-lg py-4 px-6 text-white">
                <span className=" text-dark dark:text-white font-neuePlak">Total BTC Mined</span>
                <div className="flex space-x-1">
                  <h2 className="text-xl font-bold text-dark dark:text-white py-1 m-0">{ BTCMined } </h2>
                  <div className="text-slate-500 flex items-end py-1">
                    <IoMdArrowDropup size="20px" />
                    <span>10%</span>
                  </div>
                </div>
                <span className="text-xs text-gray-400">Compared to coming soon</span>
              </div>
            </div>
          </div>
          {/* ----------------- Second Card End ----------------- */}
          {/* ----------------- Third Card Start ----------------- */}
          <div className="intro-y w-full h-full"> 
            <div className="report-box zoom-in w-full h-full">
              <div className="min-w-fit h-full box pt-5 pb-2 px-5 text-white">
                <div className="flex justify-between">
                  <p className="m-0 font-thin font-neuePlak text-dark dark:text-white">Live Hash Rate</p>
                </div>
                <div className="flex items-end ">
                  <h4 className="-mb-1 -mr-3 text-dark dark:text-white text-xl py-1 font-bold">{ hashRate }</h4>
                  <div className="w-8/12 pl-4 pr-2 h-10">
                  <TinyLineChart data={DailyHashs} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------- Third Card End ----------------- */}
          {/* ----------------- Fourth Card Start ----------------- */}
          <div className="intro-y w-full h-full"> {/* Card Stat One */}
            <div className="report-box zoom-in w-full h-full">
              <div className="min-w-fit h-full box rounded-lg py-4 px-6 text-dark dark:text-white flex items-center space-x-4">
                <div>
                  <CircleProgress value={(tokens/9999)*100} />
                </div>
                <div className="flex flex-col text-xl font-thin">
                  <span>{tokens+'/9999'}</span>
                  <span>NFTs Sold</span>
                </div>
              </div>
            </div>  
          </div>
          {/* ----------------- Fourth Card End ----------------- */}
          {/* ----------------- Quick Info Cards End ----------------- */}
        </div>

          {/* < Tracker /> */}


       {/* ----------------- Chart 2 Start ----------------- */}
       <div className="lg:block md:block  hidden col-span-12 lg:col-span-6 mt-8">
        <div className="intro-y box py-3 mt-12 sm:mt-5">  
          <div className="">
            <CustomBarChart value={dailyBTC} />
          </div>
        </div>     
      </div>  
      {/* ----------------- Chart 2 End ----------------- */}
      {/* ----------------- Chart 1 start ----------------- */}
      <div className="lg:block md:block hidden col-span-12 lg:col-span-6 mt-8">
        <div className="intro-y box py-3 mt-12 sm:mt-5">  
          <div className="flex items-center justify-center">
            <Analytics />
          </div>
        </div>     
      </div>  
      {/* ----------------- Chart 1 End ----------------- */}
    </div>    

  {/* BEGIN: Recent Activities */}


    {/* ----------------- Fourth Card Start ----------------- */}
   
      
          {/* ----------------- Fourth Card End ----------------- */}

          <div className="lg:col-span-1 md:col-span-1">
              <div className="relative before:block before:absolute before:w-px before:h-[85%] before:bg-slate-200 before:dark:bg-darkmode-400 before:ml-5 before:mt-5">
                <div className="intro-x relative flex items-center mb-3">
                  <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                    <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                      <img
                        alt=""
                        src={logoUrl}
                      />
                    </div>
                  </div>
                  <div className="flex items-center box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div>
                      <div className="flex items-center">
                        <div className="font-medium text-dark dark:text-white">
                          Phase 1 Holders Mint
                        </div>
                        
                      </div>
                      <div className="text-slate-500">
                        <div className="mt-1">
                          Click Me
                          
                        </div>
                      
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 ml-auto">
                        <AiOutlineArrowRight/>
                    </div>
                  </div>
                </div>
                <div className="intro-x relative flex items-center mb-3">
                  <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                    <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={logoUrl}
                      />
                    </div>
                  </div>
                  <div className="flex items-center box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div>
                      <div className="flex items-center">
                        <div className="font-medium text-dark dark:text-white">
                          Public Mint
                        </div>
                        
                      </div>
                      <div className="text-slate-500">
                        <div className="mt-1">
                          Mint on the current price
                          
                        </div>
                      
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 ml-auto">
                        <AiOutlineArrowRight/>
                    </div>
                  </div>
                </div>
                <div className="intro-x relative flex items-center mb-3">
                  <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                    <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={logoUrl}
                      />
                    </div>
                  </div>
                  <div className="flex items-center box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div>
                      <div className="flex items-center">
                        <div className="font-medium text-dark dark:text-white">
                          Mega Whale Mint
                        </div>
                        
                      </div>
                      <div className="text-slate-500">
                        <div className="mt-1">
                          Mint 10 plus HWMC NFT at once
                        </div>
                      
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 ml-auto">
                        <AiOutlineArrowRight/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Recent Activities */}
    
      </div>
    </>
  );
}

export default Main;
