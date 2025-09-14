import React from 'react';
import { useCart } from '../context/CartContext';
import CustomLink from '../components/CustomLink';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, cartCount } = useCart();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-black tracking-tighter text-center uppercase mb-12">
        Your Cart
      </h1>
      {cartCount === 0 ? (
        <div className="text-center">
          <p className="text-brand-gray mb-6">Your cart is empty.</p>
          <CustomLink
            view="products"
            className="inline-block bg-brand-light text-brand-dark font-bold py-3 px-8 uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300"
          >
            Continue Shopping
          </CustomLink>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex items-center gap-4 p-4 border border-gray-800">
                  <img src={item.images[0]} alt={item.name} className="w-24 h-32 object-cover" />
                  <div className="flex-grow">
                    <CustomLink view="productDetail" params={{ id: item.id }} className="font-bold hover:underline">{item.name}</CustomLink>
                    <p className="text-sm text-brand-gray">Size: {item.selectedSize}</p>
                    <p className="text-sm text-brand-gray">${item.price.toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="text-xs text-red-500 hover:underline mt-1"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={e => {
                        const quantity = parseInt(e.target.value, 10);
                        if (!isNaN(quantity)) {
                          updateQuantity(item.id, item.selectedSize, quantity);
                        }
                      }}
                      className="w-16 bg-gray-900 border border-gray-700 text-center p-2"
                    />
                  </div>
                  <p className="font-bold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="border border-gray-800 p-6">
              <h2 className="text-xl font-bold uppercase mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2 text-brand-gray">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4 text-brand-gray">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="border-t border-gray-700 my-4"></div>
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <CustomLink
                view="checkout"
                className="block w-full text-center bg-brand-light text-brand-dark font-bold py-3 px-8 uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300"
              >
                Proceed to Checkout
              </CustomLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;