import { Logo } from "./Logo";

export function Header(){
  return (
    <header className="w-full py-5 flex items-center sm:justify-start pl-5 lg:pl-0 lg:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  )
}