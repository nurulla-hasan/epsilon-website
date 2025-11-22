import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import React, { ReactNode } from "react";
type LayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
