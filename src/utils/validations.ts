import { User } from "../App";

interface ErrorMessage {
  username?: string;
  email?: string;
  github?: string;
  userImg?: string;
}

export const validateForm = (
  user: User,
  imageSrc: string | undefined
): ErrorMessage => {
  const errors: ErrorMessage = {};

  if (!user.username) {
    errors.username = "This field cannot be empty";
  } else if (/\d/.test(user.username)) {
    errors.username = "Username cannot contain numbers";
  } else if (user.username.length > 22) {
    errors.username = "Username cannot exceed 22 characters";
  }

  if (!user.email) {
    errors.email = "This field cannot be empty";
  }

  if (!user.github) {
    errors.github = "This field cannot be empty";
  } else if (!/^@/.test(user.github)) {
    errors.github = "GitHub username must start with @";
  } else if (user.github.length > 22) {
    errors.github = "GitHub username cannot exceed 22 characters";
  }

  if (!imageSrc) {
    errors.userImg = "This field cannot be empty";
  }

  return errors;
};
