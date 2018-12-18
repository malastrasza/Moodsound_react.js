import React from 'react';
import ReactDOM from 'react-dom';
import SecondPageGood from './2Page';
import {SecondPageNeutral} from './2Page';
import {SecondPageBad} from './2Page';
import ThirdPage from "./3Page";
import FourthPage from "./4Page";
import FifthPage from "./5Page";
import FinalPage from "./FinalPage"

const firstPageDivButtonStyle1 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
};

const firstPageDivButtonStyle2 = {
    display: "flex",
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
            <div><p>Jak się czujesz?</p></div>
            <div style={firstPageDivButtonStyle2}>
                <button onClick={this.handleButtonGoodProps}>Good</button>
                <button onClick={this.handleButtonNeutralProps}>Neutral</button>
                <button onClick={this.handleButtonBadProps}>Bad</button>
            </div>
        </div>
    }
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "1",
        }
    }

    handleButtonGood = () => {
        console.log("Good");
        this.setState({
            page: "2good"
        })
    };
    handleButtonNeutral = () => {
        this.setState({
            page: "2neutral"
        })
    };
    handleButtonBad = () => {
        this.setState({
            page: "2bad"
        })
    };
    handleButtonSecondPage = () => {
        this.setState({
            page: "3",
        })
    };
    handleButtonThirdPage = () => {
        this.setState({
            page: "4"
        })
    };
    handleButtonFourthPage = () => {
        this.setState({
            page: "5"
        })
    };
    handleButtonFifthPage = () => {
        this.setState({
            page: "6"
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
                    return <FinalPage/>
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