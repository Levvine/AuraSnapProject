({
	handleImageClickEvent: function(component, event) {
		const resource = event.getParam('payload')  
        
        const payloadResourceId = resource.Id
        const resourceId = component.get('v.id')
        const showDesc = component.get('v.showDesc')
       	
        if (payloadResourceId == resourceId && showDesc == true) {
            component.set('v.showDesc', false)
        } else {
            component.set('v.showDesc', true)
        }
        
        component.set('v.id', payloadResourceId)
        
        component.set('v.name', resource.Name)
        component.set('v.price', resource.Price)
        component.set('v.stock', resource.Stock)
        component.set('v.description', resource.Description)
	}
})