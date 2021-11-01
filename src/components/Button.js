import PropTypes from "prop-types";

const Button = ({ text, onClick, close }) => {
  return (
    <button onClick={onClick} className={`btn ${close ? "btn-close" : ""}`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
