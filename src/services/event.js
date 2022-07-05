import apiConnect from "./apiConnect";

export default {
    getAll:() => {
        return apiConnect.get();
    },
    toSave:(event) => {
        return apiConnect.post('', event);
    }
};