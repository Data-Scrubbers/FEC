import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

export const fetchQuestions = createAsyncThunk(
  'qa/questions',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=qa/questions?product_id=${productId}`);

    return response.data;
  }
);

export const fetchAnswers = createAsyncThunk(
  'qa/questions/:question_id/answers',
  async (questionId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=qa/questions/${questionId}/answers`);

    console.log('AnswersResponse:', response.data);
    return response.data;
  }
);

export const qaSlice = createSlice({
  name: 'qa',
  initialState: {
    currentStyle: null,
    questions: [],
    answers: []
  },

  reducers: {
    selectStyle: (state, action) => {
      state.currentStyle = action.payload;
    }
  },
  extraReducers: {
    [fetchQuestions.fulfilled]: (state, action) => {
      state.questions = action.payload.results;
      state.currentStyle = action.payload.results[1];
    },
    [fetchAnswers.fulfilled]: (state, action) => {
      state.answers = action.payload.results;
    }
  }
});

//Action creators are generated for each reducer function. Add multiple like so { reducer1, reducer2, ...}
export const { selectStyle } = qaSlice.actions;

//Makes the reducers defined above available to the store
export default qaSlice.reducer;
