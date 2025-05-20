"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronsRight } from "lucide-react";

interface RouteSegment {
  name: string;
  path: string;
  hidden?: boolean;
}

const routeMappings: Record<string, RouteSegment> = {
  dashboard: { name: "Dashboard", path: "/dashboard" },
  sales: { name: "Sales", path: "/sales" },
  api: { name: "API", path: "/api", hidden: true },
};

const getRouteSegmentName = (
  segment: string,
  fullPath: string
): RouteSegment => {
  if (/^\d+$/.test(segment)) {
    const parentSegment = fullPath.split("/").slice(-2)[0];

    if (parentSegment === "users") {
      return { name: `User ${segment}`, path: `${fullPath}` };
    }
    if (parentSegment === "products") {
      return { name: `Product ${segment}`, path: `${fullPath}` };
    }
  }

  return (
    routeMappings[segment] || {
      name:
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
      path: fullPath,
    }
  );
};

export function DynamicBreadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);

  // Check if the current path should be hidden based on the first segment
  if (segments.length > 0 && routeMappings[segments[0]]?.hidden) {
    return null;
  }

  // Generate breadcrumb items
  const breadcrumbItems = segments.map((segment, index) => {
    // Build the path up to this segment
    const path = "/" + segments.slice(0, index + 1).join("/");
    const routeSegment = getRouteSegmentName(segment, path);

    // Return the breadcrumb item
    return {
      name: routeSegment.name,
      path: routeSegment.path,
      isLast: index === segments.length - 1,
    };
  });

  return (
    <Breadcrumb className="my-4">
      <BreadcrumbList className="flex gap-1">
        <ChevronsRight className="h-4 w-4 mr-1" />

        {breadcrumbItems.map((item, i) => (
          <React.Fragment key={i}>
            <BreadcrumbItem>
              {item.isLast ? (
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.path}>{item.name}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>

            {!item.isLast && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
