import React from "react";
import "./../scss/main.scss";

const fourthDiv = {
    backgroundColor: "#DAAE90",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
};

class FourthPage extends React.Component {

    handleButtonFourth = () => {
        this.props.ClickMethodFourthPage();
    };

    render() {
        return <div style={fourthDiv}>
            <div><p>Czy kochasz metal?</p></div>
            <div>
            <button onClick={this.handleButtonFourth}>Tak</button>
            <button onClick={this.handleButtonFourth}>Bardzo</button>
            <button onClick={this.handleButtonFourth}>Tak, bardzo</button>
            </div>
                <input type="text"/>
        </div>
    }
}

export default FourthPage;