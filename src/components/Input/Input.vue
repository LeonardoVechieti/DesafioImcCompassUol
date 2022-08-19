<template>
  <div class="input">
    <label>{{ label }}</label>
    <output>{{ output }}</output>
    <input class="input-field"
      type="range"
      :id="inputId"
      :min="minRange"
      :max="maxRange"
      :step="step"
    />
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: "Input",
    props: {
        label: {
            type: String,
            default: "Input"
        },
        inputId: {
            type: String,
            default: "input"
        },
        minRange: {
            type: Number,
            default: 0
        },
        maxRange: {
            type: Number,
            default: 100
        },
        step: {
            type: Number,
            default: 1
        }
    },

}
</script>
<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
label {
    font-size: 1.2em; 
    width: 100%;;  
}
output {
    font-size: 1.2em;
    text-align: center;
    color: #f7b718;
}
.input-field {
    width: 100%;
    height: 2em;
    border: none;
    border-radius: 5px;
    background: white;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 40px;
        height: 40px;
        background: #F6C03D;
        border-radius: 50%;
        cursor: pointer;
  }
}
</style>