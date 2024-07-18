import React from "react";
import { Button } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Input,
} from "@nextui-org/react";
import Logohc from "../../assets/images/logohc";
import { Badge, Avatar, Switch } from "@nextui-org/react";
import ShoppingCart from "../../assets/iconsjsx/ShoppingCart";

export default function NavBarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { id: 0, title: "Inicio", slug: "/" },
    { id: 1, title: "Productos", slug: "/Productos" },
    { id: 2, title: "Servicios", slug: "/Servicios" },
    { id: 3, title: "Blog", slug: "/Blog" },
    { id: 4, title: "Nosotros", slug: "/Nosotros" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logohc className="w-8 h-8 fill-[#ab1e23]" />
          <p className="font-bold text-inherit">Suministros</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem
            key={item.id}
            isActive={item.slug === window.location.pathname}
          >
            <Link color="foreground" href={item.slug}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="pr-8"
            color=""
            variant="bordered"
            startContent={<ShoppingCart />}
          >
            <span className="mr-4">Carrito</span>
            <Badge content="99+" shape="rectangle" color=""></Badge>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem
            key={item.id}
            isActive={item.slug === window.location.pathname}
          >
            <Link color="foreground" href={item.slug} size="lg">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
