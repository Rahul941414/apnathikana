import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";
import Auth from "./components/Auth";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import RefundCancellation from "./components/RefundCancellation";
import ShippingDelivery from "./components/ShippingDelivery";

const RefundPolicy = RefundCancellation;
const CancellationPolicy = RefundCancellation;

type CartItem = {
  id: string | number;
  name: string;
  price: number;
  image?: string;
  quantity: number;
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function RequireAuth({ user, children }: { user: any; children: React.ReactNode }) {
  const location = useLocation();
  return !user ? <Navigate to="/login" state={{ from: location }} replace /> : <>{children}</>;
}

export default function App() {
  const [user, setUser] = useState<any>(() => {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  });
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      return existing ? prev.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i) : [...prev, { ...product, quantity: 1 }];
    });
  };
  const inc = (p: CartItem) => setCartItems((prev) => prev.map((i) => i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i));
  const dec = (p: CartItem) => setCartItems((prev) => prev.map((i) => i.id === p.id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i));
  const remove = (p: CartItem) => setCartItems((prev) => prev.filter((i) => i.id !== p.id));
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Products onAddToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} onInc={inc} onDec={dec} onRemove={remove} onCheckout={() => { }} />} />
            <Route path="/checkout" element={<RequireAuth user={user}><Checkout onPlaceOrder={(u) => console.log("Order placed for:", u)} /></RequireAuth>} />
            <Route path="/confirmation" element={<OrderConfirmation />} />
            <Route path="/login" element={<Auth onAuthSuccess={(u) => { setUser(u); window.location.replace("/"); }} />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund-cancellation" element={<RefundCancellation />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
            <Route path="/shipping-delivery" element={<ShippingDelivery />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <div className="border-t bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-sm">
            <div className="space-x-4">
              <Link className="hover:text-indigo-600" to="/privacy">Privacy</Link>
              <Link className="hover:text-indigo-600" to="/terms">Terms</Link>
              <Link className="hover:text-indigo-600" to="/refund-cancellation">Refunds & Cancellation</Link>
              <Link className="hover:text-indigo-600" to="/refund-policy">Refund Policy</Link>
              <Link className="hover:text-indigo-600" to="/cancellation-policy">Cancellation Policy</Link>
              <Link className="hover:text-indigo-600" to="/shipping-delivery">Shipping</Link>
            </div>
            <div className="space-x-4">
              {user ? (<><span className="text-gray-600">Hi, {user?.name || "User"}</span><button onClick={handleLogout} className="underline">Logout</button></>) : (<Link to="/login" className="underline">Login</Link>)}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
