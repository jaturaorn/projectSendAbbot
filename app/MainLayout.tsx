import Navbar from "./Components/Navbar";


const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=" h-screen flex flex-col gap-5 items-center max-w-[1440px] w-full px-8">
    <Navbar />
    {children}
    </div>
  )
}

export default MainLayout