# Cancellation Terms - 01A

## Overview
Cancellation terms allow the **Logistics Service Provider (LSP)** to define rules for order cancellations during the pre-order flow. These rules apply to cancellations initiated by both the **LSP and the LBNP (Logistics Buyer Network Participant)**. The terms outline cancellation fees, fulfillment states, and reason codes.

## Key Features
- **Fulfillment-Based Cancellations**: Terms are defined at the fulfillment level.
- **Cancellation Fees**: Charges are applied based on the order’s fulfillment state.
- **NACK Option**: If terms are unacceptable, LBNP can NACK `/on_init` or `/on_confirm` with error code `62505`.
- **Aggregate Fees**: Total cancellation fees for an order are the sum of all individual fulfillment cancellation fees.
- **Transparent Pricing**: Actual cancellation fees appear in the order quote after fulfillment or order cancellation.

## Payload Changes

### **Defining Cancellation Terms in the Order**
```json
{
  "context": {
    "action": "on_init",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "order": {
      ..
      "cancellation_terms": [
        {
          "fulfillment_state": {
            "descriptor": {
              "code": "Pending",
              "short_desc": "132"
            }
          },
          "cancellation_fee": {
            "percentage": "0.00",
            "amount": {
              "currency": "INR",
              "value": "0.00"
            }
          }
        },
        {
          "fulfillment_state": {
            "descriptor": {
              "code": "Agent-assigned",
              "short_desc": "102,103,105"
            }
          },
          "cancellation_fee": {
            "percentage": "100.00",
            "amount": {
              "currency": "INR",
              "value": "50.00"
            }
          }
        },
        {
          "fulfillment_state": {
            "descriptor": {
              "code": "Order-picked-up",
              "short_desc": "125,126,127,128"
            }
          },
          "cancellation_fee": {
            "percentage": "100.00",
            "amount": {
              "currency": "INR",
              "value": "50.00"
            }
          }
        }
      ]
    }
  }
}
