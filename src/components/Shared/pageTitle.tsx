import Image from "next/image";
import React from "react";

type Crumb = {
  label: string;
  href?: string;
};

export type PageTitleProps = {
  pageHeading: string;

  subHeading?: string;

  breadcrumbs?: Crumb[];

  height?: "sm" | "md" | "lg" | number;

  background?: {
    color?: string;
    imageUrl?: string;
    overlayOpacity?: number;
  };

  align?: "left" | "center";

  className?: string;
  containerClassName?: string;
};

const PageTitle: React.FC<PageTitleProps> = ({
  pageHeading,
  subHeading,
  breadcrumbs,
  height = "md",
  background,
  align = "left",
  className = "",
  containerClassName,

}) => {
  const heightClass =
    typeof height === "string"
      ? height === "sm"
        ? "min-h-28"
        : height === "lg"
        ? "min-h-24"
        : "min-h-24"
      : "";

  const rootStyle: React.CSSProperties = {};
  if (typeof height === "number") rootStyle.minHeight = height;
  if (background?.imageUrl) {
    rootStyle.backgroundImage = `url(${background.imageUrl})`;
    rootStyle.backgroundSize = "cover";
    rootStyle.backgroundPosition = "center";
  }
  if (background?.color) rootStyle.backgroundColor = background.color;

  const overlayOpacity =
    background?.overlayOpacity ?? (background?.imageUrl ? 0.6 : 0);

  return (
    <header
      className={[
        "relative w-full overflow-hidden border-b-4 border-b-white",
        heightClass,
        !background?.imageUrl && !background?.color ? "bg-black" : "",
        className,
      ].join(" ")}
      style={rootStyle}
    >
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
      )}

      <div
        className={[
          "relative h-full",
          containerClassName ?? "content-width container mx-auto px-4 sm:px-6 lg:px-8",
        ].join(" ")}
      >
        <div
          className={[
            "h-full flex flex-col justify-center gap-1",
            align === "center" ? "items-center text-center" : "items-start",
          ].join(" ")}
        >
          {breadcrumbs?.length ? (
            <nav aria-label="Breadcrumb" className="mb-1">
              <ol className="flex items-center gap-2 text-sm text-gray-300">
                {breadcrumbs.map((crumb, idx) => {
                  const isLast = idx === breadcrumbs.length - 1;
                  return (
                    <li key={`${crumb.label}-${idx}`} className="flex gap-2">
                      {crumb.href && !isLast ? (
                        <a href={crumb.href} className="hover:text-white">
                          {crumb.label}
                        </a>
                      ) : (
                        <span
                          className={isLast ? "text-white" : undefined}
                          aria-current={isLast ? "page" : undefined}
                        >
                          {crumb.label}
                        </span>
                      )}
                      {!isLast && <span className="text-gray-500">/</span>}
                    </li>
                  );
                })}
              </ol>
            </nav>
          ) : null}

          <h1 className="text-3xl sm:text-2xl md:text-4xl tracking-wide text-white">
            {pageHeading}
          </h1>

          {subHeading ? (
            <p className="text-base text-gray-300">{subHeading}</p>
          ) : null}
        </div>
     
      </div>
      
    </header>
  );
};

export default PageTitle;
