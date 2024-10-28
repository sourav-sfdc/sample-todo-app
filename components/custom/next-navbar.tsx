import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem } from "@nextui-org/navbar";
// NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem
import { Link, Button } from "@nextui-org/react"
import { CompanyLogo } from "../logo/companyLogo";

export default function NextNavBar () {
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
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      );
}