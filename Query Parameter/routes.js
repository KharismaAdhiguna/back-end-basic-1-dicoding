const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage'
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        }
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger"} = request.params;
            const { lang } = request.query;

            if(lang === 'id') {
                return `Hai, ${name}!`;
            }
            return `Hello, ${name}!`;
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        }
    }
];

module.exports = routes;

//curl -X GET http://localhost:5000/hello/dicoding?lang=id
// output: Hai, dicoding!
//curl -X GET http://localhost:5000/hello/dicoding
// output: Hello, dicoding!
