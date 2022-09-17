<template>
        <div class="page">
            <div class="header">
                <div class="web-logo">
                    <div><img src="../assets/images/web-logo.png" /></div>
                    <div class="web-name">无锡机电高等职业技术学校二次元网站</div>
                </div>
                <div class="serach">
                    <el-input
                    placeholder="请输入内容"
                        prefix-icon="el-icon-search"
                    v-model="input2">
                </el-input>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                </div>
                <div class="web-contact">
                    <div class="web-contact-label"><i class="el-icon-phone-outline"></i> 全国服务热线</div>
                    <div class="phone-400">114-514-1919</div>
                </div>
            </div>
            <div class="menu-list">
                <ul class="list">
                    <li><span>首页</span></li>
                    <li class="li-down">
                        <span>服务项目</span>
                        <ul class="drop">
                            <li>刘华强</li>
                            <li>卢本伟</li>
                            <li>郝哥</li>
                            <li>pdd</li>
                            <li>clearlove7</li>
                        </ul>
                    </li>
                    <li><span>旧房改造</span></li>
                    <li><span>维修装修</span></li>
                    <li><span>防水补漏</span></li>
                    <li><span>家电清洗</span></li>
                    <li><span>单机游戏</span></li>
                    <li><span>虚拟主播</span></li>
                    <li><span>主机游戏</span></li>
                </ul>
            </div>
            <div class="login">
                <table>
                    <tr>
                        <td>
                            <span>用户名：&nbsp;&nbsp;&nbsp;</span>
                            <input type="text" style="width:200px;">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>昵称：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <input type="password" style="width:200px">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>密码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <input type="password" style="width:200px">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>重复密码：</span>
                            <input type="password" style="width:200px">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>邮箱地址：</span>
                            <input type="email" style="width:200px">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <el-checkbox v-model="checked">是否订阅我们消息至邮箱</el-checkbox>
                        </td>
                    </tr>
                    <tr class="button1">
                        <el-button type="primary">加入我们！</el-button>
                    </tr>
                </table>
            </div>
            <div class="upload">
                <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">上传你喜欢的图片！<em>点击上传或拖入</em></div>
                <div class="el-upload__tip" slot="tip">PS：只能上传jpg/png文件，且不超过50Mb</div>
                </el-upload>
                <div class="jianyi">
                    <h3>网站建议</h3>
                    <textarea name="jianyi" id="" cols="40" rows="7"></textarea><br>
                    <el-button type="primary" round>广快提交！</el-button>
                </div>
            </div>
            <hr>
            <div class="block">
                <span class="demonstration"></span>
                    <el-carousel height="450px">
                        <el-carousel-item v-for="item in imglist" :key="item">
                            <img :src="item.url" alt="" class="img-main">
                            <!-- <h3 class="small">{{ item }}</h3> -->
                        </el-carousel-item>
                    </el-carousel>
            </div>


            <!-- <div class="img-mian">
                <a href="javascript:void(0)" v-show="index!=0" @click="left" class="left">
                </a>
                <img :src="imgArr[index]" class="arr" :title="'666'">
                <a href="javascript:void(0)" v-show="index<imgArr.length-1" @click="right" class="right">
                </a>
            </div> -->
            <div class="vtb-list">
                <div class="vtb-main1">
                    <b>虚拟主播</b>
                    <span>都是带佬！</span>
                </div>
                <ul>
                    <li><img src="../assets/images/z1.jpg" alt="" title="神楽七奈"></li>
                    <li><img src="../assets/images/z2.jpg" alt="" title="神楽mea"></li>
                    <li><img src="../assets/images/z3.jpg" alt="" title="凑阿夸"></li>
                    <li><img src="../assets/images/z4.jpg" alt="" title="Gura"></li>
                    <li><img src="../assets/images/z5.jpg" alt="" title="永雏塔菲"></li>
                    <li><img src="../assets/images/z6.jpg" alt="" title="花园serena"></li>
                    <li><img src="../assets/images/z7.jpg" alt="" title="hanser"></li>
                </ul>
            </div>
            <div>
                <div class="vtb-list-all">
                    <div class="vtb-main2">
                        <b>推荐人物</b>
                        <span>都是好康的哦</span>
                    </div>
                    <ul>
                        <li><img src="../assets/images/a1.jpg"></li>
                        <li><img src="../assets/images/a2.jpg"></li>
                        <li><img src="../assets/images/a3.jpg"></li>
                        <li><img src="../assets/images/a4.jpg"></li>
                        <br>
                        <li><img src="../assets/images/a5.jpg"></li>
                        <li><img src="../assets/images/a6.jpg"></li>
                        <li><img src="../assets/images/a7.jpg"></li>
                        <li><img src="../assets/images/a8.jpg"></li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'Index',
        components: {},
        data() {
            return {
                input2: '',
                imglist:[
                    {url:require("../assets/images/111.jpg")},
                    {url:require("../assets/images/222.jpg")},
                    {url:require("../assets/images/333.jpg")},
                    {url:require("../assets/images/444.jpg")}
                ]

                // imgArr:[
                //     "../assets/images/1.jpg",
                //     "../assets/images/2.jpg",
                //     "../assets/images/3.jpg"
                // ],
                // index:0
            }
        },
        methods: {

        },
        created() {

        }
    }
