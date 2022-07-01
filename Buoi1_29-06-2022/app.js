Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal() {
      if(this.enteredValue){
        this.goals.push(this.enteredValue);
        this.enteredValue = '';
      }
    },
    deleteGoal(indexGoal) {
      this.goals = this.goals.filter((item,index) => {
        if(index != indexGoal){
          return item;
        }
      })
    }
  }
}).mount('#app');
