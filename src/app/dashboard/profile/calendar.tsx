"use client";

import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      selectable={false}
      events={[]}
      /* eventClick={(e) => eventClick(e)}
      eventMouseEnter={(e) => handleHover(e)} */
      eventClassNames={"cursor-pointer"}
    />
  );
}
