const CartSummary = ({ cart, onRemoveFromCart, onNavigateToPayment }) => (
  <div className='cart-summary'>
    <h2>장바구니</h2>
    <ul>
      {cart.map((cartItem, index) => (
        <li key={index} className='cart-item'>
          <span className='cart-item-name'>{cartItem.name}</span>
          <span className='cart-item-quantity'>{cartItem.quantity}개</span>
          <span className='cart-item-price'>
            {cartItem.price * cartItem.quantity}원
          </span>
          <button
            className='remove-from-cart-button'
            onClick={() => onRemoveFromCart(cartItem.name)}
          >
            ✖
          </button>
        </li>
      ))}
    </ul>
    <button
      className='navigate-to-payment-button'
      onClick={onNavigateToPayment}
    >
      결제창으로 이동
    </button>
  </div>
);

export default CartSummary;
