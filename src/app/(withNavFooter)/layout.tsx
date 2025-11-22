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
      <div
        style={{ paddingTop: "calc(var(--nav-height, 96px) + 24px)" }}
      >
        <main
          className="w-full mx-auto"
          style={{ minHeight: "calc(100vh - var(--nav-height, 96px))" }}
        >
          {children}
        </main>
        <div className="w-full mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
