export const data = {
    "fetchSports": {
        "responseMessage": "sports fetched successfully",
        "status": null,
        "sports": [
            {
                "id": 1,
                "sportValue": "Cricket",
                "status": 1
            },
            {
                "id": 2,
                "sportValue": "TableTennis",
                "status": 1
            }
        ],
        "success": true
    },
    "fetchSportsById": {
        "1": {
            "responseMessage": "sports fetched successfully",
            "status": null,
            "sportsDescription": [
                {
                    "id": 1,
                    "description": "10 Over Session",
                    "price": 149.0,
                    "status": 1,
                    "sportsId": 1
                },
                {
                    "id": 2,
                    "description": "20 Over Session",
                    "price": 249.0,
                    "status": 1,
                    "sportsId": 1
                },
                {
                    "id": 3,
                    "description": "40 Over Session",
                    "price": 349.0,
                    "status": 1,
                    "sportsId": 1
                },
                {
                    "id": 7,
                    "description": "05 Over Session",
                    "price": 100.0,
                    "status": 1,
                    "sportsId": 1
                }
            ],
            "success": true
        },
        "2": {
            "responseMessage": "sports fetched successfully",
            "status": null,
            "sportsDescription": [
                {
                    "id": 4,
                    "description": "100 Balls Session",
                    "price": 149.0,
                    "status": 1,
                    "sportsId": 2
                },
                {
                    "id": 5,
                    "description": "200 Balls Session",
                    "price": 249.0,
                    "status": 1,
                    "sportsId": 2
                },
                {
                    "id": 6,
                    "description": "300 Balls Session",
                    "price": 349.0,
                    "status": 1,
                    "sportsId": 2
                }
            ],
            "success": true
        }
    },
    "fetchMonthlyPackagesById": {
        "1": {
            "responseMessage": "sports fetched successfully",
            "status": null,
            "monthlyPackages": [
                {
                    "id": 1,
                    "description": "150 Over Package",
                    "descriptionValidity": "(Max. 20 overs per day, valid for 1 month)",
                    "price": 999.0,
                    "status": 1,
                    "sportsId": 1
                },
                {
                    "id": 2,
                    "description": "350 Over Package",
                    "descriptionValidity": "(Valid for 1 month)",
                    "price": 1999.0,
                    "status": 1,
                    "sportsId": 1
                }
            ],
            "success": true
        },
        "2": {
            "responseMessage": "sports fetched successfully",
            "status": null,
            "monthlyPackages": [
                {
                    "id": 3,
                    "description": "3000 Balls Package",
                    "descriptionValidity": "(Max. 300 balls per day, valid for 1 month)",
                    "price": 999.0,
                    "status": 1,
                    "sportsId": 2
                },
                {
                    "id": 4,
                    "description": "6000 Balls Package",
                    "descriptionValidity": "(Valid for 1 month)",
                    "price": 1799.0,
                    "status": 1,
                    "sportsId": 2
                },
                {
                    "id": 5,
                    "description": "9000 Balls Package",
                    "descriptionValidity": "(Valid for 1 month)",
                    "price": 2500.0,
                    "status": 1,
                    "sportsId": 2
                }
            ],
            "success": true
        }
    },
    "fetchTableTennisWithoutRobot": {
        "responseMessage": "tableTennisWithRobot fetched successfully",
        "status": null,
        "tableTennisWithRobot": [
            {
                "id": 1,
                "description": "30-Minute Session",
                "price": 200.0,
                "status": 1
            },
            {
                "id": 2,
                "description": "1-Hour Session",
                "price": 349.0,
                "status": 1
            }
        ],
        "success": true
    },
    "fetchSlots": [
        "05:00 - 05:45 am",
        "05:45 - 06:30 am",
        "06:30 - 07:15 am",
        "07:15 - 08:00 am",
        "08:00 - 08:45 am",
        "08:45 - 09:30 am",
        "09:30 - 10:15 am",
        "10:15 - 11:00 am",
        "11:00 - 11:45 am",
        "11:45 - 12:30 pm",
        "12:30 - 01:15 pm",
        "01:15 - 02:00 pm",
        "02:00 - 02:45 pm",
        "02:45 - 03:30 pm",
        "03:30 - 04:15 pm",
        "04:15 - 05:00 pm",
        "05:00 - 05:45 pm",
        "05:45 - 06:30 pm",
        "06:30 - 07:15 pm",
        "07:15 - 08:00 pm",
        "08:00 - 08:45 pm",
        "08:45 - 09:30 pm",
        "09:30 - 10:15 pm",
        "10:15 - 11:00 pm"
    ],
    "bookSports": {
        "bookingId": null,
        "timeSlot": "10-11",
        "date": "2025/01/01",
        "userId": 1,
        "sportsId": 1,
        "status": "active",
        "description": "10 over session - 149"
    },
    "register": {
        "emailId": "drishti23@gamil.com",
        "mobileNumber": "+919166168764",
        "password": "msnfjdbj23cH3vd",
        "role": "customer"
    },
    "sendOtp": {
        "mobileNumber": "+91xxxxxxxxxx"
    },
    "verifyOtp": {
        "mobileNumber": "+91xxxxxxxxxx",
        "otp": 662380
    },
    "login": {
        "mobileNumber": "+919654606171",
        "password": "FreeHitZone20251501",
        "role": "admin"
    },
    "bookSportsWithPayment": {
        "bookingId": null,
        "description": "10 over session - 149",
        "timeSlot": "10-11",
        "date": "2025/01/01",
        "userId": 1,
        "sportsId": 1,
        "status": "active",
        "amount": 149,
        "mobileNumber": "+919654606171",
        "orderId": "order_123"
    },
    "paymentSuccess": {
        // ...existing code...
    },
    "rescheduleBooking": {
        // ...existing code...
    },
    "addSportsDescription": {
        "description": "New Description",
        "price": 100.0,
        "status": 1,
        "sportsId": 1
    },
    "addSports": {
        "sportValue": "New Sport",
        "status": 1
    },
    "deleteSports": {
        "sportsId": 1
    },
    "addMonthlyPackage": {
        "description": "New Monthly Package",
        "descriptionValidity": "Valid for 1 month",
        "price": 1000.0,
        "status": 1,
        "sportsId": 1
    },
    "deleteMonthlyPackage": {
        "sportsId": 1
    },
    "addTableTennisWithRobot": {
        "description": "New Table Tennis Session",
        "price": 200.0,
        "status": 1
    }
};

