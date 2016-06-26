define(function(require, exports, module) {"use strict";
/// <reference path="../../pages/index.d.ts" />
const loadsh = require('lodash');
exports.loadsh = loadsh;
/**
* 获取字符串长度 中文2个字
*/
function getLength(value) {
    return value.replace(/[^\x00-\xff]/g, "01").length / 2;
}
exports.getLength = getLength;
;
/**
* 返回随机值
* @param {int} min 最小值
* @param {int} max 最大值
*/
function rand(min = 0, max = 2147483647) {
    var argc = arguments.length;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.rand = rand;
;
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
function format(text, args) {
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
}
exports.format = format;
;
/**
* 替换所有字符
* @param {string} text 替换支付串
* @param {string} key 替换字符
* @param {string} repText 替换后字符
*/
function replace(text, key, repText) {
    var raRegExp = new RegExp('(' + key + ')', "g");
    return text.replace(raRegExp, repText);
}
exports.replace = replace;
;
/**
* 获取url参数
* @param {string} key 参数名
*/
function getPar(key) {
    var localUrl = document.location.href, get = localUrl.indexOf(key + '=');
    if (get === -1) {
        return;
    }
    var value = localUrl.slice(key.length + get + 1), nextPar = value.indexOf('&');
    if (nextPar !== -1) {
        value = value.slice(0, nextPar);
    }
    return value;
}
exports.getPar = getPar;
;
/**
   * 获取格式化日期
   * @param {date} data 事件对象
   * @param {string} fmt 格式化字符串
   * @param {string}  格式化后的日期
   */
function formatDate(date, fmt = 'yyyy-MM-dd hh:mm') {
    //yyyy-MM-dd hh:mm:ss
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
exports.formatDate = formatDate;
;
/**
   * 前后去空格
   * @param {string}  格式化后的日期
   */
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
}
exports.trim = trim;
;
/**
   * 前后去空格
   * @param {string}  格式化后的日期
   */
function basename(str) {
    return str.match(/\/[^\/]+$/g)[0].replace('/', '');
}
exports.basename = basename;
;
})