import React, { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="border w-screen max-w-7xl">{children}</div>;
};
