# Pickup & Delivery Attempt Trail - 00E

## Overview
The **Pickup & Delivery Attempt Trail** helps track the fulfillment status of intercity (P2H2P) orders. This includes recording the timestamps of pickup and delivery attempts, along with any delays encountered during fulfillment. By maintaining a structured trail, logistics providers can enhance transparency and improve customer experience.

## Key Features
- **Order Tracking**: Records timestamps for pickup and delivery attempts.
- **Delay Management**: Captures delay reasons along with corresponding timestamps.
- **Multiple Attempt Tracking**: Logs whether multiple pickup or delivery attempts were made.
- **Improved Visibility**: Enhances operational efficiency by keeping a structured trail.

## Pickup & Delivery Attempt Trail for Intercity (P2H2P) Orders

## Payload Changes

```json
{
    "context": {
        "version": "2.0.0",
        "action": "on_update"
    },
    "message": {
        "order": {
            "id": "O2",
            "fulfillments": [
                {
                    "type": "Delivery",
                    "tags": [
                        {
                            "descriptor": {
                                "code": "FULFILLMENT_DELAY"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "STATE"
                                    },
                                    "value": "Order-picked-up"
                                },
                                {
                                    "descriptor": {
                                        "code": "REASON_ID"
                                    },
                                    "value": "004"
                                },
                                {
                                    "descriptor": {
                                        "code": "TIMESTAMP"
                                    },
                                    "value": "2024-12-02T22:00:00.000Z"
                                },
                                {
                                    "descriptor": {
                                        "code": "ATTEMPT"
                                    },
                                    "value": "yes"
                                }
                            ]
                        },
                        {
                            "descriptor": {
                                "code": "FULFILLMENT_DELAY"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "STATE"
                                    },
                                    "value": "Order-delivered"
                                },
                                {
                                    "descriptor": {
                                        "code": "REASON_ID"
                                    },
                                    "value": "005"
                                },
                                {
                                    "descriptor": {
                                        "code": "TIMESTAMP"
                                    },
                                    "value": "2024-12-03T22:00:00.000Z"
                                },
                                {
                                    "descriptor": {
                                        "code": "ATTEMPT"
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
```
