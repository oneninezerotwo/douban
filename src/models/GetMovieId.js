
export default {

    namespace: 'MovieId',
  
    state: {
      MovieList:'',
      MovieId:''
    },
  
    reducers: {
      GetMovieId(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };