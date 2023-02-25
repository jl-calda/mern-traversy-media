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
    <form className="flex-1 flex w-full space-x-4 mb-8" onSubmit={onSubmit}>
      <input
        type="text"
        id="text"
        value={text}
        className="flex-grow rounded-md bg-inherit px-3 border-b focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-transparent"
        onChange={(e) => setText(e.target.value)}
      />

      <button
        type="submit"
        className="px-2 py-3 bg-teal-500 rounded-md text-slate-50 hover:bg-teal-600 transition-colors duration-300"
      >
        Add Goal
      </button>
    </form>
  );
};

export default GoalForm;
