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

    handleButtonGood = () => {
        console.log("Good")
    };
    handleButtonNeutral = () => {
        console.log("Neutral")
    };
    handleButtonBad = () => {
        console.log("Bad")
    };

    render() {
        return <div style={firstPageDivButtonStyle1}>
            <div><p>Jak się czujesz?</p></div>
            <div style={firstPageDivButtonStyle2}>
                <button onClick={this.handleButtonGood}>Good</button>
                <button onClick={this.handleButtonNeutral}>Neutral</button>
                <button onClick={this.handleButtonBad}>Bad</button>
            </div>
        </div>
    }
}

function App() {
    return <Main/>
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});