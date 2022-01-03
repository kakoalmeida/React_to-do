import React from "react"

function List(props){

   function DoneTask(props) {
       if (props.done){
           return ( <img alt="done" src="./assets/x.png"></img>)
       } else {
           return ( <img alt="not done" src="./assets/done.png"></img>)
       }
   }

    return (
        <ul>
            {props.items.map(item => <li classNme={item.done ? "done" : ""} key={item.id}>{item.text}
            <div className="buttons">
            <button onClick={()=>{props.onDone(item)}}><DoneTask done={item.done}></DoneTask></button>
            <button onClick={()=>{props.onItemDeleted(item)}}><img src="./assets/trash.png" alt="LIXO"></img></button>
            </div>
            </li>)}
        </ul> 
    )
}


export default List;