import React from "react";
import "./../scss/main.scss";

const finalDiv = {
    backgroundColor: "#DAAE90",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
};

class FifthPage extends React.Component {

    handleButtonFifth1 = () => {
        this.props.ClickMethodFifthPage(40);
    };
    handleButtonFifth2 = () => {
        this.props.ClickMethodFifthPage(41);
    };

    render() {
        return <div className='secondPageBackground6' style={finalDiv}>
            <div className='secondPageQuestion'><p className="questions">
                wyobraź sobie taką sytuację: zza okna słyszysz krzyk, wyglądasz na zewnątrz, a tam jakiś patus ucieka z
                czteropakiem Harnasia grubego studenta, podczas gdy ów leży na ziemi w łzach i pocie, stękając o pomoc.
                co robisz?
            </p></div>
            <div className="page5center">
                <button className="btn draw-border draw6" onClick={this.handleButtonFifth1}>nie wyglądam nawet za
                    okno.
                </button>
                <button className="btn draw-border draw6" onClick={this.handleButtonFifth1}>dzwonię po bagiety łiju
                    łiju
                </button>
                <button className="btn draw-border draw6" onClick={this.handleButtonFifth2}>wyskakuję przez okno,
                    anihiluję patusa, wypijam czteropak i daję w pysk studentowi za to, że jest c*pą
                </button>
            </div>
        </div>
    }
}

export default FifthPage;