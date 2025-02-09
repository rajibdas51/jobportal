import axios from 'axios';
import { setCurrentUser } from '@/redux/userSlice';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/redux/loaderSlice';
import { useRouter } from 'next/navigation';
export const fetchCurrentUser = async (dispatch) => {
  try {
    const response = await axios.get('/api/users/currentuser');
    const userData = response.data.data;

    if (userData) {
      dispatch(setCurrentUser(userData));
      return userData;
    }

    return null;
  } catch (error) {
    console.error('Failed to fetch current user', error);
    dispatch(setCurrentUser(null));
    return null;
  }
};
