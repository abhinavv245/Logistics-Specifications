# eWay Bill - 019

## Overview
The **eWay Bill** feature supports multiple e-way bills for a single logistics order, allowing for better tracking and compliance with regulatory requirements. LBNP provides essential tax and product details, while LSP generates new e-way bills for RTO fulfillments.

## Key Features
- **Multiple e-Way Bills**: Supports multiple e-way bills linked to a single order.
- **Seller & Item-Level Attributes**: Includes HSN codes, seller GSTIN, and exemption status.
- **RTO Compliance**: LSPs generate new e-way bills for return-to-origin (RTO) fulfillments.
- **Enhanced Order Tracking**: Provides structured data for seamless logistics operations.

## Payload Changes

### **Adding Item & Seller Attributes to Linked Retail Order Details**
```json
{
  "context": {
    "action": "confirm",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "order": {
      ..
      "fulfillments": [
        {
          ..
          "tags": [
            {
              "code": "provider",
              "list": [
                {
                  "code": "name",
                  "value": "Seller1"
                },
                {
                  "code": "address",
                  "value": "shop_name,building_name,locality,city,state,pincode"
                },
                {
                  "code": "tax_id",
                  "value": "29GSTIN1234K2Z2"
                }
              ]
            },
            {
              "code": "items",
              "list": [
                {
                  "code": "category",
                  "value": "Grocery"
                },
                {
                  "code": "name",
                  "value": "Atta"
                },
                {
                  "code": "currency",
                  "value": "INR"
                },
                {
                  "code": "value",
                  "value": "70.0"
                },
                {
                  "code": "quantity",
                  "value": "2"
                },
                {
                  "code": "weight_unit",
                  "value": "kilogram"
                },
                {
                  "code": "weight_value",
                  "value": "1.0"
                },
                {
                  "code": "hsn_code",
                  "value": "XXXXXXXX"
                },
                {
                  "code": "ebn_exempt",
                  "value": "no"
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

### **Support for Multi e-Way Bills**
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
      "fulfillments": [
        {
          ..
          "tags": [
            {
              "code": "ebn",
              "list": [
                {
                  "code": "id",
                  "value": "EBN1"
                },
                {
                  "code": "expiry_date",
                  "value": "2024-06-30T12:00:00.000Z"
                }
              ]
            },
            {
              "code": "ebn",
              "list": [
                {
                  "code": "id",
                  "value": "EBN2"
                },
                {
                  "code": "expiry_date",
                  "value": "2024-07-01T12:00:00.000Z"
                }
              ]
            }
          ],
          "@ondc/org/ewaybillno": "EBN1",
          "@ondc/org/ebnexpirydate": "2023-06-30T12:00:00.000Z"
        }
      ]
    }
  }
}
