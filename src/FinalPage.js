import React from "react";
import firebase, {db} from "./firebase";

const finalDiv = {
    backgroundColor: "#DAAE90",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
};

class FinalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            album: '',
            artist: '',
            artwork: '',
            title: '',
            url: '',
            response: ''
        }
    }

componentWillMount() {

    let answer = this.props.drawIndex;
    console.log(answer);

    if (answer[0] == 10 && answer[1] == 200) {
        this.setState({
            response: "redclouds"
        })
    }
}

    componentDidMount() {

        db.collection('songs').doc(this.state.response).get().then((doc) => {
            if (doc.exists) {
                this.setState({album: doc.data().album})
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        db.collection('songs').doc(this.state.response).get().then((doc) => {
            if (doc.exists) {
                this.setState({artist: doc.data().artist})
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        db.collection('songs').doc(this.state.response).get().then((doc) => {
            if (doc.exists) {
                this.setState({artwork: doc.data().artwork})
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        db.collection('songs').doc(this.state.response).get().then((doc) => {
            if (doc.exists) {
                this.setState({title: doc.data().title})
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        db.collection('songs').doc(this.state.response).get().then((doc) => {
            if (doc.exists) {
                this.setState({url: doc.data().url})
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

    }

    render() {
        return <div style={finalDiv}>
            <div><h1>PIOSENKA DLA CIEBIE:</h1></div>
            <div><img src={this.state.artwork} alt="album_artwork" height="250" width="250"/></div>
            <div><h1>{this.state.title}</h1></div>
            <div><h3>{this.state.artist}</h3></div>
            <div><h3>{this.state.album}</h3></div>
            <div><a href={this.state.url}>Play song</a></div>

        </div>
    }
}

export default FinalPage;