import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toggleTask } from "../api/tasks";

function TaskCard({ task }) {
  const queryClient = useQueryClient();

  const toggleMutation = useMutation({
    mutationFn: toggleTask,
    onSuccess: queryClient.invalidateQueries(["tasks"]),
  });

  return (
    <div
      className={`${
        task.completed ? "line-through" : ""
      } w-lg mx-auto my-2 bg-primary text-white p-4 rounded shadow-sm flex justify-between items-center`}
    >
      <p>{task.title}</p>

      {task.completed ? (
        ""
      ) : (
        <button
          onClick={() => toggleMutation.mutate(task.id)}
          className="bg-green-500 p-2 rounded text-xs cursor-pointer"
        >
          { toggleMutation.isPending ? 'Loading...': 'Mark As Done' }
        </button>
      )}
    </div>
  );
}

export default TaskCard;
