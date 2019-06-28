
export default {

    namespace: 'Movie',
  
    state: {
      MovieList:'',
      MovieId:''
    },
  
    reducers: {
      GetMovie(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };