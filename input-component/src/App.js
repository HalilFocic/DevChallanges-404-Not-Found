import "./App.css";
import Input from "./component/Input";
function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="single-input">
          <p>Input</p>
          <Input label="Label" helperText="This is helper text"></Input>
        </div>
        <div className="single-input">
          <p>&:hover</p>
          <Input label="Label"></Input>
        </div>
        <div className="single-input">
          <p>&:focus</p>
          <Input label="Label"></Input>
        </div>
        <div className="single-input">
          <p>Error</p>
          <Input label="Label" error></Input>
        </div>
        <div className="single-input">
          <p>&:hover</p>
          <Input label="Label" error></Input>
        </div>
        <div className="single-input">
          <p>&:focus</p>
          <Input label="Label" error></Input>
        </div>
        <div className="single-input">
          <p>Disabled</p>
          <Input label="Label" helperText="This is helper text"></Input>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="secondary-container">
        <div className="single-input">
          <p>Input helperText="Some interesting text"</p>
          <Input label="Label" helperText="This is helper text"></Input>
        </div>
        <div className="single-input">
          <p>Input helperText="Some interesting text" error</p>
          <Input label="Label" error helperText="This is helper text"></Input>
        </div>
        <div className="single-input">
          <p>StartIcon</p>
          <Input label="Label" startIcon="settings"></Input>
        </div>
        <div className="single-input">
          <p>EndIcon</p>
          <Input label="Label" endIcon="settings"></Input>
        </div>
        <div className="single-input">
          <p>Input value="text"</p>
          <Input value="Text" label="Label" endIcon="settings"></Input>
        </div>
        <div></div>
        <div className="single-input">
          <p>Input size sm</p>
          <Input
            size="sm"
            value="Text"
            label="Label"
            endIcon="settings"
          ></Input>
        </div>
        <div className="single-input">
          <p>Input size md</p>
          <Input
            size="md"
            value="Text"
            label="Label"
            endIcon="settings"
          ></Input>
        </div>
      </div>
      <div className="single-input">
        <p>Input size md</p>
        <Input value="Text" label="Label" fullWidth></Input>
      </div>
      <div className="single-input">
        <p>Input size md</p>
        <Input label="Label" multiline rows="10"></Input>
      </div>

      <div className="created-by">
        Created by <strong>Halil Focic - devChallanges.io</strong>
      </div>
    </div>
  );
}

export default App;
