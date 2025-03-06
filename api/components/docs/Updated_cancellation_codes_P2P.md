| Code (new) | Code (current) | Phase (pre-pickup / post-pickup) | Reason | Who can use | Cost attribution to | Comment | States where applicable | Triggers RTO | Settlement suggestions to be incorporated |
|------------|---------------|----------------------------------|--------|-------------|---------------------|---------|-------------------------|-------------|------------------------------------------|
| 150 | 004 | pre-pickup | Store is not accepting order | LBNP | LBNP |  | Pending; Searching-for-Agent | No | No settlement to be done between LBNP and LSP |
| 151 | 005 |  | Store rejected order | LBNP | LBNP | due to operational issue, etc at seller (e.g. item not available) | Pending; Searching-for-Agent |  | No settlement to be done between LBNP and LSP |
| 100 | 021 |  | Packed order not complete | LSP | LBNP | for open-box orders, the logistics rider can use this if there is a mismatch between the items inside the box & the items in the invoice | At-pickup |  | LBNP will have to pay a certain amount (forward charge or a fixed amount as pickup cost), as quoted by the LSP for the order |
| 152 | N/A |  | Retail buyer cancelled order | LBNP | LBNP |  | Pending; Searching-for-Agent |  | No settlement to be done between LBNP and LSP |
| 153 |  |  | Rider not assigned | LBNP | LSP |  | Pending; Searching-for-Agent |  | No settlement to be done between LBNP and LSP |
| 154 |  |  | Pickup TAT breach | LBNP | LSP | covers cases like marked "At-pickup" but not at pickup, did not arrive at pickup, etc | Agent-assigned; At-pickup |  | LSP is supposed to pay a certain amount of order value for perishable items to the LBNP, if delayed beyond (promised pickup TAT + some grace period) |
| 155 |  |  | Reassigned to another LSP | LBNP | LBNP |  | Pending; Searching-for-Agent; Agent-assigned; At-pickup |  | LBNP will have to pay a certain amount (forward charge or a fixed amount as pickup cost) as quoted by the LSP for the order, if it is cancelled when rider reached the location; to be ascertained by "at pickup" timestamp of the rider |
| 156 |  |  | Fraudulent rider behaviour | LBNP | LSP |  | Agent-assigned |  | No settlement to be done between LBNP and LSP |
| 101 |  |  | Rider not available | LSP | LSP |  | Pending; Searching-for-Agent |  | No settlement to be done between LBNP and LSP |
| 102 |  |  | Pickup address incorrect or not found | LSP | LBNP |  | At-pickup |  | LBNP will have to pay a certain amount (forward charge or a fixed amount as pickup cost), as quoted by LSP for the order |
| 103 |  |  | Store is closed or merchant not available | LSP | LBNP |  | At-pickup |  | LBNP will have to pay a certain amount (forward charge or a fixed amount as pickup cost), as quoted by LSP for the order |
| 104 |  |  | Store denied pickup | LSP | LBNP |  | At-pickup |  | LBNP will have to pay a certain amount (forward charge or a fixed amount as pickup cost), as quoted by LSP for the order |
| 105 |  |  | Order not ready for pickup | LSP | LBNP |  | At-pickup |  | LBNP will have to pay a certain amount (forward charge or a fixed amount as pickup cost), as quoted by LSP for the order |
| 175 | 007 | post-pickup | Delivery TAT breach | LBNP | LSP |  | Order-picked-up; At-delivery | Yes | LSP is supposed to pay a certain amount of order value for perishable items to the LBNP, if delayed beyond (promised delivery TAT + some grace period) |
| 125 | 009 |  | Wrong product delivered | LSP | LBNP |  | At-delivery |  | LBNP will have to pay forward delivery charges and RTO charges if shipment is to be RTO'd |
| 126 | 011 |  | Retail buyer not found / can't be contacted | LSP | LBNP |  | At-delivery |  | LBNP will have to pay forward delivery charges and RTO charges if shipment is to be RTO'd |
| 127 | 013 |  | Retail buyer can't / doesn't want to accept delivery | LSP | LBNP |  | At-delivery |  | LBNP will have to pay forward delivery charges and RTO charges if shipment is to be RTO'd |
| 128 | 014 |  | Delivery address incorrect or not found | LSP | LBNP |  | Order-picked-up; At-delivery |  | LBNP will have to pay forward delivery charges and RTO charges if shipment is to be RTO'd |
| 129 | 016 |  | Force majeure (accident / strike / law & order situation, etc) | LSP | LSP |  | Order-picked-up |  | There will not be any settlement in case of force majeure |
| 130 | 017 |  | Order delivery not possible (due to vehicle issues, etc) | LSP | LSP |  | Order-picked-up |  | LSP is supposed to pay a certain amount of order value to the LBNP, as quoted by LSP for the order, for non-returnable items; There will be no settlement for forward and RTO charges if the item is returnable |
| 131 | 020 |  | Order lost or damaged in transit | LSP | LSP |  | Order-picked-up |  | LSP is supposed to pay a certain amount of order value to the LBNP, as quoted by LSP for the order |
| 132 | N/A |  | Order picked up by another LSP | LSP | LBNP |  | At-pickup |  | LBNP will have to pay a certain amount (forward charge or a fixed amount as pickup cost) as quoted by LSP for the order |
| 133 |  |  | Retail buyer refused to pay for COD order | LSP | LBNP |  | At-delivery |  | LBNP will have to pay forward delivery charges and RTO charges if shipment is to be RTO'd |
| 996 | 996 | order creation | Order confirmation failure | LBNP | N/A |  | Pending | N/A | N/A |
| 997 | 997 |order creation  | Order confirmation failure | LSP |  N/A |  | Pending | N/A | N/A |
| 994 |  | order creation | Cancelling draft order | LBNP | N/A |  | Pending | N/A | N/A |
| 995 |  | order creation | Cancelling draft order | LSP |  N/A |  | Pending | N/A | N/A |
