'use client';

import { Item_Nav } from "@/interfaces/components/NavItem.interface";
import NavItem from "../NavItem/NavItem";
import styles from './header.module.css';

const Header: React.FC = () => {


    const Nav_List: Item_Nav[] = [

        { text: "Accueil", href : "/", id: 1},
        { text: "Compétences", href : "/comp", id: 2},
        { text: "Projets", href : "/projects", id: 3},
        { text: "Contact", href : "/contact", id: 4},
    ]

    return (
        <div className="h-[12vh]">
            <header className="h-full flex w-full">
                <nav className={`${styles.navBar} p-2 flex m-auto justify-around`}>
                    {Nav_List.map((item) => (
                        <NavItem {...item} key={item.id} />
                    ))}
                </nav>
            </header>
        </div>
    );
}

export default Header;