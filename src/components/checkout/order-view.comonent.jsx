import React from "react";
import {withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import './confirm-order.styles.scss';
import {selectCurrentUser} from "../../redux/auth/auth.selectors";
import "semantic-ui-css/components/checkbox.min.css";
import 'semantic-ui-css/components/button.min.css'
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import {retrieveWilayaDetailsStart} from "../../redux/delivery/delivery.actions";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import { PDFViewer } from '@react-pdf/renderer';


// Create styles
const styles = StyleSheet.create({
    page: {
        margin: 20,
    },
    logoSection: {
        width: "100%",
        alignItems: "center",
        marginBottom: 30,
    },
    address: {
        color: "rgba(55,65,81)",
        fontSize: "14px"
    },
    wAddress: {
        marginBottom: 7,
        color: "rgb(55,65,81)",
        fontSize: "14px"
    },
    phone: {
       margin: "2 0",
        color: "rgb(55,65,81)",
        fontSize: "14px"
    },
    res: {
       margin: "2 0",
        color: "#009f7f",
        fontSize: "14px"
    },
    logo: {
        height: 30,
        width: 150,
        marginBottom :"10px"

    },
    headerSection: {
        flexDirection: 'row',
        height : "30%",
        // padding: 10,


        // width : 30

    },
    headerLeft: {
        flexGrow: 1,
        // backgroundColor: "red",
    },
    headerRight: {
        flexGrow: 1,
        // alignItems: "flex-end",
        // padding : "20px",
    },
    date: {
        // alignItems: "flex-end",
        marginLeft : 350,
        // border: "1px solid red"
    },

});

const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page} orientation={"landscape"}>
            <View style={styles.logoSection}>
                <Image src={"/images/nav-logo.png"}  style={styles.logo}/>
            </View>
            <View style={styles.headerSection}>
                <View style={styles.headerLeft}>
                    <Text style={styles.address} >Num 506 Terre Familliale </Text>
                    <Text style={styles.address} >Ouest Bordj El Baheri </Text>
                    <Text style={styles.wAddress} >Alger. </Text>
                    <Text style={styles.phone} >Phone : <Text style={styles.res}> +213 540637874.</Text> </Text>
                    <Text style={styles.phone} >Website :<Text style={styles.res}> www.infinityStore.com.</Text> </Text>
                </View>
                <View style={styles.headerRight}>
                    <View style={styles.date}>
                        <Text style={styles.address} >Date : 05/04/2022 </Text>
                        <Text style={styles.address} >Invoice : #5236952 </Text>
                       </View>
                </View>
            </View>

            {/*<View style={styles.section} wrap>*/}
            {/*    <Image src={"/images/nav-logo.png"}  style={styles.logo}/>*/}
            {/*    <Text>*/}
            {/*        Order number : #26555988*/}
            {/*    </Text>*/}
            {/*    <Text>*/}
            {/*        pour :*/}
            {/*    </Text>*/}
            {/*    <Text>*/}
            {/*        Khirat oussama*/}
            {/*    </Text>*/}
            {/*    <Text>*/}
            {/*        num : 0540637874*/}
            {/*    </Text>*/}
            {/*</View>*/}

            {/*<View style={styles.section}>*/}
            {/*    <Text>Section #2</Text>*/}
            {/*</View>*/}
        </Page>
    </Document>
);

const OrderView = ({history, currentUser}) => {


    return (
        <div className="checkout">
            <div className="card checkout-cart">
                <PDFViewer width={"841.89"}  height={"645.28px"} showToolbar={true}  >
                    <MyDocument />
                </PDFViewer>
            </div>

        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,

    cartItems: selectCartItems,
    total: selectCartTotal,
});


const mapDispatchToProps = dispatch => ({
    retrieveWilayaDetails: wilaya => dispatch(retrieveWilayaDetailsStart(wilaya)),
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderView));