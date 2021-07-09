
const logger = require('koa-logger');
const router = require('@koa/router')();

const Koa = require('koa');
const app = module.exports = new Koa();

// middleware
app.use(logger());

// route definitions
router
    .get('/:id', sendID)
    .get('/things/:name/:id', sendNameAndId)
    .get('/things/:id([0-9]{5})', sendIDFormatted);

app.use(router.routes());

/**
 * Send id.
 */
async function sendID(ctx, next) {
    await next();
    if (!ctx.params.id) return;
    const message = 'The id you specified is ' + ctx.params.id;
    ctx.body = message;
}

/**
 * Send name and id.
 */
async function sendNameAndId(ctx, next) {
    await next();
    if (!ctx.params.name || !ctx.params.id) return;
    const message = 'id: ' + ctx.params.id + ' and name: ' + ctx.params.name;
    ctx.body = message;
}

/**
 * Send id formatted.
 */
async function sendIDFormatted(ctx, next) {
    await next();
    if (!ctx.params.id) return;
    const message = 'formatted id: ' + ctx.params.id;
    ctx.body = message;
}

// listen
if (!module.parent) app.listen(3000);