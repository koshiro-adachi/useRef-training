import { Main } from "./Main";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>useRef</h1>
      <h2>
        useRefを使ってtextareaに<span style={{ color: "red" }}>拡張機能</span>
        を持たせる
      </h2>
      <Main />
    </div>
  );
}
