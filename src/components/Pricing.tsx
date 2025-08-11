import React from 'react';

export default function Pricing() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold">Pricing & Payment Policy</h1>
      <div className="prose max-w-none">
        
<p>All prices are in INR. Taxes are applied as per law. Final amount payable is shown at checkout.</p>
<h2>Payment Methods</h2>
<ul>
  <li>UPI, Cards, Netbanking (via payment gateway).</li>
  <li>Cash on Delivery may be unavailable for custom items.</li>
</ul>
<h2>Taxes & Invoices</h2>
<p>GSTIN: 27ABCDE1234F1Z5 | PAN: ABCDE1234F. Tax invoices can be requested at <a href="mailto:support@apnathikana.example">support@apnathikana.example</a>.</p>

      </div>
    </div>
  );
}