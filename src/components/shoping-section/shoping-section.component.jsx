import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import GroceryIcon from "../icons/grocery";
import MeatIcon from "../icons/meat";
import SnackIcon from "../icons/snack";
import PetCareIcon from "../icons/petCare";

const ShoppingSection = () => {
    return (
        <>
            <div className="shop-container">
                <div className="side-menu">
                    <ProSidebar>
                        <Menu iconShape="square">
                            <SubMenu title="Fruits & Vegetables" icon={<GroceryIcon/>}>
                                <MenuItem>Fruits</MenuItem>
                                <MenuItem>Vegetables</MenuItem>
                            </SubMenu>
                            <SubMenu title="Meat & Fish" icon={<MeatIcon/>}>
                                <MenuItem>Fresh Fish</MenuItem>
                                <MenuItem>Meat</MenuItem>
                            </SubMenu>
                            <SubMenu title="Snacks" icon={<SnackIcon/>}>
                                <MenuItem>Nuts & Biscuits</MenuItem>
                                <MenuItem>Chocolates</MenuItem>
                                <MenuItem>Crisps</MenuItem>
                                <MenuItem>Noodles & Pasta</MenuItem>
                            </SubMenu>
                            <SubMenu title="Pet Care" icon={<PetCareIcon/>}>
                                <MenuItem>Fresh Fish</MenuItem>
                                <MenuItem>Meat</MenuItem>
                            </SubMenu>
                            <SubMenu title="Fruits & Vegetables" icon={<GroceryIcon/>}>
                                <MenuItem>Fruits</MenuItem>
                                <MenuItem>Vegetables</MenuItem>
                            </SubMenu>
                            <SubMenu title="Meat & Fish" icon={<MeatIcon/>}>
                                <MenuItem>Fresh Fish</MenuItem>
                                <MenuItem>Meat</MenuItem>
                            </SubMenu>
                            <SubMenu title="Snacks" icon={<SnackIcon/>}>
                                <MenuItem>Nuts & Biscuits</MenuItem>
                                <MenuItem>Chocolates</MenuItem>
                                <MenuItem>Crisps</MenuItem>
                                <MenuItem>Noodles & Pasta</MenuItem>
                            </SubMenu>
                            <SubMenu title="Pet Care" icon={<PetCareIcon/>}>
                                <MenuItem>Fresh Fish</MenuItem>
                                <MenuItem>Meat</MenuItem>
                            </SubMenu>
                            <SubMenu title="Snacks" icon={<SnackIcon/>}>
                                <MenuItem>Nuts & Biscuits</MenuItem>
                                <MenuItem>Chocolates</MenuItem>
                                <MenuItem>Crisps</MenuItem>
                                <MenuItem>Noodles & Pasta</MenuItem>
                            </SubMenu>
                            <SubMenu title="Pet Care" icon={<PetCareIcon/>}>
                                <MenuItem>Fresh Fish</MenuItem>
                                <MenuItem>Meat</MenuItem>
                            </SubMenu>
                        </Menu>
                    </ProSidebar>;
                </div>
                <div className="products-grid">
d
                </div>
            </div>
        </>
    )
}

export default ShoppingSection;