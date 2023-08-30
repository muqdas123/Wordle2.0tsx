import React from "react";

interface LetterProps {
  letterPos: number;
  attemptVal: number;
}
function Letter({ letterPos, attemptVal }: LetterProps) {
  return <div className="letter">Letter</div>;
}

export default Letter;
