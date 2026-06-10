import { type SchemaTypeDefinition } from "sanity";
import work from "./documents/work";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [work],
};
