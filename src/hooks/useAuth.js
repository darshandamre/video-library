import { useUser } from "../react-query/queries";

export const useAuth = () => {
  const { data } = useUser();

  return {
    isAuth: !!data?.user?._id
  };
};
