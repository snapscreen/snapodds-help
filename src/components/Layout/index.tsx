import React, { ReactNode } from "react";
import { Location } from "history";

interface LayoutProps {
  location: Location;
  title: string;
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};
