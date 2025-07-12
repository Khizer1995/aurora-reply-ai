
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { AuroraBackground } from "@/components/AuroraBackground";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { SocialLogin } from "@/components/auth/SocialLogin";
import { AuthFooter } from "@/components/auth/AuthFooter";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Login successful!",
        description: "Welcome back to AutoReply Platform"
      });
    }
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider} login`,
      description: `Redirecting to ${provider}...`
    });
  };

  const handleForgotPassword = () => {
    toast({
      title: "Password reset",
      description: "Check your email for reset instructions"
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-4">
      <AuroraBackground />
      
      <div className="relative z-10 w-full max-w-md">
        <div className="card-container relative">
          <div className="absolute inset-[-1px] bg-gradient-to-br from-neutral-500 via-transparent to-neutral-600 rounded-xl z-[-1]"></div>
          
          <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg backdrop-blur-sm">
            <AuthHeader badge="SECURE ACCESS" title="Login Portal" />

            {/* Form Section */}
            <div className="p-6 bg-neutral-900">
              <div className="mb-6">
                <span className="px-2 py-1 bg-neutral-800 rounded-full text-xs text-neutral-400 mb-2 inline-block font-medium tracking-wide">
                  AUTHENTICATION
                </span>
                <h3 className="text-xl font-semibold text-neutral-200 mb-4 inter-font">Account Login</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
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
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <Label htmlFor="password" className="text-neutral-300 text-xs font-medium tracking-wide">
                        PASSWORD
                      </Label>
                      <button
                        type="button"
                        onClick={handleForgotPassword}
                        className="text-neutral-400 text-xs hover:text-neutral-300 transition-colors"
                      >
                        Forgot?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pl-10 pr-10 bg-neutral-800 border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:ring-neutral-600 focus:border-neutral-600 text-sm"
                        placeholder="••••••••"
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
                      <p className="text-red-400 text-xs mt-1">{errors.password}</p>
                    )}
                  </div>

                  {/* Remember Device */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberDevice}
                      onChange={(e) => setRememberDevice(e.target.checked)}
                      className="w-4 h-4 bg-neutral-800 border-neutral-700 rounded mr-2"
                    />
                    <label htmlFor="remember" className="text-neutral-400 text-xs">
                      Remember this device
                    </label>
                  </div>
                </form>

                {/* Action Button - Full Width */}
                <div className="mb-6">
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium text-sm py-2.5"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </div>

                <SocialLogin onSocialLogin={handleSocialLogin} />
              </div>

              <AuthFooter 
                text="Don't have an account?"
                linkText="Request Access"
                linkTo="/signup"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
