import React from 'react';

export default function ShippingDelivery() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Apna Thikana – Shipping & Delivery</h1>
      <p className="text-gray-600 mb-6">Effective date: 11 August 2025</p>

      <div className="space-y-6 prose prose-gray max-w-none">
        <h2>Serviceability</h2>
        <p>Delivery is subject to serviceable PIN codes and courier/partner availability.</p>

        <h2>Timelines</h2>
        <ul>
          <li>Standard deliveries: typically 2–7 business days (location dependent).</li>
          <li>Delays may occur due to weather, strikes, or other force majeure events.</li>
        </ul>

        <h2>Charges</h2>
        <p>Applicable shipping or convenience fees will be shown at checkout before payment.</p>

        <h2>Verification & Handover</h2>
        <ul>
          <li>Receiver may be asked for OTP/ID verification.</li>
          <li>If packaging appears tampered, please refuse delivery and contact support immediately.</li>
        </ul>

        <h2>Contact</h2>
        <p>Support: +91-90000-90000 | support@apnathikana.com</p>
      </div>
    </div>
  );
}
