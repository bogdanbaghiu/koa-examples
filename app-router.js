var koa = require('koa');
var app = new koa();
var Router = require('koa-router');
var router = new Router();

router.get('/', async function (ctx) {
    // You can use `await` in here
    ctx.body = "hello world";
    console.log("success")
});

router.get('/hello', async function (ctx) {
    ctx.body = await getMessage();
});

function getMessage() {
    return "Hello world 2!";
};

router.post('/hello', async function (ctx) {
    ctx.body = postMessage();
});

function postMessage() {
    return "You just called the post method at '/hello'!\n";
};

router.all('/test', async function (ctx) {
    ctx.body = allMessage();
});

function allMessage() {
    return "All HTTP calls regardless of the verb will get this response";
};

app.use(router.routes());

app.listen(3000);
console.log("listening on 3000");