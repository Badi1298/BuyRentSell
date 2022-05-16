<template>
  <form @submit.prevent="submitForm">
    <label for="firstname">First Name</label>
    <input type="text" name="firstname" v-model="firstName" />
    <label for="lastname">Last Name</label>
    <input type="text" name="lastname" v-model="lastName" />
    <label for="email">Email *</label>
    <input type="email" name="email" v-model="email" />
    <label for="phone">Phone</label>
    <input type="number" name="phone" v-model="phone" />
    <label for="message">Type Your Message Here</label>
    <textarea rows="7" v-model="message"></textarea>
    <button>Submit</button>
  </form>
  <p v-if="!formIsValid">Fill all the inputs</p>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: null,
      message: '',

      formIsValid: true,
    };
  },

  methods: {
    validateForm() {
      this.formIsValid = true;

      if (this.firstName === '') this.formIsValid = false;
      if (this.lastName === '') this.formIsValid = false;
      if (this.email === '') this.formIsValid = false;
      if (this.phone === null) this.formIsValid = false;
      if (this.message === '') this.formIsValid = false;
    },

    submitForm() {
      this.validateForm();

      if (!this.formIsValid) return;

      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };

      console.log(formData);
    },
  },
};
</script>

<style scoped>
p {
  margin: 5rem 0 3rem 0;
  font-size: 0.9rem;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 50%;
  margin-bottom: 1.5rem;
}

textarea {
  width: 50%;
  margin-bottom: 1.5rem;
}

input,
textarea {
  background: transparent;
  border: none;
  color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 0;
  resize: none;
}

input:hover,
textarea:hover {
  border-bottom: 2px solid #ccc;
  margin-bottom: 23px;
}

input:focus,
textarea:focus {
  outline: none;
  border-bottom: 3px solid #ccc;
  margin-bottom: 22px;
}

input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

button {
  display: block;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 1.3rem;
  font-family: inherit;
  font-weight: 300;
  cursor: pointer;
}

@media (max-width: 1200px) {
  input,
  textarea {
    width: 70%;
  }
}

@media (max-width: 900px) {
  input,
  textarea {
    width: 100%;
  }
}
</style>
