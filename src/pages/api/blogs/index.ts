import type { APIRoute } from 'astro';
import { prisma } from '../../../lib/prisma';

export const post: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const categoryId = formData.get('categoryId') as string;
    const imageUrl = formData.get('imageUrl') as string;

    // In a real app, you'd get the userId from the session
    const authorId = '1'; // Placeholder for demo

    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        categoryId,
        imageUrl,
        authorId,
      },
    });

    return new Response(null, {
      status: 303,
      headers: {
        Location: `/blog/${blog.id}`,
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create blog' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};