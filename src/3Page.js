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
            label = "nie chcę"
        } else if (this.state.inputRange == 2) {
            label = "nie no, coś bym tam jeszcze pożył"
        } else if (this.state.inputRange == 3) {
            label = "wszystko mi jedno"
        } else if (this.state.inputRange == 4) {
            label = "skończę tylko kurs i znajdę pracę i w sumie mogę umierać"
        } else if (this.state.inputRange == 5) {
            label = "w chuj"
        }
        return (
            <div className='secondPageBackground4' style={thirdPageDiv}>
                <div>
                    <div><p className="questions">jak bardzo chcesz umrzeć?</p></div>
                    <div><input type="range" min="1" max="5" name="range" value={this.state.inputRange}
                                onChange={this.handleValueChange}/></div>

                </div>
                <div className="margined4">
                    <div><label className="questions">{label}</label></div>

                </div>
                <div>
                    <button className="btn draw-border draw4" onClick={this.handleRangeThird}>zatwierdź</button>
                </div>
            </div>
        )
    }
}


export default ThirdPage;