const $anaconda = (arg) => {
    // DOMContentLoaded
    if(typeof arg === 'function') {
        document.addEventListener('DOMContentLoaded', arg);
        return;
    }
    // Selector to CSS
    let items;
    if(typeof arg === 'string') {
        items = document.querySelectorAll(arg);
    }

    // Item Element
    if(arg instanceof HTMLElement) {
        items = [arg];
    }

    // CSS       
    items.css   = (...args) => {
        const [property, value] = args;
        const isString          = typeof property === 'string';            
        items.forEach(item => {
        if(isString) {
            item.style[property] = value;
        } else {
            const entriesCSS = Object.entries(property);
            entriesCSS.forEach(([property, value])=> {
                item.style[property] = value;
            });
        }
        });            
        return items;
    };

    // addEventListener
    items.on = (event, callback) => {
        items.forEach(item => {
            item.addEventListener(event, callback);
        });
        return items;
    };

    // 
    items.each = (fnctn) => {
        items.forEach((item, index) => {
            fnctn(index, item);
        });
        return items;
    };

    // Fade In
    items.fadeIn = (duration = 1000) => {
        items.forEach((item, index) => {
            const animation = item.animate([
                { opacity: 0 },
                { opacity: 1 }
            ], { duration });
            animation.onfinish = () => item.style.opacity = 1;
        });
        return items;
    };
    return items;
    
};
