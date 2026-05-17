import { type SchemaTypeDefinition } from "sanity";
import { csMetric } from "./objects/cs-metric";
import { csDecision } from "./objects/cs-decision";
import { csPhase } from "./objects/cs-phase";
import work from "./documents/work";
import capability from "./documents/capability";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [work, capability, csMetric, csDecision, csPhase],
};
