import React from "react";
import "./../scss/main.scss";

const finalDiv = {
    backgroundColor: "#DAAE90",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
};

class FifthPage extends React.Component {

    handleButtonFifth1 = () => {
        this.props.ClickMethodFifthPage(40);
    };
    handleButtonFifth2 = () => {
        this.props.ClickMethodFifthPage(41);
    };

    render() {
        return <div className='secondPageBackground6' style={finalDiv}>
            <div className='secondPageQuestion'><p className="questions pulse5">
                imagine a situation: you hear a scream, then look out of a window and you spot some naught boy fleeing with a beer 4-pack. the beer seems to belong to a student, lying on a pavement few meters farther and crying for help. what would you do?

            </p></div>
            <div className="page5center">
                <button className="btn draw-border draw6" onClick={this.handleButtonFifth1}>i don't actually even look out of the window, since im coding
                </button>
                <button className="btn draw-border draw6" onClick={this.handleButtonFifth1}>i'd call the cops whee-yoo whee-yoo
                </button>
                <button className="btn draw-border draw6" onClick={this.handleButtonFifth2}>jump out of the window, annihilate badboi bully, retrieve the beer, buy 4 more and share them with the student
                </button>
            </div>
        </div>
    }
}

export default FifthPage;
