public class ComponentUtility {
    
    @AuraEnabled(cacheable=true)
    public static List<Exchange__c> getExchanges(){
        return Exchange__c.getAll().values(); 
    }    
}
