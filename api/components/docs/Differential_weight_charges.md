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
    "version": "2.0.0",
    "action": "on_update"
  },
  "message": {
    "order": {
      "quote": {
        "price": {
          "currency": "INR",
          "value": "88.50"
        },
        "breakup": [
          {
            "title": "DELIVERY",
            "item": {
              "id": "I1"
            },
            "price": {
              "currency": "INR",
              "value": "50.0"
            }
          },
          {
            "title": "TAX",
            "item": {
              "id": "I1"
            },
            "price": {
              "currency": "INR",
              "value": "9.0"
            }
          },
          {
            "title": "DIFF",
            "item": {
              "id": "I1"
            },
            "price": {
              "currency": "INR",
              "value": "25.0"
            }
          },
          {
            "title": "TAX_DIFF",
            "item": {
              "id": "I1"
            },
            "price": {
              "currency": "INR",
              "value": "4.5"
            }
          }
        ]
      },
      "fulfillments": [
        {
          "tags": [
            {
              "descriptor": {
                "code": "LINKED_ORDER_DIFF"
              },
              "list": [
                {
                  "descriptor": {
                    "code": "ID"
                  },
                  "value": "RO1"
                },
                {
                  "descriptor": {
                    "code": "WEIGHT_UNIT"
                  },
                  "value": "kilogram"
                },
                {
                  "descriptor": {
                    "code": "WEIGHT_VALUE"
                  },
                  "value": "3.0"
                }
              ]
            },
            {
              "descriptor": {
                "code": "LINKED_ORDER_DIFF_PROOF"
              },
              "list": [
                {
                  "descriptor": {
                    "code": "TYPE"
                  },
                  "value": "image"
                },
                {
                  "descriptor": {
                    "code": "URL"
                  },
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
      "descriptor": {
        "code": "DIFF_DIM"
      },
      "list": [
        {
          "descriptor": {
            "code": "UNIT"
          },
          "value": "centimeter"
        },
        {
          "descriptor": {
            "code": "LENGTH"
          },
          "value": "1.5"
        },
        {
          "descriptor": {
            "code": "BREADTH"
          },
          "value": "1.5"
        },
        {
          "descriptor": {
            "code": "HEIGHT"
          },
          "value": "1.5"
        }
      ]
    },
    {
      "descriptor": {
        "code": "DIFF_WEIGHT"
      },
      "list": [
        {
          "descriptor": {
            "code": "UNIT"
          },
          "value": "kilogram"
        },
        {
          "descriptor": {
            "code": "WEIGHT"
          },
          "value": "1.5"
        }
      ]
    },
    {
      "descriptor": {
        "code": "DIFF_PROOF"
      },
      "list": [
        {
          "descriptor": {
            "code": "TYPE"
          },
          "value": "image"
        },
        {
          "descriptor": {
            "code": "URL"
          },
          "value": "https://lsp.com/sorter/images1.png"
        }
      ]
    }
  ]
}
```
