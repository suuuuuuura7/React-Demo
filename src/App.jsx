import react from "react";
import Notes from "./Notes.jsx"

function App(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.detail}</p>
        </div>
    );
}


export default App;