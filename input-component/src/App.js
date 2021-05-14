import "./App.css";
import Input from "./component/Input";
function App() {
  return (
    <div className="App">
      <Input
        label="Labelo"
        helperText="This is helper text"
        endIcon="settings"
        startIcon="settings"
        error
      ></Input>
    </div>
  );
}

export default App;
