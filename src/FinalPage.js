import React from "react";
import firebase, {db} from "./firebase";

const songs = db.collection('songs');
const redclouds = db.collection('songs').doc('redclouds');

const finalDiv = {
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
            artwork: '',
            album: '',
            artist: '',
            title: '',
            url: ''
        }
    }
// Zrobię tutaj ify, które będą sprawdzać każde draw[0], draw[1] etc czy jest takie jakie chcę  i wtedy wybierze odpowiednią nazwę, którą przypiszę do state i potem ze state pobiorę te nazwę do wywoływania z firebase i jazda z kurwami

    componentDidMount() {

        console.log(this.props.drawIndex);

        console.log(songs.doc('redclouds'));
        console.log(redclouds);

        redclouds.get().then((doc) => {
            if (doc.exists) {
                this.setState({album: doc.data().album})
                // const doc.artist();
                console.log("Document data:", doc.data().album);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });


        db.collection('songs').doc('redclouds').get().then((doc) => {
            if (doc.exists) {
                this.setState({artwork: doc.data().artwork})
                // const doc.artist();
                console.log("Document data:", doc.data().artwork);
            } else {
                // doc.data() will be undefined in this case
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
            <div><h1>Song Name</h1></div>
            <div><h3>Artist Name</h3></div>
            <div><h3>{this.state.album}</h3></div>
            <div>Play song</div>

        </div>
    }
}

export default FinalPage;