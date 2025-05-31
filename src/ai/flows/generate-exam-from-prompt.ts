// src/ai/flows/generate-exam-from-prompt.ts
'use server';
/**
 * @fileOverview Exam generation flow.
 *
 * - generateExamFromPrompt - A function that handles the exam generation process.
 * - GenerateExamFromPromptInput - The input type for the generateExamFromPrompt function.
 * - GenerateExamFromPromptOutput - The return type for the generateExamFromPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateExamFromPromptInputSchema = z.object({
  prompt: z.string().describe('The topic or prompt for generating the exam.'),
});
export type GenerateExamFromPromptInput = z.infer<typeof GenerateExamFromPromptInputSchema>;

const GenerateExamFromPromptOutputSchema = z.object({
  examContent: z.string().describe('The generated exam content.'),
  seoMetadata: z.string().optional().describe('SEO metadata for the exam content.'),
});
export type GenerateExamFromPromptOutput = z.infer<typeof GenerateExamFromPromptOutputSchema>;

export async function generateExamFromPrompt(input: GenerateExamFromPromptInput): Promise<GenerateExamFromPromptOutput> {
  return generateExamFromPromptFlow(input);
}

const generateExamFromPromptPrompt = ai.definePrompt({
  name: 'generateExamFromPromptPrompt',
  input: {schema: GenerateExamFromPromptInputSchema},
  output: {schema: GenerateExamFromPromptOutputSchema},
  prompt: `You are an AI exam generator. Generate a sample exam based on the following topic or prompt: {{{prompt}}}. Also generate SEO metadata for the exam.

Exam Content:`,
});

const generateExamFromPromptFlow = ai.defineFlow(
  {
    name: 'generateExamFromPromptFlow',
    inputSchema: GenerateExamFromPromptInputSchema,
    outputSchema: GenerateExamFromPromptOutputSchema,
  },
  async input => {
    const {output} = await generateExamFromPromptPrompt(input);
    return output!;
  }
);
