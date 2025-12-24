import TaskDetails from "./TaskDetails";
import SearchBar from "./SearchBar";

export default function TaskCard(){
    return (
        <div className='bg-amber-700 flex flex-col items-center justify-center w-1/2 rounded-md gap-4 p-2'>
            <h1>Ekse</h1>
            <SearchBar />
            <TaskDetails />
        </div>
    );

}