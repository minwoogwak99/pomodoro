import styled from "styled-components";

import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(3);
  const [minutes, setMinutes] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const timeReducer = () => {
    if (seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    } else {
      setSeconds(seconds - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => timeReducer(), 1000);
    console.log(seconds);

    if (minutes === 0 && seconds === 0) {
      clearInterval(interval);
      setIsDone(true);
    }

    return () => clearInterval(interval);
  }, [seconds, minutes]);

  return (
    <div>
      <MainContainer>
        <TimeDisplay>
          {minutes} : {seconds}
        </TimeDisplay>
        <ActionBtn
          isDone={isDone}
          onClick={() => {
            setSeconds(3);
            setMinutes(0);
            setIsDone(false);
          }}
        >
          Reset
        </ActionBtn>
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const TimeDisplay = styled.div`
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
  background-color: ${(props) => (props.isDone ? "red" : "blue")};
`;

export default Timer;
