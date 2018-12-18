import React from "react";

const thirdPageDiv = {
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
            inputRange: '2',
        }
    }

    handleValueChange = (e) => {
        this.setState({inputRange: e.target.value})
    };

    render(){
        let label;
        if (this.state.inputRange < 4){
            label = "nie chcę"
        }
        else if (this.state.inputRange >= 4 && this.state.inputRange <= 6 ) {
            label = "wszystko mi jedno"
        }
        else if (this.state.inputRange > 6) {
            label = "w chuj"
        }
        return <div style={thirdPageDiv}>
            <div>
                <p>Jak bardzo trafia chcesz umrzeć?</p>
                <input type="range" min="0" max="10" name="range" value={this.state.inputRange} onChange={this.handleValueChange}/>
                <label>{label}</label>
            </div>
        </div>
    }
}

export default ThirdPage;