public class ComponentUtility {
    
    @AuraEnabled(cacheable = true)
    public static List<Exchange__c> getExchanges(){
        System.debug(Exchange__c.getAll().values());
        return Exchange__c.getAll().values(); 
    }    
}
