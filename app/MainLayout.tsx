import Navbar from "./Components/Navbar";


const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=" h-screen">
    <Navbar />
    {children}
    </div>
  )
}

export default MainLayout