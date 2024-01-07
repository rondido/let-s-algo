/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  const value = new Promise((resolve,reject)=>{
      setTimeout(()=>{resolve(millis)},millis)
  })
  return value
}

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/