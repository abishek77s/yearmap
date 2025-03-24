import { useState } from "react";
import generateDate, { Month, months } from "../utils/Calender";
import dayjs from "dayjs";

interface Num {
  number: number;
}

const MonthCalender = ({ number }: Num) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs().month(number);

  const [today, setToday] = useState(currentDate);

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const date: Month[] = generateDate(today.month(), today.year());
  return (
    <div className=" ">
      <div>
        {" "}
        <div className="w-80 h-80">
          <div className="flex justify-between">
            <div>
              <h1>
                {months[today.month()]},{today.year()}
              </h1>
            </div>
          </div>
          <div className="w-full  grid grid-cols-7 text-gray-600">
            {days.map((day, index) => (
              <div className="h-14 grid place-content-center  text-sm">
                <h1 key={index}>{day}</h1>
              </div>
            ))}
          </div>

          <div className="w-full  grid grid-cols-7">
            {date.map((item, index) => {
              const { date, currentMonth, today } = item;
              return (
                <div className="h-14 border-t grid place-content-center text-sm">
                  <h1
                    key={index}
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
    </div>
  );
};

export default MonthCalender;
