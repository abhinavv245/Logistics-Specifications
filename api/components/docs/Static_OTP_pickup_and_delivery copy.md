# Static OTP Verification (Pickup & Delivery) - 009

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
    "action": "search",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "intent": {
      ..
      "fulfillment": {
        "type": "Delivery",
        "start": {
          ..
          "instructions": {
            "code": "5"
          }
        },
        "end": {
          ..
          "instructions": {
            "code": "5"
          }
        }
      },
      ..
    }
  }
}
```

```json
{
  "context": {
    "action": "confirm",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "order": {
      "id": "LO1",
      "state": "Created",
      ..
      "fulfillments": [
        {
          "id": "F1",
          "type": "Delivery",
          ..
          "start": {
            ..
            "instructions": {
              "code": "5",
              "short_desc": "9876",
              ..
            }
          },
          "end": {
            ..
            "instructions": {
              "code": "5",
              "short_desc": "5432",
              ..
            }
          },
          ..
          "tags": [
            {
              "code": "linked_order",
              "list": [
                {
                  "code": "id",
                  "value": "RO1"
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
```

```json
{
  "context": {
    "action": "on_status",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "order": {
      "id": "LO1",
      ..
      "fulfillments": [
        {
          "id": "F1",
          "type": "Delivery",
          ..
          "state": {
            "descriptor": {
              "code": "Order-picked-up",
              ..
            }
          },
          "start": {
            ..
            "time": {
              ..
              "timestamp": "2024-10-16T07:00:00.000Z"
            },
            "instructions": {
              "code": "5",
              "short_desc": "9876",
              ..
            }
          },
          "end": {
            ..
            "time": {
              ..
              "timestamp": "2024-10-16T07:30:00.000Z"
            },
            "instructions": {
              "code": "5",
              "short_desc": "5432",
              ..
            }
          },
          ..
          "tags": [
            {
              "code": "linked_order",
              "list": [
                {
                  "code": "id",
                  "value": "RO1"
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
```
