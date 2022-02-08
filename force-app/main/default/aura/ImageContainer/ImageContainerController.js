({
    fireImageClickEvent: function(component, event) {
        const resource = component.get('v.resource')
        
        const imageClickEvent = $A.get('e.c:ImageClickEvent')
        imageClickEvent.setParams({
            'payload': resource
        })
        imageClickEvent.fire()
    }
})