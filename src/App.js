import './App.css';
import AboutUs from './components/About/AboutUs';
import NavBar from './components/NavBar/NavBar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <div>
      <NavBar title="TextUtils" />
      <div className="container">
        {/* <TextForm formName="Enter text below to analyze"/> */}
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
