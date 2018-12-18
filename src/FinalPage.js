import React from "react";

const finalDiv = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
};

class FinalPage extends React.Component {
    render() {
        return <div style={finalDiv}>
            <div><h1>PIOSENKA DLA CIEBIE:</h1></div>
            <div>ALBUM ARTWORK</div>
            <div><h1>Song Name</h1></div>
            <div><h3>Artist Name</h3></div>
            <div>Play song</div>

        </div>
    }
    componentDidMount() {
        //tutaj robimy fetch i wrzucamy go do state i ze state pobieramy co chcemy
    }
}

export default FinalPage;