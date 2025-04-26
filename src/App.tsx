// import dayjs from "dayjs";
import EventCard from "./components/EventCard";
// import { EventDetails } from "./components/MonthCalender";

import eventsData from "./data/sample";

// const eventDetails = [
//   {
//     name: "WWDC 2025",
//     title: "Apple Misintelligence",
//     date: dayjs().toDate().toDateString(),
//   },
// ];


export default function MyApp() {
  return (
    <div className="p-12 bg-slate-200 h-screen w-screen bg-[radial-gradient(#cccccc_5%,#fff_5%)] bg-[length:50px_50px]">
      <div className="grid grid-cols-3" >
        {eventsData.map(event => <EventCard eventDetails={event} /> )}
        
        
      </div>
    </div>
  );
}