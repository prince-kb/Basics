import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    const info = {
        "name" : "MyName",
        "department" : "CSE"
    }

   {/*  Using statehook to pass the value as props and using useEffect hook at the place we want to render it */}
    const [state, setState] = useState(info);
    const update=()=>{
        setTimeout(() => {
            setState({
                "name" : "YourName",
                "department" : "IT"
            })
        }, 1000);
    }
    return(
        /* Sending first and update as props to the NoteContext.Provider function so that it will also be passed to all the childrens */
        <NoteContext.Provider value={{state,update}}>
        {props.children}
        </NoteContext.Provider>
     )}
export default NoteState;