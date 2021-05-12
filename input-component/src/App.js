import "./App.css";
import Input from "./component/Input";
function App() {
  return (
    <div className="App">
      <Input></Input>
      <Input error />
      <Input disabled />
    </div>
  );
}

export default App;
