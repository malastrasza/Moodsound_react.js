import React from "react";

const finalDiv = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
};

class FifthPage extends React.Component {

    handleButtonFifth = () => {
        this.props.ClickMethodFifthPage();
    };

    render(){
        return <div style={finalDiv}>
            <div><p>
                Wyobraź sobie, że zza okna słyszysz krzyk, a gdy wyglądasz na zewnątrz, jakiś patus ucieka z czteropakiem Harnasia grubego studenta, który na leży na ziemi w łzach i pocie, krzycząc o pomoc. Co robisz?
            </p></div>
            <div>
                <button onClick={this.handleButtonFifth}>Nie wyglądam nawet za okno</button>
                <button onClick={this.handleButtonFifth}>Dzwonię po bagiety łiju łiju</button>
                <button onClick={this.handleButtonFifth}>Wyskakuje przez okno, anihiluję patusa, wypijam czteropak i daję w pysk studentowi za to, że jest cipą</button>
            </div>
        </div>
    }
}

export default FifthPage;