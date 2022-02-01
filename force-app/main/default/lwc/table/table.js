import { LightningElement, track, wire } from 'lwc';
import { getAllExchanges, getExchangeByName } from 'c/data';
// import getExchanges from '@salesforce/apex/ComponentUtility.getExchanges';

export default class Table extends LightningElement {

    exchanges;
    inputValue;
    outputValue;
    selectedCurrencyId;
    currencyIn;
    currencyout;
    in__c;
    out__c;

    handleInCurrencySelected(currencyEvent) {
        this.selectedCurrencyId = currencyEvent.detail;

        if(this.selectedCurrencyId) {
            this.currencyIn = currencyEvent.detail.value;
            selectedExchange = getExchangeByName(this.currencyIn);
            this.in__c = selectedExchange.In__c / selectedExchange.Factor__c;
        }
    }  

    handleOutCurrencySelected(currencyEvent) {
        this.selectedCurrencyId = currencyEvent.detail;

        if(this.selectedCurrencyId) {
            this.currencyOut = currencyEvent.detail.value;
            selectedExchange = getExchangeByName(this.currencyOut);
            this.out__c = selectedExchange.Out__c /selectedExchange.Factor__c;
        }
    } 
    
    handleInputChange(event) {
        this.inputValue = event.detail.value;
        this.outputValue = (this.inputValue * this.in__c) / this.out__c;
    }

    connectedCallback() {
        this.exchanges = getAllExchanges();
    }

    // @wire(getExchanges)
    // allExchanges({data,error}){
    //     if (data) {
    //         this.exchanges=data;
    //     console.log(data); 
    //     } else if (error) {
    //     console.log(error);
    //     }
    // }
}