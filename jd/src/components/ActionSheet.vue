<template>
  <div>
    <div class="weui-mask" id="iosMask" v-show="show" @click="close('cancel')"></div>
    <div class="weui-actionsheet" id="iosActionsheet" :class="{'weui-actionsheet_toggle':show}">
      <div class="weui-actionsheet__title">
        <p class="weui-actionsheet__title-text" v-text="title"></p>
      </div>
      <div class="weui-actionsheet__menu">
        <div class="weui-actionsheet__cell" v-for="(item,index) in action" :key="index+'-'+item" @click="$emit('action',index)" v-text="item"></div>
      </div>
      <div class="weui-actionsheet__action">
        <div class="weui-actionsheet__cell" id="iosActionsheetCancel" @click="close('cancel')">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title:{
        type:String,
        default:""
    },
    action:{
        type:Array,
        default(){
            return [];
        }
    }
  },
  watch: {
    value(val) {
      this.show = val;
    }
  },
  methods: {
    close(type = "cancel") {
        if(type=="cancel"){
            this.show = false;
            this.$emit('input',false);
        }
      
      this.$emit("close", type);
    }
  },
  created() {
    this.show = this.value;
  }
};
</script>

<style>
</style>
