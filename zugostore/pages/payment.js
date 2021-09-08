import {
    Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import CheckOutWizard from "../components/CheckOutWizard";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import useStyles from "../utils/styles";
import { useSnackbar } from 'notistack';

export default function Payment() {
  const {enqueueSnackbar, closeSnackbar} = useSnackbar();
  const classes = useStyles();
  const router  = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("");
  const { state, dispatch } = useContext(Store);
  const {
    cart: { shippingAddress },
  } = state;
  useEffect(() => {
    if (!shippingAddress.address) {
        console.log('adres yok');
    } else {
      setPaymentMethod(Cookies.get("paymentMethod") || "");
    }
  }, []);
  const submitHandler = (e) => {
    closeSnackbar();
    e.preventDefault();
    if(!paymentMethod) {
      enqueueSnackbar('Payment method is required', {variant:'error'});
    } else {
      dispatch({type:'SAVE_PAYMENT_METHOD', payload: paymentMethod});
      Cookies.set('paymentMethod', paymentMethod);
      router.push('placeholder');
    }
  };
  return (
    <Layout title="Payment Method">
      <CheckOutWizard activeStep={2}></CheckOutWizard>
      <form className={classes.form} onSubmit={submitHandler}>
        <Typography component="h2" variant="h2">
          Payment Method
        </Typography>
        <List>
          <ListItem>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="Payment Method"
                name="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                  <FormControlLabel  label="PayPal" value="PayPal" control={<Radio/>}></FormControlLabel>
                  <FormControlLabel label="Stripe" value="Stripe" control={<Radio/>}></FormControlLabel>
                  <FormControlLabel label="Cash" value="Cash" control={<Radio/>}></FormControlLabel>
              </RadioGroup>
            </FormControl>
          </ListItem>
          <ListItem>
                <Button variant="contained" type="submit" fullWidth color="primary">Continue</Button>
          </ListItem>
          <ListItem>
                <Button variant="contained" type="submit" fullWidth color="secondary" onClick={() => router.push('/shipping')}>Back</Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
