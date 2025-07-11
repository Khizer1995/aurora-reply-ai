
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { AuroraBackground } from "@/components/AuroraBackground";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <AuroraBackground />
      
      <div className="relative z-10 w-full max-w-md">
        <Card className="glass-card border-white/10">
          <CardHeader className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500"></div>
            </div>
            <CardTitle className="text-2xl font-bold text-white geist-font">Welcome Back</CardTitle>
            <CardDescription className="text-gray-300 inter-font">
              Sign in to your Aurora AI account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/90 inter-font">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10 glass-button text-white placeholder-gray-400 border-white/20"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white/90 inter-font">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="pl-10 pr-10 glass-button text-white placeholder-gray-400 border-white/20"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-400 text-sm">{errors.password}</p>
                )}
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-blue-400 hover:text-blue-300 text-sm transition-colors inter-font"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full primary-button text-white font-medium py-3 inter-font"
              >
                Log In
              </Button>
            </form>

            {/* Divider */}
            <div className="divider"></div>

            {/* Social Login */}
            <div className="space-y-3">
              <Button
                type="button"
                onClick={() => handleSocialLogin("Google")}
                className="w-full glass-button text-white border-white/20 hover:bg-white/10"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
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
                className="w-full glass-button text-white border-white/20 hover:bg-white/10"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7.462 0H23.85c.389 0 .708.319.708.708v22.584c0 .389-.319.708-.708.708H7.462a.708.708 0 0 1-.708-.708V.708c0-.389.319-.708.708-.708z"/>
                  <path fill="#0078D4" d="M23.85 0H7.462c-.389 0-.708.319-.708.708v22.584c0 .389.319.708.708.708H23.85c.389 0 .708-.319.708-.708V.708A.708.708 0 0 0 23.85 0z"/>
                  <path fill="white" d="M18.967 8.47h4.175v1.556h-4.175V8.47zm0 2.334h4.175v1.556h-4.175v-1.556zm0 2.334h4.175v1.556h-4.175v-1.556z"/>
                </svg>
                Continue with Outlook
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-400 text-sm inter-font">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Create one now
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
