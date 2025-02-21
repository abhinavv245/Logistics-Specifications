# Partial RTO - 018

## Overview
Partial Return to Origin (RTO) allows the **LBNP** to declare specific items that should be returned instead of returning the entire order. This provides greater flexibility in handling returns and ensures a structured RTO process.

## Key Features
- **Selective Return Handling**: Items can be marked for return at the item level rather than the entire order.
- **RTO Declaration at Fulfillment Level**: Overrides can be made at the item level by setting `return_to_origin` = `yes`.
- **Detailed Item Tracking**: RTO fulfillment includes the list of items being returned along with their attributes (weight, dimensions, quantity, etc.).
- **Enhanced Order Management**: Helps optimize logistics operations by allowing partial returns.

## LBNP Declares the Items for Return

```json
{
  "context": {
    "action": "confirm",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "order": {
      ..,
      "fulfillments": [
        {
          ..
          "tags": [
            {
              "code": "rto_action",
              "list": [
                {
                  "code": "return_to_origin",
                  "value": "yes"
                }
              ]
            },
            {
              "code": "linked_provider",
              "list": [
                {
                  "code": "id",
                  "value": "P1"
                },
                {
                  "code": "name",
                  "value": "Seller1"
                },
                {
                  "code": "address",
                  "value": "shop_name,building_name,locality,city,state,pincode"
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

## LSP Includes the Items Being Returned

```json
{
  "context": {
    "action": "on_cancel",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "order": {
      "id": "O2",
      "state": "In-progress",
      "cancellation": {
        "cancelled_by": "lsp.com",
        "reason": {
          "id": "127"
        }
      },
      ..
      "items": [
        {
          "id": "I1",
          "fulfillment_id": "1",
          ..
        },
        {
          "id": "I2",
          "fulfillment_id": "1-RTO",
          ..
        }
      ],
      ..
      "fulfillments": [
        {
          "id": "1-RTO",
          "type": "RTO",
          "state": {
            "descriptor": {
              "code": "RTO-Initiated"
            }
          },
          "tags": [
            {
              "code": "linked_provider",
              "list": [
                {
                  "code": "id",
                  "value": "P1"
                },
                {
                  "code": "name",
                  "value": "Seller1"
                },
                {
                  "code": "address",
                  "value": "shop_name,building_name,locality,city,state,pincode"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
