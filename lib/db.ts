import { prisma } from './prisma';

export interface Todo {
  id: number;
  description: string;
}

export async function getAllTodos() {
  const data = await prisma.todo.findMany();
  return data;
}

export async function createTodo(description: string) {
  const result = await prisma.todo.create({
    data: {
      description,
    },
  });

  return result;
}

export async function deleteTodo(id: number) {
  const result = await prisma.todo.delete({
    where: {
      id,
    },
  });

  return result;
}
