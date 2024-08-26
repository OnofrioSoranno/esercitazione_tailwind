export default function Navigation() {
 return <>
 <nav className="bg-white flex flex-col items-center">
    <div>
        <img src="/media/logo.png" alt="" className="h-20"/>
    </div>
    <ul className="flex justify-between w-4/6 my-5">
        <li>Primo link</li>
        <li>Secondo link</li>
        <li>Terzo link</li>
        <li>Quarto link</li>
    </ul>
 </nav>
 </>
}