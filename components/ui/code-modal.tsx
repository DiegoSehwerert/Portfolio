"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function CodeModal({
  title,
  code,
  trigger,
}: {
  title: string;
  code: string;
  trigger: React.ReactNode;
}) {
  return (
    <Dialog>
      <div className="position-fixed bottom-4 right-4 z-50">
        <DialogTrigger asChild>{trigger}</DialogTrigger>
      </div>
      <DialogContent className="max-w-full sm:max-w-3xl w-full p-2 sm:p-6 overflow-hidden">
        <DialogHeader className="flex flex-row items-center justify-between mb-2">
          <DialogTitle className="text-base sm:text-lg">{title}</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="ml-2">
              <X className="w-5 h-5 sm:w-4 sm:h-4" />
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="w-full">
          <pre className="text-xs sm:text-sm overflow-auto max-h-[60vh] sm:max-h-[70vh] bg-muted p-2 sm:p-4 rounded whitespace-pre-wrap break-all">
            <code>{code}</code>
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  );
}
