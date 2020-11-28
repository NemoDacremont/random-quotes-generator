
import mitt from 'mitt';

const emitter = mitt();

emitter.on('*', (e) => {
	console.log('event triggered:', e.toString());
});

export default emitter;
