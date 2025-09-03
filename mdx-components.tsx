import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { AlertBanner } from "@/components/landing/sections/alert-banner";
import ModeTab from "@/components/tabs/mode-tabs";
import { Slider } from "./components/landing/sections/carousel";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import * as TabsComponents from "fumadocs-ui/components/tabs";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ...TabsComponents,
    AlertBanner,
    Accordion,
    Accordions,
    ModeTab,
    Slider,
  };
}
