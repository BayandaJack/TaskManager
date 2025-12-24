import { useEffect, useState } from "react";
import Task from "./Task";

export default function TaskDetails(){
    // variables
    const [ data, setData ] = useState([]);
    // deal with pulling & mapping data in this section
    useEffect(() => {
        // hit GET /tasks backend
        async function FetchTasks(){
            try {
                const res = await fetch('http://localhost:4000/tasks/');

                console.log(res.body);

                if (!res.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await res.json();

                setData(data);

                console.log(data);
                // map the data to its own react component
                
            } catch (error) {

                console.log(`Error: ${error}`);
                
            }

        }

        FetchTasks();

    }, []);




    return (
        <div className="flex flex-col rounded-md bg-amber-100 items-center w-3/4 min-w-1/2">
            {data.map(val => {
                return <Task key={val.id} details={val}/>
            })}
        </div>
    );
}