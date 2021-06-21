import React from 'react';
import { Content } from './styles';

type TimerProps = {
  time: number;
};

function Timer({ time }: TimerProps) {
  const [min, setMin] = React.useState<number>(0);
  const [sec, setSec] = React.useState<number>(0);
  const makeTimeForm = (time: number): void => {
    if (time < 60) {
      setMin(0);
      setSec(time);
    } else {
      let min = Math.floor(time / 60);
      let sec = time - min * 60;
      setSec(sec);
      setMin(min);
    }
  };
  React.useEffect((): void => {
    makeTimeForm(time);
  }, [time]);

  return (
    <Content>
      <span>{min}</span>
      <span>min</span>
      <span>{sec}</span>
      <span>sec</span>
    </Content>
  );
}

export default Timer;
