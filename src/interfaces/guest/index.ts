import { CategoryInterface } from 'interfaces/category';
import { GetQueryInterface } from 'interfaces';

export interface GuestInterface {
  id?: string;
  username: string;
  email: string;
  last_login?: any;
  last_search?: string;
  favorite_category_id: string;
  created_at?: any;
  updated_at?: any;

  category?: CategoryInterface;
  _count?: {};
}

export interface GuestGetQueryInterface extends GetQueryInterface {
  id?: string;
  username?: string;
  email?: string;
  last_search?: string;
  favorite_category_id?: string;
}
