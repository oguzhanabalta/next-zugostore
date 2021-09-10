import nc from 'next-connect';
import Order from '../../../../models/Order';
import db from '../../../../utils/db';
import isAuth from '../../../../utils/auth';

const handler= nc();
handler.use(isAuth);


handler.get(async(req, res) => {
    
    await db.connect();
    console.log('id:', req.query.id);
    const order = await Order.findById(req.query.id);
    await db.disconnect();
    res.send(order);
    
});

export default handler;