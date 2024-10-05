import { useEffect, useState } from "react";
import SeachWeather from "./seachWeather";

export function Header() {
  const [dateState, setDateState] = useState<{
    day: string;
    month: string;
    hour: string;
    minute: string;
    year: string;
  }>({
    day: '',
    month: '',
    hour: '',
    minute: '',
    year: '',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setDateState({
        day: now.toLocaleString('default', { day: 'numeric' }),
        year: now.toLocaleString('default', { year: 'numeric' }),
        month: now.toLocaleString('default', { month: 'long' }),
        hour: now.toLocaleString('default', { hour: '2-digit' }),
        minute: now.toLocaleString('default', { minute: '2-digit' }),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="m-4 ">
     <header className="flex justify-end items-end gap-4">
     <div className="flex items-center">
        <p className="text-xl font-medium">{dateState.day}</p>
        <p className="text-xl font-medium mx-2">{dateState.month}</p>
        <p className="text-xl font-medium ">{dateState.year}</p>
      </div>
      <div className="flex items-center">
        <p className="text-xl font-medium">{dateState.hour}</p>
        <p className="text-xl font-medium mx-1">:</p>
        <p className="text-xl font-medium">{dateState.minute}</p>
      </div>
     </header>
     <SeachWeather/>

    </div>
  );
}
