export default {
  state() {
    return {
      testimonials: [
        {
          number: 0,
          quote:
            "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
          author: 'Serban',
        },
        {
          number: 1,
          quote: 'Wow',
          author: 'David',
        },
        {
          number: 2,
          quote: 'Sheesh',
          author: 'Badi',
        },
      ],
    };
  },

  getters: {
    testimonials(state) {
      return state.testimonials;
    },
  },
};
