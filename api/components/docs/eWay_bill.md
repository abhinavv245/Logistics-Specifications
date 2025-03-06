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
                                "code": "LINKED_PROVIDER"
                            },
                            "list": [
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
                                },
                                {
                                    "descriptor": {
                                        "code": "TAX_ID"
                                    },
                                    "value": "29GSTIN1234K2Z2"
                                }
                            ]
                        },
                        {
                            "descriptor": {
                                "code": "LINKED_ORDER"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "ID"
                                    },
                                    "value": "O1"
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
                                },
                                {
                                    "descriptor": {
                                        "code": "DIM_UNIT"
                                    },
                                    "value": "centimeter"
                                },
                                {
                                    "descriptor": {
                                        "code": "LENGTH"
                                    },
                                    "value": "1.0"
                                },
                                {
                                    "descriptor": {
                                        "code": "BREADTH"
                                    },
                                    "value": "1.0"
                                },
                                {
                                    "descriptor": {
                                        "code": "HEIGHT"
                                    },
                                    "value": "1.0"
                                }
                            ]
                        },
                        {
                            "descriptor": {
                                "code": "LINKED_ORDER_ITEM"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "CATEGORY"
                                    },
                                    "value": "Grocery"
                                },
                                {
                                    "descriptor": {
                                        "code": "NAME"
                                    },
                                    "value": "Atta"
                                },
                                {
                                    "descriptor": {
                                        "code": "CURRENCY"
                                    },
                                    "value": "INR"
                                },
                                {
                                    "descriptor": {
                                        "code": "VALUE"
                                    },
                                    "value": "70.0"
                                },
                                {
                                    "descriptor": {
                                        "code": "QUANTITY"
                                    },
                                    "value": "2"
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
                                    "value": "1.0"
                                },
                                {
                                    "descriptor": {
                                        "code": "HSN_CODE"
                                    },
                                    "value": "XXXXXXXX"
                                },
                                {
                                    "descriptor": {
                                        "code": "EBN_EXEMPT"
                                    },
                                    "value": "no"
                                }
                            ]
                        },
                        {
                            "descriptor": {
                                "code": "LINKED_ORDER_ITEM"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "CATEGORY"
                                    },
                                    "value": "Grocery"
                                },
                                {
                                    "descriptor": {
                                        "code": "NAME"
                                    },
                                    "value": "Basmati Rice"
                                },
                                {
                                    "descriptor": {
                                        "code": "CURRENCY"
                                    },
                                    "value": "INR"
                                },
                                {
                                    "descriptor": {
                                        "code": "VALUE"
                                    },
                                    "value": "160.0"
                                },
                                {
                                    "descriptor": {
                                        "code": "QUANTITY"
                                    },
                                    "value": "1"
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
                                    "value": "1.0"
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
        "version": "2.0.0",
        "action": "on_update"
    },
    "message": {
        "order": {
            "fulfillments": [
                {
                    "tags": [
                        {
                            "descriptor": {
                                "code": "EBN"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "ID"
                                    },
                                    "value": "EBN1"
                                },
                                {
                                    "descriptor": {
                                        "code": "EXPIRY_DATE"
                                    },
                                    "value": "2024-06-30T12:00:00.000Z"
                                }
                            ]
                        },
                        {
                            "descriptor": {
                                "code": "EBN"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "ID"
                                    },
                                    "value": "EBN2"
                                },
                                {
                                    "descriptor": {
                                        "code": "EXPIRY_DATE"
                                    },
                                    "value": "2024-07-01T12:00:00.000Z"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}