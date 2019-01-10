import React from "react";
import "./../scss/main.scss";

const thirdPageDiv = {
    backgroundColor: "#DAAE90",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
};

class ThirdPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputRange: '1',
        }
    }

    handleRangeThird = () => {
        if (this.state.inputRange == 1) {
            this.props.ClickMethodThirdPage(30);
        } else if (this.state.inputRange == 2) {
            this.props.ClickMethodThirdPage(30);
        } else if (this.state.inputRange == 3) {
            this.props.ClickMethodThirdPage(30);
        } else if (this.state.inputRange == 4) {
            this.props.ClickMethodThirdPage(31);
        } else if (this.state.inputRange == 5) {
            this.props.ClickMethodThirdPage(31);
        }
    };

    handleValueChange = (e) => {
        this.setState({inputRange: e.target.value})
    };

    render() {
        let label;
        if (this.state.inputRange == 1) {
            label = "i don't want to"
        } else if (this.state.inputRange == 2) {
            label = "i'd probably live for some more time"
        } else if (this.state.inputRange == 3) {
            label = "i don't care"
        } else if (this.state.inputRange == 4) {
            label = "lemme become senior fullstack, then i can die"
        } else if (this.state.inputRange == 5) {
            label = "ye, af"
        }
        return (
            <div className='secondPageBackground4' style={thirdPageDiv}>
                <div>
                    <div><p className="questions pulse">do u wanna die?</p></div>
                    <div><input type="range" min="1" max="5" name="range" value={this.state.inputRange}
                                onChange={this.handleValueChange}/></div>

                </div>
                <div className="margined4">
                    <div><label className="questions">{label}</label></div>

                </div>
                <div>
                    <button className="btn draw-border draw4" onClick={this.handleRangeThird}>accept</button>
                </div>
            </div>
        )
    }
}


export default ThirdPage;