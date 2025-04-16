'use client';

import Link from 'next/link';
import { Search, User, ChevronDown, Globe, ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { MobileNav } from "./mobile-nav";
import Logo from '../Logo';
import Image from "next/image";
import { TronButton } from "@/components/ui/tron-button";
import { TronSeparator } from "@/components/ui/tron-separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TronCard } from '@/components/ui/tron-card';

// Types remain the same
interface MenuLink {
  name: string;
  href: string;
  isSubheader?: boolean;
  noArrow?: boolean;
  isExternal?: boolean;
}

interface MenuSection {
  section: string;
  links: MenuLink[];
}

interface MenuItem {
  title: string;
  isDropdown: boolean;
  href: string;
  items: MenuSection[] | MenuLink[];
}

interface MenuItems {
  [key: string]: MenuItem;
}

const navigation = [
  { name: "SHOP", href: "/store" },
  { name: "CATCH & EARN", href: "/loyalty-program" },
  { name: "OUR FAMILY", href: "/family" },
  { name: "DISCOVER", href: "/discover" },
  { name: "HELP", href: "/help" },
];

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // We'll replace this with Vendure cart hook later
  const [items, setItems] = useState<any[]>([]);
  // We'll replace this with Vendure auth
  const [user, setUser] = useState<any>(null);
  
  const menuItems: MenuItems = {
    shop: {
      title: 'Shop',
      isDropdown: true,
      href: '/store',
      items: [
        {
          section: 'GLOVES',
          links: [
            { name: 'ALL GOALKEEPER GLOVES', href: '/store/products?category=gloves&age=adult', isSubheader: false },
          ]
        },
      ],
    },
    discover: {
      title: 'Discover',
      isDropdown: true,
      href: '/discover',
      items: [
        {
          section: 'THE BRAND',
          links: [
            { name: 'Goalkeeper Glove Cuts', href: '/guides/glove-cuts', noArrow: true },
            { name: 'Goalkeeper Glove Latex', href: '/guides/glove-latex', noArrow: true }
          ]
        },
        {
          section: 'PARENT ZONE',
          links: [
            { name: 'YOUR ULTIMATE INTRO TO GLOVES', href: '/parent-guide' },
            { name: 'WHAT IS NORMAL GLOVE WEAR?', href: '/glove-wear' },
            { name: 'SHOP DURABLE GLOVES', href: '/store/durable-gloves' }
          ]
        },
        {
          section: 'JOIN THE SQUAD',
          links: [
            { name: 'INSTAGRAM', href: 'https://www.instagram.com/pure__catch', isExternal: true },
            { name: 'TIKTOK', href: 'https://www.tiktok.com/@purecatch8', isExternal: true },
            { name: 'FACEBOOK', href: 'https://www.facebook.com/profile.php?id=61571779267667', isExternal: true },
          ]
        }
      ]
    },
    help: {
      title: 'Help',
      isDropdown: true,
      href: '/help',
      items: [
        {
          section: 'GET HELP',
          links: [
            { name: 'Support', href: '/support' },
            { name: 'Make a return', href: '/delivery-returns' },
            { name: 'FAQ Hub', href: '/faq' }
          ]
        },
        {
          section: 'GUIDES',
          links: [
            { name: 'Glove Size Guide', href: '/guides/glove-size' },
            { name: 'Glove Cut Guide', href: '/guides/glove-cuts' },
          ]
        },
        {
          section: 'TIPS & TRICKS',
          links: [
            { name: 'Glove Care', href: '/glove-care-guide' },
            { name: 'Parent zone', href: '/parent-zone' },
            { name: 'How to Make Gloves Live Longer', href: '/glove-care-guide/make-gloves-last-longer' }
          ]
        }
      ],
    },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-black/80 backdrop-blur-sm border-b border-cyan-500/20">
      <nav className="relative w-full px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <MobileNav />
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {/* Account Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <User className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {!user ? (
                <>
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/auth/login" className="w-full">
                      Login
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/auth/register" className="w-full">
                      Register
                    </Link>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/account" className="w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/account/orders" className="w-full">
                      Orders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => {}}>
                    Logout
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Cart */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-cyan-500 text-[10px] font-medium text-white flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Shopping Cart ({items.length})</SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-8rem)] py-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full space-y-4">
                    <p className="text-muted-foreground">Your cart is empty</p>
                    <TronButton asChild>
                      <Link href="/store" className="w-full">Continue Shopping</Link>
                    </TronButton>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item: any) => (
                      <TronCard key={item.id} className="p-4">
                        {/* Cart item content */}
                      </TronCard>
                    ))}
                    
                    <TronSeparator />
                    
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>
                          €{items.reduce((total: number, item: any) => {
                            const price = parseFloat(item.product.price);
                            return total + (price * item.quantity);
                          }, 0).toFixed(2)}
                        </span>
                      </div>
                      <TronButton asChild>
                        <Link href="/checkout" className="w-full">Proceed to Checkout</Link>
                      </TronButton>
                    </div>
                  </div>
                )}
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
} 