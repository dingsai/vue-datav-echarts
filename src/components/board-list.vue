<template>
    <!-- 列表循环 -->
    <div class="boardList">
        <dv-scroll-board :config="config"/>
    </div>
    
    </template>
    <script>
    export default {
        data(){
            return {
                config:{
                    header: ['时间', '姓名', '人数'],
                    headerBGC:"rgba(14, 114, 190,0.3)",
                    oddRowBGC:"rgba(10,39,50,0.5)",
                    evenRowBGC:"rgba(10,39,50,0.6)",
                    headerHeight:35,
                    data: [],
                    columnWidth: [200],
                    rowNum:5,
                    align: ['center'],
                    carousel: 'single',
                    hoverPause:true
                }
            }
        },
        mounted(){
            this.getList()
            this.timer = window.setInterval(() => {
                setTimeout(this.getList(), 0);
                // 每三分钟执行 6000*10 * 3
            }, 180000);
        }, 
        destroyed(){
            window.clearInterval(this.timer)
        },
        methods:{
            getList(){
                this.$axios.get('/mock/getBoardist').then(res =>{
                    if(res.status == 200){
                        this.config.data =res.data.data;
                        this.config={...this.config} 
                    }
                })
            },
        }
    }
    </script>
    <style>
    #main{
        width:100%;height:260px;
        position:absolute;left:0;top:0;
    }
    </style>