import { LightningElement, api } from 'lwc';

export default class Line extends LightningElement {
    @api currency;
    count;

    get countOfCurrency() {
        if (this.currency.Name == 'PLN') {
            this.count = 10;
        } else if(this.currency.Name == 'RUB') {
            this.count = 100;
        } else {
            this.count = 1;
        }
        return this.count;
    }
}