<template>
  <div>
    <div
      class="card-container"
      v-for="(data, i) in data"
      :key="data.index"
      ref="data"
      :value="i"
    >
      <div class="content-wrapper">
        <p>{{ data.index }}</p>
        <v-icon>{{ data.statusOfChange }}</v-icon>
        <p>
          <br />
          {{ data.startingValue }}
        </p>
        <v-btn small color="primary" v-on:click="stopInterval()" ref="button">{{
          button
        }}</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { fieldsObj } from "../../data";
export default {
  name: "Card2",
  data: function() {
    return {
      data: [],
      stop: false,
      button: "Stop",
    };
  },

  created() {
    this.fetchData();
  },
  mounted() {
    this.useMethodforEveryEl();
  },
  methods: {
    fetchData() {
      this.data = fieldsObj.data;
    },
    useMethodforEveryEl() {
      this.data.forEach((el) => {
        this.changeNumbers(el);
      });
    },

    changeNumbers(el) {
      el.valueChanged.push(el.startingValue);
      const interval = setInterval(() => {
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        el.startingValue =
          (Math.random() * (2 - 1) + 1).toFixed() * plusOrMinus;
        el.valueChanged.push(el.startingValue);

        let objConvertToArray = Object.values(el.valueChanged);
        let lastValue = objConvertToArray[objConvertToArray.length - 1];
        let previousValue = objConvertToArray.slice(-2)[0];

        if (lastValue < previousValue) {
          el.statusOfChange = "mdi-arrow-down";
        }
        if (lastValue > previousValue) {
          el.statusOfChange = "mdi-arrow-up";
        }

        if (this.stop == true) {
          return clearInterval(interval);
        }
      }, 2000);
    },
    stopInterval() {
      this.button = "Start";
      return (this.stop = true);
    },
  },
};
</script>

<style>
.card-container {
  width: 220px;
  display: inline-block;
  margin-top: 20px;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 5%;
}
</style>
