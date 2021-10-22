import './App.css';
import NavBar from './components/NavBar/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
      <NavBar title="TextUtils" />
      <div className="container">
        <TextForm formName="Enter text below to analyze"/>
      </div>
    </div>
  );
}

export default App;
