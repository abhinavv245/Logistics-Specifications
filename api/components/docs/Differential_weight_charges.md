# Differential Weight Charges - 021

## Overview
Logistics Service Providers (**LSPs**) notify **Logistics Buyer Network Participants (LBNPs)** of any differential weight charges due to discrepancies in actual shipment weight and dimensions. This notification can be sent via `/on_update`, `/on_status`, or `/on_cancel` (for RTO impact).

## Key Features
- **LSP Provides Updated Costs**: Includes differential cost, applicable taxes, updated weight, and dimensions.
- **LBNP Acknowledgement (ACK/NACK)**:
  - **ACK**: Accepts updated quote, and differential cost is added to total shipment cost.
  - **NACK (Error Code: 62504)**: LSP must revert the changes, and subsequent actions follow agreed terms.
- **RTO Impact**: If weight difference affects RTO costs, LSP provides updates via `/on_cancel`.

## Payload Changes

### **LSP Notifies LBNP of Differential Weight Charges**
```json
{
  "context": {
    "action": "on_update",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "order": {
      ..
      "quote": {
        "price": {
          "currency": "INR",
          "value": "88.50"
        },
        "breakup": [
          {
            "@ondc/org/item_id": "I1",
            "@ondc/org/title_type": "delivery",
            "price": {
              "currency": "INR",
              "value": "50.0"
            }
          },
          {
            "@ondc/org/item_id": "I1",
            "@ondc/org/title_type": "tax",
            "price": {
              "currency": "INR",
              "value": "9.0"
            }
          },
          {
            "@ondc/org/item_id": "I1",
            "@ondc/org/title_type": "diff",
            "price": {
              "currency": "INR",
              "value": "25.0"
            }
          },
          {
            "@ondc/org/item_id": "I1",
            "@ondc/org/title_type": "tax_diff",
            "price": {
              "currency": "INR",
              "value": "4.5"
            }
          }
        ]
      },
      "fulfillments": [
        {
          ..
          "tags": [
            ..
            {
              "code": "linked_order_diff",
              "list": [
                {
                  "code": "id",
                  "value": "RO1"
                },
                {
                  "code": "weight_unit",
                  "value": "kilogram"
                },
                {
                  "code": "weight_value",
                  "value": "3.0"
                }
              ]
            },
            {
              "code": "linked_order_diff_proof",
              "list": [
                {
                  "code": "type",
                  "value": "image"
                },
                {
                  "code": "url",
                  "value": "https://lsp.com/sorter/images1.png"
                }
              ]
            }
          ]
        }
      ],
      "updated_at": "2024-11-20T23:00:30.000Z"
    }
  }
}
```

### **Updated Weight & Dimensions**
```json
{
  "tags": [
    {
      "code": "diff_dim",
      "list": [
        {
          "code": "unit",
          "value": "centimeter"
        },
        {
          "code": "length",
          "value": "1.5"
        },
        {
          "code": "breadth",
          "value": "1.5"
        },
        {
          "code": "height",
          "value": "1.5"
        }
      ]
    },
    {
      "code": "diff_weight",
      "list": [
        {
          "code": "unit",
          "value": "kilogram"
        },
        {
          "code": "weight",
          "value": "1.5"
        }
      ]
    },
    {
      "code": "diff_proof",
      "list": [
        {
          "code": "type",
          "value": "image"
        },
        {
          "code": "url",
          "value": "https://lsp.com/sorter/images1.png"
        }
      ]
    }
  ]
}
