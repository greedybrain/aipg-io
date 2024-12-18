import { ArrowUpRight, BookmarkPlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Group from "@/components/layout/group";
import { TSelectAIToolWithRelations } from "@/db/drizzle/schemas";
import ToolBranding from "./tool-branding";
import { cn } from "@/utils/tailwind/tw-merge";

const AiToolCard = (tool: TSelectAIToolWithRelations & { idx: number }) => {
    // const { idx } = tool;

    // const renderPriceMessage = () => {
    //     if (tool.priceModel?.isFreeToUse) {
    //         return (
    //             <Group className={cn("space-y-1")}>
    //                 <p className={cn("opacity-65")}>{`${tool.name} is`}</p>
    //                 <p className={cn("text-2xl font-bold")}>Free to use</p>
    //             </Group>
    //         );
    //     }
    //     if (tool.priceModel?.minPrice) {
    //         return (
    //             <Group className={cn("space-y-1")}>
    //                 <p className={cn("opacity-65")}>Pay as low as</p>
    //                 <p className={cn("text-2xl font-bold")}>
    //                     {`$${tool.priceModel.minPrice}`}
    //                 </p>
    //             </Group>
    //         );
    //     }
    // };

    return (
        <div className="flex flex-col space-y-3 max-w-[400px] w-full">
            <Group
                className={cn(
                    "flex flex-col p-4 w-full bg-white border-[3px] border-app-tertiary rounded-2xl shadow-neobrut3",
                )}
            >
                {/* <a
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
                </a> */}
                <Group className={cn("mt-4 flex items-center justify-between")}>
                    <Group className={cn("flex items-center gap-x-3")}>
                        <ToolBranding
                            imageURL={tool.toolLogo.imageURL}
                            name={tool.name}
                        />
                        <Group className={cn("-space-y-1")}>
                            <p className={cn("font-bold text-lg")}>
                                {tool.name}
                            </p>
                            <p className={cn("text-app-tertiary/65")}>
                                {`by ${
                                    tool.developerOrCompanyName.length > 15
                                        ? `${tool.developerOrCompanyName.substring(
                                              0,
                                              10,
                                          )}...`
                                        : tool.developerOrCompanyName
                                }`}
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
                    <p className={cn("line-clamp-2")}>{tool.description}</p>
                    <ul
                        className={cn(
                            "flex overflow-x-scroll gap-x-3 items-center mt-2 py-2 drop-shadow-md no-scrollbar",
                        )}
                    >
                        {tool.tags?.map((tagObj) => {
                            return (
                                <li key={tagObj.id}>
                                    <p
                                        className={cn(
                                            "text-app-tertiary/75 drop-shadow-sm whitespace-nowrap py-2 px-3 rounded-full bg-gray-200/50 text-sm border",
                                        )}
                                    >{`#${tagObj.tag?.name}`}</p>
                                </li>
                            );
                        })}
                        {/* {tool.tags && tool.tags.length > 2 && (
                            <li className={cn("")}>{`+${
                                tool.tags.length - 2
                            } more`}</li>
                        )} */}
                    </ul>
                    <Group
                        className={cn("flex justify-between items-center mt-5")}
                    >
                        {/* {renderPriceMessage()} */}
                        <div />
                        <Button
                            size={"icon"}
                            className={cn(
                                "border-2 border-app-tertiary rounded-lg size-[50px] bg-app-tertiary shadow-neobrut1 flex items-center justify-center hover:shadow-neobrut1 active:scale-90",
                                {
                                    // "bg-app-primary": idx === 0,
                                },
                            )}
                        >
                            <ArrowUpRight
                                size={28}
                                className={cn("text-white", {
                                    // "text-app-tertiary": idx === 0,
                                })}
                            />
                        </Button>
                    </Group>
                </Group>
            </Group>
        </div>
    );
};

export default AiToolCard;
