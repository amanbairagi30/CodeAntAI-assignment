import { azure, bitbucket, github, gitlab, key } from "@/images";
import Logo from "./ui/svgs/logo";
import { Tab, TabContent, Tabs, TabsList } from "./ui/tabs";
import { SignInButton } from "./ui/sign-in-button";
import { useNavigate } from "react-router";

export default function SignIn() {
  const navigate = useNavigate();
  const providers = [
    { name: "GitHub", icon: github },
    { name: "BitBucket", icon: bitbucket },
    { name: "Azure Devops", icon: azure },
    { name: "Gitlab", icon: gitlab },
  ];
  const selfhostedProviders = [
    { name: "Self Hosted GitLab", icon: gitlab },
    { name: "Sign in with SSO", icon: key },
  ];
  const handleSignIn = () => {
    navigate("/dashboard/repositories");
  };
  return (
    <>
      <section className="shadow border-2 border-accent bg-background rounded-lg flex items-center w-full md:w-[672px] pt-6 flex-col min-h-[602px] max-h-fit">
        <div className="px-4 flex items-center flex-col">
          <div className="flex items-center gap-4 text-[30px]">
            <Logo className="w-10" />
            <span>CodeAnt AI</span>
          </div>
          <div className="mt-10 text-center text-2xl md:text-3xl font-[600]">
            Welcome to CodeAnt AI
          </div>
        </div>

        <div className="w-full">
          <Tabs defaultTab="saas">
            <div className="p-4">
              <TabsList>
                <Tab id="saas">SAAS</Tab>
                <Tab id="self-hosted">Self Hosted</Tab>
              </TabsList>
            </div>
            <TabContent id="saas">
              <div className="p-6 w-full h-full flex-1 flex gap-4 flex-col border-t items-center">
                {providers.map((provider) => (
                  <SignInButton
                    key={provider.name}
                    provider={provider.name}
                    icon={provider.icon}
                    onClick={() => handleSignIn()}
                  />
                ))}
              </div>
            </TabContent>
            <TabContent id="self-hosted">
              <div className="p-6 w-full h-full flex-1 flex gap-4 flex-col border-t items-center">
                {selfhostedProviders.map(({ icon, name }) => (
                  <button
                    onClick={() => handleSignIn()}
                    className="flex hover:bg-accent items-center py-4 justify-center gap-4 w-full max-w-[446px] shadow-sm border border-[#D8DAE5] rounded-lg transition-colors duration-200"
                  >
                    <img src={icon} alt={`${icon} `} width={24} height={24} />
                    <span className="font-semibold">{name}</span>
                  </button>
                ))}
              </div>
            </TabContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
