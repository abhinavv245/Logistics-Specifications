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
        "version": "2.0.0",
        "action": "update"
    },
    "message": {
        "update_target": "fulfillment",
        "order": {
            "fulfillments": [
                {
                    "stops": [
                        {
                            "type": "END",
                            "person": {
                                "name": "Buyer1"
                            },
                            "location": {
                                "gps": "12.453544,77.928379",
                                "address": "House #1, House or Building name, Street name",
                                "city": {
                                    "name": "Bengaluru"
                                },
                                "state": {
                                    "name": "Karnataka"
                                },
                                "country": {
                                    "name": "India"
                                },
                                "area_code": "560076"
                            },
                            "contact": {
                                "phone": "9886098860"
                            }
                        }
                    ]
                }
            ]
        }
    }
}