import styled from "styled-components";

import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [isDone, setIsDone] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const timeReducer = () => {
    if (seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    } else {
      setSeconds(seconds - 1);
    }
  };

  useEffect(() => {
    if (isStarted) {
      const interval = setInterval(() => timeReducer(), 1000);
      console.log(seconds);

      if (minutes === 0 && seconds === 0) {
        clearInterval(interval);
        setIsDone(true);
      }
      return () => clearInterval(interval);
    }
  }, [seconds, minutes, isStarted]);

  return (
    <div>
      <MainContainer>
        <TimeDisplay>
          {minutes} : {seconds}
        </TimeDisplay>
        <ActionBtn
          isDone={isDone}
          onClick={() => {
            setSeconds(0);
            setMinutes(25);
            setIsDone(false);
            setIsStarted(!isStarted);
          }}
        >
          {isStarted ? "Reset" : "Start"}
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
  background-color: ${(props) =>
    props.isDone ? "red" : "rgba(141, 139, 255, 0.4)"};
  color: rgba(222, 222, 222, 0.8);
  transition-duration: 200ms;

  &:hover {
    color: rgba(252, 252, 252, 0.8);
    background-color: rgba(141, 139, 255, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
`;

export default Timer;
