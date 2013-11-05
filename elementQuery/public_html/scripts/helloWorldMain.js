require.config({
    "baseUrl": "scripts/",
    paths: {
        'jQuery': 'jQuery/jquery-2.0.3',
        'elementQuery': 'elementQuery/elementQuery'
    },
    shim: {
        'jQuery': {
            exports: 'jQuery'
        },
        'elementQuery': {
            deps: ['jQuery'],
            exports: 'window'
        }
    }
});

require(['jQuery', 'elementQuery'], function () {
    console.log('Hello world!');
});
