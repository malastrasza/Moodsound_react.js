import React from "react";
import "./../scss/main.scss";

const secondPageGood = {
    // backgroundColor: "#297A7A",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "white"
};

const secondPageBad = {
    // backgroundColor: "red",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
};

const secondPageNeutral = {
    // backgroundColor: "#DAAE90",
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
        return <div className='secondPageBackground' style={secondPageGood}>
            <div className='secondPageQuestion'><p className='questions pulse'>how much of an angry boi r u today?</p></div>
            <div>
                <button className="btn draw-border draw2" onClick={this.handleButtonSecond1}>lotta, see my teeth!</button>
                <button className="btn draw-border draw2" onClick={this.handleButtonSecond2}>i just needa hug
                </button>
                <button className="btn draw-border draw2" onClick={this.handleButtonSecond2}>i am the peace embedded in flesh</button>

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
        return <div className='secondPageBackground2' style={secondPageNeutral}>
            <div><p className="questions pulse">how about some world peace?</p></div>
            <div>
                <button className="btn draw-border draw3" onClick={this.handleButtonSecond1}>yeeeeeeeeeessssss</button>
                <button className="btn draw-border draw3" onClick={this.handleButtonSecond1}>i don't care...
                </button>
                <button className="btn draw-border draw3" onClick={this.handleButtonSecond2}>like even what the heck is this question?</button>
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
        return <div className='secondPageBackground3' style={secondPageBad}>
            <div><p className="questions pulse">how about some moshpit?</p></div>
            <div>
                <button className="btn draw-border draw3" onClick={this.handleButtonSecond1}>hellll yeeeee</button>
                <button className="btn draw-border draw3" onClick={this.handleButtonSecond2}>nah</button>
            </div>
        </div>
    }
}

export default SecondPageGood;
export {SecondPageNeutral};
export {SecondPageBad};
