import React from 'react';
import ReactDOM from 'react-dom';

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
        return <div id="firstPage" style={firstPageDivButtonStyle1}>
            <div><p>Jak się czujesz?</p></div>
            <div style={firstPageDivButtonStyle2}>
                <button onClick={this.handleButtonGoodProps}>Good</button>
                <button onClick={this.handleButtonNeutralProps}>Neutral</button>
                <button onClick={this.handleButtonBadProps}>Bad</button>
            </div>
        </div>
    }
}

class SecondPageGood extends React.Component {
    render() {
        return <div>SECOND PAGE GOOD</div>
    }
}

class SecondPageNeutral extends React.Component {
    render() {
        return <div>SECOND PAGE NEUTRAL</div>
    }
}

class SecondPageBad extends React.Component {
    render() {
        return <div>SECOND PAGE BAD</div>
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

    render() {
        if (this.state.page == 1) {
            return <Main ClickMethodGood={this.handleButtonGood} ClickMethodNeutral={this.handleButtonNeutral} ClickMethodBad={this.handleButtonBad}/>
        } else if (this.state.page == "2good") {
            return <SecondPageGood/>
        } else if (this.state.page == "2neutral") {
            return <SecondPageNeutral/>
        } else if (this.state.page == "2bad") {
            return <SecondPageBad/> }
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