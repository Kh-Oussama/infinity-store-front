import React, {useEffect, useState} from 'react';
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";
import Header from "../../components/hedaer/header.compoenent";
import BannerSwiper from "../../components/baner-swiper/baner-swiper.component";
import ShoppingSection from "../../components/shoping-section/shoping-section.component";
import {createStructuredSelector} from "reselect";
import {selectGroups} from "../../redux/group/groups.selectors";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const Homepage = ({ groups, match }) => {
    const [group, setGroup] = useState(null);

    useEffect(() => {
        return setGroup(groups.find(group =>
            group.name === match.params.group
        ));
    }, [groups])



    return (
        <>
            <NavigationBar/>
            <Header group={group} />
            <BannerSwiper/>
            <ShoppingSection group={group}/>

        </>
    )
}

const mapStateToProps = createStructuredSelector({
    groups: selectGroups,

});
const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));
