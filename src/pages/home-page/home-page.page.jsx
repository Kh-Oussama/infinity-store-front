import React, {useEffect, useState} from 'react';
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";
import Header from "../../components/hedaer/header.compoenent";
import BannerSwiper from "../../components/baner-swiper/baner-swiper.component";
import {createStructuredSelector} from "reselect";
import {selectGroups} from "../../redux/group/groups.selectors";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import ShoppingSection from "../../components/shoping-section/shoping-section.component";
import BottomNavigation from '../../components/bottom-navigation/bottom-navigation.component';
import {selectCurrentUser} from "../../redux/auth/auth.selectors";
import {selectRedirectToCheckout} from "../../redux/design-utilites/design-utilities.selectors";

const Homepage = ({groups, match, history, currentUser, redirectToCheckout}) => {
    const [group, setGroup] = useState(null);

    useEffect(() => {
        if(currentUser && redirectToCheckout)
        history.push('/dashboard/checkout')
    }, [currentUser]);

    useEffect(() => {
        setGroup(groups.find(group =>
            group.name === match.params.group
        ));
        if (!groups.some(group => group.name === match.params.group)) history.push(`/${groups[0].name}`);

    }, [groups,match.params.group]);


    return (
        <div className="home-page">
            <NavigationBar/>
            <Header group={group}/>
            <BannerSwiper/>
            <ShoppingSection group={group} />
            <BottomNavigation />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    groups: selectGroups,
    currentUser: selectCurrentUser,
    redirectToCheckout: selectRedirectToCheckout
});
const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));