# ePOD - 00F

## Overview
Electronic Proof of Delivery (ePOD) enhances the transparency and security of logistics operations by capturing digital proof of both pickup and delivery events. This proof may include images and GPS coordinates to verify the rider's location at the time of fulfillment.

## Key Features
- **Image Verification**: Captures images of the package at pickup and delivery points.
- **GPS Coordinates**: Logs rider location during pickup and delivery for enhanced security.
- **Tamper-Proof Record**: Ensures a reliable record of fulfillment events for audit and compliance.
- **Efficient Dispute Resolution**: Provides verifiable proof in case of delivery discrepancies.

## Proof of Pickup & Delivery (e-POD)
- May include an image of pickup/delivery and GPS coordinates of the rider at the point of pickup/delivery.

## Payload Changes

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
                    "stops": [
                        {
                            "type": "START",
                            "instructions": {
                                "images": [
                                    "link to downloadable shipping label",
                                    "https://lsp.com/pickup_image.png",
                                    "https://lsp.com/rider_location.png"
                                ]
                            }
                        },
                        {
                            "type": "END",
                            "instructions": {
                                "images": [
                                    "https://lsp.com/delivery_image.png",
                                    "https://lsp.com/rider_location.png"
                                ]
                            }
                        }
                    ],
                    "tags": [
                        {
                            "descriptor": {
                                "code": "FULFILLMENT_PROOF"
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
                                        "code": "TYPE"
                                    },
                                    "value": "webp"
                                },
                                {
                                    "descriptor": {
                                        "code": "URL"
                                    },
                                    "value": "public link to webp"
                                }
                            ]
                        },
                        {
                            "descriptor": {
                                "code": "FULFILLMENT_PROOF"
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
                                        "code": "TYPE"
                                    },
                                    "value": "webp"
                                },
                                {
                                    "descriptor": {
                                        "code": "URL"
                                    },
                                    "value": "public link to webp"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}