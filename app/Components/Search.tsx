import { ChevronDown } from "lucide-react"


const Search = () => {
  return (
    <div className="w-full flex gap-3 items-center">
        <input type="text" 
  className="input" 
  placeholder="ค้นหา..."  />
  <button className="flex gap-1.5">dropdown <ChevronDown /></button>
  <button className="mainButton">Add New Blog</button>
  <button className="buttonReset">Reset Filter</button>
  </div>
  )
}

export default Search