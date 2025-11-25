
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
        ? "min-h-24"
        : height === "lg"
        ? "min-h-28"
        : "min-h-[110px]"
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

  const showDefaultBackground = !background?.imageUrl && !background?.color;

  return (
    <header
      className={[
        "relative w-full",
        heightClass,
        showDefaultBackground ? "bg-slate-900" : "",
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
          containerClassName ?? "max-w-[1500px] container mx-auto px-4 sm:px-6",
        ].join(" ")}
      >
        <div
          className={[
            "relative h-full py-6",
            align === "center" ? "flex flex-col items-center text-center" : "flex flex-col items-start",
            "justify-center gap-3",
          ].join(" ")}
        >
          {breadcrumbs?.length ? (
            <nav aria-label="Breadcrumb" className="w-full max-w-3xl">
              <ol
                className={[
                  "flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em]",
                  align === "center" ? "justify-center text-white/80" : "text-slate-500",
                ].join(" ")}
              >
                {breadcrumbs.map((crumb, idx) => {
                  const isLast = idx === breadcrumbs.length - 1;
                  return (
                    <li key={`${crumb.label}-${idx}`} className="flex items-center gap-2">
                      {crumb.href && !isLast ? (
                        <a href={crumb.href} className="transition hover:text-primary text-inherit">
                          {crumb.label}
                        </a>
                      ) : (
                        <span
                          className={isLast ? "text-white" : "text-inherit"}
                          aria-current={isLast ? "page" : undefined}
                        >
                          {crumb.label}
                        </span>
                      )}
                      {!isLast && <span className="opacity-60">/</span>}
                    </li>
                  );
                })}
              </ol>
            </nav>
          ) : null}

          <div className="space-y-2 text-white">
            <h1 className="text-2xl font-semibold">
              {pageHeading}
            </h1>
            {subHeading ? (
              <p className="max-w-2xl text-sm md:text-base text-white/80">
                {subHeading}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageTitle;
