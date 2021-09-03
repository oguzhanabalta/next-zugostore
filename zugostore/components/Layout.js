import React, { useContext } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {AppBar, Toolbar,Badge, Typography, Container, Link, ThemeProvider, CssBaseline, createMuiTheme, Switch} from '@material-ui/core'; 
import { Store } from '../utils/Store';
import useStyles from '../utils/styles';
import Cookies from 'js-cookie';

export default function Layout({title, description, children}) {
    const {state, dispatch}= useContext(Store);
    const {darkMode, cart}= state; 
    const theme= createMuiTheme({
        typography:{
            h1:{
                fontSize:'5.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h2:{
                fontSize:'4.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h3:{
                fontSize:'3.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h4:{
                fontSize:'2.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h5:{
                fontSize:'1.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h6:{
                fontSize:'1rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
        },
        palette: {
            type: darkMode ? 'dark': 'light',
            primary: {
                main: '#FCA92B',
            },
            secondary: {
                main: '#208080'
            },
        }
    });
    const classes=useStyles();
    const darkModeChangeHandler = () => {
        dispatch({type: darkMode ? 'DARK_MODE_OFF': 'DARK_MODE_ON'});
        const newDarkMode= !darkMode;
        Cookies.set('darkMode', newDarkMode ? 'ON':'OFF');

    };
    return (
        <div>
            <Head>
                <title>{title ? `${title} - Next ZugoStore`: 'Next ZugoStore'}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppBar position="static" className={classes.navbar}>
                    <Toolbar>
                        <NextLink href="/" passHref>
                            <Link>
                                <Typography className={classes.brand}>ZugoStore</Typography>
                            </Link>
                        </NextLink>
                        <div className={classes.grow}></div>
                        <div>
                            <Switch checked={darkMode} onChange={darkModeChangeHandler}></Switch>
                            <NextLink href="/cart" passHref>
                                <Link> {cart.cartItems.length > 0 ? <Badge color="secondary" badgeContent={cart.cartItems.length}>Cart</Badge> : "Cart"}</Link>
                            </NextLink>
                            <NextLink href="/login" passHref>
                                <Link>Login</Link>
                            </NextLink>
                        </div>
                    </Toolbar>
                </AppBar>
                <Container className={classes.main}>
                    {children}
                </Container>
                <footer className={classes.footer}>
                    <Typography>All rights reserverd. @nextZugoStore! </Typography>
                </footer>
            </ThemeProvider>
            
            
        </div>
        
    )
}
