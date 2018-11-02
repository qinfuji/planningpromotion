// components/ticket/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageUrl: String,
    descr: String,
    time: String,
    use_info: String
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function() {
      this.triggerEvent("click", e.detail);
    }
  }
});
