import styled from "styled-components";

import React, { useEffect, useState } from "react";

const defulatTime = {
  seconds: "00",
  minutes: "00",
};

function Timer() {
  const [time, setTime] = useState(defulatTime);

  const timeReducer = () => {
    // setTime;
  };

  useEffect(() => {
    const interval = setInterval(() => timeReducer(), 1000);
    console.log(time);

    if (time <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div>
      <MainContainer>
        <TimeDisplay>{time.seconds}</TimeDisplay>
        <ActionBtn onClick={() => setTime(5)}>Start</ActionBtn>
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const TimeDisplay = styled.div`
  border: 1px solid red;
  padding: 10px;
  margin-bottom: 100px;
  font-size: 50px;
  color: white;
`;
const ActionBtn = styled.button`
  border: none;
  width: 15vw;
  height: 15vw;
  border-radius: 200px;
  font-size: 30px;
`;

export default Timer;
