export type User = {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: number;
  address: string;
  city: string;
  state: string;
  zip: number;
  country: string;
};

export type UserLoginData = Pick<User, "username" | "password">;

export type UserShippingData = Pick<
  User,
  "firstName" | "lastName" | "address" | "city" | "state" | "zip" | "country"
>;

export type UserContactDetails = Pick<User, "phone" | "email">;
