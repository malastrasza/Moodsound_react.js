import React from "react";


const secondPageGood = {
    backgroundColor: "blue",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
};

const secondPageBad = {
    backgroundColor: "red",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
};

const secondPageNeutral = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
};


class SecondPageGood extends React.Component {

    handleButtonSecond = () => {
        this.props.ClickMethodSecondPage();
    };

    render() {
        return <div style={secondPageGood}>
        <div><p>Nie masz ochoty komuś wywalić gonga w nos?</p></div>
            <div>
                <button onClick={this.handleButtonSecond}>Jasne</button>
                <button onClick={this.handleButtonSecond}>Broń boże!</button>
            </div>
        </div>
    }
}

class SecondPageNeutral extends React.Component {

    handleButtonSecond = () => {
        this.props.ClickMethodSecondPage();
    };

    render() {
        return <div style={secondPageNeutral}>
            <div><p>Chcesz w nos?</p></div>
            <div>
                <button onClick={this.handleButtonSecond}>Dawaj</button>
                <button onClick={this.handleButtonSecond}>Obojętne mi to</button>
                <button onClick={this.handleButtonSecond}>Nie</button>
            </div>
        </div>
    }
}

class SecondPageBad extends React.Component {

    handleButtonSecond = () => {
        this.props.ClickMethodSecondPage();
    };

    render() {
        return <div style={secondPageBad}>
            <div><p>Nie rozkwasiłbyś paru łbów?</p></div>
            <div>
                <button onClick={this.handleButtonSecond}>SLAYER KURWAAAAA</button>
                <button onClick={this.handleButtonSecond}>Nah</button>
            </div>
        </div>
    }
}

export default SecondPageGood;
export {SecondPageNeutral};
export {SecondPageBad};
