import { createSelector } from 'reselect';
import { transformResponseForDropDown } from '../../utils/';

const getCreatingFor = createSelector(
  [(state) => state.registerationDetails.data],
  (registerationDetails) => {
    const { profilefor = [] } = registerationDetails;

    return transformResponseForDropDown(profilefor, 'ProfileForName');
  }
);

const getLanguage = createSelector(
  [(state) => state.registerationDetails.data],
  (registerationDetails) => {
    const { language = [] } = registerationDetails;

    return transformResponseForDropDown(language, 'LanguageName');
  }
);

const getReligion = createSelector(
  [(state) => state.registerationDetails.data],
  (registerationDetails) => {
    const { religion = [] } = registerationDetails;

    return transformResponseForDropDown(religion, 'ReligionName');
  }
);

const getFormRegisterationMessage = createSelector(
  [(state) => state.formRegisterationDetails.message],
  (message = '') => {
    return message;
  }
);

const checkIfRegistrationWasSuccess = createSelector(
  [(state) => state.formRegisterationDetails.isError],
  (isError) => !isError
);

export {
  getCreatingFor,
  getLanguage,
  getReligion,
  getFormRegisterationMessage,
  checkIfRegistrationWasSuccess
};
