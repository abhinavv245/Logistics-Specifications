# Static OTP Verification (RTO) - 00A

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
    "action": "search",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "intent": {
      ..
      "fulfillment": {
        "type": "Delivery",
        ..
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
          "tags": [
            {
              "code": "linked_order",
              "list": [
                {
                  "code": "id",
                  "value": "RO1"
                }
              ]
            },
            {
              "code": "rto_action",
              "list": [
                {
                  "code": "return_to_origin",
                  "value": "no"
                }
              ]
            },
            {
              "code": "rto_verification",
              "list": [
                {
                  "code": "code",
                  "value": "5"
                },
                {
                  "code": "short_desc",
                  "value": "9876"
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
              "code": "RTO"
            }
          },
          "start": {
            ..
            "time": {
              "timestamp": "2024-10-16T07:00:00.000Z"
            },
            "instructions": {
              "code": "5",
              "short_desc": "9876"
            }
          },
          "end": {
            ..
            "time": {
              "timestamp": "2024-10-16T07:30:00.000Z"
            },
            "instructions": {
              "code": "5",
              "short_desc": "5432"
            }
          },
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
      "id": "O2",
      "state": "Completed",
      ..
      "fulfillments": [
        {
          "id": "1",
          "type": "Delivery",
          "state": {
            "descriptor": {
              "code": "RTO"
            }
          },
          "tags": [
            {
              "code": "linked_order",
              "list": [
                {
                  "code": "id",
                  "value": "RO1"
                }
              ]
            },
            {
              "code": "rto_event",
              "list": [
                {
                  "code": "retry_count",
                  "value": "3"
                },
                {
                  "code": "rto_id",
                  "value": "F1-RTO"
                },
                {
                  "code": "cancellation_reason_id",
                  "value": "013"
                },
                {
                  "code": "reason_id",
                  "value": "127"
                },
                {
                  "code": "sub_reason_id",
                  "value": "004"
                },
                {
                  "code": "cancelled_by",
                  "value": "lsp.com"
                }
              ]
            }
          ]
        },
        {
          "id": "1-RTO",
          "type": "RTO",
          "state": {
            "descriptor": {
              "code": "RTO-Delivered"
            }
          },
          "end": {
            "instructions": {
              "code": "5",
              "short_desc": "9876"
            }
          }
        }
      ]
    }
  }
}
