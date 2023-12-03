export type AuthResponse = {
    'name': string;
    'avatarUrl': string;
    'email': string;
    'token': string;
}

export type CheckAuthResponse = {
    authorized: boolean;
    data?: AuthResponse;
  };
