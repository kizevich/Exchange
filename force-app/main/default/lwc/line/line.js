import { LightningElement, api } from 'lwc';

export default class Line extends LightningElement {
    @api currency;
    count;

    get countOfCurrency() {
        count = this.currency.Factor__c;
        return this.count;
    }
}