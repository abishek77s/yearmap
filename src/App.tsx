// import dayjs from "dayjs";

import EventCard from "./components/EventCard";
import { EventDetails } from "./components/MonthCalender";
import sample from "../assets/sample.jpeg"


// const eventDetails = [
//   {
//     name: "WWDC 2025",
//     title: "Apple Misintelligence",
//     date: dayjs().toDate().toDateString(),
//   },
// ];

const evenDetails = {
  image: sample,
  id: 2,
  name: "Touch Me Not",
  date: "June 21",
}

export default function MyApp() {
  return (
    <div className="p-12 bg-slate-200 h-screen">
 
      <EventCard eventDetails={evenDetails} />
    </div>
  );
}
