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
        textAlign: 'center',
    },
});

export default useStyles;