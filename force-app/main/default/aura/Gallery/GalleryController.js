({
	init: function(component) {
        const resourceNames = component.get('v.resourceNames')
        
		const fetchResources = component.get('c.getResources')
        fetchResources.setParams({ resourceNames: resourceNames })
        fetchResources.setCallback(this, function(response) {
        	const state = response.getState()
            if (state === "SUCCESS") {
                const resources = response.getReturnValue()
                component.set("v.resources", resources)
                // console.log(resources);
            } else if (state === "ERROR") {
                for (const e of response.getError()) {
                    console.error(e.message)
                }
            }
        })
        $A.enqueueAction(fetchResources)
	}
})