/**
 * Created by trinm on 2022/06/27
 */

/**
 * BASE config
 */
 exports.BASE = {
    HOST: '127.0.0.1',
    PORT: 3002,
    SALT: '$6*7&8^9mvc@#!AI',
    SALTROUNDS: 12,
    SESSION: 1000 * 60 * 60 * 24 * 2, //2 day
    VERSION: '20220627',
    META: {
        NAME: "Blueseed.tv",
        AUTHOR: 'Blueseed.tv',
        TITLE: 'Blueseed Dashboard',
        DESCRIPTION: 'Report management, data analysis',
        KEYWORD: 'affiliate, admin, dashboard, report',
        IMAGE: '/static/media/logoa.png',
    }
};


/**
 * DATABASE config
 */
exports.DB = {
    MONGODB: 'mongodb://127.0.0.1:27017/url_shortener',
    // SQL_MATOMO: {
    //     connectionLimit: 100, //important
    //     host: "db-dev.blueseed.tv",
    //     user: "ngavn",
    //     password: "nmD8YGoVulvi8rF*d12f4ZlY",
    //     database: "matomo"
    // },
    // SQL_B1URL: {
    //     connectionLimit: 100, //important
    //     host: "db-dev.blueseed.tv",
    //     user: "ngavn",
    //     password: "nmD8YGoVulvi8rF*d12f4ZlY",
    //     database: "b1url_com"
    // },
    // TOKEN_MURAD: '360D9334F3B49E8A3D59B270AB53DC03592F36F2CC10202BE3142D694640E52E',
    // TOKEN_GREEN: '8240A1D1BE03E7BC951C51E7CB0B9753EB1EB53C3EA73604DA0A40D4E8D1E253',
};

/**
 * REDIS config
 */
exports.REDIS = {

    LOCATION_DATA: {HOST: '127.0.0.1', PORT:6379}
  

};

/**
 * User Local
 */
exports.USER = [
    // {_id : '1000', username: 'superadmin', email: 'superadmin@blueseed.tv', password: 'thenew@2019', roles: {superadmin: 1} },
    // {_id : '1001', username: 'admin', email: 'admin@blueseed.tv', password: 'thenew@2019', roles: {admin: 1} },
    // {_id : '1002', username: 'manager', email: 'manager@blueseed.tv', password: 'thenew@2019', roles: {admin: 1} },
    // {_id : '1003', username: 'customer', email: 'customer@blueseed.tv', password: '2018@operator', roles: {guest: 1} },
    // {_id : '1004', username: 'sales', email: 'manager@blueseed.tv', password: '2018@sales', roles: {user: 1} },
    // {_id : '1005', username: 'adops', email: 'customer@blueseed.tv', password: '2018@adops', roles: {user: 1} }

    // {_id : '1000', username: 'ins', email: 'ins@blueseed.tv', password: 'lvi8rF*d12f4ZlY', roles: 'partner', partner:['ins'], earncomn:25,site:[2]},
    // {_id : '1002', username: 'ngavn_agency', email: 'ngavn_agency@blueseed.tv', password: '123456', roles: 'agency', partner:['ins', 'pops'], earncomn:25},
    // {_id : '1003', username: 'luomnv', email: 'luomnv@blueseed.tv', password: '8YG*d12f4ZlY', roles: 'agency', partner:['ins', 'pops'], earncomn:25},
    // {_id : '1004', username: 'nguyen.tran', email: 'nguyen.tran@popsww.com', password: 'Vulvi8rF*d12f4ZlY', roles: 'partner', partner:['pops'], earncomn:25},
    // {_id : '1005', username: 'phuc.vo', email: 'phuc.vo@popsww.com', password: 'mD8Y*d12f4ZlY', roles: 'partner', partner:['pops'], earncomn:25},
];


/**
 * Google oauth
 */
exports.OAUTH = {
    GOOGLE: {
        clientID: '438369873389-m0gobsqb949a8ae2dvadp7oc95sujh7i.apps.googleusercontent.com',
        clientSecret: 'wQX9EYzW2XcCY1LalMgEw9rW',
        callbackURL: 'http://admin.hadarone.com/auth/google/callback/'
    },
    ZALO_DEV: {
        appId: '179369865880318603',
        appSecret: '6oP17bWENrA2M1u6N1C8',
        redirectUri: 'https://game.bluescope.com.vn/auth/zalo/callback/'
    },
    ZALO: {
        appId: '3739478317073177387',
        appSecret: 'RC87EPlJSH5XYi27Jh64',
        redirectUri: 'https://game-dev.blueseed.tv/auth/zalo/callback/'
    },
};

/**
 * Entity actions default with roles
 */
exports.ENTITY = {
    // users: {superadmin: 1, admin: 1},
    // person: {superadmin: 1, admin: 1},
    // spin: {superadmin: 1, admin: 1},
    // gift: {superadmin: 1, admin: 1},
    // inventory: {superadmin: 1, admin: 1},
};

/**
 * URL passing with roles
 */
exports.URL_PASS = {
    //'/users/list/': {roles: ['superadmin','admin'], method: ['get', 'post', 'put']},
    // '/api/*': {roles: ['superadmin', 'admin', 'user'], method: ['post', 'put']},
    // '/users/*': {roles: ['superadmin', 'admin'], method: ['get', 'post', 'put']}, // pass url (method get, post, put) with roles superadmin, admin
    // '/person/*': {roles: ['superadmin', 'admin'], method: ['get']},
    // '/spin/*': {roles: ['superadmin', 'admin'], method: ['get']},
    // '/gift/*': {roles: ['superadmin', 'admin'], method: ['get']},
    // '/inventory/*': {roles: ['superadmin', 'admin'], method: ['get']},
};
