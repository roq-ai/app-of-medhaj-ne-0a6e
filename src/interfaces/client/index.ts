import { ArticleInterface } from 'interfaces/article';
import { CategoryInterface } from 'interfaces/category';
import { ContributorInterface } from 'interfaces/contributor';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ClientInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  article?: ArticleInterface[];
  category?: CategoryInterface[];
  contributor?: ContributorInterface[];
  user?: UserInterface;
  _count?: {
    article?: number;
    category?: number;
    contributor?: number;
  };
}

export interface ClientGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
