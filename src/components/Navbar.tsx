interface NavItem {
    label: string;
    href: string
}



const navItem: NavItem[] = [
    {label: "Home", href: "#home"},
    {label: "About", href: "#about"},
    {label: "Projects", href: "#Projects"},
    {label: "Contact", href: "#contact"},
];

function Navbar() {
    return(
        <nav className="navbar">
            <div className="logo">MyProtfolio</div>

            <ul className="nav-links">
                {navItem.map((item) =>(
                    <li key={item.href}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default Navbar;