# Exchange Customer Support Contact Details - 020

## Overview
To ensure smooth communication between stakeholders during order fulfillment, both **Logistics Buyer Network Participant (LBNP)** and **Logistics Service Provider (LSP)** exchange their customer support contact details. 

## Key Features
- **LBNP Contact Details**: Shared with **LSP** in `/confirm`, allowing the rider to contact LBNP if the buyer is unreachable during delivery.
- **LSP Contact Details**: Communicated to **LBNP** in `/on_confirm` in case LBNP needs to contact LSP customer support.

## Payload Changes

### **LBNP Shares Contact Details with LSP**
```json
{
  "context": {
    "action": "confirm",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "order": {
      ..
      "tags": [
        {
          "code": "bap_terms",
          "list": [
            {
              "code": "phone",
              "value": "9886098860"
            }
          ]
        }
      ]
    }
  }
}
```

### **LSP Shares Contact Details with LBNP**
```json
{
  "context": {
    "action": "on_confirm",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "order": {
      ..
      "tags": [
        {
          "code": "bpp_terms",
          "list": [
            {
              "code": "phone",
              "value": "9886098860"
            }
          ]
        }
      ]
    }
  }
}
