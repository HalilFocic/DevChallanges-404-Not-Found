import "./App.css";
import Input from "./component/Input";
function App() {
  return (
    <div className="App">
      <Input value="Test value" helperText="This is helper text"></Input>
      <Input error helperText="Help please" />
      <Input disabled />
    </div>
  );
}

export default App;
