export const COLUMNS = [
  { id: '9106702308275650560', name: 'work_interfere' },
  { id: '4495016289848262656', name: 'family_history' },
  { id: '6224398546758533120', name: 'benefits' },
  { id: '3342094785241415680', name: 'care_options' },
  { id: '4711189071962046464', name: 'coworkers' },
  { id: '7377320051365380096', name: 'anonymity' },
  { id: '459791023724298240', name: 'seek_help' },
  { id: '3918555537544839168', name: 'leave' },
  { id: '1612712528331145216', name: 'comments' },
  { id: '8818471932123938816', name: 'Gender' },
  { id: '5864110576568893440', name: 'phys_health_interview' },
  { id: '8530241555972227072', name: 'Country' },
  { id: '5287649824265469952', name: 'no_employees' },
  { id: '8169953585782587392', name: 'mental_health_interview' },
  { id: '3558267567355199488', name: 'Age' },
  { id: '7953780803668803584', name: 'wellness_program' },
  { id: '5647937794455109632', name: 'state' },
  { id: '1036251776027721728', name: 'mental_health_consequence' },
  { id: '5071477042151686144', name: 'obs_consequence' },
  { id: '2765634032937992192', name: 'tech_company' },
  { id: '675963805838082048', name: 'mental_vs_physical' },
  { id: '1252424558141505536', name: 'supervisor' },
  { id: '99503053534658560', name: 'phys_health_consequence' },
  { id: '2189173280634568704', name: 'self_employed' },
  { id: '7017032081175740416', name: 'remote_work' },
  { id: '2405346062748352512', name: 'Timestamp' },
];

/**
 * The DTO used to input a prediction by the user
 */
export class PredictionDto {
  /**
   * The ID of the column
   * @example 2405346062748352512
   */
  id: string;

  /**
   * The value that was input by the user
   * @example '2014-08-29 11:27:47'
   */
  value: string;
}
