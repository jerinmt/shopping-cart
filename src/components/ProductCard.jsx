import { useState } from "react";

function ProductCard({item, cartList}) {
    const [quantity, setQuantity] = useState(cartList[item.id - 1]);

    const addCartHandler = () => {
        if(cartList[item.id - 1] >= 3) {
            alert("You can only add up to 3 items of this product to the cart.");
            return;
        }
        cartList[item.id - 1] += 1;
        setQuantity(quantity => quantity + 1);
    };
    const removeCartHandler = () => {
        if(cartList[item.id - 1] !== 0) {
            cartList[item.id - 1] -= 1;
            setQuantity(quantity => quantity - 1);
        }
    };

    return (
        <>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title}/>
            <p>{item.description}</p>
            <p>Price: Rs. {item.price}</p>
            <button onClick={addCartHandler}>Add 1 to Cart</button>
            <button onClick={removeCartHandler}>Remove 1 from Cart</button>
            <p>Quantity in Cart: {quantity}</p>
        </>
    );
}

export default ProductCard;
