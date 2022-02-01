import { LightningElement } from 'lwc';
import { getAllExchanges } from 'c/data';
// import getExchanges from '@salesforce/apex/ComponentUtility.getExchanges';

export default class List extends LightningElement {
    exchanges;

    // @wire(getExchanges)
    // allExchanges({data,error}){
    //     if (data) {
    //         this.exchanges=data;
    //     console.log(data); 
    //     } else if (error) {
    //     console.log(error);
    //     }
    // }

    connectedCallback() {
        this.exchanges = getAllExchanges();
    }
}