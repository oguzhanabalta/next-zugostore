import React from 'react';
import data from '../../utils/data';
import { useRouter } from 'next/router';

export default function ProductScreen() {
    const router = useRouter();
    const {slug} = router.query;
    const product = data.products.find((a)=> a.slug === slug)
    if(!product) {
        return <div> Product Not Found! </div>
    }
    return (
        <div>
            <h1>{product.name}</h1>
            <h2>{product.description}</h2>
        </div>
    );
}
