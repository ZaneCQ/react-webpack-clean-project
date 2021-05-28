class MyPlugin {
    /* constructor(options) {
        console.log('constructor - MyPlugin');
    } */

    apply(compiler) {
        console.log('========MyPlugin========');
        // console.log('compiler:', compiler);

        /* compiler.hooks.emit.tap('MyPlugin', (compilation) => {
            // 在功能流程完成后可以调用 webpack 提供的回调函数；
            console.log('11111111111111111111');
        }); */


        /* compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, cb) => {
            console.log('compilation assets:', Object.keys(compilation.assets));
        }); */

        /* compiler.hooks.make.tap('a', (compilation) => {
            console.log('optimize-----', compilation);
        }) */

        /* compiler.hooks.run.tap('run', (compilation) => {
            console.log('开始编译...');
            console.log('compilation:', compilation.assets)
        }); */

        compiler.hooks.compile.tap('compile', (compilation) => {
            // console.log('compile=============', compiler)
        });

        /* compiler.hooks.done.tap('compilation', () => {
            console.log('compilation')
        }); */

        // 如果事件是异步的，会带两个参数，第二个参数为回调函数，
        // console.log('plugin:', compiler.plugin);
        /* compiler.plugin('emit', function (compilation, callback) {
            // 处理完毕后执行 callback 以通知 Webpack
            // 如果不执行 callback，运行流程将会一直卡在这不往下执行
            console.log('22222222222222222222222');
            callback()
        }); */

    }
};

module.exports = MyPlugin;