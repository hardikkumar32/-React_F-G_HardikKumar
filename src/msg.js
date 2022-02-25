import React, { useEffect } from "react";
function Msg({ setmsg }) {
  useEffect(() => {
    setTimeout(() => {
      setmsg(false);
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Thank you for completing the information</h1>
    </div>
  );
}
export default Msg;
