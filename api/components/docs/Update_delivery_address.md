# Update Delivery Address - 011

## Overview
Updating the delivery address allows for modifications to the recipient's location for both **normal** and **Return to Origin (RTO)** fulfillments. This feature ensures flexibility in logistics and enhances customer satisfaction by accommodating address changes when necessary.

## Key Features
- **Address Updates**: Modify delivery details for in-progress orders.
- **Applicable for Normal & RTO Fulfillments**: Supports changes in both standard deliveries and return shipments.
- **Enhanced Accuracy**: Ensures correct delivery by allowing last-minute updates.
- **Secure & Verified**: Address changes are structured within the fulfillment update process to maintain data integrity.

## Payload Changes

```json
{
  "context": {
    "action": "update",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "update_target": "fulfillment",
    "order": {
      ..
      "fulfillments": [
        ..
        {
          ..
          "end": {
            "person": {
              "name": "Buyer1"
            },
            "location": {
              "gps": "12.453544,77.928379",
              "address": {
                "name": "House #1",
                "building": "House or Building name",
                "locality": "Street name",
                "city": "Bengaluru",
                "state": "Karnataka",
                "country": "India",
                "area_code": "560076"
              }
            },
            "contact": {
              "phone": "9886098860",
              ..
            },
            ..
          },
          ..
        }
      ],
      ..
    }
  }
}