import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-prime-200">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
