# Fulfillment States & Mapping to Order States

## Hyperlocal (P2P)

| Fulfillment State       | When to Assign State             | Order State       |
|------------------------|--------------------------------|------------------|
| Pending               | Default fulfillment state      | Created or Accepted |
| Searching-for-Agent   | After RTS                      | In-progress      |
| Agent-assigned       | Rider assigned                 | In-progress      |
| At-pickup            | Rider reached pickup location  | In-progress      |
| Order-picked-up      | Order picked up by rider       | In-progress      |
| Out-for-delivery     | Out for delivery               | In-progress      |
| At-delivery          | Rider reached delivery location | In-progress      |
| Order-delivered      | Delivered                      | Completed        |
| Cancelled           | Cancelled                      | Cancelled        |

## Intercity (P2H2P)

| Fulfillment State       | When to Assign State             | Order State       |
|------------------------|--------------------------------|------------------|
| Pending               | Default fulfillment state      | Created or Accepted |
| Searching-for-Agent   | After RTS                      | In-progress      |
| Agent-assigned       | Rider assigned                 | In-progress      |
| Out-for-pickup       | Out for pickup                 | In-progress      |
| Pickup-failed        | Pickup attempted but failed    | In-progress      |
| Pickup-rescheduled   | Pickup rescheduled            | In-progress      |
| Order-picked-up      | Picked up by rider            | In-progress      |
| In-transit           | At source hub                  | In-progress      |
| At-destination-hub   | At destination hub             | In-progress      |
| Out-for-delivery     | Out for delivery               | In-progress      |
| Delivery-failed      | Delivery attempted but failed  | In-progress      |
| Delivery-rescheduled | Delivery rescheduled           | In-progress      |
| Order-delivered      | Delivered                      | Completed        |
| Cancelled           | Cancelled                      | Cancelled        |

## RTO (Return to Origin)

| Fulfillment State | When to Assign State                          | Order State                    |
|------------------|--------------------------------------------|------------------------------|
| RTO-Initiated   | When RTO has been initiated                | Order state before RTO initiated |
| RTO-Disposed    | RTO terminal state when return to origin not required | Cancelled                     |
| RTO-Delivered   | RTO terminal state when return to origin required      | Cancelled                     |
