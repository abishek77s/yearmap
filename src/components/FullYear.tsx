import MonthCalender from "./MonthCalender";

const FullYear = () => {
  const twelve = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="grid grid-cols-4 gap-y-24 w-screen h-screen p-12">
      {twelve.map((n) => (
        <MonthCalender number={n} />
      ))}
    </div>
  );
};

export default FullYear;
