const toolIconSrc: Record<string, string> = {
    Unity: "/icons/unity.webp",
    "C#": "/icons/csharp.png",
    "C++": "/icons/cpp.png",
    Blender: "/icons/blender.webp",
    Java: "/icons/java.png",
    Krita: "/icons/krita.webp",
};

export const iconSrcForTool = (tool: string): string | undefined => toolIconSrc[tool];
