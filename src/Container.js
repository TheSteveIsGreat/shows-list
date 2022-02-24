import { useState } from "react";

const Container = (props) => {
  
  return (
    <div className="Container">
      <h1>{props.header}</h1>
      <div>{props.children}</div>
    </div>
  )
}
export default Container