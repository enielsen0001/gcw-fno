import { defineType, defineField } from "sanity";

export const csMetric = defineType({
    name: "cs-metric",
    type: "object",
    title: "Case Study Metric",
    fields: [
        defineField({
            name: "metric",
            type: "string",
            title: "Metric (e.g. 67% faster)",
        }),
        defineField({
            name: "detail",
            type: "string",
            title: "Detail (e.g. From 2-week cycles...)",
        }),
    ],
});
