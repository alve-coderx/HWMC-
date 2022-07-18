import { db } from "./firebase-config";
import {
  getFirestore,
  onSnapshot,
  query,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";

 

  export const fnHashRate = async () => {
    const docRef = doc(db, "hashrate", 'hashrate');
    const sn = await getDoc(docRef);
    // console.log('Hash Rate: '   + sn.data().hashrate);
    return sn.data().hashrate;
  };

  export const fnBTCMined = async () => {
    const docRef = doc(db, "totalEarnings", 'totalEarnings');
    const sn = await getDoc(docRef);
    // console.log('BTC Mined: '   + sn.data().totalEarnings);
    return sn.data().totalEarnings;
  };

  export const fnInvestmentValue = async () => {
    const docRef = doc(db, "dashboard", 'investmentValue');
    const sn = await getDoc(docRef);
    // console.log('Investment Value: '   + sn.data().value);
    return sn.data().value;
  };

  export const fnInitInvestment = async () => {
    const docRef = doc(db, "dashboard", 'initialInvestment');
    const sn = await getDoc(docRef);
    // console.log('Initial Investment: '   + sn.data().value);
    return sn.data().value;
  };

  export const fnTokens = async () => {
    const docRef = doc(db, "totalNFTs", 'totalNFTs');
    const sn = await getDoc(docRef);
    // console.log('Total NFTs: '   + sn.data().totalNFTs);
    return sn.data().totalNFTs;
  };

  export const fnDailyBTC = async () => {
    const colRef = collection(db,"daily_btc");
    const btcDocs = await getDocs(colRef); 
    const dailyBTCRaw = [];

    btcDocs.docs.forEach((dc) => {
      dailyBTCRaw.push({
        "name":dc.data().timestamp.toDate(),
        "uv":3490,
        "amt":2100,
        "BTC":dc.data().btcMined
      });
    });

    dailyBTCRaw.sort((a,b) =>{return a.name - b.name});
    
    const dailyBTCList = [];

    dailyBTCRaw.forEach((dc)=>{
      dailyBTCList.push({
        "name": dc.name.getDate()+"/"+(dc.name.getMonth()+1),
        "BTC":dc.BTC,
        "uv":dc.uv,
        "amt":dc.amt
      });  
    });
    return dailyBTCList.length < 30 ?
    dailyBTCList :
    dailyBTCList.slice(dailyBTCList.length -30,dailyBTCList.length);
  };


  export const fnDailyHashs = async () => {
    const colRef = collection(db,"daily_hashrate");
    const hashsDocs = await getDocs(colRef); 
    const dailyHashsRaw = [];

    hashsDocs.docs.forEach((dc) => {
      dailyHashsRaw.push({
        "timestamp":dc.data().timestamp.toDate(),
        "pv":dc.data().hashrate
      });
    });

    dailyHashsRaw.sort((a,b) =>{return a.timestamp - b.timestamp});
    
    return dailyHashsRaw;
  };