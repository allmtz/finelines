import React, { ReactElement } from "react";

export const Section: React.FunctionComponent<{
  children: ReactElement;
  title?: string;
  id?: string;
}> = ({ children, title, id }) => {
  return (
    <section
      id={id ? id : ""}
      className="border border-green-700 min-h-screen flex flex-col items-center p-2 gap-4"
    >
      <h2 className="text-2xl self-start font-medium border-b border-slate-400">
        {title}
      </h2>
      {children}
    </section>
  );
};
