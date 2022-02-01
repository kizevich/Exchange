import { LightningElement, track, wire } from 'lwc';
import getExchanges from '@salesforce/apex/ComponentUtility.getExchanges';

export default class List extends LightningElement {
    @track exchanges;
    @track value;

    @wire(getExchanges)
    allExchanges({data,error}){
        if (data) {
            this.exchanges=data;
        console.log(data); 
        } else if (error) {
        console.log(error);
        }
    }

    handleClick(clickEvent) {
        const event = new CustomEvent('selectedcurrency', {
            detail: clickEvent.detail
        });
        this.value = clickEvent.detail.value;
        this.dispatchEvent(event);
    }
}