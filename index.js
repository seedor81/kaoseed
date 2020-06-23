const Koa = require('koa');
const KoaRouter = require('koa-router');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
app.use(bodyParser());
const router = new KoaRouter();
app.use(static(__dirname+"/"));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000)