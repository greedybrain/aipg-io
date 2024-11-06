import Group from "@/components/layout/group";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/utils/tailwind/tw-merge";

const AiToolCardLoading = () => {
    return (
        <div className="flex flex-col space-y-3 max-w-[400px] w-full">
            <Skeleton
                className={cn(
                    "flex flex-col p-3 w-full bg-white border-4 border-app-tertiary rounded-2xl shadow-neobrut3-loading",
                )}
            >
                {/* <Skeleton
                    className={cn(
                        "w-full border-2 border-app-tertiary/50 h-[225px]",
                    )}
                /> */}
                <Group className={cn("mt-4 flex items-center justify-between")}>
                    <Group className={cn("flex items-center gap-x-3")}>
                        <Skeleton
                            className={cn(
                                "border-2 border-app-tertiary/50 size-[65px] rounded-full",
                            )}
                        />
                        <Group>
                            <Skeleton
                                className={cn(
                                    "w-[125px] h-[18px] border-2 border-app-tertiary/50",
                                )}
                            />
                            <Skeleton
                                className={cn(
                                    "w-[100px] h-[16px] mt-1 border-2 border-app-tertiary/50",
                                )}
                            />
                        </Group>
                    </Group>
                    <Group className={cn("flex items-center gap-x-2")}>
                        <Skeleton
                            className={cn(
                                "size-5 rounded-full border-2 border-app-tertiary/50",
                            )}
                        />
                        <Skeleton
                            className={cn(
                                "w-5 h-6 border-2 border-app-tertiary/50",
                            )}
                        />
                    </Group>
                </Group>
                <Group
                    className={cn("flex-1 mt-5 flex flex-col justify-between")}
                >
                    <Group className={cn("space-y-2 mt-5")}>
                        <Skeleton
                            className={cn(
                                "w-full h-[20px] border-2 border-app-tertiary/50",
                            )}
                        />
                        <Skeleton
                            className={cn(
                                "w-full h-[20px] border-2 border-app-tertiary/50",
                            )}
                        />
                        <Skeleton
                            className={cn(
                                "w-full h-[20px] border-2 border-app-tertiary/50",
                            )}
                        />
                        {/* <Skeleton
                            className={cn(
                                "w-1/2 h-[16px] border-2 border-app-tertiary/50",
                            )}
                        /> */}
                    </Group>
                    <ul
                        className={cn(
                            "flex flex-wrap gap-y-3 gap-x-2 items-center my-7",
                        )}
                    >
                        {Array.from({ length: 3 }).map((_, idx) => {
                            return (
                                <li key={idx}>
                                    <Skeleton
                                        className={cn(
                                            "flex items-center w-[150px]  h-[20px] p-1 border-2 border-app-tertiary/50 gap-x-1",
                                        )}
                                    >
                                        #
                                        <Skeleton
                                            className={cn(
                                                "h-[10px] bg-app-tertiary/50 w-full",
                                            )}
                                        />
                                    </Skeleton>
                                </li>
                            );
                        })}
                    </ul>
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
            </Skeleton>
        </div>
    );
};

export default AiToolCardLoading;
