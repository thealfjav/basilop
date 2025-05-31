// src/ai/flows/generate-exam-from-prompt.ts
'use server';
/**
 * @fileOverview Flujo de generación de evaluaciones.
 *
 * - generateExamFromPrompt - Una función que maneja el proceso de generación de evaluaciones.
 * - GenerateExamFromPromptInput - El tipo de entrada para la función generateExamFromPrompt.
 * - GenerateExamFromPromptOutput - El tipo de retorno para la función generateExamFromPrompt.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateExamFromPromptInputSchema = z.object({
    prompt: z.string().describe('El tema, los apuntes o la indicación para generar la evaluación.'),
});
export type GenerateExamFromPromptInput = z.infer<typeof GenerateExamFromPromptInputSchema>;

const GenerateExamFromPromptOutputSchema = z.object({
    examContent: z.string().describe('El contenido de la evaluación generada.'),
});
export type GenerateExamFromPromptOutput = z.infer<typeof GenerateExamFromPromptOutputSchema>;

export async function generateExamFromPrompt(input: GenerateExamFromPromptInput): Promise<GenerateExamFromPromptOutput> {
    return generateExamFromPromptFlow(input);
}

const generateExamFromPromptPrompt = ai.definePrompt({
    name: 'generateExamFromPromptPrompt',
    input: {schema: GenerateExamFromPromptInputSchema},
    output: {schema: GenerateExamFromPromptOutputSchema},
    prompt: `Eres un generador de exámenes con IA. Genera un borrador de examen basado en el siguiente tema, apuntes o indicación: {{{prompt}}}.

Contenido del Examen:`,
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
