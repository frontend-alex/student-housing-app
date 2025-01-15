import Navbar from "@/components/Navbar"
import Gridbackround from "@/components/ui/backgrounds/grid-backround"
import { useTheme } from "@/contexts/ThemeContext"

const Mainroute = () => {
  const { theme} = useTheme();
  return (
    <div>
        <Navbar/>
        <Gridbackround className={`${theme === 'light'  ? "opacity-30" : "opacity-5"} absolute top-0 h-[50vh]  z-[-1]`}/>
    </div>
  )
}

export default Mainroute