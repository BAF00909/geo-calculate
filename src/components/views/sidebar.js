import React from 'react';
import { CSidebar, CSidebarNav, CNavItem, CSidebarBrand } from '@coreui/react';
import { NavLink } from "react-router-dom";


const SideBar = () => {
    return (
        <CSidebar narrow={false} overlaid={true} >
            <CSidebarBrand><img src="./logo.png" height="49px"/></CSidebarBrand>
            <CSidebarNav>
                <CNavItem>
                    <NavLink to="/">О проекте</NavLink>
                </CNavItem>
                <CNavItem>
                    <NavLink to="/triangle">Треугольник</NavLink>
                </CNavItem>
                <CNavItem>
                    <NavLink to="/square">Квадрат</NavLink>
                </CNavItem>
                <CNavItem>
                    <NavLink to="/rectangle">Прямоугольник</NavLink>
                </CNavItem>
                <CNavItem>
                    <NavLink to="/circle">Круг</NavLink>
                </CNavItem>
            </CSidebarNav>
        </CSidebar >
    )
}

export default SideBar;