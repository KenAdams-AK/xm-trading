/* eslint-disable @typescript-eslint/no-use-before-define */
import { z } from "zod";

const MIN_AGE = 18;
const MAX_AGE = 60;

export const FIELD_STATUS = {
  default: "default",
  valid: "valid",
  invalid: "invalid",
};

export const FORM_ERRORS = {
  fullName: "Please enter valid name",
  birthDate: `Age must be between ${MIN_AGE} and ${MAX_AGE} years old`,
  email: "Please enter valid email",
  password: {
    length: {
      status: FIELD_STATUS.valid,
      message: "8 - 15 characters",
    },
    hasNumbers: {
      status: FIELD_STATUS.valid,
      message: "1 or more numbers",
    },
    hasLowerCase: {
      status: FIELD_STATUS.valid,
      message: "1 or more lower case letters",
    },
    hasUpperCase: {
      status: FIELD_STATUS.valid,
      message: "1 or more upper case letters",
    },
    hasSpecialChar: {
      status: FIELD_STATUS.valid,
      message: "1 or more special characters (#[]()@$&*!?|,.^/+_-)",
    },
  },
  root: "This email is already taken",
} as const;

export const schema = z
  .object({
    fullName: z
      .string()
      .min(3, FORM_ERRORS.fullName)
      .max(40, FORM_ERRORS.fullName)
      .refine(fullNameRefine, {
        message: FORM_ERRORS.fullName,
      }),
    birthDate: z.string().refine(ageRefine, {
      message: FORM_ERRORS.birthDate,
    }),
    email: z.string().email(FORM_ERRORS.email),
    password: z.string(),
  })
  .superRefine(superRefine);

export type FormFields = z.infer<typeof schema>;

function fullNameRefine(value: string) {
  return /^[^\d\W_]*$/i.test(value);
}

function ageRefine(dateString: string) {
  const minAge = 18;
  const maxAge = 60;
  const birthDate = new Date(dateString);
  const currentDate = new Date();
  // Calculate age
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  // Adjust age if birthday hasn't occurred yet this year
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age -= 1;
  }

  return age >= minAge && age <= maxAge;
}

function superRefine(
  { password }: { password: string },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checkPassComplexity: Record<string, any>,
) {
  const length = password.length >= 8 && password.length <= 15;
  const hasNumber = (ch: string) => !Object.is(NaN, +ch);
  const hasLowercase = (ch: string) => /[a-z]/.test(ch);
  const hasUppercase = (ch: string) => /[A-Z]/.test(ch);
  const hasSpecialChar = (ch: string) => /[#\\[\]()@$&*!?|,.^/+_-]/.test(ch);

  const errObj = { ...FORM_ERRORS.password };
  const counter = {
    number: 0,
    lowerCase: 0,
    upperCase: 0,
    specialCh: 0,
  };

  for (let i = 0; i < password.length; i += 1) {
    const ch = password.charAt(i);
    if (hasNumber(ch)) counter.number += 1;
    else if (hasLowercase(ch)) counter.lowerCase += 1;
    else if (hasUppercase(ch)) counter.upperCase += 1;
    else if (hasSpecialChar(ch)) counter.specialCh += 1;
  }

  if (!length) {
    errObj.length = { ...errObj.length, status: FIELD_STATUS.invalid };
  }
  if (counter.number < 1) {
    errObj.hasNumbers = { ...errObj.hasNumbers, status: FIELD_STATUS.invalid };
  }
  if (counter.lowerCase < 1) {
    errObj.hasLowerCase = {
      ...errObj.hasLowerCase,
      status: FIELD_STATUS.invalid,
    };
  }
  if (counter.upperCase < 1) {
    errObj.hasUpperCase = {
      ...errObj.hasUpperCase,
      status: FIELD_STATUS.invalid,
    };
  }
  if (counter.specialCh < 1) {
    errObj.hasSpecialChar = {
      ...errObj.hasSpecialChar,
      status: FIELD_STATUS.invalid,
    };
  }

  if (
    !length ||
    counter.number < 1 ||
    counter.lowerCase < 1 ||
    counter.upperCase < 1 ||
    counter.specialCh < 1
  ) {
    checkPassComplexity.addIssue({
      code: "custom",
      path: ["password"],
      message: errObj,
    });
  }
}
