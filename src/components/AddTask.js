import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, SetText] = useState("");
  const [day, SetDay] = useState("");
  const [pin, SetPin] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || !day) {
      alert("Missing fields!");
      return;
    }

    onAdd({ text, day, pin });

    SetText("");
    SetDay("");
    SetPin(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          value={text}
          placeholder="Add Task 🖊"
          onChange={(e) => SetText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="task">Day & Time</label>
        <input
          type="text"
          placeholder="Set day and/or time ⏰"
          value={day}
          onChange={(e) => SetDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="task">Pin? 📌</label>
        <input
          type="checkbox"
          checked={pin}
          value={pin}
          onChange={(e) => SetPin(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" className="btn btn-block" value="Save Task" />
    </form> 
  );
};

export default AddTask;
