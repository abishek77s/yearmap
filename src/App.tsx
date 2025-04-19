import dayjs from "dayjs";
import MonthDisplay from "./components/MonthDisplay";
import MonthCalender from "./components/MonthCalender";

const eventDetails = [
  {
    name: "WWDC 2025",
    title: "Apple Misintelligence",
    date: dayjs().toDate().toDateString(),
  },
];

export default function MyApp() {
  return (
    <div className="p-24">
      <MonthCalender number={1}/>
      <MonthDisplay events={eventDetails} />
    </div>
  );
}
