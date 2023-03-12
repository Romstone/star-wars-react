import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state =
            {
                activePage: 'Home'
            }
    }

    changeActivePage = (page) => {
        this.setState({activePage: page});
    }
    render() {
        return (
            <div className="container-fluid">
                <Header changePage={this.changeActivePage}/>
                <Main page={this.state.activePage}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
