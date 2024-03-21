import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

type BreadcrumbCommonProps = {}; // define all the props here

export const BreadcrumbCommon = ({}: BreadcrumbCommonProps) => {
  const [locationState, setLocationState] = useState<string[]>([]);

  const location = useLocation();
  const getPathArray = () => {
    return location.pathname.split("/").filter((item) => item !== "");
  };

  useEffect(() => {
    if (locationState) {
      const location = getPathArray();
      setLocationState(location);
    }
  }, [location]);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-indigo-600">
              <Link to="/dashboard" className="hover:text-indigo-600">
                Dashboard
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <TriangleRightIcon className="text-text-primary-gray" />
          {locationState.map((pathname: string | number, i: number) => {
            return (
              <>
                <BreadcrumbItem key={i}>
                  <BreadcrumbPage className="font-[400] text-text-primary-gray cursor-pointer capitalize">
                    {pathname}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};
