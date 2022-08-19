<template>
  <div class="home">
    <div class="home-card">
      <p class="title-card">Calcule seu IMC</p>
      <div class="inputs">
        <Input />
      </div>
    </div>
    
    
  </div>
</template>

<script>
import Input from "@/components/Input/Input.vue";
//import Tabs from "@/components/containers/Tabs/Tabs.vue";
export default {
  // eslint-disable-next-line
  name: "Imc",
  components: {
    Input
  },
  
};
</script>

<style lang="scss" scoped>

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(217deg, #F7B718 , #F5C54E 70.71%),
}
.home-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #F8EBC8;
    border: none;
    border-radius: 10px;
    width: 35%;
  }      
  .title-card {
    font-size: 1.5rem;
    text-align: center;
 
  }    
</style>
