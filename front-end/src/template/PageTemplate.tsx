import SideBar from "@/components/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import React from "react";

type TemplateProps = {
  children: React.ReactNode;
};

export const PageTemplate = ({ children }: TemplateProps) => {
  return (
    <div className="flex items-center justify-center">
      <SideBar>
        <div className="bg-background min-h-screen">
          <div className="bg-sidebar h-full p-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            {children}
          </div>
        </div>
      </SideBar>
    </div>
  );
};
