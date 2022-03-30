import React from "react";
export const PrettyPrintJson = ({ children }) => (
  <div>
    <pre>{JSON.stringify(children, null, 2)}</pre>
  </div>
);
