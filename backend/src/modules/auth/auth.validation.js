export const signUp = {
  body: joi.object().required().keys({
    fullName: generalFields.name,
    password: generalFields.password,
    email: generalFields.email,
  }),
  file: generalFields.file,
  params: joi.object().required().keys({}),
  query: joi.object().required().keys({}),
};

export const logIn = {
  body: joi.object().required().keys({
    email: generalFields.email,
    password: generalFields.password,
  }),
  file: generalFields.file,
  params: joi.object().required().keys({}),
  query: joi.object().required().keys({}),
};
