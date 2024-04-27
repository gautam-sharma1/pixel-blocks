import { Button } from "@/components/ui/button"
import { Image } from 'lucide-react';

export default function SideMenu(){
        return (
          <>
              <Button className="hover:bg-pink-300" onClick={()=>alert("clickd")}>
                  <Image className="h-4 w-4" />
              </Button>
              <Button className="hover:bg-pink-300">Delete</Button>
              <Button className="hover:bg-pink-300">Add</Button>
              <Button className="hover:bg-pink-300">Delete</Button>
            </>
)

}