/**
 * 常量文件
 */
//引入SweetAlert消息框组件
import swal from 'sweetalert'

let CONSTANT = {
  //API服务器地址
  baseURL:"https://www.hnzhenke.com/devfrontapi",
  statusCode:{
    //操作成功
    SUCCESS:0
  },
  /**
   * 操作成功消息框
   * @param title
   * @param message
   */
  successAlert:(title,message)=>{

  },
  /**
   * 操作失败消息框
   * @param title
   * @param message
   */
  failedAlert:(title,message)=>{
    swal(title, message, "error");
  },
  /**
   * 时间戳转换
   * @param date
   * @param fmt
   * @returns {*}
   */
  formatDate:(val, format)=>{

    if (!val) {
      return '';
    }
    // 如果时间戳后不是毫秒值就加000,变成毫秒值
    // if (val && val.length == 10) { val = parseInt(val+'000'); }
    if (val && val.length != 13) {
      if (val && val.length == 10) {
        val = parseInt(val+'000');
      };
      for (var i = 0; i < 13; i++) {
        if (val.length === i) {
          val = parseInt(val*(10^(13-i)));
        }
      }
    }
    var date = new Date(val);
    var o = {
      "M+" : date.getMonth()+1,                 //月份
      "d+" : date.getDate(),                    //日
      "h+" : date.getHours(),                   //小时
      "m+" : date.getMinutes(),                 //分
      "s+" : date.getSeconds(),                 //秒
      "q+" : Math.floor((date.getMonth()+3)/3), //季度
      "S"  : date.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
      if(new RegExp("("+ k +")").test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
      }
    }
    return format;

  }
};
export {CONSTANT as default};
