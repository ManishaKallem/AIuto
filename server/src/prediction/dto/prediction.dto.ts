export const COLUMNS = [
  {
    id: '9106702308275650560',
    name: 'work_interfere',
    defaultValue: null,
    description: 'Are you stressed about your daily work?',
    options: ['Never', 'Sometimes', 'Often', 'Rarely', 'NA'],
  },
  {
    id: '4495016289848262656',
    name: 'family_history',
    defaultValue: null,
    description: 'Any family history for mental illness?',
    options: ['Yes', 'No'],
  },
  {
    id: '6224398546758533120',
    name: 'benefits',
    defaultValue: null,
    description:
      'Do you think you will be benefited from a psychological therapy?',
    options: ['Yes', 'No', "Don't know"],
  },
  {
    id: '3342094785241415680',
    name: 'care_options',
    defaultValue: null,
    description: 'Do you have any mental health care options in your mind?',
    options: ['Yes', 'No', 'Not sure'],
  },
  {
    id: '4711189071962046464',
    name: 'coworkers',
    defaultValue: null,
    description:
      'Are your coworkers (if any) making you feel stressed or irritated?',
    options: ['Yes', 'No', 'Some of them'],
  },
  {
    id: '7377320051365380096',
    name: 'anonymity',
    defaultValue: null,
    description: 'Do you often feel confused?',
    options: ['Yes', 'No', "Don't know"],
  },
  {
    id: '459791023724298240',
    name: 'seek_help',
    defaultValue: null,
    description: 'Are you seeking any help for your mental illness?',
    options: ['Yes', 'No', "Don't know"],
  },
  {
    id: '3918555537544839168',
    name: 'leave',
    defaultValue: null,
    description: 'How do you get a leave if required?',
    options: [
      "Don't know",
      'Somewhat easy',
      'Very easy',
      'Somewhat difficult',
      'Very difficult',
    ],
  },
  {
    id: '1612712528331145216',
    name: 'comments',
    defaultValue: null,
    description:
      'Write anything here which you want us to know about your mental health to predict your state of illness.',
    textBox: true,
  },
  {
    id: '8818471932123938816',
    name: 'Gender',
    defaultValue: null,
    description: 'Please select your gender',
    options: ['Male', 'Female', 'Others'],
  },
  {
    id: '5864110576568893440',
    name: 'phys_health_interview',
    defaultValue: null,
    description: 'Are you suffering from any physical illness?',
    options: ['Yes', 'No', 'Maybe'],
  },
  {
    id: '8530241555972227072',
    name: 'Country',
    defaultValue: 'United States',
    description: 'Tell us your country of residence',
  },
  {
    id: '5287649824265469952',
    name: 'no_employees',
    defaultValue: '6-25',
    description: 'No of employees in your company',
  },
  {
    id: '8169953585782587392',
    name: 'mental_health_interview',
    defaultValue: 'No',
    description: 'Are you attending any mental health interview?',
  },
  {
    id: '3558267567355199488',
    name: 'Age',
    defaultValue: null,
    description: 'Please enter your age',
    textInput: true,
  },
  {
    id: '7953780803668803584',
    name: 'wellness_program',
    defaultValue: null,
    description:
      'Are you attending any wellness program for your mental illness?',
    options: ['Yes', 'No', 'Maybe'],
  },
  {
    id: '5647937794455109632',
    name: 'state',
    defaultValue: 'NA',
    description: 'Tell us your state of residence',
  },
  {
    id: '1036251776027721728',
    name: 'mental_health_consequence',
    defaultValue: 'NA',
    description: 'Are you facing any severe mental health conditions?',
    options: ['Yes', 'No', 'Maybe', 'NA'],
  },
  {
    id: '5071477042151686144',
    name: 'obs_consequence',
    defaultValue: 'No',
    description: 'Do you any illness symptoms?',
    options: ['Yes', 'No'],
  },
  {
    id: '2765634032937992192',
    name: 'tech_company',
    defaultValue: 'Yes',
    description: 'Do you work in a tech company?',
    options: ['Yes', 'No', 'Maybe', 'NA'],
  },
  {
    id: '675963805838082048',
    name: 'mental_vs_physical',
    defaultValue: "Don't know",
    description: 'Are your mental and physical health balanced together?',
    options: ['Yes', 'No', "Don't know"],
  },
  {
    id: '1252424558141505536',
    name: 'supervisor',
    defaultValue: 'Yes',
    description: 'Do you have a supervisor for your treatment?',
    options: ['Yes', 'No', 'Some of them'],
  },
  {
    id: '99503053534658560',
    name: 'phys_health_consequence',
    defaultValue: 'No',
    description: 'Are you facing any severe physical health conditions?',
    options: ['Yes', 'No', 'Maybe'],
  },
  {
    id: '2189173280634568704',
    name: 'self_employed',
    defaultValue: 'No',
    description: 'Are you self employed?',
    options: ['Yes', 'No', 'NA'],
  },
  {
    id: '7017032081175740416',
    name: 'remote_work',
    defaultValue: 'No',
    description: 'Are you working from remotely?',
    options: ['Yes', 'No'],
  },
  {
    id: '2405346062748352512',
    name: 'Timestamp',
    defaultValue: null,
    description: 'The time at which you are filling this questionnaire',
  },
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
