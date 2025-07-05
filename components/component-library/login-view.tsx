"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function LoginView() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-muted rounded-2xl border border-border p-8 shadow-lg">
        <div className="text-center space-y-1">
          <h1 className="text-xl font-semibold text-foreground">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>

        <form className="mt-6 space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">
            Sign In with Email
          </Button>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex-1 border-t border-border" />
            <span>OR CONTINUE WITH</span>
            <div className="flex-1 border-t border-border" />
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaGithub size={16} />
            GitHub
          </Button>
        </form>

        <p className="text-xs text-center text-muted-foreground mt-6">
          By clicking continue, you agree to our{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
