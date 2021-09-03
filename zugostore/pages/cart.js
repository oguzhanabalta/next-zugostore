import { Button, Grid, Link, MenuItem, Select, TableBody,Card, TableCell, TableContainer, TableHead, TableRow, Typography,Table, List, ListItem } from '@material-ui/core';
import React, { useContext } from 'react'
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import { Store } from '../utils/Store'
import NextLink from 'next/link'
import Image from 'next/image';

function CartScreen() {
    const {state} = useContext(Store);
    const {cart: {cartItems},} = state;

    return (
        <Layout title="Shoping Card">
            <Typography component="h1" variant="h1">Shopping Card</Typography>
            {cartItems.lenght === 0 ? (
                <div>
                    cart is empty
                    <NextLink href="/">Go Shopping</NextLink>
                </div>
            ): (
                <Grid container spacing={1}>
                    <Grid item md={8} xs={12}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Image</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cartItems.map((item) => (
                                        <TableRow key={item._id}>
                                            <TableCell>
                                                <NextLink href={`/product/${item.slug}`} passHref>
                                                    <Link>
                                                        <Image src={item.image} alt={item.name} width={50} height={50}></Image>
                                                    </Link>
                                                </NextLink>
                                            </TableCell>
                                            <TableCell>
                                                <NextLink href={`/product/${item.slug}`} passHref>
                                                    <Link>
                                                        <Typography>{item.name}</Typography>
                                                    </Link>
                                                </NextLink>
                                            </TableCell>
                                            <TableCell align="right">
                                                    <Select value={item.quantity}>
                                                        {[...Array(item.countInStock).keys()].map((x) => (
                                                        <MenuItem key={x+1} value={x+1}>
                                                             {x+1}    
                                                        </MenuItem>
                                                        ))}
                                                    </Select>
                                            </TableCell>
                                            <TableCell align="right">
                                                ${item.price}
                                            </TableCell>
                                            <TableCell align="right">
                                                <Button variant="contained" color="secondary">x</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid md={4} xs={12}>
                       <Card>
                           <List>
                               <ListItem>
                                   <Typography variant="h5" >
                                       Subtotoal({cartItems.reduce((a, c) => a + c.quantity, 0)} {''} items)
                                       : $ {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                                   </Typography>
                               </ListItem>
                               <ListItem>
                                   <Button variant="contained" color="primary" fullWidth>Check out</Button>
                               </ListItem>
                           </List>
                       </Card>
                    </Grid>
                </Grid>
            )}
        </Layout>
    )
}


export default dynamic(() => Promise.resolve(CartScreen), {ssr:false}); 