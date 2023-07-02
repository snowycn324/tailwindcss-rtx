<template>
  <div>
    <div>
      <input v-model="searchKeyword" class="search-input" placeholder="Input color name/value to search" />
    </div>
    <ul>
      <li v-for="color in rtxColorsFilterArray" :key="color.name" class="color-container">
        <div class="color-name" @click="doCopy(color.name)">
          {{ color.name }}
        </div>
        <div class="color-value" @click="doCopy(color.value)">
          {{ color.value }}
        </div>
        <div class="color-display-box" :style="{backgroundColor: color.value}"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import RtxColors from "../../../src/colors";
export default {
  name: "Colors",
  data() {
    return {
      searchKeyword: '',
      RtxColors,
    }
  },
  methods: {
    async doCopy(text) {
      await this.$copyText(text)
    },
  },
  computed: {
    rtxColorsArray() {
      const _ = Object.entries(this.RtxColors).map(([name, value])  => ({
        name: name,
        value: value
      })) || []
      return _;
    },
    rtxColorsFilterArray() {
      return this.rtxColorsArray.filter((color) => {
        return color.name.includes(this.searchKeyword) || color.value.includes(this.searchKeyword)
      })
    }
  }
}
</script>

<style>
ul,li {
  list-style: none;
}

.color-container {
  display: flex;
  align-items: center;
  width: 550px;
  height: 50px;
  margin-bottom: 10px;
  padding-left: 10px;
  border-radius: 10px;
  transition: all ease 0.5s;
  border: 1px solid rgb(208, 203, 203, 0.5);
}

.color-container:hover {
  border: 1px solid rgba(242, 181, 14, 0.5)!important;
}

.color-name {
  width: 200px;
  margin-right: 20px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
}

.color-value {
  width: 150px;
  margin-right: 20px;
  cursor: pointer;
  font-size: 12px;
  color: gray;
}

.color-display-box {
  width: 100px;
  height: 40px;
  border-radius: 10px;
}

.search-input {
  color: rgb(61, 58, 58);
  width: 540px;
  padding-left: 15px;
  margin-left: 20px;
  height: 40px;
  border-radius: 20px;
}
</style>