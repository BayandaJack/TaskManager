import { useState } from "react";

export default function Task({ details }){
    const [ done, setDone ] = useState(details.completed);

    // make call to backend
    async function handleChange(newDone){
        try {
            const response = await fetch(`http://localhost:4000/tasks/post/${details.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: details.content,
                    completed: newDone
                })
            });

            alert("Updated task status sucessfully!");
            
        } catch (error) {

            throw new Error(`HTTP error! status: ${response.status}`);
            
        }
        
    }

    return (
        <div 
        onClick={() => {
            const newDone = !done;
            setDone(newDone);
            handleChange(newDone);
        }}
        className={`rounded-md 
                    border-2
                    border-white
                    p-1
                    m-1
                    bg-none 
                    hover:cursor-pointer 
                    ${done ? "line-through" : "no-underline"}`}>
            <h1>{details.content}</h1>
        </div>
    );
}