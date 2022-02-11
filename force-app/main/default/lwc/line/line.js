import { LightningElement, api } from 'lwc';

export default class Line extends LightningElement {
    @api currency;
    isBYN = false;

    get countOfCurrency() {
        return this.currency.Factor__c;
    }

    renderedCallback() {
        if(this.currency.Name === 'BYN'){
            this.isBYN = true;
        }
    }
}