import React, { ReactElement } from "react";

export const Section: React.FunctionComponent<{
  children: ReactElement;
  title?: string;
  id?: string;
}> = ({ children, title, id }) => {
  return (
    <section
      id={id ? id : ""}
      className="min-h-screen lg:min-h-0 lg:mt-12 flex flex-col items-center p-2 gap-4"
    >
      <h2 className="font-heading font-semibold text-2xl lg:text-3xl self-start border-b border-slate-500">
        {title}
      </h2>
      {children}
    </section>
  );
};
