import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Apna Thikana – Privacy Policy</h1>
      <p className="text-gray-600 mb-6">Effective date: 11 August 2025</p>

      <div className="space-y-6 prose prose-gray max-w-none">
        <p>
          This Privacy Policy explains how Apna Thikana (“we”, “us”, “our”) collects, uses, discloses,
          and safeguards your information when you visit our website, use our app, or place an order.
          By using our services, you agree to the collection and use of information in accordance with this policy.
        </p>

        <h2>1) Information We Collect</h2>
        <ul>
          <li><b>Contact & Profile:</b> name, phone, email, address.</li>
          <li><b>Order & Transaction:</b> items ordered, amounts, payment status, timestamps.</li>
          <li><b>Technical:</b> IP address, device/browser info, approximate location, cookies.</li>
          <li><b>Support:</b> messages, attachments, and related details.</li>
        </ul>

        <h2>2) How We Use Your Information</h2>
        <ul>
          <li>To create and manage your account and orders.</li>
          <li>To process payments and send confirmations, invoices, and alerts.</li>
          <li>To provide customer support and resolve disputes.</li>
          <li>To improve our services, security, and user experience.</li>
          <li>To comply with legal obligations, tax, audit, and anti‑fraud requirements.</li>
        </ul>

        <h2>3) Payments & Third-Party Processors</h2>
        <p>
          We do <b>not</b> store full card/UPI credentials on our servers.
          Payments are processed by compliant gateways (e.g., Razorpay/UPI PSPs). The processor may receive your
          name, contact, and limited transaction details to complete the payment securely.
        </p>

        <h2>4) Cookies & Tracking</h2>
        <p>
          We use essential cookies for authentication, cart, and checkout flow.
          You can manage cookies via your browser settings; disabling some cookies may impact functionality.
        </p>

        <h2>5) Data Sharing</h2>
        <ul>
          <li><b>Service providers:</b> hosting, analytics, payment, SMS/Email providers—bound by confidentiality.</li>
          <li><b>Legal:</b> to comply with law, enforce our terms, or protect rights, property, or safety.</li>
        </ul>

        <h2>6) Data Retention</h2>
        <p>
          We retain order, invoice, and compliance records as required by law and for legitimate business purposes.
          Data that is no longer needed is securely deleted or anonymized.
        </p>

        <h2>7) Your Rights</h2>
        <ul>
          <li>Access, update, or correct your information.</li>
          <li>Request deletion where applicable (subject to legal retention).</li>
          <li>Withdraw consent where processing is based on consent.</li>
        </ul>

        <h2>8) Security</h2>
        <p>
          We use administrative, technical, and physical safeguards. However, no method of transmission or storage
          is fully secure—please use the service responsibly.
        </p>

        <h2>9) Children</h2>
        <p>Our services are not intended for children under 18. We do not knowingly collect children’s data.</p>

        <h2>10) Updates to This Policy</h2>
        <p>We may update this policy. The latest version will be posted on this page with the effective date.</p>

        <h2>11) Contact & Grievance Officer</h2>
        <p>
          Email: <a href="mailto:support@apnathikana.com">support@apnathikana.com</a><br/>
          Phone: +91-90000-90000<br/>
          Address: Apna Thikana, India
        </p>
      </div>
    </div>
  );
}
