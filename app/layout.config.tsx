import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { ChevronsDown } from "lucide-react";
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <img
          src="/dmx-logo.png"
          alt="dmx logo"
          width={60}
          fetchPriority="high"
        />
      </div>
    ),
    transparentMode: "top",
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
  githubUrl: "https://github.com/DataMatrix-RGIT",
};
