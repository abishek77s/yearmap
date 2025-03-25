import MonthCalender from "./MonthCalender";

const FullYear = () => {
  const twelve = [0];
  return (
    <div className="grid grid-cols-4 gap-y-24 w-screen h-screen p-12">
      {twelve.map((n, index) => (
        <MonthCalender key={index} number={n} />
      ))}
    </div>
  );
};

export default FullYear;
