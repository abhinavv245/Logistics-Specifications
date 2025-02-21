# Call Masking - 010

## Overview
Call masking is a technique used to protect the privacy of both buyers and sellers by preventing direct sharing of their actual phone numbers. Instead, alternative contact modes like **IVR (Interactive Voice Response)** or **API endpoints** can be used for communication. This ensures secure and controlled interactions without exposing personal contact details.

## Key Features
- **Privacy Protection**: Real phone numbers of buyers and sellers are not shared.
- **IVR-Based Communication**: Contact is facilitated via IVR (Interactive Voice Response) without requiring direct phone numbers.
- **Alternative Contact Methods**: Supports additional contact methods such as API endpoints.
- **Configurable Setup**: The system allows specifying IVR setups with or without PIN authentication.

## Payload Changes
### Additional Contact Modes

```json
{
  "context": {
    "action": "init",
    "core_version": "1.2.5",
    ..
  },
  "message": {
    "order": {
      "id": "O2",
      "fulfillments": [
        {
          "id": "..",
          ..
          "start": {
            ..
            "contact": {
              "phone": "9886098860",
              "email": "abcd.efgh@gmail.com",
              "tags": [
                {
                  "code": "masked_contact",
                  "list": [
                    {
                      "code": "type",
                      "value": "ivr_pin"
                    },
                    {
                      "code": "setup",
                      "value": "1800180000"
                    },
                    {
                      "code": "token",
                      "value": "12345"
                    }
                  ]
                }
              ]
            }
          },
          "end": {
            ..
            "contact": {
              "phone": "9886098860",
              "email": "abcd.efgh@gmail.com",
              "tags": [
                {
                  "code": "masked_contact",
                  "list": [
                    {
                      "code": "type",
                      "value": "ivr_without_pin"
                    },
                    {
                      "code": "setup",
                      "value": "1800180000"
                    },
                    {
                      "code": "token",
                      "value": ""
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      ..
    }
  }
}