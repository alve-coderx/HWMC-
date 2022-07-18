import ScrollToTop from "@/base-components/scroll-to-top/Main";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { useState, useEffect } from "react";
import { fnHashRate, fnBTCMined, fnInvestmentValue, fnInitInvestment, fnTokens } from "./firestoreData";
import Page1 from "./views/page-1/Main";
import Page2 from "./views/page-2/Main";
import Page3 from "./views/page-3/Main";
import SimpleMenu from "./layouts/simple-menu/Main";
import { useMoralis } from "react-moralis";

function App() {
  const [hashRate, setHashRate] = useState("");
  const [BTCMined, setBTCMined] = useState("");
  const [InvestmentValue, setInvestmentValue] = useState("");
  const [InitInvestment, setInitInvestment] = useState("");
  const { isAuthenticated } = useMoralis();
 

  useEffect(() => {
    const getHashRate = async () => {
      const hashRateValue = await fnHashRate();
      setHashRate(hashRateValue);
   };

    const getBTCMined = async () => {
      const btcValue = await fnBTCMined();
      setBTCMined(btcValue);};
      
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
  }, []);
 

  return (
    <RecoilRoot>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<SimpleMenu/>}>
            <Route path='/' element={<Page1/>}/>
            <Route path='/swap' element={isAuthenticated ? <Page2/> : <Page1/>}/>
            <Route path='/smart-contract' element={isAuthenticated ? <Page3/> : <Page1/>}/>
          </Route>
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
