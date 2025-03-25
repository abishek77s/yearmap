import { FormEvent, useRef, useState } from "react";
import generateDate, { Month, months } from "../utils/Calender";
import dayjs from "dayjs";

interface Num {
  number: number;
}

const MonthCalender = ({ number }: Num) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs().month(number);
  const titleRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(titleRef.current?.value, nameRef.current?.value);
  };
  const today = currentDate;

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const eventDetails = {
    name: nameRef.current?.value,
    title: titleRef.current?.value,
    date: selectedDate.toDate().toDateString(),
  };
  console.log(eventDetails);

  const date: Month[] = generateDate(today.month(), today.year());
  return (
    <div className=" flex gap-4">
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
              <div
                key={index}
                className="h-14 grid place-content-center  text-sm"
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
                  className="h-14 border-t grid place-content-center text-sm"
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

      <form className="" onSubmit={handleSubmit}>
        <p>Adding for {selectedDate.toDate().toDateString()}</p>
        <label htmlFor="name">Event</label>
        <input
          className="bg-slate-200 border p-2"
          type="text"
          id="name"
          name="name"
          ref={nameRef}
        ></input>
        <label htmlFor="title">Title</label>
        <input
          className="bg-slate-200 border p-2 mb-2"
          type="title"
          id="title"
          name="title"
          ref={titleRef}
        ></input>
        <button className="p-2 bg-lime-500 text-white rounded-md" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default MonthCalender;
