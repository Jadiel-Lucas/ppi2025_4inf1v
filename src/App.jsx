import "./styles/theme.css";
import "./styles/global.css";
{/*import { MyGrid } from "./components/MyGrid";*/}
import { MyHeader } from "./components/MyHeader";
import { MyMain } from "./components/MyMain";
import { MyFooter } from "./components/MyFooter";
// import { Atom } from "lucide-react";
//import { MyTextList } from "./components/MyTextList";


export default function App() {
  return (
    <>
        <MyHeader />
        <MyMain />
        <MyFooter />
    </>
  );
}
