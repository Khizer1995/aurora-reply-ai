
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, LogIn, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { AuroraBackground } from "@/components/AuroraBackground";

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
        description: "Welcome back to Aurora AI Platform"
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
            {/* Visual Header Section */}
            <div className="h-[150px] relative bg-neutral-800 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent"></div>
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2 py-1 bg-neutral-800/80 rounded-full text-xs text-neutral-400 mb-2 inline-block font-medium tracking-wide">
                  SECURE ACCESS
                </span>
                <h2 className="text-2xl font-bold text-white inter-font">Login Portal</h2>
                <div className="h-1 w-12 bg-neutral-400 mt-2 rounded-full"></div>
              </div>
              
              {/* Aurora branding element */}
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-blue-400 to-purple-500"></div>
                </div>
              </div>
            </div>

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

                {/* Action Buttons */}
                <div className="flex space-x-3 mb-6">
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium text-sm py-2.5"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                  <Button
                    type="button"
                    onClick={() => handleSocialLogin("SSO")}
                    className="flex-1 bg-black hover:bg-neutral-800 text-neutral-300 font-medium text-sm py-2.5"
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    SSO
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
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-neutral-300 hover:underline transition-colors">
                    Request Access
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

export default Login;
