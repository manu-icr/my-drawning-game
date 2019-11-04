import React from 'react';
import { useHistory } from "react-router-dom";

function NavButton (props) {
  let history = useHistory();

  return (
    <button
      type="button"
      onClick={() => history.push('/' + props.goto)}
    >
      {props.title}
    </button>
  );
}

export default NavButton;