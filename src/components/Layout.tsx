import React, { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen max-w-[1440px] overflow-hidden">{children}</div>
  );
};
