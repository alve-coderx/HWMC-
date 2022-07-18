import {Lucide, Tippy, Dropdown, DropdownToggle, DropdownMenu, DropdownContent, DropdownItem, PreviewComponent, Preview, Source, Highlight, } from "@/base-components";
import ReportLineChart from "@/components/report-line-chart/Main";
import VerticalBarChart from "@/components/vertical-bar-chart/Main";
import { faker as $f } from "@/utils";
import logoUrl from "@/assets/images/logo-icon.png";
import { useState, useEffect } from "react";
import { db } from "@/firebase-config";
import {  getFirestore,  onSnapshot,  query,  collection,  getDocs,  addDoc,  updateDoc,  deleteDoc,  doc,  getDoc,} from "firebase/firestore";
import { fnHashRate, fnBTCMined, fnInvestmentValue, fnInitInvestment, fnTokens } from "@/firestoreData";

import Analytics from "@/components/Analytics";
import { IoMdArrowDropup } from "react-icons/io"
import CircleProgress from "@/components/CircleProgress";
import LineChart from "@/components/LineChart";
import CustomBarChart from "@/components/CustomBarChart";


function Main() {

  const [hashRate, setHashRate] = useState("");
  const [BTCMined, setBTCMined] = useState("");
  const [InvestmentValue, setInvestmentValue] = useState("");
  const [InitInvestment, setInitInvestment] = useState("");
  const [tokens, setTokens] = useState("");

 

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

    getHashRate();
    getBTCMined();
    getInvestmentValue();
    getInitInvestment();
    getTokens();
  }, []);
 

  return (
    <>


    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-9 2xl:col-span-9">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y"> 
            <div className="report-box zoom-in">  {/* ----------------- First Card ----------------- */}
              <div className="w-72 h-28 bg-primary rounded-lg py-4 px-6 text-white"> <span className="tracking-wider text-gray-300">Total earning</span>
                <div className="flex space-x-1">
                  <h2 className="font-bold text-3xl text-white py-1 m-0">{ '$'+InvestmentValue }</h2>
                  <div className="text-slate-500 flex items-end py-1">
                    <IoMdArrowDropup size="20px" />
                    <span>10%</span>
                  </div>
                </div>
                <span className="text-xs text-gray-400 tracking-wider">Compared to $21,490 last year</span>
              </div>
             {/* OLD Version BOX 1
              <div className="box p-5">
                <div className="flex">
                <div className="text-base text-slate-500 mt-1">
                  Investment Value
                </div>
                <div className="ml-auto">
                <Tippy tag="div" className="report-box__indicator"  content="33% Increase from last Month">
                  33%
                  <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                </Tippy>
                </div>
                </div>
                <div className="text-xl font-thin ">
                  { '$'+InvestmentValue }
                </div>
              </div>
                 */}
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y"> {/* Card Stat One */}
            <div className="report-box zoom-in">
              <div className="box p-5">
                <div className="flex">
                <div className="text-base text-slate-500 mt-1">
                  Total BTC Mined
                </div>
                <div className="ml-auto">
                <Tippy tag="div" className="report-box__indicator"  content="33% Increase from last Month">
                  33%
                  <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                </Tippy>
                </div>
                </div>
                <div className="text-xl font-thin ">
                { BTCMined } 
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y"> {/* Card Stat One */}
            <div className="report-box zoom-in">
              <div className="box p-5">
                <div className="flex">
                <div className="text-base text-slate-500 mt-1">
                  Live Hashrate
                </div>
                <div className="ml-auto">
                <Tippy tag="div" className="report-box__indicator"  content="33% Increase from last Month">
                  33%
                  <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                </Tippy>
                </div>
                </div>
                <div className="text-xl font-thin ">
                  { hashRate }
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y"> {/* Card Stat One */}
            <div className="report-box zoom-in">
              <div className="box p-5">
                <div className="flex">
                <div className="text-base text-slate-500 mt-1">
                  NFTs Sold
                </div>
                <div className="ml-auto">
                <Tippy tag="div" className="report-box__indicator"  content="33% Increase from last Month">
                  33%
                  <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                </Tippy>
                </div>
                </div>
                <div className="text-xl font-thin ">
                  {tokens+'/9999'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 mt-8">
        <div className="intro-y box p-5 mt-12 sm:mt-5">
            <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex">
                  <div>
                    <div className="text-primary dark:text-slate-300 text-lg xl:text-xl font-medium">
                    { '$'+InitInvestment }
                    </div>
                    <div className="mt-0.5 text-slate-500">Community Investment</div>
                  </div>
                  <div className="w-px h-12 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"></div>
                  <div>
                    <div className="text-primary dark:text-slate-300 text-lg xl:text-xl font-medium">
                      {  '$'+InvestmentValue }
                    </div>
                    <div className="mt-0.5 text-slate-500">Current Value</div>
                  </div>
                </div>
                <Dropdown className="md:ml-auto mt-5 md:mt-0">
                  <DropdownToggle className="btn btn-outline-secondary font-normal">
                    Filter by Time
                    <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent className="overflow-y-auto h-32">
                      <DropdownItem>Coming Soon</DropdownItem>
                      <DropdownItem>Coming Soon</DropdownItem>
                      <DropdownItem>Coming Soon</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="report-chart">
                <ReportLineChart height={275} className="mt-6 -mb-6" />
              </div>
            </div>     
          </div>  
          <div className="col-span-12 lg:col-span-6 mt-8">
          
          
          {/* BEGIN: Vertical Bar Chart */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    BTC Mined
                  </h2>
                </div>
                <div className="p-5">
                  <Preview>
                    <VerticalBarChart height={275} />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <VerticalBarChart height={400} />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Vertical Bar Chart */}
          </div>
         
        </div>    

         {/* BEGIN: Recent Activities */}
         <div className="col-span-3 md:col-span-3 xl:col-span-3 2xl:col-span-3">
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
                  <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div className="flex items-center">
                      <div className="font-medium">HWMC Release </div>
                      <div className="text-xs text-slate-500 ml-auto">
                        0:00 PM
                      </div>
                    </div>
                    <div className="text-slate-500 mt-1">
                      HWMC Soft Release v1.0.1
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
                  <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div className="flex items-center">
                      <div className="font-medium">Next Updates</div>
                      <div className="text-xs text-slate-500 ml-auto">
                      
                      </div>
                    </div>
                    <div className="text-slate-500">
                      <div className="mt-1">
                        Overview dashboard API Intergrations for charts.
                       
                      </div>
                      <div className="flex mt-2">
                      
                      Live Crypto Market Widget
                      </div>
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
                  <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div className="flex items-center">
                      <div className="font-medium">Pipe Line</div>
                      <div className="text-xs text-slate-500 ml-auto">
                        
                      </div>
                    </div>
                    <div className="text-slate-500 mt-1">
                      TBA
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
