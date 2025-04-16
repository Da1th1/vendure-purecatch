import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "~/components/ui/sheet";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Logo from "~/components/Logo";
import { cn } from "~/lib/utils";

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

interface MainNavProps {
  onCartIconClick: () => void;
  cartQuantity: number;
}

const navigation = [
  { name: "SHOP", href: "/store" },
  { name: "CATCH & EARN", href: "/loyalty-program" },
  { name: "OUR FAMILY", href: "/family" },
  { name: "DISCOVER", href: "/discover" },
  { name: "HELP", href: "/help" },
];

export function MainNav({ onCartIconClick, cartQuantity }: MainNavProps) {
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
    <div className="flex h-20 items-center justify-between px-4 md:px-6 bg-black/95 border-b border-cyan-500/20">
      {/* Mobile Menu Button */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            className="md:hidden hover:bg-cyan-500/10 transition-colors"
          >
            <Menu className="h-6 w-6 text-cyan-400" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="left" 
          className="w-[300px] sm:w-[400px] bg-black/95 border-r border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
        >
          <div className="flex flex-col space-y-4 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-white hover:text-cyan-400 transition-colors relative group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative">
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-0.5 h-[1px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Logo */}
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center space-x-2">
          <Logo />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="text-sm font-medium text-white hover:text-cyan-400 transition-colors relative group"
          >
            <span className="relative">
              {item.name}
              <span className="absolute inset-x-0 -bottom-0.5 h-[1px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform" />
            </span>
          </Link>
        ))}
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <Button 
          variant="ghost" 
          size="icon"
          className="hover:bg-cyan-500/10 transition-colors"
        >
          <Search className="h-6 w-6 text-white hover:text-cyan-400 transition-colors" />
          <span className="sr-only">Search</span>
        </Button>

        {/* Account Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-cyan-500/10 transition-colors"
            >
              <User className="h-6 w-6 text-white hover:text-cyan-400 transition-colors" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {!user ? (
              <>
                <DropdownMenuLabel className="text-white">Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to="/account/login">
                  <DropdownMenuItem className="cursor-pointer">
                    Sign in
                  </DropdownMenuItem>
                </Link>
                <Link to="/account/register">
                  <DropdownMenuItem className="cursor-pointer">
                    Create account
                  </DropdownMenuItem>
                </Link>
              </>
            ) : (
              <>
                <DropdownMenuLabel className="text-white">
                  {user.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to="/account">
                  <DropdownMenuItem className="cursor-pointer">
                    Account settings
                  </DropdownMenuItem>
                </Link>
                <Link to="/account/orders">
                  <DropdownMenuItem className="cursor-pointer">
                    Order history
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Sign out
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Cart */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative hover:bg-cyan-500/10 transition-colors"
          onClick={onCartIconClick}
        >
          <ShoppingCart className="h-6 w-6 text-white hover:text-cyan-400 transition-colors" />
          {cartQuantity > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-cyan-400 text-xs font-medium text-black flex items-center justify-center">
              {cartQuantity}
            </span>
          )}
        </Button>
      </div>
    </div>
  );
} 