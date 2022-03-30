import React, { useEffect, useLayoutEffect } from "react";
import { Menu, MenuItem, ProSidebar, SubMenu } from "react-pro-sidebar";
import GroceryIcon from "../icons/grocery";
import MeatIcon from "../icons/meat";
import SnackIcon from "../icons/snack";
import PetCareIcon from "../icons/petCare";

const LeftSideMenu = () => {
    //Function to hide sidemenu
    const hideSideMenu = _ => {
        let sideMenu = document.querySelector('.shop-container .side-menu');
        sideMenu.classList.remove('active');
    }

    useLayoutEffect(() => {
        //To close side menu when click outside
        const clickEvent = event => {
            if (!event.target.closest('.filter-btn') && !event.target.closest('.side-menu')) {
                console.log("Condition");
                //To close sidemenu with previous function
                hideSideMenu();
            }
        };

        document.addEventListener('click', clickEvent);

        return () => {
            document.removeEventListener('click', clickEvent);
        }
    }, []);

    return (
        <>
            <div className="side-menu">
                <div className="brand-side-menu">
                    <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo" />
                    <span className="fa-solid fa-xmark" onClick={hideSideMenu}></span>
                </div>

                <ProSidebar>
                    <Menu iconShape="square">
                        <SubMenu title="Fruits & Vegetables" icon={<GroceryIcon />}>
                            <MenuItem>Fruits</MenuItem>
                            <MenuItem>Vegetables</MenuItem>
                        </SubMenu>
                        <SubMenu title="Meat & Fish" icon={<MeatIcon />}>
                            <MenuItem>Fresh Fish</MenuItem>
                            <MenuItem>Meat</MenuItem>
                        </SubMenu>
                        <SubMenu title="Snacks" icon={<SnackIcon />}>
                            <MenuItem>Nuts & Biscuits</MenuItem>
                            <MenuItem>Chocolates</MenuItem>
                            <MenuItem>Crisps</MenuItem>
                            <MenuItem>Noodles & Pasta</MenuItem>
                        </SubMenu>
                        <SubMenu title="Pet Care" icon={<PetCareIcon />}>
                            <MenuItem>Fresh Fish</MenuItem>
                            <MenuItem>Meat</MenuItem>
                        </SubMenu>
                        <SubMenu title="Fruits & Vegetables" icon={<GroceryIcon />}>
                            <MenuItem>Fruits</MenuItem>
                            <MenuItem>Vegetables</MenuItem>
                        </SubMenu>
                        <SubMenu title="Meat & Fish" icon={<MeatIcon />}>
                            <MenuItem>Fresh Fish</MenuItem>
                            <MenuItem>Meat</MenuItem>
                        </SubMenu>
                        <SubMenu title="Snacks" icon={<SnackIcon />}>
                            <MenuItem>Nuts & Biscuits</MenuItem>
                            <MenuItem>Chocolates</MenuItem>
                            <MenuItem>Crisps</MenuItem>
                            <MenuItem>Noodles & Pasta</MenuItem>
                        </SubMenu>
                        <SubMenu title="Pet Care" icon={<PetCareIcon />}>
                            <MenuItem>Fresh Fish</MenuItem>
                            <MenuItem>Meat</MenuItem>
                        </SubMenu>
                        <SubMenu title="Snacks" icon={<SnackIcon />}>
                            <MenuItem>Nuts & Biscuits</MenuItem>
                            <MenuItem>Chocolates</MenuItem>
                            <MenuItem>Crisps</MenuItem>
                            <MenuItem>Noodles & Pasta</MenuItem>
                        </SubMenu>
                        <SubMenu title="Pet Care" icon={<PetCareIcon />}>
                            <MenuItem>Fresh Fish</MenuItem>
                            <MenuItem>Meat</MenuItem>
                        </SubMenu>
                    </Menu>
                </ProSidebar>;
            </div>
        </>
    )
}

export default LeftSideMenu;