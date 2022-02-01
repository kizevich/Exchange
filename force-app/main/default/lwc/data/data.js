import getExchanges from '@salesforce/apex/ComponentUtility.getExchanges';

export const getAllExchanges = function() {
    try {
        return getExchanges();
    } catch(error) {
        console.log(error);
    }
}

export const getExchangeByName = function(name) {
    exchanges = getExchanges();
    return exchanges.find(Exchange__c => Exchange__c.Name == name);
} 
