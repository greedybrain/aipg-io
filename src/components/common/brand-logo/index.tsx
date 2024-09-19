import Image, { ImageProps } from "next/image";

import Link from "next/link";

interface Props {
    imageProps?: Omit<ImageProps, "src" | "alt">;
}

const BrandLogo = ({ imageProps }: Props) => {
    return (
        <Link href="/">
            <Image
                src="/aipg-aiplayground-brand-logo.png"
                alt="AiPlayground logo"
                priority
                {...imageProps}
            />
        </Link>
    );
};

export default BrandLogo;
