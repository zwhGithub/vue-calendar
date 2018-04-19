<template>
    <div class="content">
        <!-- agoDayHide='1517483961000' -->
        <!-- futureDayHide="1526054400000" -->
        <!-- isHideOtherday=false -->
        <Calendar :markDateMore="arr"></Calendar>
        <br/>
        <h1 @click="demo">标记了20号21号</h1>
        <div class="div" @click="demo ">
            点击跳到2017-12-12
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                arr: []
            }
        },
        methods: {
            clickDay(data) {
                console.log('选中了', data) //选中某天
                this.$toast('选中了' + data)
            },
            clickToday(data) {
                console.log('跳到了本月', data) //跳到了本月
            },
            changeDate(data) {
                this.$toast('切换到的月份为' + data)
                console.log('左右点击切换月份', data) //左右点击切换月份
            },
            demo() {
                // this.$refs.Calendar.ChoseMonth('2017-12-12',false); //跳到12月12日 但是不选中12月12日
                this.$refs.Calendar.ChoseMonth('2017-12-12'); //跳到12月12日
            }
        },
        created() {
            setTimeout(() => {
                this.arr = [{
                    date: '2018/4/1',
                    className: "mark1"
                }, {
                    date: '2018/4/13',
                    className: "mark2"
                }, {
                    date: '2018/4/25',
                    className: "mark3"
                }];
            }, 200)
        }
    }
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style>
    h1 {
        text-align: center;
    }

    .div {
        margin: auto;
        width: 220px;
        height: 44px;
        line-height: 44px;
        background: #0fc37c;
        color: #fff;
        font-size: 17px;
        text-align: center;
        margin-top: 20px;
    }

    .mark1 {
        background-color: red;
    }

    .mark2 {
        background-color: yellow;
    }

    .mark3 {
        background-color: blue;
    }
</style>