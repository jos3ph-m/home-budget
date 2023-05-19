// rrd imports
import { redirect } from 'react-router-dom';
import { deleteItem } from '../helpers';

export async function logoutAction() {
  // delete the user
  deleteItem;

  // return redirect
  return redirect('/');
}
