export type CounterType = {
  id: number;
  count: number;
  title: string;
};

export type DeleteEvent = CustomEvent<{ id: number }>;