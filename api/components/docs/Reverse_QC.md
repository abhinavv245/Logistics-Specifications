# Reverse QC - 01B

## Overview
Reverse **Quality Check (QC)** follows a **Standard Operating Procedure (SOP)** in the form of a codified checklist, defining product attributes and inspection questions. The **Logistics Buyer Network Participant (LBNP)** provides the input checklist, while the rider performs an inspection and submits the checklist output.

## Key Features
- **Codified QC Checklist**: Ensures uniform quality assessment with predefined attributes.
- **LBNP-Provided Input Checklist**: Riders receive a structured inspection form.
- **Rider-Submitted Output Checklist**: Inspection results are reported back after pickup.
- **Digital SOP Form**: Riders follow a standardized process via an online form.

## Payload Changes

### **Input Checklist (Provided by LBNP)**
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
      "fulfillments": [
        {
          ..
          "start": {
            ..
            "instructions": {
              ..
              "additional_desc": {
                "content_type": "text/html",
                "url": "https://reverse_qc_sop_form.htm"
              }
            }
          },
          "tags": [
            {
              "code": "reverseqc_input",
              "list": [
                {
                  "code": "P001",
                  "value": "Atta"
                },
                {
                  "code": "P003",
                  "value": "1"
                },
                {
                  "code": "Q001",
                  "value": ""
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

### **Output Checklist (Submitted by Rider)**
```json
{
  "context": {
    "action": "on_status",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "order": {
      ..
      "fulfillments": [
        {
          ..
          "state": {
            "descriptor": {
              "code": "Order-picked-up",
              "short_desc": "pickup or delivery failed reason code"
            }
          },
          "start": {
            ..
            "instructions": {
              ..
              "additional_desc": {
                "content_type": "text/html",
                "url": "https://reverse_qc_sop_form.htm"
              }
            }
          },
          "tags": [
            {
              "code": "reverseqc_output",
              "list": [
                {
                  "code": "P001",
                  "value": "Atta"
                },
                {
                  "code": "P003",
                  "value": "1"
                },
                {
                  "code": "Q001",
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
