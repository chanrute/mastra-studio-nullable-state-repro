import { Mastra } from '@mastra/core/mastra';
import { createStep, createWorkflow } from '@mastra/core/workflows';
import { z } from 'zod';

const empty = z.object({});
const workflow = createWorkflow({
  id: 'nullable-state',
  inputSchema: empty,
  outputSchema: empty,
  stateSchema: z.object({
    section: z.object({ status: z.string() }).nullable().default(null),
  }),
})
  .then(createStep({
    id: 'noop',
    inputSchema: empty,
    outputSchema: empty,
    execute: async () => ({}),
  }))
  .commit();

export const mastra = new Mastra({
  server: { port: 4129 },
  workflows: { 'nullable-state': workflow },
});
