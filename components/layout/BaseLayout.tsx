import { Navbar } from "../navbar";
import Footer from "../footer";
import { ReactNode } from "react";

interface IBaseLayout {
  children: ReactNode;
}

const BaseLayout: React.FC<IBaseLayout> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
