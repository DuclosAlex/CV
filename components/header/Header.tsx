'use client';

import { Item_Nav } from "@/interfaces/components/NavItem.interface";
import NavItem from "../NavItem/NavItem";

const Header: React.FC = () => {


    const Nav_List: Item_Nav[] = [

        { text: "Accueil", href : "/", id: 1},
        { text: "Compétences", href : "/comp", id: 2},
        { text: "Projets", href : "/projects", id: 3},
        { text: "Contact", href : "/contact", id: 4},
    ]

    return (
        <div className="h-[12vh]">
            <header className="bg-teal-800 h-full w-full border-b-2 border-black shadow-bottom">
                <nav className="flex w-1/2 m-auto pt-6 justify-around">
                    {Nav_List.map((item) => (
                        <NavItem {...item} key={item.id} />
                    ))}
                </nav>
            </header>
        </div>
    );
}

export default Header;