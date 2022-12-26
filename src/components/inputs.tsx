const Input = ({ type = "text", icon = "", buttonName = "", ...props }) => {
  if (type === "textarea")
    return <textarea className="input" {...props}></textarea>;

  if (icon)
    return (
      <div className="input-group">
        <span className="material-symbols-rounded">{icon}</span>
        <input type="text" className="input" {...props} />
      </div>
    );

  if (buttonName) {
    const { onClick, ...inputProps } = props;

    return (
      <div className="input-group with-btn">
        <input type="text" className="input" {...inputProps} />
        <button className="material-symbols-rounded button" onClick={onClick}>
          {buttonName}
        </button>
      </div>
    );
  }

  return <input type="text" className="input" {...props} />;
};

export default Input;
