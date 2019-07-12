<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

  @media all and (min-width: 320px) and (max-width: 450px){
    body
    {
      padding-left: 15px;
      padding-right: 15px;
    }
    #rightBox{
      display:none;
    }
  }

  *{
    font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif,Tahoma,Arial,"\5b8b\4f53",sans-serif;
  }


  #rightBox{
    position:fixed;
    right:0px;
    top:20%;
    z-index: 10;
    width:8rem;
    background-color: #f8f8f8;
    padding-top:1rem;
    padding-bottom:1rem;
  }


</style>
