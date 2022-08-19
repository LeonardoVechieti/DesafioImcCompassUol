<template>
  <div class="home">
    <div class="home-card">
      <p class="title-card">{{ title }}</p>
      <div class="inputs">
        <Input label="Peso" inputId="peso" :outputValue="valueSelectPeso" minRange="3" maxRange="190"
        />
        <Input label="Altura" inputId="altura" :outputValue="valueSelectAltura" minRange="0.50" maxRange="2.50" step="0.01" 
        />
      </div>
      <div class="result">
        <p >{{ resultTitle }}</p>
        <p >{{ resultValue }}</p>
        <p >{{ resultEvaluation}}</p>
      </div>
      <div>
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
      this.resultEvaluation = this.resultValue < 18.5 ? "Abaixo do peso" : this.resultValue < 24.9 ? "Peso normal" : this.resultValue < 29.9 ? "Sobrepeso" : this.resultValue < 34.9 ? "Obesidade grau 1" : this.resultValue < 39.9 ? "Obesidade grau 2" : "Obesidade grau 3";
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
    width: 40%;
  }      
  .title-card {
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
 
  }    
  .button-card {
    width: 140px;
    height: 2.2em;
    border: none;
    border-radius: 5px;
    background: #F7B718;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
  }
</style>
