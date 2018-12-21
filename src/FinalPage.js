import React from "react";
import firebase, {db} from "./firebase";
import YouTube from 'react-youtube';
import "./../scss/main.scss";
import canvasMy from './canvas';

const finalDiv = {
    background: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    marginTop: "0",
    position: "relative"
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

        if (answer[0] == 10 && answer[1] == 200 && answer[2] == 30 && answer[3] == 40) {
            this.setState({
                response: "leech" //
            })
        } else if (answer[0] == 10 && answer [1] == 200 && answer[2] == 30 && answer[3] == 41) {
            this.setState({
                response: "ivy" //
            })
        } else if (answer[0] == 10 && answer [1] == 200 && answer[2] == 31 && answer[3] == 40) {
            this.setState({
                response: "glow" //
            })
        } else if (answer[0] == 10 && answer [1] == 200 && answer[2] == 31 && answer[3] == 41) {
            this.setState({
                response: "publicapology" //
            })
        } else if (answer[0] == 10 && answer [1] == 201 && answer[2] == 30 && answer[3] == 40) {
            this.setState({
                response: "cultofluna" //
            })
        } else if (answer[0] == 10 && answer [1] == 201 && answer[2] == 30 && answer[3] == 41) {
            this.setState({
                response: "hollow" //
            })
        } else if (answer[0] == 10 && answer [1] == 201 && answer[2] == 31 && answer[3] == 40) {
            this.setState({
                response: "wildman" //
            })
        } else if (answer[0] == 10 && answer [1] == 201 && answer[2] == 31 && answer[3] == 41) {
            this.setState({
                response: "darkmatter" //
            })
        } else if (answer[0] == 11 && answer [1] == 200 && answer[2] == 30 && answer[3] == 40) {
            this.setState({
                response: "fourwalls" //
            })
        } else if (answer[0] == 11 && answer [1] == 200 && answer[2] == 30 && answer[3] == 41) {
            this.setState({
                response: "intodespair" //
            })
        } else if (answer[0] == 11 && answer [1] == 200 && answer[2] == 31 && answer[3] == 40) {
            this.setState({
                response: "bitches" //
            })
        } else if (answer[0] == 11 && answer [1] == 200 && answer[2] == 31 && answer[3] == 41) {
            this.setState({
                response: "funeral" //
            })
        } else if (answer[0] == 11 && answer [1] == 201 && answer[2] == 30 && answer[3] == 40) {
            this.setState({
                response: "people" //
            })
        } else if (answer[0] == 11 && answer [1] == 201 && answer[2] == 30 && answer[3] == 41) {
            this.setState({
                response: "bleed" //
            })
        } else if (answer[0] == 11 && answer [1] == 201 && answer[2] == 31 && answer[3] == 40) {
            this.setState({
                response: "crown" //
            })
        } else if (answer[0] == 11 && answer [1] == 201 && answer[2] == 31 && answer[3] == 41) {
            this.setState({
                response: "agneya" //
            })
        } else if (answer[0] == 12 && answer [1] == 200 && answer[2] == 30 && answer[3] == 40) {
            this.setState({
                response: "icumblood" //
            })
        } else if (answer[0] == 12 && answer [1] == 200 && answer[2] == 30 && answer[3] == 41) {
            this.setState({
                response: "makeithurt" //
            })
        } else if (answer[0] == 12 && answer [1] == 200 && answer[2] == 31 && answer[3] == 40) {
            this.setState({
                response: "suicide" //
            })
        } else if (answer[0] == 12 && answer [1] == 200 && answer[2] == 31 && answer[3] == 41) {
            this.setState({
                response: "pain" //
            })
        } else if (answer[0] == 12 && answer [1] == 201 && answer[2] == 30 && answer[3] == 40) {
            this.setState({
                response: "lullaby" //
            })
        } else if (answer[0] == 12 && answer [1] == 201 && answer[2] == 30 && answer[3] == 41) {
            this.setState({
                response: "pessimist" //
            })
        } else if (answer[0] == 12 && answer [1] == 201 && answer[2] == 31 && answer[3] == 40) {
            this.setState({
                response: "torch" //
            })
        } else if (answer[0] == 12 && answer [1] == 201 && answer[2] == 31 && answer[3] == 41) {
            this.setState({
                response: "strainofhate" //
            })
        }

    }

    componentDidMount() {

        canvasMy()

        db.collection('songs').doc(this.state.response).get().then((doc) => {
            if (doc.exists) {
                this.setState({
                        artist: doc.data().artist,
                        artwork: doc.data().artwork,
                        title: doc.data().title,
                        url: doc.data().url
                    }
                );

                // var url = new URL('https://apicloud-colortag.p.rapidapi.com/tag-url.json');
                //
                // var params = {palette: 'simple',
                //     sort: 'relevance',
                //     url: doc.data().artwork
                // };

                // url.search = new URLSearchParams(params)
                //
                // fetch(url, {
                //         headers: {
                //             'X-RapidAPI-Key': '831a701d2fmshf5c1b08c520d4c7p139ad3jsnd1905d0aed9c',
                //         }
                //     }
                // ).then(resp => {
                //     console.log(resp);
                //     return resp.json()
                // }).then(
                //     data => {
                //         console.log(data)
                //     }
                // )
                //     .catch(err => {
                //         console.log(err)
                //     })
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });


    }

    render() {
        {
            const opts = {
                height: '250',
                width: '400',
                playerVars: {
                    autoplay: 1,
                }
            };
            return <div className="divFinalPage mainDivFinal" style={finalDiv}>
                <canvas id="canvasFinal"></canvas>
                <div className='large5Page'>
                    <div className="divFinalPage"><p className="randomSong appear">wylosowany utwór:</p></div>
                    <div className="divFinalPage appear"><img src={this.state.artwork} alt="album_artwork" height="200"
                                                              width="200"/></div>


                    <div className="divFinalPage"><p className="sizesFinal appear">tytuł: {this.state.title}</p></div>
                    <div className="divFinalPage"><p className="sizesFinal appear">wykonawca: {this.state.artist}</p>
                    </div>
                </div>
                <div className="ytDiv appear">
                    <YouTube
                        videoId={this.state.url}
                        opts={opts}
                    />
                </div>
            </div>
        }
    }
}

export default FinalPage;