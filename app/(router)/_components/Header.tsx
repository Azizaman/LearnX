import {BellDot, Search} from "lucide-react";
import { Button } from "@/components/ui/button"

function Header(){
    return(
        <div className="bg-white p-4 flex justify-between">
            {/* search Bar */}
            <div className="flex gap-2 border p-2 rounded-md " >
            <Search/> 
            <input type={"text"} placeholder={'search...'}  className={"outline-none"}/>
            </div>

            <div className="flex gap-4 justify-end">
                {/* Get satarted and get started button */}
                <BellDot className="text-gray-500 space-x-3 mr-4 mt-2 hover:cursor-pointer"/>
                <Button>Get Started</Button>


            </div>
               

            
            

        </div>

       
        
    )
}
export default Header;