import React, {useEffect, useState} from 'react';
import NavigationBar from "../../components/navigartion-bar/navigation-bar.component";
import Header from "../../components/hedaer/header.compoenent";
import BannerSwiper from "../../components/baner-swiper/baner-swiper.component";
import {createStructuredSelector} from "reselect";
import {selectGroups} from "../../redux/group/groups.selectors";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import ShoppingSection from "../../components/shoping-section/shoping-section.component";

const Homepage = ({groups, match, history}) => {
    const [group, setGroup] = useState(null);

    useEffect(() => {
       setGroup(groups.find(group =>
            group.name === match.params.group
        ));
       if (!groups.some(group => group.name === match.params.group)) history.push(`/${groups[0].name}`);

    }, [groups,match.params.group]);


    return (
        <>
            <NavigationBar/>
            <Header group={group}/>
            <BannerSwiper/>
            <ShoppingSection group={group} />
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    groups: selectGroups,

});
const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));
