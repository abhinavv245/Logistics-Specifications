# SLA Metrics - 01C

## Overview

Service Level Agreement (**SLA**) metrics are defined by the **Logistics Buyer Network Participant (LBNP)** to set performance standards and penalties for **Logistics Service Providers (LSPs)**. These penalties apply based on fulfillment states and predefined criteria.

## Key Features

- **Defined SLA Metrics**: Standardized measurement of logistics performance.
- **Penalty Mechanism**: Fines applied when SLAs are breached.
- **Fulfillment-Based Evaluation**: Penalties depend on specific fulfillment states.
- **Aggregation of Cancellation Fees**: Multiple fulfillment penalties are summed for total order cancellation.

## SLA Metrics with Sample Values

| No  | Metric       | Definition                                      | Unit    | Baseline (Min) | Baseline (Max) | Penalty (Min) | Penalty (Max) | Penalty Unit | Penalty Value |
| --- | ------------ | ----------------------------------------------- | ------- | -------------- | -------------- | ------------- | ------------- | ------------ | ------------- |
| 1   | Order_Accept | Time from order acceptance to rider assignment  | mins    | 0              | 2              | 20            | 29.9          | percent      | 0.5           |
| 2   | Order_Accept |                                                 | mins    | 0              | 2              | 30            |               | percent      | 1             |
| 3   | Pickup_ETA   | Time from promised pickup to rider check-in     | mins    | 0              | 3              | 3.1           | 5             | per_order    | 3             |
| 4   | Pickup_ETA   |                                                 | mins    | 0              | 3              | 5.1           | 9.9           | per_order    | 6             |
| 5   | Pickup_ETA   |                                                 | mins    | 0              | 3              | 10            |               | per_order    | 15            |
| 6   | Delivery_ETA | Time from promised delivery to rider check-in   | mins    | 0              | 5              | 5.1           | 10            | per_order    | 10            |
| 7   | Delivery_ETA |                                                 | mins    | 0              | 5              | 10            |               | per_order    | 15            |
| 8   | RTO          | Fulfillments marked as RTO                      | percent | 0              | 0.49           | 0.5           | 1             | percent      | 0.5           |
| 9   | RTO          |                                                 | percent | 0              | 0.49           | 1.1           | 2             | percent      | 1             |
| 10  | Item_MD      | Fulfillments with missing or damaged items      | percent | 0              | 0.49           | 0.5           | 1             | percent      | 0.5           |
| 11  | Item_MD      |                                                 | percent | 0              | 0.49           | 1.1           | 2             | percent      | 1             |
| 12  | MDND         | Marked as delivered when actually not delivered | percent | 0              | 0.49           | 0.5           | 1             | percent      | 0.5           |
| 13  | MDND         |                                                 | percent | 0              | 0.49           | 1.1           | 2             | percent      | 1             |

## Payload Changes

### **LBNP Publishes SLA Metrics & Associated Penalties**

```json
{
    "context": {
        "version": "2.0.0",
        "action": "search"
    },
    "message": {
        "intent": {
            "tags": [
                {
                    "descriptor": {
                        "code": "LBNP_SLA_TERMS"
                    },
                    "list": [
                        {
                            "descriptor": {
                                "code": "METRIC"
                            },
                            "value": "Order_Accept"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_UNIT"
                            },
                            "value": "mins"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_MIN"
                            },
                            "value": "0"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_MAX"
                            },
                            "value": "2"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_MIN"
                            },
                            "value": "20"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_MAX"
                            },
                            "value": "29.9"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_UNIT"
                            },
                            "value": "percent"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_VALUE"
                            },
                            "value": "0.5"
                        }
                    ]
                },
                {
                    "descriptor": {
                        "code": "LBNP_SLA_TERMS"
                    },
                    "list": [
                        {
                            "descriptor": {
                                "code": "METRIC"
                            },
                            "value": "Order_Accept"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_UNIT"
                            },
                            "value": "mins"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_MIN"
                            },
                            "value": "0"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_MAX"
                            },
                            "value": "2"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_MIN"
                            },
                            "value": "30"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_MAX"
                            },
                            "value": ""
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_UNIT"
                            },
                            "value": "percent"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_VALUE"
                            },
                            "value": "1"
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
        "action": "confirm"
    },
    "message": {
        "order": {
            "tags": [
                {
                    "descriptor": {
                        "code": "LBNP_SLA_TERMS"
                    },
                    "list": [
                        {
                            "descriptor": {
                                "code": "METRIC"
                            },
                            "value": "Order_Accept"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_UNIT"
                            },
                            "value": "mins"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_MIN"
                            },
                            "value": "0"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_MAX"
                            },
                            "value": "2"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_MIN"
                            },
                            "value": "20"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_MAX"
                            },
                            "value": "29.9"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_UNIT"
                            },
                            "value": "percent"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_VALUE"
                            },
                            "value": "0.5"
                        }
                    ]
                },
                {
                    "descriptor": {
                        "code": "LBNP_SLA_TERMS"
                    },
                    "list": [
                        {
                            "descriptor": {
                                "code": "METRIC"
                            },
                            "value": "Order_Accept"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_UNIT"
                            },
                            "value": "mins"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_MIN"
                            },
                            "value": "0"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_MAX"
                            },
                            "value": "2"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_MIN"
                            },
                            "value": "30"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_MAX"
                            },
                            "value": ""
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_UNIT"
                            },
                            "value": "percent"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_VALUE"
                            },
                            "value": "1"
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
        "action": "on_confirm"
    },
    "message": {
        "order": {
            "tags": [
                {
                    "descriptor": {
                        "code": "LBNP_SLA_TERMS"
                    },
                    "list": [
                        {
                            "descriptor": {
                                "code": "METRIC"
                            },
                            "value": "Order_Accept"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_UNIT"
                            },
                            "value": "mins"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_MIN"
                            },
                            "value": "0"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_MAX"
                            },
                            "value": "2"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_MIN"
                            },
                            "value": "20"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_MAX"
                            },
                            "value": "29.9"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_UNIT"
                            },
                            "value": "percent"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_VALUE"
                            },
                            "value": "0.5"
                        }
                    ]
                },
                {
                    "descriptor": {
                        "code": "LBNP_SLA_TERMS"
                    },
                    "list": [
                        {
                            "descriptor": {
                                "code": "METRIC"
                            },
                            "value": "Order_Accept"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_UNIT"
                            },
                            "value": "mins"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_MIN"
                            },
                            "value": "0"
                        },
                        {
                            "descriptor": {
                                "code": "BASE_MAX"
                            },
                            "value": "2"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_MIN"
                            },
                            "value": "30"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_MAX"
                            },
                            "value": ""
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_UNIT"
                            },
                            "value": "percent"
                        },
                        {
                            "descriptor": {
                                "code": "PENALTY_VALUE"
                            },
                            "value": "1"
                        }
                    ]
                }
            ]
        }
    }
}

```
