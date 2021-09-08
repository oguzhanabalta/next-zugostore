import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor:'#F2BC57',
        '& a': {
            color: '#ffffff',
            marginLeft: 10,
        },
    },
    brand:{
        fontWeight:'bold',
        fontSize: '1.5rem',
    },
    grow: {
        flexGrow:1,
    },
    main: {
        minHeight: '80vh',
    },
    footer: {
        marginTop:20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#F2A950',
    },
    section: {
        marginTop:10,
        marginBottom:10,
    },
    form: {
        maxWidth: 800,
        margin: '0 auto',
    },
    navbarButton: {
        color: '#ffffff',
        textTransform: 'initial',
        marginLeft: 10,
    },
    transparentBackground: {
        backgroundColor: 'transparent',
    },
    section: {
        margin:10,
    }
});

export default useStyles;