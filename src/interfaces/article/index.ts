import { CategoryInterface } from 'interfaces/category';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface ArticleInterface {
  id?: string;
  title: string;
  content: string;
  category_id: string;
  client_id: string;
  created_at?: any;
  updated_at?: any;

  category?: CategoryInterface;
  client?: ClientInterface;
  _count?: {};
}

export interface ArticleGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  category_id?: string;
  client_id?: string;
}
