import { omitBy, isNil, isEmpty } from 'lodash';
import { compose } from './compose';

const getConstructedPhysicalInfo = (values) => {
  const {
    bodyType = {},
    complexion = {},
    physicalStatus = {},
    weight,
    highestEducation = {},
    occupation = {},
    employeeType = {},
    annualIncome = {},
    height = {}
  } = values;

  const physicalInfo = {
    BodyTypeId: bodyType,
    ComplexionId: complexion,
    PhysicalStatusId: physicalStatus,
    HeightId: height,
    Weight: weight,
    EducationId: highestEducation,
    EmploymentTypeId: employeeType,
    OccupationId: occupation,
    AnnualIncomeId: annualIncome
  };
  const santizedPhysicalInfo = omitBy(physicalInfo, isNil);

  return { physicalprofileinfo: santizedPhysicalInfo };
};

const getConstructedFamilyDetails = (values) => {
  const {
    familyStatus = {},
    familyType = {},
    fatherName,
    fatherSurname,
    fatherOccupation,
    motherName,
    motherSurname,
    motherOccupation,
    noOfBrothers,
    noOfSisters
  } = values;

  const familyDetails = {
    FamilytypeId: familyType,
    FamilystatusId: familyStatus,
    FathersSurname: fatherSurname,
    FathersName: fatherName,
    FathersOccupation: fatherOccupation,
    MothersSurname: motherSurname,
    MothersName: motherName,
    MothersOccupation: motherOccupation,
    NoOfSisters: noOfSisters,
    NoOfBrothers: noOfBrothers
  };

  return { familydetail: omitBy(familyDetails, isNil) };
};

const getConstructedPartnerPerference = (values) => {
  const {
    star = {},
    statePartner = {},
    countryPartner = {},
    districtPartner = {},
    cityPartner = {},
    employmentTypePartner = {},
    annualIncomPartner = {},
    occupationPartner = {},
    highestEducationPartner = {}
  } = values;
  const partnerPerference = {
    StarId: star,
    EducationId: highestEducationPartner,
    EmployeetypeId: employmentTypePartner,
    OccupationId: occupationPartner,
    AnnualIncomeId: annualIncomPartner,
    CountryId: countryPartner,
    StateId: statePartner,
    DistrictId: districtPartner,
    CityId: cityPartner
  };
  return { partnerpreferance: omitBy(partnerPerference, isNil) };
};

const getConstructedPermanentAddress = (values) => {
  const {
    permanentAddress,
    permanentCountry = {},
    permanentState = {},
    permanentDistrict = {},
    permanentCity = {},
    permanentTypeAddress
  } = values;

  const permanentAddressRequest = {
    Address1: permanentAddress,
    CountryId: permanentCountry,
    StateId: permanentState,
    CityId: permanentCity,
    AddressType: permanentTypeAddress,
    DistrictId: permanentDistrict
  };

  return { PermanantAddress: omitBy(permanentAddressRequest, isNil) };
};

const getConstructedWorkAddress = (values) => {
  const {
    workCountry = {},
    workState = {},
    workDistrict = {},
    workCity = {},
    workAddress,
    workTypeAddress
  } = values;
  const workLocation = {
    Address1: workAddress,
    CountryId: workCountry.Id,
    StateId: workState.Id,
    DistrictId: workDistrict.Id,
    CityId: workCity.Id,
    AddressType: workTypeAddress
  };

  return { workasddress: omitBy(workLocation, isNil) };
};

export const getFormattedValuesForCompleteRegisteration = (values = {}) => {
  const formattedResponse = compose(
    getConstructedPhysicalInfo,
    getConstructedFamilyDetails,
    getConstructedPartnerPerference,
    // getConstructedPermanentAddress,
    // getConstructedWorkAddress
  )(values);
  return omitBy(omitBy({ ...formattedResponse, UserId: values.userId }, isNil), isEmpty);
};
