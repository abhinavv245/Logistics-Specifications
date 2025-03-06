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
        "version": "2.0.0",
        "action": "on_search"
    },
    "message": {
        "catalog": {
            "providers": [
                {
                    "id": "P1",
                    "items": [
                        {
                            "id": "I1",
                            "parent_item_id": "",
                            "descriptor": {
                                "code": "P2P"
                            },
                            "price": {
                                "currency": "INR",
                                "value": "59.00"
                            },
                            "tags": [
                                {
                                    "descriptor": {
                                        "code": "TYPE"
                                    },
                                    "list": [
                                        {
                                            "descriptor": {
                                                "code": "TYPE"
                                            },
                                            "value": "base"
                                        }
                                    ]
                                }
                            ],
                            "fulfillment_ids": [
                                "1"
                            ],
                            "category_ids": [
                                "Immediate Delivery"
                            ]
                        },
                        {
                            "id": "I3",
                            "parent_item_id": "",
                            "descriptor": {
                                "code": "P2P"
                            },
                            "price": {
                                "currency": "INR",
                                "value": "23.60"
                            },
                            "tags": [
                                {
                                    "descriptor": {
                                        "code": "TYPE"
                                    },
                                    "list": [
                                        {
                                            "descriptor": {
                                                "code": "TYPE"
                                            },
                                            "value": "surge"
                                        }
                                    ]
                                }
                            ],
                            "fulfillment_ids": [
                                "1"
                            ],
                            "category_ids": [
                                "Immediate Delivery"
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
        "version": "2.0.0",
        "action": "on_confirm"
    },
    "message": {
        "order": {
            "id": "O2",
            "items": [
                {
                    "id": "I1",
                    "tags": [
                        {
                            "descriptor": {
                                "code": "TYPE"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "TYPE"
                                    },
                                    "value": "base"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "I3",
                    "parent_item_id": "I1",
                    "tags": [
                        {
                            "descriptor": {
                                "code": "TYPE"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "TYPE"
                                    },
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
                        "title": "DELIVERY",
                        "item": {
                            "id": "I1"
                        },
                        "price": {
                            "currency": "INR",
                            "value": "50.00"
                        }
                    },
                    {
                        "title": "TAX",
                        "item": {
                            "id": "I1"
                        },
                        "price": {
                            "currency": "INR",
                            "value": "9.00"
                        }
                    },
                    {
                        "title": "SURGE",
                        "item": {
                            "id": "I3"
                        },
                        "price": {
                            "currency": "INR",
                            "value": "20.00"
                        }
                    },
                    {
                        "title": "TAX",
                        "item": {
                            "id": "I3"
                        },
                        "price": {
                            "currency": "INR",
                            "value": "3.60"
                        }
                    }
                ]
            }
        }
    }
}