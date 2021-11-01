import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  const unpinned = [];
  const pinned = [];

  tasks.forEach((task) => {
    (!task.pin && unpinned.push(task)) || (task.pin && pinned.push(task));
  });

  return (
    <>
      {pinned.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
      {unpinned.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
