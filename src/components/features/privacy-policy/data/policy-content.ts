import {
    POLICY_ANSWER_EIGHT,
    POLICY_ANSWER_FIVE,
    POLICY_ANSWER_FOUR,
    POLICY_ANSWER_ONE,
    POLICY_ANSWER_SIX,
    POLICY_ANSWER_THREE,
    POLICY_ANSWER_TWO,
    POLICY_QUESTION_EIGHT,
    POLICY_QUESTION_FIVE,
    POLICY_QUESTION_FOUR,
    POLICY_QUESTION_ONE,
    POLICY_QUESTION_SEVEN,
    POLICY_QUESTION_SIX,
    POLICY_QUESTION_THREE,
    POLICY_QUESTION_TWO,
} from "@/constants";

export type Bullet = {
    content: string;
    link: string | undefined;
};

export type Content = {
    content: string;
    goTo: string;
};

export type QAndA = {
    question: string;
    answer: string;
    link: string | undefined;
};

export type Policy = {
    intro: {
        content: string;
        bullets: Bullet[];
    };
    section1: {
        title: string;
        content: string;
        link: string;
    };
    section2: {
        title: string;
        contents: Content[];
    };
    section3: QAndA[];
};

export const policy = {
    intro: {
        content: `The privacy policy of Willis Ventures, LLC (also referred to as "us", "we", "AiPlayground", or "aipg.io") outlines the reasons and methods behind the potential collection, storage, usage, and sharing or processing of your data when utilizing our services ("Services"). This includes instances such as:`,
        bullets: [
            {
                content: `Accessing our website at https://www.aipg.io or any other website of ours that connects to this privacy policy.`,
                link: "https://www.aipg.io",
            },
            {
                content: `Engaging with us in any capacity, including but not limited to events, sales, marketing, etc.`,
                link: undefined,
            },
        ],
    },
    section1: {
        title: "Inquiries or Concerns",
        content: `By reviewing our privacy policy, you can gain insight into your privacy rights and options. If you disagree with our guidelines and procedures, kindly refrain from using our Services. Should you have any inquiries or concerns, feel free to reach out to us at`,
        link: "aiforyou@aipg.io",
    },
    section2: {
        title: "Table of Contents",
        contents: [
            {
                content: POLICY_QUESTION_ONE,
                goTo: "#informationCollected",
            },
            {
                content: POLICY_QUESTION_TWO,
                goTo: "#howInformationIsCollected",
            },
            {
                content: POLICY_QUESTION_THREE,
                goTo: "#informationUtilization",
            },
            {
                content: POLICY_QUESTION_FOUR,
                goTo: "#informationProtection",
            },
            {
                content: POLICY_QUESTION_FIVE,
                goTo: "#optOutChoice",
            },
            {
                content: POLICY_QUESTION_SIX,
                goTo: "#childrenInformation",
            },
            {
                content: POLICY_QUESTION_SEVEN,
                goTo: "#lawsAndRegulations",
            },
            {
                content: POLICY_QUESTION_EIGHT,
                goTo: "#updateOccurrence",
            },
        ],
    },
    section3: [
        {
            question: POLICY_QUESTION_ONE,
            answer: POLICY_ANSWER_ONE,
            link: undefined,
        },
        {
            question: POLICY_QUESTION_TWO,
            answer: POLICY_ANSWER_TWO,
            link: undefined,
        },
        {
            question: POLICY_QUESTION_THREE,
            answer: POLICY_ANSWER_THREE,
            link: undefined,
        },
        {
            question: POLICY_QUESTION_FOUR,
            answer: POLICY_ANSWER_FOUR,
            link: undefined,
        },
        {
            question: POLICY_QUESTION_FIVE,
            answer: POLICY_ANSWER_FIVE,
            link: undefined,
        },
        {
            question: POLICY_QUESTION_SIX,
            answer: POLICY_ANSWER_SIX,
            link: undefined,
        },
        {
            question: POLICY_QUESTION_SEVEN,
            answer: POLICY_QUESTION_SEVEN,
            link: "aiforyou@aipg.io",
        },
        {
            question: POLICY_QUESTION_EIGHT,
            answer: POLICY_ANSWER_EIGHT,
            link: undefined,
        },
    ],
} as Policy;
