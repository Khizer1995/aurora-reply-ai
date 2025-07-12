
import { Check, X } from "lucide-react";

interface PasswordStrengthMeterProps {
  password: string;
}

export const PasswordStrengthMeter = ({ password }: PasswordStrengthMeterProps) => {
  const passwordStrength = {
    hasLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password)
  };

  const getPasswordStrengthScore = () => {
    return Object.values(passwordStrength).filter(Boolean).length;
  };

  const strengthColors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", "bg-emerald-500"];
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];

  if (!password) return null;

  return (
    <div className="mt-2 space-y-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              level <= getPasswordStrengthScore()
                ? strengthColors[getPasswordStrengthScore() - 1]
                : "bg-neutral-700"
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-neutral-400">
        Strength: {strengthLabels[getPasswordStrengthScore() - 1] || "Very Weak"}
      </p>
      <div className="space-y-1 text-xs">
        {Object.entries(passwordStrength).map(([key, met]) => (
          <div key={key} className={`flex items-center gap-2 ${met ? "text-green-400" : "text-neutral-500"}`}>
            {met ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
            <span>
              {key === "hasLength" && "At least 8 characters"}
              {key === "hasUppercase" && "Uppercase letter"}
              {key === "hasLowercase" && "Lowercase letter"}
              {key === "hasNumber" && "Number"}
              {key === "hasSpecial" && "Special character"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
