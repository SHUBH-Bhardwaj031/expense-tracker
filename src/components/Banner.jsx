import Button from "./Button";
export default function Banner(){
return (
<div className="flex flex-col gap-3 justify-center items-center text-white h-full text-center">
        <h1 className="text-5xl font-bold">Welcome to Your Expense Tracker</h1>
      <p>A Smart Expense Tracker Tool
    Manage your finances with ease and
      Track your expenses easily</p>
        <Button 
        text="Get Started"
        backgroundColor="bg-black"
        hoverColor="hover:bg-slate-700"
        clickfun={() => {
          console.log("Get Started clicked");
        }}
      />

            </div>

  );
}

