export default {
  state() {
    return {
      featuredPhoto:
        'https://static.wixstatic.com/media/2feeec_f17617540c4148a18d7bd978014503ce~mv2_d_4917_3278_s_4_2.jpg/v1/fill/w_1598,h_837,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2feeec_f17617540c4148a18d7bd978014503ce~mv2_d_4917_3278_s_4_2.jpg',
      featuredProperties: [
        {
          id: 0,
          image:
            'https://static.wixstatic.com/media/84770f_6215caa87c3f47828e2804fa70b17426~mv2_d_7360_4912_s_4_2.jpg/v1/fill/w_587,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder%20copy.jpg',
          projectName: 'Dryzler Building',
          address: '500 Terry Francois Street San Francisco',
          sqft: '450',
          floor: '3',
          totalRooms: '5',
          price: '$2,460',
          type: 'Rent',
        },
        {
          id: 1,
          image:
            'https://static.wixstatic.com/media/84770f_503436d30d1849c2aaac8f32ccdaf8ff~mv2_d_4698_3036_s_4_2.jpg/v1/fill/w_587,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder%20copy.jpg',
          projectName: 'Barnebie Plaza',
          address: '500 Terry Francois Street San Francisco',
          sqft: '600',
          floor: '11',
          totalRooms: '6',
          price: '$3,460',
          type: 'Rent',
        },
        {
          id: 0,
          image:
            'https://static.wixstatic.com/media/84770f_d5e9587fd8e54c1d8dea2e5587ba19d1~mv2_d_4368_2912_s_4_2.jpg/v1/fill/w_587,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder%20copy.jpg',
          projectName: 'Bankers Building',
          address: '500 Terry Francois Street San Francisco',
          sqft: '780',
          floor: '2',
          totalRooms: '7',
          price: '$3,325,500',
          type: 'Buy',
        },
        {
          id: 1,
          image:
            'https://static.wixstatic.com/media/84770f_126da75e83194cfbb927484028c3d938~mv2_d_3872_2592_s_4_2.jpg/v1/fill/w_587,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder%20copy.jpg',
          projectName: 'Dolores Plaza',
          address: '500 Terry Francois Street San Francisco',
          sqft: '670',
          floor: '4',
          totalRooms: '6',
          price: '$3,450,000',
          type: 'Buy',
        },
      ],
    };
  },

  getters: {
    featuredPhoto(state) {
      return state.featuredPhoto;
    },

    featuredProperties(state) {
      return state.featuredProperties;
    },
  },
};
