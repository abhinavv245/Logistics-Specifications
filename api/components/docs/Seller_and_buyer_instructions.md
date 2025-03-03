# Seller & Buyer Instructions - 013

## Overview
Seller and buyer instructions provide a structured way for both parties to communicate specific pickup and delivery details. These instructions help in ensuring smooth fulfillment by offering clear guidance to the rider.

## Key Features
- **Seller Instructions** (`fulfillment.start.instructions`):
  - `long_desc`: Used for sending register/counter numbers for the rider at pickup.
  - `additional_desc`: Can include visual or textual information related to pickup.
- **Buyer Instructions** (`fulfillment.end.instructions`):
  - `long_desc`: Used for specific delivery instructions (e.g., "leave package outside door").
  - `additional_desc`: Can include additional visual or textual delivery-related information.

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
          "start": {
            "instructions": {
              ..
              "long_desc": "additional instructions for pickup e.g. register or counter no",
              "additional_desc": {
                "content_type": "text/html",
                "url": "url for additional info"
              }
            }
          },
          "end": {
            "instructions": {
              ..
              "long_desc": "additional instructions for delivery e.g. leave package outside door",
              "additional_desc": {
                "content_type": "text/html",
                "url": "url for additional info"
              }
            }
          }
        }
      ],
      ..
    }
  }
}
