import React, {useState} from "react";


function Formulario(props){

    const [text, setText] = useState("");

function handleChange(event) {
    let t = event.target.value;
    setText(t);
}

function addItem(event){
    event.preventDefault();
    if (text){
    //setItems([...items, text])
    props.onAddItem(text);
    setText("");
    }
}

    return (
        <form>
            <input className="task" onChange = {handleChange} type="text" placeholder="Digite sua tarefa" value={text}></input>
            <button className="addBtn" onClick = {addItem}>+</button>
        </form>
    );
};

export default Formulario;