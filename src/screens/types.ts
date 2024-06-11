import {PropsWithChildren} from 'react';

export type TodoItemProps = PropsWithChildren<{
  todoData: TodoDataProps;
  onDelete: (id: number) => void;
  onPress: (id: number) => void;
}>;

export type TodoDataProps = PropsWithChildren<{
  id: number;
  text: string;
  completed: boolean;
}>;
