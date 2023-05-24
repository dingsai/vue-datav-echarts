<template>
    <div class="capsule">
        <!-- 胶囊图 -->
        <dv-capsule-chart class="capsule-chart1" :config="config" />
    </div>
</template>
<script>
export default {
    data(){
        return {
            config:{},
            timer:null
        }
    },  
    mounted(){
        this.getCapsuleChart()
        this.timer = window.setInterval(()=>{
            setTimeout(this.getCapsuleChart(),0)
        },180000)
    },
    destroyed(){
        window.clearInterval(this.timer)
    },
    methods:{
        getCapsuleChart(){
            this.$axios.get('/mock/getCapsuleList').then((res)=>{
                this.config = res.data
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

}
</script>