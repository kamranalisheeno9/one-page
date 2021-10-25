import Page from "./pages/one-page";
import './App.css';
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  useEffect(() => {
    document.title = "Culture Of Women"
  }, [])
  return (
    <>

    <Page />
  </>
  );
}

export default App;
