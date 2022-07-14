<template>
  <VueCal :events="events" />
  <RegisterForm />
</template>

<script>
import RegisterForm from './components/RegisterForm.vue';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import Event from './services/event';

export default {
  name: 'App',
  components: {
    RegisterForm,
    VueCal
  },
  data: () => (
    {
      events: []
    }
  ),
  mounted() {
    Event.getAll().then(response => {
      this.alterEvents(response.data);
    });
  },
  methods: {
    alterEvents(content) {
      for (var i = 0; i < content.length; i++) {
        this.events.push({
          start: this.formatDate(content[i].start),
          end: this.formatDate(content[i].end),
          title: content[i].name
        });
      }
    },
    formatDate(date) {

      var year = date.substr(0, 4);
      var day = date.substr(5, 2);
      var month = date.substr(8, 2);
      var hour = date.substr(11, 2);
      var minute = date.substr(14, 2);

      return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.vuecal {
  margin: auto;
  max-width: 1300px;
  max-height: 662px;
}

#subTittle {
  background-color: rgb(0, 0, 153);
  color: white;
  display: flex;
  align-items: center;
  height: 6vmin;
  width: 100%;
  padding-left: 1vmin;
}

#eventForm {
  width: 100%;
  height: fit-content;
  border: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 3vmin;
  padding: 2vmin;
  background-color: rgb(243, 243, 243);
}

.textBox {
  width: 97%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
}

#eventName {
  height: 6vmin;
}

textarea {
  height: 10vmin;
}

#boxDay {
  width: 20%;
  height: 15vmin;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 2.5vmin;
}

#textDay {
  font-size: 4vmin;
  height: 4vmin;
  width: 95%;
}

.option {
  width: fit-content;
  height: fit-content;
  font-size: 3vmin;
}

#boxDay label {
  padding: 0;
  margin-left: 5%;
}

#leftContent {
  width: 100%;
  height: fit-content;
  height: fit-content;
  display: flex;
}

.spaceDate {
  width: 45%;
  margin-left: 4%;
}

#spaceRadio {
  width: fit-content;
  height: 10vmin;
  display: flex;
  flex-direction: column;
}

.formSubmit {
  width: fit-content;
  margin-left: 30%;
}

#buttonSubmit {
  padding: 2%;
  height: fit-content;
  background-color: blueviolet;
  border: none;
  border-radius: 5px;
  color: white;
  margin-left: 62vw;
  transition: 0.3s;
}

#buttonSubmit:hover {
  background-color: rgb(200, 140, 255);
  color: black;
  cursor: pointer;
}

#schedule {
  width: 100%;
  height: fit-content;
  margin-bottom: 10vmin;
}

#schedule header {
  width: 100%;
  background-color: rgb(5, 5, 160);
  text-align: center;
}

#firstLine a {
  text-decoration: none;
  color: white;
  padding-left: 1vmin;
}

#week {
  background-color: rgb(236, 236, 236);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vmin;
}

table {
  width: 100%;
}

thead {
  width: 100%
}

tr {
  width: 100%;
}

th {
  width: 14.28%;
  background-color: green;
}

tbody {
  width: 100%;
}

td {
  text-align: center;
  background-color: rgb(8, 59, 8);
}

.busy {
  background-color: rgb(247, 238, 159);
}
</style>