</script>

<style scoped>
    .page {
        width: 100%;
        min-width: 1600px;
    }
    
    .header {
        /* background-color: #666; */
        width: 1440px;
        padding-top: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .web-logo {
        /* background-color: yellow; */
        display: flex;
        align-items: center;
    }

    .web-logo .web-name {
        font-size: 32px;
        font-weight: bold;
        margin-left: 20px;
    }

    .web-contact {
        /* background-color: green; */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .web-contact i {
        font-size: 32px;
        margin-right: 10px;
    }

    .web-contact .web-contact-label {
        font-size: 20px;
    }

    .web-contact .phone-400 {
        margin-top: 5px;
        font-size: 40px;
    }
    .serach{
        display: flex;
        flex-direction: row;
    }
    .menu-list{
        display: flex;
        z-index: 5;
    }
    .list{
        display: flex;
        flex-direction: row;
        background-color: gray;
        width: 100vw;
        justify-content: center;
        min-width: 1590px;
    }
    .menu-list li{
        width: 100px;
        height: 50px;
        list-style: none;
        padding: 5px;
        font-size: 20px;
        background-color: gray;
    }
    .menu-list li span{
        text-align: center;
        line-height: 50px;
    }
    .menu-list li:hover{
        background-color: bisque;
        color: firebrick;
    }
    .drop{
        display: flex;
        flex-direction: column;
        position: relative;
        right: 45px;
        top: 5px;
        z-index: 7;
    }
    .drop li{
        text-align: center;
        line-height: 50px;
    }
    .li-down ul{
        opacity: 0;
    }
    .li-down:hover .drop{
        transition: all 0.5s;
        opacity: 100;
    }
    .login{
        width: 370px;
        height: 450px;
        background-color: antiquewhite;
        margin-left: 20px;
    }
    .login table{
        padding: 15px;
    }
    tr{
        line-height: 50px;
        float: left;
    }
    .button1{
        position: relative;
        right: 70px;
        top: 60px;
        z-index: 6;
    }

    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
    }
  
    .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
    }
    .block{
    width: 800px;
    float: right;
    margin-top: -15px;
    margin-right: 25px;
    position: relative;
    bottom: 475px;

    }
    .img-main{
        width: 800px;
        height: 450px;
    }
    .vtb-list ul{
        display: flex;
        flex-direction: row;
    }
    .vtb-list li{
        list-style: none;
        padding-left: 30px;
    }
    .vtb-list img{
        width: 182px;
        height: 182px;
    }
    .vtb-list span{
        padding-left: 10px;
        font-size: 15px;
    }
    .upload{
        margin-top: -185px;
    }
    .upload-demo{
        position: relative;
        right: 218px;
        bottom: 265px;
    }
    .jianyi{
        margin-top: -225px;
        position: relative;
        right: 220px;
        bottom: 20px;
    }
    textarea{
        margin-bottom: 7px;
    }
    .vtb-main1{
        position: relative;
        right: 220px;
        font-size: 30px;
    }
    .vtb-main2{
        position: relative;
        right: 215px;
        font-size: 30px;
    }
    .vtb-list-all span{
        padding-left: 10px;
        font-size: 15px;
    }
    .vtb-list-all img{
        width: 310px;
        height: 300px;
    }
    .vtb-list-all ul{
        display: flex;
        flex-direction: row;
    }
</style>