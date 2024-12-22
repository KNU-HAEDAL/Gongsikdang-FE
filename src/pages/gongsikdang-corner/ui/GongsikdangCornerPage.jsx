import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonsBox } from '../components/buttons-box';
import { CartSummary } from '../components/cart-summary';
import { MenuList } from '../components/menu-list';

const GongsikdangCornerPage = ({ sector, title }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get(`/menu/info/${sector.toLowerCase()}`, {
          params: { sector },
        });
        const updatedMenu = response.data.map((item) => ({
          ...item,
          name: item.name.trim(),
          price: Number(item.price),
          quantity: 1,
        }));
        setMenuItems(updatedMenu);
      } catch (error) {
        setError('Failed to fetch menu items');
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, [sector]);

  const handleAddToCart = (item, quantity) => {
    if (quantity < 1) return;
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const handleQuantityChange = (item, delta) => {
    setMenuItems(
      menuItems.map((menuItem) =>
        menuItem.name === item.name
          ? {
              ...menuItem,
              quantity: Math.max(1, (menuItem.quantity || 1) + delta),
            }
          : menuItem
      )
    );
  };

  const handleRemoveFromCart = (itemName) => {
    setCart(cart.filter((cartItem) => cartItem.name !== itemName));
  };

  const navigateToPayment = () => {
    navigate('/payment', {
      state: { cart },
    });
  };

  return (
    <section className='info-section'>
      <div className='info-restaurant'>
        <ButtonsBox navigate={navigate} />
        <h1>{title}</h1>
        {error && <p className='error'>{error}</p>}
        <MenuList
          menuItems={menuItems}
          onQuantityChange={handleQuantityChange}
          onAddToCart={handleAddToCart}
        />
        {cart.length > 0 && (
          <CartSummary
            cart={cart}
            onRemoveFromCart={handleRemoveFromCart}
            onNavigateToPayment={navigateToPayment}
          />
        )}
      </div>
    </section>
  );
};

export default GongsikdangCornerPage;
