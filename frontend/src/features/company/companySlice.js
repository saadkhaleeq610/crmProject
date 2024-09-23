import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companyList: [],
  selectedCompany: null,
  userCompany: null,
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setCompanyList: (state, action) => {
      state.companyList = action.payload;
    },
    joinCompany: (state, action) => {
      state.selectedCompany = action.payload;
    },
    createCompany: (state, action) => {
      state.userCompany = action.payload;
    },
    clearCompanySelection: (state) => {
      state.selectedCompany = null;
      state.userCompany = null;
    },
  },
});

export const { setCompanyList, joinCompany, createCompany, clearCompanySelection } = companySlice.actions;

export default companySlice.reducer;
