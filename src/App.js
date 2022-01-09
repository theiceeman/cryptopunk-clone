import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
      id={0}
      name={'Pipe Punk'}
      traits={[{value:7}]}
      image="https://ipfs.thirdweb.com/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4"/>
    </div>
  );
}

export default App;
