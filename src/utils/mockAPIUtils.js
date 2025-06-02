import { data } from '../mockAPI/MockAPI';

export const fetchMockData = (endpoint, params) => {
    switch (endpoint) {
        case 'fetchSports':
            return data.fetchSports;
        case 'fetchSportsById':
            return data.fetchSportsById[params.id];
        case 'fetchMonthlyPackagesById':
            return data.fetchMonthlyPackagesById[params.id];
        case 'fetchTableTennisWithoutRobot':
            return data.fetchTableTennisWithoutRobot;
        case 'fetchSlots':
            return data.fetchSlots;
        case 'bookSports':
            return data.bookSports;
        case 'register':
            return data.register;
        case 'sendOtp':
            return data.sendOtp;
        case 'verifyOtp':
            return data.verifyOtp;
        case 'login':
            return data.login;
        case 'bookSportsWithPayment':
            return data.bookSportsWithPayment;
        case 'paymentSuccess':
            return data.paymentSuccess;
        case 'rescheduleBooking':
            return data.rescheduleBooking;
        case 'addSportsDescription':
            return data.addSportsDescription;
        case 'addSports':
            return data.addSports;
        case 'deleteSports':
            return data.deleteSports;
        case 'addMonthlyPackage':
            return data.addMonthlyPackage;
        case 'deleteMonthlyPackage':
            return data.deleteMonthlyPackage;
        case 'addTableTennisWithRobot':
            return data.addTableTennisWithRobot;
        default:
            return null;
    }
};
