'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')



Route.post('/api/mutualiste/paginatedListByCriteria', ({ request, response, view }) => {
    return {
        list : [
            {id: 12,code: 'M',libelle: 'm1',description: 'm1',ordre: 1,actif: true,hl7: 'm1',client : {id:1, label:'client 1'}},
            {id: 13,code: 'S',libelle: 'm2',description: 'm2',ordre: 2,actif: true,hl7: 'm2',client : {id:2, label:'client 2'}}
        ],   
        dataSize : 2
      }
});

Route.post('/api/mutualiste', ({ request, response, view }) => {
    return 2;
});


Route.get('/api/mutualiste/getNextOrdre', ({ request, response, view }) => {
    return 3;
});


Route.get('/api/mutualiste/getUtilisateursList', ({ request, response, view }) => {
    return [
        {id:1, label:'user 1'},
        {id:2, label:'user 2'},
        {id:3, label:'user 3'},
        {id:4, label:'user 4'},
        {id:5, label:'user 5'},
        {id:6, label:'user 6'}
    ];
});

Route.get('/api/mutualiste/getClientList', ({ request, response, view }) => {
    return [
        {id:1, label:'client 1'},
        {id:2, label:'client 2'},
        {id:3, label:'client 3'}
    ];
});

Route.get('/api/mutualiste/:id', ({ request, response, view }) => {
    return {
        id: 12,
        code: 'M',
        libelle: 'm1',
        description: 'm1',
        ordre: 1,
        actif: true,
        hl7: 'm1',
        client : {id:1, label:'client 1'},
        Utilisateurs: [{id:1, label:'user 1'},{id:2, label:'user 2'}]
    };
});

Route.put('/api/mutualiste/:id', ({ request, response, view }) => {
    return {id: 12, code: 'M', libelle: 'm1', description: 'm1', ordre: 1, actif: true, hl7: 'm1', client : {id:1, label:'client 1'}};
});


// ________________________________________________________________________________________________________________
// ----------------------------------------------------------------------------------------------------------------
Route.post('/api/radiotherapie/find-paginated-by-criteria', ({ request, response, view }) => {
    return {
        list : [
            {id: 12, code: 'M', libelle: 'm1', ordre: 1, actif:true, hl7:'hlll' },
            {id: 13, code: 'S', libelle: 'm2', ordre: 2, actif:true, hl7:'hlll'}
        ],   
        dataSize : 2
      }
});

Route.post('/api/radiotherapie', ({ request, response, view }) => {
    return 3;
});


Route.get('/api/radiotherapie/getNextOrdre', ({ request, response, view }) => {
    return 3;
});


Route.get('/api/radiotherapie/:id', ({ request, response, view }) => {
    return {
        id: 12,
        code: 'M',
        libelle: 'm1',
        actif:true, 
        hl7:'hlll',
        ordre:2
    };
});

Route.put('/api/radiotherapie/:id', ({ request, response, view }) => {
    return {    id: 12,
                code: 'M',
                libelle: 'm1',
                actif:true, 
                hl7:'hlll',
                ordre:2
            };
});


// auth
Route.post('/api/auth/token', ({ request, response, view }) => {
    return {
        "token" : "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjLmJlenpheiIsImlhdCI6MTY3NDcxNjAyOSwiZXhwIjoxNjc0NzQ0ODI5fQ.lvmV9_n-5oprXjx8WyJv_HNvdcFWnay-ONl5a9eYQYYB2-kcrUxG12dhPwIJRu6FyB60crtyd7PWjaG8jbbr8w"
    };
});

