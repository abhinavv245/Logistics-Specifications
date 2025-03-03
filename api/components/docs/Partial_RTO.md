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
        "version": "2.0.0",
        "action": "confirm"
    },
    "message": {
        "order": {
            "fulfillments": [
                {
                    "tags": [
                        {
                            "descriptor": {
                                "code": "RTO_ACTION"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "RETURN_TO_ORIGIN"
                                    },
                                    "value": "yes"
                                }
                            ]
                        },
                        {
                            "descriptor": {
                                "code": "LINKED_PROVIDER"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "ID"
                                    },
                                    "value": "P1"
                                },
                                {
                                    "descriptor": {
                                        "code": "NAME"
                                    },
                                    "value": "Seller1"
                                },
                                {
                                    "descriptor": {
                                        "code": "ADDRESS"
                                    },
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
        "version": "2.0.0",
        "action": "on_cancel"
    },
    "message": {
        "order": {
            "id": "O2",
            "cancellation": {
                "cancelled_by": "lsp.com",
                "reason": {
                    "id": "127"
                }
            },
            "items": [
                {
                    "id": "I1",
                    "fulfillment_ids": [
                        "1"
                    ]
                },
                {
                    "id": "I2",
                    "fulfillment_ids": [
                        "1-RTO"
                    ]
                }
            ],
            "fulfillments": [
                {
                    "id": "1-RTO",
                    "state": {
                        "descriptor": {
                            "code": "RTO-Initiated"
                        }
                    },
                    "type": "RTO",
                    "tags": [
                        {
                            "descriptor": {
                                "code": "LINKED_PROVIDER"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "ID"
                                    },
                                    "value": "P1"
                                },
                                {
                                    "descriptor": {
                                        "code": "NAME"
                                    },
                                    "value": "Seller1"
                                },
                                {
                                    "descriptor": {
                                        "code": "ADDRESS"
                                    },
                                    "value": "shop_name,building_name,locality,city,state,pincode"
                                }
                            ]
                        }
                    ]
                }
            ],
            "status": "In-progress"
        }
    }
}