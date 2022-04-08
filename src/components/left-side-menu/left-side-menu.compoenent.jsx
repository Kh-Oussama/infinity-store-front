import React, {useState} from "react";
import {Menu, MenuItem, ProSidebar, SubMenu} from "react-pro-sidebar";
import GroceryIcon from "../icons/grocery";
import LeftSideMenuLoader from "./left-side-menu.component";
import {Link, Redirect, withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

const LeftSideMenu = ({loading, match, group, history}) => {

    const handleClick = (e,subCategory) => {
        e.stopPropagation();
        history.push(`/${match.params.group}/sub-categories/${subCategory.slug}`)
    }
    return (
        <>
            {
                loading
                    ? <LeftSideMenuLoader/>
                    :
                    <div className="side-menu">
                        <ProSidebar>
                            <Menu iconShape="square">
                                {
                                    group?.categories.map(category => {
                                        if (category.subcategories.length > 0)
                                            return (
                                                <SubMenu title={category.name} icon={<GroceryIcon/>}  onClick={() => history.push(`/${match.params.group}/categories/${category.slug}`)}>
                                                    {
                                                        category?.subcategories.map(subCategory => {
                                                            return (
                                                                    <MenuItem  onClick={e => handleClick(e,subCategory)}>
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
                                                <MenuItem icon={<GroceryIcon/>} onClick={() => history.push(`/${match.params.group}/categories/${category.slug}`)} >{category.name}</MenuItem>
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
