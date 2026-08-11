import { Typewriter } from "react-simple-typewriter";

interface TypeWriterProps {
  words: string[];
}

function TypeWriter({ words }: TypeWriterProps) {
  return (
    <div className="bg-amber-300">
      <Typewriter
        words={words}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </div>
  );
}

export default TypeWriter;