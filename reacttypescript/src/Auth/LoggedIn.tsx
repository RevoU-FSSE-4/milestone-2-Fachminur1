import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu';
import GridNews from '../Grid/GridNews';
import Logout from './Logout';
import { initialItems } from '../items/items';

function LoggedInContent() {
    const navigate = useNavigate();

    const handleMenuClick = (id: number, value: string) => {
        navigate(`/category/${value}`);
    };

    const menuProps = {
        active: 1,
        setActive: () => {},
        setCategory: () => {},
    };

    const handleLogout = () => {
        // Implement your logout logic here
        console.log('Logout logic');
    };

    return (
        <>
            <Menu {...menuProps} />
            <GridNews items={initialItems} />
            <Logout onLogout={handleLogout} /> {/* Pass onLogout prop */}
        </>
    );
}

export default LoggedInContent;
