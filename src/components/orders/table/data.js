export const data = [
    {
      "orderNo": "ORD00001",
      "orderDate": "2023-01-15T09:30:00Z",
      "payableAmount": 3335.56,
      "email": "customer1@example.com",
      "customer": "Roggers Ogao",
      "orderStatus": "completed",
      "paymentStatus": "paid",
      "paymentMethod": "Credit Card",
      "taxRate": 0.08,
      "totalTax": 12.08,
      "discountType": "percentage",
      "discountValue": 10,
      "promo":"AVT001",
      "promoValue":0,
      "billingAddress": "123 Main Street, Cityville",
      "billingContact": "0700601885",
      "products": [
        {
          "productBrand": "Nike",
          "productName":"Air Force",
          "productDetails":
            {
                size:"42",
                color:"red",
            }
          ,
          "unitPrice": 3035.56,
          "quantity": 1,
          "amount": 3035.56
        },
        // Add more products as needed
      ],
      "shippingAddress": "123 Main Street, Cityville",
      "shippingContact": "John Doe",
      "shippingFee": 400,
      "shipmentID": "SHP0000001",
      "customerNotes": "Please deliver during office hours.",
      "orderHistory": [
        {
          "status": "payment completed",
          "timestamp": "2023-01-15T09:30:00Z"
        }
      ]
    },
    {
      "orderNo": "ORD00002",
      "orderDate": "2023-01-18T11:40:00Z",
      "payableAmount": 220.50,
      "email": "customer2@example.com",
      "customer": "Jane Smith",
      "orderStatus": "accepted",
      "paymentStatus": "unpaid",
      "paymentMethod": "PayPal",
      "taxRate": 0.1,
      "totalTax": 22.05,
      "discountType": "fixed",
      "discountValue": 15.00,
      "promo":"AVT002",
      "promoValue":0,
      "billingAddress": "456 Oak Avenue, Townsville",
      "billingContact": "Jane Smith",
      "products": [
        {
          "productBrand": null,
          "productName":"Pliers",
          "productDetails":
            {
                size:"42",
                color:"red",
            },
          "unitPrice": 3035.56,
          "quantity": 1,
          "amount": 3035.56
        },
        // Add more products as needed
      ],
      "shippingAddress": "456 Oak Avenue, Townsville",
      "shippingContact": "Jane Smith",
      "shippingFee": 15.00,
      "shipmentID": "SHP000002",
      "customerNotes": null,
      "timestamps": {
        "created": "2023-01-18T11:45:00Z",
        "modified": "2023-01-18T12:30:00Z"
      },
      "orderHistory": [
        {
          "status": "payment completed",
          "timestamp": "2023-01-18T12:00:00Z"
        },
        {
          "status": "accepted",
          "timestamp": "2023-01-18T12:30:00Z"
        },
        // Add more history entries as needed
      ]
    }
    // Add more orders as needed
  ]
  