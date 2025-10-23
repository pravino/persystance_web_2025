import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

export default function FormValidationDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid = password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);

  const passwordChecks = [
    { label: "At least 8 characters", valid: password.length >= 8 },
    { label: "Contains uppercase letter", valid: /[A-Z]/.test(password) },
    { label: "Contains number", valid: /[0-9]/.test(password) },
  ];

  return (
    <Card className="p-6 hover-elevate">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Smart Form Validation</h3>
          <p className="text-sm text-muted-foreground">
            Real-time validation showcasing advanced UX and user input handling
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Email Address</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched({ ...touched, email: true })}
                placeholder="user@example.com"
                className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                data-testid="input-email"
              />
              {touched.email && email && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {emailValid ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-destructive" />
                  )}
                </div>
              )}
            </div>
            {touched.email && email && !emailValid && (
              <p className="text-xs text-destructive mt-1" data-testid="text-email-error">
                Please enter a valid email address
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched({ ...touched, password: true })}
              placeholder="Enter strong password"
              className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              data-testid="input-password"
            />
            {touched.password && password && (
              <div className="mt-2 space-y-1">
                {passwordChecks.map((check, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs">
                    {check.valid ? (
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                    ) : (
                      <XCircle className="w-3 h-3 text-muted-foreground" />
                    )}
                    <span className={check.valid ? "text-green-500" : "text-muted-foreground"}>
                      {check.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button
            disabled={!emailValid || !passwordValid}
            className="w-full"
            data-testid="button-submit-form"
          >
            {emailValid && passwordValid ? "Form Valid ✓" : "Complete Form"}
          </Button>
        </div>

        <div className="pt-2 text-xs text-muted-foreground border-t">
          <p>Demonstrates real-time validation, user feedback, and polished UX design</p>
        </div>
      </div>
    </Card>
  );
}
