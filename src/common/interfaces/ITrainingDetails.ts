import {ISkillLevelRange} from '@/common/interfaces/ISkillLevelRange';

export interface ITrainingDetails {
  id: string;
  title: string;
  image: string;
  startingDate: string;
  endingDate: string;
  description: string;
  prerequisites: ISkillLevelRange[];
  outcomes: ISkillLevelRange[];
}