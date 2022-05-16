export default {
  state() {
    return {
      personalInfo: {
        tel: '123-456-7890',
        email: 'mail@email.com',
        address: '500 Terry Francois St.',
        city: 'San Francisco, CA 94158',
      },
    };
  },

  getters: {
    personalInfo(state) {
      return state.personalInfo;
    },
  },
};
