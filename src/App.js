import { useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [holidays, setHolidays] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>National Holidays</h3>
        {holidays.map((holiday) => {
          return (
            <div className="holiday" key={holiday.id}>
              <img src={holiday.img} alt="holiday" />
              <div>
                <p>{holiday.title}</p>
                <p>{holiday.date}</p>
              </div>
            </div>
          );
        })}
        {holidays === data ? (
          <button onClick={() => setHolidays([])}>Clear All</button>
        ) : (
          <button onClick={() => setHolidays(data)}>Show All</button>
        )}
      </section>
    </main>
  );
}

export default App;
