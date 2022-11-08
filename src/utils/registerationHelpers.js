import moment from 'moment';

export const getFormattedValuesForRegisteration = (values) => {
  return {
    ProfileForId: values.creatingFor,
    GenderId: values.gender,
    FullName: values.groomName,
    DateOfBirth: moment(values.dateOfBirth).format('DD/MM/YYYY'),
    Languageid: values.motherTongue,
    ReligionId: values.religion,
    CastId: values.caste,
    CountryId: values.country,
    StateId: values.state,
    DistrictId: values.district,
    CityId: values.city,
    Village: values.village,
    PostalCode: values.postalCode,
    MobileNumber: values.phoneNumber,
    EmailId: values.email,
    PasswordHash: values.password,
    EmailConfirmed: 1,
    MobileNumberConfirmed: 1,
    VendorId: values.Vendor,
    AdminId: 0,
    RoleId: 1,
    TermsAndConditions: values.terms_and_condition
  };
};
