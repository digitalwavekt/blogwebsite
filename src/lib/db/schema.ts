import { z } from "zod";

export const BlogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  categoryId: z.number(),
  imageUrl: z.string().url().optional(),
});

export const CommentSchema = z.object({
  content: z.string().min(1, "Comment is required"),
  blogId: z.number(),
});

export type BlogInput = z.infer<typeof BlogSchema>;
export type CommentInput = z.infer<typeof CommentSchema>;