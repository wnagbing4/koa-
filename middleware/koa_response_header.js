module.exports = async (ctx, next) => {
    const contentType='application/json; charset=utf-8'
    ctx.set('Content-Type', contentType)
    // 配置允许跨域
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH')
    await next()
}