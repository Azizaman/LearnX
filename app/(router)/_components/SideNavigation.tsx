import { BadgeIcon, BookOpen, GraduationCapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import React from "react";

function SideNavigation() {
    const menu = [
        {
            id: 1,
            name: 'All Courses',
            icon: BookOpen,
            path: '/courses'
        },
        {
            id: 2,
            name: 'Membership',
            icon: BadgeIcon,
            path: '/membership'
        },
        {
            id: 3,
            name: "Be Instructor",
            icon: GraduationCapIcon,
            path: '/beinstructor' // Ensure this path is valid
        }
    ];

    return (
        <div className="p-4 bg-white shadow-sm border h-screen">
            <Image src={'/Triple-A-png2.png'} alt={'logo'} width={160} height={80} />
            {/* Menu list */}
            <div className="flex-col gap-3 mt-9 p-3 text-[20px] space-y-2 text-gray-500 cursor-pointer">
                {menu.map((item) => (
                    <Link href={item.path} key={item.id}>
                        <div className="flex gap-3 hover:shadow hover:bg-gray-100 p-2 rounded">
                            <div className="flex items-center justify-center">
                                {React.createElement(item.icon)}
                                <span className="px-2">{item.name}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SideNavigation;

