import React from "react";

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

    render(){
        return <div style={finalDiv}>
            <div><p>
                Wyobraź sobie taką sytuację: zza okna słyszysz krzyk, wyglądasz na zewnątrz, a tam jakiś patus ucieka z czteropakiem Harnasia grubego studenta, podczas gdy ów leży na ziemi w łzach i pocie, stękając o pomoc. Co robisz?
            </p></div>
            <div>
                <button onClick={this.handleButtonFifth1}>Nie wyglądam nawet za okno.</button>
                <button onClick={this.handleButtonFifth1}>Dzwonię po bagiety łiju łiju</button>
                <button onClick={this.handleButtonFifth2}>Wyskakuję przez okno, anihiluję patusa, wypijam czteropak i daję w pysk studentowi za to, że jest c*pą</button>
            </div>
        </div>
    }
}

export default FifthPage;