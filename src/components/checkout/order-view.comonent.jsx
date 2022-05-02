import React from "react";
import {withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import './confirm-order.styles.scss';
import {selectCurrentUser} from "../../redux/auth/auth.selectors";
import "semantic-ui-css/components/checkbox.min.css";
import 'semantic-ui-css/components/button.min.css'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import {retrieveWilayaDetailsStart} from "../../redux/delivery/delivery.actions";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import { PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        // backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        backgroundColor: "red"
    }
});

const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page} orientation={"landscape"}>
            <View style={styles.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);

const OrderView = ({history, currentUser}) => {


    return (
        <div className="checkout">
            <div className="card checkout-cart">
                <PDFViewer width={"841.89"} height={"645.28px"} showToolbar={true}  >
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