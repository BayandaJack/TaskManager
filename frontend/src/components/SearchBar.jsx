import { useState } from "react";

export default function SearchBar(){
    // use useStates to set the description 
    const [ content, setContent ] = useState("");

    async function HandleSubmit(){
        console.log("Hey, you got here!")
        // deal with submission of task
        try {
            // hit the post endpoint to create a post
            const res = await fetch('http://localhost:4000/tasks/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content: content })
            });

            alert("Task successfully added to database");

        } catch (error) {

            console.log(`Error: ${error}`);
            
        }
    }


    return (
        <div className="rounded-md bg-white">
            <input 
                className="outline-none p-2" 
                type="text" 
                placeholder="Enter your task" 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                />
            <button 
                className="bg-red-500 rounded-md p-2 hover:cursor-pointer transform transition-transform duration-300 ease-out active:scale-95"
                type="button"
                onClick={HandleSubmit}
                >
                    Add
                </button>
        </div>
    );
}