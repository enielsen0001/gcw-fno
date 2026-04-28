import { type SchemaTypeDefinition } from 'sanity'
import caseStudy from './documents/caseStudy'
import { csMetric } from './objects/cs-metric'
import { csDecision } from './objects/cs-decision'
import { csPhase } from './objects/cs-phase'
import service from './documents/service'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseStudy, service, csMetric, csDecision, csPhase],
}