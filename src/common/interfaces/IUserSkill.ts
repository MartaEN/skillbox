import {ITechnologyShort} from '@/common/interfaces/ITechnologyShort';

export interface IUserSkill {
  id: string;
  title: string;
  technology: ITechnologyShort;
  category: string;
  versions: string[];
  level: number;
  updated: string;
  source: string;
}