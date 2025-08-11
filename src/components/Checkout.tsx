
import React, { useState } from 'react';

export default function Checkout({ onPlaceOrder }: { onPlaceOrder: (u: any) => void }) {
  const [name, setName] = useState('');
  const [agree, setAgree] = useState(false);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address || !agree) {
      alert('Please fill all fields');
      return;
    }
    onPlaceOrder({ name, phone, address });
    window.location.href = '/confirmation';
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border px-4 py-2 rounded" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input className="w-full border px-4 py-2 rounded" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
        <textarea className="w-full border px-4 py-2 rounded" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
        <label className="flex items-start space-x-3 text-sm"><input type="checkbox" className="mt-1" checked={agree} onChange={e => setAgree(e.target.checked)} /><span>I have read and agree to our <a className="underline" href="/terms" target="_blank">Terms & Conditions</a>, <a className="underline" href="/refund-cancellation" target="_blank">Refund & Cancellation Policy</a> and <a className="underline" href="/privacy" target="_blank">Privacy Policy</a>.</span></label>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50" type="submit" disabled={!agree}>Place Order</button>
      </form>
    </div>
  );
}
