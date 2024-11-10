import { useEffect, useState } from "react";

function CommingSoon() {
  const [hourDegrees, setHourDegrees] = useState();
  const [secondsDegrees, setSecondsDegrees] = useState();

  const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = (seconds / 60) * 360 + 90;
    const minutes = now.getMinutes();
    setSecondsDegrees(secondsDegree);
    const hours = now.getHours();
    let hoursDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    setHourDegrees(hoursDegree);
  };

  useEffect(() => {
    // to call the function every one second to make the clock work
    const interval = setInterval(() => {
      setDate();
    }, 1000);
    // do not forget to clear interval or it will go into infinite loop after a while and crash
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="app-mainContent-clock">
        <div className="app-mainContent-clock-outerFace">
          <div className="app-mainContent-clock-outerFace-markingOne mark"></div>
          <div className="app-mainContent-clock-outerFace-markingTwo mark"></div>
          <div className="app-mainContent-clock-outerFace-markingThree mark"></div>
          <div className="app-mainContent-clock-outerFace-markingFour mark"></div>
          <div className="app-mainContent-clock-outerFace-innerFace">
            <div
              className="hand hour-hand"
              style={{ transform: `rotate(${hourDegrees}deg)` }}
            ></div>
            <div
              className="hand second-hand"
              style={{ transform: `rotate(${secondsDegrees}deg) ` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="app-mainContent-content"></div>
    </>
  );
}
export default CommingSoon;
