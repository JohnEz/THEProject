/* exported require */
var require = {
    paths: {
        'jquery': 'lib/jquery-2.1.4',
        'jquery-private': 'lib/jquery-private',
        'knockout': 'lib/knockout-3.3.0.debug',
        'text': 'lib/text'
    },
    map: {
        '*': {
            'jquery': 'jquery-private'
        },
        'jquery-private': {
            'jquery': 'jquery'
        }
    }
};
