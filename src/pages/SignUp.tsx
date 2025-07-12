
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, User, Lock, Check, X, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { AuroraBackground } from "@/components/AuroraBackground";
import VantaNetBackground from "@/components/VantaNetBackground";

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

  const strengthColors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", "bg-emerald-500"];
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-4">
      <AuroraBackground />
      
      <div className="relative z-10 w-full max-w-md">
        <div className="card-container relative">
          <div className="absolute inset-[-1px] bg-gradient-to-br from-neutral-500 via-transparent to-neutral-600 rounded-xl z-[-1]"></div>
          
          <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg backdrop-blur-sm">
            {/* Visual Header Section with Vanta Animation */}
            <div className="h-[150px] relative bg-neutral-800 overflow-hidden">
              <VantaNetBackground />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2 py-1 bg-neutral-800/80 rounded-full text-xs text-neutral-400 mb-2 inline-block font-medium tracking-wide">
                  NEW ACCOUNT
                </span>
                <h2 className="text-2xl font-bold text-white inter-font">Join AutoReply</h2>
                <div className="h-1 w-12 bg-neutral-400 mt-2 rounded-full"></div>
              </div>
              
              {/* Aurora branding element */}
              <div className="absolute top-4 right-4 z-10">
                <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-blue-400 to-purple-500"></div>
                </div>
              </div>
            </div>

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

                    {/* Password Strength Meter */}
                    {formData.password && (
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
                    )}
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

                {/* Social Login */}
                <div className="space-y-3 mb-6">
                  <Button
                    type="button"
                    onClick={() => handleSocialLogin("Google")}
                    className="w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border-neutral-700 text-sm py-2.5"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </Button>

                  <Button
                    type="button"
                    onClick={() => handleSocialLogin("Outlook")}
                    className="w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border-neutral-700 text-sm py-2.5"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M7.462 0H23.85c.389 0 .708.319.708.708v22.584c0 .389-.319.708-.708.708H7.462a.708.708 0 0 1-.708-.708V.708c0-.389.319-.708.708-.708z"/>
                      <path fill="#0078D4" d="M23.85 0H7.462c-.389 0-.708.319-.708.708v22.584c0 .389.319.708.708.708H23.85c.389 0 .708-.319.708-.708V.708A.708.708 0 0 0 23.85 0z"/>
                      <path fill="white" d="M18.967 8.47h4.175v1.556h-4.175V8.47zm0 2.334h4.175v1.556h-4.175v-1.556zm0 2.334h4.175v1.556h-4.175v-1.556z"/>
                    </svg>
                    Continue with Outlook
                  </Button>
                </div>
              </div>

              {/* Footer Section */}
              <div className="pt-4 text-center border-t border-neutral-800">
                <div className="h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent mb-4"></div>
                <p className="text-neutral-400 text-xs mb-4">
                  Already have an account?{" "}
                  <Link to="/login" className="text-neutral-300 hover:underline transition-colors">
                    Sign in instead
                  </Link>
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-neutral-400 text-xs">System Status: Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
