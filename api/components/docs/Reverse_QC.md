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
        "version": "2.0.0",
        "action": "confirm"
    },
    "message": {
        "order": {
            "fulfillments": [
                {
                    "stops": [
                        {
                            "type": "START",
                            "instructions": {
                                "additional_desc": {
                                    "content_type": "text/html",
                                    "url": "https://reverse_qc_sop_form.htm"
                                }
                            }
                        }
                    ],
                    "tags": [
                        {
                            "descriptor": {
                                "code": "REVERSEQC_INPUT"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "P001"
                                    },
                                    "value": "Atta"
                                },
                                {
                                    "descriptor": {
                                        "code": "P003"
                                    },
                                    "value": "1"
                                },
                                {
                                    "descriptor": {
                                        "code": "Q001"
                                    },
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
        "version": "2.0.0",
        "action": "on_status"
    },
    "message": {
        "order": {
            "fulfillments": [
                {
                    "state": {
                        "descriptor": {
                            "code": "Order-picked-up",
                            "short_desc": "pickup or delivery failed reason code"
                        }
                    },
                    "stops": [
                        {
                            "type": "START",
                            "instructions": {
                                "additional_desc": {
                                    "content_type": "text/html",
                                    "url": "https://reverse_qc_sop_form.htm"
                                }
                            }
                        }
                    ],
                    "tags": [
                        {
                            "descriptor": {
                                "code": "REVERSEQC_OUTPUT"
                            },
                            "list": [
                                {
                                    "descriptor": {
                                        "code": "P001"
                                    },
                                    "value": "Atta"
                                },
                                {
                                    "descriptor": {
                                        "code": "P003"
                                    },
                                    "value": "1"
                                },
                                {
                                    "descriptor": {
                                        "code": "Q001"
                                    },
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