// 创建koa对象
const Koa=require('koa')
const app=new Koa()
// 2编写响应函数（中间键）
/**
 *   1 ctx:上下文，包含了request和response
 *   2  next:下一个中间键 下一层中间件是否能够得到执行，取决于next这个函数是否被调用
 */
const respDurationMoiddleware=require('./middleware/koa_response.duration')
app.use(respDurationMoiddleware)
const respHeaderMoiddleware=require('./middleware/koa_response_header')
app.use(respHeaderMoiddleware)
const respDataMoiddleware=require('./middleware/koa_response_data')
app.use(respDataMoiddleware)
// 3端口号
app.listen(8888)
