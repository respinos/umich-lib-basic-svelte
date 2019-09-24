import UniversalHeader from './components/universal-header/index.svelte';
import Chat from './components/chat/index.svelte';
import { GlobalStyleSheet } from './shared/styles';

GlobalStyleSheet();

var registered = {};
registered['universal-header'] = UniversalHeader;
registered['chat'] = Chat;

var components = {};
var possibles = document.querySelectorAll('[data-is]');
for(var i = 0; i < possibles.length; i++) {
	var possible = possibles[i];
	var component = possible.dataset.is;
	console.log("--", component);
	if ( registered[component] ) {
		if ( components[component] === undefined ) {
			components[component] = [];
		}
		components[component].push(new registered[component]({
			target: possible
		}));
	}
}

// export {UniversalHeader};
export {registered};
export default components;