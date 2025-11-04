import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [opct, setOpct] = useState(0);

  useEffect(() => {
    setOpct(1);
  }, []);
  return (
    <div
      className={`justify-content fixed inset-0 z-50  flex items-center overflow-y-auto overflow-x-hidden bg-[#000724]/80 
      outline-none transition-opacity duration-200  focus:outline-none opacity-${opct} ease-in-out`}
    >
      <div
        className={`m-auto h-auto max-h-[748px] w-[600px] max-w-[1120px] smm:m-0 smm:mx-auto smm:mb-4 smm:mt-auto smm:w-[90vw] `}
      >
        <div
          className="flex  h-full w-full  transform flex-col  items-center overflow-hidden rounded-xl
        p-5 border-2 border-[#E5E7EB] bg-[#F9FAFB] shadow-lg"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
