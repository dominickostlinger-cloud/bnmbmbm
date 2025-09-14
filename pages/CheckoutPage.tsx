import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigation } from '../context/NavigationContext';
import CustomLink from '../components/CustomLink';

const CheckoutPage: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { navigate } = useNavigation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process payment
    alert('Thank you for your order! (This is a demo)');
    clearCart();
    navigate('home');
  };

  if (cartItems.length === 0) {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
             <p className="text-brand-gray mb-6">Your cart is empty. You cannot proceed to checkout.</p>
            <CustomLink
                view="products"
                className="inline-block bg-brand-light text-brand-dark font-bold py-3 px-8 uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300"
            >
                Start Shopping
            </CustomLink>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-black tracking-tighter text-center uppercase mb-12">
        Checkout
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Shipping Form */}
        <div>
          <h2 className="text-xl font-bold uppercase mb-6">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="email" placeholder="Email" required className="w-full p-3 bg-gray-900 border border-gray-700 focus:outline-none focus:border-white" />
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" required className="w-1/2 p-3 bg-gray-900 border border-gray-700 focus:outline-none focus:border-white" />
              <input type="text" placeholder="Last Name" required className="w-1/2 p-3 bg-gray-900 border border-gray-700 focus:outline-none focus:border-white" />
            </div>
            <input type="text" placeholder="Address" required className="w-full p-3 bg-gray-900 border border-gray-700 focus:outline-none focus:border-white" />
            <div className="flex gap-4">
              <input type="text" placeholder="City" required className="w-1/2 p-3 bg-gray-900 border border-gray-700 focus:outline-none focus:border-white" />
              <input type="text" placeholder="Postal Code" required className="w-1/2 p-3 bg-gray-900 border border-gray-700 focus:outline-none focus:border-white" />
            </div>
            <input type="text" placeholder="Country" required className="w-full p-3 bg-gray-900 border border-gray-700 focus:outline-none focus:border-white" />
            <h2 className="text-xl font-bold uppercase mb-4 pt-8">Payment Details</h2>
            <p className="text-brand-gray text-sm">This is a demo. No real payment will be processed.</p>
            <div className="p-4 border border-gray-700 text-brand-gray">Mock Credit Card Input</div>
            <button type="submit" className="w-full bg-brand-light text-brand-dark font-bold py-4 mt-6 uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="border border-gray-800 p-6 h-fit">
          <h2 className="text-xl font-bold uppercase mb-6">Your Order</h2>
          <div className="space-y-4 mb-6">
            {cartItems.map(item => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex items-center gap-4">
                <div className="relative">
                    <img src={item.images[0]} alt={item.name} className="w-16 h-20 object-cover" />
                    <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-brand-dark bg-brand-light rounded-full">{item.quantity}</span>
                </div>
                <div className="flex-grow">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-brand-gray">Size: {item.selectedSize}</p>
                </div>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-4 space-y-2">
             <div className="flex justify-between text-brand-gray">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-brand-gray">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-2">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;