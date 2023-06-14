import React from 'react';
import ProductRow from '../components/ProductRow';
import products from '../data/products';

const OrderPage = () => {
    const submitOrder = () => {
        // Here you'd put the code to process the order
        console.log('Order submitted!');
    };

    return (
        <>
            <h2>Order Page</h2>
            <p>Here are the products in your order:</p>
            <article>
                <table>
                    <tbody>
                        {products.map((product, index) => 
                            <ProductRow product={product} key={index} />
                        )}
                    </tbody>
                </table>
                <button onClick={submitOrder}>Submit Order</button>
            </article>
        </>
    );
};

export default OrderPage;
