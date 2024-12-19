interface SignInButtonProps {
  provider: string;
  icon: string;
  onClick?: () => void;
}

export function SignInButton({ provider, icon, onClick }: SignInButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex hover:bg-accent items-center py-4 justify-center gap-4 w-full max-w-[446px] shadow-sm border border-[#D8DAE5] rounded-lg transition-colors duration-200"
    >
      <img src={icon} alt={`${provider} icon`} width={24} height={24} />
      <span className="font-semibold">Sign In with {provider}</span>
    </button>
  );
}
