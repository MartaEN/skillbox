import {ITechnologyStats} from '@/common/interfaces/ITechnologyStats';

export interface ITechnology {
  id: string;
  name: string;
  description: string;
  stats: ITechnologyStats;
}
