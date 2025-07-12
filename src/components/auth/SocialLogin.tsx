
import { Button } from "@/components/ui/button";

interface SocialLoginProps {
  onSocialLogin: (provider: string) => void;
}

export const SocialLogin = ({ onSocialLogin }: SocialLoginProps) => {
  return (
    <div className="space-y-3 mb-6">
      <Button
        type="button"
        onClick={() => onSocialLogin("Google")}
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
        onClick={() => onSocialLogin("Outlook")}
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
  );
};
