import "./hero.css";
import { useState, useEffect } from "react";

interface HeroProps {
  background?: string;
  title?: string;
  header?: string;
  subheader?: string;
  smallHeader?: string;
  text?: string;
  description?: string;
  className?: string;
}

export default function Hero({
  background,
  title,
  header,
  subheader,
  smallHeader,
  text,
  description,
  className = "",
}: HeroProps) {
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    if (!background) return;

    const img = new Image();
    img.onload = () => {
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.src = background;
  }, [background]);

  return (
    <section
      className={`hero ${className}`}
      style={{
        backgroundImage: background ? `url(${background})` : undefined,
        maxWidth: dimensions ? `${dimensions.width}px` : undefined,
        aspectRatio: dimensions ? `${dimensions.width} / ${dimensions.height}` : undefined,
      }}
    >
      {title && <div className="aesthetic">{title}</div>}
      {header && <h1>{header}</h1>}
      {subheader && <h2>{subheader}</h2>}
      {smallHeader && <h3>{smallHeader}</h3>}
      {text && <h4>{text}</h4>}
      {description && <p>{description}</p>}
      <div className="border" />
    </section>
  );
}
