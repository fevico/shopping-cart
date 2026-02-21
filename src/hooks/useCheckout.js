import { create } from "zustand";
import { useCart } from "./useCart";

export const useCheckout = create((set, get) => ({
  loading: false,
  error: null,
  message: null,
  orders: [],

  checkout: (email) => {
    try {
      set({ loading: true, error: null, message: null });

      if (!window.PaystackPop) {
        set({
          loading: false,
          error: "Paystack script not loaded",
        });
        return;
      }

      const cart = useCart.getState().cart;

      if (!cart.length) {
        set({ loading: false, error: "Cart is empty" });
        return;
      }

      // ✅ Calculate total
      const totalAmount = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      // ✅ Generate reference
      const reference = `REF-${Date.now()}`;

      const handler = window.PaystackPop.setup({
        key: "",
        email,
        amount: totalAmount * 100,
        ref: reference,

        callback: function (response) {
          console.log("Payment success:", response);

          // ✅ Create order object ⭐⭐⭐
          const order = {
            id: reference,
            email,
            items: cart,
            total: totalAmount,
            date: new Date().toISOString(),
            status: "paid",
          };

          // ✅ Save order to localStorage ⭐⭐⭐⭐⭐
          const existingOrders =
            JSON.parse(localStorage.getItem("orders")) || [];

          localStorage.setItem(
            "orders",
            JSON.stringify([order, ...existingOrders])
          );

          // ✅ Clear cart
          useCart.getState().clearCart();

set((state) => ({
  loading: false,
  message: "Payment successful 🎉",
  orders: [...state.orders, order],   // ✅ append correctly
}));
        },

        onClose: function () {
          set({
            loading: false,
            error: "Payment cancelled",
          });
        },
      });

      handler.openIframe();
    } catch (error) {
      console.error(error);

      set({
        loading: false,
        error: "Checkout failed",
      });
    }
  },
}));