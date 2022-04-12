import React from "react";


const NavSearchBar = () => {
    return (
        <div className="nav-search">
            <form>
                <span className="fa-solid fa-magnifying-glass"></span>
                <input type="text" name="search" placeholder="Search" />
            </form>
        </div>
    );
}

export default NavSearchBar;