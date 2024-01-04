import React from "react";

export default function Alert(props) {
    const capitalize= (word)=>{
        let low=word.toLowerCase();
        return low.charAt(0).toUpperCase()+low.slice(1);
    }
  return (
    <>
    <div style={{height:'50px'}} >
      <div className={`alert alert-${props.alert.ty} alert-dismissible fade show role="alert"`}>
        <strong>{capitalize(props.alert.ty)} </strong>  {props.alert.msg}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
     </div>
    </>
  );
}
