function TaskCard({ task }) {
  return (
    <div className="w-lg mx-auto my-2 bg-primary text-white p-4 rounded shadow-sm">
      <p>{task.title}</p>
      <span>
        {/* { task.completed ? '✅' : '❌'} */}
      </span>
    </div>
  );
}

export default TaskCard;
