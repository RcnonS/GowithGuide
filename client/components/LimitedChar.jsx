import "../src/css/LimitedChar.css";

function LimitedChar({ text, limit }) {
  const limitedText = text.length >= limit ? text.slice(0, limit) : text;
  return (
    <p className="description">
      {limitedText} <span className="dotContinueRead">...</span>
    </p>
  );
}

export default LimitedChar;
