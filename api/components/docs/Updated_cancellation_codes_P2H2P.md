| Code (new) | Code (current) | Phase (pre-pickup / post-pickup) | Reason | Who can use | Cost attribution to | Comment | States where applicable | Triggers RTO | Settlement suggestions to be incorporated |
|------------|---------------|----------------------------------|--------|-------------|---------------------|---------|-------------------------|-------------|------------------------------------------|
| 250 | 005 | pre-pickup | Store rejected order | LBNP | LBNP | due to operational issue, etc at seller (e.g. item not available) | Pending; Searching-for-Agent | No | No settlement to be done between LBNP and LSP |
| 251 | N/A |  | Retail buyer cancelled order | LBNP | LBNP |  | Pending; Searching-for-Agent |  | No settlement to be done between LBNP and LSP |
| 252 |  |  | Pickup TAT breach | LBNP | LSP | Pickup TAT is calculated up to 1st pickup attempt | Pending; Searching-for-Agent; Agent-assigned; Out-for-pickup; Pickup-failed |  | No settlement to be done between LBNP and LSP |
| 200 |  |  | Pickup address incorrect or not found | LSP | LBNP | will be cancelled at 1st pickup attempt | Out-for-pickup; Pickup-failed |  | LSP can ask for the pickup charges from LBNP, as quoted by LSP for the order |
| 201 | 019 |  | Pickup address not serviceable | LSP | LSP |  | Pending; Searching-for-Agent; Agent-assigned |  | No settlement to be done between LBNP and LSP |
| 202 | N/A |  | Store is closed or merchant not available | LSP | LBNP | after pickup attempts are exhausted; on initial attempts, pickup is rescheduled and order is not cancelled | Pickup-failed |  | LSP can ask for pickup charges from LBNP, as quoted by LSP for the order |
| 203 |  |  | Order not ready for pickup | LSP | LBNP | after pickup attempts are exhausted; on initial attempts, pickup is rescheduled and order is not cancelled | Pickup-failed |  | LSP can ask for pickup charges from LBNP as asked by the LSP in the API contract |
| 275 | 007 | post-pickup | Delivery TAT breach | LBNP | LSP | Delivery TAT is calculated up to 1st delivery attempt | Order-picked-up; In-transit; At-destination-hub | Yes |  |
|  | 009 |  | Wrong product delivered | LSP | LBNP |  | Out-for-delivery |  | IGM case |
| 225 | 011 |  | Retail buyer not found / can't be contacted | LSP | LBNP | after delivery attempts are exhausted; on initial attempts, delivery is rescheduled & order not cancelled | Out-for-delivery; Delivery-failed |  | LBNP is liable to pay both forward and RTO charges to LSP |
|  | 012 |  | Buyer doesn't want product any more | LSP |  | merged into 013 |  |  |  |
| 226 | 013 |  | Retail buyer can't / doesn't want to accept delivery | LSP | LBNP |  | Out-for-delivery |  | LBNP is liable to pay both forward and RTO charges to LSP |
| 227 | 014 |  | Delivery address incorrect or not found | LSP | LBNP | after delivery attempts are exhausted; on initial attempts, delivery is rescheduled & order not cancelled | Out-for-delivery; Delivery-failed |  | LBNP is liable to pay both forward and RTO charges to LSP |
| 228 | 018 |  | Delivery address not serviceable | LSP | LSP |  | At-destination-hub; Out-for-delivery |  | No settlement to be done between LBNP and LSP |
|  | 015 |  | Buyer not available at location | LSP |  | merged into 013 |  |  |  |
| 229 | 016 |  | Force majeure (accident / strike / law & order situation, etc) | LSP | LSP |  | Order-picked-up; In-transit; At-destination-hub |  | No settlement to be done between LBNP and LSP |
|  | 017 |  | Order delivery not possible (due to vehicle issues, etc) | LSP | LSP |  | In-transit; At-destination-hub |  | Delivery to be reattempted, but not cancelled |
| 230 | 020 |  | Order lost or damaged in transit | LSP | LSP |  | Order-picked-up; In-transit; At-destination-hub; Out-for-delivery |  | LSP will have to pay a certain amount of order value to the LBNP, as quoted by LSP for the order |
| 231 |  |  | Retail buyer refused to pay for COD order | LSP | LBNP |  | Out-for-delivery |  | LBNP is liable to pay both forward and RTO charges to LSP |
| 996 | 996 | order creation | Order confirmation failure | LBNP | N/A |  | Pending | N/A | N/A |
| 997 | 997 | order creation | Order confirmation failure | LSP |N/A |  | Pending | N/A | N/A |
| 994 |  | order creation | Cancelling draft order | LBNP | N/A |  | Pending | N/A | N/A |
| 995 |  | order creation | Cancelling draft order | LSP |  N/A |  | Pending | N/A | N/A |
