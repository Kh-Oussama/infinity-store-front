import React from "react";
import {Menu, MenuItem, ProSidebar, SubMenu} from "react-pro-sidebar";
import GroceryIcon from "../icons/grocery";
import LeftSideMenuLoader from "./left-side-menu.component";
import {withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

const LeftSideMenu = ({loading, match, group}) => {


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
                                                <SubMenu title={category.name} icon={<GroceryIcon/>}>
                                                    {
                                                        category?.subcategories.map(subCategory => {
                                                            return (
                                                                <MenuItem>{subCategory.name}</MenuItem>
                                                            )
                                                        })
                                                    }
                                                </SubMenu>
                                            )
                                        else
                                            return (
                                                <MenuItem icon={<GroceryIcon/>}>{category.name}</MenuItem>
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
