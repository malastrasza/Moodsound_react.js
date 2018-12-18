import React from "react";

const secondPageGood = {
    backgroundColor: "blue",
    width: "100vw",
    height: "100vh",
};

class SecondPageGood extends React.Component {
    render() {
        return <div style={secondPageGood}>
        <div>SECOND PAGE GOOD</div>
        </div>
    }
}

class SecondPageNeutral extends React.Component {
    render() {
        return <div>SECOND PAGE NEUTRAL</div>
    }
}

class SecondPageBad extends React.Component {
    render() {
        return <div>SECOND PAGE BAD</div>
    }
}

export default SecondPageGood;
export {SecondPageNeutral};
export {SecondPageBad};