"use client";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function BillingPage() {
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      image: "/images/mon.png",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 1100,
      image: "/images/controller.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 flex-wrap">
        <span>Account</span> /<span>My Account</span> /<span>Product</span> /
        <span>View Cart</span> /<span>CheckOut</span>
      </div>

      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Billing Details
      </h1>

      <div className="grid lg:grid-cols-5 gap-8">
        <form className="lg:col-span-3 space-y-5">
          <div>
            <input
              type="text"
              placeholder="First Name*"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Street Address*"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Apartment, floor, etc. (optional)"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Town/City*"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number*"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address*"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="saveInfo"
              className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
            />
            <label htmlFor="saveInfo" className="text-gray-600">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>

        <div className="lg:col-span-2 bg-gray-50 p-6 rounded-lg h-fit">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-b-0"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-md"
              />
              <span className="flex-1 text-gray-800">{item.name}</span>
              <span className="font-semibold text-gray-900">${item.price}</span>
            </div>
          ))}

          <div className="mt-6 space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal:</span>
              <span>1750</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping:</span>
              <span>0</span>
            </div>
            <div className="flex justify-between text-lg font-semibold text-gray-900 pt-3 border-t border-gray-200">
              <span>Total:</span>
              <span>1750</span>
            </div>
          </div>

          <div className="mt-6 space-y-4 border-t border-b border-gray-200 py-6">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="bank"
                name="payment"
                className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
              />
              <label htmlFor="bank" className="text-gray-800">
                Bank
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="cash"
                name="payment"
                className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
              />
              <label htmlFor="cash" className="text-gray-800">
                Cash on delivery
              </label>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex gap-3 flex-col sm:flex-row">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
              />
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all whitespace-nowrap">
                Apply Coupon
              </button>
            </div>
            <button className="w-full bg-red-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-600 transition-all">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
