import { useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

export default function Payment() {
  const [loading, setLoading] = useState(false);

  const phone = localStorage.getItem("student_phone");
  const student_id = localStorage.getItem("student_id");

  // 🟢 M-Pesa payment
  
  const handleMpesa = async () => {
  setLoading(true);

  const phone = localStorage.getItem("student_phone");
  const student_id = localStorage.getItem("student_id");

  console.log("SENDING:", {
    student_id,
    phone,
    amount: 1,
    method: "mpesa"
  });

  if (!student_id || !phone) {
    alert("Missing student info. Please register again.");
    setLoading(false);
    return;
  }

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/payments/start`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student_id: Number(student_id), // ✅ FIX
        amount: 1,
        method: "mpesa",
        phone,
      }),
    });

    const data = await res.json();
    console.log("RESPONSE:", data);

    if (!res.ok) {
      alert(data.error);
      return;
    }

    alert("STK Push sent. Check your phone 📱");

  } catch (error) {
    console.error("MPESA ERROR:", error);
    alert("M-Pesa failed");
  }

  setLoading(false);
};


  // 🔵 PayPal payment
  const handlePaypal = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/api/paypal/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student_id,
        }),
      });

      const data = await res.json();

      // redirect to PayPal
      window.location.href = data.approvalLink;

    } catch (error) {
      console.error("PAYPAL ERROR:", error);
      alert("PayPal failed");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-16 space-y-6 text-center">
      <h2 className="text-2xl font-bold">Complete Your Payment</h2>

      <p className="text-gray-600">
        Choose a payment method to continue
      </p>

      <button
        onClick={handleMpesa}
        className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
        disabled={loading}
      >
        Pay with M-Pesa
      </button>

      <button
        onClick={handlePaypal}
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        disabled={loading}
      >
        Pay with PayPal
      </button>

      <button
        onClick={() => window.location.href = "/login"}
        className="w-full border py-3 rounded"
      >
        I have paid → Continue
      </button>
    </div>
  );
}
