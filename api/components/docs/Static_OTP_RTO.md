# Static OTP Verification (RTO) - 00A

## Overview
Static OTP verification for **Return to Origin (RTO)** ensures that return deliveries are authenticated securely. By using a **static OTP**, the system ensures that only authorized returns are completed, reducing the risk of fraud and incorrect returns.

## Key Features
- **Secure RTO Process**: Ensures only valid returns are processed by requiring OTP authentication.
- **LSP Restrictions**: Logistics Service Providers (LSPs) should not share OTPs with riders; the OTP is provided by the end seller.
- **Order Tracking**: Captures OTPs for RTO verification at the time of delivery return.
- **Enhanced Transparency**: Ensures visibility into return attempts through structured logging.

## Flow for RTO Verification
1. **LBNP requests for LSP** that supports RTO delivery verification using static OTP.
2. **LBNP creates verification code** for delivery:
   - LBNP sends OTP to LSP (`/confirm`) & to SNP.
   - **LSP should not forward OTP** to the rider, as it will be provided by the end seller for verification at delivery.
3. **Delivery Verification**:
   - **Seller provides delivery OTP** at the time of order delivery.
   - **Rider updates fulfillment state** to `"RTO-delivered"`, including delivery OTP in `/on_status`.

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
                        "type": "END",
                        "instructions": {
                            "code": "5"
                        }
                    }
                ]
            }
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
                        },
                        {
                            "descriptor": {
                                "code": "RTO_ACTION"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "RETURN_TO_ORIGIN"
                                    },
                                    "value": "no"
                                }
                            ]
                        },
                        {
                            "descriptor": {
                                "code": "RTO_VERIFICATION"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "CODE"
                                    },
                                    "value": "5"
                                },
                                {
                                    "descriptor": {
                                        "code": "SHORT_DESC"
                                    },
                                    "value": "9876"
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
                            "code": "RTO"
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
            "id": "O2",
            "fulfillments": [
                {
                    "id": "1",
                    "state": {
                        "descriptor": {
                            "code": "RTO"
                        }
                    },
                    "type": "Delivery",
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
                        },
                        {
                            "descriptor": {
                                "code": "RTO_EVENT"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "RETRY_COUNT"
                                    },
                                    "value": "3"
                                },
                                {
                                    "descriptor": {
                                        "code": "RTO_ID"
                                    },
                                    "value": "F1-RTO"
                                },
                                {
                                    "descriptor": {
                                        "code": "CANCELLATION_REASON_ID"
                                    },
                                    "value": "013"
                                },
                                {
                                    "descriptor": {
                                        "code": "REASON_ID"
                                    },
                                    "value": "127"
                                },
                                {
                                    "descriptor": {
                                        "code": "SUB_REASON_ID"
                                    },
                                    "value": "004"
                                },
                                {
                                    "descriptor": {
                                        "code": "CANCELLED_BY"
                                    },
                                    "value": "lsp.com"
                                }
                            ]
                        }
                    ]
                }
            ],
            "status": "Completed"
        }
    }
}
```
