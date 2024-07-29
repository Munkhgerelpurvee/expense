import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaHouse } from "react-icons/fa6";
import { RiArrowDownSFill } from "react-icons/ri";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Textarea } from "@/components/ui/textarea";




export const AddCategory = () => {
    return (
<>
<Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" >
            <div className="flex items-center gap-4">
        {/* <Image
      src={"/images/Vector(1).jpg"}
      alt="Logo"
      className="dark:invert"
      width={25}
      height={20}
      
    /> */}

<AiFillPlusCircle className="text-blue-700" />


            Add Category

            </div>

    
            </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>
            Make changes 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">

          {/*  */}

        <div className="flex flex-1 border border-solid border-[gray]">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <div className="flex flex-col">
                            {/* <Label
                              className="text-[gray] font-light"
                              htmlFor="r2"
                            >
                              Payee
                            </Label> */}
                            <NavigationMenuTrigger className="w-full bg-[#E5E7EB] mt-4">
                              <FaHouse />
                            </NavigationMenuTrigger>
                          </div> 
                        
                          <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                              <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                  <a
                                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                                    href="/"
                                  >
                                
                                    <div className="mt-4 mb-2 text-lg font-medium">
                                      shadcn/ui
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                      Beautifully designed components that you
                                      can copy and paste into your apps.
                                      Accessible. Customizable. Open Source.
                                    </p>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>
          {/*  */}
          <div className="relative flex items-center gap-4">
           
            <Input id="name" value=""  placeholder="Name" className="relative col-span-3" />
            <RiArrowDownSFill className="absolute"/>
            
          </div>
          {/* <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div> */}
        </div>
        <DialogFooter>
          <Button  className = "bg-[#16A34A]"type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>


</>

    )
}