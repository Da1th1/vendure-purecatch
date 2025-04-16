'use client';

import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TronSeparator } from '@/components/ui/tron-separator';
import { ChevronRight, ExternalLink } from 'lucide-react';

const navigation = [
  {
    title: "Shop",
    items: [
      {
        title: "Gloves",
        items: [
          { title: "All Goalkeeper Gloves", href: "/store/products?category=gloves&age=adult" },
        ],
      },
    ],
  },
  {
    title: "Discover",
    items: [
      {
        title: "The Brand",
        items: [
          { title: "Goalkeeper Glove Cuts", href: "/guides/glove-cuts" },
          { title: "Goalkeeper Glove Latex", href: "/guides/glove-latex" },
        ],
      },
      {
        title: "Parent Zone",
        items: [
          { title: "Your Ultimate Intro to Gloves", href: "/parent-guide" },
          { title: "What is Normal Glove Wear?", href: "/glove-wear" },
          { title: "Shop Durable Gloves", href: "/store/durable-gloves" },
        ],
      },
      {
        title: "Join the Squad",
        items: [
          { 
            title: "Instagram",
            href: "https://www.instagram.com/pure__catch",
            external: true,
          },
          {
            title: "TikTok",
            href: "https://www.tiktok.com/@purecatch8",
            external: true,
          },
          {
            title: "Facebook",
            href: "https://www.facebook.com/profile.php?id=61571779267667",
            external: true,
          },
        ],
      },
    ],
  },
  {
    title: "Help",
    items: [
      {
        title: "Get Help",
        items: [
          { title: "Support", href: "/support" },
          { title: "Make a Return", href: "/delivery-returns" },
          { title: "FAQ Hub", href: "/faq" },
        ],
      },
      {
        title: "Guides",
        items: [
          { title: "Glove Size Guide", href: "/guides/glove-size" },
          { title: "Glove Cut Guide", href: "/guides/glove-cuts" },
        ],
      },
      {
        title: "Tips & Tricks",
        items: [
          { title: "Glove Care", href: "/glove-care-guide" },
          { title: "Parent Zone", href: "/parent-zone" },
          { title: "How to Make Gloves Live Longer", href: "/glove-care-guide/make-gloves-last-longer" },
        ],
      },
    ],
  },
];

export function MobileNav() {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="flex flex-col gap-2 p-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          Home
        </Link>
        <TronSeparator />
        {navigation.map((item, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={item.title}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  {item.items.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">
                        {section.title}
                      </h4>
                      <div className="flex flex-col gap-2">
                        {section.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="flex items-center justify-between text-sm hover:text-cyan-400 transition-colors"
                            target={subItem.external ? "_blank" : undefined}
                            rel={subItem.external ? "noopener noreferrer" : undefined}
                          >
                            {subItem.title}
                            {subItem.external ? (
                              <ExternalLink className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </ScrollArea>
  );
} 