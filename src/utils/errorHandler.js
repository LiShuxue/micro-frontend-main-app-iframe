const errorHandler = {};

const handler = (err, vm, info) => {
    let { 
        message,
        name,
        script,
        line,
        column,
        stack
    } = err;

    console.log(err);
    console.log(vm);
    console.log(info);
}

errorHandler.install = (Vue) => {
    Vue.config.errorHandler = handler;
    Vue.prototype.$throw = (err) => {
        handler(err, this);
    }
}

export default errorHandler;