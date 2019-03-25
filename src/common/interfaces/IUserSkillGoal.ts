import {IUserSkill} from '@/common/interfaces/IUserSkill';
import {IUserTrainingEnrollmentsStatus} from '@/common/interfaces/IUserTrainingEnrollmentsStatus';

export interface IUserSkillGoal {
  skill: IUserSkill;
  targetLevel: number;
  trainingsSuggested: IUserTrainingEnrollmentsStatus[];
}