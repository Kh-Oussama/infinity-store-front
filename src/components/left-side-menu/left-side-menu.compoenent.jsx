import React, { useState, useLayoutEffect } from "react";
import { Menu, MenuItem, ProSidebar, SubMenu } from "react-pro-sidebar";
import GroceryIcon from "../icons/grocery";
import LeftSideMenuLoader from "./left-side-menu.component";
import { Link, Redirect, withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const LeftSideMenu = ({ loading, match, group, history }) => {

    const handleClick = (e, subCategory) => {
        e.stopPropagation();
        history.push(`/${match.params.group}/sub-categories/${subCategory.slug}`)
    }

    //Function to hide sidemenu
    const hideSideMenu = _ => {
        let sideMenu = document.querySelector('.shop-container .side-menu');
        sideMenu.classList.remove('active');
    }

    useLayoutEffect(() => {
        //To close side menu when click outside
        const clickEvent = event => {
            if (!event.target.closest('.filter-btn') && !event.target.closest('.side-menu')) {

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
            {
                loading
                    ? <LeftSideMenuLoader />
                    :
                    <div className="side-menu">
                        <div className="brand-side-menu">
                            <img className={"nav-logo"} src="/images/nav-logo.png" alt="Logo" />
                            <span className="fa-solid fa-xmark" onClick={hideSideMenu}></span>
                        </div>

                        <ProSidebar>
                            <Menu iconShape="square">
                                {
                                    group?.categories.map(category => {
                                        if (category.subcategories.length > 0)
                                            return (
                                                <SubMenu key={category.id} title={category.name} icon={<GroceryIcon />} onClick={() => history.push(`/${match.params.group}/categories/${category.slug}`)}>
                                                    {
                                                        category?.subcategories.map(subCategory => {
                                                            return (
                                                                <MenuItem key={subCategory.id} onClick={e => handleClick(e, subCategory)}>
                                                                    {/*<Link to={"/aa"} />*/}
                                                                    {subCategory.name}
                                                                </MenuItem>
                                                            )
                                                        })
                                                    }
                                                </SubMenu>
                                            )
                                        else
                                            return (
                                                <MenuItem key={category.id} icon={<GroceryIcon />} onClick={() => history.push(`/${match.params.group}/categories/${category.slug}`)} >{category.name}</MenuItem>
                                            )
                                    })
                                }

                                {/*<SubMenu title="Meat & Fish" icon={<MeatIcon/>}>*/}
                                {/*    <MenuItem>Fresh Fish</MenuItem>*/}
                                {/*    <MenuItem>Meat</MenuItem>*/}
                                {/*</SubMenu>*/}
                                {/*<SubMenu title="Snacks" icon={<SnackIcon/>}>*/}
                                {/*    <MenuItem>Nuts & Biscuits</MenuItem>*/}
                                {/*    <MenuItem>Chocolates</MenuItem>*/}
                                {/*    <MenuItem>Crisps</MenuItem>*/}
                                {/*    <MenuItem>Noodles & Pasta</MenuItem>*/}
                                {/*</SubMenu>*/}
                                {/*<SubMenu title="Pet Care" icon={<PetCareIcon/>}>*/}
                                {/*    <MenuItem>Fresh Fish</MenuItem>*/}
                                {/*    <MenuItem>Meat</MenuItem>*/}
                                {/*</SubMenu>*/}
                                {/*<SubMenu title="Fruits & Vegetables" icon={<GroceryIcon/>}>*/}
                                {/*    <MenuItem>Fruits</MenuItem>*/}
                                {/*    <MenuItem>Vegetables</MenuItem>*/}
                                {/*</SubMenu>*/}
                                {/*<SubMenu title="Meat & Fish" icon={<MeatIcon/>}>*/}
                                {/*    <MenuItem>Fresh Fish</MenuItem>*/}
                                {/*    <MenuItem>Meat</MenuItem>*/}
                                {/*</SubMenu>*/}
                                {/*<SubMenu title="Snacks" icon={<SnackIcon/>}>*/}
                                {/*    <MenuItem>Nuts & Biscuits</MenuItem>*/}
                                {/*    <MenuItem>Chocolates</MenuItem>*/}
                                {/*    <MenuItem>Crisps</MenuItem>*/}
                                {/*    <MenuItem>Noodles & Pasta</MenuItem>*/}
                                {/*</SubMenu>*/}
                                {/*<SubMenu title="Pet Care" icon={<PetCareIcon/>}>*/}
                                {/*    <MenuItem>Fresh Fish</MenuItem>*/}
                                {/*    <MenuItem>Meat</MenuItem>*/}
                                {/*</SubMenu>*/}
                                {/*<SubMenu title="Snacks" icon={<SnackIcon/>}>*/}
                                {/*    <MenuItem>Nuts & Biscuits</MenuItem>*/}
                                {/*    <MenuItem>Chocolates</MenuItem>*/}
                                {/*    <MenuItem>Crisps</MenuItem>*/}
                                {/*    <MenuItem>Noodles & Pasta</MenuItem>*/}
                                {/*</SubMenu>*/}
                                {/*<SubMenu title="Pet Care" icon={<PetCareIcon/>}>*/}
                                {/*    <MenuItem>Fresh Fish</MenuItem>*/}
                                {/*    <MenuItem>Meat</MenuItem>*/}
                                {/*</SubMenu>*/}
                            </Menu>
                        </ProSidebar>;
                    </div>
            }
        </>
    )
}

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftSideMenu));
