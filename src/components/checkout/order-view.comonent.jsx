import React, {useEffect, useState} from "react";
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
import {
    selectGetOrderError,
    selectGetOrderLoading,
    selectOrderStats,
    selectOrderVar
} from "../../redux/orders/orders.selectors";
import {getOrderStart} from "../../redux/orders/orders.actions";
import Spinner from "../spinner/spinner.components";



// Create styles
const styles = StyleSheet.create({
    page: {
        // margin: 15,
    },
    logoSection: {
        width: "100%",
        alignItems: "center",
        margin: 20,
        marginBottom: 15,
    },
    address: {
        color: "rgba(55,65,81)",
        fontSize: "10px"
    },
    wAddress: {
        marginBottom: 5,
        color: "rgb(55,65,81)",
        fontSize: "10px"
    },
    phone: {
       margin: "1 0",
        color: "rgb(55,65,81)",
        fontSize: "11px"
    },
    res: {
       margin: "1 0",
        color: "#009f7f",
        fontSize: "11px"
    },
    logo: {
        height: 20,
        width: 110,
        marginBottom :"10px"

    },
    headerSection: {
        flexDirection: 'row',
        height : "10%",
        margin: 15,
    },
    detailsSection: {
        flexDirection: 'row',
        height : "18%",
        margin: 10,

    },
    detailsLeft: {
        flexGrow: 1,

    },
    detailsRight: {
        flexGrow: 1,
        alignItems : "center",
    },

    headerLeft: {
        flexGrow: 1,
    },
    headerRight: {
        flexGrow: 1,

    },
    date: {
        marginLeft : 180,
        width: 100,
        padding: '5px',
        borderRadius: "5px",
        border : '1px solid #009f7f',
    },
    detailsTitle : {
        backgroundColor: "#009f7f",
        padding: "5px",
        width: "60%",
        color : "white",
        fontWeight :" bold",
        marginBottom : "10px",
        fontSize: "13px",
    },
    totalTitle : {
        backgroundColor: "#009f7f",
        height: "5px",
        width: "100%",
        marginBottom : "10px",
    },
    detailsInfo :{
        marginLeft: "20px",
        color: "rgb(55,65,81)",
        fontSize: "10px",
        marginBottom : "3px",
    },
    totalDetailsInfo :{
        marginLeft: "0",
        color: "rgb(55,65,81)",
        fontSize: "10px",
        marginBottom : "3px",
    },
    totalLDetailsInfo :{
        marginLeft: "0",
        color: "#000",
        fontSize: "12px",
        marginBottom : "3px",
        fontWeight : 'bold'
    },
    detailsInfoAddress :{
        marginLeft: "20px",
        color: "rgb(55,65,81)",
        fontSize: "12px",
        width: 150,
    },
    detailsInfoAddresslast :{
        marginLeft: "20px",
        marginBottom : "5px",
        color: "rgb(55,65,81)",
        fontSize: "12px",
    },
    wilaya :{
        width: 120,
        height: 120,
        textAlign : "center",
    },
    nbr :{
        fontSize: "80px",
        textAlign: 'center',
        color: "rgb(55,65,81)",
        borderBottom : "1px solid rgb(55,65,81)",
    },
    name :{
        color: "rgb(55,65,81)",
        textAlign: 'center',
        marginTop : "5px",
    },
    del : {

        width: 120,
        backgroundColor: "#009f7f",
        borderRadius: "8px",
        textAlign: 'center',
        padding: "10px 0",
        textTransform: "uppercase",
        color: "white",
        fontSize: "16px",
    },
    tableSection :{
        flexDirection: 'column',
        margin: 15,
    },
    table: {
        width: '100%',
        // height : '30%',
        color: "white",
        border : "1px solid rgb(229,231,235)",
        fontSize: "14px",
        textAlign: 'center',
    },
    tableHeader : {
        backgroundColor: "#009f7f",
        width: '100%',
        flexDirection: 'row',

    },
    tableContent : {
        backgroundColor: "white",
        width: '100%',
        flexDirection: 'row',
        color: "rgb(55,65,81)",
        borderBottom: "1px solid rgb(229,231,235)",
        fontSize: "11px",

    },

    thCnt:{
        width: '7%',
        borderRight : "1px solid rgb(229,231,235)",
        alignItems : "center",
        padding: "5px 0",
    },
    thCnti:{
        width: '7%',
        borderRight : "none",
        alignItems : "center",
        padding: "5px 0",
    },
    thDesc:{
        width: '63%',
        borderRight : "1px solid rgb(229,231,235)",
        alignItems : "center",
        padding: "5px 0",
    },
    trDesc:{
        width: '63%',
        borderRight : "1px solid rgb(229,231,235)",

        alignItems : "center",
        padding: "5px 10px",
        textAlign: 'left',
    },
        trCnt:{
        width: '7%',
        borderRight : "1px solid rgb(229,231,235)",

        alignItems : "center",
        padding: "5px 10px",
        textAlign: 'left',
    },

    thQnt:{
        width: '15%',
        borderRight : "1px solid rgb(229,231,235)",
        padding: "5px 0",
    },
    thTotal:{
        width: '15%',
        borderRight : "1px solid rgb(229,231,235)",
        padding: "5px 0",
    },
    trQnt:{
        width: '15%',
        borderRight : "1px solid rgb(229,231,235)",
        padding: "5px 0",
    },
    trTotal:{
        width: '15%',
        borderRight : "1px solid rgb(229,231,235)",
        padding: "5px 0",
    },
    totalDetailsLeft: {
        flexGrow: 1,
        width : "70%"
    },
    totalDetailsRight: {
        flexGrow: 1,
        alignItems : "left",
        width : '30%',
        marginRight :"10px"
    },
    totalInfo : {
        flexDirection: 'row',
        justifyContent : "space-between",
        marginBottom: "5px"
    }


});

