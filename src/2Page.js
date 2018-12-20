import React from "react";


const secondPageGood = {
    backgroundColor: "#297A7A",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "white"
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
    backgroundColor: "#DAAE90",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
};

class SecondPageGood extends React.Component {

    handleButtonSecond1 = () => {
        this.props.ClickMethodSecondPage(200);
    };
    handleButtonSecond2 = () => {
        this.props.ClickMethodSecondPage(201);
    };

    render() {
        return <div style={secondPageGood}>
            <div><p>A nie masz może ochoty, tak wiesz, w głębi serca, sklepać kogoś po pysku?</p></div>
            <div>
                <button onClick={this.handleButtonSecond1}>Jasne!</button>
                <button onClick={this.handleButtonSecond2}>Broń mnie Panie Boże przed takimi myślami!</button>
                <button onClick={this.handleButtonSecond2}>Eeee... nope.</button>

            </div>
        </div>
    }
}

class SecondPageNeutral extends React.Component {

    handleButtonSecond1 = () => {
        this.props.ClickMethodSecondPage(200);
    };
    handleButtonSecond2 = () => {
        this.props.ClickMethodSecondPage(201);
    };


    render() {
        return <div style={secondPageNeutral}>
            <div><p>A chcesz lepe na ryj?</p></div>
            <div>
                <button onClick={this.handleButtonSecond1}>Dawaj!</button>
                <button onClick={this.handleButtonSecond1}>Nah, obojętne mi to...</button>
                <button onClick={this.handleButtonSecond2}>Lol, nie</button>
            </div>
        </div>
    }
}

class SecondPageBad extends React.Component {

    handleButtonSecond1 = () => {
        this.props.ClickMethodSecondPage(200);
    };
    handleButtonSecond2 = () => {
        this.props.ClickMethodSecondPage(201);
    };

    render() {
        return <div style={secondPageBad}>
            <div><p>Nie rozkwasiłbyś paru parszywych ryjów?</p></div>
            <div>
                <button onClick={this.handleButtonSecond1}>SLAYER KU*WAAAAA</button>
                <button onClick={this.handleButtonSecond2}>Nah</button>
            </div>
        </div>
    }
}

export default SecondPageGood;
export {SecondPageNeutral};
export {SecondPageBad};
