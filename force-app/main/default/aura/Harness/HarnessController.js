({
	handleImageClickEvent: function(component, event) {
		const resource = event.getParam('payload')
        
        const payloadResourceId = resource.Id
        const resourceId = component.get('v.resourceId')
        const showDesc = component.get('v.showDesc')
       	
        if (payloadResourceId == resourceId && showDesc == true) {
            component.set('v.showDesc', false)
        } else {
            component.set('v.showDesc', true)
        }
        
        component.set('v.resourceId', payloadResourceId)
	}
})