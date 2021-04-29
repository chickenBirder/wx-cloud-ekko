// pages/storageConsole/storageConsole.js
//引入
var dateUtil = require("../../utils/util.js");

const app = getApp()

Page({

  data: {
    fileID: '',
    cloudPath: '',
    imagePath: '',
  },

  onLoad: function (options) {
    const {
      fileID,
      cloudPath,
      imagePath,
    } = app.globalData

    this.setData({
      fileID,
      cloudPath,
      imagePath,
    })

    console.group('文件存储文档')
    console.log('https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/storage.html')
    console.groupEnd()
    console.log(app.globalData)

    //保存到数据库中
    this.saveImage("scrollImage")

  },

  //保存到数据库中
  saveImage : function(param){
    const nowTime = dateUtil.formatTime(new Date());
    const db = wx.cloud.database();
    db.collection("scroll_image").add({
      data:{
        "_openid":app.globalData.openid,
        "fileID":app.globalData.fileID,
        "cloudPath":app.globalData.cloudPath,
        "imagePath":app.globalData.imagePath,
        "imageType":param,
        "createTime":nowTime,
        "updateTime": nowTime
      },
      success : res =>{
        console.log("新增记录成功")
        console.log(res)
      },
      fail: err => {
        console.log("新增记录失败")
        console.log(err)
      }
    });
  },

})
