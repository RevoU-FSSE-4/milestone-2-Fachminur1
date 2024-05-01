import React from 'react';

interface MenuProps {
    active: number;
    setActive: (id: number) => void;
    setCategory: (value: string) => void;
}

function Menu({ active, setActive, setCategory }: MenuProps) {
    const links = [
        { id: 1, name: "General", value: "general" },
        { id: 2, name: "Entertainment", value: "Entertainment" },
        { id: 3, name: "Business", value: "Business" },
        { id: 4, name: "Sports", value: "Sports" }
    ];

    function onClick(id: number, value: string) {
        setActive(id);
        setCategory(value);
    }

    return (
        <nav className="menu">
            <ul>
                {links.map(link => (
                    <li key={link.id} className={link.id === active ? 'active' : ''}>
                        <button onClick={() => onClick(link.id, link.value)}>{link.name}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;
