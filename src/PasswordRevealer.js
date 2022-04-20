import React from "react";
import "./PasswordRevealer.css";

function PR({ value }) {
  const [shown, setShown] = React.useState(false);

  return (
    <div className="PasswordRevealer">
      <input
        type={shown ? "text" : "password"}
        value={value}
        onChange={() => {}}
      />
      <button onClick={() => setShown(!shown)}>Show/Hide</button>
    </div>
  );
}

export default PR;
