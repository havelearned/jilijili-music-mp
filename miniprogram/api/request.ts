const baseUrl = "http://localhost:8080"
export const get = (uri: string) => {
    wx.showLoading({
        title: "加载中",
    })
    return new Promise<any>((resolve, reject) => {
        wx.request({
            url: baseUrl + uri,
            method: "GET",
            success: (res) => {
                resolve(res)
            },
            fail: (error) => {
                reject(error)
            },
            complete: () => {
                wx.hideLoading()
            }
        })
    })
}
export const post = (uri: string, data: any) => {
 
    wx.showLoading({
        title: "加载中",
    })
    return new Promise<any>((resolve, reject) => {
  
        wx.request({
            url:baseUrl+ uri,
            data: data,
            method: "POST",
            success: (res) => {
                resolve(res.data)
            },
            fail: (error) => {
                reject(error)
            },
            complete: () => {
                wx.hideLoading()
            }
        })
    })
}