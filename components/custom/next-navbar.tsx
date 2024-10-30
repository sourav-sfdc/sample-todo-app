import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link, Button } from "@nextui-org/react";
import { CompanyLogo } from "../logo/companyLogo";
import { signout } from "@/actions/auth/actions";

export default function NextNavBar() {
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
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Hi Sourav</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button 
                        as={Link} 
                        color="primary" 
                        onClick={signout} 
                        variant="flat"
                    >
                        Sign Out
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
