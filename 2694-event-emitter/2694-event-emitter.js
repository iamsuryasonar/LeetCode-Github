class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    
    constructor() {
        this.map = new Map();
    }

    subscribe(eventName, callback) {
        if(this.map.has(eventName)){
            this.map.set(this.map.get(eventName),this.map.get(eventName).push(callback))
        }else{
            this.map.set(eventName,[callback])
        }
        
        return {
            unsubscribe: () => {
                if(this.map.has(eventName)){
                    this.map.get(eventName).splice(this.map.get(eventName).indexOf(callback),1)
                }
                return undefined;
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        let result = [];
         if(this.map.has(eventName)){
             for(let item of this.map.get(eventName)){
                 if(typeof item ==='function'){
                     result.push(item(...args))
                 }else{
                     result.push(item)
                 }
             }
         }
         return result;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */