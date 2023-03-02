import { setStorage } from "../../utils/constent";
import { post } from "../../api/request";
// pages/login/index.ts
Page({
    /**
     * 页面的初始数据
     */
    data: {
        active: 0,
        username: "",
        password: "",
    },
    onLoad(){
       
    },
    onChange(event: any) {

    },
    login() {
      
        wx.login({
            success:(res)=>{
                console.log(res);
                let data = {
                    username: this.data.username,
                    password:this.data.password,
                    code:res.code
                }
                post("/weChat/",data).then(response=>{
                    console.log("response=>",response);
                    console.log(response.code==200);
                    if(response.code==200){
                        setStorage(response.data)
                        wx.showToast({
                            mask: true,
                            duration:2000,
                            title:"登录成功",
                        }) 
                    }else{
                        wx.showToast({
                            mask: true,
                            duration:2000,
                            title:"登录失败",
                        }) 
                    }
                }).catch(error=>{
                    console.log("erro=>",error);
                    
                })
            }
        })
    }
})