# SLA Metrics - 01C

## Overview

Service Level Agreement (**SLA**) metrics are defined by the **Logistics Buyer Network Participant (LBNP)** to set performance standards and penalties for **Logistics Service Providers (LSPs)**. These penalties apply based on fulfillment states and predefined criteria.

## Key Features

- **Defined SLA Metrics**: Standardized measurement of logistics performance.
- **Penalty Mechanism**: Fines applied when SLAs are breached.
- **Fulfillment-Based Evaluation**: Penalties depend on specific fulfillment states.
- **Aggregation of Cancellation Fees**: Multiple fulfillment penalties are summed for total order cancellation.

## SLA Metrics with Sample Values

| No  | Metric       | Definition                                      | Unit    | Baseline (Min) | Baseline (Max) | Penalty (Min) | Penalty (Max) | Penalty Unit | Penalty Value |
| --- | ------------ | ----------------------------------------------- | ------- | -------------- | -------------- | ------------- | ------------- | ------------ | ------------- |
| 1   | Order_Accept | Time from order acceptance to rider assignment  | mins    | 0              | 2              | 20            | 29.9          | percent      | 0.5           |
| 2   | Order_Accept |                                                 | mins    | 0              | 2              | 30            |               | percent      | 1             |
| 3   | Pickup_ETA   | Time from promised pickup to rider check-in     | mins    | 0              | 3              | 3.1           | 5             | per_order    | 3             |
| 4   | Pickup_ETA   |                                                 | mins    | 0              | 3              | 5.1           | 9.9           | per_order    | 6             |
| 5   | Pickup_ETA   |                                                 | mins    | 0              | 3              | 10            |               | per_order    | 15            |
| 6   | Delivery_ETA | Time from promised delivery to rider check-in   | mins    | 0              | 5              | 5.1           | 10            | per_order    | 10            |
| 7   | Delivery_ETA |                                                 | mins    | 0              | 5              | 10            |               | per_order    | 15            |
| 8   | RTO          | Fulfillments marked as RTO                      | percent | 0              | 0.49           | 0.5           | 1             | percent      | 0.5           |
| 9   | RTO          |                                                 | percent | 0              | 0.49           | 1.1           | 2             | percent      | 1             |
| 10  | Item_MD      | Fulfillments with missing or damaged items      | percent | 0              | 0.49           | 0.5           | 1             | percent      | 0.5           |
| 11  | Item_MD      |                                                 | percent | 0              | 0.49           | 1.1           | 2             | percent      | 1             |
| 12  | MDND         | Marked as delivered when actually not delivered | percent | 0              | 0.49           | 0.5           | 1             | percent      | 0.5           |
| 13  | MDND         |                                                 | percent | 0              | 0.49           | 1.1           | 2             | percent      | 1             |

## Payload Changes

### **LBNP Publishes SLA Metrics & Associated Penalties**

```json
{
  "context":
  {
    "action":"search",
    "core_version":"1.2.5",
    ..
  },
  "message":
  {
    "intent":
    {
      ..
      "tags":
      [
        ..
        {
          "code":"lbnp_sla_terms",
          "list":
          [
            {
              "code":"metric",
              "value":"Order_Accept"
            },
            {
              "code":"base_unit",
              "value":"mins"
            },
            {
              "code":"base_min",
              "value":"0"
            },
            {
              "code":"base_max",
              "value":"2"
            },
            {
              "code":"penalty_min",
              "value":"20"
            },
            {
              "code":"penalty_max",
              "value":"29.9"
            },
            {
              "code":"penalty_unit",
              "value":"percent"
            },
            {
              "code":"penalty_value",
              "value":"0.5"
            },
          ]
        },
        {
          "code":"lbnp_sla_terms",
          "list":
          [
            {
              "code":"metric",
              "value":"Order_Accept"
            },
            {
              "code":"base_unit",
              "value":"mins"
            },
            {
              "code":"base_min",
              "value":"0"
            },
            {
              "code":"base_max",
              "value":"2"
            },
            {
              "code":"penalty_min",
              "value":"30"
            },
            {
              "code":"penalty_max",
              "value":""
            },
            {
              "code":"penalty_unit",
              "value":"percent"
            },
            {
              "code":"penalty_value",
              "value":"1"
            },
          ]
        },
        ..
      ]
    }
  }
}
```

```json
{
  "context":
  {
    "action":"confirm",
    "core_version":"1.2.5",
    ..
  },
  "message":
  {
    "order":
    {
      ..
      "tags":
      [
        {
          "code":"lbnp_sla_terms",
          "list":
          [
            {
              "code":"metric",
              "value":"Order_Accept"
            },
            {
              "code":"base_unit",
              "value":"mins"
            },
            {
              "code":"base_min",
              "value":"0"
            },
            {
              "code":"base_max",
              "value":"2"
            },
            {
              "code":"penalty_min",
              "value":"20"
            },
            {
              "code":"penalty_max",
              "value":"29.9"
            },
            {
              "code":"penalty_unit",
              "value":"percent"
            },
            {
              "code":"penalty_value",
              "value":"0.5"
            },
          ]
        },
        {
          "code":"lbnp_sla_terms",
          "list":
          [
            {
              "code":"metric",
              "value":"Order_Accept"
            },
            {
              "code":"base_unit",
              "value":"mins"
            },
            {
              "code":"base_min",
              "value":"0"
            },
            {
              "code":"base_max",
              "value":"2"
            },
            {
              "code":"penalty_min",
              "value":"30"
            },
            {
              "code":"penalty_max",
              "value":""
            },
            {
              "code":"penalty_unit",
              "value":"percent"
            },
            {
              "code":"penalty_value",
              "value":"1"
            },
          ]
        },
        ..
      ]
    }
  }
}
```

```json
{
  "context":
  {
    "action":"on_confirm",
    "core_version":"1.2.5",
    ..
  },
  "message":
  {
    "order":
    {
      ..
      "tags":
      [
        {
          "code":"lbnp_sla_terms",
          "list":
          [
            {
              "code":"metric",
              "value":"Order_Accept"
            },
            {
              "code":"base_unit",
              "value":"mins"
            },
            {
              "code":"base_min",
              "value":"0"
            },
            {
              "code":"base_max",
              "value":"2"
            },
            {
              "code":"penalty_min",
              "value":"20"
            },
            {
              "code":"penalty_max",
              "value":"29.9"
            },
            {
              "code":"penalty_unit",
              "value":"percent"
            },
            {
              "code":"penalty_value",
              "value":"0.5"
            },
          ]
        },
        {
          "code":"lbnp_sla_terms",
          "list":
          [
            {
              "code":"metric",
              "value":"Order_Accept"
            },
            {
              "code":"base_unit",
              "value":"mins"
            },
            {
              "code":"base_min",
              "value":"0"
            },
            {
              "code":"base_max",
              "value":"2"
            },
            {
              "code":"penalty_min",
              "value":"30"
            },
            {
              "code":"penalty_max",
              "value":""
            },
            {
              "code":"penalty_unit",
              "value":"percent"
            },
            {
              "code":"penalty_value",
              "value":"1"
            },
          ]
        },
        ..
      ]
    }
  }
}

```
