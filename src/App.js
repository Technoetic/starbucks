import logo from './logo.svg';
import './App.css';
import Contents from "./component/Contents";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
    return (
        <div style={{textAlign:'center'}}>
            <Header/>
            <Contents/>
            <Footer/>
        </div>
    );
}

export default App;
