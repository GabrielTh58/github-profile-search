export interface IUser {
  login?: string;
  id: number;
  avatar_url: string;
  name: string;
  bio: string | null;
}

export interface IUserProfileContext {
  userData: IUser | null;
  setUserProfile: (data: IUser) => void;
  hasSearched: boolean;
}
