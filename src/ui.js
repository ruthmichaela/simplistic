var DEFAULT_ROUTE = '/list';

var CompoItemRoute = {
	
	// State
	newItemText: '',

	addItemAndClearInput: function(vnode) {
		data.addItem(vnode.state.newItemText);
		vnode.state.newItemText = '';
	},

	view: function(vnode) {
		return m("div", {}, [
			m("p", {}, "this is the item route"),
			m("a", {href: '#!/list'}, "Go to my list"),
			m("input", {
				placeholder: "New item...",
				type: "text",
				value: vnode.state.newItemText,
				oninput: function(event) {
					vnode.state.newItemText = event.target.value;
				},
				onkeydown: function(event) {
					if(event.keyCode == 13){
						vnode.state.addItemAndClearInput(vnode);
					}
				}
			}),
			m("button", {
				disabled: vnode.state.newItemText == '',
				onclick: function(event) {
					vnode.state.addItemAndClearInput(vnode);
				},
			}, 'Add ' + vnode.state.newItemText),
			m("button",{
				disabled: vnode.state.newItemText == '',
				onclick: function(event) {
					vnode.state.newItemText = '';
				}
			}, "clear")

		]);
	}
};


var CompoListRoute = {
	view: function(vnode) {
		
		var dataItems = data.getAllItems();
		var listItems = dataItems.map(function(item) {
			return m('li', {}, item);
		});
		
		return m("div", {}, [
			m("p", {}, "this is the list route"),
			m("ul", {}, listItems),
			m("a", {href: "#!/item"}, "Make an item"),
			m('button', {
				disabled: dataItems.length == 0,
				onclick: data.clearAllItems,
			}, 'clear list')
		]);
	}
};

var routes = {
	'/item': CompoItemRoute ,
	'/list': CompoListRoute, 
};