var data = {
	
	// Private
	items: [],
	
	
	// Public
	addItem: function(name) {
		data.items.push(name);
	},
	
	getAllItems: function() {
		return data.items;
	},
	
	clearAllItems: function() {
		data.items = [];
	}
};
