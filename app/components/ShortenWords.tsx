import { FC } from "react";

interface TruncatedTextProps {
  text: string;
  maxWords: number;
}

const TruncatedText: FC<TruncatedTextProps> = ({ text, maxWords }) => {
  const words = text.split(" ");
  const shouldTruncate = words.length > maxWords;

  return (
    <div>
      {shouldTruncate ? words.slice(0, maxWords).join(" ") + "..." : text}
    </div>
  );
};

export default TruncatedText;
