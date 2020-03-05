import React, {Component} from 'react';

import Navbar from "./Components/Layout/Navbar";
import './App.css'
import Footer from "./Components/Layout/Footer";
import Landing from "./Components/Layout/Landing";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <div>
                    <Landing/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
