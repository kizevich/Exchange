import { LightningElement, track, api, wire } from 'lwc';

export default class Menu extends LightningElement {
    @api exchanges;
    @api name;
    @track value = 'Select';

    handleClick(clickEvent) {
        const event = new CustomEvent('selectedcurrency', {
            detail: clickEvent.detail
        });
        this.value = clickEvent.detail.value;
        this.dispatchEvent(event);
    }
}