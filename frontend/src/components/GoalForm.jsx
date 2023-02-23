import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

const GoalForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <section className="p-4 rounded-md border-2 border-slate-500 flex flex-col space-y-2 items-center justify-center">
      <h1>Add your goals</h1>
      <form
        className="flex-1 flex-col space-y-4 w-full p-4 rounded-md border-2 border-slate-500"
        onSubmit={onSubmit}
      >
        <div className="flex items-center justify-center space-x-4">
          <label htmlFor="text" className="">
            Goal
          </label>
          <input
            type="text"
            id="text"
            value={text}
            className="flex-1 border-2 border-slate-500 rounded-md px-3 py-2"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-full px-2 py-3 bg-teal-500 rounded-md text-slate-50"
          >
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
