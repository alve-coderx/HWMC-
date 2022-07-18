import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/css/app.css";
import { MoralisProvider } from "react-moralis";
import { Buffer } from "buffer";

window.Buffer = window.Buffer || Buffer;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(

    <MoralisProvider serverUrl="https://ax0wtxjtc6wa.usemoralis.com:2053/server" appId="DcvbjmIeRBbtFxPdjlr9Up0pdHK7Ogr4Cs5AGhJe">
     <App />
    </MoralisProvider>

    );
