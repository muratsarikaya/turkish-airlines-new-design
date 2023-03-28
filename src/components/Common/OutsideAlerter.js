import React, {useEffect } from "react";


function useOutsideAlerter(ref, customSetState) {
  useEffect(() => {

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        customSetState(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, customSetState]);
}


export default function OutsideAlerter({customRef, customSetState, children}) {
  useOutsideAlerter(customRef, customSetState);

  return <div ref={customRef}>{children}</div>;
}