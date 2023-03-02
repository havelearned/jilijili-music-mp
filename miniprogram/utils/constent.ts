/** 常量类 */

// 用户信息
const USER_INFO = "USER_INFO";


export const setStorage = (data:any) => {
    wx.setStorage({
        key: USER_INFO,
        data: JSON.stringify(data),
        encrypt: true,
        success() {
        },
        fail(){
            console.log("持久化失败");
        }
    }
    )
}

export const getStorage = ()=>{
    let data=undefined;
    wx.getStorage({
        key: USER_INFO,
        encrypt: true, // 若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true
        success(res) {
            data = JSON.parse(res.data)
          console.log(res.data)
        }
      })
    return data;
}

