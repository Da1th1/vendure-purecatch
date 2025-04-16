import { Link, useLoaderData } from '@remix-run/react';
import { ShoppingCart, Menu, User } from 'lucide-react';
import { SearchBar } from '~/components/header/SearchBar';
import { useRootLoader } from '~/utils/use-root-loader';
import { useScrollingUp } from '~/utils/use-scrolling-up';
import { classNames } from '~/utils/class-names';
import { useTranslation } from 'react-i18next';
import { Button } from '~/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Logo } from '../Logo';
import { useState } from 'react';

interface HeaderProps {
  onCartIconClick: () => void;
  cartQuantity: number;
}

const navigation = [
  { name: "SHOP", href: "/collections" },
  { name: "CATCH & EARN", href: "/loyalty-program" },
  { name: "OUR FAMILY", href: "/family" },
  { name: "DISCOVER", href: "/discover" },
  { name: "HELP", href: "/help" },
];

export function Header({ onCartIconClick, cartQuantity }: HeaderProps) {
  const data = useRootLoader();
  const isSignedIn = !!data.activeCustomer.activeCustomer?.id;
  const isScrollingUp = useScrollingUp();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={classNames(
        'fixed top-0 left-0 right-0 z-50 transition-transform duration-300',
        isScrollingUp ? 'translate-y-0' : '-translate-y-full',
        'bg-black/80 backdrop-blur-sm border-b border-[#00c3ff]/20'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex items-center h-full">
          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden text-white hover:text-[#00c3ff]">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px] bg-black/95 border-r border-[#00c3ff]/20">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-2xl font-bold text-white hover:text-[#00c3ff] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation - Now Centered */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-5 text-sm font-medium tracking-wider text-white hover:text-[#00c3ff] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:block w-48">
              <SearchBar />
            </div>

            {/* Account Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-[#00c3ff]">
                  <User className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-black/95 border border-[#00c3ff]/20">
                {!isSignedIn ? (
                  <>
                    <DropdownMenuLabel className="text-white font-medium">Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-[#00c3ff]/20" />
                    <DropdownMenuItem asChild>
                      <Link to="/sign-in" className="text-white hover:text-[#00c3ff] cursor-pointer">
                        Login
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/register" className="text-white hover:text-[#00c3ff] cursor-pointer">
                        Register
                      </Link>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuLabel className="text-white font-medium">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-[#00c3ff]/20" />
                    <DropdownMenuItem asChild>
                      <Link to="/account" className="text-white hover:text-[#00c3ff] cursor-pointer">
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/account/orders" className="text-white hover:text-[#00c3ff] cursor-pointer">
                        Orders
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-[#00c3ff]/20" />
                    <DropdownMenuItem asChild>
                      <Link to="/sign-out" className="text-white hover:text-[#00c3ff] cursor-pointer">
                        Logout
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:text-[#00c3ff]"
              onClick={onCartIconClick}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartQuantity > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#00c3ff] text-[10px] font-medium text-white flex items-center justify-center">
                  {cartQuantity}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
