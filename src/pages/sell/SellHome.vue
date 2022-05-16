<template>
  <section>
    <div class="container">
      <h1>
        The Fastest &<br />Easiest Way To Sell<br />
        Your Property
      </h1>
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
          <label for="email">Email *</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="neighborhood">
          <label for="neighborhood">Neighborhood</label>
          <input type="text" id="neighborhood" v-model="neighborhood" />
        </div>
        <div class="address">
          <label for="address">Address</label>
          <input type="text" id="address" v-model="address" />
        </div>
        <div class="floor">
          <label for="floor">Floor</label>
          <input type="text" id="floor" v-model="floor" />
        </div>
        <div class="totalbedrooms">
          <label for="totalbedrooms">Total Bedrooms</label>
          <input
            type="number"
            id="totalbedrooms"
            v-model.number="totalBedrooms"
          />
        </div>
        <div class="building_history">
          <label for="building_history">Building History</label>
          <textarea
            rows="10"
            id="building_history"
            v-model="buildingHistory"
          ></textarea>
        </div>
        <div class="pets_policies">
          <label>Pets policy</label>
          <div class="pets_policy">
            <div class="pets_allowed">
              <input
                type="radio"
                id="pets_allowed"
                value="pets_allowed"
                name="pets_allowed"
                v-model="petsPolicy"
              />
              <label for="pets_allowed">Pets Allowed</label>
            </div>
            <div class="pets_allowed">
              <input
                type="radio"
                id="no_pets"
                value="no_pets"
                name="pets_allowed"
                v-model="petsPolicy"
              />
              <label for="no_pets">No Pets</label>
            </div>
          </div>
        </div>
        <div class="amenities">
          <label>Amenities</label>
          <div>
            <input
              type="checkbox"
              id="doorman"
              value="doorman"
              v-model="amenities"
            />
            <label for="doorman">Doorman</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="storage"
              value="storage"
              v-model="amenities"
            />
            <label for="storage">Storage</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="elevator"
              value="elevator"
              v-model="amenities"
            />
            <label for="elevator">Elevator</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="washer_dryer"
              value="washer_dryer"
              v-model="amenities"
            />
            <label for="washer_dryer">Washer/Dryer</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="natural_light"
              value="natural_light"
              v-model="amenities"
            />
            <label for="natural_light">Natural Light</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="laundry_room"
              value="laundry_room"
              v-model="amenities"
            />
            <label for="laundry_room">Laundry Room</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="high_ceilings"
              value="high_ceilings"
              v-model="amenities"
            />
            <label for="high_ceilings">High Ceilings</label>
          </div>
        </div>
        <submit-button>Submit</submit-button>
      </form>
      <p v-if="!formIsValid">All fields have to be filled.</p>
    </div>
  </section>
</template>

<script>
import SubmitButton from '@/components/UI/SubmitButton.vue';
export default {
  components: { SubmitButton },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      neighborhood: '',
      address: '',
      floor: '',
      totalBedrooms: null,
      buildingHistory: '',
      petsPolicy: '',
      amenities: [],

      formIsValid: true,
    };
  },

  methods: {
    validateForm() {
      this.formIsValid = true;

      if (this.firstName === '') this.formIsValid = false;
      if (this.lastName === '') this.formIsValid = false;
      if (this.email === '') this.formIsValid = false;
      if (this.neighborhood === '') this.formIsValid = false;
      if (this.address === '') this.formIsValid = false;
      if (this.floor === '') this.formIsValid = false;
      if (this.totalBedrooms === null || this.totalBedrooms < 1)
        this.formIsValid = false;
      if (this.buildingHistory === '') this.formIsValid = false;
      if (this.petsPolicy === '') this.formIsValid = false;
      if (this.amenities.length === 0) this.formIsValid = false;
    },

    submitForm() {
      this.validateForm();

      if (!this.formIsValid) return;

      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        neighborhood: this.neighborhood,
        address: this.address,
        floor: this.floor,
        totalBedrooms: this.totalBedrooms,
        buildingHistory: this.buildingHistory,
        petsPolicy: this.petsPolicy,
        amenities: this.amenities,
      };

      console.log(formData);
    },
  },
};
</script>

<style scoped>
section {
  margin-top: 3rem;
}

.container {
  position: relative;
  left: 21%;
  width: 600px;
}

h1 {
  font-size: 4rem;
}

p {
  margin-top: 2rem;
  font-size: 1.5rem;
  color: red;
}

form {
  display: grid;
  grid-template-areas:
    'firstname lastname'
    'email neighborhood'
    'address floor'
    'totalbedrooms totalbedrooms'
    'building-history building-history'
    'pets-policies pets-policies'
    'amenities amenities'
    'submit submit';
  margin-top: 3rem;
}

form > .firstname {
  grid-area: firstname;
}

form > .lastname {
  grid-area: lastname;
}

form > .email {
  grid-area: email;
}

form > .neighborhood {
  grid-area: neighborhood;
}

form > .address {
  grid-area: address;
}

form > .floor {
  grid-area: floor;
}

form > .totalbedrooms {
  grid-area: totalbedrooms;
}

form > .building_history {
  grid-area: building-history;
}

form > .pets_policies {
  grid-area: pets-policies;
}

form > .amenities {
  grid-area: amenities;
}

form > .submit {
  grid-area: submit;
}

form label {
  display: block;
  font-family: inherit;
  font-weight: 300;
  letter-spacing: 1px;
}

form input {
  width: 85%;
  border: none;
  border-bottom: 1px solid #bebebe;
  margin-bottom: 2rem;
  padding: 0.5rem 0;
  font-size: 1rem;
  font-family: inherit;
  font-weight: 300;
}

form textarea {
  width: 93%;
  border: none;
  border-bottom: 1px solid #bebebe;
  margin-bottom: 2rem;
  resize: none;
}

.pets_policy {
  display: flex;
  flex-direction: row;
  gap: 10rem;
  margin-top: 1.5rem;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox'] + label {
  display: inline;
  margin: 0 0 0 0.5rem;
}

input[type='radio'] {
  appearance: none;
  background-color: #fff;
  font: inherit;
  color: #333;
  width: 1.3em;
  height: 1.15em;
  margin-bottom: 4rem;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.03rem);
  display: inline-grid;
  place-content: center;
  cursor: pointer;
}

input[type='checkbox'] {
  appearance: none;
  background-color: #fff;
  font: inherit;
  color: #333;
  width: 1.25em;
  height: 1.15em;
  margin-bottom: 1rem;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: inline-grid;
  place-content: center;
  cursor: pointer;
}

input[type='radio']::before {
  content: '';
  width: 0.65em;
  height: 0.7em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em #000;
}

input[type='checkbox']::before {
  content: '';
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em #000;
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

input[type='radio']:checked::before {
  transform: scale(1);
}

input[type='checkbox']:checked::before {
  transform: scale(1);
}

input[type='checkbox']:hover {
  outline: none;
}

form div.totalbedrooms input {
  width: 93%;
}

form input:focus {
  outline: none;
}

form input[type='text']:hover,
form input[type='email']:hover {
  border-bottom: 2px solid #000;
  margin-bottom: 1.9rem;
}

form input[type='number']:hover {
  border-bottom: 2px solid #000;
  margin-bottom: 31px;
}

form textarea:hover {
  border-bottom: 2px solid #000;
  margin-bottom: 31px;
}

.pets_allowed label {
  display: inline;
  margin-left: 0.5rem;
  cursor: pointer;
}

.amenities {
  margin-bottom: 2rem;
}

.amenities label {
  margin-bottom: 1.5rem;
  cursor: pointer;
}
</style>
