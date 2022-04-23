import React from 'react'
import {Label, Table} from 'semantic-ui-react'

const CheckoutTable = ({ data }) => (
    <>
        {
            data.length > 0 && <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        data.map(item => (
                            <Table.Row>
                                <Table.Cell>
                                    <Label ribbon>{item.name}</Label>
                                </Table.Cell>
                                <Table.Cell>{item.content}</Table.Cell>
                            </Table.Row>
                        ))
                    }


                </Table.Body>

                {/*<Table.Footer>*/}
                {/*    <Table.Row>*/}
                {/*        <Table.HeaderCell colSpan='3'>*/}
                {/*            <Menu floated='right' pagination>*/}
                {/*                <Menu.Item as='a' icon>*/}
                {/*                    <Icon name='chevron left' />*/}
                {/*                </Menu.Item>*/}
                {/*                <Menu.Item as='a'>1</Menu.Item>*/}
                {/*                <Menu.Item as='a'>2</Menu.Item>*/}
                {/*                <Menu.Item as='a'>3</Menu.Item>*/}
                {/*                <Menu.Item as='a'>4</Menu.Item>*/}
                {/*                <Menu.Item as='a' icon>*/}
                {/*                    <Icon name='chevron right' />*/}
                {/*                </Menu.Item>*/}
                {/*            </Menu>*/}
                {/*        </Table.HeaderCell>*/}
                {/*    </Table.Row>*/}
                {/*</Table.Footer>*/}
            </Table>
        }
    </>
)

export default CheckoutTable;