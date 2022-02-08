public class GalleryController {
    
    @AuraEnabled(cacheable=true)
    public static List<Map<String, Object>> getResources(List<String> resourceNames) {
        System.debug(resourceNames);
        List<SObject> staticResources = [SELECT Name, SystemModStamp FROM StaticResource WHERE Name=:resourceNames];
        System.debug(staticResources);
        List<Map<String, Object>> resources = new List<Map<String, Object>>();
        for (SObject staticResource : staticResources) {
            Map<String, Object> readOnlyResource = staticResource.getPopulatedFieldsAsMap();
            Map<String, Object> resource = new Map<String, Object>();
            resource.putAll(readOnlyResource);
            String src = '/resource/'
                + String.valueOf(((DateTime) resource.get('SystemModstamp')).getTime())
                + '/'
                + resource.get('Name');
            resource.put('src', src);
            resource.put('Price', '10');
            resource.put('Stock', '2');
            resource.put('Description', 'Sample item description');
            resources.add(resource);
        }
        // System.debug(resources);
        return resources;
    }
    
}