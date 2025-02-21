# RCM Self-Declaration - 01E

## Overview
Logistics Service Providers (**LSPs**) can provide a **Reverse Charge Mechanism (RCM) self-declaration**, allowing **Logistics Buyer Network Participants (LBNPs)** with GST registration in a specific state to process logistics orders within that state. Despite this, the order quote breakup, including taxes, must still be provided by the LSP.

## Key Features
- **RCM Self-Declaration**: LSPs declare if their tax type follows RCM.
- **State-Specific GST Processing**: LBNPs with GST registration in a state can work with LSPs operating there.
- **Order Quote Transparency**: LSPs must still provide a detailed tax breakup in the order quote.

## Payload Changes

### **LSP Provides RCM Self-Declaration**
```json
{
  "context": {
    "action": "on_search",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "catalog": {
      "bpp/descriptor": {
        "tags": [
          {
            "code": "bpp_terms",
            "list": [
              {
                "code": "np_tax_type",
                "value": "RCM"
              },
              ..
            ]
          }
        ]
      },
      ..
    }
  }
}
```

### **RCM Confirmation in Order**
```json
{
  "context": {
    "action": "on_confirm",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "order": {
      "tags": [
        {
          "code": "bpp_terms",
          "list": [
            {
              "code": "np_tax_type",
              "value": "RCM"
            },
            ..
          ]
        }
      ]
    }
  }
}