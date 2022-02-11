import { LightningElement, wire, api } from 'lwc';

export default class List extends LightningElement {
    @api
    exchanges;
}