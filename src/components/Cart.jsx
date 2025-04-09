
import React from "react";
import { motion } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import useCartStore from "../store/cartStore";
import { useToast } from "./ui/use-toast";

const Cart = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, clearCart, getTotal } = useCartStore();
  const { toast } = useToast();

  const handleCheckout = () => {
    const options = {
      key: "rzp_live_nHCssMBcpj1kDI",
      amount: getTotal() * 100,
      currency: "INR",
      name: "Gulak Fin Shop",
      description: "Purchase from Gulak Fin Shop",
      image: "/logo.png",
      handler: function(response) {
        // Store order details in localStorage for tracking
        const orderId = response.razorpay_payment_id;
        const orderDetails = {
          id: orderId,
          items: items,
          total: getTotal(),
          status: "Order Placed",
          date: new Date().toISOString(),
          timeline: [
            {
              status: "Order Placed",
              date: new Date().toLocaleDateString(),
              time: new Date().toLocaleTimeString(),
            }
          ]
        };
        
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push(orderDetails);
        localStorage.setItem('orders', JSON.stringify(orders));

        toast({
          title: "Payment Successful",
          description: `Order ID: ${orderId}`,
        });
        clearCart();
        onClose();
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        merchant_order_id: "GULAK-" + Date.now(),
        merchant_id: "PRtTTcF7156tEc"
      },
      theme: {
        color: "#4F46E5",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
    >
      <div className="fixed inset-y-0 right-0 max-w-full w-96 bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <ShoppingBag className="h-12 w-12 mb-4" />
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                  >
                    <img
                      src={item.image || "https://via.placeholder.com/100"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">{item.price}</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-1 border rounded-l"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border-t border-b">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 border rounded-r"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 hover:bg-gray-200 rounded-full"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>₹{getTotal().toLocaleString()}</span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full"
                size="lg"
              >
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
