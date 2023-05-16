import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import FileUploadMultiple from "./components/FileUploadMultiple";

function App() {
  return (
    <>
      <div className="test">
        <List />
        <br />
        <FileUploadMultiple />
      </div>
    </>
  );
}

export default App;
