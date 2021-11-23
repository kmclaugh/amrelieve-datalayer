/*
 * action:          purchase
 * description:     fire when the user actually completes the purchase
 * reference: https://www.simoahava.com/analytics/enhanced-ecommerce-guide-for-google-tag-manager/#purchase
 */
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "eec.purchase",
  eecEventName: "Purchase",
  ecommerce: {
    currencyCode: "{{checkout.current_code}}", // USD // the currency of the checkout
    purchase: {
      actionField: {
        id: "{{checkout.order_number}}", // 12345 // The order number
        affiliation: "amrelieve",
        revenue: "{{checkout.total_price}}", // 136.65 // the total transaction value
        tax: "{{checkout.tax_price}}", // 5.0 // the tax paid
        shipping: "{{checkout.shipping_price}}", // 10.0 // cost of shipping
        coupon: "{{discount.code}}", // SUMMER2020 // the discount code used
      },
      products: [
        // include all purchases items
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
