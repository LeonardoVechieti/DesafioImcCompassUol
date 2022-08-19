<template>
  <div class="input">
    <label>{{ label }}</label>
    <output>{{ output }}</output>
    <input
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

<style>

</style>