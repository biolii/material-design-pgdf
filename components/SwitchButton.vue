<template>
    <div class="switch" :class="{ 'switch-on': isOn }" @click="toggleSwitch">
      <div class="switch-button"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isOn: this.value
      };
    },
    watch: {
      value(newValue) {
        this.isOn = newValue;
      },
      isOn(newValue) {
        this.$emit('input', newValue);
      }
    },
    methods: {
      toggleSwitch() {
        this.isOn = !this.isOn;
      }
    }
  };
  </script>
  
  