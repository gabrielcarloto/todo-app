// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { createTodo, deleteTodo } from '../../lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const data = JSON.parse(req.body);
    await createTodo(data).then((r) => res.status(200).json(r));
  } else if (req.method === 'DELETE') {
    const data = JSON.parse(req.body);
    await deleteTodo(data).then((r) => res.json(r));
  }
}
