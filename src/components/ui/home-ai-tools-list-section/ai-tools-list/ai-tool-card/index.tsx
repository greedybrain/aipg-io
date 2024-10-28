import { BookmarkPlusIcon } from "lucide-react";
import Group from "@/components/layout/group";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { TSelectAIToolBase } from "@/db/drizzle/schemas";
import { cn } from "@/utils/tailwind/tw-merge";

const AiToolCard = (tool: TSelectAIToolBase) => {
    return (
        <div className="flex flex-col space-y-3 max-w-[400px] w-full">
            <Group
                className={cn(
                    "flex flex-col p-3 h-[525px] w-full bg-white border-4 border-app-tertiary rounded-2xl shadow-neobrut3",
                )}
            >
                <a
                    href={tool.officialWebsiteURL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={cn("w-full h-[225px] relative")}
                >
                    <Image
                        src={tool.webImages[0]}
                        alt={`${tool.name} web image`}
                        fill
                        className={cn(
                            "rounded-lg  border-2 border-app-tertiary drop-shadow-lg",
                        )}
                    />
                </a>
                <Group className={cn("mt-4 flex items-center justify-between")}>
                    <Group className={cn("flex items-center gap-x-3")}>
                        <div className={cn("w-[40px] h-[40px] relative")}>
                            <Image
                                src={tool.logo}
                                alt={`${tool.name} logo`}
                                fill
                                className={cn("rounded-full drop-shadow-lg")}
                            />
                        </div>
                        <Group className={cn("-space-y-1")}>
                            <p className={cn("")}>{tool.name}</p>
                            <p className={cn("text-sm text-app-tertiary/65")}>
                                {`by ${tool.developerOrCompanyName}`}
                            </p>
                        </Group>
                    </Group>
                    <Group className={cn("flex items-center gap-x-2")}>
                        {/* BADGE INDICATING FAVORITE/LIKE COUNT 
                        <Skeleton
                            className={cn(
                                "size-5 rounded-full border-2 border-app-tertiary/50",
                            )}
                        /> */}
                        <BookmarkPlusIcon
                            size={27}
                            className={cn("text-app-tertiary/65")}
                        />
                    </Group>
                </Group>
                <Group
                    className={cn("flex-1 mt-5 flex flex-col justify-between")}
                >
                    <p className={cn("line-clamp-4")}>{tool.description}</p>
                    <Group className={cn("flex justify-between items-center")}>
                        <Group className={cn("space-y-2")}>
                            <Skeleton
                                className={cn(
                                    "w-[75px] h-[12px] border-2 border-app-tertiary/50",
                                )}
                            />
                            <Skeleton
                                className={cn(
                                    "w-[100px] h-[20px] border-2 border-app-tertiary/50",
                                )}
                            />
                        </Group>
                        <Skeleton
                            className={cn(
                                "border-2 border-app-tertiary/50 size-[50px]",
                            )}
                        />
                    </Group>
                </Group>
            </Group>
        </div>
    );
};

export default AiToolCard;
