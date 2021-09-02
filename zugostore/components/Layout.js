import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {AppBar, Toolbar, Typography, Container, Link, ThemeProvider, CssBaseline, createMuiTheme} from '@material-ui/core'; 

import useStyles from '../utils/styles';

export default function Layout({title, description, children}) {
    const theme= createMuiTheme({
        typography:{
            h1:{
                fontsize:'1.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h2:{
                fontsize:'1.4rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
        },
        palette: {
            type: 'light',
            primary: {
                main: '#FCA92B',
            },
            secondary: {
                main: '#208080'
            },
        }
    });
    const classes=useStyles();
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
                            <NextLink href="/cart" passHref>
                                <Link>Cart</Link>
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
