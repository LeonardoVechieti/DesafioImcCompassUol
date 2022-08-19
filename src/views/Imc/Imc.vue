<template>
  <div class="home">
    <div class="home-card">
      <p class="title-card">{{ title }}</p>
      <div class="inputs-card">
        <Input label="Peso" inputId="peso" :outputValue="valueSelectPeso" minRange="3" maxRange="190"
        />
        <Input label="Altura" inputId="altura" :outputValue="valueSelectAltura" minRange="0.50" maxRange="2.50" step="0.01" 
        />
      </div>
      <div class="result" >
        <p v-if="this.resultValue!=''">{{ resultTitle }}</p>
        <p v-if="this.resultValue!=''">{{ resultValue }}</p>
        <p v-if="this.resultValue!=''">{{ resultEvaluation}}</p>
      </div>
      <div class="button-container">
        <button class="button-card" @click.prevent="calculate" >{{buttonText}}</button>
      </div>

    </div>
    
    
  </div>
</template>

<script>
import Input from "@/components/Input/Input.vue";
export default {
  // eslint-disable-next-line
  name: "Imc",
  components: {
    Input
  },
  data() {
    return {
        title: "Calcule seu IMC",
        buttonText: "Calcular",   
        resultTitle: "IMC:",
        valueSelectPeso: 0,
        valueSelectAltura: 0,
        resultValue: "",
        resultEvaluation: "",

    };
  },
  methods: {
    getData() {
      this.valueSelectPeso = document.getElementById("peso").value;
      this.valueSelectAltura = document.getElementById("altura").value;

    },
    calculate() {
      this.getData();
      this.resultValue = this.valueSelectPeso / (this.valueSelectAltura * this.valueSelectAltura);
      this.resultValue = this.resultValue.toFixed(1);
      this.resultEvaluation = this.resultValue < 18.5 ? "(Abaixo do peso)." : this.resultValue < 24.9 ? "(Peso normal)." : this.resultValue < 29.9 ? "(Sobrepeso)." : this.resultValue < 34.9 ? "(Obesidade grau I)." : this.resultValue < 39.9 ? "(Obesidade grau II)." : "(Obesidade grau III).";
    }
  },
  
};
</script>

<style lang="scss" scoped>

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(217deg, #F7B718 , #F5C54E 70.71%);
  @media (max-width: 600px) {
        background: #F8EBC8;
  }     

}
.home-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #F8EBC8;
    border: none;
    border-radius: 10px;
    width: 40%;
    @media (max-width: 600px) {
        width: 90%;
    }     
  } 
  .title-card {
    font-size: 1.7rem;
    text-align: center;
    width: 100%;
 
  } 
  .inputs-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
  }  
  .result {
    width: 60%;
    height: 60px;
    display: flex;   
    justify-content: center;
    @media screen and (max-width: 600px) {
        width: 90%;
    } 
    p {
        font-size: 1.5rem;
        margin-right: 5px;
        @media (max-width: 600px) {
            font-size: 1rem;
        }    
    } 
  } 
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
  }
  .button-card {
    width: 90%;
    height: 2.2em;
    border: none;
    border-radius: 5px;
    background: #F7B718;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    margin-top: 2em;
    margin-bottom: 2em;
  }
</style>
