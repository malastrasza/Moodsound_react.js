import React from "react";

const secondPageGood = {
    backgroundColor: "blue",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
};


class SecondPageGood extends React.Component {

    handleButtonSecond = () => {
        this.props.ClickMethodSecondPage();
    };

    render() {
        return <div style={secondPageGood}>
        <div><p>Nie masz ochoty komuś wywalić gonga w nos?</p></div>
            <div>
                <button onClick={this.handleButtonSecond}>Jasne</button>
                <button>Broń boże!</button>
            </div>
        </div>
    }
}

class SecondPageNeutral extends React.Component {
    render() {
        return <div style={secondPageNeutral}>
            <div><p>Chcesz w nos?</p></div>
            <div>
                <button>Dawaj</button>
                <button>Obojętne mi to</button>
                <button>Nie</button>
            </div>
        </div>
    }
}

class SecondPageBad extends React.Component {

    render() {
        return <div style={secondPageBad}>
            <div><p>Nie rozkwasiłbyś paru łbów?</p></div>
            <div>
                <button>SLAYER KURWAAAAA</button>
                <button>Nah</button>
            </div>
        </div>
    }
}

class ThirdPage extends React.Component {
    render(){
        return <div>TRZECIA STRONA</div>
    }
}

export default SecondPageGood;
export {SecondPageNeutral};
export {SecondPageBad};
export {ThirdPage};