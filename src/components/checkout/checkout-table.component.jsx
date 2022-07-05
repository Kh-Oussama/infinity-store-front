import React from 'react'
import {Icon, Label, Menu, Table} from 'semantic-ui-react'
import QuantityButton from "../utils/quantity-button/quantity-button.component";
import 'semantic-ui-css/components/menu.min.css'
import { withTranslation } from 'react-i18next';
import cookies from "js-cookie";

const CheckoutTable = ({data, removeItem, clearItem, addItem, total, t}) => {
    const lang = cookies.get('i18next') || "en";
    return (
        <>
            {
                data.length > 0 && <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell className={"image-cell"}>{t('Image')}</Table.HeaderCell>
                            <Table.HeaderCell>{t('Name')}</Table.HeaderCell>
                            <Table.HeaderCell>{t('Details')}</Table.HeaderCell>
                            <Table.HeaderCell>{t('Quantity')}</Table.HeaderCell>
                            <Table.HeaderCell>{t('Price')}</Table.HeaderCell>
                            <Table.HeaderCell>{t('Action')}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
    
                    <Table.Body>
                        {
                            data.map(item => (
                                <Table.Row>
                                    <Table.Cell>
                                        <img className={"img-checkout"} src={`http://localhost:8000/${item.images[0].path}`}
                                             alt={item.description}/>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="p-name">
                                            {item.name} <i className="fa-solid fa-right-long"/>
                                        </div>
    
                                    </Table.Cell>
                                    <Table.Cell className={"p-details"}>
                                        <div className="detail-sizes-block">
                                            <div className="detail-sizes-block-items">
                                                <div className={`category-item item`}>
                                                    {item.size?.name}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detail-sizes-block">
                                            <div className="detail-sizes-block-items">
                                                <div className={`category-item item color-cart  ${item.color?.name}`}/>
                                            </div>
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell className={"qnt-cell"}>
                                        <QuantityButton
                                            quantity={item.quantity}
                                            add={() => addItem(item)}
                                            minus={() => removeItem(item)}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        {item.price} {t('DA')}
                                    </Table.Cell>
                                    <Table.Cell  className="remove-button-check">
                                        <Label ribbon={"right"} onClick={() => clearItem(item)}>
                                            <div className="remove-button">
                                                <i className="fa-solid fa-trash-can"/>
                                                <span>{t('Remove')}</span>
                                            </div>
                                        </Label>
                                    </Table.Cell>
                                </Table.Row>
    
                            ))
                        }
    
    
                    </Table.Body>
    
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='6'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron left'/>
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right'/>
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='6'>
                                <div className="table-f" lang={lang}>
                                    <p>{t('Total Price')}</p>
                                    <p>{total} {t('DA')}</p>
                                </div>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            }
        </>
    );
}

export default withTranslation()(CheckoutTable);