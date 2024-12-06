import type { APIRoute } from 'astro';
import { prisma } from '../../../lib/prisma';

export const post: APIRoute = async ({ request }) => {
  try {
    const { blogId } = await request.json();
    
    // In a real app, you'd get the userId from the session
    const userId = '1'; // Placeholder for demo
    
    const savedBlog = await prisma.savedBlog.create({
      data: {
        blogId,
        userId,
      },
    });
    
    return new Response(JSON.stringify(savedBlog), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to save blog' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};