import React from "react";

function MessageBox({content, type, count}) {
  return (
    <div className="messageBox"> 
      {type} - {content} ---- {count}
    </div>
  )
}

export default MessageBox;
