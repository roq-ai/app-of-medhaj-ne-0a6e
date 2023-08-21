import { UserInterface } from 'interfaces/user';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface ContributorInterface {
  id?: string;
  user_id: string;
  client_id: string;
  last_contribution?: any;
  total_contributions?: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  client?: ClientInterface;
  _count?: {};
}

export interface ContributorGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  client_id?: string;
}
