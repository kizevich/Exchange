import { LightningElement, api } from 'lwc';

export default class Detail extends LightningElement {

    currency;

    _currencyId = undefined;

    set currencyId(value) {
        this._currencyId = value;
        // this.currency = exchanges.find(exchange => exchange.Id === value);
    }

    @api get currencyId() {
        return this._currencyId;
    }
}