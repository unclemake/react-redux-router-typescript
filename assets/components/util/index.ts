/// <reference path="../../pages/index.d.ts" />
import *  as loadsh from 'lodash';
export {loadsh};

/**
* 获取字符串长度 中文2个字
*/
export function getLength(value: string): number {
    return value.replace(/[^\x00-\xff]/g, "01").length / 2;
};

/**
* 返回随机值
* @param {int} min 最小值
* @param {int} max 最大值
*/
export function rand(min: number = 0, max: number = 2147483647): number {
    var argc = arguments.length;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
* 占位符替换方法
* @param {string} str 模版字符串
* @param {obj} args 替换参数
* @returns {string}
* @example
* t.tpl = '<section class="layer-alert {theme}"><div class="layer-alert-cont">{msg}</div><div class="layer-alert-btn-cont"><input type="button" class="btn btn-blue btn-ok" value="{ok}" /><input type="button" class="btn ml10 btn-cancle" value="{cancle}" /></div></section>',
* var str = util.format(t.tpl, {
*          theme: t.config.theme,
*          ok: t.config.okText,
*          cancle: t.config.cancleText,
*          msg: t.msg
*      });
*/
export function format(text: string, args): string {
    var result = text;
    if (arguments.length == 2 && typeof (args) == "object") {
        for (var key in args) {
            result = replace(result, "{" + key + "}", args[key]);
        }
    }
    else {
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] == undefined) {
                return "";
            }
            else {
                result = replace(result, "{[" + (i - 1) + "]}", arguments[i] || '');
            }
        }
    }
    return result;
};

/**
* 替换所有字符
* @param {string} text 替换支付串
* @param {string} key 替换字符
* @param {string} repText 替换后字符
*/
export function replace(text: string, key: string, repText: string) {
    var raRegExp = new RegExp('(' + key + ')', "g");
    return text.replace(raRegExp, repText);
};

/**
* 获取url参数
* @param {string} key 参数名
*/
export function getPar(key: string): string {
    var localUrl = document.location.href,
        get = localUrl.indexOf(key + '=');
    if (get === -1) {
        return;
    }
    var value = localUrl.slice(key.length + get + 1),
        nextPar = value.indexOf('&');
    if (nextPar !== -1) {
        value = value.slice(0, nextPar);
    }
    return value;
};

/**
   * 获取格式化日期
   * @param {date} data 事件对象
   * @param {string} fmt 格式化字符串
   * @param {string}  格式化后的日期
   */
export function formatDate(date: Date, fmt: string = 'yyyy-MM-dd hh:mm'): string {

    //yyyy-MM-dd hh:mm:ss
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};


/**
   * 前后去空格
   * @param {string}  格式化后的日期
   */
export function trim(str: String): string {
    return str.replace(/(^\s*)|(\s*$)/g, '');
};



/**
   * 前后去空格
   * @param {string}  格式化后的日期
   */
export function basename(str: String): string {
    return str.match(/\/[^\/]+$/g)[0].replace('/', '');
};


