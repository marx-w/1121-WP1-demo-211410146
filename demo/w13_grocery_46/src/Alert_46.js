import React, { useEffect } from 'react';

const Alert_46 = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
  }, []);
  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  );
}

export default Alert_46;