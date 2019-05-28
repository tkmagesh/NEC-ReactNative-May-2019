var SM = (function(){
	
	var _currentState = undefined,
		_subscriptions = [],
		_reducer = null,
		_init_action = '@@INIT';

	function getState(){
		return _currentState;
	}

	function subscribe(callback){
		_subscriptions.push(callback);
	}

	function triggerChange(){
		_subscriptions.forEach(callback => callback());
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(undefined, _init_action);
		return { getState, subscribe, dispatch };
	}

	return { createStore };

})();