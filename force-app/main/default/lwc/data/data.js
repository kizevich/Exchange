import getExchangesApex from '@salesforce/apex/ComponentUtility.getExchanges';

const getExchanges = () => getExchangesApex();

export { getExchanges }