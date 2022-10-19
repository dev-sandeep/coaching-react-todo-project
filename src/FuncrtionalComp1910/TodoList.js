import React from "react";

const TodoList = (props)=>{
    const deleteHandler = (id)=>{
        console.log("delete", id);
        props.callback(id);
    }

    const editHandler = (id, existingText)=>{
        const newText = prompt("Enter the updated text", existingText);
        console.log(newText);
    }
    return (
        <>
            {/* {props.list.map(()=>{
                return <></>
            })} */}
            {props.list.map((el)=>(<tr>
                <td>{el.id}</td>
                <td>{el.text}</td>
                <td>
                    <button onClick={()=>{
                        deleteHandler(el.id)
                    }}>Delete</button>
                    <button onClick={()=>{
                        editHandler(el.id, el.text)
                    }}>Edit</button>
                </td>
            </tr>))}
            

        </>
    );
}
export default TodoList;