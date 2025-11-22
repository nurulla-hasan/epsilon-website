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
      <div className="min-h-[calc(100vh-120px)]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
