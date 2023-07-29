import Link from "next/link";
import { Item_Nav } from "@/interfaces/components/NavItem.interface";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import styles from './NavItem.module.css';

const NavItem: React.FC<Item_Nav> = (navItem) => {

    const pathname = usePathname();
    const isActive = pathname.startsWith(navItem.href)

    useEffect(() => {
        console.log(pathname)
        console.log(isActive);
    }, [])

    return (
        <div className={`${isActive ? styles.isActive : "" } p-4`}>
            <Link href={navItem.href} className={`${isActive ? styles.isActive : "" } text-white font-semibold  text-xl`}>{navItem.text}</Link>
        </div>
    )
}

export default NavItem;