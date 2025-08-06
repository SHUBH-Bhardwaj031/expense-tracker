import Button from "./Button"
import Banner from "./Banner"

export default function Header(){
    return (
      <div>   
   <nav className="flex h-20 px-5 bg-black justify-between items-center text-lg text-white">
 <div className="logo">   
<span>Expense Tracker</span>
</div>
<div className="flex  gap-7 items-center ">
<ul className="flex gap-7 hover:cursor-pointer">
<li className="hover:text-blue-500">Add Expenses</li>
<li className="hover:text-blue-500">View Expenses</li>
</ul>
<Button  
hoverColor={"hover:bg-red-800"}
 backgroundColor={"bg-blue-700"}
 text={"Login"}
 clickfun={()=>{
  console.log("Login clicked");
 
 }}
/>

</div>


   </nav>
   <section className="bg-gradient-to-r from-slate-800 to-teal-800 h-[450px]">
          <Banner />
   </section>

    </div>
  

)

}