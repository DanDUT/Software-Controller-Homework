var value = 30
Page({
  data: {
    percentage: value
  },
  plus: function () {
    if (value < 100) {
      value += 10
      if (value == 100) {
        wx.showToast({
          title: '养殖生蚝成功！',
        })
        value = 10
      }
      this.setData({
        percentage: value
      })
    }
  },
  sign: function () {
    wx.showToast({
      title: '签到成功',
    })
  },
  show_status: function () {
    var status = '目前成长状况为：' + value + '%'
    wx.showToast({
      title: status,
      icon: 'none',
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})