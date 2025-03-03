# Seller Creds - 014

## Overview
Seller credentials allow tagging specific retail sellers under various classifications, such as government-supported programs or socially responsible businesses. This helps in tracking and identifying orders from such sellers for reporting and support purposes.

## Key Features
- **Tagging Retail Sellers**: Identifies sellers participating in special schemes like ODOP, women-owned businesses, tribal-owned businesses, etc.
- **Enhanced Order Tracking**: Helps in tracking specific categories of sellers for analysis and policy implementation.
- **Facilitates Government & Social Sector Initiatives**: Ensures easy classification and identification of socially responsible businesses.

## Payload Changes

```json
{
    "context": {
        "version": "2.0.0",
        "action": "confirm"
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
                                        "code": "CRED_CODE"
                                    },
                                    "value": "Social Sector"
                                },
                                {
                                    "descriptor": {
                                        "code": "CRED_DESC"
                                    },
                                    "value": "Women owned business"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}