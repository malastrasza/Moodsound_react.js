import React from 'react';
import ReactDOM from 'react-dom';


class HelloName extends React.Component {
    render() {
        return <div>
            Hello
        </div>
    }
}

function App() {
    return <HelloName/>
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});