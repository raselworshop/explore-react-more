import { useState } from "react";
import Link from "../Links/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
    ];


    return (
        <nav className="text-black bg bg-yellow-50 p-5">
            <div className=" md:hidden text-2xl" onClick={()=>setOpen(!open)}>
                {open === true ? 
                <AiOutlineMenu></AiOutlineMenu>: <AiOutlineClose></AiOutlineClose>}
                
            </div>
            <ul className={`md:flex gap-5 absolute md:static bg-yellow-50 px-5 duration-1000
                    ${open ? 'top-24':'-top-56'}
                `}>
                {
                    routes.map((route) => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;