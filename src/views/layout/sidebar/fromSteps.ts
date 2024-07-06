import FormEnum from '../../data-collection/FormEnum';

export const steps: Step[] = [
  {
    id: FormEnum.EVENT,
    title: 'Event',
    description: 'About the event',
  },
  {
    id: FormEnum.VENUE,
    title: 'Venue',
    description: 'About the venue',
  },
  {
    id: FormEnum.FOOD,
    title: 'Food',
    description: '',
  },
  {
    id: FormEnum.ACCOMODATION,
    title: 'Accomodation',
    description: '',
  },
  {
    id: FormEnum.TRAVEL,
    title: 'Travel',
    description:
      'Please fill in the percentage of attendees and organisers travelling to the event from different locations (distances). If you have specific data on travel and/or flights, please indicate this in the "Transport organisers", "Transport attendees" and "Transport sub-contractors" tabs',
  },
  {
    id: FormEnum.TRANSPORT,
    title: 'Transport',
    description: '',
  },
  {
    id: FormEnum.MATERIAL,
    title: 'Material',
    description: '',
  },
  {
    id: FormEnum.WASTE,
    title: 'Waste',
    description: '',
  },
  {
    id: FormEnum.MARKETING,
    title: 'Marketing',
    description:
      'If you have information about event marketing expenditures, please fill in the amount below. If exact amount is unavailable, please provide your best estimate by providing an expense range.',
  },
  {
    id: FormEnum.PREPARATION,
    title: 'Prepration',
    description: '',
  },
  {
    id: FormEnum.WATER,
    title: 'Water',
    description: '',
  },
  {
    id: FormEnum.STREAMING,
    title: 'Streaming',
    description: '',
  },
];

export const getCurrentStep = (pathname: string) => {
  const pathString = pathname.toUpperCase().split('/')[2];
  if (!pathString) {
    return steps[0];
  }
  const currentStep: any = steps.find(
    (step) => step.id === FormEnum[pathString as any]
  );
  return currentStep;
};

export const getPrevStep = (pathname: string) => {
  const currentStep: any = getCurrentStep(pathname);
  const index = steps.indexOf(currentStep);
  if (index > 0) {
    return steps[index - 1];
  }
  return steps[index];
};

export const getNextStep = (pathname: string) => {
  const currentStep: any = getCurrentStep(pathname);
  const index = steps.indexOf(currentStep);
  if (index < steps.length - 1) {
    return steps[index + 1];
  }
  return steps[index];
};
