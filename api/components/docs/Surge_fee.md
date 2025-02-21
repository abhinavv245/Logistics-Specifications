# Surge Fee - 017

## Overview
The **Surge Fee** component allows Logistics Service Providers (LSPs) to declare an additional charge on top of the base fare for both forward and RTO shipments. This fee is dynamically applied based on demand conditions and is reflected in the final quote.

## Key Features
- **Dynamic Pricing**: Additional fee applied based on demand conditions.
- **Linked to Base Fare**: The surge fee is an add-on charge over the base fare.
- **Transparent Breakdown**: Surge fee details are included in the quote for better visibility.
- **Applicable for Both Forward & RTO Shipments**: Ensures flexibility in pricing adjustments.

## Payload Changes

### **Catalog Update with Surge Fee**
```json
{
  "context": {
    "action": "on_search",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "catalog": {
      "bpp/providers": [
        {
          "id": "P1",
          ..
          "items": [
            {
              "id": "I1",
              "parent_item_id": "",
              "category_id": "Immediate Delivery",
              "fulfillment_id": "1",
              "descriptor": {
                "code": "P2P",
                ..
              },
              "price": {
                "currency": "INR",
                "value": "59.00"
              },
              ..
              "tags": [
                {
                  "code": "type",
                  "list": [
                    {
                      "code": "type",
                      "value": "base"
                    }
                  ]
                }
              ]
            },
            {
              "id": "I3",
              "parent_item_id": "",
              "category_id": "Immediate Delivery",
              "fulfillment_id": "1",
              "descriptor": {
                "code": "P2P",
                ..
              },
              "price": {
                "currency": "INR",
                "value": "23.60"
              },
              ..
              "tags": [
                {
                  "code": "type",
                  "list": [
                    {
                      "code": "type",
                      "value": "surge"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

### **Order Confirmation with Surge Fee**
```json
{
  "context": {
    "action": "on_confirm",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "order": {
      "id": "O2",
      ..
      "items": [
        {
          "id": "I1",
          ..
          "tags": [
            {
              "code": "type",
              "list": [
                {
                  "code": "type",
                  "value": "base"
                }
              ]
            }
          ]
        },
        {
          "id": "I3",
          "parent_item_id": "I1",
          ..
          "tags": [
            {
              "code": "type",
              "list": [
                {
                  "code": "type",
                  "value": "surge"
                }
              ]
            }
          ]
        }
      ],
      "quote": {
        "price": {
          "currency": "INR",
          "value": "82.60"
        },
        "breakup": [
          {
            "@ondc/org/item_id": "I1",
            "@ondc/org/title_type": "delivery",
            "price": {
              "currency": "INR",
              "value": "50.00"
            }
          },
          {
            "@ondc/org/item_id": "I1",
            "@ondc/org/title_type": "tax",
            "price": {
              "currency": "INR",
              "value": "9.00"
            }
          },
          {
            "@ondc/org/item_id": "I3",
            "@ondc/org/title_type": "surge",
            "price": {
              "currency": "INR",
              "value": "20.00"
            }
          },
          {
            "@ondc/org/item_id": "I3",
            "@ondc/org/title_type": "tax",
            "price": {
              "currency": "INR",
              "value": "3.60"
            }
          }
        ]
      },
      ..
    }
  }
}