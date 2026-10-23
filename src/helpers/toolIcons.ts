import { IconType } from "react-icons";
import { FaCode } from "react-icons/fa";
import { SiBlender, SiCplusplus, SiSharp, SiUnity } from "react-icons/si";

const toolIcons: Record<string, IconType> = {
    Unity: SiUnity,
    "C#": SiSharp,
    "C++": SiCplusplus,
    Blender: SiBlender,
};

export const iconForTool = (tool: string): IconType => toolIcons[tool] ?? FaCode;
