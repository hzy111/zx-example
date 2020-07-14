/*
 * @Author: your name
 * @Date: 2020-02-19 20:09:47
 * @LastEditTime: 2020-07-02 20:44:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gzdt3_ms\src\WebApps\Apps_vue\ScheduleHome\pages\home\home.js
 */
window.onload = async function onload() {
    var app = new Vue({
        el: '#app',
        data: {

        },
        watch: {

        },
        computed: {

        },
        methods: {
            OnInit(){
                //加载数据
                buildingService.getTree();
                //
            },
        }
    });
    //页面加载后，宿主会调用该函数
    mgPage.OnLoaded = function (data) { };
    //页面出现后，宿主会调用该函数
    mgPage.OnAppearing = function (data) { };
    //页面消失后，宿主会调用该函数
    mgPage.OnDisappearing = function (data) { };
}