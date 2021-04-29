// pages/weather/weather.js
//引入百度实时天气Api
import { AMapWX } from "../../libs/amap-wx.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
	nbTitle : "实时天气",
	nbFrontColor : "#ffffff",
	nbBackgroundColor : "#666",
  weatherData :"",
  province:"",
  city:"",
  temperature:"",
  weather:"",
  winddirection:"",
  windpower:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	var that = this;
	//新建百度地图
	var Amap = new AMapWX({
		key : "a1fa7294cb5bb20cd8ad5aa2f12f1394"
	});
	
	//发起请求
	Amap.getWeather({
		success: function(data){
			console.log(data)
			//成功回调
			that.setData({
				province:data.liveData.province,
				city:data.liveData.city,
				temperature:data.liveData.temperature,
				weather:data.weather.data,
				winddirection:data.winddirection.data,
				windpower:data.windpower.data,
				humidity:data.humidity.data
			});
		},
		fail: function(info){
			//失败回调
			console.log(info)
		  }
	});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})