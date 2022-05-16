<template>
  <div class="contact">
    <div class="form">
      <h2>
        Interested in<br />
        this<br />
        property?
      </h2>
      <form @submit.prevent="submitForm">
        <div class="firstname">
          <label for="firstname">First Name</label>
          <input type="text" id="firstname" v-model.trim="firstName" />
        </div>
        <div class="lastname">
          <label for="lastname">Last Name</label>
          <input type="text" id="lastname" v-model.trim="lastName" />
        </div>
        <div class="email">
          <label for="email">Email</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="phone">
          <label for="phone">Phone</label>
          <input type="number" id="phone" v-model="phone" />
        </div>
        <submit-button>Submit</submit-button>
      </form>
      <p v-if="!formIsValid">Complete all the fields.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: null,

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
    },

    submitForm() {
      this.validateForm();

      if (!this.formIsValid) return;

      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
      };

      console.log(formData);
    },
  },
};
</script>

<style scoped>
.contact {
  width: 1700px;
  height: 730px;
  margin: 4rem auto 0;
  background-color: #e6e6e6f2;
}

.contact h2 {
  font-size: 3.5rem;
  font-weight: 500;
}

.contact .form {
  position: relative;
  top: 10%;
  left: 22%;
}

.contact .form form {
  width: 400px;
  margin-top: 3rem;
  display: grid;
  grid-template-areas:
    'firstname lastname'
    'email email'
    'phone phone';
}

.contact .form form > .firstname {
  grid-area: firstname;
}
.contact .form form > .lastname {
  grid-area: lastname;
}

.contact .form form > .email {
  grid-area: email;
}

.contact .form form > .phone {
  grid-area: phone;
}

.contact .form form label {
  display: block;
}

.contact .form form input {
  border: none;
  background: transparent;
  border-bottom: 1px solid #999;
  margin-bottom: 2rem;
  width: 100%;
}

.firstname,
.lastname {
  width: 170px;
}

.email,
.phone {
  width: 370px;
}

.form form input {
  padding: 0.5rem 0;
  font-family: inherit;
  font-size: 0.9rem;
}

.form form input:hover {
  border-bottom: 2px solid #000;
  margin-bottom: 31px;
}

.form form input:focus {
  outline: none;
}

.form form input[type='number']::-webkit-inner-spin-button,
.form form input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
