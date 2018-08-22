<template>
  <div class="hello">
    <h1 v-if="data">{{ data }}</h1>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",

  // store the data into here
  data: function() {
    return {
      data: undefined
    };
  },

  // Create a firebase listener on create
  beforeCreate: function() {
    firebase
      .database()
      .ref("/")
      .on("value", d => {
        this.data = d.val();
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
