import MonthCalender from "./MonthCalender";

const FullYear = () => {
  const twelve = [0];
  return (
    <div className="flex  h-screen ">
      {twelve.map((n, index) => (
        <MonthCalender key={index} number={n} />
      ))}
    </div>
  );
};

export default FullYear;
