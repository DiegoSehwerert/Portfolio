"use client";

import { useNavigationHistory } from "@/hooks/useNavigationHistory";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NavigationDebug() {
  const {
    previousPath,
    canGoBack,
    goBack,
    getPreviousPath,
    clearHistory,
    getHistory,
  } = useNavigationHistory();

  const history = getHistory();

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Navigation Debug</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium">Previous Path:</p>
          <p className="text-xs text-muted-foreground">
            {previousPath || "None"}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium">Can Go Back:</p>
          <p className="text-xs text-muted-foreground">
            {canGoBack ? "Yes" : "No"}
          </p>
        </div>

        <div className="flex gap-2">
          <Button size="sm" onClick={goBack} disabled={!canGoBack}>
            Go Back
          </Button>
          <Button size="sm" variant="outline" onClick={clearHistory}>
            Clear History
          </Button>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">
            History ({history.length}):
          </p>
          <div className="max-h-32 overflow-y-auto space-y-1">
            {history.map((entry, index) => (
              <div
                key={index}
                className={`text-xs p-2 rounded border ${
                  index === history.length - 1
                    ? "bg-primary/10 border-primary"
                    : "bg-muted"
                }`}
              >
                <div className="font-mono">{entry.path}</div>
                <div className="text-muted-foreground">
                  {entry.locale} •{" "}
                  {new Date(entry.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
