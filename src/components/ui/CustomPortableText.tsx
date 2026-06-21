import { PortableText, PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
    block: {
        // Formats standard paragraph blocks to match your site's typography layout
        normal: ({ children }) => (
            <p className="text-fg-70 text-base leading-relaxed mb-4 last:mb-0">
                {children}
            </p>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-medium text-foreground tracking-tight mt-8 mb-4">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-xl font-medium text-foreground tracking-tight mt-6 mb-3">
                {children}
            </h4>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc pl-6 space-y-2 text-fg-70 mb-4">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal pl-6 space-y-2 text-fg-70 mb-4">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
        number: ({ children }) => <li className="leading-relaxed">{children}</li>,
    },
    marks: {
        strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
        ),
        em: ({ children }) => <em className="italic text-fg-80">{children}</em>,
        code: ({ children }) => (
            <code className="px-1.5 py-0.5 font-mono font-medium text-sm bg-primary/5 text-primary rounded-sm border border-primary/20">
                {children}
            </code>
        ),
    },
};

export function CustomPortableText({ value }: { value: any[] }) {
    if (!value) return null;
    return <PortableText value={value} components={components} />;
}