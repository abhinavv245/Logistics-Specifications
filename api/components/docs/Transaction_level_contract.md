# Transaction Level Contract

## Overview
The **Transaction Level Contract** outlines the standard **terms & conditions** between participating **Network Participants (NPs)**. This codified digital contract consists of:
- **Configurable Terms**: Defined by the seller.
- **Static Terms**: Defined by the **Logistics Service Provider (LSP)**.
- **Reference Clauses**: Serve as a guide for participants to draft their static terms.

A reference to these static terms will be included in **every online transaction** between two participants.

## Proposed Flow

### **Version Control & Publishing**
- **Static terms** will be **version-controlled** in a **GitHub repository**.
- **Versioning:**
  - All static terms will begin with **version 1.0.0**.
  - Any changes will increment the version.
- **Submission Process:**
  1. **NP creates a Pull Request (PR)** for their static terms.
  2. **ONDC merges the PR** and shares the link with the NP.
  3. **Naming Convention for Repository Branches:**
     - Format: `<NP_Name>_Role` (e.g., `Loadshare_LSP`, `Shadowfax_LSP`).
     - **Role Values:** `LSP` (Logistics Service Provider).
  4. NP **merges static terms** into this branch.
  5. NP **creates a PR** for these changes.
- **Publishing Channels:**
  - LSPs can publish static terms on multiple channels, such as **their website** and the **ONDC portal**.

### **Communication & Acceptance of Static Terms**

#### **1. Communication by LSP**
- LSP **sends additional information** in `/on_search`, including:
  1. **Current Static Terms Link & Version:**
     - Initially, this will be a **blank link**.
  2. **New Static Terms Link & Version:**
     - Initially, this will contain the **GitHub link**.
  3. **Effective Date for New Static Terms**.
- **Timing & Frequency:**
  - This information will be sent **for 24 hours** as part of a **full catalog pull** after publication.
  - **24 hours before the effective date**, LSP will **resend** this information.
  - If LSP needs to **change the effective date**, they must **update the date** and repeat the above process.
  - If LSP wants to **modify static terms**, they must **resubmit a PR** with a new version number.
- **Recommended Advance Notice:**
  - LSPs should provide **at least 15 days’ notice** before updating their static terms.

#### **2. Acceptance by LBNP**
- If LBNP **accepts** the static terms in `/on_search`, they must send `accept="Y"` in the **ACK response**.
- If LBNP **rejects** the static terms in `/on_search`, they must send `accept="N"` in the **ACK response**.
- If LBNP **does not accept** the static terms for an LSP, they **must stop sending order requests** to that LSP.
- **Final Agreement:**
  - The agreed static terms between **LBNP & LSP** will be included in **both** `/confirm` and `/on_confirm` transactions.
