import React, { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="w-screen max-w-7xl overflow-hidden">{children}</div>;
};
