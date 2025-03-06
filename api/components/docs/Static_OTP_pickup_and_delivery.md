# Static OTP Verification (Pickup & Delivery) - 009

## Overview
Static OTP verification is a method used to ensure secure pickup and delivery of orders by requiring an OTP at key fulfillment stages. This enhances security by ensuring that only authorized personnel can complete the transaction.

## Key Features
- **Static OTP**: A fixed OTP assigned for an order, without time validity.
- **Dynamic OTP**: An OTP that is valid only for a specific time period.
- **Enhanced Security**: Prevents unauthorized pickups and deliveries.
- **LSP Restrictions**: Logistics service providers (LSPs) should not share OTPs with riders; OTPs must be provided by the end seller or buyer.

## Pickup & Delivery Verification Modes

- **Static OTP** - Static for the order, without any time validity.
- **Dynamic OTP** - With time validity.

## Proposed Flow for Verification

1. **LBNP requests for LSP** that supports pickup and/or delivery verification using static OTP.
2. **LBNP creates verification code** for pickup:
   - `/confirm` - LBNP sends OTP to LSP.
   - **LSP should not forward OTP** to the rider, as it will be provided by the end seller for verification at pickup.
3. **LBNP creates verification code** for delivery:
   - LBNP sends OTP to BNP (`/on_confirm` for on-network retail BNP) & to LSP (`/confirm`).
   - **LSP should not forward OTP** to the rider, as it will be provided by the end buyer for verification at delivery.

## Pickup Verification

1. **Rider provides (merchant) order number** to end seller at the time of pickup.
2. **Seller provides pickup OTP** to the rider.
3. **Rider updates fulfillment state** to `"Order-picked-up"`, with pickup OTP in `/on_status`, for verification by LSP.

## Delivery Verification

1. **Buyer provides delivery OTP** at the time of order delivery.
2. **Rider updates fulfillment state** to `"Order-delivered"`, with delivery OTP in `/on_status`, for verification by LSP.

## Payload Changes

```json
{
    "context": {
        "version": "2.0.0",
        "action": "search"
    },
    "message": {
        "intent": {
            "fulfillment": {
                "type": "Delivery",
                "stops": [
                    {
                        "type": "START",
                        "instructions": {
                            "code": "5"
                        }
                    },
                    {
                        "type": "END",
                        "instructions": {
                            "code": "5"
                        }
                    }
                ]
            },
            "tags": []
        }
    }
}
```

```json
{
    "context": {
        "version": "2.0.0",
        "action": "confirm"
    },
    "message": {
        "order": {
            "id": "LO1",
            "fulfillments": [
                {
                    "id": "F1",
                    "type": "Delivery",
                    "stops": [
                        {
                            "type": "START",
                            "instructions": {
                                "code": "5",
                                "short_desc": "9876"
                            }
                        },
                        {
                            "type": "END",
                            "instructions": {
                                "code": "5",
                                "short_desc": "5432"
                            }
                        }
                    ],
                    "tags": [
                        {
                            "descriptor": {
                                "code": "LINKED_ORDER"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "ID"
                                    },
                                    "value": "RO1"
                                }
                            ]
                        }
                    ]
                }
            ],
            "status": "Created"
        }
    }
}
```

```json
{
    "context": {
        "version": "2.0.0",
        "action": "on_status"
    },
    "message": {
        "order": {
            "id": "LO1",
            "fulfillments": [
                {
                    "id": "F1",
                    "state": {
                        "descriptor": {
                            "code": "Order-picked-up"
                        }
                    },
                    "type": "Delivery",
                    "stops": [
                        {
                            "type": "START",
                            "time": {
                                "timestamp": "2024-10-16T07:00:00.000Z"
                            },
                            "instructions": {
                                "code": "5",
                                "short_desc": "9876"
                            }
                        },
                        {
                            "type": "END",
                            "time": {
                                "timestamp": "2024-10-16T07:30:00.000Z"
                            },
                            "instructions": {
                                "code": "5",
                                "short_desc": "5432"
                            }
                        }
                    ],
                    "tags": [
                        {
                            "descriptor": {
                                "code": "LINKED_ORDER"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "ID"
                                    },
                                    "value": "RO1"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}```