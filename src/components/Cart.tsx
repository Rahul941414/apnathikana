
import React from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  image?: string;
  quantity: number;
};

export default function Cart({
  cartItems,
  onInc,
  onDec,
  onRemove,
  onCheckout,
}: {
  cartItems: CartItem[];
  onInc: (p: CartItem) => void;
  onDec: (p: CartItem) => void;
  onRemove: (p: CartItem) => void;
  onCheckout: () => void;
}) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="bg-white rounded-xl p-10 text-center shadow">
          <p className="text-gray-600">Your cart is empty.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4 shadow flex gap-4 items-center">
                {item.image && (
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded object-cover" />
                )}
                <div className="flex-1">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">₹{item.price} each</p>
                  <div className="mt-3 inline-flex items-center gap-2">
                    <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => onDec(item)}>-</button>
                    <span className="min-w-[2rem] text-center">{item.quantity}</span>
                    <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => onInc(item)}>+</button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">₹{item.price * item.quantity}</p>
                  <button className="text-red-600 mt-2" onClick={() => onRemove(item)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <aside className="bg-white rounded-xl p-6 shadow h-fit">
            <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
            <div className="flex justify-between text-gray-600 mb-1">
              <span>Subtotal</span><span>₹{total}</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-4">
              <span>Delivery</span><span>₹0</span>
            </div>
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total</span><span>₹{total}</span>
            </div>
            <button
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl shadow hover:opacity-90 transition"
              onClick={onCheckout}
            >
              Proceed to Checkout
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
