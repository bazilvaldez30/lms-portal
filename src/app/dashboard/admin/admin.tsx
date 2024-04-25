"use client";

import React, { useState } from "react";
import ViewState from "./view-state";
import UsersTable from "./users-table";
import CoursesTable from "./courses-table";
import SubjectsTable from "./subjects-table";

export default function Admin() {
  const [view, setView] = useState("users");

  return (
    <div className="space-y-6 py-16">
      <ViewState setView={setView} />
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div className="rounded-md bg-gray-50 dark:bg-gray-800">
          {view === "users" && <UsersTable />}
          {view === "courses" && <CoursesTable />}
          {view === "subjects" && <SubjectsTable />}
        </div>
      </div>
    </div>
  );
}
