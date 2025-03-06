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
        "version": "2.0.0",
        "action": "init"
    },
    "message": {
        "order": {
            "id": "O2",
            "fulfillments": [
                {
                    "id": "F1",
                    "stops": [
                        {
                            "type": "START",
                            "contact": {
                                "phone": "9886098860",
                                "email": "abcd.efgh@gmail.com",
                                "tags": [
                                    {
                                        "descriptor": {
                                            "code": "MASKED_CONTACT"
                                        },
                                        "list": [
                                            {
                                                "descriptor": {
                                                    "code": "TYPE"
                                                },
                                                "value": "ivr_pin"
                                            },
                                            {
                                                "descriptor": {
                                                    "code": "SETUP"
                                                },
                                                "value": "1800180000"
                                            },
                                            {
                                                "descriptor": {
                                                    "code": "TOKEN"
                                                },
                                                "value": "12345"
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "type": "END",
                            "contact": {
                                "phone": "9886098860",
                                "email": "abcd.efgh@gmail.com",
                                "tags": [
                                    {
                                        "descriptor": {
                                            "code": "MASKED_CONTACT"
                                        },
                                        "list": [
                                            {
                                                "descriptor": {
                                                    "code": "TYPE"
                                                },
                                                "value": "ivr_without_pin"
                                            },
                                            {
                                                "descriptor": {
                                                    "code": "SETUP"
                                                },
                                                "value": "1800180000"
                                            },
                                            {
                                                "descriptor": {
                                                    "code": "TOKEN"
                                                },
                                                "value": ""
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    }
}