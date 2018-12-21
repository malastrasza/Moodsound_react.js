import React from 'react';
import ReactDOM from 'react-dom';
import SecondPageGood from './2Page';
import {SecondPageNeutral} from './2Page';
import {SecondPageBad} from './2Page';
import ThirdPage from "./3Page";
import FourthPage from "./4Page";
import FifthPage from "./5Page";
import FinalPage from "./FinalPage";
import "./../scss/main.scss";

const firstPageDivButtonStyle1 = {
    // backgroundColor: "#DAAE90",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    padding: "10px",
    margin: "10px"
};

const firstPageDivButtonStyle2 = {
    display: "flex",
    padding: "10px",
    margin: "10px"
};

class Main extends React.Component {

    handleButtonGoodProps = () => {
        this.props.ClickMethodGood();
    };
    handleButtonNeutralProps = () => {
        this.props.ClickMethodNeutral();
    };
    handleButtonBadProps = () => {
        this.props.ClickMethodBad();
    };

    render() {

        return <div style={firstPageDivButtonStyle1}>
            <div className='questions'><p>jak się teraz czujesz?</p></div>
            <div style={firstPageDivButtonStyle2}>
                <button className="btn draw-border draw1" onClick={this.handleButtonGoodProps}>Wyśmienicie</button>
                <button className="btn draw-border draw1" onClick={this.handleButtonGoodProps}>po prostu ok</button>
                <button className="btn draw-border draw1" onClick={this.handleButtonNeutralProps}>neutralnie</button>
                <button className="btn draw-border draw1" onClick={this.handleButtonNeutralProps}>nie wiem</button>
                <button className="btn draw-border draw1" onClick={this.handleButtonBadProps}>źle</button>
                <button className="btn draw-border draw1" onClick={this.handleButtonBadProps}>skrajnie do dupy</button>
            </div>
        </div>
    }
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "1",
            draw: []
        }
    }

    handleButtonGood = () => {
        this.setState({
            page: "2good",
            draw: [...this.state.draw, 10]
        });
    };
    handleButtonNeutral = () => {
        this.setState({
            page: "2neutral",
            draw: [...this.state.draw, 11]
        })
    };
    handleButtonBad = () => {
        this.setState({
            page: "2bad",
            draw: [...this.state.draw, 12]
        })
    };
    handleButtonSecondPage = (e) => {
        this.setState({
            page: "3",
            draw: [...this.state.draw, e]
        })
    };
    handleButtonThirdPage = (e) => {
        this.setState({
            page: "4",
            draw: [...this.state.draw, e]
        })
    };
    handleButtonFourthPage = () => {
        this.setState({
            page: "5",
        })
    };
    handleButtonFifthPage = (e) => {
        this.setState({
            page: "6",
            draw: [...this.state.draw, e]
        })
    };

    render() {
        if (this.state.page == 1) {
            return <Main ClickMethodGood={this.handleButtonGood} ClickMethodNeutral={this.handleButtonNeutral}
                         ClickMethodBad={this.handleButtonBad}/>
        } else if (this.state.page == "2good") {
            return <SecondPageGood ClickMethodSecondPage={this.handleButtonSecondPage}/>
        } else if (this.state.page == "2neutral") {
            return <SecondPageNeutral ClickMethodSecondPage={this.handleButtonSecondPage}/>
        } else if (this.state.page == "2bad") {
            return <SecondPageBad ClickMethodSecondPage={this.handleButtonSecondPage}/>
        } else if (this.state.page == 3) {
            return <ThirdPage ClickMethodThirdPage={this.handleButtonThirdPage}/>
        } else if (this.state.page == 4) {
            return <FourthPage ClickMethodFourthPage={this.handleButtonFourthPage}/>
        } else if (this.state.page == 5) {
            return <FifthPage ClickMethodFifthPage={this.handleButtonFifthPage}/>
        } else if (this.state.page == 6) {
            return <FinalPage  drawIndex={this.state.draw}/>
        }
    }

}

function App() {
    return <Page/>
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});