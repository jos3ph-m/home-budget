// rrd imports
import { redirect } from 'react-router-dom';
import { deleteItem } from '../helpers';

// library
import { toast } from 'react-toastify';

export async function logoutAction() {
  // delete the user
  deleteItem({
    key: 'userName',
  });
  toast.success("You've deleted the account!");

  // return redirect
  return redirect('/');
}
