const Koa = require("koa");
const koaStatic = require("koa-static");

const app = new Koa();
app.use((ctx, next) => {
  let url = ctx.url;
  let suf = url.replace(/^.*\./, "");
  if (!suf || suf == url) ctx.url = "/";
  console.info("req", ctx.url, suf);
  return next();
});
app.use(koaStatic("./dist", {}));

app.listen(3100);
