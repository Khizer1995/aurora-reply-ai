
import { useState } from "react";
import { Eye, EyeOff, Mail, User, Lock, X, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { AuroraBackground } from "@/components/AuroraBackground";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { SocialLogin } from "@/components/auth/SocialLogin";
import { AuthFooter } from "@/components/auth/AuthFooter";
import { PasswordStrengthMeter } from "@/components/auth/PasswordStrengthMeter";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const passwordStrength = {
    hasLength: formData.password.length >= 8,
    hasUppercase: /[A-Z]/.test(formData.password),
    hasLowercase: /[a-z]/.test(formData.password),
    hasNumber: /\d/.test(formData.password),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
  };

  const getPasswordStrengthScore = () => {
    return Object.values(passwordStrength).filter(Boolean).length;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (getPasswordStrengthScore() < 3) {
      newErrors.password = "Password is too weak";
    }

    if (!acceptTerms) {
      newErrors.terms = "Please accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Account created successfully!",
        description: "Welcome to AutoReply Platform"
      });
    }
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider} signup`,
      description: `Redirecting to ${provider}...`
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-4">
      <AuroraBackground />
      
      <div className="relative z-10 w-full max-w-md">
        <div className="card-container relative">
          <div className="absolute inset-[-1px] bg-gradient-to-br from-neutral-500 via-transparent to-neutral-600 rounded-xl z-[-1]"></div>
          
          <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg backdrop-blur-sm">
            <AuthHeader badge="NEW ACCOUNT" title="Join AutoReply" />

            {/* Form Section */}
            <div className="p-6 bg-neutral-900">
              <div className="mb-6">
                <span className="px-2 py-1 bg-neutral-800 rounded-full text-xs text-neutral-400 mb-2 inline-block font-medium tracking-wide">
                  REGISTRATION
                </span>
                <h3 className="text-xl font-semibold text-neutral-200 mb-4 inter-font">Create Account</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                  {/* Full Name */}
                  <div>
                    <Label htmlFor="fullName" className="text-neutral-300 text-xs font-medium mb-1 block tracking-wide">
                      FULL NAME
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                      <Input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="pl-10 bg-neutral-800 border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:ring-neutral-600 focus:border-neutral-600 text-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <X className="h-3 w-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-neutral-300 text-xs font-medium mb-1 block tracking-wide">
                      EMAIL
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10 bg-neutral-800 border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:ring-neutral-600 focus:border-neutral-600 text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <X className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
                    <Label htmlFor="password" className="text-neutral-300 text-xs font-medium mb-1 block tracking-wide">
                      PASSWORD
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pl-10 pr-10 bg-neutral-800 border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:ring-neutral-600 focus:border-neutral-600 text-sm"
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-300"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <X className="h-3 w-3" />
                        {errors.password}
                      </p>
                    )}

                    <PasswordStrengthMeter password={formData.password} />
                  </div>

                  {/* Terms and Conditions */}
                  <div>
                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="w-4 h-4 bg-neutral-800 border-neutral-700 rounded mt-0.5"
                      />
                      <label htmlFor="terms" className="text-neutral-400 text-xs leading-relaxed">
                        I agree to the{" "}
                        <a href="#" className="text-neutral-300 hover:underline">Terms of Service</a>
                        {" "}and{" "}
                        <a href="#" className="text-neutral-300 hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                    {errors.terms && (
                      <p className="text-red-400 text-xs mt-1">{errors.terms}</p>
                    )}
                  </div>
                </form>

                {/* Action Button - Full Width */}
                <div className="mb-6">
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium text-sm py-2.5"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Create Account
                  </Button>
                </div>

                <SocialLogin onSocialLogin={handleSocialLogin} />
              </div>

              <AuthFooter 
                text="Already have an account?"
                linkText="Sign in instead"
                linkTo="/login"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
