import { useAppSelector } from '../hooks';

const ProfileScreen = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div>
      <figure>{user?.name.charAt(0).toUpperCase()}</figure>
      <span>
        Welcome <strong>{user?.name}!</strong> You can view this page because
        you&#39;re logged in
      </span>
    </div>
  );
};

export default ProfileScreen;
