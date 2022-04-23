import React from 'react'
import {Icon, Label, Menu, Table} from 'semantic-ui-react'
import QuantityButton from "../utils/quantity-button/quantity-button.component";
import RemoveButton from "../utils/remove-button/remove-button.component";
import 'semantic-ui-css/components/menu.min.css'
import CloseIcon from "../icons/close-icon.component";

const CheckoutTable = ({ data, removeItem,  clearItem, addItem }) => (
    <>
        {
            data.length > 0 && <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell className={"image-cell"}>Image</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell >Details</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        data.map(item => (
                            <Table.Row>
                                <Table.Cell>
                                    <img className={"img-checkout"} src={`http://localhost:8000/${item.images[0].path}`} alt={item.description} />
                                </Table.Cell>
                                <Table.Cell>
                                    {item.name}
                                </Table.Cell>
                                <Table.Cell className={"p-details"}>
                                    <div className="detail-sizes-block" >
                                        <div className="detail-sizes-block-items" >
                                            <div className={`category-item item`}>
                                                {item.size?.name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail-sizes-block" >
                                        <div className="detail-sizes-block-items" >
                                            <div className={`category-item item color-cart  ${item.color?.name}`} />
                                        </div>
                                    </div>
                                </Table.Cell>
                                <Table.Cell >
                                    <QuantityButton quantity={item.quantity} add={() => addItem(item)} minus={() => removeItem(item)} />
                                </Table.Cell>
                                <Table.Cell>
                                    {item.price} DA
                                </Table.Cell>
                                <Table.Cell>
                                    <Label  ribbon={"right"}><RemoveButton remove={() => clearItem(item)}/></Label>

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
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        }
    </>
)

export default CheckoutTable;