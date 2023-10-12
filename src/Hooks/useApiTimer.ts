import { useState } from "react";

let totalSessionTime = 0;

export const useApiTimer = () => {
  const [sessionTime, setSessionTime] = useState(0);
  const [callCount, setCallCount] = useState(0); 

  
  const logTimeAndSession = (elapsedTime: number) => {
    console.log(`API call took ${elapsedTime} ms`);
    totalSessionTime += elapsedTime;
    setSessionTime(totalSessionTime);
    
    setCallCount(prevCount => prevCount + 1); 
    console.log(`Total session time: ${sessionTime} ms`);
    console.log(`Total API calls made: ${callCount + 1}`); 
  };

  return { logTimeAndSession, sessionTime, callCount };
};