export const fetchMockData = (endpoint) => {
    switch (endpoint) {
        case "fetchSports":
            return data.fetchSports;
        case "fetchSportsById":
            return data.fetchSportsById;
        case "fetchMonthlyPackagesById":
            return data.fetchMonthlyPackagesById;
        case "fetchTableTennisWithoutRobot":
            return data.fetchTableTennisWithoutRobot;
        case "fetchSlots":
            return data.fetchSlots;
        case "bookSports":
            return data.bookSports;
        case "register":
            return data.register;
        case "sendOtp":
            return data.sendOtp;
        case "verifyOtp":
            return data.verifyOtp;
        case "login":
            return data.login;
        case "bookSportsWithPayment":
            return data.bookSportsWithPayment;
        case "paymentSuccess":
            return data.paymentSuccess;
        case "rescheduleBooking":
            return data.rescheduleBooking;
        case "addSportsDescription":
            return data.addSportsDescription;
        case "addSports":
            return data.addSports;
        case "deleteSports":
            return data.deleteSports;
        case "addMonthlyPackage":
            return data.addMonthlyPackage;
        case "deleteMonthlyPackage":
            return data.deleteMonthlyPackage;
        case "addTableTennisWithRobot":
            return data.addTableTennisWithRobot;
        default:
            return null;
    }
};
