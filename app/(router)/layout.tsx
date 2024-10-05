import react from 'react'
import SideNavigation from "@/app/(router)/_components/SideNavigation";
import Header from "@/app/(router)/_components/Header";

function layout({children}){
    return(
        <div>
            <div className={"sm:w-64  hidden sm:block fixed"}>
                <SideNavigation/>

            </div>
            <div className={"ml-64"}>
                <Header/>
                {children}

            </div>


        </div>
    )
}
export default layout
