import "./styles/theme.css";
import "./styles/global.css";
{/*import { MyGrid } from "./components/MyGrid";*/}
import { MyMain } from "./components/MyMain";
import { Atom } from "lucide-react";

export default function App() {
  
  return (
    //React Fragment
    <>
      
      <MyHeader />
      <MyMain />
      <MyFooter />
      {/*<Atom size={72} />*/}
      {/*<MyGrid />*/}
    </>
  );
}
