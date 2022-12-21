const Input = ({ type = "text", icon = "", ...props }) => {
  if (type === "textarea")
    return <textarea className="input" {...props}></textarea>;

  if (icon)
    return (
      <div className="input-group">
        <span className="material-symbols-rounded">{icon}</span>
        <input type="text" className="input" {...props} />
      </div>
    );

  return <input type="text" className="input" {...props} />;
};

export default Input;
