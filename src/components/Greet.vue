<template>
  <div class="greet">
    <p> {{ greetFunc() }} </p>

    <p>{{name.first}}</p>

    <p>{{ seconds }} seconds have elapsed since you opened the page.</p>

    <input type="text" v-model="inputText"> 
    <p>inputText: {{ inputText }}</p>

    <p>Current status: {{ statusFromId(status) }}</p>

    <p>{{ value }}</p>

    <!-- watchers -->
    <input type="text" v-model="inputValue">
    <p>Five seconds ago, the input said "{{ oldInputValue }}".</p>

    <!-- <p>Product one cost: {{ productOneCost | formatCost }}</p> 
    <p>Product two cost: {{ productTwoCost | formatCost }}</p> 
    <p>Product three cost: {{ productThreeCost | formatCost }}</p> -->

    <a href="https://www.npontu.com" ref="myCanvas"></a>

    <p>You've clicked the button {{ counter }} times. </p> 

    <button @click="increase">Click to increase counter</button>

    <p v-blink>I am Blinking</p>

    <transition name="fade">
      <div v-if="divVisible">This content is sometimes hidden</div>
    </transition>

    <button @click="divVisible = !divVisible">Toggle visibility</button>

    <p>Message Count from Vuex Store: {{ messageCount }}</p>

  </div>
    
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Greet",
  props: {

},

  // data
  data(){
    return {
      greet: '',

      name: {first: 'Kay'},
      dogs: [
          {id:1, name: 'Rex'},
          {id:2, name: 'Lay'}
      ],
      seconds: 0,

      inputText: '',
      status: 5,

      numbers: [5, 8, 3],

      inputValue: '',
      oldInputValue: '',


      productOneCost: 998,
      productTwoCost: 2399,
      productThreeCost: 5300,

      counter: 0,

      divVisible : true

   }
  },

  // mounted 
  mounted(){
    //use ref to access value
    console.log(this.$refs.myCanvas.href)
  },

  // computed
  computed: {
    numberTotal() {
    return numbers.reduce((sum, val) => sum + val); 
  },

  messageCount(){
    return this.$store.state.messageCount
  },

  // mapState(['messageCount']),

  value(){
    return 6
  },

  // style(){
  //   return {backgroundColor: this.color}
  // }

},  

  // watchers
  watch: {
    inputValue() {
      const newValue = this.inputValue;

      setTimeout(() => { 
        this.oldInputValue = newValue;
    }, 5000); 
    },

  },

  // filters
  filters:{
    // formatCost(value) {
    //   return '$' + (value / 100).toFixed(2);
// }
  },

  // methods
  methods: {
    statusFromId(id) {
    const status = ({ 
      0: 'Asleep',
      1: 'Eating',
      2: 'Learning Vue'
    })[id];
    return status || 'Unknown status: ' + id;
  },

  handleSubmit() {
    this.$store.commit('addMessage', this.formData); 
},

  increase(e) {
    this.counter++; 
},


    greetFunc(){

      let hour = new Date().getHours()

        if (hour < 12){
          this.greet = 'Good morning'
        } else if(hour > 12 && hour < 18){
          this.greet = 'Good afternoon'
        } else {
          this.greet = 'Good night'
        }
        return this.greet
      
      },


  },
  // created
  created(){
    setInterval(() => {
      this.seconds++
    }, 1000);
  },

  directives: {
      blink:{
        mounted(el, binding) {
          // this.$nextTick(() => {
          // // Element has definitely been added to the DOM now
          // });

          let isVisible = true; setInterval(() => {
                    isVisible = !isVisible;
          el.style.visibility = isVisible ? 'visible' : 'hidden'; }, binding.value || 1000);
        }
      }
  },

}



</script>
//


<style scoped>

.fade-enter-active, .fade-leave-active { 
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
opacity: 0;
 }

</style>
