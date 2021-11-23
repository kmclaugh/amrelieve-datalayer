/*
 * action:          check out step 3
 * description:     fire on the payment info page of the checkout
 * reference: https://www.simoahava.com/analytics/enhanced-ecommerce-guide-for-google-tag-manager/#checkout
 */
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "eec.checkout",
  eecEventName: "Checkout - Payment Info",
  ecommerce: {
    checkout: {
      actionField: {
        step: "3",
        name: "Payment Info",
        option: "{{checkout.payment_method}}", // Visa
      },
      products: [
        // include all products in the user's cart
        {
          id: "{{ product.id }}", // '7038955749537' // use product id not variant id
          name: "{{product.title}}", // 'Ultra Knee Elite™ - Gray - Womens - NEW - X2'
          quantity: "{{product.quantity}}", // 1
          brand: "amrelieve",
          price: "{{product.price}}", // 97.00 // make sure the price is a number ie 10.00 not $10.00
          sku: "{{variant.sku}}", // ultra-knee-elite-gray-m/l
          variantId: "{{variant.id}}", // '40997003067553'
        },
        {
          id: "{{ product.id }}", // '6914426142881' // use product id not variant id
          name: "{{product.title}}", // 'SootheSocks™ White NEW - X1'
          quantity: "{{product.quantity}}", // 1
          brand: "amrelieve",
          price: "{{product.price}}", // 39.65 // make sure the price is a number ie 10.00 not $10.00
          sku: "{{variant.sku}}", // SootheSocks White-1
          variantId: "{{variant.id}}", // '41030925418657'
        },
      ],
    },
  },
});
