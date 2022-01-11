import "./App.css";
import Header from "./components/Header";
import PunkList from "./components/PunkList";
import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(2);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x2675eBd14474Fb3AAf118F99582e6a4F4E74b84a&order_direction=asc",
        {
          headers: {
            "Access-Control-Allow-Origin": 'https://cryptopunk-clone-one.vercel.app',
          },
        }
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
