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
                imagine a situation: you hear a scream, you look out of a window and you spot some naught boy fleeing with a beer 4-pack. the bear seems to belong to sweated fat male student, lying on a pavement few meters farther and crying for help. What would you do?

            </p></div>
            <div className="page5center">
                <button className="btn draw-border draw6" onClick={this.handleButtonFifth1}>i don't actually even look out of the window
                </button>
                <button className="btn draw-border draw6" onClick={this.handleButtonFifth1}>i'd call the cops wowowowoow
                </button>
                <button className="btn draw-border draw6" onClick={this.handleButtonFifth2}>jump out of the window, annihilate badboi bully, drink all the beer and slap a student across his cheek for bein a pussy
                </button>
            </div>
        </div>
    }
}

export default FifthPage;