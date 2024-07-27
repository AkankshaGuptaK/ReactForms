export default function Input({ label, id, error, ...props }) {
    
  return (
    <div className="control no-margin">
      <label htmlFor={id}>Email</label>
      <input
        id={id}
        {...props}
        //   value={enteredValues.email}
        //   onBlur={(event) => handleInputBlur("email", event.target.value)}
        //   onChange={(event) => handleInputChange("email", event.target.value)}
      />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
