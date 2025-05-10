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
        "version": "2.0.0",
        "action": "on_search"
    },
    "message": {
        "catalog": {
            "providers": [
                {
                    "id": "P1",
                    "tags": [
                        {
                            "descriptor": {
                                "code": "SPECIAL_REQ"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "DANGEROUS_GOODS"
                                    },
                                    "value": "no"
                                },
                                {
                                    "descriptor": {
                                        "code": "COLD_STORAGE"
                                    },
                                    "value": "no"
                                },
                                {
                                    "descriptor": {
                                        "code": "OPEN_BOX_DELIVERY"
                                    },
                                    "value": "no"
                                },
                                {
                                    "descriptor": {
                                        "code": "FRAGILE_HANDLING"
                                    },
                                    "value": "no"
                                },
                                {
                                    "descriptor": {
                                        "code": "COD_ORDER"
                                    },
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