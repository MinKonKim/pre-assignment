import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ToastContainer from "../components/toast/ToastContainer";
import { ToastProvider } from "../provider/ToastProvider";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <ToastProvider>
        <div className="flex-grow">{children}</div>
        <ToastContainer />
      </ToastProvider>
      <Footer />
    </div>
  );
};

export default MainLayout;
