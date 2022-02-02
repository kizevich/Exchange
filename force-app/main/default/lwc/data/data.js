import { wire } from 'lwc';
import getExchanges from '@salesforce/apex/ComponentUtility.getExchanges';

const getAllExchanges = () => {
    return new Promise(resolve => {
        getExchanges()
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                resolve(error);
            });
    });
    try {
        return getExchanges();
    } catch(error) {
        console.log(error);
    }
};

export const getExchangeByName = function(name) {
    exchanges = getExchanges();
    return exchanges.find(Exchange__c => Exchange__c.Name == name);
};

export { getAllExchanges }
