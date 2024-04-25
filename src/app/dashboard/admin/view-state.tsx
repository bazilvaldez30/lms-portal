import React from "react";

export default function ViewState({ setView }: { setView: any }) {
  return (
    <section>
      <div className="flex justify-center gap-6">
        <button
          onClick={() => setView("users")}
          className="button-primary rounded-md bg-custom-1"
        >
          Users
        </button>
        <button
          onClick={() => setView("courses")}
          className="button-primary rounded-md bg-custom-2"
        >
          Courses
        </button>
        <button
          onClick={() => setView("subjects")}
          className="button-primary rounded-md bg-custom-3"
        >
          Subjects
        </button>
      </div>
    </section>
  );
}