const MyDocument = ({order}) => (
    <Document>
        <Page size="A4" style={styles.page} >
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
                        <Text style={styles.address} >Date : {order.created_at} </Text>
                        <Text style={styles.address} >Invoice : #{order.id} </Text>
                       </View>
                </View>
            </View>
            <View style={styles.detailsSection}>
                <View style={styles.detailsLeft}>
                    <Text style={styles.detailsTitle}>
                    Pour :
                    </Text>
                    <Text style={styles.detailsInfo} >KHIRAT oussama.</Text>
                    <Text style={styles.detailsInfoAddress} >{order.address.wilaya_id} . {order.address.wilaya_name}  {order.address.commune} {order.address.zip} Algérie.</Text>
                    {/*<Text style={styles.detailsInfoAddress} >Ouest Bordj El Baheri </Text>*/}
                    {/*<Text style={styles.detailsInfoAddresslast} >Alger. </Text>*/}
                    <Text style={styles.detailsInfo} >Phone : <Text style={styles.res}> {order.client.phone_number}.</Text> </Text>
                    <Text style={styles.detailsInfo} >Website :<Text style={styles.res}> {order.client.email}.</Text> </Text>
               </View>
                <View style={styles.detailsRight}>
                       <View style={styles.wilaya} >
                           <Text style={styles.nbr} > {order.address.wilaya_id} </Text>
                           <Text style={styles.name} > {order.address.wilaya_name} </Text>
                       </View>
                    <Text style={styles.del} >
                        {order.delivery_type}
                    </Text>
                </View>
            </View>

            <View style={styles.tableSection}>
                
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.thCnt}>
                            #
                        </Text>
                        <Text style={styles.thDesc}>
                            Description
                        </Text>
                        <Text style={styles.thQnt}>
                            Quantity
                        </Text>
                        <Text style={styles.thTotal}>
                            Total
                        </Text>
                    </View>

                    {
                        order.items.map((item,id) => (
                            <View style={styles.tableContent}>
                                <Text style={styles.trCnt}>
                                    01
                                </Text>
                                <Text style={styles.trDesc}>
                                    {item.product.name} ({item.color} / {item.size})
                                </Text>
                                <Text style={styles.trQnt}>
                                    {item.quantity}
                                </Text>
                                <Text style={styles.trTotal}>
                                    {item.quantity * item.product.price} DA
                                </Text>
                            </View>
                        ))
                    }

                    <View style={styles.tableHeader}>
                        <Text style={styles.thCnti}>

                        </Text>
                        <Text style={styles.thDesc}>

                        </Text>
                        <Text style={styles.thQnt}>
                            TOTAL
                        </Text>
                        <Text style={styles.thTotal}>
                            {order.sub_total} DA
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.detailsSection}>
                <View style={styles.totalDetailsLeft}>
                     </View>
                <View style={styles.totalDetailsRight}>
                    <View style={styles.totalInfo} >
                        <Text style={styles.totalDetailsInfo} >Sub Total</Text>
                        <Text style={styles.totalDetailsInfo} >{order.sub_total} DA</Text>
                    </View>
                    <View style={styles.totalInfo} >
                        <Text style={styles.totalDetailsInfo} >Delivery fee</Text>
                        <Text style={styles.totalDetailsInfo} > {order.delivery_fee} DA</Text>
                    </View>
                    <Text style={styles.totalTitle}>
                    </Text>
                    <View style={styles.totalInfo} >
                        <Text style={styles.totalLDetailsInfo} >TOTAL</Text>
                        <Text style={styles.totalLDetailsInfo} >{order.total} DA</Text>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);

const OrderView = ({history, currentUser, match, getOrder, getLoading, getErrors, order, states}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //get current product
    useEffect(() => {
        getOrder({id: match.params.id});
    }, [getOrder, match.params.id]);

    return (
        <div className="checkout">
            {
                getLoading
                ? <div className="card checkout-cart view-order">
                    <Spinner/>
                    </div>
                    : <>
                        <div className="card checkout-cart">
                            <div className="title">
                                <h1>Order Created</h1>
                                <p>Currently you have item(s) in your cart.</p>
                            </div>
                            <div className="progress-section">
                                <div className="progress-ct">
                                    <div className="black-scroller x-scroll">
                                        {states.map(item => {
                                            return (
                                                <div className={`progress-item ${order.state.id === item.id ? 'active' : ''}`}>
                                                    {
                                                        item.id < order.state.id
                                                        ? <>
                                                                <span><i className="fa-solid fa-check"/></span>
                                                                <p>{item.name}</p>
                                                            </>
                                                            : <>
                                                                <span>{item.id}</span>
                                                                <p>{item.name}</p>
                                                            </>
                                                    }
                                    
                                                </div>
                                            );
                                        })}
                                    
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
            }

            {
                order
               &&
                    <div className="card checkout-cart">
                        <div className="title">
                            <h1>Order Invoice</h1>
                            <p>Currently you have item(s) in your cart.</p>
                        </div>
                        <div className="order-invoice">
                            <PDFViewer width={"841.89"}  height={"1200px"} showToolbar={true}  >
                                <MyDocument order={order}/>
                            </PDFViewer>
                        </div>
                    </div>
            }


        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,

    cartItems: selectCartItems,
    total: selectCartTotal,

    getLoading: selectGetOrderLoading,
    getErrors: selectGetOrderError,
    order : selectOrderVar,
    states : selectOrderStats,
});


const mapDispatchToProps = dispatch => ({
    retrieveWilayaDetails: wilaya => dispatch(retrieveWilayaDetailsStart(wilaya)),
    getOrder: order => dispatch(getOrderStart(order)),
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderView));