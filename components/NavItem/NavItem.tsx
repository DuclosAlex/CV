import Link from "next/link";
import { Item_Nav } from "@/interfaces/components/NavItem.interface";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const NavItem: React.FC<Item_Nav> = (navItem) => {

    const pathname = usePathname();
    const isActive = pathname.startsWith(navItem.href)

    useEffect(() => {
        console.log(pathname)
        console.log(isActive);
    }, [])

    return (
        <Link href={navItem.href} className={`${isActive ? "text-lime-300" : "text-cyan-300" }  text-xl`}>{navItem.text}</Link>
    )
}

export default NavItem;