const Cart = () => {
  const addCart = () => {
    console.log("from add cart fn");
  };
  return (
    <div>
      <button onClick={() => addCart()}>click</button>
      from Cart
    </div>
  );
};

export default Cart;
