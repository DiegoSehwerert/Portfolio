"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CodeModal from "@/components/ui/code-modal";
import { demoMap } from "@/app/component-library/componentList.client";

interface ComponentItem {
  name: string;
  description: string;
  code: string;
  href: string;
}

interface Props {
  components: ComponentItem[];
}

export default function ComponentView({ components }: Props) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {components.map((comp) => {
        const Demo = demoMap[comp.name as keyof typeof demoMap];
        return (
          <div key={comp.name} className="break-inside-avoid mb-6">
            <Card id={comp.name.toLowerCase()}>
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{comp.name}</h2>
                  <CodeModal
                    title={`Código de ${comp.name}`}
                    code={String(comp.code)}
                    trigger={<Button>Ver código</Button>}
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {comp.description}
                </p>
                <div className="pt-2">{Demo ? <Demo /> : null}</div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
