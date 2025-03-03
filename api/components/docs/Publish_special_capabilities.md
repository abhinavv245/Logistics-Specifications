# Publish Special Capabilities - 01D

## Overview
Logistics Service Providers (**LSPs**) can publish their special requirement capabilities for courier services. This allows better visibility into their ability to handle specific types of shipments.

## Key Features
- **Handling of Special Goods**: Includes the ability to transport dangerous or fragile items.
- **Cold Storage Support**: Specifies if cold storage facilities are available.
- **Open Box Delivery**: Indicates whether an open box delivery option is supported.
- **Cash-on-Delivery (COD) Orders**: Declares if COD is accepted for shipments.

## Payload Changes

### **LSP Publishes Special Requirement Capabilities**
```json
{
  "context": {
    "action": "on_search",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "catalog": {
      ..
      "bpp/providers": [
        {
          "id": "P1",
          ..
          "tags": [
            {
              "code": "special_req",
              "list": [
                {
                  "code": "dangerous_goods",
                  "value": "no"
                },
                {
                  "code": "cold_storage",
                  "value": "no"
                },
                {
                  "code": "open_box_delivery",
                  "value": "no"
                },
                {
                  "code": "fragile_handling",
                  "value": "no"
                },
                {
                  "code": "cod_order",
                  "value": "yes"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}