import React, { useState } from 'react';
import { MdAddCircle, MdRemoveCircle } from 'react-icons/md';

const ProductQuantity = () => {
    const [quantity, setQuantity] = useState(0);

    const increase = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrease = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div>
            <MdAddCircle onClick={increase} />
            <MdRemoveCircle onClick={decrease} />
            Quantity: {quantity}
        </div>
    );
};

export default ProductQuantity;
