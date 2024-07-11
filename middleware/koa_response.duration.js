module.exports =async (ctx,next)=>{
    // 记录开始时间
    const start = Date.now();
    // 执行下一个中间件
    await next();
    // 记录结束时间
    const end = Date.now();
    // 计算耗时
    const duration = end - start;
    // 设置响应头
    ctx.set('X-Response-Time', `${duration}ms`);
}