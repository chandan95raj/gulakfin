
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);
  const { toast } = useToast();

  const handleTracking = (e) => {
    e.preventDefault();
    
    // Get orders from localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const order = orders.find(o => o.id === orderId);

    if (order) {
      setOrderStatus({
        orderId: order.id,
        items: order.items,
        total: order.total,
        status: order.status,
        date: new Date(order.date).toLocaleDateString(),
        timeline: order.timeline
      });
    } else {
      toast({
        title: "Order Not Found",
        description: "Please check your order ID and try again",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>

      <div className="max-w-xl mx-auto">
        <form onSubmit={handleTracking} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter your Order ID"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-2"
            />
            <Button type="submit">Track Order</Button>
          </div>
        </form>

        {orderStatus && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Order Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Order ID</p>
                  <p className="font-semibold">{orderStatus.orderId}</p>
                </div>
                <div>
                  <p className="text-gray-600">Order Date</p>
                  <p className="font-semibold">{orderStatus.date}</p>
                </div>
                <div>
                  <p className="text-gray-600">Status</p>
                  <p className="font-semibold">{orderStatus.status}</p>
                </div>
                <div>
                  <p className="text-gray-600">Total Amount</p>
                  <p className="font-semibold">₹{orderStatus.total.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Order Items</h3>
              <div className="space-y-4">
                {orderStatus.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Order Timeline</h3>
              <div className="space-y-4">
                {orderStatus.timeline.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-start"
                  >
                    <div className="flex items-center">
                      <div className="h-4 w-4 rounded-full bg-primary"></div>
                      {index !== orderStatus.timeline.length - 1 && (
                        <div className="h-full w-0.5 bg-gray-200 ml-2"></div>
                      )}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">{event.status}</p>
                      <p className="text-sm text-gray-600">{event.date} {event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
