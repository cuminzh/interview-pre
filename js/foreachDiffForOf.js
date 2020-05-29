const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

async function test() {

  //改造后 每一秒输出一个结果
  for(let x of list) {
    let res = await square(x);
    console.log(res);
  }

  //改造前 一次输出所有接口
  //forEach 是不能阻塞的，默认是请求并行发起，所以同时输出1、4、9
  list.forEach(async x=>{
    let res= await square(x);
    console.log(res);
  })
}
test();
