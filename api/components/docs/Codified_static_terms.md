# Codified Static Terms - 01F

## Overview
Codified static terms provide standardized legal and financial conditions during the **/on_search** phase. These terms include liability limits, arbitration clauses, court jurisdiction, and interest for delays.

## Key Features
- **Liability Definition**: Specifies maximum liability and cap.
- **Arbitration Clause**: Indicates if arbitration is mandatory.
- **Court Jurisdiction**: Defines the applicable legal jurisdiction.
- **Delay Interest**: Specifies interest rate for delayed payments.

## Explanation of Key Terms
- **`max_liability`**: The maximum aggregate liability expressed as a multiple of the total transaction value.
- **`max_liability_cap`**: The maximum aggregate liability expressed in ₹ (Rupees).
  
### Example Scenarios:
1. If `max_liability` is **2**, the total transaction value is ₹100, and `max_liability_cap` is **not provided**, the maximum aggregate liability of the **LSP** is **₹200** (2 × 100).
2. If `max_liability_cap` is **100**, and `max_liability` is **not provided**, the maximum aggregate liability is **₹100**.
3. If both values are provided (e.g., `max_liability = 2`, total transaction value = ₹100, and `max_liability_cap = 100`), the maximum aggregate liability will be **₹100** (lower of ₹200 and ₹100).
4. If neither `max_liability_cap` nor `max_liability` are provided, **liability is uncapped**.
5. If both values are **set to 0**, it means **LSP bears no liability**.

- **Mandatory Arbitration (`true` / `false`)**: If set to `true`, both parties **must** resolve disputes through arbitration.
- **Court Jurisdiction**: Defines the **Indian city with a High Court bench** that will have exclusive jurisdiction over disputes.
- **Delay Interest**: The **annual rate of interest** that LBNP will be charged if they delay payments to LSP. It is calculated **pro rata per day**.
  
### Example:
- If `delay_interest` = **10.00%**, and the payment due is **₹1000**, the interest per annum is **₹100**.
- If the payment is **delayed by 50 days**, the interest payable is **₹13.70** [(1000 × (10.00/100) × (50/365))].

## Payload Changes

### **Static Terms in /on_search**
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
        ..
        "tags": [
          {
            "code": "bpp_terms",
            "list": [
              ..
              {
                "code": "max_liability",
                "value": "2"
              },
              {
                "code": "max_liability_cap",
                "value": "10000"
              },
              {
                "code": "mandatory_arbitration",
                "value": "false"
              },
              {
                "code": "court_jurisdiction",
                "value": "Bengaluru"
              },
              {
                "code": "delay_interest",
                "value": "10.00"
              }
            ]
          }
        ]
      }
    }
  }
}
```

### **Static Terms in /on_confirm**
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
            ..
            {
              "code": "max_liability",
              "value": "2"
            },
            {
              "code": "max_liability_cap",
              "value": "10000"
            },
            {
              "code": "mandatory_arbitration",
              "value": "false"
            },
            {
              "code": "court_jurisdiction",
              "value": "Bengaluru"
            },
            {
              "code": "delay_interest",
              "value": "10.00"
            }
          ]
        }
      ]
    }
  }
}