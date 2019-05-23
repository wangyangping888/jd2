<template>
  <div class="return" @click="returnBack">
    <div class="tupiao"></div>
  </div>
</template>
<script>
export default {
  methods:{
      returnBack(){
        document.documentElement.scrollTop=0;
      }
  }
};
</script>
<style lang="less">
.return {
  width: 0.8rem;
  height: 0.8rem;
  position: fixed;
  bottom: 1.6rem;
  right: 0rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 3px 0 0 3px;
  overflow: hidden;
  z-index: 107;
  .tupiao {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAFVBMVEUAAAD///////////////////////9Iz20EAAAABnRSTlMAEs64yCwYosRLAAAAf0lEQVQ4y+2LOw6AIBBEMUZrgyegsdY7eACPYCjm/kcQMhsTYLGxwcRp9vPmmdYzIs35RN6n26cKsXAVZYHXJeuxOF1xsKoUvghUVQwi1hSDyDUlkFLiB2wUSiSlxBvs5ApJLskFaaUKSS71skN6602GjRMc82GSkDA/+RhpLBdlCiXsyNDDDQAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: 50%;
    width: 100%;
    height: 100%;
  }
}
</style>
