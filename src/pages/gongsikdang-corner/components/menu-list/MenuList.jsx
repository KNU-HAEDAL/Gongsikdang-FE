const MenuList = ({ menuItems, onQuantityChange, onAddToCart }) => (
  <ul className='menu-list'>
    {menuItems.map((item, index) => (
      <li key={index} className='menu-item'>
        <img
          src={`/images2/${item.name.replace(/\s/g, '')}.PNG`}
          alt={item.name}
          className='menu-item-image'
          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          onError={(e) => (e.target.src = '/images2/default.png')}
        />
        <h3 className='menu-item-name'>{item.name}</h3>
        <div className='menu-item-details'>
          <p>가격: {item.price}원</p>
          <p>남은 수량: {item.number || 0}개</p>
          <div className='quantity-controls'>
            <button onClick={() => onQuantityChange(item, -1)}>-</button>
            <span>{item.quantity || 1}</span>
            <button onClick={() => onQuantityChange(item, 1)}>+</button>
          </div>
          <button
            className='add-to-cart-button'
            onClick={() => onAddToCart(item, item.quantity || 1)}
          >
            담기
          </button>
        </div>
      </li>
    ))}
  </ul>
);

export default MenuList;
