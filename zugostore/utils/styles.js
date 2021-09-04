import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor:'#8142EB',
        '& a': {
            color: '#ffffff',
            marginLeft: 10,
        },
    },
    brand:{
        fontWeight:'bold',
        fontSize: '1.5rem',
        color: 'black',
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
        color: '#8142EB',
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
});

export default useStyles;