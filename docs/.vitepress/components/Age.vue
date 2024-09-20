<template>{{ age }}歳</template>

<script>
export default {
  data() {
    return {
      birthYear: 1999,
      birthMonth: 3,
      birthDay: 3,
      age: null
    }
  },
  methods: {
    calculateAge() {
      const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth() + 1;
      const currentDay = today.getDate();

      let age = currentYear - this.birthYear;

      if (currentMonth < this.birthMonth || (currentMonth === this.birthMonth && currentDay < this.birthDay)) {
        age--;
      }

      return age;
    }
  },
  mounted() {
    this.age = this.calculateAge();
  }
}
</script>
