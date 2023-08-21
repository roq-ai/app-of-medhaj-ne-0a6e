import { ArticleInterface } from 'interfaces/article';
import { GuestInterface } from 'interfaces/guest';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface CategoryInterface {
  id?: string;
  name: string;
  description?: string;
  client_id: string;
  created_at?: any;
  updated_at?: any;
  article?: ArticleInterface[];
  guest?: GuestInterface[];
  client?: ClientInterface;
  _count?: {
    article?: number;
    guest?: number;
  };
}

export interface CategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  client_id?: string;
}
