import { FormEvent, useRef, useState } from "react";
import generateDate, { Month, months } from "../utils/Calender";
import dayjs from "dayjs";

interface Num {
  number: number;
}

export interface EventDetails {
  name?: string;
  title?: string;
  date: string;
  img?: File | null;
}

const MonthCalender = ({ number }: Num) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs().month(number);
  const titleRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const today = currentDate;

  const [eventDetails, setEventDetails] = useState<EventDetails[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleImageChange = () => {
    const file = imageRef.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const file = imageRef.current?.files ? imageRef.current.files[0] : null;

    setEventDetails([
      ...eventDetails,
      {
        name: nameRef.current?.value,
        title: titleRef.current?.value,
        date: selectedDate.toDate().toDateString(),
        img: file,
      },
    ]);
  };

  const date: Month[] = generateDate(today.month(), today.year());
  return (
    <div className="flex gap-4">
      <div>
        <div className="w-80 h-80">
          <div className="flex justify-between">
            <div>
              <h1>
                {months[today.month()]},{today.year()}
              </h1>
            </div>
          </div>
          <div className="w-full grid grid-cols-7 text-gray-600">
            {days.map((day, index) => (
              <div
                key={index}
                className="h-14 grid place-content-center text-sm"
              >
                <h1>{day}</h1>
              </div>
            ))}
          </div>

          <div className="w-full grid grid-cols-7">
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
                    } ${"h-10 w-10 grid content-start rounded-full hover:bg-black hover:text-white transistion-all cursor-pointer"}
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

      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <p>Adding for {selectedDate.toDate().toDateString()}</p>
        <label htmlFor="name">Event</label>
        <input
          className="bg-slate-200 border p-2"
          type="text"
          id="name"
          name="name"
          ref={nameRef}
        />
        <label htmlFor="title">Title</label>
        <input
          className="bg-slate-200 border p-2 mb-2"
          type="title"
          id="title"
          name="title"
          ref={titleRef}
        />
        <label htmlFor="image">Choose an image (JPG or PNG):</label>
        <input
          ref={imageRef}
          type="file"
          id="image"
          name="image"
          accept=".jpg, .jpeg, .png"
          required
          onChange={handleImageChange}
        />
        {imagePreview && (
          <div className="mt-2">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-w-full h-40 object-cover"
            />
          </div>
        )}
        <button className="p-2 bg-lime-500 text-white rounded-md" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default MonthCalender;
