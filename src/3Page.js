import React from "react";

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
            this.props.ClickMethodThirdPage(31);
        }
    };

    handleValueChange = (e) => {
        this.setState({inputRange: e.target.value})
    };

    render() {
        let label;
        if (this.state.inputRange == 1) {
            label = "Nie chcę"
        } else if (this.state.inputRange == 1) {
            label = "Nie no, coś bym tam jeszcze pożył"
        } else if (this.state.inputRange == 1) {
            label = "Wszystko mi jedno"
        } else if (this.state.inputRange == 2) {
            label = "Skończę tylko kurs i znajdę pracę i w sumie mogę umierać"
        } else if (this.state.inputRange == 2) {
            label = "W chuj"
        }
        return <div style={thirdPageDiv}>
            <div>
                <p>Jak bardzo chcesz umrzeć?</p>
                <input type="range" min="1" max="5" name="range" value={this.state.inputRange}
                       onChange={this.handleValueChange}/>
                <div><label>{label}</label></div>
                <button onClick={this.handleRangeThird}>Zatwierdź</button>
            </div>
        </div>
    }
}

export default ThirdPage;