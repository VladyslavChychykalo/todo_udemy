import React from "react";

const AppHeaderCount = ({ toDo = 0, done = 0 }) => (
  <div>
    <p>
      {toDo} more to do, {done} done
    </p>
  </div>
);

export default AppHeaderCount;
