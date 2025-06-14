import "./styles/theme.css";
import "./styles/global.css";
{/*import { MyGrid } from "./components/MyGrid";*/}
import { MyHeader } from "./components/MyHeader";
import { MyMain } from "./components/MyMain";
import { MyFooter } from "./components/MyFooter";
import { MyTextList } from "./components/MyTextList";
import { MyText } from "./components/MyText";


export default function App() {
  return (
    <>
        <MyHeader />
        <MyMain />
        <MyFooter />
    </>
  );
}
