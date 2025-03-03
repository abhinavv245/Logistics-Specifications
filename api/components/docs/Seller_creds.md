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
    "action": "confirm",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "order": {
      "id": "O2",
      "fulfillments": [
        {
          "type": "Delivery",
          ..
          "tags": [
            {
              "code": "linked_provider",
              "list": [
                {
                  "code": "id",
                  "value": "P1"
                },
                {
                  "code": "name",
                  "value": "Seller1"
                },
                {
                  "code": "cred_code",
                  "value": "Social Sector"
                },
                {
                  "code": "cred_desc",
                  "value": "Women owned business"
                }
              ]
            }
          ]
        }
      ],
      ..
    }
  }
}
