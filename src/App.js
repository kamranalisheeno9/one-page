import Page from "./pages/one-page";
import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Culture Of Women"
  }, [])
  return (
    <div className="App">
    <Page />
    </div>
  );
}

export default App;
