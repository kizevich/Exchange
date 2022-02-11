import { LightningElement, track, wire } from 'lwc';
import getExchangesApex from '@salesforce/apex/ComponentUtility.getExchanges';

export default class Table extends LightningElement {

    @track
    allExchanges = [];
    inputValue;
    outputValue;
    currencyName;
    in__c;
    out__c;

    onCurrencySelected(currencyEvent) {
        if(currencyEvent) {
            this.currencyName = currencyEvent.detail.value;
            this.allExchanges.forEach((oneExchange) => {
                if(oneExchange.Name === this.currencyName) {
                    if(currencyEvent.target.name == "input") {
                        this.in__c = oneExchange.In__c / oneExchange.Factor__c;
                    } else if(currencyEvent.target.name == "output") {
                        this.out__c = oneExchange.Out__c /oneExchange.Factor__c;
                    }
                }
            });
        }
    }   
    
    onInputChange(event) {
        this.inputValue = event.detail.value;
        this.outputValue = ((this.inputValue * this.in__c) / this.out__c).toFixed(2);
    }

    @wire(getExchangesApex)
    allExchanges({data,error}){
        if (data) {
            this.allExchanges=data;
            console.log(data);
        } else if (error) {
        console.log(error);
        }
    }
}