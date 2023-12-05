
// Basic Information:

// Product ID
// Product Name
// Description
// Brand
// Manufacturer
// Category (and possibly subcategories)
// Tags or Keywords
// UPC (Universal Product Code) or ISBN (for books)
// Pricing and Availability:

// Price
// Sale Price (if applicable)
// Currency
// Quantity in Stock
// Availability Status (In stock, Out of stock, Pre-order, etc.)
// Discount Percentage (if applicable)
// Images and Multimedia:

// Product Images (multiple images if necessary)
// Video URL (if applicable)
// 360-degree view images (if applicable)
// Variants:

// Size
// Color
// Weight
// Dimensions
// Material
// Flavor (if applicable)
// Technical Specifications:

// Technical details specific to the product type (e.g., screen size for electronics, resolution for cameras)
// Shipping Information:

// Weight for shipping calculations
// Dimensions for packaging
// Shipping Class (e.g., Standard, Expedited)
// Inventory Management:

// SKU (Stock Keeping Unit)
// Barcode (if different from UPC or ISBN)
// Reorder Point
// Minimum Order Quantity
// Customer Reviews and Ratings:

// Average Rating
// Number of Reviews
// Individual Customer Ratings and Reviews
// Product Features:

// Bullet points highlighting key features
// Feature Details
// Compatibility:

// Compatible Devices
// System Requirements
// Warranty and Return Information:

// Warranty Period
// Return Policy
// Warranty Details
// Related Products and Cross-Selling:

// Related Products
// Cross-Selling Suggestions
// Customization Options:

// Options for personalization or customization (e.g., engraving, monogram)
// Promotional Information:

// New Arrival
// Best Seller
// Featured Product
// Date Information:

// Date Added to Inventory
// Release Date
// Last Updated
// Social Sharing:

// Shareable URL
// Social Media Tags
// SEO Information:

// Meta Title
// Meta Description
// SEO-friendly URL
// Additional Information:

// Certifications or Awards
// User Manuals or Documentation URL
export const productsData = [
    {
        "product_id": "E001",
        "product_name": "Smartphone XYZ",
        "description": "A high-end smartphone with advanced features.",
        "brand": "ABC Electronics",
        "manufacturer": "ABC Manufacturing",
        "category": "Electronics",
        "subcategories": ["Mobile Phones", "Smartphones"],
        "tags": ["smartphone", "tech", "mobile"],
        "upc": "123456789012",
        "price": 799.99,
        "sale_price": 699.99,
        "currency": "USD",
        "quantity_in_stock": 150,
        "availability_status": "In stock",
        "discount_percentage": 12,
        "images": ["image1.jpg", "image2.jpg"],
        "video_url": "https://www.example.com/product-video",
        "variants": {
          "color": ["Black", "Silver", "Gold"],
          "size": ["64GB", "128GB", "256GB"]
        },
        "technical_specifications": {
          "screen_size": "6.5 inches",
          "processor": "Octa-core",
          "camera_resolution": "12 MP dual camera",
          "battery_life": "Up to 24 hours"
        },
        "shipping_information": {
          "weight": 0.4,
          "dimensions": {
            "length": 5.8,
            "width": 2.7,
            "height": 0.3
          },
          "shipping_class": "Standard"
        },
        "inventory_management": {
          "sku": "ELX001",
          "barcode": "987654321098",
          "reorder_point": 20,
          "min_order_quantity": 1
        },
        "customer_reviews": {
          "average_rating": 4.5,
          "number_of_reviews": 120,
          "individual_ratings": [5, 4, 3, 4.5, 5]
        },
        "warranty_and_return": {
          "warranty_period": "1 year",
          "return_policy": "30 days return"
        },
        "date_information": {
          "date_added": "2023-01-15",
          "release_date": "2022-12-01",
          "last_updated": "2023-02-20"
        }
      }
]