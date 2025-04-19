import { useState } from "react";
import generateDate, { Month, months } from "../utils/Calender";
import dayjs from "dayjs";
import { EventDetails } from "./MonthCalender";

interface Details {
  events: EventDetails[];
}

const MonthDisplay = ({ events }: Details) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs().month(0);

  const today = currentDate;

  const [selectedDate, setSelectedDate] = useState(dayjs());

  const date: Month[] = generateDate(today.month(), today.year());
  return (
    <div className=" flex gap-4 ">
      <div>
        {" "}
        <div className="w-[1200px] ">
          <div className="flex justify-between">
            <div>
              <h1>
                {months[today.month()]},{today.year()}
              </h1>
            </div>
          </div>
          <div className="w-full  grid grid-cols-7 text-gray-600">
            {days.map((day, index) => (
              <div
                key={index}
                className="h-24  grid place-content-left content-center text-sm"
              >
                <h1>{day}</h1>
              </div>
            ))}
          </div>

          <div className="w-full  grid grid-cols-7">
            {date.map((item, index) => {
              const { date, currentMonth, today } = item;
              return (
                <div
                  key={index}
                  className="h-24  border-t grid place-content-left content-center text-sm"
                >
                  <h1
                    className={`${currentMonth ? "" : "text-gray-400"} ${
                      today ? "text-white bg-red-600" : ""
                    } ${"h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transistion-all cursor-pointer"}
              ${
                selectedDate.toDate().toDateString() ===
                date.toDate().toDateString()
                  ? "bg-black text-white"
                  : ""
              }`}
                    onClick={() => setSelectedDate(date)}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {events.map((e) => (
          <div key={e.date}>
            {e.date === selectedDate.toDate().toDateString() && (
              <div>
                <li>{e.date}</li>
                <h1>{e.name}</h1>
                <h1>{e.title}</h1>
                {e.img && (
                  <img src={URL.createObjectURL(e.img)} alt="Uploaded Image" />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthDisplay;
