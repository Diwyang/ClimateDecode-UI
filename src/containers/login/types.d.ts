interface User {
  id: string;
  email: string;
  name: string;
}

interface UserResponse {
  user: User;
  token: string;
}
