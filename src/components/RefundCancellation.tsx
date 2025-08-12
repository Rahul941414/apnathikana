import React from 'react';

export default function RefundCancellation() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Apna Thikana – Refund & Cancellation Policy</h1>
      <p className="text-gray-600 mb-6">Effective date: 11 August 2025</p>

      <div className="space-y-6 prose prose-gray max-w-none">
        <h2>1) General</h2>
        <p>
          All payments are final once an order is confirmed. However, we understand exceptions may be required.
          This policy describes when refunds or cancellations may be approved.
        </p>

        <h2>2) Eligible Cases</h2>
        <ul>
          <li>Duplicate payment charged to your account.</li>
          <li>Failed transaction where money is debited but order not created.</li>
          <li>Order not delivered due to our operational fault.</li>
          <li>Order cancelled by us due to unavailability or unserviceable address.</li>
        </ul>

        <h2>3) Non‑Refundable / Ineligible Cases</h2>
        <ul>
          <li>Change of mind after confirmation where preparation/dispatch has started.</li>
          <li>Wrong address/contact details provided by the customer.</li>
          <li>Failure to accept delivery or verify OTP/ID if required.</li>
        </ul>

        <h2>4) How to Request</h2>
        <p>
          Email <a href="mailto:support@apnathikana.com">support@apnathikana.com</a> within 48 hours of the transaction
          with order ID, payment reference, and issue details. We may ask for additional proof (screenshots, bank SMS).
        </p>

        <h2>5) Processing Time</h2>
        <p>Approved refunds are initiated within 3–7 business days to the original payment method. Bank posting time may vary.</p>

        <h2>6) Cancellations</h2>
        <ul>
          <li>Customer cancellation is allowed only before order preparation/dispatch starts.</li>
          <li>For digital services, cancellation is allowed until service delivery or login/access is shared.</li>
        </ul>

        <h2>7) Chargebacks</h2>
        <p>Please contact us before raising a chargeback. Unfounded chargebacks may lead to account action.</p>

        <h2>8) Contact</h2>
        <p>For any refund/cancellation query: +91-8504980705 | support@apnathikana.com | Rahul Meena</p>
      </div>
    </div>
  );
}
