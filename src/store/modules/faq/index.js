export default {
  state() {
    return {
      query: '',
      qa: [
        {
          question: 'How do I add a new question & answer?',
          answer: `
          To add a new FAQ follow these steps:

          1. Click “Manage FAQs” button
          2. From your site's dashboard you can add, edit and manage all your questions and answers
          3. Each question and answer should be added to a category
          4. Save and publish
          `,
        },
        {
          question: 'Can I insert an image, video, or gif in my FAQ?',
          answer: `
          Yes. To add media follow these steps:
          1. Enter the app's Settings
          2. Click on the “Manage FAQs” button
          3. Select the question you would like to add media to
          4. When editing your answer click on the camera, video, or GIF icon
          5. Add media from your library.
          `,
        },
        {
          question: 'How do I edit or remove the “FAQ” title?',
          answer:
            "You can edit the title from the Settings tab in the app. If you don't want to display the title, simply disable the Title under “Info to Display”.",
        },
      ],
    };
  },

  getters: {
    qa(state) {
      const filteredQA = [];

      if (state.query === '') {
        return state.qa;
      }

      state.qa.forEach(i => {
        if (i.question.includes(state.query)) {
          filteredQA.push(i);
        }
      });

      return filteredQA;
    },
  },

  mutations: {
    setQuery(state, payload) {
      state.query = payload;
    },
  },

  actions: {
    setQuery(context, payload) {
      context.commit('setQuery', payload);
    },
  },
};
