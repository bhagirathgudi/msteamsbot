import send from 'send';

export default function tabs(server) {
    // Setup home page
    server.get('/', (req, res, next) => {
        send(req, 'src/views/hello.html').pipe(res);
    });

    // Setup the static tab
    server.get('/hello', (req, res, next) => {
        send(req, 'src/views/hello.html').pipe(res);
    });

    // Setup the configure tab, with first and second as content tabs
    server.get('/configure', (req, res, next) => {
        send(req, 'src/views/configure.html').pipe(res);
    });

    server.get('/first', (req, res, next) => {
        send(req, 'src/views/first.html').pipe(res);
    });

    server.get('/second', (req, res, next) => {
        send(req, 'src/views/second.html').pipe(res);
    });
}
//669d1fbb-e2a2-4f62-95d8-7857b86d0976
//xt.~R~vezB60YDFIQv_UWvh067RrU.A8xZ