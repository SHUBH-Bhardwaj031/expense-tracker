import Button from "./Button"
import Banner from "./Banner"

export default function Header(){
    return (
      <div>   
   <nav className="flex h-20 px-5 bg-gradient-to-tl from-[#030637] via-[#3c0753] to-[#720455] justify-between border-1 items-center text-lg text-white">
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
/>

</div>


   </nav>
   <section className="bg-red-500 h-[450px]">
          <Banner />
   </section>

    </div>
  

)

}