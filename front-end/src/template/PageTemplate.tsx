import { DynamicBreadcrumbs } from "@/components/dynamicbreadcrumb";
import SideBar from "@/components/sidebar";
import React from "react";

type TemplateProps = {
  children: React.ReactNode;
};

export const PageTemplate = ({ children }: TemplateProps) => {
  return (
    <div className="flex items-center justify-center">
      <SideBar>
        <div className="flex bg-background min-h-screen ">
          <div className="bg-sidebar w-full h-full px-6">
            <DynamicBreadcrumbs />
            {/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/sales">Sales</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
            {children}
          </div>
        </div>
      </SideBar>
    </div>
  );
};
