import { LogOut, User } from "lucide-react"


const Navbar = () => {
  return (
    <header className=" w-full flex justify-between py-6">
      <div><h3 className="subHeading">Blog Management</h3></div>
      <div className="flex gap-3 items-center">
        <div className=" rounded-full bg-[#3B82F6] p-3"><User color="#fff" /></div>
        <button className="buttonLogout"><LogOut color="#fff" /></button>
        </div>
    </header>
  )
}

export default Navbar