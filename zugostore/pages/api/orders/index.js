import nc from 'next-connect';
import Order from '../../../models/Order';
import db from '../../../utils/db'
import { onError } from '../../../utils/error';
import { isAuth } from '../../../utils/auth';

const handler= nc({
    onError
});
handler.use(isAuth);


handler.post(async(req, res) => {
    await db.connect();
    const newOrder = new Order({
        ...req.body,
        user: req.user._id,
    });
    const order = await newOrder.save();
    res.status(200).send(order);
    
    
});

export default handler;