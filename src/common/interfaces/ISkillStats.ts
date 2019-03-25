import {ITechnologyShort} from '@/common/interfaces/ITechnologyShort';

export interface ISkillStats {
  id: string;
  technology: ITechnologyShort;
  category: string;
  skill: string;
  version: string;
  mavens: number;
  missions: number;
  tags: string[];
}