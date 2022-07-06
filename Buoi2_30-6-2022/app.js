Vue.createApp({
    data() {
      return {
        goals: [],
        textGoal: '',
        thaihung: '<h3>',
      };
    },
    methods: {
      addGoal() {
            let number = Math.random();
            (number < 0.5) ? this.textGoal = 'Learn VueJs' : this.textGoal = 'Learn PHP';
          this.goals.push(this.textGoal);
        },
    }
  }).mount('#user-goal');