import Navbar from "../components/Navbar";
import { getTasks } from "../api/tasks";
import { useQuery } from "@tanstack/react-query";
import TaskCard from "../components/TaskCard";

function HomePage() {

    const {data: tasks, isLoading, isError} = useQuery({
        queryKey: ["tasks"],
        queryFn: getTasks
    });


  return (
    <>
    <Navbar />
    {/* Page body */}
    <h1 className="text-center mt-8 text-lg font-bold text-primary">My Tasks</h1>
    { isLoading && <p>Loading...</p>}
    { isError && <p>Something went wrong</p>}
    { tasks && tasks.length > 0 &&
        tasks.map((task) => (
            // <p key={task.id}>{ task.title }</p>
            <TaskCard key={task.id} task={task}/>
        ))
    }
    </>
  );
}
export default HomePage;
