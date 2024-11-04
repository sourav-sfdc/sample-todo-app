import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link, Button } from "@nextui-org/react";
import { CompanyLogo } from "../logo/companyLogo";
import { redirectSignIn, signout } from "@/actions/auth/actions";
import { createClient } from "@/utils/supabase/server";

export default async function NextNavBar() {
    const supabase = await createClient();
    const {data : {user}} = await supabase.auth.getUser();
    return (
        <Navbar>
            <NavbarBrand>
                <CompanyLogo />
                <p className="font-bold text-inherit">Company Name</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            
            <NavbarContent justify="end">
                {user ? 
                    (<>
                        <NavbarItem className="hidden lg:flex">
                            <Link href="#">Hello, {user?.email}</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button 
                                as={Link} 
                                color="primary" 
                                onClick={signout} 
                                variant="bordered"
                            >
                                Sign Out
                            </Button>
                        </NavbarItem>
                    </>) : 
                    (
                        <>
                            <NavbarItem>
                                <Button 
                                    as={Link} 
                                    color="primary" 
                                    onClick={redirectSignIn} 
                                    variant="bordered"
                                >
                                    Sign In
                                </Button>
                            </NavbarItem>
                        </>
                    )
                }
                
            </NavbarContent>
        </Navbar>
    );
}
